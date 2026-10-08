"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CodeWindow from './CodeWindow';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const measurerRef = useRef<HTMLDivElement | null>(null);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
  const fullText = `const newelle = {
  name: "Newelle Alec Quiambao",
  role: "Full-Stack Developer",
  techStack: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
  focus: "Practical web applications and business systems",
  status: "Open to opportunities"
};`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10); // Typing speed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Measure the full text width before paint so the code window can be shown at final width immediately
  useLayoutEffect(() => {
    if (measurerRef.current) {
      const width = measurerRef.current.scrollWidth;
      // Add a small buffer for padding/borders
      setMeasuredWidth(width + 24);
    }
  }, [fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            >
              Hello, I&apos;m <span className="text-primary">Newelle</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl"
            >
              Full-Stack Developer building practical web applications and business systems.
            </motion.p>
          </div>

          {/* Hidden measurer with same typography to compute final width */}
          <div ref={measurerRef} className="p-6 font-mono text-sm leading-relaxed whitespace-pre" style={{position: 'absolute', visibility: 'hidden', pointerEvents: 'none'}}>{fullText}</div>

          <CodeWindow fileName="developer.ts" className="mt-8" autoWidth style={measuredWidth ? { width: measuredWidth } : undefined}>
            <div className="p-6 font-mono text-sm text-foreground leading-relaxed overflow-x-auto whitespace-pre">
              <div
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace(/"(.*?)"/g, '<span class="text-terminal-green">"$1"</span>')
                    .replace(/name:/g, '<span class="text-primary ml-4">name:</span>')
                    .replace(/role:/g, '<span class="text-primary ml-4">role:</span>')
                    .replace(/techStack:/g, '<span class="text-primary ml-4">techStack:</span>')
                    .replace(/focus:/g, '<span class="text-primary ml-4">focus:</span>')
                    .replace(/status:/g, '<span class="text-primary ml-4">status:</span>')
                    .replace(/const|newelle/g, '<span class="text-purple-400">$&</span>')
                    .replace(/\[/g, '[')
                    .replace(/\]/g, ']')
                    .replace(/\{/g, '{')
                    .replace(/\}/g, '}'),
                }}
              />
              <span className="terminal-cursor text-primary ml-1">▌</span>
            </div>
          </CodeWindow>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              View Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
