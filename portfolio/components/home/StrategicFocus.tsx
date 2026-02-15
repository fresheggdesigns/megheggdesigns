"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart3, LayoutDashboard, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ICON_MAP: Record<string, LucideIcon> = {
  layers: Layers,
  "bar-chart": BarChart3,
  "layout-dashboard": LayoutDashboard,
};

export function StrategicFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="strategic-focus"
      className="px-6 py-24"
      aria-label="Strategic Focus"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xs font-semibold uppercase tracking-wider text-[#33b8bc]"
        >
          {siteConfig.strategicFocus.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          {siteConfig.strategicFocus.heading}
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.strategicFocus.cards.map((card, index) => {
            const IconComponent = ICON_MAP[card.icon] ?? Layers;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col rounded-lg bg-muted/40 p-6 text-left"
              >
                <div className="flex flex-col items-start">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--hero-accent)" }}
                  >
                    <IconComponent className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <div
                    className="mt-3 h-0.5 w-12"
                    style={{ backgroundColor: "var(--hero-accent)" }}
                    aria-hidden
                  />
                </div>
                <p
                  className="mt-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {card.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-4 space-y-2" role="list">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-baseline gap-2 text-sm text-muted-foreground before:inline-block before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-foreground/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
