"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Layers, Briefcase, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  label: string;
  id: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const navLinks: NavLink[] = [
  { label: "About", id: "hero", icon: Layers },
  { label: "Work", id: "projects", icon: Briefcase },
  { label: "Skills", id: "experience", icon: Code2 },
];

const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 350,
  damping: 28,
  mass: 0.8,
} as const;

const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll spy logic using getBoundingClientRect with programmatic scroll lock
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      // Check if user has scrolled near bottom of page (highlight final section)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection("experience");
        return;
      }

      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // Check sections from bottom of the page to top
      const sectionIds = ["experience", "projects", "hero"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom > 100) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isHomePage]);

  // Handle URL hash on initial load & popstate/hashchange
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const targetId = hash === "work" ? "projects" : hash;
        const el = document.getElementById(targetId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(targetId);
          }, 120);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Broadcast activeSection changes so components (such as ProjectsSection left rail) stay 100% synchronized
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio-active-section", {
          detail: { activeSection },
        })
      );
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio-nav-click", { detail: { targetId: id } })
      );
      window.dispatchEvent(
        new CustomEvent("portfolio-active-section", { detail: { activeSection: id } })
      );
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      } else {
        window.location.hash = id;
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 bg-background/85 backdrop-blur-md rounded-full border border-border/80 shadow-md shadow-black/5 dark:shadow-black/20"
      aria-label="Main Navigation"
    >
      {/* Brand Logo (Light & Dark Mode) */}
      {isHomePage ? (
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={SPRING_TRANSITION}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 select-none mr-0.5 overflow-hidden"
          aria-label="Scroll to top"
        >
          <Image
            src="/logo-light.png"
            alt="Newelle Dev"
            width={32}
            height={32}
            className="w-full h-full object-contain rounded-full dark:hidden"
            priority
          />
          <Image
            src="/logo.png"
            alt="Newelle Dev"
            width={32}
            height={32}
            className="w-full h-full object-contain rounded-full hidden dark:block"
            priority
          />
        </motion.a>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={SPRING_TRANSITION}
        >
          <Link
            href="/#hero"
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 select-none mr-0.5 overflow-hidden"
            aria-label="Home"
          >
            <Image
              src="/logo-light.png"
              alt="Newelle Dev"
              width={32}
              height={32}
              className="w-full h-full object-contain rounded-full dark:hidden"
            />
            <Image
              src="/logo.png"
              alt="Newelle Dev"
              width={32}
              height={32}
              className="w-full h-full object-contain rounded-full hidden dark:block"
            />
          </Link>
        </motion.div>
      )}

      {/* Nav Links */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;

          return isHomePage ? (
            <motion.button
              key={link.id}
              layout
              transition={SPRING_TRANSITION}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-3.5 sm:px-3.5 py-2 sm:py-1.5 rounded-full text-sm font-medium transition-colors select-none touch-manipulation ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-background dark:bg-secondary rounded-full border border-border/80 shadow-xs -z-0"
                  transition={SPRING_TRANSITION}
                />
              )}
              <span className="relative z-10 flex items-center">
                <AnimatePresence mode="popLayout" initial={false}>
                  {isActive && Icon && (
                    <motion.span
                      key={`icon-${link.id}`}
                      initial={{ opacity: 0, scale: 0.5, width: 0, marginRight: 0 }}
                      animate={{ opacity: 1, scale: 1, width: "auto", marginRight: 6 }}
                      exit={{ opacity: 0, scale: 0.5, width: 0, marginRight: 0 }}
                      transition={{
                        opacity: { duration: 0.18 },
                        scale: SPRING_TRANSITION,
                        width: SPRING_TRANSITION,
                        marginRight: SPRING_TRANSITION,
                      }}
                      className="inline-flex items-center overflow-hidden shrink-0"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span>{link.label}</span>
              </span>
            </motion.button>
          ) : (
            <motion.div
              key={link.id}
              whileTap={{ scale: 0.94 }}
              transition={SPRING_TRANSITION}
            >
              <Link
                href={`/#${link.id}`}
                className="relative px-3.5 sm:px-3.5 py-2 sm:py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors select-none flex items-center gap-1.5 touch-manipulation"
              >
                {isActive && Icon && <Icon className="w-4 h-4 shrink-0" />}
                <span>{link.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Theme toggle - visible on desktop, hidden on mobile for ultra-compact pill */}
      <div className="md:flex items-center pl-1 border-l border-border/60 ml-0.5">
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navigation;
