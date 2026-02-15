"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

function formatDisplay(
  value: number,
  format: "number" | "compact",
  prefix: string,
  suffix: string
): string {
  const formatted =
    format === "compact" ? String(Math.round(value)) : Math.round(value).toLocaleString();
  return `${prefix}${formatted}${suffix}`;
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof siteConfig.impact.stats)[number];
  index: number;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const start = performance.now();
    const startValue = 0;
    const endValue = stat.value;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * eased;
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, stat.value]);

  const display = isInView
    ? formatDisplay(displayValue, stat.format, stat.prefix, stat.suffix)
    : formatDisplay(0, stat.format, stat.prefix, stat.suffix);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col"
    >
      <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {display}
      </p>
      <p className="mt-3 text-base font-normal text-white/90 md:text-lg">
        {stat.description}
      </p>
    </motion.div>
  );
}

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="w-full px-6 py-24"
      aria-label="Measurable Impact"
      style={{
        background: "linear-gradient(135deg, #1FB5A5 0%, #1a9d8f 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {siteConfig.impact.heading}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.impact.stats.map((stat, index) => (
            <StatCard key={stat.description} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
