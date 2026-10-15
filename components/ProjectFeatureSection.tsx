import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import { Project } from "@/types/types";

interface ProjectFeatureSectionProps extends Project {
  index: number;
}

const ProjectFeatureSection = ({
  slug,
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
      {/* Outer Visual Showcase Card - Clicking navigates to Case Study */}
      <Link
        href={`/projects/${slug}`}
        className="block cursor-pointer focus:outline-hidden"
        aria-label={`View ${title} case study`}
      >
        <div className="relative w-full rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-zinc-100/90 dark:bg-zinc-900/50 p-2.5 sm:p-6 md:p-8 lg:p-5 transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/20 group-hover:shadow-lg dark:group-hover:shadow-black/40">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200/70 dark:border-white/10 shadow-xs dark:shadow-2xl">
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      </Link>

      {/* Bottom Metadata Row */}
      <div className="mt-3 sm:mt-4 flex items-center sm:items-baseline justify-between gap-2.5 px-0.5">
        {/* Left: Bold Title + Inline Tagline (Clickable link to case study) */}
        <Link
          href={`/projects/${slug}`}
          className="group/title flex flex-wrap items-baseline gap-x-2 focus:outline-hidden"
        >
          <h3 className="font-bold text-foreground text-base sm:text-lg tracking-tight group-hover/title:text-primary transition-colors">
            {title}
          </h3>
          <span className="hidden sm:inline text-muted-foreground text-sm sm:text-base font-normal">
            {tagline || description}
          </span>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={`/projects/${slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors py-1 px-1.5 sm:p-1"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFeatureSection;
