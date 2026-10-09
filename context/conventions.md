# Codebase Conventions & Agent Guidelines

This document outlines the coding standards, patterns, and best practices to follow when modifying or extending the Newelle Dev Portfolio (`newelle-dev-portfolio`).

---

## ⚡ React & Next.js Conventions

### 1. App Router & Client Components
- Any component utilizing React hooks (`useState`, `useEffect`, `useRef`, `useLayoutEffect`), browser APIs (`window`, `document`), or `framer-motion` must include `"use client"` at the very top of the file before imports.
- Pure display wrappers and layout components that do not require client interactivity should remain Server Components when possible.

### 2. Class Composition & Utility Merging
- Always use the `cn(...)` helper from `@/lib/utils` to combine Tailwind classes conditionally:
  ```typescript
  import { cn } from "@/lib/utils";

  <div className={cn("px-4 py-2 rounded-lg bg-card", isActive && "border-primary text-primary")} />
  ```
- Avoid raw string concatenation for dynamic classes.

### 3. Responsive Breakpoints
- The application uses `768px` as the primary mobile-to-desktop transition point.
- When responsive JavaScript logic is required, consume the `useIsMobile()` hook from `@/hooks/use-mobile`.
- For CSS styling, use Tailwind's `md:` prefix (e.g., `text-sm md:text-base`, `flex-col md:flex-row`).

---

## 🛡️ TypeScript & Type Safety

### 1. Strict Typing
- Avoid using `any` or loose type assertions (`as unknown as ...`).
- Define explicit interfaces or types for all component props, data models, and utility parameters.

### 2. Centralized Model Definitions
- Common application-wide types belong in [types/types.ts](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/types/types.ts).
- Component-specific local interfaces (e.g., `interface CodeWindowProps`) may reside at the top of the component file.

---

## ♿ Accessibility & External Link Standards

### 1. External Links
- All external links (GitHub, LinkedIn, live demo links, WhatsApp) must include security attributes:
  ```tsx
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View live demo of ${project.title}`}
  >
    Live Demo
  </a>
  ```

### 2. Interactive Elements
- Use semantic `<button>` elements for client interactions (e.g., opening modals, scrolling to sections, toggling navigation).
- Ensure buttons with icon-only displays include an `aria-label` attribute for screen readers.

---

## 🎨 Design System Adherence

- **IDE Theme Integrity:** When introducing new UI panels, leverage the `<CodeWindow>` component or mirror its traffic light controls and monospace accents.
- **Theme Color Tokens:** Utilize predefined theme variables (`bg-background`, `text-foreground`, `border-panel-border`, `text-primary`, `text-terminal-green`) rather than hardcoded hex or arbitrary RGB values.
- **Micro-Animations:** Keep Framer Motion transitions fast and subtle (duration `0.2s` - `0.5s`). Use `useInView` with `once: true` to prevent repetitive triggering during scrolling.

---

## 🌿 Git & Conventional Commits

All commit messages in this repository must follow the Conventional Commits (v1.0.0) standard:

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Allowed Types:
- `feat`: A new user-facing feature or section.
- `fix`: A bug fix in UI or functionality.
- `docs`: Documentation updates (including files in `context/` or `README.md`).
- `style`: Changes that do not affect code logic (formatting, spacing).
- `refactor`: Code restructuring without adding features or fixing bugs.
- `perf`: Performance optimizations.
- `chore`: Dependency updates, tooling adjustments, configuration tweaks.

### Examples:
- `docs(context): create comprehensive suite of context documentation files`
- `feat(projects): add live demo link for VapeTrack PH`
- `fix(navigation): ensure mobile drawer closes upon link click`

---

## ✅ Safe-Edit Checklist for AI Agents

Before concluding any modification:
1. **Lint Check:** Run `npm run lint` and verify zero ESLint errors or unhandled warnings.
2. **Build Check:** Run `npm run build` to ensure static type checking and Next.js bundle compilation succeed.
3. **Responsive Verification:** Ensure alterations render properly on both mobile (375px) and desktop (>768px).
4. **Context Maintenance:** If data models, projects, or dependencies change, update the corresponding markdown files in `context/`.
