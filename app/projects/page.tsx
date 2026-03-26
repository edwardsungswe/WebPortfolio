import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { config, projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${config.name}`,
};

export default function Projects() {
  return (
    <div className="px-8 pt-32 pb-24 max-w-5xl">
      <AnimatedSection delay={0.1}>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Projects
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-16 max-w-2xl">
          Selected work
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
