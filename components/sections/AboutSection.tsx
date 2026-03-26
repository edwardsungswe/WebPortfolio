import AnimatedSection from "@/components/AnimatedSection";
import { config, skills } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="px-8 lg:px-16 py-32 max-w-5xl">
      <AnimatedSection direction="left">
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          About
        </p>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-12 max-w-3xl">
          Engineer by trade,
          <br />
          builder by nature.
        </h2>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="font-sans text-sm text-muted leading-relaxed">
              {config.bio}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs border border-border px-2 py-1 text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
