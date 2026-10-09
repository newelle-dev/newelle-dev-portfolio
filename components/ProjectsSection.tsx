import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import ProjectFeatureSection from "./ProjectFeatureSection";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 relative scroll-mt-24">
      <div id="work" className="absolute -top-24" />
      <div className="container max-w-4xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="section-label"
        >
          Work
        </motion.p>

        <div className="flex flex-col gap-14 sm:gap-16">
          {featuredProjects.map((project, index) => (
            <ProjectFeatureSection key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
