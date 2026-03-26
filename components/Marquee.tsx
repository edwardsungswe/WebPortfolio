"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className }: MarqueeProps) {
  const repeated = Array(6).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...repeated, ...repeated].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span>{t}</span>
            <span className="text-muted">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
