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

  about: {
    label: "BACKGROUND",
    heading: "About Me",
    bio: "8+ years designing products across retail, events, and fintech. When I'm not working... I'm still working (on side projects) including 3D modeling in Blender, painting punny pet portraits and custom sneakers for my Etsy Shop: Fresh Egg Designs.",
    experience: [
      {
        company: "BBVA Compass",
        years: "2019 - 2020",
        title: "UX Designer",
        description: "Designed a digital banking native Mobile App and internal tools",
        iconBg: "navy",
      },
      {
        company: "Leap Technology",
        years: "2021 - 2023",
        title: "UX Designer",
        description:
          "Drove UX transformation for event management platforms serving NFL, Disney, and enterprise clients",
        iconBg: "dark",
      },
      {
        company: "DICK'S Sporting Goods",
        years: "2023 - Present",
        title: "Senior Product Designer",
        description:
          "Leading product strategy for footwear platforms, design systems, and innovation pipeline",
        iconBg: "teal",
      },
    ] as const,
  },

  strategicFocus: {
    label: "WHAT I LEAD",
    heading: "Current Strategic Focus",
    cards: [
      {
        title: "Golf Performance Optimization",
        category: "SPORT INNOVATION",
        description:
          "Spearheading a first of its kind, Golf Performance program using body motion capture and ground force data to create the most robust data pipeline in sport.",
        bullets: [
          "Leading Vendor Partnerships",
          "2 web applications",
          "Initial Pilot testing in 6 stores",
        ],
        icon: "layers",
      },
      {
        title: "Data & Insights Platforms",
        category: "PLATFORM STRATEGY",
        description:
          "Leading the modernization of our patented footwear ecosystem & sales-and-service software, balancing technical debt reduction with new capabilities to drive conversion.",
        bullets: [
          "850+ stores | 15K associates",
          "2M+ annual transactions",
          "Record-breaking sales performance",
        ],
        icon: "bar-chart",
      },
      {
        title: "Design Systems & Infrastructure",
        category: "CROSS-TEAM INFRASTRUCTURE",
        description:
          "Scaling design consistency and velocity across 9 autonomous product teams through governance, education, and systematic thinking.",
        bullets: [
          "25% adoption increase (FY'24)",
          "40% reduction in component redundancy",
          "2-week average delivery time reduction",
        ],
        icon: "layout-dashboard",
      },
    ] as const,
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
