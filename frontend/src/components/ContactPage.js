import React, { useState, useEffect } from 'react';
import './ContactPage.css'; // Import the new CSS
import Header from "./Header";
// This component has been updated to align with the user's provided HTML script.
// The structure, form fields, and validation logic are implemented in a way
// that is idiomatic to React, using state management and conditional rendering,
// while producing the same end result and behavior as the original script.
import Footer from "./Footer";

const ContactPage = () => {
    const initialFormData = {
        name: '',
        email: '',
        company: '',
        phone: '',
        position: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (submitStatus === 'success') {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate email
        if (!formData.email) {
            newErrors.email = 'E-Mail ist erforderlich';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
        }

        // Validate message
        if (!formData.message) {
            newErrors.message = 'Nachricht ist erforderlich';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setSubmitStatus('success');
                setFormData(initialFormData); // Reset form
            } else {
                // Try to get error message from server, otherwise use a generic one
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData?.detail || 'Ein Fehler ist aufgetreten.';
                setSubmitStatus('error');
                setErrors({ form: errorMessage });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrors({ form: 'Netzwerkfehler. Bitte versuchen Sie es später erneut.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-acencia">
            <Header />
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <div className="form-container">
                    <h1 className="form-title">Nachricht senden</h1>
                    <p className="form-description">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>

                    {submitStatus === 'success' && (
                        <div className="success-message">
                            Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                        </div>
                    )}
                    {submitStatus === 'error' && errors.form && (
                         <div className="error-message" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e74c3c', borderRadius: '4px', background: '#fdd' }}>
                            {errors.form}
                        </div>
                    )}

                    <form id="contactForm" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ihr vollständiger Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="required">E-Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="ihre.email@beispiel.de"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">Unternehmen</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Ihr Unternehmen"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+49 123 456789"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">Ihre Position im Unternehmen</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                placeholder="HR, Betriebsrat, Mitarbeiter, Geschäftsführung (optional)"
                                value={formData.position}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="required">Nachricht</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Fragen zur betrieblichen Altersvorsorge..."
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                                className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <div className="error-message">{errors.message}</div>}
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
