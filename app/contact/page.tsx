import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { config } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${config.name}`,
};

export default function Contact() {
  return (
    <div className="px-8 pt-32 pb-24 max-w-5xl">
      <AnimatedSection delay={0.1}>
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Contact
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-6 max-w-2xl">
          Let's work
          <br />
          together.
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="font-sans text-sm text-muted leading-relaxed mb-16 max-w-md">
          Whether you have a project in mind, a role to fill, or just want to
          connect — I'd love to hear from you.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <AnimatedSection delay={0.4}>
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="space-y-10">
            <p className="font-mono text-xs tracking-widest uppercase text-muted">
              Find me at
            </p>

            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border-b border-border pb-8 hover:border-foreground transition-colors"
            >
              <span className="font-mono text-xs text-muted mt-1 w-4">01</span>
              <div>
                <p className="font-serif text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">
                  GitHub
                </p>
                <p className="font-sans text-xs text-muted">
                  {config.social.github.replace("https://", "")}
                </p>
              </div>
            </a>

            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border-b border-border pb-8 hover:border-foreground transition-colors"
            >
              <span className="font-mono text-xs text-muted mt-1 w-4">02</span>
              <div>
                <p className="font-serif text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">
                  LinkedIn
                </p>
                <p className="font-sans text-xs text-muted">
                  {config.social.linkedin.replace("https://www.", "")}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${config.email}`}
              className="group flex items-start gap-4 hover:border-foreground transition-colors"
            >
              <span className="font-mono text-xs text-muted mt-1 w-4">03</span>
              <div>
                <p className="font-serif text-2xl font-bold mb-1 group-hover:opacity-70 transition-opacity">
                  Email
                </p>
                <p className="font-sans text-xs text-muted">{config.email}</p>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
