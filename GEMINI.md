# Project Diskat: Instructions & Standards (Static Gift)

This document outlines the standards for the **Diskat** static gift page.

## 🎨 Design Philosophy
- **Anti-AI Slop:** NO generic templates. Every element must feel custom. 
- **Typography:**
    - Headings/Bold: `Poppins`
    - Body/Intimate Text: `Questrial`
- **Animations:** Mandatory `framer-motion`. Focus on "Scroll Reveals" and "Smooth Stagger" effects.
- **Palette:** Cream (#FDFCF0), Rose (#E29595), Charcoal (#2D2D2D).

## 🛠️ Technical Constraints
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS + custom SVG animations.
- **Deployment:** Vercel (Static Export).
- **Interactivity:** No backend. All interactions are frontend-only.

## 📂 Components
- `Hero.tsx`: Big, impactful greeting.
- `Letter.tsx`: Interactive envelope/letter component.
- `Timeline.tsx`: A chronological journey of memories.
- `Footer.tsx`: A simple "I love you" with a custom SVG animation.
