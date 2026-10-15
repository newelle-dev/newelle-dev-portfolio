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
          className="text-2lg font-bold text-foreground"
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
              className="flex flex-col gap-1 py-4"
            >
              {/* Company */}
              <span className="font-semibold text-foreground text-sm sm:text-base">
                {exp.company}
              </span>

              {/* Role & Period */}
              <div className="flex items-baseline justify-between gap-2 sm:gap-4 text-sm text-muted-foreground">
                <span>{exp.role}</span>
                <span className="shrink-0">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
