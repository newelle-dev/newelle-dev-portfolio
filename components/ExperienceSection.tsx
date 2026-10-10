"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/experience";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 scroll-mt-24">
      <div className="container max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label"
        >
          Experience
        </motion.p>

        <div ref={ref} className="space-y-0 divide-y divide-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 py-4"
            >
              {/* Left: Company + Role */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2.5">
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {exp.company}
                </span>
                <span className="text-muted-foreground text-sm">
                  {exp.role}
                </span>
              </div>

              {/* Right: Date */}
              <span className="text-muted-foreground text-sm shrink-0">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
