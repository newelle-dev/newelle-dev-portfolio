"use client";

import { motion } from "framer-motion";
import CodeWindow from "../CodeWindow";

type AboutBioWindowProps = {
  bioLines: string[];
  isInView: boolean;
};

const AboutBioWindow = ({ bioLines, isInView }: AboutBioWindowProps) => {
  return (
    <CodeWindow fileName="about.md" className="rounded-xl">
      <div className="flex">
        <div className="py-6 px-4 border-r border-panel-border bg-secondary/50 select-none">
          {bioLines.map((_, index) => (
            <div key={index} className="text-line-number font-mono text-sm leading-7 text-right">
              {index + 1}
            </div>
          ))}
        </div>

        <div className="py-6 px-6 flex-1">
          {bioLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="font-mono text-sm md:text-base leading-7 whitespace-pre-wrap"
            >
              {line.startsWith("//") ? (
                <span className="text-emerald-400">{line}</span>
              ) : line ? (
                <span className="text-foreground">{line}</span>
              ) : (
                <br />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </CodeWindow>
  );
};

export default AboutBioWindow;
