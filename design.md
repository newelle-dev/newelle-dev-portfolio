# Design System & Architecture Specification

**Project:** Newelle Dev Portfolio (`newelle-dev`)  
**Developer:** Newelle Alec Quiambao  
**Role:** Full-Stack Developer  
**Status:** Living Document  
**Version:** 1.0.0  

---

## 1. Executive Summary & Design Vision

### 1.1 Brand Identity
The portfolio serves as the professional presentation of **Newelle Alec Quiambao**, a Full-Stack Developer specializing in practical web applications, business systems (e.g., enterprise attendance tracking, sales & inventory SaaS), and modern cloud architectures.

### 1.2 Core Metaphor: The Developer's IDE
The interface design is anchored around the **Code Editor / Modern IDE** visual metaphor. Rather than relying on generic modern-minimalist templates, the UI immerses visitors in a familiar developer environment:
- **Window Chrome:** macOS/IDE-style traffic light window controls (red, yellow, green) framing interactive components.
- **Code Panes & Gutter Lines:** Information presented as structured code files (`developer.ts`, `about.md`, `contact.json`) with numbered gutters and syntax-highlighted tokens.
- **Terminal Aesthetics:** Blinking monospace cursors, command tags, and terminal-green outputs.
- **Ambient Floating Ecosystem:** Subtle background parallax icons representing the developer's technical stack floating responsive to mouse movement.

---

## 2. Color System & Design Tokens

The color palette is built using modern CSS variables defined in [app/globals.css](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/app/globals.css) and wired into Tailwind CSS v4's `@theme` directive. It supports seamless Light and Dark modes.

### 2.1 Color Palette Table

| Token Name | Light Mode (HSL) | Dark Mode (HSL) | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-background` | `hsl(0 0% 98%)` | `hsl(0 0% 12%)` | Main canvas background |
| `--color-foreground` | `hsl(220 13% 10%)` | `hsl(220 13% 91%)` | Primary high-contrast text |
| `--color-card` | `hsl(0 0% 100%)` | `hsl(0 0% 15%)` | Elevated cards and chrome headers |
| `--color-card-foreground` | `hsl(220 13% 10%)` | `hsl(220 13% 91%)` | Text on card surfaces |
| `--color-panel` | `hsl(0 0% 100%)` | `hsl(0 0% 15%)` | Editor windows, modal bodies |
| `--color-panel-border` | `hsl(220 13% 91%)` | `hsl(0 0% 18%)` | Panel and window boundaries |
| `--color-primary` | `hsl(174 72% 40%)` | `hsl(174 72% 40%)` | Accent teal / brand highlight |
| `--color-primary-foreground` | `hsl(0 0% 100%)` | `hsl(0 0% 100%)` | Text on primary elements |
| `--color-secondary` | `hsl(220 14% 94%)` | `hsl(0 0% 18%)` | Muted backgrounds, window tabs |
| `--color-secondary-foreground` | `hsl(220 13% 10%)` | `hsl(220 13% 91%)` | Text on secondary elements |
| `--color-muted` | `hsl(220 14% 94%)` | `hsl(0 0% 18%)` | Subtle borders, chip backgrounds |
| `--color-muted-foreground` | `hsl(220 9% 46%)` | `hsl(220 9% 64%)` | Subtitles, labels, secondary metadata |
| `--color-accent` | `hsl(174 72% 40%)` | `hsl(174 72% 40%)` | Interactive hover highlights |
| `--color-destructive` | `hsl(0 84% 60%)` | `hsl(0 84% 60%)` | Error / window close dot |
| `--color-terminal-green` | `hsl(142 71% 45%)` | `hsl(142 71% 45%)` | Strings, window maximize dot, status |
| `--color-line-number` | `hsl(220 9% 64%)` | `hsl(220 9% 46%)` | Editor gutter numbers |
| `--color-glow-accent` | `hsl(174 72% 40%)` | `hsl(174 72% 40%)` | Radial glow illumination |

### 2.2 Semantic & Special Accent Colors
- **Window Traffic Lights:**
  - Close: `#ff5f56` / `bg-destructive` / `bg-red-500`
  - Minimize: `#ffbd2e` / `bg-yellow-500`
  - Maximize: `#27c93f` / `bg-terminal-green` / `bg-green-500`
- **Gradient Accents:**
  - Teal-to-Emerald: `bg-linear-to-r from-primary to-emerald-400`
  - Code syntax highlights: Comments (`text-emerald-400`), Keywords (`text-purple-400`), Strings (`text-terminal-green`), Keys (`text-primary`).

---

## 3. Typography Hierarchy

The typography pairs an ultra-clean humanist sans-serif with a technical monospace font, creating contrast between conversational content and code-centric data structures.

| Hierarchy / Usage | Font Family | Size / Leading | Weight | Example Application |
| :--- | :--- | :--- | :--- | :--- |
| **Display Heading 1** | Geist Sans / Inter | `text-5xl md:text-6xl` | Bold (700) | Hero title (`Hello, I'm Newelle.`) |
| **Section Headings** | Geist Mono / JetBrains Mono | `text-3xl md:text-4xl` | Bold (700) | `<About />`, `<Projects />`, `<Contact />` |
| **Subheadings / Lead** | Geist Sans / Inter | `text-xl md:text-2xl` | Normal / Medium | Hero role summary |
| **Card / Modal Headings** | Geist Sans / Inter | `text-xl md:text-2xl` | Semi-bold (600) | Project titles, modal headers |
| **Code & Editor Body** | Geist Mono / JetBrains Mono | `text-sm md:text-base` | Regular (400) | Gutter code, `developer.ts`, `about.md` |
| **Badges / Meta Tags** | Geist Mono / JetBrains Mono | `text-xs md:text-sm` | Medium (500) | Tech stack badges, window tabs |
| **Body Text** | Geist Sans / Inter | `text-base` / `leading-relaxed` | Regular (400) | Project descriptions, biography text |

---

## 4. Layout & Spacing Architecture

The application adopts a responsive layout structure wrapped in a persistent ambient backdrop.

```
+-------------------------------------------------------------------------+
| Fixed Sticky Navigation Bar (Glassmorphic blur, logo, nav links, theme) |
+-------------------------------------------------------------------------+
| Floating Icons Layer (Pointer-events-none, z-0, parallax physics)       |
+-------------------------------------------------------------------------+
| [Hero Section]                                                          |
|   - Heading + Headline                                                  |
|   - CodeWindow: Typewriter animation (developer.ts)                     |
|   - Primary & Secondary CTA Buttons                                     |
+-------------------------------------------------------------------------+
| [About Section]                                                         |
|   - Section Header: <About />                                           |
|   - AboutBioWindow: CodeWindow (about.md) with numbered gutter          |
|   - SkillsPreview: Featured skill badges + "View All Skills" modal CTA  |
|   - SkillsModal: Expanded dialog with categorized skill explanations    |
+-------------------------------------------------------------------------+
| [Featured Projects Section]                                             |
|   - Section Header: <Featured Projects />                               |
|   - Responsive 2-column Grid of ProjectCard components                 |
|   - "View All Projects" CTA link to /projects                           |
+-------------------------------------------------------------------------+
| [Contact Section]                                                       |
|   - Section Header: <Contact />                                         |
|   - Terminal/JSON formatted CodeWindow with live contact actions        |
+-------------------------------------------------------------------------+
| Footer: Minimal status badge & copyright notice                         |
+-------------------------------------------------------------------------+
```

### 4.1 Grid & Container Boundaries
- **Narrow Content Container (`max-w-4xl` ~ 896px):** Used for Hero, About, and Contact sections to ensure optimal reading length (60–75 characters per line).
- **Wide Catalog Container (`max-w-6xl` ~ 1152px):** Used for Navigation and the Projects showcase to accommodate multi-column grid layouts and side-by-side feature presentations.
- **Section Padding:** Consistent vertical cadence of `py-24 px-4` or `py-20 px-6` providing breathable separation between key chapters.

---

## 5. Signature Components & Patterns

### 5.1 `CodeWindow` Component
Defined in [components/CodeWindow.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/CodeWindow.tsx).
- **Purpose:** Primary visual wrapper providing the IDE window chrome.
- **Anatomy:**
  1. **Window Header:** Secondary background, panel border bottom, 3 traffic light circular dots (Close, Minimize, Expand), centered or left-aligned `fileName` tab (e.g., `developer.ts`, `about.md`).
  2. **Window Canvas:** Overflow-x scrollable region preserving indentation and monospace whitespace.
  3. **AutoWidth Support:** Dynamically adjusts width to text dimensions while constraining to viewport boundaries.

### 5.2 Dynamic Typing Simulator
Implemented inside [components/HeroSection.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/HeroSection.tsx).
- Simulates real-time coding of an object definition (`const newelle = { ... }`).
- Features a pre-measurement canvas (`measurerRef`) that locks the container width on initial render to prevent layout shifts (CLS = 0).
- Employs a blinking terminal block cursor (`terminal-cursor`) powered by a pure CSS step animation.

### 5.3 Interactive Floating Parallax Icons
Defined in [components/FloatingIcons.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/FloatingIcons.tsx).
- Twelve distinct Lucide tech stack icons scattered across the coordinate plane (`Code2`, `Terminal`, `Database`, `Cpu`, `Layers`, `Zap`, `Github`, etc.).
- Connected to mouse coordinates through Framer Motion's `useMotionValue`, `useTransform`, and `useSpring` (stiffness: 50, damping: 20) for smooth organic inertia.
- Continuous subtle vertical oscillation (`y: [0, -20, 0]`) with opacity breathing (`0.08` to `0.15`).

### 5.4 `ProjectCard` vs. `ProjectFeatureSection`
- **`ProjectCard` (Home Showcase):**
  - Contained inside an IDE window frame with header dots.
  - Aspect-video screenshot with hover zoom effect (`scale-105` over 700ms).
  - Quick action links (GitHub repository, live application).
  - High-density pill tags for technology stacks.
- **`ProjectFeatureSection` (`/projects` Page):**
  - Alternating asymmetric split layout (Image left / Text right, then reversed).
  - Deep architectural descriptions, full technology stack chips, and primary action buttons.

### 5.5 `SkillsModal` & `SkillsPreview`
Defined in [components/about/SkillsModal.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/about/SkillsModal.tsx).
- Modal overlay with `backdrop-blur-md` and `bg-background/85`.
- Accessible dialog semantics (`role="dialog"`, `aria-modal="true"`, `Escape` key capture, body scroll lock).
- Staggered entrance animations for each skill description card.

---

## 6. Motion & Interaction Design

| Interaction Point | Technique / Trigger | Timing & Easing | Effect |
| :--- | :--- | :--- | :--- |
| **Section Reveal** | Framer Motion `useInView` (`margin: "-100px"`) | `0.5s - 0.6s easeOut` | Elements slide up (`y: 20 -> 0`) with opacity fade-in |
| **Parallax Background** | Pointer move tracking via `useSpring` | Continuous damped spring | Multi-directional ambient float |
| **Card Hover** | CSS `group-hover` & transition utilities | `500ms cubic-bezier` | Border transitions to `primary/50`, soft cyan glow (`glow-accent-sm`) |
| **Image Hover** | Image scaling inside overflow container | `700ms ease-out` | 105% scale zoom |
| **Blinking Cursor** | CSS `@keyframes blink` | `1s step-end infinite` | Alternating opacity (100% -> 0%) simulating shell prompt |
| **Modal Dialog** | Framer Motion `AnimatePresence` | `250ms easeOut` | Scale `0.96 -> 1.0` with backdrop alpha fade |

---

## 7. Accessibility & Performance Guidelines

1. **Accessibility (a11y):**
   - High contrast ratios maintained across light and dark modes according to WCAG AA guidelines.
   - All interactive icons (GitHub, ExternalLink, Close buttons) provide clear `aria-label` descriptors.
   - Keyboard navigation supported across all dialogs, modal traps, and focus rings.
   - Decorative animations (`FloatingIcons`) are explicitly hidden from screen readers via `aria-hidden="true"`.
2. **Performance Optimization:**
   - Next.js Font Optimization with `--font-geist-sans` and `--font-geist-mono` for zero layout shift font loading.
   - Images formatted with modern `.webp` compression and aspect ratio containers.
   - CSS-driven transforms (`translate3d`, `opacity`, `scale`) ensuring GPU acceleration without layout recalculations.
   - Passive event listeners and spring damping for cursor tracking to avoid thread blockage.

---

## 8. Directory & Design Token Map

```
newelle-dev-portfolio/
├── app/
│   ├── globals.css          # Design tokens, CSS variables, @theme, custom utilities
│   ├── layout.tsx           # Global font definitions & ThemeProvider wrapper
│   ├── page.tsx             # Single-page portfolio composition
│   └── projects/
│       └── page.tsx         # Detailed projects catalog route
├── components/
│   ├── CodeWindow.tsx       # Core IDE window chrome component
│   ├── FloatingIcons.tsx    # Parallax ambient background layer
│   ├── HeroSection.tsx      # Landing hero with typewriter simulator
│   ├── Navigation.tsx       # Glassmorphic header & mobile navigation
│   ├── ProjectCard.tsx      # Featured project card with IDE header
│   ├── ProjectFeatureSection.tsx # Asymmetric project case study block
│   ├── ThemeToggle.tsx      # System/Light/Dark mode switcher
│   └── about/
│       ├── AboutBioWindow.tsx   # Code-styled biography pane
│       ├── SkillsModal.tsx      # Detailed skill catalog dialog
│       └── SkillsPreview.tsx    # Compact skills summary badges
└── lib/
    ├── projects.ts          # Structured project data & links
    └── utils.ts             # Tailwind class merge utility (cn)
```
