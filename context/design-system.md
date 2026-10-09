# Design System & UI Specifications

This document outlines the visual language, design tokens, UI components, and motion guidelines governing the Newelle Dev Portfolio (`newelle-dev-portfolio`).

---

## 🎨 Core Metaphor: The Developer's IDE

The interface avoids generic portfolio templates in favor of a cohesive **Modern Code Editor / IDE** aesthetic:
- **macOS / IDE Window Chrome:** Traffic light control buttons (Red, Yellow, Green) atop primary content panels.
- **Code Panes & Gutter Line Numbers:** Monospace line-numbered gutters reminiscent of VS Code / modern text editors.
- **Terminal Aesthetics:** Monospace typography, syntax highlighting tokens, and glowing terminal green status indicators.
- **Ambient Floating Icons:** Parallax floating tech stack icons drifting subtly in the background ([components/FloatingIcons.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/FloatingIcons.tsx)).

---

## 🌈 Color Palette & Design Tokens

Design tokens are declared via Tailwind CSS v4 `@theme` and `.dark` variables in [app/globals.css](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/app/globals.css):

### Color Token Reference

| Token Variable | Dark Mode (Default) | Light Mode | Description / Usage |
| :--- | :--- | :--- | :--- |
| `--color-background` | `hsl(0 0% 12%)` | `hsl(0 0% 98%)` | Canvas background |
| `--color-foreground` | `hsl(220 13% 91%)` | `hsl(220 13% 10%)` | Primary high-contrast text |
| `--color-card` | `hsl(0 0% 15%)` | `hsl(0 0% 100%)` | Elevated cards and cards header |
| `--color-panel` | `hsl(0 0% 15%)` | `hsl(0 0% 100%)` | Code editor containers and window bodies |
| `--color-panel-border` | `hsl(0 0% 18%)` | `hsl(220 13% 91%)` | Window outlines and divider borders |
| `--color-primary` | `hsl(174 72% 40%)` | `hsl(174 72% 40%)` | Accent Teal brand highlight (`#14b8a6`) |
| `--color-secondary` | `hsl(0 0% 18%)` | `hsl(220 14% 94%)` | Secondary surfaces, tabs, and chips |
| `--color-muted` | `hsl(0 0% 18%)` | `hsl(220 14% 94%)` | Subtle tag backgrounds and borders |
| `--color-muted-foreground` | `hsl(220 9% 64%)` | `hsl(220 9% 46%)` | Secondary text, captions, and descriptions |
| `--color-terminal-green` | `hsl(142 71% 45%)` | `hsl(142 71% 45%)` | Strings, success dots, live indicators |
| `--color-destructive` | `hsl(0 84% 60%)` | `hsl(0 84% 60%)` | Error states and window close dot |
| `--color-line-number` | `hsl(220 9% 46%)` | `hsl(220 9% 64%)` | Monospace editor gutter line numbers |
| `--color-glow-accent` | `hsl(174 72% 40%)` | `hsl(174 72% 40%)` | Radial glow accents behind focal elements |

### Semantic Window Controls
- **Close Button (Red):** `bg-red-500` / `#ff5f56`
- **Minimize Button (Yellow):** `bg-yellow-500` / `#ffbd2e`
- **Maximize Button (Green):** `bg-green-500` / `#27c93f`

---

## 🔤 Typography & Hierarchy

1. **Monospace Font (`font-mono`):**
   - Applied to section tags (`<Projects />`, `<Contact />`), IDE file tabs (`developer.ts`, `bio.md`), line numbers, and code blocks.
2. **Sans-Serif Font:**
   - Applied to natural body text, descriptions, and article copy for maximum legibility.
3. **Headings:**
   - Large hero titles: `text-5xl md:text-6xl font-bold font-sans`.
   - Section headers: `text-3xl md:text-4xl font-mono font-bold`.

---

## 🧩 Core UI Components

### 1. `CodeWindow` ([components/CodeWindow.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/CodeWindow.tsx))
- Reusable wrapper presenting content inside an IDE window frame.
- Features macOS-style traffic light header, optional file title tag, and clean bordered container.

### 2. `FloatingIcons` ([components/FloatingIcons.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/FloatingIcons.tsx))
- Renders an array of floating technical icons in the background with varied opacities, drift paths, and mouse parallax.

### 3. `ProjectCard` ([components/ProjectCard.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/ProjectCard.tsx))
- Displays individual project entries with preview image, title, summary, tech stack badges, and external action links (Live Demo, GitHub).
- Includes smooth hover scale and glowing border transitions.

### 4. `AboutBioWindow` & `SkillsModal` ([components/about/](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/about/))
- Presents personal background as code lines with line numbers.
- Displays interactive skill cards that can be expanded via modal dialog for deep-dive technical descriptions.

---

## 🎬 Motion & Interaction Principles

1. **Scroll-Triggered Reveals:**
   - Use Framer Motion's `useInView` hook with `margin: "-100px"` and `once: true` to prevent jarring re-triggering upon upward scrolling.
2. **Staggered Animations:**
   - Lists and badge grids use staggered delays (e.g., `delay: index * 0.1`) for an organic, progressive entrance.
3. **Micro-Interactions:**
   - Interactive buttons and cards apply subtle hover transforms (`scale(1.02)`, border glow, icon translation) without causing layout shifts.
