"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const ICON_BG: Record<string, string> = {
  navy: "#1e3a5f",
  dark: "#1a1a1a",
  teal: "#12797e",
};

function getInitials(company: string): string {
  if (company.includes("BBVA")) return "BBVA";
  if (company.includes("Leap")) return "Leap";
  if (company.includes("DICK'S")) return "DICK'S";
  return company.slice(0, 2).toUpperCase();
}

export function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 py-24 bg-muted/40"
      aria-label="About Me"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#33b8bc]">
          {siteConfig.about.label}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {siteConfig.about.heading}
        </h2>
        <p className="mt-6 max-w-3xl text-base text-foreground md:text-lg">
          {siteConfig.about.bio}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.about.experience.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--hero-accent)]/30 hover:shadow-lg hover:shadow-foreground/10"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: ICON_BG[exp.iconBg] ?? ICON_BG.dark }}
              >
                {getInitials(exp.company)}
              </div>
              <p
                className="mt-4 text-sm font-medium"
                style={{ color: "var(--hero-accent)" }}
              >
                {exp.years}
              </p>
              <p className="mt-1 text-base font-medium text-foreground">
                {exp.company}
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
