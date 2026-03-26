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

      <AnimatedSection delay={0.4}>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
