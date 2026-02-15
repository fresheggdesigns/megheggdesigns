/**
 * Single source of truth for site name, navigation, and links.
 */

export const siteConfig = {
  name: "Fresh Egg Designs",
  shortName: "Meg Hegg",
  tagline: "Product Design",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Strategic Focus", href: "#strategic-focus" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Design Principles", href: "#design-principles" },
    { label: "Contact", href: "#contact" },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
