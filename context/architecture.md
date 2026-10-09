# Application Architecture & Component Structure

This document details the architectural layout, routing, component hierarchy, and data flow of the Newelle Dev Portfolio (`newelle-dev-portfolio`).

---

## 🏛️ High-Level Architecture

The project is built on **Next.js 16 App Router** in TypeScript, styled with **Tailwind CSS v4**, and animated with **Framer Motion**.

```
┌─────────────────────────────────────────────────────────────┐
│                       Root Layout                           │
│   (app/layout.tsx - ThemeProvider, Fonts, HTML Shell)       │
└──────────────────────────────┬──────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
     Main Landing Page                    Projects Route
      (app/page.tsx)                  (app/projects/page.tsx)
            │                                     │
     ┌──────┴────────────────────────┐     ┌──────┴───────────────┐
     │ • FloatingIcons (ambient)     │     │ • Full Project Grid  │
     │ • Navigation (header & menu)  │     │ • ProjectCard Items  │
     │ • HeroSection                 │     │ • Navigation Header  │
     │ • AboutSection                │     └──────────────────────┘
     │ • ProjectsSection             │
     │ • ContactSection              │
     └───────────────────────────────┘
```

---

## 📁 Directory Structure Breakdown

```
newelle-dev-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 import & CSS custom design tokens
│   ├── layout.tsx               # Root HTML document, ThemeProvider & metadata
│   ├── page.tsx                 # Single-page home route composing all sections
│   └── projects/
│       └── page.tsx             # Full projects catalog view (/projects)
├── components/
│   ├── AboutSection.tsx         # About wrapper section
│   ├── CodeWindow.tsx           # IDE window chrome frame (traffic lights + container)
│   ├── ContactSection.tsx       # Contact card, links, and footer copyright
│   ├── FloatingIcons.tsx        # Parallax animated background tech icons
│   ├── HeroSection.tsx          # Hero banner with typing IDE code snippet
│   ├── Navigation.tsx           # Header bar with responsive menu and logo
│   ├── NavLinks.tsx             # Modular nav link items
│   ├── ProjectCard.tsx          # Interactive project card with tags and demo links
│   ├── ProjectFeatureSection.tsx# Featured showcase highlight layout
│   ├── ProjectsSection.tsx      # Home projects showcase grid
│   ├── ThemeProvider.tsx        # Next-themes provider wrapper
│   ├── ThemeToggle.tsx          # Dark/Light mode toggle button
│   └── about/
│       ├── AboutBioWindow.tsx   # Code-style bio viewer with line numbers
│       ├── SkillsModal.tsx      # Deep-dive interactive skill modal dialog
│       ├── SkillsPreview.tsx    # Compact skills grid with "View All" trigger
│       └── about-data.ts        # Source data for bio lines and detailed skills
├── context/                     # Project knowledge base & AI context documentation
├── hooks/
│   └── use-mobile.tsx           # Window resize listener (MOBILE_BREAKPOINT = 768px)
├── lib/
│   ├── projects.ts              # Master array of project records
│   └── utils.ts                 # cn() class merging utility (clsx + tailwind-merge)
├── types/
│   ├── global.d.ts              # Global type extensions
│   └── types.ts                 # Core application types (Project interface)
└── public/
    └── project-img/             # Static project screenshots (WebP format)
```

---

## 🧭 Page Flow & Section Composition

### 1. `app/layout.tsx`
- Declares the root HTML and body tags.
- Configures global metadata: title, description, and OpenGraph defaults.
- Wraps application content inside `ThemeProvider` (`attribute="class"`, `defaultTheme="dark"`).

### 2. `app/page.tsx`
- Marked with `"use client"` to orchestrate client-side animations and interactions.
- Layers:
  1. `FloatingIcons`: Absolute/fixed background layer with `z-0`.
  2. `Navigation`: Sticky header at `z-50`.
  3. `<main>` Content Flow:
     - `#hero`: Welcome banner, typing code block, CTA jump buttons.
     - `#about`: Bio code window, skills preview, modal dialog trigger.
     - `#projects`: Featured project showcase grid and links to full catalog.
     - `#contact`: Interactive contact options, social links, and copyright footer.

### 3. `app/projects/page.tsx`
- Dedicated sub-route (`/projects`) rendering the entire catalog of projects from `lib/projects.ts`.
- Provides back navigation to the home page and full filtering/grid display.

---

## 🔄 Data Architecture & State Management

- **Zero Heavy State Libraries:** Avoids Redux or complex global stores; keeps client bundle ultra-lean.
- **Data Co-location:**
  - Projects data is centralized in [lib/projects.ts](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/lib/projects.ts).
  - Bio copy and skill explanations reside in [components/about/about-data.ts](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/about/about-data.ts).
- **Responsive Detection:**
  - `useMobile` hook reads `window.matchMedia` with a 768px breakpoint to toggle mobile nav drawer and compact layouts.
- **Client vs. Server Boundaries:**
  - Components with interactive state (typing animation, modal toggles, Framer Motion) are explicitly marked `"use client"`.
