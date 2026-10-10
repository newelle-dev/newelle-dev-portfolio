import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "VapeTrack PH",
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
    liveUrl: "https://vapetrack-ph.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/vapetrack-ph",
    featured: true,
  },

  {
    title: "Devfinder",
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
    ],
    imageUrl: "/project-img/devfinder.webp",
    liveUrl: "https://devfinder-newelle.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/devfinder",
    featured: true,
  },
  {
    title: "RevvUp Auto",
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
    ],
    imageUrl: "/project-img/revvup-auto.webp",
    liveUrl: "https://revvup-auto-swart.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/revvup-auto",
    featured: true,
  },
];