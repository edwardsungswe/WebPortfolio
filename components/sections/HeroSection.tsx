"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { config } from "@/lib/data";

export default function HeroSection() {
  const [firstName, lastName] = config.name.split(" ");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section id="home">
      <motion.div
        style={{ opacity, y }}
        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
      >
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 pt-32 pb-20">
          <AnimatedSection delay={0.1}>
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
              {config.title} — Based in {config.location}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight font-bold mb-12">
              {firstName}
              <br />
              {lastName}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 max-w-lg">
              <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                {config.bio}
              </p>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="#projects"
                  className="font-sans text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  Projects →
                </a>
                <a
                  href="#about"
                  className="font-sans text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  About →
                </a>
                <a
                  href="#contact"
                  className="font-sans text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  Contact →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — portrait photo */}
        <div className="relative h-72 lg:h-auto">
          <Image
            src="/portrait.jpg"
            alt={config.name}
            fill
            priority
            className="object-cover object-[50%_40%]"
          />
        </div>
      </motion.div>

      {/* Marquee */}
      <AnimatedSection>
        <div className="py-6 border-t border-border overflow-hidden">
          <Marquee
            text={config.title}
            className="font-serif text-4xl text-muted/30 font-bold"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
