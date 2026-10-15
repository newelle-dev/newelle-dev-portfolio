import { Project } from "@/types/types";

export const projects: Project[] = [
  {
  slug: "rfid-attendance-system",
  title: "RFID Attendance System",
  category: "Full-Stack Enterprise / Hardware Integration",
  tagline: "High-performance RFID attendance kiosk & enterprise administration suite",
  description:
    "Enterprise attendance management system pairing a hardware-integrated RFID kiosk terminal with an administrative command portal. Built with Next.js 16 App Router, React 19, and MySQL, featuring sub-second punch logging, keystroke-guarded HID card scanning, and role-based access control.",
  techStack: [
    "Next.js 16",
    "React 19",
    "MySQL",
    "NextAuth.js",
    "Tailwind CSS 4",
    "Base UI / Radix",
    "TanStack Table",
    "Framer Motion",
    "Zod",
    "Day.js",
  ],
  imageUrl: "/project-img/rfid-project/dashboard_page.png",
  showcaseScreens: [
    {
      title: "Enterprise Admin Dashboard & Live Feed",
      description:
        "Real-time employee counts, today's punch metrics, and live chronological activity stream.",
      imageUrl: "/project-img/rfid-project/dashboard_page.png",
      alt: "Admin Portal Dashboard Overview",
    },
    {
      title: "Kiosk Attendance Terminal",
      description:
        "Lobby display terminal calibrated for corporate screens with high-tech HUD digital clock and live UTC+8 telemetry.",
      imageUrl: "/project-img/rfid-project/kiosk_page.jpeg",
      alt: "RFID Kiosk Terminal Interface",
    },
    {
      title: "Instant Punch Confirmation Dossier",
      description:
        "Sub-second badge swipe verification displaying employee photo, paired Time In/Out record, and auto-dismiss timer.",
      imageUrl: "/project-img/rfid-project/kiosk_employee_card.jpeg",
      alt: "Kiosk Punch Confirmation Overlay",
    },
    {
      title: "Employee Records & Dossier Management",
      description:
        "Server-side data streaming with React Server Components, RFID tag binding, photo uploads, and slide-over sheets.",
      imageUrl: "/project-img/rfid-project/employee_management_page.png",
      alt: "Employee Management Records Table",
    },
    {
      title: "Attendance Logs & Daily Log Viewer",
      description:
        "Searchable punch logs with date range and department filtering, punch status badges, and client-side CSV export.",
      imageUrl: "/project-img/rfid-project/attendance_logs_page.png",
      alt: "Attendance Punch Logs",
    },
    {
      title: "Role-Based Access Control Matrix",
      description:
        "Granular administrative permission switches cached in JWT session tokens across superadmin, admin, security, and HR roles.",
      imageUrl: "/project-img/rfid-project/role_permision_page.png",
      alt: "Role Permissions Configuration Matrix",
    },
  ],
  githubUrl: "https://github.com/newelle-dev/rfid-attendance-system",
  featured: true,
  overview: [
    "The RFID Attendance System is an end-to-end workforce tracking solution designed to replace manual logbooks and error-prone biometric finger scanners in corporate lobbies and operational facilities. Traditional biometric scanners frequently encounter hardware latency, high maintenance costs, and congested queues during shift turnovers.",
    "Engineered with Next.js 16 and React 19, the platform combines a dedicated kiosk attendance terminal with a high-performance administrative command portal. Employees tap their RFID cards for sub-second attendance verification with audio-visual feedback, while HR and operations leaders monitor real-time workforce attendance through a responsive management dashboard.",
  ],
  whatIBuilt: [
    "Lobby kiosk attendance terminal calibrated for wall-mounted 1080p and 4K displays featuring a high-tech HUD digital clock with Philippine Standard Time (UTC+8) telemetry and an animated seconds meter.",
    "Keystroke-guarded RFID HID hardware listener (lib/HIDListeners.js) that captures USB card swipes instantly while ignoring active inputs (INPUT, TEXTAREA, SELECT, contenteditable) to prevent scan interference.",
    "High-contrast punch confirmation dossier overlay presenting employee photo, Ashima ID, department, and paired Time In/Out status with a 9-second auto-clearing progress bar.",
    "Interactive badge simulator drawer (invoked via hotkey 'D') enabling instant developer and QA testing of valid and unregistered badge scans without physical hardware.",
    "Admin portal built with a standardized 4-tier layout (PageHeader -> Command Header -> KPI Strip -> Main Workspace Card) across all modules.",
    "Employee records workspace powered by React Server Components for concurrent data fetching, slide-over Sheet dossiers, and base64 photo uploads.",
    "Attendance logs module featuring paired daily punch histories, department filters, date range pickers, and client-side CSV export.",
    "Granular Role-Based Access Control (RBAC) matrix supporting superadmin, admin, security, and HR roles with bcrypt-hashed credentials.",
    "Global keyboard command palette (Cmd+K / Ctrl+K) for rapid administrative navigation.",
  ],
  engineering: [
    "Architected around Next.js 16 App Router and React Server Components to stream employee and attendance datasets concurrently from a MySQL connection pool (mysql2) without client waterfalls.",
    "Designed an embedded JWT permissions mechanism with NextAuth.js that encodes module permissions directly into the user session token upon authentication, eliminating redundant permission queries on every administrative route transition.",
    "Implemented Next.js 16 route proxy middleware (proxy.js) to intercept unauthorized navigations before page rendering, coupled with strict requireAdminSession API route guards.",
    "Engineered keystroke buffer velocity detection and target guarding in HIDListeners.js to differentiate between rapid hardware barcode/RFID scanner inputs and standard keyboard typing.",
    "Enforced end-to-end data validation using centralized Zod schemas on all administrative mutation payloads and parameterized SQL queries to prevent SQL injection.",
  ],
  outcome:
    "Delivered a seamless, sub-second tap-and-go attendance experience that eliminated shift turnaround bottlenecks. The unified administrative suite gave HR teams instantaneous attendance tracking, automated punch pairing, and audit-ready reporting.",
  status:
    "Completed and production-ready with multi-stage Docker containerization for instant deployment on local networks and dedicated kiosk hardware.",
  },
  {
    slug: "vapetrack-ph",
    title: "VapeTrack PH",
    category: "Multi-Tenant SaaS / Cloud POS & Inventory",
    tagline: "Mobile-first cloud POS and real-time inventory management SaaS for Philippine vape retail",
    description:
      "Cloud-based multi-tenant SaaS platform built with Next.js 16 App Router, React 19, Supabase (PostgreSQL with Row Level Security), and Tailwind CSS 4. Empowers vape shop enterprises with sub-30-second POS checkout, multi-branch inventory tracking with variant matrixing (flavors, nicotine strengths), automated profit and COGS analytics, and granular staff PIN authentication.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Row Level Security (RLS)",
      "Tailwind CSS 4",
      "TanStack Query v5",
      "Zustand",
      "Radix UI",
      "React Hook Form",
      "Zod",
    ],
    imageUrl: "/project-img/vapetrack-project/dashboard.png",
    showcaseScreens: [
      {
        title: "Executive Analytics & Multi-Branch KPI Dashboard",
        description:
          "Real-time daily revenue, net profit margin telemetry, orders count, low-stock alerts, and sales performance charts.",
        imageUrl: "/project-img/vapetrack-project/dashboard.png",
        alt: "VapeTrack PH Analytics Dashboard Overview",
      },
      {
        title: "Touch-Optimized Cloud POS Terminal",
        description:
          "Sub-30-second checkout interface with product category tabs, flavor/nicotine variant badges, itemized cart, and cash/GCash tender.",
        imageUrl: "/project-img/vapetrack-project/pos.png",
        alt: "VapeTrack PH Point of Sale Interface",
      },
      {
        title: "Multi-Branch Inventory & Variant Matrix",
        description:
          "Centralized stock ledger tracking SKUs across Manila, QC, and Makati outlets with COGS, retail pricing, and low-stock reorder thresholds.",
        imageUrl: "/project-img/vapetrack-project/inventory.png",
        alt: "Multi-Branch Inventory and Variant Matrix",
      },
      {
        title: "Dual-Mode Authentication & Fast Terminal PIN Access",
        description:
          "4-digit numeric keypad for rapid cashier terminal switching alongside role-guarded email/password access for shop owners.",
        imageUrl: "/project-img/vapetrack-project/staff_pin.png",
        alt: "Fast Staff PIN Access and Owner Portal Login",
      },
    ],
    liveUrl: "https://vapetrack-ph.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/vapetrack-ph",
    featured: true,
    overview: [
      "VapeTrack PH is a cloud-native Sales & Inventory Management SaaS designed to eliminate manual logbooks and spreadsheet chaos in Philippine vape retail shops. Most independent vape businesses operate across multiple physical outlets while struggling with inventory inaccuracy, untracked cost of goods sold (COGS), and lack of staff accountability.",
      "Engineered with Next.js 16 and Supabase (PostgreSQL), VapeTrack PH provides a mobile-responsive Progressive Web App (PWA) operating seamlessly over 4G/5G connections with zero hardware dependencies. Shop owners can monitor real-time gross revenue and net profit across branches, while cashiers process transactions in under 30 seconds via a touch-optimized POS terminal.",
    ],
    whatIBuilt: [
      "High-speed Point of Sale (POS) interface equipped with category filters (E-Liquids, Pod Systems, Disposables, Coils), real-time product search, and variant selectors for nicotine strengths and flavor profiles.",
      "Slide-over cart checkout drawer (Zustand client state) supporting itemized quantity adjustments, discount inputs, 12% Philippine VAT calculation, and quick tender via Cash or GCash.",
      "Multi-branch inventory workspace tracking on-hand quantities across physical locations (e.g., Manila Main, QC, Makati) with automated low-stock reorder warnings.",
      "Comprehensive product variant matrix system allowing one parent item to manage multi-dimensional attributes including bottle sizes (30ml, 60ml, 100ml) and nicotine ratings (3mg, 25mg, 50mg).",
      "Dual-mode authentication flow implementing 4-digit PIN access for rapid staff shift transitions and standard email/password credentials with Supabase Auth for store owners.",
      "Real-time analytics dashboard presenting daily revenue, net profit margin percentages, best-selling product leaderboards, and live chronological sales logs.",
      "End-to-end multi-tenant isolation utilizing PostgreSQL Row Level Security (RLS) policies conditioned on organization_id to ensure complete data security across tenants.",
    ],
    engineering: [
      "Engineered a multi-tenant PostgreSQL data architecture in Supabase leveraging Row Level Security (RLS) policies scoped to organization_id, guaranteeing tenant data isolation without repetitive manual query filtering.",
      "Implemented atomic Postgres RPC stored procedures (e.g., process_sale) to execute inventory decrementing and sales ledger journaling in a single atomic database transaction, preventing race conditions during simultaneous branch checkouts.",
      "Optimized data synchronization using TanStack Query v5 with optimistic UI updates and localized Zustand cart state, delivering instant client responsiveness even over high-latency cellular connections.",
      "Structured application routes around Next.js 16 App Router using route groups ((auth), (dashboard)) with server-side auth session validation and cookie-based role checks.",
      "Enforced type safety from database schemas to client forms using auto-generated Supabase TypeScript definitions paired with Zod runtime validation and React Hook Form.",
    ],
    outcome:
      "Empowered vape shop owners with real-time multi-branch inventory visibility, accurate profit margin tracking per transaction, and a fast, reliable POS terminal requiring zero upfront hardware investment.",
    status:
      "Active SaaS in production with continuous deployment on Vercel, integrated with Supabase managed PostgreSQL and automated database migrations.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}