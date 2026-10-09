"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            Hello, I&apos;m{' '}
            <span className="text-primary">Newelle</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-3 max-w-xl"
          >
            Software Engineer &amp; Fullstack Developer based in the Philippines.
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl"
          >
            I like building things end to end, from the first idea to the final product.
            I&apos;m always looking for a better way to solve things.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="mailto:nrquiambao1499@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-foreground/40 transition-colors"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
