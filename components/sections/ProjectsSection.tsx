import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-8 lg:px-16 py-32 max-w-5xl border-t border-border">
      <AnimatedSection direction="left">
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Projects
        </p>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-16 max-w-2xl">
          Selected work.
        </h2>
      </AnimatedSection>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
