"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectFeatureSection from "./ProjectFeatureSection";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredProjects = projects.filter((project) => project.featured);

  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [isWorkSectionActive, setIsWorkSectionActive] = useState<boolean>(false);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNavigatingAwayRef = useRef<boolean>(false);
  const navAwayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;

      // If programmatically navigating to a non-Work section, keep left panel hidden
      if (isNavigatingAwayRef.current) {
        setIsWorkSectionActive(false);
        return;
      }

      // Check if user is in Work section (perfectly matching Navigation's active "projects" condition)
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const expEl = document.getElementById("experience");
        const expTop = expEl ? expEl.getBoundingClientRect().top : Infinity;
        const isProjectsActive =
          window.scrollY >= 120 &&
          rect.top <= 260 &&
          rect.bottom > 100 &&
          expTop > 260;
        setIsWorkSectionActive(isProjectsActive);
      }

      if (isClickScrolling.current) return;

      let currentActive = 0;
      for (let i = 0; i < featuredProjects.length; i++) {
        const el = document.getElementById(`project-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Project is considered active when its top is within upper viewport threshold
          if (rect.top <= vh * 0.45) {
            currentActive = i;
          }
        }
      }
      setActiveProjectIndex(currentActive);
    };

    const handleActiveSection = (e: Event) => {
      const customEvent = e as CustomEvent<{ activeSection: string }>;
      const activeSec = customEvent.detail?.activeSection;
      if (activeSec) {
        setIsWorkSectionActive(activeSec === "projects");
      }
    };

    const handleNavClick = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      const targetId = customEvent.detail?.targetId;

      if (targetId && targetId !== "projects") {
        // Navigating to a non-Work section: immediately hide and lock the left panel
        setIsWorkSectionActive(false);
        isNavigatingAwayRef.current = true;
        if (navAwayTimerRef.current) clearTimeout(navAwayTimerRef.current);
        navAwayTimerRef.current = setTimeout(() => {
          isNavigatingAwayRef.current = false;
          handleScroll();
        }, 900);
      } else if (targetId === "projects") {
        // Navigating directly to Work: unlock immediately
        isNavigatingAwayRef.current = false;
        if (navAwayTimerRef.current) clearTimeout(navAwayTimerRef.current);
        setIsWorkSectionActive(true);
      }
    };

    const handleUserInterrupt = () => {
      if (isNavigatingAwayRef.current) {
        isNavigatingAwayRef.current = false;
        if (navAwayTimerRef.current) clearTimeout(navAwayTimerRef.current);
        handleScroll();
      }
    };

    const handleScrollEnd = () => {
      if (isNavigatingAwayRef.current) {
        isNavigatingAwayRef.current = false;
        if (navAwayTimerRef.current) clearTimeout(navAwayTimerRef.current);
        handleScroll();
      }
    };

    window.addEventListener("portfolio-nav-click", handleNavClick);
    window.addEventListener("portfolio-active-section", handleActiveSection);
    window.addEventListener("wheel", handleUserInterrupt, { passive: true });
    window.addEventListener("touchstart", handleUserInterrupt, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("portfolio-nav-click", handleNavClick);
      window.removeEventListener("portfolio-active-section", handleActiveSection);
      window.removeEventListener("wheel", handleUserInterrupt);
      window.removeEventListener("touchstart", handleUserInterrupt);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (navAwayTimerRef.current) {
        clearTimeout(navAwayTimerRef.current);
      }
    };
  }, [featuredProjects.length]);

  const scrollToProject = (index: number) => {
    setActiveProjectIndex(index);
    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    const el = document.getElementById(`project-${index}`);
    if (el) {
      const yOffset = -96; // Offset clearance for floating navbar
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 px-4 sm:px-6 relative scroll-mt-24"
    >
      <div id="work" className="absolute -top-24" />

      {/* Fixed Left Navigation Rail (Desktop only, completely unmounted from the DOM when not in Work section) */}
      <AnimatePresence>
        {isWorkSectionActive && (
          <motion.aside
            key="projects-fixed-sidebar"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:block fixed left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-40"
            aria-label="Projects sidebar navigation"
          >
            <nav aria-label="Projects navigation" className="flex flex-col gap-2.5 p-2">
              {featuredProjects.map((project, idx) => {
                const isActive = activeProjectIndex === idx;
                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => scrollToProject(idx)}
                    className="group flex items-center gap-3.5 text-left py-2 focus:outline-hidden cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    aria-label={`Jump to ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {/* Horizontal Dash Indicator */}
                    <span
                      className={`h-0.5 rounded-full transition-all duration-300 ease-out shrink-0 ${
                        isActive
                          ? "w-8 bg-primary shadow-xs shadow-primary/40"
                          : "w-3 bg-muted-foreground/30 group-hover:w-5 group-hover:bg-muted-foreground/60"
                      }`}
                    />
                    {/* Project Title */}
                    <span
                      className={`text-sm whitespace-nowrap transition-colors duration-200 select-none ${
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/60 group-hover:text-foreground font-normal"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="container max-w-4xl mx-auto">
        {/* Project Showcase Cards */}
        <div className="flex flex-col gap-14 sm:gap-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              id={`project-${index}`}
              className="scroll-mt-28"
            >
              <ProjectFeatureSection {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;