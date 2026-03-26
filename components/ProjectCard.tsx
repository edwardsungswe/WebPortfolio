"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
}

export default function ProjectCard({ project, index, isActive, onMouseEnter }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.06 }}
      className="group flex gap-12 items-start py-8 border-b border-border hover:border-foreground/30 transition-colors cursor-default"
      onMouseEnter={onMouseEnter}
    >
      <span className="font-mono text-xs text-muted shrink-0 pt-1">{project.year}</span>
      <div className="flex-1 min-w-0">
        <h3
          className={`font-serif text-xl font-semibold transition-colors mb-2 ${
            isActive ? "text-foreground" : "group-hover:text-muted"
          }`}
        >
          {project.title}
        </h3>
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
    </motion.div>
  );
}
