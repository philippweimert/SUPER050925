import os
import logging
import uuid
from datetime import datetime
from pathlib import Path
from typing import Optional, List

import databases
import sqlalchemy
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi import FastAPI, APIRouter, HTTPException
from pydantic import BaseModel, Field, EmailStr
from starlette.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse

# Load environment variables from .env file
load_dotenv()

# --- Configuration ---
ROOT_DIR = Path(__file__).parent
DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://user:password@localhost/dbname")

# --- Database Setup ---
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# Define the 'contacts' table
contacts = sqlalchemy.Table(
    "contacts",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.String, primary_key=True, default=lambda: str(uuid.uuid4())),
    sqlalchemy.Column("name", sqlalchemy.String, nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String, nullable=False),
    sqlalchemy.Column("company", sqlalchemy.String, nullable=True),
    sqlalchemy.Column("phone", sqlalchemy.String, nullable=True),
    sqlalchemy.Column("position", sqlalchemy.String, nullable=True),
    sqlalchemy.Column("message", sqlalchemy.Text, nullable=False),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, nullable=False, default=datetime.utcnow),
)

# Create the table if it doesn't exist (synchronous call, fine for startup)
engine = sqlalchemy.create_engine(DATABASE_URL)
metadata.create_all(engine)


# --- Pydantic Models ---
class ContactForm(BaseModel):
    name: str = ""
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    position: Optional[str] = None
    message: str


# --- FastAPI App Setup ---
app = FastAPI(title="ACENCIA Backend")
api_router = APIRouter(prefix="/api")

# --- Logging Setup ---
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# --- Helper Functions ---
async def log_email_notification(contact_data: ContactForm):
    """Logs the contact form data as if sending an email."""
    try:
        body = f"""
Neue Kontaktanfrage über die Website:

Name: {contact_data.name}
E-Mail: {contact_data.email}
Unternehmen: {contact_data.company or 'Nicht angegeben'}
Telefon: {contact_data.phone or 'Nicht angegeben'}
Position: {contact_data.position or 'Nicht angegeben'}

Nachricht:
{contact_data.message}

---
Gesendet am: {datetime.now().strftime('%d.%m.%Y um %H:%M:%S')}
"""
        logger.info(f"Contact form submission (email log): {body}")
    except Exception as e:
        logger.error(f"Failed to log email notification: {str(e)}")
        # This function should not block the main flow, so we don't re-raise


# --- API Endpoints ---
@api_router.get("/")
async def root():
    return {"message": "Welcome to the ACENCIA API"}


@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactForm):
    """
    Handles contact form submission:
    1. Saves the data to the PostgreSQL database.
    2. Logs an email notification.
    """
    try:
        # 1. Save to database
        query = contacts.insert().values(
            id=str(uuid.uuid4()),
            name=contact_data.name,
            email=contact_data.email,
            company=contact_data.company,
            phone=contact_data.phone,
            position=contact_data.position,
            message=contact_data.message,
            created_at=datetime.utcnow(),
        )
        await database.execute(query)
        logger.info(f"Successfully saved contact from {contact_data.email} to database.")

        # 2. Log email notification
        await log_email_notification(contact_data)

        return {"status": "success", "message": "Nachricht erfolgreich empfangen und gespeichert."}

    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler bei der Verarbeitung Ihrer Anfrage.")


# --- App Lifecycle Events ---
@app.on_event("startup")
async def startup():
    logger.info("Application startup...")
    try:
        await database.connect()
        logger.info("Database connection established.")
    except Exception as e:
        logger.critical(f"Could not connect to the database: {e}")


@app.on_event("shutdown")
async def shutdown():
    logger.info("Application shutdown...")
    try:
        await database.disconnect()
        logger.info("Database connection closed.")
    except Exception as e:
        logger.error(f"Error during database disconnection: {e}")


# --- Middleware and Router ---
app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Serve Frontend ---
# This must be placed *after* the API router and *before* the catch-all route.
# It serves static files (like CSS, JS, images) from the React build directory.
app.mount("/static", StaticFiles(directory=ROOT_DIR / "../frontend/build/static"), name="static")


# This catch-all route serves the main `index.html` file for any path that
# is not an API route or a static file. This is crucial for client-side
# routing in a Single Page Application (SPA) like React.
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    index_path = ROOT_DIR / "../frontend/build/index.html"
    if not index_path.is_file():
        raise HTTPException(status_code=404, detail="Frontend not found. Build the frontend first.")
    return FileResponse(index_path)
