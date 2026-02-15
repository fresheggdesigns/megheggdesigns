"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Smartphone, LayoutDashboard, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ICON_MAP: Record<string, LucideIcon> = {
  layers: Layers,
  smartphone: Smartphone,
  "layout-dashboard": LayoutDashboard,
};

export function ProductStrategy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="design-principles"
      className="bg-white px-6 py-24"
      aria-label="Product Strategy"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xs font-semibold uppercase tracking-wider text-black"
        >
          {siteConfig.productStrategy.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-2 text-3xl font-bold tracking-tight text-black md:text-4xl"
        >
          {siteConfig.productStrategy.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mt-4 max-w-2xl text-base text-black"
        >
          {siteConfig.productStrategy.subtitle}
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.productStrategy.principles.map((card, index) => {
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
                className="flex flex-col p-6 text-left"
              >
                <div className="flex flex-col items-start">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  >
                    <IconComponent
                      className="h-7 w-7 text-black"
                      aria-hidden
                    />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm text-black">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
