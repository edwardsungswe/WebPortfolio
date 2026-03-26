"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "left" | "right" | "up";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

function getInitial(direction: Direction) {
  if (direction === "left") return { opacity: 0, x: -60, y: 0 };
  if (direction === "right") return { opacity: 0, x: 60, y: 0 };
  return { opacity: 0, x: 0, y: 24 };
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "left",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
