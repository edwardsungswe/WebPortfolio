"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="px-8 lg:px-16 py-32 border-t border-border">
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

      {/* Desktop: rows left + sticky description right */}
      <div className="hidden lg:flex gap-12 items-start">
        <div className="flex-1 min-w-0 lg:max-w-[56rem]">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              isActive={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <div className="w-[32rem] shrink-0 sticky top-24 self-start pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-serif text-xl font-semibold leading-snug mb-1">
                {active.title}
              </p>
              <p className="font-mono text-xs text-muted mb-5">{active.year}</p>
              <div className="border-t border-border mb-5" />
              <ul className="space-y-2 mb-5">
                {active.description.map((bullet, i) => (
                  <li key={i} className="font-sans text-sm text-muted leading-relaxed flex gap-2">
                    <span className="text-muted/40 shrink-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(active.githubUrl || active.liveUrl) && (
                <div className="flex gap-4">
                  {active.githubUrl && (
                    <a
                      href={active.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                    >
                      Live →
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="lg:hidden">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-1 py-8 border-b border-border">
            <p className="font-mono text-xs text-muted">{project.year}</p>
            <p className="font-serif text-xl font-semibold">{project.title}</p>
            <ul className="space-y-1 mt-2">
              {project.description.map((bullet, i) => (
                <li key={i} className="font-sans text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-muted/40 shrink-0">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
