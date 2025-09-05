# ACENCIA Design Guidelines - Corporate Dark Theme

## Farbpalette

### Primärfarben
- **Primary 1 (Hintergrund)**: `#001F3C` → `bg-acencia`
- **Primary 2 (Accent Blue)**: `#98a9c3` → `bg-acencia-blue` / `text-acencia-blue`
- **Primary 3 (Light Blue)**: `#e3ebf2` → `bg-acencia-blue-light`
- **Primary 4 (White/Cards)**: `#FFFFFF` → `bg-white`

### Sekundärfarben
- **Secondary 1 (Orange/CTA)**: `#fa9939` → `bg-acencia-orange` / `text-acencia-orange`
- **Secondary 2 (Light Beige)**: `#f8dcbf` → `bg-acencia-orange-light`

### Verwendung
- **Seitenhintergrund**: Immer `bg-acencia` (#001F3C)
- **Haupttext**: `text-white` auf dunklen Hintergründen
- **Untertitel/Beschreibungen**: `text-acencia-blue` 
- **Cards/Boxen**: `bg-white` für optimalen Kontrast
- **Buttons (Primary)**: `bg-acencia-orange hover:bg-acencia-orange/90`
- **Buttons (Secondary)**: `border-acencia-blue hover:border-white text-acencia-blue hover:text-white`

## Typografie

### Schriftarten
- **Headlines/Überschriften**: `font-heading` → **Tenor Sans** (serif)
- **Body/Fließtext**: `font-sans` → **Open Sans** (sans-serif)

### Anwendung
```jsx
// Headlines
<h1 className="font-heading text-white">Hauptüberschrift</h1>
<h2 className="font-heading text-white">Sektion Titel</h2>
<h3 className="font-heading text-gray-900">Card Titel (auf weißen Cards)</h3>

// Body Text
<p className="text-acencia-blue">Beschreibungstext</p>
<p className="text-white">Haupttext auf dunklem Hintergrund</p>
<p className="text-gray-600">Text auf weißen Cards</p>
```

## Layout-Prinzipien

### Container
- **Max-Width**: `max-w-[1200px] mx-auto`
- **Padding**: `px-6 md:px-8`
- **Sections**: `py-16 md:py-20`

### Grid System
- **12-Column Grid**: `grid-cols-1 md:grid-cols-12`
- **Card Grids**: `grid-cols-1 md:grid-cols-3` oder `md:col-span-4`
- **Gaps**: `gap-6 md:gap-8`

## Component Styling

### Header
```jsx
<header className="sticky top-0 w-full z-50 bg-acencia border-b border-acencia-blue/30">
  <span className="text-white font-heading">ACENCIA</span>
  <nav className="text-acencia-blue hover:text-white">Navigation</nav>
</header>
```

### Hero Sections
```jsx
<section className="bg-acencia py-20 lg:py-24">
  <h1 className="font-heading text-white">
    Titel <span className="text-acencia-orange">Orange Akzent</span>
  </h1>
  <p className="text-acencia-blue">Untertitel</p>
</section>
```

### Cards
```jsx
<div className="bg-white border border-gray-100 rounded-lg p-6 hover:bg-gray-50">
  <h3 className="font-heading text-gray-900">Card Titel</h3>
  <p className="text-gray-600">Card Text</p>
</div>
```

### Buttons

#### Primary Button (Orange)
```jsx
<button className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia">
  Primary Action
</button>
```

#### Secondary Button (Outline)
```jsx
<button className="border border-acencia-blue hover:border-white text-acencia-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
  Secondary Action
</button>
```

### Icons & Visual Elements
- **Benefit Icons**: `bg-acencia-orange/20` mit `text-acencia-orange`
- **Video Placeholder**: `bg-white/10 border-acencia-blue/30`
- **Divider**: `border-acencia-blue/30`

## Section Backgrounds

### Alternierende Hintergründe
- **Hauptsections**: `bg-acencia`
- **Footer**: `bg-acencia-light` (etwas heller)
- **Cards bleiben immer**: `bg-white`

## Animation & Transitions
- **Standard Transition**: `transition-colors duration-200`
- **Hover Effects**: Subtle opacity/color changes
- **Focus States**: `focus:ring-2 focus:ring-acencia-orange focus:ring-offset-acencia`

## Implementierung Checklist

### Für jede neue Seite:
- [ ] Seitenhintergrund: `bg-acencia`
- [ ] Headlines: `font-heading text-white`
- [ ] Untertitel: `text-acencia-blue`
- [ ] Cards: `bg-white` mit `text-gray-900/600`
- [ ] Primary Buttons: Orange (`bg-acencia-orange`)
- [ ] Secondary Buttons: Blue outline
- [ ] Icons: Orange accent (`text-acencia-orange`)
- [ ] Navigation: Blue-to-white hover
- [ ] Footer: `bg-acencia-light`

## Tailwind Config Integration

Die Farben sind bereits in `tailwind.config.js` definiert:

```javascript
colors: {
  acencia: {
    DEFAULT: '#001f3c',
    dark: '#001529',
    light: '#0d2847',
    blue: '#98a9c3',
    'blue-light': '#e3ebf2',
    white: '#ffffff',
    orange: '#fa9939',
    'orange-light': '#f8dcbf'
  }
}
```

## Wichtige Hinweise
- **Konsistenz**: Alle Seiten folgen diesem Schema
- **Kontrast**: Weiße Cards sorgen für optimale Lesbarkeit
- **Hierarchie**: Headlines (Tenor Sans) vs. Body (Open Sans)
- **Interaktivität**: Orange für alle CTAs und wichtige Aktionen
- **Professionalität**: Dunkles, corporate Design für Enterprise-Zielgruppe