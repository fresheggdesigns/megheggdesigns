"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const staggerDelay = 50;
const fadeIn = {
  initial: { opacity: 0, x: -24 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * (staggerDelay / 1000),
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden px-6 py-24 md:min-h-[90vh]"
      aria-label="Home"
    >
      {/* Background: subtle gradient + optional noise */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(230,126,34,0.04),transparent)] bg-[length:100%_100%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[60%_40%] lg:items-center lg:gap-16">
        {/* Left column - 60% */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.p
            custom={0}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-base font-medium text-muted-foreground md:text-lg"
          >
            {siteConfig.hero.greeting}
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            <span style={{ color: "var(--hero-accent)" }}>{siteConfig.hero.name}</span>
          </motion.h1>
          <motion.h2
            custom={2}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {siteConfig.hero.title}
          </motion.h2>
          <motion.p
            custom={3}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-sm font-semibold text-foreground md:text-base"
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          <motion.ul
            custom={4}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-2 py-2"
            role="list"
          >
            {siteConfig.hero.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Check
                  className="h-5 w-5 shrink-0"
                  style={{ color: "var(--hero-accent)" }}
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={5}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Link
              href={siteConfig.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-foreground/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-accent)] focus-visible:ring-offset-2"
            >
              {siteConfig.hero.cta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Right column - 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/MegHegg-ProfilePicture.png"
            alt={siteConfig.hero.profileAlt}
            width={380}
            height={380}
            className="max-w-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
