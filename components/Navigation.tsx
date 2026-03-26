"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/data";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-6">
        {isHome ? (
          <a
            href="#home"
            className="font-serif text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
          >
            {config.initials}
          </a>
        ) : (
          <Link
            href="/"
            className="font-serif text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
          >
            {config.initials}
          </Link>
        )}

        <ul className="flex items-center gap-8">
          {sections.map(({ id, label }) => {
            const isActive = isHome ? activeSection === id : false;
            const href = isHome ? `#${id}` : `/#${id}`;

            return (
              <li key={id}>
                {isHome ? (
                  <a
                    href={href}
                    className="relative font-sans text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="relative font-sans text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
