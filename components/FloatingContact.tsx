"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, X } from "lucide-react";
import { contactItems } from "./ExpandableContact";

const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
} as const;

export const FloatingContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position to show when Hero contact button is off-screen,
  // and hide when Footer enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      const heroAnchor = document.getElementById("hero-contact-anchor");
      const footer = document.getElementById("contact");

      let pastHero = false;
      if (heroAnchor) {
        const heroRect = heroAnchor.getBoundingClientRect();
        // Show once the hero contact button has scrolled completely above the viewport top
        pastHero = heroRect.bottom <= 0;
      } else {
        pastHero = window.scrollY > 300;
      }

      let footerInView = false;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Hide when footer top is within the viewport
        footerInView = footerRect.top <= window.innerHeight - 30;
      }

      const shouldShow = pastHero && !footerInView;
      setIsVisible(shouldShow);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Reset open state when the floating container becomes hidden
  useEffect(() => {
    if (!isVisible && isOpen) {
      setIsOpen(false);
    }
  }, [isVisible, isOpen]);

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

  const handleCopy = (e: React.MouseEvent, text: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8"
        >
          <div className="relative">
            {/* Invisible anchor to establish dimensions and keep bottom-right coordinate rock-solid */}
            <div
              aria-hidden="true"
              className="invisible pointer-events-none inline-flex items-center gap-2 px-4.5 h-11 text-sm font-medium border border-transparent select-none whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </div>

            <AnimatePresence initial={false}>
              {!isOpen ? (
                /* Collapsed Pill Button */
                <motion.button
                  key="floating-collapsed-contact-btn"
                  layoutId="floating-contact-card"
                  type="button"
                  onClick={() => setIsOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={SPRING_TRANSITION}
                  aria-expanded={false}
                  aria-haspopup="dialog"
                  aria-label="Open contact card"
                  className="absolute bottom-0 right-0 inline-flex items-center gap-2 px-4.5 h-11 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 shadow-xl shadow-black/20 dark:shadow-black/50 border border-border/80 cursor-pointer select-none whitespace-nowrap"
                >
                  <motion.div
                    layoutId="floating-contact-content"
                    className="inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </motion.div>
                </motion.button>
              ) : (
                /* Expanded Card anchored at bottom-right, growing upwards and leftwards */
                <motion.div
                  key="floating-expanded-contact-card"
                  layoutId="floating-contact-card"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Let's work together"
                  transition={SPRING_TRANSITION}
                  className="absolute bottom-0 right-0 z-50 w-[calc(100vw-3rem)] sm:w-88 max-w-sm rounded-2xl p-5 bg-neutral-900/95 dark:bg-white/95 backdrop-blur-md border border-neutral-800/90 dark:border-neutral-200/80 shadow-2xl shadow-black/40 dark:shadow-black/60 text-neutral-100 dark:text-neutral-900 select-none overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22, delay: 0.08 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-white dark:text-neutral-900 leading-tight">
                          Let&apos;s work together
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-neutral-400 dark:text-neutral-600 leading-relaxed max-w-[240px]">
                          Open to freelance and full-time work. I usually reply within a day.
                        </p>
                      </div>

                      {/* Close button with subtle micro-spin on hover */}
                      <motion.button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        whileHover={{ scale: 1.08, rotate: 90 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border border-neutral-700/70 dark:border-neutral-300 bg-neutral-800/80 dark:bg-neutral-100 text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-900 transition-colors cursor-pointer"
                        aria-label="Close contact card"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.button>
                    </div>

                    {/* Contact Items List */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {contactItems.map((item, index) => {
                        const Icon = item.icon;
                        const isCopied = copiedId === item.id;

                        return (
                          <motion.a
                            key={item.id}
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.08 + index * 0.04,
                              duration: 0.25,
                              ease: "easeOut",
                            }}
                            className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-neutral-800/40 dark:bg-neutral-100/70 hover:bg-neutral-800/80 dark:hover:bg-neutral-100 border border-neutral-800/80 dark:border-neutral-200/80 hover:border-neutral-700/80 dark:hover:border-neutral-300 transition-all duration-200 cursor-pointer"
                          >
                            {/* Left: Icon & Text */}
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-neutral-800/90 dark:bg-white border border-neutral-700/60 dark:border-neutral-200 text-neutral-200 dark:text-neutral-800 group-hover:scale-105 transition-transform duration-200">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 text-left">
                                <p className="text-xs sm:text-sm font-semibold text-white dark:text-neutral-900 leading-tight">
                                  {item.title}
                                </p>
                                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono truncate mt-0.5">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-1.5 shrink-0">
                              {item.canCopy && (
                                <button
                                  type="button"
                                  onClick={(e) => handleCopy(e, item.subtitle, item.id)}
                                  className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 p-1.5 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-200 text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-900"
                                  title={isCopied ? "Copied!" : "Copy to clipboard"}
                                  aria-label={isCopied ? "Copied email" : "Copy email address"}
                                >
                                  {isCopied ? (
                                    <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 dark:text-emerald-600">
                                      <Check className="w-3.5 h-3.5" />
                                      <span className="hidden sm:inline">Copied</span>
                                    </span>
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              )}

                              <div className="p-1 text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors">
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
