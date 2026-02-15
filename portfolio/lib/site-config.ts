/**
 * Single source of truth for site name, navigation, and links.
 */

export const siteConfig = {
  name: "Meg Hegg Design",
  shortName: "Meg Hegg",
  tagline: "Product Design",

  hero: {
    greeting: "Hey there, I'm",
    name: "Megan Hegg",
    title: "Senior Product Designer",
    subtitle: "Strategy-Driven | Systems Thinker | Innovation Leader",
    points: [
      "User-centered problem solving",
      "Business goals aligned with design",
      "Technical feasibility awareness",
      "Scaling for 15,000+ associates and millions of customers",
    ],
    cta: {
      label: "@MEGANHAAG",
      href: "https://linkedin.com/in/meganhaag",
    },
    profileAlt: "Megan Hegg - Senior Product Designer",
  },

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
