import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types/types";

interface ProjectFeatureSectionProps extends Project {
  index: number;
}

export const ProjectFeatureSection = ({
  title,
  tagline,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  index,
}: ProjectFeatureSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group w-full flex flex-col"
    >
      {/* Outer Visual Showcase Card */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-zinc-100/90 dark:bg-zinc-900/50 p-4 sm:p-7 md:p-10 lg:p-12 transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/20">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`View live site for ${title}`}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200/70 dark:border-white/10 shadow-xs dark:shadow-2xl">
              <img
                src={imageUrl}
                alt={`${title} preview`}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </a>
        ) : (
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200/70 dark:border-white/10 shadow-xs dark:shadow-2xl">
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        )}
      </div>

      {/* Bottom Metadata Row */}
      <div className="mt-3.5 sm:mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 px-1">
        {/* Left: Bold Title + Inline Tagline */}
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-bold text-foreground text-base sm:text-lg tracking-tight">
            {title}
          </h3>
          <span className="text-muted-foreground text-sm sm:text-base font-normal">
            {tagline || description}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
              aria-label={`View source code for ${title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              <span>View work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFeatureSection;
