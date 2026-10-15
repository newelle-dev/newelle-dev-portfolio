import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    slug: "vapetrack-ph",
    title: "VapeTrack PH",
    category: "Full-Stack SaaS / Retail & Inventory",
    tagline: "Multi-branch sales and inventory management software",
    description:
      "Multi-branch sales and inventory management system with real-time stock tracking, dual authentication (4-digit PIN for staff, Email/Password for owners), and analytics dashboard with revenue charts. Fullstack application deployed on Vercel.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel",
    ],
    imageUrl: "/project-img/vapetrack-ph.webp",
    showcaseScreens: [
      {
        title: "Multi-Branch Management & Analytics",
        description:
          "Real-time gross revenue metrics, branch performance comparisons, and low-stock alerts.",
        imageUrl: "/project-img/vapetrack-ph.webp",
        alt: "VapeTrack PH Analytics Dashboard",
      },
      {
        title: "Point-of-Sale (POS) Counter Terminal",
        description:
          "Fast-paced checkout interface tailored for cashier staff with instant barcode search and stock deduction.",
        imageUrl: "/project-img/vapetrack-pos.jpg",
        alt: "VapeTrack PH POS Terminal",
      },
    ],
    liveUrl: "https://vapetrack-ph.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/vapetrack-ph",
    featured: true,
    overview: [
      "VapeTrack PH is a dedicated multi-branch point-of-sale and inventory control software platform developed for retail chains in the specialty vape and e-liquid industry. Managing multiple physical retail branches typically leads to stock shrinkage, fragmented paper logs, and discrepancies during stock transfers between branches.",
      "The system unifies all retail operations into a centralized, cloud-connected platform. Business owners gain live visibility into multi-store revenue and inventory levels, while on-the-floor staff benefit from an agile, touch-friendly POS terminal optimized for rapid transactions.",
    ],
    whatIBuilt: [
      "Dual-tier authentication: rapid 4-digit PIN verification for cashier shifts and secure email/password credentialing with multi-branch permissions for owners.",
      "Multi-branch inventory ledger with automated batch adjustments, low-stock threshold triggers, and branch-to-branch transfer reconciliations.",
      "High-speed POS checkout flow supporting cash, e-wallets (GCash, Maya), credit cards, itemized discounts, and instant receipt generation.",
      "Comprehensive analytics suite with interactive revenue graphs, profit margin analysis, and fast-moving SKU breakdowns.",
      "Immutable audit log recording every inventory modification, price change, and voided transaction for loss prevention.",
      "Granular role-based authorization restricting cashiers from accessing margin data, financial reports, or historical audit logs.",
      "Responsive UI optimized for desktop cash registers, tablets, and mobile devices.",
    ],
    engineering: [
      "Built with Next.js 16 and TypeScript, VapeTrack PH relies on Supabase (PostgreSQL) as its primary data store. Strict Row Level Security (RLS) rules and PostgreSQL stored procedures enforce strict data isolation between retail organizations and restrict permissions based on the active user role.",
      "To prevent race conditions during concurrent POS sales across branches, checkout transactions are executed through atomic PostgreSQL RPC functions. These functions verify product availability and update inventory counts in a single atomic database operation.",
      "The frontend maximizes performance by using Next.js Server Components for intensive dashboard aggregation, while leveraging optimistic client updates on POS line items for seamless, zero-latency scanning at checkout counters.",
    ],
    outcome:
      "VapeTrack PH eliminated manual paper inventories and reconciliation overhead across branches. It gave store owners peace of mind with real-time auditability and enabled cashier staff to process customer transactions in seconds.",
    status:
      "Live in production and actively maintained. Next enhancements include barcode scanner SDK integration, Bluetooth ESC/POS thermal receipt printing, and automated supplier reorder notifications.",
  },

  {
    slug: "devfinder",
    title: "Devfinder",
    category: "Developer Tooling / GitHub Exploration",
    tagline: "Developer search and GitHub exploration engine",
    description:
      "Discover GitHub users with a clean, fast React + Vite app. Search by username, view profile details, and jump to followers, following, and repositories. Responsive design with Tailwind CSS and smooth animations using Framer Motion. Powered by GitHub's API for real-time data.",
    techStack: [
      "React 19",
      "Vite 7",
      "Tailwind CSS 4",
      "Axios",
      "Lucide React",
      "GitHub API",
      "Framer Motion",
    ],
    imageUrl: "/project-img/devfinder.webp",
    showcaseScreens: [
      {
        title: "Developer Overview & Quick Search",
        description:
          "Instant profile retrieval with bio metadata, social connections, and account longevity.",
        imageUrl: "/project-img/devfinder.webp",
        alt: "Devfinder Developer Search",
      },
      {
        title: "Deep Profile & Repository Analytics",
        description:
          "Interactive repository metrics, language breakdown bars, and commit history exploration.",
        imageUrl: "/project-img/devfinder-details.jpg",
        alt: "Devfinder Repository and Analytics View",
      },
    ],
    liveUrl: "https://devfinder-newelle.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/devfinder",
    featured: true,
    overview: [
      "Devfinder is a streamlined developer exploration tool that allows engineers, recruiters, and open-source enthusiasts to quickly look up GitHub profiles, evaluate technical portfolios, and inspect repositories with minimal friction.",
      "Native GitHub profile pages often require navigating across several different tabs to inspect bio details, repository star counts, follower networks, and primary coding languages. Devfinder condenses these essential metrics into a cohesive, responsive dashboard.",
    ],
    whatIBuilt: [
      "Instant GitHub profile search with debounced queries, graceful handling of non-existent handles, and rate-limit notifications.",
      "Rich profile card displaying bio, company affiliation, geographic location, website URLs, and join date timestamps.",
      "Repository browser with dynamic sorting by stars, forks, and recent activity, linking directly to GitHub source repositories.",
      "Interactive language distribution visualization showing the developer's top programming languages across public repositories.",
      "Persistent dark and light theme toggle with system preference detection.",
      "Micro-animations and fluid layout transitions implemented with Framer Motion.",
      "Mobile-first responsive architecture ensuring consistent readability on all viewport sizes.",
    ],
    engineering: [
      "Devfinder is constructed with React 19 and Vite 7 to achieve ultra-fast build times and a minimal runtime bundle footprint. Network requests to GitHub's REST API are managed through modular Axios service layers equipped with in-memory caching to reduce redundant round trips.",
      "The application implements proactive rate limit detection, inspecting GitHub API response headers to warn users when approaching hourly request quotas and providing clear reset timers.",
      "Component styling uses Tailwind CSS 4, utilizing utility variables to allow instant theme switches without layout shift.",
    ],
    outcome:
      "Devfinder serves as a practical, lightweight utility for reviewing developer portfolios during technical interviews and open-source contributions. It demonstrates clean component boundaries, robust API integration, and thoughtful UI polish.",
    status:
      "Live and hosted on Vercel. Future iterations will incorporate GitHub GraphQL API queries for batch fetching and an interactive contribution heatmap visualization.",
  },

  {
    slug: "revvup-auto",
    title: "RevvUp Auto",
    category: "Automotive Services / Commercial Web",
    tagline: "High-conversion auto workshop and service booking platform",
    description:
      "Professional auto workshop landing site with a conversion-first single-page flow: hero, services, testimonials, and contact/location CTAs. Data-driven business content and component-driven UI for clear customer actions.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Motion",
      "Lucide React",
      "Vercel",
    ],
    imageUrl: "/project-img/revvup-auto.webp",
    showcaseScreens: [
      {
        title: "Conversion-Focused Hero & Service Menu",
        description:
          "High-impact visual presentation highlighting workshop credentials, warranties, and emergency callouts.",
        imageUrl: "/project-img/revvup-auto.webp",
        alt: "RevvUp Auto Landing Page",
      },
      {
        title: "Online Service Booking Workflow",
        description:
          "Step-by-step appointment scheduler with vehicle make/model selectors and upfront estimate calculations.",
        imageUrl: "/project-img/revvup-booking.jpg",
        alt: "RevvUp Auto Service Booking Interface",
      },
    ],
    liveUrl: "https://revvup-auto-swart.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/revvup-auto",
    featured: true,
    overview: [
      "RevvUp Auto is a modern, conversion-engineered digital platform designed for automotive repair centers, diagnostics specialists, and vehicle maintenance workshops. In the automotive repair sector, many local garages rely on dated websites that fail to convert visitors into booked bay appointments.",
      "RevvUp Auto bridges this gap with an intuitive customer journey that showcases core services, transparent pricing packages, real customer reviews, and a frictionless online booking inquiry flow.",
    ],
    whatIBuilt: [
      "Conversion-optimized single-page layout with sticky booking CTAs, clear value propositions, and service highlights.",
      "Interactive automotive service catalog covering synthetic oil changes, brake system overhauls, engine diagnostics, and multi-point inspections.",
      "Digital booking inquiry workflow allowing drivers to select vehicle make, model, desired service, and preferred appointment time.",
      "Social proof and trust elements including verified customer testimonials, warranty guarantees, and technician certifications.",
      "Interactive map integration with operating hours, emergency contact triggers, and workshop directions.",
      "Accessible and mobile-first layout prioritizing fast telephone dials and appointment scheduling on mobile devices.",
      "Optimized performance achieving 95+ scores on Google Lighthouse for SEO, Accessibility, and Core Web Vitals.",
    ],
    engineering: [
      "Developed using Next.js 16 and Tailwind CSS 4, the application leverages React Server Components to pre-render static business information with zero client-side JavaScript overhead for static sections.",
      "Client-side interactivity—such as vehicle service selection, animated accordion FAQs, and mobile navigation—is powered by lightweight Motion primitives.",
      "SEO best practices were rigorously implemented, including JSON-LD LocalBusiness structured schema, OpenGraph social sharing preview metadata, and automated WebP image optimization via Next.js Image.",
    ],
    outcome:
      "The redesign delivered improved engagement and higher appointment conversion rates. It demonstrated how thoughtful UX hierarchy, fast load times, and transparent pricing build immediate customer trust for local service businesses.",
    status:
      "Live in production on Vercel. Next features include direct WhatsApp appointment booking hooks, automated customer SMS service reminders, and a digital vehicle maintenance history portal.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}