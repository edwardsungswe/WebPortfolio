import AnimatedSection from "@/components/AnimatedSection";
import Timeline from "@/components/Timeline";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-8 lg:px-16 py-32 max-w-5xl border-t border-border">
      <AnimatedSection direction="left">
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Experience
        </p>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-16 max-w-2xl">
          Where I've worked.
        </h2>
      </AnimatedSection>

      <Timeline experience={experience} />
    </section>
  );
}
