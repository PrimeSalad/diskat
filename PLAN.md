# Diskat: A Digital Safe Haven 💖

**Diskat** is a personalized, high-effort digital gift designed to serve as a companion for our relationship. It combines a thoughtful AI persona with a "Conflict Resolution Archive" to ensure we grow from every challenge.

---

## 🎨 Design Vision
- **Vibe:** Minimalist, warm, and intentional. Avoids "AI slop" by using custom-written prompts and a curated color palette.
- **Typography:** 
    - **Headings & UI:** `Poppins` (Bold, Modern, Clean)
    - **Body & Chat:** `Questrial` (Elegant, Readable, Soft)
- **Palette:** Soft pastels (Warm Cream, Dusty Rose, Sage Green) with deep charcoal for text.

---

## 🚀 Tech Stack (Frontend Only)
- **Framework:** Next.js (App Router) for seamless Vercel deployment.
- **Styling:** Tailwind CSS + Vanilla CSS for custom animations.
- **Animations:** Framer Motion for that "extra effort" feel (smooth transitions, heart pops).
- **Persistence:** `localStorage` to save notes and chat history without needing a complex backend.

---

## ✨ Core Features

### 1. The Diskat Bot (AI Companion)
A simulated chat experience (or integrated OpenAI API if keys are provided) that acts as a relationship coach and memory keeper.
- **Persona:** Patient, loving, and objective.
- **Function:** Listens to rants, provides comfort, or helps mediate small misunderstandings.

### 2. The Archive (Conflict Resolution Notes)
A dedicated space to document "Arguments We've Won Against" (not against each other, but against the problem).
- **Structure:** 
    - *What happened?*
    - *How did we feel?*
    - *The Solution:* (The "Fix" that prevents it from happening again).
- **Trigger:** If the chat bot detects a resolution, it prompts to "Archive the Lesson."

### 3. Digital Scrapbook (The "Effort" Section)
- A scrolling timeline of "Us" with interactive notes.
- Floating "Love Notes" that appear randomly.

---

## 🛠️ Implementation Plan

### Phase 1: Scaffolding (The Foundation)
- [ ] Initialize Next.js with TypeScript and Tailwind.
- [ ] Configure `google-fonts` for Poppins and Questrial.
- [ ] Setup basic layout with a fixed navigation sidebar/bottom bar.

### Phase 2: The Chat Interface
- [ ] Build a "bubble" chat UI using Framer Motion for message entrance.
- [ ] Implement a local message state.
- [ ] Create a "Persona Logic" – a set of pre-defined responses or a simple local "AI" engine.

### Phase 3: The Archive System
- [ ] Build a "Notes" dashboard.
- [ ] Implement CRUD operations using `localStorage`.
- [ ] Create "Resolution Cards" that look like polaroids or sticky notes.

### Phase 4: Polish & Deployment
- [ ] Add "Easter Eggs" (e.g., clicking the logo triggers a heart shower).
- [ ] Ensure mobile responsiveness (for checking on the go).
- [ ] Deploy to Vercel.

---

## 📝 Customization Notes
- *Note:* Since there is no backend, all data stays on her device. This makes it private and secure, but means the "effort" is in the UI and the pre-written content.
