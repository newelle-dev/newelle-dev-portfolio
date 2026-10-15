"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExpandableContact } from './ExpandableContact';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 md:pt-36 md:pb-20 scroll-mt-24">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance mb-4 text-foreground"
          >
            Hello, I&apos;m{' '}
            <span className="text-primary">Newelle</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-foreground/90 mb-3 max-w-xl"
          >
            Software Engineer &amp; Fullstack Developer based in the Philippines.
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8 max-w-xl"
          >
            I enjoy turning manual processes into software, solving bugs, and building systems that people actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap items-center gap-3 relative"
          >
            <div id="hero-contact-anchor" className="inline-block">
              <ExpandableContact />
            </div>

            <a
              href="/NEWELLE_DEV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-foreground/40 transition-colors"
            >
              Résumé
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
