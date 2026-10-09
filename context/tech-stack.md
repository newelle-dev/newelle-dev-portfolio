# Technology Stack & Tooling

This document outlines the complete technology ecosystem utilized across Newelle's portfolio codebase, along with the broader technical skills applied across his software engineering projects.

---

## 🛠️ Portfolio Repository Tech Stack

| Category | Technology | Version | Purpose in Codebase |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `^16.1.6` | Hybrid rendering, routing, font optimization, layout hierarchy |
| **Core UI Library** | React | `19.2.3` | Declarative component UI and state management |
| **Language** | TypeScript | `^5.0.0` | Strict type safety, interfaces, and compile-time verification |
| **Styling** | Tailwind CSS | `^4.0.0` | Modern CSS `@theme` tokens, utility-first styling |
| **Animations** | Framer Motion | `^12.24.7` | Staggered reveals, scroll triggers (`useInView`), micro-interactions |
| **Icons** | Lucide React | `^0.562.0` | Consistent, accessible iconography |
| **Theming** | Next Themes | `^0.4.6` | Theme switching (Dark/Light mode support) |
| **Utility Classes** | `clsx` + `tailwind-merge` | `^2.1.1` / `^3.4.0` | Class merging helper via `lib/utils.ts` (`cn()`) |
| **Animations Helper**| `tw-animate-css` | `^1.4.0` | Extended Tailwind keyframe animation utilities |
| **Linter** | ESLint & Next Config | `^9.0.0` / `16.1.1` | Static analysis and code quality assurance |
| **Deployment** | Vercel | — | Production builds, preview deploys, and Edge CDN delivery |

---

## 🧠 Comprehensive Engineering Skills Inventory

The following technical competencies reflect the developer's experience across web applications, backend services, and enterprise software:

### 1. Frontend Development
- **Next.js (App Router):** Layouts, route groups, server/client component boundaries, metadata APIs.
- **React 19:** Custom hooks, component state, refs, portals, and memoization.
- **TypeScript:** Strict type contracts, generics, discriminated unions, and safe API parsing.
- **Tailwind CSS 4:** CSS variables integration, responsive grid/flexbox layouts, custom themes.
- **Framer Motion:** Entrance animations, staggered lists, spring physics, and scroll triggers.
- **Responsive Web Design:** Mobile-first engineering tested against phones (375px), tablets (768px), and desktops.

### 2. Backend & API Engineering
- **Node.js & Express.js:** RESTful API route architecture, middleware pipelines, error-handling filters.
- **REST APIs:** Structured payloads, HTTP status codes, pagination, filtering, query handling.
- **Authentication & RBAC:** Session handling, JWT tokens, Supabase Auth, PIN-based fast authentication, role-based route guards.
- **Postman:** Endpoint testing, environment variables, response schema validation.

### 3. Databases & Data Management
- **Supabase (PostgreSQL):** Relational schema design, Row-Level Security (RLS), tables, foreign keys, triggers.
- **MySQL:** Relational tables and transactions (proven in enterprise RFID attendance systems).
- **Database Modeling:** Normalization, indexed lookups, one-to-many / many-to-many relationships.

### 4. Developer Workflow & Tools
- **Git & GitHub:** Feature branches, PR reviews, conventional commits, and clean development history.
- **Vercel:** Continuous integration, zero-config deploys, preview URLs, and environment configuration.
- **Figma:** Translating high-fidelity wireframes into responsive React components.
- **Systematic Debugging:** Bug reproduction, breakpoint analysis, DOM inspection, and automated lint verification.

---

## 📜 NPM Scripts

- `npm run dev`: Runs Next.js development server with hot-module reloading at `http://localhost:3000`.
- `npm run build`: Compiles production Next.js bundle and performs type-checking.
- `npm start`: Serves the built production bundle locally.
- `npm run lint`: Executes ESLint to verify codebase conformity.
