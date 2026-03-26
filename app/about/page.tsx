import AnimatedSection from "@/components/AnimatedSection";
import { config, experience, skills } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${config.name}`,
};

export default function About() {
  return (
    <div className="px-8 pt-32 pb-24 max-w-5xl">
      {/* Intro */}
      <AnimatedSection delay={0.1}>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          About
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-12 max-w-3xl">
          User First,
          <br />
          Always.
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <p className="font-sans text-sm text-muted leading-relaxed">
              {config.aboutBio}
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

      {/* Experience */}
      <AnimatedSection delay={0.4}>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Experience
        </p>
        <div>
          {experience.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-b border-border"
            >
              <div className="shrink-0 sm:w-40">
                <p className="font-mono text-xs text-muted">{item.period}</p>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold mb-0.5">
                  {item.role}
                </p>
                <p className="font-mono text-xs text-muted mb-3">
                  {item.company}
                </p>
                {item.description.length > 0 && (
                  <ul className="space-y-2">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="font-sans text-sm text-muted leading-relaxed flex gap-2">
                        <span className="text-muted/40 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
