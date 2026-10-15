"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Undo2,
  ArrowLeft,
  ArrowUpRight,
  Github,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Project } from "@/types/types";
import { ExpandableVisit } from "./ExpandableVisit";

interface ProjectDetailViewProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "what-i-built", label: "What I Built" },
  { id: "engineering", label: "Engineering" },
  { id: "outcome", label: "Outcome" },
  { id: "status", label: "Status" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export default function ProjectDetailView({
  project,
  nextProject,
  prevProject,
}: ProjectDetailViewProps) {
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [isCaseStudyActive, setIsCaseStudyActive] = useState<boolean>(false);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll spy for the 5 case study sections & visibility of fixed left rail
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;

      // Check if user is within the Case Study area to show/hide fixed left navigation rail
      if (caseStudyRef.current) {
        const rect = caseStudyRef.current.getBoundingClientRect();
        const isInView = rect.top <= vh * 0.65 && rect.bottom > 140;
        setIsCaseStudyActive(isInView);
      }

      if (isClickScrolling.current) return;

      let current: SectionId = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section top is above 45% of viewport
          if (rect.top <= vh * 0.45) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    const el = document.getElementById(id);
    if (el) {
      const yOffset = window.innerWidth < 1280 ? -28 : -84;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Determine screens to display (either custom showcase screens or fallback to primary image)
  const screens =
    project.showcaseScreens && project.showcaseScreens.length > 0
      ? project.showcaseScreens
      : [
        {
          title: `${project.title} Preview`,
          description: project.tagline || project.description,
          imageUrl: project.imageUrl,
          alt: `${project.title} screenshot`,
        },
      ];

  // Derive domain from liveUrl for browser chrome
  const getDisplayDomain = (url?: string) => {
    if (!url) return `${project.slug}.app`;
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace("www.", "");
    } catch {
      return `${project.slug}.app`;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 relative">
      {/* Fixed Left Navigation Rail (Desktop only, completely unmounted when not in case study section) */}
      <AnimatePresence>
        {isCaseStudyActive && (
          <motion.aside
            key="case-study-fixed-sidebar"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:block fixed left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-40"
            aria-label="Case study sidebar navigation"
          >
            <nav aria-label="Case study navigation" className="flex flex-col gap-2.5 p-2">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className="group flex items-center gap-3.5 text-left py-2 focus:outline-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    aria-label={`Jump to ${sec.label}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {/* Horizontal Dash Indicator */}
                    <span
                      className={`h-0.5 rounded-full transition-all duration-300 ease-out shrink-0 ${isActive
                          ? "w-8 bg-primary shadow-xs shadow-primary/40"
                          : "w-3 bg-muted-foreground/30 group-hover:w-5 group-hover:bg-muted-foreground/60"
                        }`}
                    />
                    {/* Section Label */}
                    <span
                      className={`text-sm whitespace-nowrap transition-colors duration-200 select-none ${isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/60 group-hover:text-foreground font-normal"
                        }`}
                    >
                      {sec.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="container max-w-4xl mx-auto px-5 sm:px-6 pt-7 sm:pt-12 md:pt-14 pb-16 sm:pb-24">
        {/* Top Action Bar: Clean 'Return' & 'Visit site' spaced between (Responsive across mobile & desktop) */}
        <div className="flex items-center justify-between gap-3 mb-10 sm:mb-14">
          {/* Left: Return button */}
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-secondary/80 hover:bg-secondary text-sm font-medium text-foreground transition-all duration-200 active:scale-95 border border-border/60 shadow-2xs"
            aria-label="Back to all projects"
          >
            <Undo2 className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span>Return</span>
          </Link>

          {/* Right: Expandable Visit Menu */}
          <ExpandableVisit
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            projectTitle={project.title}
          />
        </div>

        {/* Project Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 sm:mb-12 md:mb-14"
        >
          {/* Eyebrow Category */}
          {project.category && (
            <p className="text-xs sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-2.5 select-none">
              {project.category}
            </p>
          )}

          {/* Project Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            {project.title}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-5 sm:mb-6">
            {project.tagline || project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-xs font-medium bg-secondary/50 dark:bg-secondary/30 border border-border/80 text-foreground/85 select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual Showcase: Stacked Browser Mockup Frames */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6 sm:gap-10 md:gap-12 mb-10 sm:mb-16 md:mb-20"
        >
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-900/40 p-1.5 sm:p-3 md:p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/20 shadow-xs"
            >
              {/* Browser Window Chrome */}
              <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/10 shadow-xs sm:shadow-md dark:shadow-2xl">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-2.5 sm:px-3.5 py-2 sm:py-2.5 border-b border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/90 select-none">
                  {/* Window Action Dots */}
                  <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/70" />
                  </div>

                  {/* Faux URL Address Pill */}
                  <div className="flex items-center justify-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-white dark:bg-zinc-950 border border-zinc-200/70 dark:border-white/10 text-[10px] sm:text-xs text-muted-foreground font-mono truncate max-w-[150px] sm:max-w-[320px]">
                    <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{getDisplayDomain(project.liveUrl)}</span>
                  </div>

                  {/* Window Right Dummy Icon Space */}
                  <div className="w-6 sm:w-16 shrink-0" />
                </div>

                {/* Screenshot Display */}
                <div className="relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={screen.imageUrl}
                    alt={screen.alt || screen.title}
                    width={1920}
                    height={1080}
                    priority={idx === 0}
                    className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Optional Screen Title & Caption */}
              {screen.title && (
                <div className="mt-2.5 sm:mt-3 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1 text-xs sm:text-sm">
                  <span className="font-medium text-foreground">
                    {screen.title}
                  </span>
                  {screen.description && (
                    <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm">
                      {screen.description}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Content Section: Full width clean layout */}
        <div ref={caseStudyRef} className="flex flex-col gap-10 sm:gap-14 md:gap-16">
          {/* 1. Overview */}
          <section id="overview" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              Overview
            </h2>
            <div className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* 2. What I Built */}
          <section id="what-i-built" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              What I Built
            </h2>
            <ul className="space-y-2.5 sm:space-y-3">
              {project.whatIBuilt.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 sm:gap-3 text-[15px] sm:text-base text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary font-bold select-none mt-0.5 sm:mt-1 shrink-0">
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Engineering */}
          <section id="engineering" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              Engineering
            </h2>
            <div className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {project.engineering.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* 4. Outcome */}
          <section id="outcome" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              Outcome
            </h2>
            <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {/* 5. Status */}
          <section id="status" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
              Status
            </h2>
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-secondary/30 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {project.status}
            </div>
          </section>

          {/* Navigation to Other Projects */}
          <div className="pt-6 sm:pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col p-3.5 sm:p-4 rounded-xl border border-border/70 hover:border-foreground/30 bg-card hover:bg-secondary/40 transition-all active:scale-[0.99]"
              >
                <span className="text-xs text-muted-foreground mb-1 inline-flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  Previous Project
                </span>
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-start sm:items-end text-left sm:text-right p-3.5 sm:p-4 rounded-xl border border-border/70 hover:border-foreground/30 bg-card hover:bg-secondary/40 transition-all sm:col-start-2 active:scale-[0.99]"
              >
                <span className="text-xs text-muted-foreground mb-1 inline-flex items-center gap-1">
                  Next Project
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </main>

      {/* Footer matching reference design */}
      <footer className="py-8 border-t border-border/60 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          {/* Left: Copyright */}
          <span>
            © {new Date().getFullYear()} Newell Lewis Quiambao
          </span>

          {/* Right: Social Links */}
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <a
              href="mailto:newelle.dev@gmail.com"
              className="hover:text-foreground transition-colors p-1"
            >
              Email
            </a>
            <a
              href="https://github.com/newelle-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nrquiambao/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}