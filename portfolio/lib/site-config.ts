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
    body: "I solve complex problems at the intersection of user needs, business goals, and technical constraints, leading product vision for platforms serving 15,000+ associates and millions of customers.",
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
        logo: "/CompanyLogos/BBVA.png",
      },
      {
        company: "Leap Technology",
        years: "2021 - 2023",
        title: "UX Designer",
        description:
          "Drove UX transformation for event management platforms serving NFL, Disney, and enterprise clients",
        logo: "/CompanyLogos/LeapTech.png",
      },
      {
        company: "DICK'S Sporting Goods",
        years: "2023 - Present",
        title: "Senior Product Designer",
        description:
          "Leading product strategy for footwear platforms, design systems, and innovation pipeline",
        logo: "/CompanyLogos/DSG.png",
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

  impact: {
    heading: "Measurable Impact",
    stats: [
      {
        value: 15000,
        prefix: "",
        suffix: "+",
        format: "number",
        description: "Store Associates using platforms I design daily",
      },
      {
        value: 1,
        prefix: "",
        suffix: "",
        format: "number",
        description: "Patent application submitted for retail innovation",
      },
      {
        value: 9,
        prefix: "",
        suffix: "+",
        format: "number",
        description: "Product teams using components & patterns I built",
      },
      {
        value: 25,
        prefix: "",
        suffix: "%",
        format: "number",
        description: "Increase in Design System adoption (FY'24)",
      },
      {
        value: 40,
        prefix: "",
        suffix: "%",
        format: "number",
        description: "Reduction in development redundancy",
      },
      {
        value: 2,
        prefix: "$",
        suffix: "M+",
        format: "compact",
        description: "Annual transactions through platforms I lead",
      },
    ] as const,
  },

  caseStudies: {
    label: "HOW I WORK",
    heading: "Featured Case Studies",
    subtitle:
      "Deep-dives into strategic product challenges and how I approach solving them.",
    projects: [
      {
        slug: "clientelling-app",
        title: "Clientelling App",
        category: "Sales & Service",
        description:
          "Transformed complex workflow tool through chunking and progressive disclosure, dramatically improving training and adoption.",
        impact: "XX% training time reduction | XX% error reduction | Power user satisfaction",
        image: "/CaseStudyThumbnails/ClientellingThumbnail.png",
        href: "/case-studies/clientelling-app",
      },
      {
        slug: "footwear-request-app",
        title: "Footwear Request App",
        category: "Patented Mobile Innovation",
        description:
          "Drove record-breaking sales through mobile-first shopping experience that reimagined how associates serve customers.",
        impact: "43% volume increase | 28% conversion lift | Patent granted",
        image: "/CaseStudyThumbnails/FootwearThumbnail.png",
        href: "/case-studies/footwear-request-app",
      },
      {
        slug: "design-system-transformation",
        title: "Design System Transformation",
        category: "Scaling Consistency Across Teams",
        description:
          "Built governance model and semantic architecture enabling 9 teams to move faster while maintaining experience quality.",
        impact: "25% adoption increase | 40% component reduction | 2-week faster delivery",
        image: "/CaseStudyThumbnails/DesignSystemThumbnail.png",
        href: "/case-studies/design-system-transformation",
      },
    ] as const,
  },

  caseStudyDetails: {
    "clientelling-app": {
      heroImage: "/Clientelling/SidelineAssist-Frames 1.png",
      category: "Retail Innovation",
      title: "Clientelling App",
      subtitle:
        "Scaling Sales & Service Across 800+ Stores Through Strategic Product Vision",
      meta: {
        role: "Lead Product Designer, Strategic Vision & Research",
        timeline: "August 2024 - January 2025",
        team: "Product Management, Engineering, Store Operations",
        platform:
          "React Native Application for 850 Dick's Sporting Goods stores.",
      },
      metrics: [
        { value: "800+", description: "stores deployed nationwide" },
        { value: "16,000+", description: "DAU store associates" },
        { value: "3M+", description: "product scans monthly" },
        { value: "Patent Pending", description: "AI capability: Sport Search" },
        { value: "-1s", description: "Scan Performance (reduced from 2.5 seconds)" },
        {
          value: "Foundational",
          description: "for DICK's in-store digital strategy",
        },
      ],
      strategicContext: [
        "DICK'S Sporting Goods was investing heavily in transforming the in-store experience, but associates' tools were outdated & couldn't compete with online shopping offerings.",
        "Customers expected instant product knowledge, personalized recommendations, and seamless service, but associates were relying on fragmented systems, memory, and outdated handhelds.",
      ],
      businessProblem: [
        "Store associates couldn't deliver the elevated, personalized service DICK'S brand demanded.",
        "Without consolidated product information, loyalty data, and intelligent recommendations, we were losing sales opportunities and failing to build lasting customer relationships.",
      ],
      strategicChallenges: {
        label: "My Strategic Challenge",
        heading: "I was brought in specifically to:",
        challenges: [
          {
            title: "Define Product Vision",
            description:
              "for what would become Dick's primary sales & service platform",
            icon: "layers",
          },
          {
            title: "Lead Research & Discovery",
            description:
              "to understand real associate needs vs. assumed requirements",
            icon: "smartphone",
          },
          {
            title: "Cross-Team Collaboration",
            description:
              "across 9 product teams and align on shared infrastructure",
            icon: "layout-dashboard",
          },
          {
            title: "Design for Scale",
            description:
              "knowing this would serve 15K+ associates across 850 stores",
            icon: "layout-grid",
          },
        ],
      },
      researchAndDiscovery: {
        label: "Research & Discovery",
        subsections: [
          {
            title: "Ethnographic Studies",
            image: "/Clientelling/EthnographicImage.png",
            blocks: [
              {
                heading: "In-store observations across multiple store formats",
                bullets: [
                  "Real workflow patterns vs. documented processes",
                  "Associate workarounds for missing functionality",
                  "Customer expectations and frustration points",
                  "Technology constraints in retail environment (lighting, gloves, multitasking)",
                ],
              },
              {
                heading: "Key Insights That Changed Our Direction:",
                bullets: [
                  "Associates are expert multitaskers: any tool needs to support \"glanceable\" information while they're helping customers",
                  "Sport specialization varies wildly: Basketball experts struggle in fishing, creating need for cross-category guidance (+ AI opportunity)",
                  "Loyalty integration was invisible: Associates had no way to recognize or reward ScoreCard members in real-time",
                ],
              },
            ],
          },
          {
            title: "Journey Management",
            image: "/Clientelling/JourneyManagementImage.png",
            blocks: [
              {
                heading: "Created comprehensive journey maps showing:",
                bullets: [
                  "Current state pain points across different customer archetypes (Runner, Fitness, Hardlines)",
                  "Behind-the-scenes associate workflows",
                  "System touchpoints and friction",
                  "Opportunity areas for intervention",
                ],
              },
              {
                heading: "What made these artifacts valuable:",
                bullets: [
                  "Exposed gaps between customer expectations and associate capabilities",
                  "Showed how fragmented systems created service inconsistency",
                  "Built empathy across product, engineering, and ops teams",
                  "Became decision-making reference throughout development",
                ],
              },
            ],
          },
        ],
      },
      keyDesignDecisions: {
        label: "How I Work",
        heading: "Key Design Decisions",
        decisions: [
          {
            number: 1,
            title: "Single Scrolling Product Details Page (PDP) vs Tabbed Navigation",
            image: "/Clientelling/DesignDecision1.png",
            imagePosition: "left" as const,
            content: {
              decision:
                "Consolidated all product information into one long-scroll page instead of tabs",
              whyItMattered: [
                "Product detail pages are the #1 accessed feature (millions of views monthly)",
                "Associates needed information FAST while customers waited",
                "Research showed context-switching between tabs caused information blindness",
              ],
              tradeoff: [
                "Longer scroll depth meant more design debt to maintain",
                "Required careful information hierarchy to prevent overwhelming users",
                "Had to optimize for performance (lazy loading, image compression)",
              ],
              outcome: [
                "Average time-to-information reduced by 40% (internal metrics)",
                "Associates reported higher confidence in product knowledge",
                "Became template for all future content-heavy screens",
              ],
            },
          },
          {
            number: 2,
            title: "AI Sport Search as exploration vs. waiting for \"perfect\" data",
            image: "/Clientelling/DesignDecision2.png",
            imagePosition: "right" as const,
            content: {
              decision:
                "Launched patent-pending AI capability with imperfect but useful results",
              whyItMattered: [
                "DICK'S has a massive, complex product catalog. Associates struggled to recommend products across unfamiliar sports categories. AI could parse the catalog and suggest relevant products based on activity-based prompts.",
              ],
              strategy: [
                "Partnered closely with Development to prototype conversational product search",
                "Designed for 'directionally helpful' recommendations rather than perfect accuracy",
                "Created visual artifacts and documentation supporting patent application",
              ],
              tradeoff: [
                "Early versions had low adoption by teammates, who are very task-focused by nature",
                "Certain editing & updating features were not fully optimized",
              ],
              outcome: [
                "Patent pending for unique approach to retail product recommendations",
                "Demonstrated Dick's commitment to AI-powered retail innovation",
                "Created blueprint for future AI integrations across Store Tech",
              ],
            },
          },
        ],
      },
      reflectionsAndLearnings: {
        title: "Reflections & Learnings",
        cards: [
          {
            id: "what-i-learned",
            title: "What I Learned",
            icon: "layers",
            items: [
              {
                number: 1,
                heading: "Performance is a key feature, not technical debt.",
                body: "Early in the project, scan speed felt like an engineering problem. But research showed it was THE critical user experience issue. Now I treat performance as a core design requirement from day one, not something to optimize later.",
              },
              {
                number: 2,
                heading: "Adoption is as important as design quality.",
                body: "Building a beautiful app means nothing if associates don't use it. The cross-team workshops and alignment work were just as critical as the UI design. Impactful design work is as much about organizational influence as craft.",
              },
              {
                number: 3,
                heading: "Research artifacts should drive decisions, not just document them",
                body: "The journey maps and service blueprints became living documents we referenced throughout development. When scope debates arose, we'd return to the research to ground decisions in user reality.",
              },
              {
                number: 4,
                heading: "Design systems multiply impact",
                body: "The operational work of organizing files and applying our design system felt tedious in the moment, but it compounded over time. Three teams adopted our patterns, multiplying the impact far beyond Sideline Assist.",
              },
            ],
          },
          {
            id: "what-id-do-differently",
            title: "What I'd do Differently",
            icon: "smartphone",
            paragraphs: [
              "Innovate early and often: Sport Search emerged as an early concept and stands to be a key differentiator.",
              "Document the \"why\" more systematically: We made hundreds of design decisions, but not all were well-documented. Future designers working on Sideline Assist would benefit from better decision logs explaining trade-offs and context.",
            ],
          },
          {
            id: "impacts-on-process",
            title: "Impacts on my Process",
            icon: "layout-dashboard",
            listHeading: "This project taught me that design at scale is about:",
            listItems: [
              "Driving cross-functional vision",
              "Bridging research to strategy",
              "Building for longevity and future capabilities",
              "Creating organizational capacity for design excellence",
            ],
            closingParagraph:
              "Sideline Assist is now a cornerstone of Dick's in-store strategy, proof of how design leadership can deliver impact at enterprise scale.",
          },
        ],
      },
    },
  } as const,

  productStrategy: {
    label: "MY APPROACH",
    heading: "How I Think about Product Strategy",
    subtitle:
      "The best product development happens at the intersection of three forces",
    principles: [
      {
        title: "Human Needs",
        description:
          "Deep research to understand real problems, not assumed ones. I spend time in context—whether that's retail floors or user interviews—to uncover the friction that matters.",
        icon: "layers",
      },
      {
        title: "Business Impact",
        description:
          "Design decisions should move business metrics. I partner closely with product and leadership to ensure every initiative ladders up to strategic goals.",
        icon: "smartphone",
      },
      {
        title: "Systems Thinking",
        description:
          "Individual features are tactics. I focus on building platforms, patterns, and infrastructure that compound over time and scale across teams.",
        icon: "layout-dashboard",
      },
    ] as const,
  },

  cta: {
    label: "REACHING OUT",
    heading: "Let's Talk Product Strategy",
    description:
      "Whether you're hiring, looking to collaborate, or just want to nerd out about design systems and retail innovation, I'd love to connect!",
    availability:
      "Currently open to: Staff+ Product Design roles | Design Leadership opportunities",
    buttons: [
      {
        label: "Contact Me",
        href: "mailto:hello@megheggdesign.com",
        icon: "mail",
        variant: "primary",
      },
      {
        label: "View LinkedIn",
        href: "https://www.linkedin.com/in/megan-m-eberle",
        icon: "linkedin",
        variant: "outline",
      },
    ] as const,
  },

  footer: {
    description:
      "I solve complex problems at the intersection of user needs, business goals, and technical constraints, leading product vision for platforms serving 15,000+ associates and millions of customers.",
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/megan-m-eberle", icon: "linkedin" },
    ] as const,
    copyright: `© ${new Date().getFullYear()} Meg Hegg Design. All rights reserved.`,
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
