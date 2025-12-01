# 🎨 STRUTTURA PORTALE HTML - CORSO AI GENERATIVA
## Guida Tecnica e Design System

---

# PANORAMICA PROGETTO

## Obiettivo del Portale
Creare un sito web single-page interattivo da proiettare durante il corso, che funga sia da:
1. **Guida visiva** durante la presentazione
2. **Risorsa consultabile** post-corso dai partecipanti
3. **Repository** di prompt e template pronti all'uso

## Stack Tecnologico
- **HTML5** semantico
- **CSS3** con variabili custom e animazioni
- **JavaScript** vanilla per interattività
- **Zero dipendenze** esterne (funziona offline)

---

# STRUTTURA FILE

```
corso-ai-immobiliare/
│
├── index.html              # Pagina principale
├── css/
│   └── style.css          # Stili principali
├── js/
│   └── main.js            # Interattività
└── assets/
    ├── icons/             # Icone SVG inline o font
    └── images/            # Eventuali immagini
```

---

# DESIGN SYSTEM

## 1. PALETTE COLORI

```css
:root {
  /* Colori Primari - Tema Scuro Moderno */
  --bg-primary: #0a0a0f;           /* Sfondo principale - quasi nero */
  --bg-secondary: #12121a;          /* Sfondo cards */
  --bg-tertiary: #1a1a24;           /* Sfondo elementi interattivi */

  /* Accent - Gradiente Viola/Blu AI */
  --accent-primary: #8b5cf6;        /* Viola principale */
  --accent-secondary: #06b6d4;      /* Cyan */
  --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);

  /* Testo */
  --text-primary: #ffffff;          /* Testo principale */
  --text-secondary: #a1a1aa;        /* Testo secondario */
  --text-muted: #52525b;            /* Testo disabilitato */

  /* Stati */
  --success: #10b981;               /* Verde successo */
  --warning: #f59e0b;               /* Arancione warning */
  --error: #ef4444;                 /* Rosso errore */

  /* Effetti */
  --glow-purple: 0 0 40px rgba(139, 92, 246, 0.3);
  --glow-cyan: 0 0 40px rgba(6, 182, 212, 0.3);
}
```

## 2. TIPOGRAFIA

```css
/* Font Stack - Moderno e Leggibile */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Scale Tipografica */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px - Hero titles */
```

## 3. SPACING E LAYOUT

```css
/* Sistema 8px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */

/* Container */
--container-max: 1200px;
--container-padding: var(--space-6);

/* Border Radius */
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
```

## 4. COMPONENTI UI

### 4.1 Cards

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: var(--glow-purple);
  transform: translateY(-2px);
}

/* Card con gradient border */
.card-gradient {
  position: relative;
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
}

.card-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  padding: 1px;
  background: var(--accent-gradient);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

### 4.2 Bottoni

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--accent-gradient);
  color: white;
}

.btn-primary:hover {
  box-shadow: var(--glow-purple);
  transform: scale(1.02);
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.btn-secondary:hover {
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
}
```

### 4.3 Code Blocks (per i prompt)

```css
.code-block {
  background: var(--bg-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  overflow-x: auto;
  position: relative;
}

.code-block::before {
  content: 'PROMPT';
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  font-size: var(--text-xs);
  color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

/* Bottone copia */
.copy-btn {
  position: absolute;
  top: var(--space-2);
  right: var(--space-16);
  opacity: 0;
  transition: opacity 0.2s;
}

.code-block:hover .copy-btn {
  opacity: 1;
}
```

### 4.4 Badge e Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: 9999px;
  font-size: var(--text-xs);
  font-weight: 500;
}

.badge-purple {
  background: rgba(139, 92, 246, 0.15);
  color: var(--accent-primary);
}

.badge-cyan {
  background: rgba(6, 182, 212, 0.15);
  color: var(--accent-secondary);
}

.badge-module {
  background: var(--accent-gradient);
  color: white;
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
}
```

---

# STRUTTURA SEZIONI HTML

## SEZIONE 1: HERO / APERTURA

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     [Particelle animate / sfondo gradiente animato]         │
│                                                             │
│              AI GENERATIVA                                  │
│         PER IL REAL ESTATE                                  │
│                                                             │
│     Da utente base a Power User in 4 ore                    │
│                                                             │
│     ┌─────────────────┐  ┌─────────────────┐               │
│     │ Inizia il Corso │  │ Vai ai Prompt   │               │
│     └─────────────────┘  └─────────────────┘               │
│                                                             │
│     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                       │
│     Progress: Modulo 1 di 5                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementi:**
- Background: gradiente animato viola/cyan con particelle floating
- Titolo: font-size 60px, peso bold, effetto glow
- Sottotitolo: font-size 24px, colore secondario
- Due CTA buttons con effetto hover
- Progress bar per tracking moduli

## SEZIONE 2: NAVIGATION MODULI

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────┐ │
│  │    1    │ │    2    │ │    3    │ │    4    │ │   5   │ │
│  │ Fonda-  │ │  Prompt │ │  Casi   │ │Workflow │ │Pratica│ │
│  │ menta   │ │  Expert │ │  d'Uso  │ │Avanzati │ │Guidata│ │
│  │  45min  │ │  60min  │ │  75min  │ │  45min  │ │ 30min │ │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───────┘ │
│   [active]                                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementi:**
- 5 card cliccabili per navigazione rapida
- Stato active con glow e gradient border
- Icona + titolo + durata per ogni modulo
- Sticky navigation durante scroll

## SEZIONE 3: CONTENUTO MODULO (Template)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  MODULO 2                                                   │
│  ━━━━━━━━                                                   │
│  L'ARTE DEL PROMPT                                          │
│  "Il Prompt è Tutto"                                 60 min │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  2.1 Anatomia di un Prompt Efficace                  │  │
│  │  ──────────────────────────────────────              │  │
│  │                                                       │  │
│  │  Framework RICCA:                                     │  │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐            │  │
│  │  │  R  │ │  I  │ │  C  │ │  C  │ │  A  │            │  │
│  │  │Ruolo│ │Istr.│ │Cont.│ │Vinc.│ │Aspet│            │  │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘            │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────┐ ┌─────────────────────────┐   │
│  │ ❌ Prompt Debole        │ │ ✅ Prompt Power User    │   │
│  │                         │ │                         │   │
│  │ "Scrivi un annuncio    │ │ "Agisci come un        │   │
│  │  per una casa"         │ │  copywriter esperto... │   │
│  │                         │ │  [full prompt]         │   │
│  │                         │ │                         │   │
│  │         [COPIA]         │ │         [COPIA]        │   │
│  └─────────────────────────┘ └─────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementi:**
- Badge modulo con numero e gradiente
- Titolo modulo grande + tagline + durata
- Sottosezioni con accordion/tabs
- Confronto side-by-side prompt debole vs forte
- Bottone copia per ogni prompt
- Evidenziazione sintassi nei code block

## SEZIONE 4: ESERCIZI INTERATTIVI

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ⚡ ESERCIZIO PRATICO #3                                    │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  SFIDA:                                               │  │
│  │  Trasforma questo prompt debole in uno forte:         │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ "Fammi una descrizione di un appartamento"      │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  SUGGERIMENTI:                                        │  │
│  │  • Definisci un ruolo                                │  │
│  │  • Aggiungi contesto specifico                       │  │
│  │  • Specifica il formato output                       │  │
│  │                                                       │  │
│  │  ┌──────────────────────────────────┐               │  │
│  │  │ Mostra Soluzione               ▼ │               │  │
│  │  └──────────────────────────────────┘               │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementi:**
- Card evidenziata con bordo accent
- Icona fulmine per esercizi
- Testo sfida chiaro
- Suggerimenti espandibili
- Bottone "Mostra Soluzione" con accordion
- Timer opzionale per challenge

## SEZIONE 5: PROMPT LIBRARY

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📚 LIBRERIA PROMPT                                         │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │Annunci  │ │ Email   │ │ Analisi │ │ Script  │           │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
│   [active]                                                  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │  TEMPLATE: Generatore Annunci Multi-Piattaforma      │  │
│  │  ─────────────────────────────────────────────       │  │
│  │                                                       │  │
│  │  ```                                                  │  │
│  │  Sei un copywriter immobiliare esperto.              │  │
│  │  Genera un annuncio per:                             │  │
│  │                                                       │  │
│  │  PROPRIETÀ:                                          │  │
│  │  - Tipologia: [appartamento/villa/ufficio]           │  │
│  │  - Metratura: [X] mq                                 │  │
│  │  ...                                                 │  │
│  │  ```                                                 │  │
│  │                                                       │  │
│  │  [📋 Copia Prompt]  [📥 Scarica .txt]                │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elementi:**
- Tab navigation per categorie
- Card prompt con titolo e preview
- Syntax highlighting
- Bottoni: Copia, Scarica, Preferiti
- Filtro/ricerca prompt

## SEZIONE 6: FOOTER / RISORSE

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🎯 REGOLE D'ORO DEL POWER USER                            │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │  1  │ │  2  │ │  3  │ │  4  │ │  5  │                   │
│  │Cont.│ │Iter.│ │Salva│ │Sper.│ │Veri.│                   │
│  │è re │ │semp.│ │prom.│ │ment.│ │fica │                   │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                   │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━       │
│                                                             │
│  STRUMENTI CONSIGLIATI                                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │ ChatGPT  │ │  Claude  │ │ Perplexi │                    │
│  │  $20/m   │ │  $20/m   │ │  $20/m   │                    │
│  │  [Link]  │ │  [Link]  │ │  [Link]  │                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━       │
│                                                             │
│  © 2024 - Corso AI Generativa per Real Estate              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# ANIMAZIONI E INTERATTIVITÀ

## 1. Animazioni CSS

```css
/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Gradient background animation */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animated {
  background: linear-gradient(-45deg, #0a0a0f, #1a1a2e, #16213e, #0f3460);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

/* Glow pulse */
@keyframes glowPulse {
  0%, 100% { box-shadow: var(--glow-purple); }
  50% { box-shadow: var(--glow-cyan); }
}

.glow-pulse {
  animation: glowPulse 3s ease-in-out infinite;
}

/* Typing effect per titoli */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(40, end);
}
```

## 2. Interattività JavaScript

```javascript
// Funzionalità principali da implementare:

// 1. Smooth scroll navigation
// 2. Accordion per sezioni espandibili
// 3. Copy to clipboard per prompt
// 4. Tab switching per categorie
// 5. Progress tracking tra moduli
// 6. Intersection Observer per animazioni on-scroll
// 7. Dark/Light mode toggle (opzionale)
// 8. Timer per esercizi
// 9. Salvataggio preferiti in localStorage
```

---

# RESPONSIVE DESIGN

```css
/* Breakpoints */
--mobile: 480px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;

/* Mobile First Approach */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }

  .module-nav {
    flex-direction: column;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .code-block {
    font-size: var(--text-xs);
  }
}
```

---

# ELEMENTI GRAFICI SPECIALI

## 1. Icone (SVG Inline)
- Moduli: Brain, Sparkles, Building, Workflow, Target
- Azioni: Copy, Download, Check, Arrow, Play
- UI: Menu, Close, ChevronDown, Search

## 2. Illustrazioni
- Hero: abstract AI/neural network pattern
- Empty states: semplici illustrazioni line-art
- Background: subtle grid pattern + gradient

## 3. Effetti Speciali
- Glassmorphism sulle cards: `backdrop-filter: blur(10px)`
- Gradient borders con pseudo-elementi
- Neon glow su elementi focus
- Particelle animate (opzionale, con canvas)

---

# ACCESSIBILITÀ

```css
/* Focus states */
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* High contrast text */
.high-contrast {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

# PERFORMANCE

1. **Font Loading**
   - Preload font critici
   - Font-display: swap

2. **CSS**
   - Critical CSS inline nell'head
   - Resto del CSS async

3. **Images**
   - Lazy loading
   - WebP con fallback
   - Dimensioni appropriate

4. **JavaScript**
   - Defer non-critical scripts
   - Event delegation
   - Debounce scroll events

---

# CHECKLIST PRE-LANCIO

- [ ] Testato su Chrome, Firefox, Safari, Edge
- [ ] Responsive su mobile, tablet, desktop
- [ ] Tutti i link funzionanti
- [ ] Copia prompt funzionante
- [ ] Animazioni smooth (60fps)
- [ ] Accessibilità verificata
- [ ] Performance > 90 Lighthouse
- [ ] Funziona offline
- [ ] Stampabile (versione print CSS)

---

*Documento tecnico per sviluppo portale corso AI*
