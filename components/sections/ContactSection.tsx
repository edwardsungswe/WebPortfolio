import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { config } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="px-8 lg:px-16 py-32 max-w-5xl border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col">
          <AnimatedSection direction="left">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
              Contact
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-6 max-w-2xl">
              Let's work
              <br />
              together.
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <p className="font-sans text-sm text-muted leading-relaxed mb-16 max-w-md">
              Whether you have a project in mind, a role to fill, or just want to
              connect — I'd love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <ContactForm />
          </AnimatedSection>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <span className="font-mono text-xs text-muted">01</span>
            <span className="font-serif text-2xl font-bold">GitHub</span>
            <span className="font-sans text-xs text-muted">
              {config.social.github.replace("https://", "")}
            </span>
          </a>

          <div className="w-px h-8 bg-border" />

          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <span className="font-mono text-xs text-muted">02</span>
            <span className="font-serif text-2xl font-bold">LinkedIn</span>
            <span className="font-sans text-xs text-muted">
              {config.social.linkedin.replace("https://www.", "")}
            </span>
          </a>

          <div className="w-px h-8 bg-border" />

          <a
            href={`mailto:${config.email}`}
            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <span className="font-mono text-xs text-muted">03</span>
            <span className="font-serif text-2xl font-bold">Email</span>
            <span className="font-sans text-xs text-muted">{config.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
