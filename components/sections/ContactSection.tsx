import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="px-8 lg:px-16 py-32 max-w-5xl border-t border-border">
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
    </section>
  );
}
