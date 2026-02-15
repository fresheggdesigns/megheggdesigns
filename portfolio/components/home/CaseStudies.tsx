"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="px-6 py-24 bg-muted/40"
      aria-label="Featured Case Studies"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xs font-semibold uppercase tracking-wider text-[#33b8bc]"
        >
          {siteConfig.caseStudies.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          {siteConfig.caseStudies.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground"
        >
          {siteConfig.caseStudies.subtitle}
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.caseStudies.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link href={project.href} className="flex flex-col flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-muted/30">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Impact: {project.impact}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors group-hover:border-foreground/30 group-hover:bg-muted/50">
                    See case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
