"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const ICON_MAP = {
  mail: Mail,
  linkedin: Linkedin,
} as const;

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-80px 0px -80px 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full px-6 py-24"
      aria-label="Contact"
      style={{
        background: "linear-gradient(135deg, #1FB5A5 0%, #1a9d8f 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xs font-semibold uppercase tracking-wider text-white/90"
        >
          {siteConfig.cta.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          {siteConfig.cta.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-base text-white/90 md:text-lg"
        >
          {siteConfig.cta.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-3 text-sm text-white/80"
        >
          {siteConfig.cta.availability}
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {siteConfig.cta.buttons.map((button, index) => {
            const IconComponent = ICON_MAP[button.icon];
            const isPrimary = button.variant === "primary";
            return (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Link
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    button.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a9d8f] ${
                    isPrimary
                      ? "bg-[var(--hero-accent)] text-white hover:shadow-[var(--hero-accent)]/40"
                      : "border-2 border-white bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  <IconComponent className="h-4 w-4" aria-hidden />
                  {button.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
