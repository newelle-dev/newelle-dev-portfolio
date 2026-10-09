"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.footer
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="border-t border-border py-8 px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: Copyright */}
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Newelle
        </span>

        {/* Right: Social links */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:nrquiambao1499@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/newelle-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nrquiambao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
