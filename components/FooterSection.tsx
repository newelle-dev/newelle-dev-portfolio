"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.footer
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-8 pt-4 sm:pt-6 px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
        {/* Left: Copyright */}
        <span>
          © {new Date().getFullYear()} Newelle Alec Quiambao
        </span>

        {/* Center: Contact Me Pill Button */}
        {/* <a
          href="mailto:[EMAIL_ADDRESS]?subject=Project%20Discussion"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-background hover:bg-secondary/80 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 active:scale-95 shadow-2xs"
        >
          <span>Contact Me</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a> */}

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
    </motion.footer>
  );
};

export default FooterSection;
