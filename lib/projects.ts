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

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}