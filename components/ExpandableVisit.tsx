"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github, ArrowUpRight, X } from "lucide-react";

interface ExpandableVisitProps {
  liveUrl?: string;
  githubUrl?: string;
  projectTitle: string;
}

interface VisitLinkItem {
  id: "live" | "github";
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 28,
  mass: 0.85,
} as const;

export const ExpandableVisit: React.FC<ExpandableVisitProps> = ({
  liveUrl,
  githubUrl,
  projectTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const items: VisitLinkItem[] = [];
  if (liveUrl) {
    items.push({
      id: "live",
      title: "Live site",
      href: liveUrl,
      icon: Globe,
    });
  }
  if (githubUrl) {
    items.push({
      id: "github",
      title: "GitHub",
      href: githubUrl,
      icon: Github,
    });
  }

  // If no links exist at all, do not render
  if (items.length === 0) return null;

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Invisible placeholder to preserve layout space */}
      <div
        aria-hidden="true"
        className="invisible pointer-events-none inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-transparent select-none"
      >
        <span>Visit Site</span>
        <ArrowUpRight className="w-4 h-4" />
      </div>

      <AnimatePresence initial={false}>
        {!isOpen ? (
          /* Collapsed Button */
          <motion.button
            key="collapsed-visit-button"
            layoutId="visit-expandable-card"
            type="button"
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            transition={SPRING_TRANSITION}
            aria-expanded={false}
            aria-haspopup="dialog"
            className="absolute top-0 right-0 inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-xl hover:opacity-90 shadow-xs cursor-pointer select-none"
          >
            <motion.div
              layoutId="visit-button-content"
              className="inline-flex items-center gap-1.5"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        ) : (
          /* Expanded Card */
          <motion.div
            key="expanded-visit-card"
            layoutId="visit-expandable-card"
            role="dialog"
            aria-modal="true"
            aria-label={`Visit links for ${projectTitle}`}
            transition={SPRING_TRANSITION}
            className="absolute top-0 right-0 z-50 w-64 sm:w-72 rounded-2xl p-4 bg-zinc-950/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-800/90 dark:border-zinc-700/80 shadow-2xl shadow-black/50 text-white select-none overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-800/80">
                <h3 className="text-base font-bold tracking-tight text-white leading-none">
                  Visit
                </h3>

                {/* Close Button */}
                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
                  aria-label="Close visit menu"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Links List */}
              <div className="space-y-1.5">
                {items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.04,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/60 hover:border-zinc-700/70 transition-all duration-200 cursor-pointer"
                    >
                      {/* Left: Icon & Title */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-zinc-800/90 border border-zinc-700/60 text-zinc-200 group-hover:scale-105 group-hover:text-white transition-all duration-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white tracking-tight">
                          {item.title}
                        </span>
                      </div>

                      {/* Right: Arrow */}
                      <div className="text-zinc-400 group-hover:text-white transition-colors pr-1">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableVisit;
