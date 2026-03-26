"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 border-b border-border hover:border-foreground/30 transition-colors"
      >
        <span className="font-mono text-xs text-muted shrink-0 pt-1">{project.year}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-semibold group-hover:text-muted transition-colors mb-2">
            {project.title}
          </h3>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
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
        <span className="font-sans text-xs tracking-widest uppercase text-muted group-hover:text-foreground transition-colors shrink-0 pt-1">
          View →
        </span>
      </Link>
    </motion.article>
  );
}
