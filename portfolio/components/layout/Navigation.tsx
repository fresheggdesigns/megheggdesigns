"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_BAR_HEIGHT = 72;

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = siteConfig.nav
        .filter((item) => item.href.startsWith("#") && item.href !== "#home")
        .map((item) => item.href.slice(1));
      let current: string | null = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= NAV_BAR_HEIGHT + 80) current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-3 transition-shadow duration-300",
          "supports-[backdrop-filter]:bg-nav/80 backdrop-blur-md",
          scrolled && "shadow-nav"
        )}
        style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
      >
        <nav
          className="flex h-14 w-full max-w-5xl items-center justify-between rounded-full bg-nav px-4 py-2 md:px-6"
          aria-label="Main navigation"
        >
          {/* Logo - left */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex shrink-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-white text-nav text-center"
              aria-hidden
            >
              <span className="text-[9px] font-semibold leading-tight uppercase">
                {siteConfig.shortName}
              </span>
              <span className="text-[6px] font-medium leading-tight uppercase opacity-90">
                {siteConfig.tagline}
              </span>
            </div>
            <span className="hidden font-medium text-white/95 sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {siteConfig.nav.map((item) => {
              const id = item.href === "#home" ? "home" : item.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white",
                      isActive &&
                        "bg-nav-active text-white shadow-nav-pill"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              aria-hidden
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-nav shadow-2xl md:hidden"
              aria-label="Mobile menu"
            >
              <div className="flex h-14 items-center justify-between px-4">
                <span className="font-medium text-white">{siteConfig.name}</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-active"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden />
                </button>
              </div>
              <ul className="flex flex-col gap-1 px-4 py-6" role="list">
                {siteConfig.nav.map((item, index) => {
                  const id = item.href === "#home" ? "home" : item.href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{
                        delay: 0.05 * index,
                        duration: 0.25,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full rounded-full px-4 py-3 text-left text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white",
                          isActive && "bg-nav-active text-white"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
