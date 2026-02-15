"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

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
      className="px-6 py-16 md:py-24 bg-white"
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
              className="flex gap-4 rounded-lg bg-background p-6"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={exp.logo}
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {exp.years}
                </p>
                <p className="mt-0.5 text-base font-medium text-foreground">
                  {exp.company}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
