"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { Terminal } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type TechIcon = IconType | LucideIcon;

const techStack: { label: string; Icon: TechIcon }[] = [
  { label: "React",        Icon: SiReact      },
  { label: "Next.js",      Icon: SiNextdotjs  },
  { label: "TypeScript",   Icon: SiTypescript },
  { label: "Node.js",      Icon: SiNodedotjs  },
  { label: "PostgreSQL",   Icon: SiPostgresql },
  { label: "Docker",       Icon: SiDocker     },
  { label: "Supabase",     Icon: SiSupabase   },
  { label: "Git",          Icon: SiGit        },
  { label: "Claude Code",  Icon: Terminal     },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-10 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label"
        >
          Tech Stack
        </motion.p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 pt-5"
        >
          {techStack.map(({ label, Icon }, index) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-foreground hover:border-foreground/25 hover:bg-secondary/60 transition-colors cursor-default"
            >
              <Icon className="w-4 h-4 shrink-0 text-foreground/80" />
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
