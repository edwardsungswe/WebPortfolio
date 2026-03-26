"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceItem } from "@/lib/data";

interface TimelineProps {
  experience: ExperienceItem[];
}

const PRESENT = { year: 2027, month: 5 };

function toMonths(year: number, month: number): number {
  return year * 12 + month;
}

export default function Timeline({ experience }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const allStarts = experience.map((e) => toMonths(e.startYear, e.startMonth));
  const allEnds = experience.map((e) =>
    e.endYear != null && e.endMonth != null
      ? toMonths(e.endYear, e.endMonth)
      : toMonths(PRESENT.year, PRESENT.month)
  );

  const totalStart = Math.min(...allStarts);
  const totalEnd = Math.max(...allEnds);
  const totalSpan = totalEnd - totalStart;

  const firstYear = Math.floor(totalStart / 12);
  const lastYear = PRESENT.year;
  const years: number[] = [];
  for (let y = firstYear; y <= lastYear; y++) {
    years.push(y);
  }

  const active = experience[activeIndex];

  return (
    <>
      {/* Desktop: split panel */}
      <div className="hidden lg:flex gap-12 items-start">

        {/* Left — timeline rows */}
        <div className="flex-1 min-w-0">
          {experience.map((item, i) => {
            const itemStart = toMonths(item.startYear, item.startMonth);
            const itemEnd =
              item.endYear != null && item.endMonth != null
                ? toMonths(item.endYear, item.endMonth)
                : toMonths(PRESENT.year, PRESENT.month);
            const isPresent = item.endYear == null;
            const isActive = activeIndex === i;

            const leftPct = ((itemStart - totalStart) / totalSpan) * 100;
            const widthPct = ((itemEnd - itemStart) / totalSpan) * 100;

            return (
              <div
                key={i}
                className="flex gap-6 items-start cursor-pointer group py-8 border-b border-border"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                {/* Label */}
                <div
                  className={`w-48 shrink-0 text-right border-r-2 pr-4 transition-colors ${
                    isActive
                      ? "border-foreground"
                      : "border-border group-hover:border-foreground/30"
                  }`}
                >
                  <p
                    className={`font-serif text-xl font-semibold leading-snug transition-colors ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {item.role}
                  </p>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    {item.company}
                  </p>
                </div>

                {/* Bar track */}
                <div className="flex-1">
                  {/* Year labels */}
                  <div className="relative h-4 mb-1">
                    {years.map((year) => {
                      const pos =
                        ((toMonths(year, 1) - totalStart) / totalSpan) * 100;
                      if (pos < 0 || pos > 100) return null;
                      return (
                        <span
                          key={year}
                          className="absolute font-mono text-[10px] text-muted -translate-x-1/2"
                          style={{ left: `${pos}%` }}
                        >
                          {year}
                        </span>
                      );
                    })}
                  </div>

                  {/* Bar row */}
                  <div className="relative h-6 flex items-center">
                    {/* Grid lines */}
                    {years.map((year) => {
                      const pos =
                        ((toMonths(year, 1) - totalStart) / totalSpan) * 100;
                      if (pos < 0 || pos > 100) return null;
                      return (
                        <div
                          key={year}
                          className="absolute top-0 bottom-0 w-px bg-border"
                          style={{ left: `${pos}%` }}
                        />
                      );
                    })}

                    {/* Animated bar */}
                    <motion.div
                      className="absolute h-2.5 origin-left"
                      style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: i * 0.08,
                      }}
                    >
                      <div
                        className={`h-full w-full rounded-sm transition-opacity ${
                          item.isEducation
                            ? "border border-foreground/40 bg-foreground/10"
                            : isActive
                            ? "bg-foreground"
                            : "bg-foreground/50"
                        }`}
                      />
                    </motion.div>

                    {/* Start dot */}
                    <motion.div
                      className={`absolute w-2 h-2 rounded-full -translate-x-1/2 transition-colors ${
                        isActive ? "bg-foreground" : "bg-foreground/50"
                      }`}
                      style={{ left: `${leftPct}%` }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                    />

                    {/* End dot or arrow */}
                    {isPresent ? (
                      <motion.span
                        className={`absolute font-mono text-sm ml-1 transition-colors ${
                          isActive ? "text-foreground" : "text-foreground/50"
                        }`}
                        style={{ left: `${leftPct + widthPct}%` }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ delay: i * 0.08 + 0.4 }}
                      >
                        →
                      </motion.span>
                    ) : (
                      <motion.div
                        className={`absolute w-2 h-2 rounded-full -translate-x-1/2 transition-colors ${
                          isActive ? "bg-foreground" : "bg-foreground/50"
                        }`}
                        style={{ left: `${leftPct + widthPct}%` }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ delay: i * 0.08 + 0.4 }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right — sticky detail panel */}
        <div className="flex-1 min-w-0 sticky top-24 self-start pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="max-w-sm">
                <p className="font-serif text-xl font-semibold leading-snug mb-2">
                  {active.role}
                </p>
                <p className="font-mono text-xs text-muted">{active.company}</p>
                <p className="font-mono text-xs text-muted/60 mt-0.5">
                  {active.period}
                </p>
                <div className="border-t border-border mt-5 mb-5" />
                {active.description ? (
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {active.description}
                  </p>
                ) : (
                  <p className="font-sans text-sm text-muted/40 italic">
                    {active.isEducation ? "Education" : "—"}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile / tablet fallback */}
      <div className="lg:hidden">
        {experience.map((item, i) => (
          <div key={i} className="flex flex-col gap-1 py-8 border-b border-border">
            <p className="font-mono text-xs text-muted">{item.period}</p>
            <p className="font-serif text-lg font-semibold">{item.role}</p>
            <p className="font-mono text-xs text-muted">{item.company}</p>
            {item.description && (
              <p className="font-sans text-sm text-muted leading-relaxed mt-2">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
