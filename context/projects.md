# Portfolio Projects Catalog

This document details the featured and notable projects created by Newelle Alec Quiambao, as well as the data schema used to render them across the portfolio.

---

## 🚀 Featured Projects

### 1. VapeTrack PH (Sales & Inventory Management System)

- **Category:** Full-Stack Business SaaS / Web Application
- **Live URL:** [https://vapetrack-ph.vercel.app/](https://vapetrack-ph.vercel.app/)
- **Repository:** [https://github.com/newelle-dev/vapetrack-ph](https://github.com/newelle-dev/vapetrack-ph)
- **Preview Image:** `/project-img/vapetrack-ph.webp`
- **Tech Stack:**
  - Next.js 16 (App Router)
  - TypeScript
  - Supabase (PostgreSQL)
  - Tailwind CSS
  - Lucide Icons
  - Vercel Deployment

#### Overview & Key Features:
- **Multi-Branch Inventory:** Real-time stock level synchronization and adjustments across multiple physical branch outlets.
- **Dual Authentication System:**
  - **Staff Quick Access:** 4-digit numeric PIN authentication for fast terminal checkout and shift logging.
  - **Owner / Administrator Portal:** Standard Email & Password credentials protecting sensitive business analytics and configuration settings.
- **Analytics Dashboard:** Revenue charts, sales volume tracking, transaction histories, and low-inventory restock alerts.
- **Relational Data Architecture:** PostgreSQL schemas managing products, variants, transaction ledgers, branches, and user roles.

---

### 2. Devfinder (Developer GitHub Explorer)

- **Category:** Single-Page Web Application / API Integration
- **Live URL:** [https://devfinder-newelle.vercel.app/](https://devfinder-newelle.vercel.app/)
- **Repository:** [https://github.com/newelle-dev/devfinder](https://github.com/newelle-dev/devfinder)
- **Preview Image:** `/project-img/devfinder.webp`
- **Tech Stack:**
  - React 19
  - Vite 7
  - TypeScript
  - Tailwind CSS 4
  - Axios
  - Framer Motion
  - Lucide React
  - GitHub REST API

#### Overview & Key Features:
- **Real-Time Profile Discovery:** Search and inspect any public GitHub profile with instant feedback.
- **Data Visualizations:** View profile details, bios, pinned repositories, follower counts, following lists, and activity stats.
- **Fluid Micro-Animations:** Motion transitions and interactive hover effects.
- **Responsive Layout:** Optimized for mobile, tablet, and widescreen viewports.

---

### 3. RevvUp Auto (Auto Workshop Showcase)

- **Category:** Business Landing & Service Marketing Site
- **Live URL:** [https://revvup-auto-swart.vercel.app/](https://revvup-auto-swart.vercel.app/)
- **Repository:** [https://github.com/newelle-dev/revvup-auto](https://github.com/newelle-dev/revvup-auto)
- **Preview Image:** `/project-img/revvup-auto.webp`
- **Tech Stack:**
  - Next.js 16
  - React 19
  - TypeScript
  - Tailwind CSS 4
  - Motion
  - Lucide React
  - Vercel

#### Overview & Key Features:
- **Conversion-First UX:** Single-page journey featuring hero value proposition, service offerings, customer testimonials, and contact/location action items.
- **Component-Driven Architecture:** Clean modular design with high reusability and SEO optimization.
- **Fast Load Times:** Static generation with modern CSS and optimized asset delivery.

---

## 🏢 Additional Notable Work

### RFID-Based Enterprise Attendance Tracking System
- **Focus:** Company branch operational management
- **Stack:** MySQL, Node.js, Express, Hardware RFID Scanner Integration
- **Impact:** Automated manual attendance logs, minimized clock-in bottlenecks across physical branch locations, and generated accurate shift attendance reports.

---

## 📦 Project Data Schema

Projects in this portfolio adhere to the TypeScript interface defined in [types/types.ts](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/types/types.ts):

```typescript
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
```

The master list of projects is maintained in [lib/projects.ts](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/lib/projects.ts) and consumed by both [components/ProjectsSection.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/components/ProjectsSection.tsx) (Home showcase) and [app/projects/page.tsx](file:///c:/Users/alec/OneDrive/Desktop/Projects/newelle-dev-portfolio/app/projects/page.tsx) (Full catalog route).
