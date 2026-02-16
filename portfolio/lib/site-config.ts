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
        slug: "live-event-technology",
        title: "Live Event Technology",
        category: "Enterprise Platform Transformation",
        description:
          "Drove UX strategy through field research at NFL, Disney, and Live Nation—redesigning complex automation tools into guided flows that cut training time and support burden.",
        impact: "Training time 4-6 → 2-3 weeks | Reduced support tickets | Increased adoption | Positive client feedback",
        image: "/CaseStudyThumbnails/LiveEventThumbnail.png",
        href: "/case-studies/live-event-technology",
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
    "footwear-request-app": {
      heroImage: "/Footwear/ShoeRunnerHeroImage.png",
      category: "Retail Innovation",
      title: "Footwear Request Modernization",
      subtitle:
        "Building the Business Case to Redesign a $2B Revenue Driver",
      meta: {
        role: "Lead Product Designer, Strategic Vision & Modernization Lead",
        timeline:
          "August 2024 - January 2025 (18+ months active modernization, ongoing optimization)",
        team:
          "Product Management, Engineering (RN/Kiosk), Business Analytics, Store Operations",
        platform:
          "Customer-facing kiosks + Associate fulfillment app across 850 stores",
      },
      metrics: [
        {
          value: "~$2B",
          description: "in annual footwear sales enabled by this platform",
        },
        {
          value: "95,000+",
          description: "shoe requests in single day (Black Friday record)",
        },
        {
          value: "+23%",
          description: "YoY increase in kiosk request volume",
        },
        {
          value: "~40M",
          description: "shoes requested annually (FY'24)",
        },
        {
          value: "Patent Protected",
          description: "request and fulfillment system",
        },
      ],
      strategicContext: [
        "Footwear represents one of Dick's Sporting Goods' highest-margin, highest-volume categories. The ShoeRunner platform, a customer kiosk for requesting sizes + an associate app for fulfillment, has been processing tens of millions of requests annually for 7+ years.",
        "But the platform was aging badly:",
        {
          bullets: [
            "Legacy tech stack that couldn't support modern features (recommendations, personalization, inventory visibility)",
            "Fragmented experiences across customer and associate touchpoints",
            "No integration with newer platforms (Sideline Assist, mobile app)",
            "Growing technical debt making even minor updates expensive and risky",
          ],
        },
      ],
      theStakes: [
        "Stakeholders disagreed on whether platform modernization was worth the investment vs. continuing to patch the existing system.",
        "The critical question: Could we prove that design-led modernization would unlock measurable business value, not just improve aesthetics?",
        "The Political Reality: This wasn't a greenfield project—it was organizational change:",
        {
          bullets: [
            "Engineering wanted to rebuild the entire platform (18+ month timeline)",
            "Operations feared disruption to proven workflows during peak season",
            "Leadership needed ROI justification before approving multi-quarter investment",
          ],
        },
      ],
      myChallenge:
        "Build consensus across these stakeholders while designing a modernization strategy that balanced ambitious vision with pragmatic execution.",
      strategicApproach: {
        label: "My Strategic Approach",
        heading: "Research-First Strategy",
        methods: [
          {
            title: "In-store Ethnographic Studies",
            icon: "smartphone",
            details: [
              "across 12 stores:",
              "Observed customers struggling with kiosk navigation and request completion",
              "Watched associates deal with fulfillment inefficiencies and poor request visibility",
            ],
          },
          {
            title: "User Interviews & Usability Testing",
            icon: "smartphone",
            details: [
              "110s of feedback entries synthesized showing customer frustration with legacy kiosk UX",
              "25+ associate interviews revealing fulfillment pain points",
              "Specific store process variations highlighting inconsistent implementation",
            ],
          },
        ],
        keyInsight: {
          icon: "layout-dashboard",
          text: "The problem wasn't just old UI, it was a fragmented ecosystem where customer requests, associate workflows, and inventory systems didn't talk to each other effectively.",
        },
      },
      strategicDecisionsTradeoffs: {
        label: "Strategic Decisions & Tradeoffs",
        heading: "Design Driven Impacts",
        decisions: [
          {
            number: 1,
            title: "Phased modernization vs. complete platform rebuild",
            image: "/Footwear/DesignThumbnail1.png",
            imagePosition: "left" as const,
            blocks: [
              {
                heading: "The decision",
                content:
                  "Phased approach starting with customer kiosk, then associate app, then backend integration.",
              },
              {
                heading: "Why it mattered",
                content:
                  "Engineering wanted a 24+ month rebuild. Operations feared disruption during holiday seasons.",
              },
              {
                heading: "The strategy",
                items: [
                  "Phase 1: Modernize associate fulfillment app",
                  "Phase 2: Redesign customer kiosk experience",
                  "Phase 3: Platform integration and advanced features (personalization, inventory visibility)",
                ],
              },
              {
                heading: "The tradeoff",
                items: [
                  "Compromises on ideal state due to legacy constraints",
                  "More design effort to maintain cohesion across phases",
                  "Careful sequencing required",
                ],
              },
            ],
          },
          {
            number: 2,
            title: "Associate app efficiency vs. feature richness",
            image: "/Footwear/DesignThumbnail2.png",
            imagePosition: "right" as const,
            blocks: [
              {
                heading: "The decision",
                content:
                  "Prioritize speed-to-deliver & general performance improvements over adding new capabilities.",
              },
              {
                heading: "Research insight",
                content:
                  "Associates didn't need more features – they needed better visibility and faster workflows. The legacy app hid critical information.",
              },
              {
                heading: "Redesign priority",
                items: [
                  "Clear queue visibility",
                  "Location intelligence (backstock, floor, other sizes)",
                  "Smart clustering (grouping requests by stockroom location – patent-protected)",
                  "Simple, fast checkout flow",
                ],
              },
              {
                heading: "The tradeoff",
                items: [
                  "Delayed parity with new features across brand experiences",
                  "Required robust testing",
                ],
              },
              {
                heading: "The outcome",
                items: ["Fewer fulfillment errors", "Associate satisfaction improved"],
              },
            ],
          },
          {
            number: 3,
            title: "When to hold ground vs. compromise",
            image: "/Footwear/DesignThumbnail3.png",
            imagePosition: "left" as const,
            blocks: [
              {
                heading: "The challenge",
                content:
                  "Operations wanted to delay improvements. Finance questioned ROI of \"nice to have\" features.",
              },
              {
                heading: "My approach",
                items: [
                  "Non-negotiables: Performance, core UX for conversion",
                  "Negotiables: Advanced features, personalization, phasing of rollout",
                  "Data-driven advocacy: Impact mapping for financial cases",
                ],
              },
              {
                heading: "Example",
                content:
                  "Operations resisted clustered request delivery. Time-motion studies proved it reduced trips by 40%. Labor savings justified the change.",
              },
              {
                heading: "Lesson learned",
                content:
                  "Strategic design leadership means knowing when to push hard and when to compromise. Hold the line on high-impact changes; show flexibility elsewhere.",
              },
            ],
          },
        ],
      },
      buildingAlignment: {
        label: "Building Alignment",
        heading: "Cross-Functional Leadership & Influence",
        columns: [
          {
            title: "Stakeholder Landscape",
            items: [
              "Product Management: Needed roadmap clarity and prioritization framework",
              "Engineering: Wanted technical architecture freedom",
              "Operations: Feared disruption and training burden",
              "Finance: Demanded ROI justification",
              "Store Leadership: Cared about peak season performance",
            ],
          },
          {
            title: "Research-based Storytelling",
            items: [
              "Journey maps showing customer frustration AND associate pain",
              "Service blueprints connecting frontend UX to backend inefficiency",
              "Videos of real customers abandoning kiosks",
              "Associate quotes about fulfillment stress during peak hours",
              "This created shared understanding of the problem space across functions.",
            ],
          },
          {
            title: "Impact Mapping & Workshops",
            items: [
              "Facilitated sessions where stakeholders co-created the business case",
              "Connected each pain point to specific business metrics they cared about",
              "Let Finance help quantify the ROI (so they owned the projections)",
              "Gave Operations input on rollout strategy (so they felt heard)",
            ],
          },
          {
            title: "Phased Roadmap Co-creation",
            items: [
              "Didn't dictate the timeline—collaborated with Engineering on what was feasible",
              "Let Operations define seasonal constraints and pilot store selection",
              "Built in feedback loops and decision points",
            ],
          },
          {
            title: "Result",
            items: [
              "Full stakeholder buy-in before design execution began",
              "Impact mapping became standard practice across Store Tech",
              "Established me as strategic partner, not just 'the designer'",
            ],
          },
        ],
      },
      designAtScale: {
        label: "Driving Design at Scale",
        heading: "Design Excellence",
        cards: [
          {
            title: "Design system integration",
            icon: "layers",
            items: [
              "Applied Store Tech design system for consistency across kiosk and app",
              "Created footwear-specific patterns that other teams could reuse",
              "Built component library that reduced engineering implementation time",
            ],
          },
          {
            title: "Responsive design for new hardware",
            icon: "smartphone",
            items: [
              "New Samsung kiosks required flexible layouts",
              "Designed for 3 screen sizes without fragmenting experience",
              "Created scalability guidelines for future hardware upgrades",
            ],
          },
          {
            title: "Documentation and handoff:",
            icon: "file-text",
            items: [
              "Detailed specs reducing engineering questions by ~60%",
              "Interactive Figma prototypes for stakeholder review",
              "Clear decision logs explaining design rationale",
            ],
          },
        ],
        roadmap: [
          {
            phase: 1,
            title: "Associate App Modernization",
            status: "In Progress",
            items: [
              "Visual product-first browsing",
              "Responsive design for new hardware",
              "Performance optimization",
              "+ Result: record breaking fulfillment quantities",
            ],
          },
          {
            phase: 2,
            title: "Customer Kiosk Redesign",
            status: "Pending",
            items: [
              "Visual product-first browsing",
              "Responsive design for new hardware",
              "Performance optimization",
              "+ Result: Decreased process abandonment",
            ],
          },
          {
            phase: 3,
            title: "Platform Integration",
            status: "Roadmap",
            items: [
              "Connect with Sideline Assist ecosystem",
              "Unified customer view across kiosk, mobile, associate app",
              "Real-time inventory visibility",
              "Cross-platform request handoff",
            ],
          },
          {
            phase: 4,
            title: "AI & Personalization",
            status: "Roadmap",
            items: [
              "Size prediction based on purchase history",
              "Style recommendations via AI",
              "Dynamic inventory allocation",
              "Predictive restocking",
            ],
          },
        ],
      },
      reflectionsAndLearnings: {
        label: "What I Lead",
        title: "Reflections & Learnings",
        layout: "stacked" as const,
        cards: [
          {
            id: "what-i-learned",
            title: "What I Learned",
            icon: "layers",
            items: [
              {
                number: 1,
                heading: "The business case IS the design work",
                body: "Early in my career, I thought my job was making beautiful interfaces. This project taught me that strategic design leadership is about building the case for change. The impact mapping work that unlocked budget approval was as important as the UI redesign itself.",
              },
              {
                number: 2,
                heading: "Research creates organizational alignment",
                body: "Journey maps and service blueprints weren't just design artifacts—they were alignment tools that got Finance, Operations, and Engineering on the same page. Seeing real customer abandonment videos was more persuasive than any deck I could make.",
              },
              {
                number: 3,
                heading: "Constraints breed better solutions",
                body: "The phased approach was born from constraints (limited eng capacity, seasonal deadlines, risk aversion). But it resulted in a smarter strategy than the big-bang rebuild would have. Ship value faster, learn continuously, build confidence.",
              },
              {
                number: 4,
                heading: "Influence requires understanding what stakeholders care about",
                body: "Operations didn't care about pixel-perfect UI—they cared about training burden and peak season stability. Finance didn't care about user delight—they cared about ROI and payback period. I learned to frame design value in stakeholder-specific terms rather than using designer language.",
              },
              {
                number: 5,
                heading: "Impact compounds through organizational change",
                body: "The real win wasn't the redesigned kiosk—it was establishing impact mapping as standard practice. Now other designers use these frameworks, multiplying the impact far beyond ShoeRunner. Staff-level work is about changing how the organization works, not just shipping features.",
              },
            ],
          },
          {
            id: "what-id-do-differently",
            title: "What I'd do Differently",
            icon: "smartphone",
            paragraphs: [
              "Start platform integration sooner: We designed Phases 1 & 2 somewhat independently, then realized we needed tighter integration with Sideline Assist and loyalty. If I'd engaged those teams earlier, we could have designed for the ecosystem from day one.",
              "Build in more feedback loops post-launch: We shipped, celebrated the Black Friday record, and moved on to the next thing. I wish I'd built in quarterly optimization cycles to continuously improve based on usage data. There are probably easy wins we're leaving on the table.",
              "Document decisions more systematically: We made hundreds of design and strategy decisions, but not all were well-documented. Future designers would benefit from better decision logs explaining the \"why\" behind choices.",
              "Push harder on A/B testing: We used analytics heavily but didn't do much experimentation. I should have advocated for testing different kiosk flows or associate app approaches to optimize faster.",
            ],
          },
          {
            id: "impacts-on-process",
            title: "Impacts on my Process",
            icon: "layout-dashboard",
            before: {
              heading: "Before ShoeRunner",
              items: [
                "Focused on craft and execution",
                "Led with mockups and prototypes",
                "Assumed stakeholders understood design value",
              ],
            },
            after: {
              heading: "After ShoeRunner",
              items: [
                "Lead with business case and ROI",
                "Use research to build organizational alignment",
                "Frame design value in stakeholder-specific language",
                "Think in platforms and ecosystems, not just features",
                "Measure success in business metrics, not just UX metrics",
              ],
            },
            closingParagraph:
              "ShoeRunner proved that design leadership at scale requires equal parts craft, strategy, and organizational influence. The most beautiful redesign means nothing if you can't build the case for it, align stakeholders, and prove it moves the business.",
          },
        ],
      },
    },
    "live-event-technology": {
      heroImage: "/LiveEventTech/LeapTechHeroImage.png",
      category: "Enterprise Platform Transformation",
      title: "Live Event Technology",
      subtitle:
        "Driving UX Strategy Through Field Research & Complex Feature Redesign",
      meta: {
        role: "User Experience Designer, Research & Strategy Lead",
        timeline: "2021 - December 2022",
        team: "Product Management, Engineering, Event Operations, Client Success",
        clients:
          "NFL, Disney, Live Nation, major sports & entertainment venues",
      } as { role: string; timeline: string; team: string; platform?: string; clients?: string },
      metrics: [
        {
          value: "High-profile event research",
          description: "at NFL, Disney, and Live Nation venues",
        },
        {
          value: "Presented to Senior Leadership",
          description: "multiple times on strategic findings",
        },
        {
          value: "82% mobile usage",
          description: "discovery driving mobile-first strategy shift",
        },
        {
          value: "Cognitive overload reduction",
          description: "through automation tool redesign",
        },
        {
          value: "Training time improvement",
          description: "for internal power users",
        },
        {
          value: "Design system foundation",
          description: "(Admin v3) supporting product scalability",
        },
      ],
      strategicContext: [
        "Leap (then Patron) Technology provided event management software for the world's largest venues and events—NFL games, Disney experiences, major concerts. The platform handled ticketing, registration, check-in, loyalty programs, and on-site activations for millions of attendees annually.",
        "The complexity:",
        {
          bullets: [
            "Diverse clients with wildly different needs (NFL vs. Disney vs. music festivals)",
            "High-stakes environments where downtime = revenue loss and reputation damage",
            "Power user tools so complex they required weeks of training",
            "Mobile-first reality (82% of end users on mobile) vs. desktop-first platform",
            "Rapid event cycles with no room for iteration during live events",
          ],
        },
      ],
      businessChallengeRightHeading: "My Challenge",
      businessProblem: [
        "The company was growing through acquisition and facing pressure to modernize the platform to compete with newer event tech companies, reduce training burden for clients (onboarding took 4-6 weeks), improve end-user experience at events (attendee-facing touchpoints), & scale product capabilities without fragmenting the experience.",
        "As one of the few designers at the company, I needed to:",
        {
          bullets: [
            "Establish research as strategic input (not just validation)",
            "Build the case for UX investment in an engineering-led culture",
            "Redesign complex power user tools without alienating existing users",
            "Drive mobile-first thinking across the organization",
            "Balance immediate fixes with long-term platform strategy",
          ],
        },
      ],
      strategicApproach: {
        label: "STRATEGIC APPROACH",
        heading: "Research as Organizational Change",
        introParagraph:
          "When I joined, 'user research' meant occasional client calls. There was no systematic approach to understanding real user needs or field validation. What I established:",
        methods: [
          {
            title: "On-site field research program",
            icon: "layout-grid",
            details: ["at high-profile events"],
          },
          {
            title: "Ethnographic observation",
            icon: "smartphone",
            details: ["of event staff during live operations"],
          },
          {
            title: "End-user testing",
            icon: "layout-dashboard",
            details: ["of attendee-facing features in real environments"],
          },
          {
            title: "Stakeholder interviews",
            icon: "file-text",
            details: ["with clients (event managers, operations directors)"],
          },
          {
            title: "Analytics integration",
            icon: "bar-chart",
            details: ["(introduced Pendo) for data-driven discovery"],
          },
        ],
      },
      fieldResearchAtScale: {
        label: "HOW I WORK",
        heading: "Field Research at Scale",
        images: [
          "/LiveEventTech/ResearchImage1.png",
          "/LiveEventTech/ResearchImage2.png",
          "/LiveEventTech/ResearchImage3.png",
        ],
        highProfileEventStudies: {
          title: "High-Profile Event Studies",
          description:
            "Over 2 years, I traveled to 3 major events to conduct immersive research:",
          items: [
            "NFL games: Observing check-in flows, credential validation, real-time operations",
            "Disney events: Understanding multi-day event complexity and attendee engagement",
            "Live Nation venues: Studying high-volume, time-sensitive operations",
          ],
        },
        whatIWasInvestigating: {
          title: "What I Was Investigating",
          subsections: [
            {
              heading: "End-to-end user experiences:",
              bullets: [
                "How do event staff use our tools under pressure?",
                "Where do workflows break down during live events?",
                "What workarounds have teams created?",
                "How do attendees experience our front-end interfaces?",
              ],
            },
            {
              heading: "Feature-specific validation:",
              bullets: [
                "Testing new releases in real conditions (not lab usability)",
                "Identifying performance issues before they became critical",
                "Understanding context-specific usage patterns",
              ],
            },
            {
              heading: "Research Artifacts & Communication:",
              bullets: [
                "After each event, I created comprehensive readouts:",
                "Consolidated findings with video evidence and quotes",
                "Journey maps showing end-to-end event staff workflows",
                "Pain point prioritization tied to business impact",
                "Opportunity areas for product improvements",
              ],
            },
          ],
        },
        sitemapNotes: {
          title: "Sitemap Traffic Notes",
          notes: [
            "Initial crowd rushed in for Draft Theater / standing stage",
            "Pain-point: miscommunication as attendees were grabbing standing stage space even though the event wasn't open yet",
            "Once the problem was identified, attendees dispersed back into the event areas, approaching the closest kiosks",
            "Subway had their staff standing in the crowd of attendees trying to direct towards their station as an Autograph event was in the SC event scheduled past 10am in the schedule. Most people did not realize it was happening. It highlights both the lack of ability for people to know of an event activity but are unable to connect the dots.",
          ],
        },
        keyInsights: {
          title: "Key Insights That Drove Strategy",
          insights: [
            {
              number: 1,
              title: "Mobile-first reality",
              body: "82% of end users on mobile devices. This single finding shifted organizational strategy. We were building desktop-first experiences when users were overwhelmingly on phones and tablets.",
              impact:
                "Drove investment in mobile-responsive redesigns and tablet-optimized interfaces for on-site staff.",
            },
            {
              number: 2,
              title: "Power user tools create training bottlenecks",
              body: "The Automations feature was so complex it required dedicated training sessions. Clients couldn't self-serve, creating dependency on our support team.",
              impact: "Justified the Automations redesign project (detailed below).",
            },
            {
              number: 3,
              title: "Real-time performance is non-negotiable",
              body: "During live events, even 2-3 second delays cascade into major operational problems. Performance wasn't a 'nice to have'—it was existential.",
              impact: "Established performance budgets as design requirements.",
            },
          ],
        },
      },
      featureRedesign: {
        label: "FEATURE REDESIGN",
        problemHeading: "The Problem: Cognitive Overload at Scale",
        problemDescription:
          "The Automations tool was powerful but nearly unusable. It allowed event managers to create complex rules for attendee engagement. Example use case: 'Query all registered attendees → Filter for those who interacted with gamification → Award top 50 with prizes.'",
        images: [
          "/LiveEventTech/OriginalDesign1.png",
          "/LiveEventTech/Redesign1.png",
          "/LiveEventTech/PainPointsImage3.png",
        ] as [string?, string?, string?],
        currentStateProblems: [
          "Overwhelming interface: 40+ input fields visible simultaneously",
          "No progressive disclosure: All configuration options exposed at once",
          "Unclear flow: Users didn't know where to start or what order to complete steps",
          "Cryptic error messages: Failed validations with no clear guidance",
          "Minimal contextual help: Users relied on external documentation",
        ],
        businessImpact: [
          "4-6 week training requirement for new clients",
          "High support burden: Repeated questions about the same workflows",
          "Client frustration: 'Powerful but impossible to use'",
          "Limited adoption: Many clients avoided the feature entirely",
        ],
      },
      redesignVsRebuild: {
        title: "Redesign vs Rebuild",
        options: [
          {
            label: "OPTION A",
            title: "Incremental improvements to existing interface",
            pros: ["Lower risk, faster to ship"],
            cons: ["Wouldn't solve fundamental cognitive overload"],
          },
          {
            label: "OPTION B",
            title: "Complete rebuild with new data model",
            pros: ["Clean slate, could optimize everything"],
            cons: ["12+ month timeline, high technical risk"],
          },
          {
            label: "OPTION C",
            title: "Stepwise wizard interface",
            pros: [
              "Drastically reduces cognitive load through chunking",
              "Reuses existing data model (lower eng investment)",
              "Progressive disclosure guides users through complexity",
            ],
            cons: ["Requires changing user mental model"],
            selected: true,
          },
        ],
        justification:
          "Why I advocated for Option C: The core problem wasn't the data model, it was information architecture and presentation. A wizard could deliver **80% of the value** with **30% of the engineering cost.**",
        steps: [
          {
            number: 1,
            title: "Chunking through stepped progression",
            description: "Broke the monolithic form into discrete steps:",
            items: [
              "Step 1: Define audience (who are you targeting?)",
              "Step 2: Set conditions (what criteria must they meet?)",
              "Step 3: Configure action (what happens to them?)",
              "Step 4: Review & schedule (when does this run?)",
            ],
          },
          {
            number: 2,
            title: "Contextual help at every step",
            items: [
              "Inline tooltips explaining complex concepts",
              "Example use cases showing common patterns",
              "Visual previews of what will happen",
            ],
          },
          {
            number: 3,
            title: "Intelligent error handling",
            description: "Real-time validation preventing bad states",
            items: [
              "Clear error messages with specific fixes",
              "Visual indicators on which step has issues",
            ],
          },
          {
            number: 4,
            title: "Progressive disclosure",
            description: "Show only relevant fields based on previous choices",
            items: [
              "Advanced options hidden behind \"Show more\" patterns",
              "Simplified defaults for common use cases",
            ],
          },
        ],
      },
      measurableOutcomes: {
        label: "MEASURABLE OUTCOMES",
        outcomes: [
          {
            title: "Reduced training time",
            description:
              "from 4-6 weeks to 2-3 weeks (estimated—need to verify)",
          },
          {
            title: "Improved user confidence",
            description: "in post-launch surveys",
          },
          {
            title: "Reduced support tickets",
            description: "for Automations feature",
          },
          {
            title: "Increased adoption",
            description: "of advanced automation capabilities",
          },
          {
            title: "Positive client feedback",
            description: "on ease of use",
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
                heading: "Field research creates organizational buy-in",
                body: "Showing video from real events was more persuasive than any deck. Stakeholders who had resisted UX investment shifted when they saw actual users struggling.",
              },
              {
                number: 2,
                heading: "Complex doesn't have to mean complicated",
                body: "The Automations tool was inherently complex, but information architecture and progressive disclosure could make it manageable. Chunking and wizard patterns turned a 40-field form into a guided flow.",
              },
              {
                number: 3,
                heading: "Research is a product",
                body: "Research readouts, journey maps, and synthesis materials became strategic assets. Making them discoverable and reusable helped align product, engineering, and client success.",
              },
              {
                number: 4,
                heading: "Mobile-first is a mindset, not just responsive design",
                body: "82% mobile usage meant we had to rethink workflows for touch, glanceability, and offline constraints—not just scale down desktop layouts.",
              },
              {
                number: 5,
                heading: "Change management requires storytelling",
                body: "Connecting user problems to business outcomes (training cost, support burden, adoption) was how I justified UX investment to leadership. Evidence + narrative drove decisions.",
              },
            ],
          },
          {
            id: "what-id-do-differently",
            title: "What I'd do Differently",
            icon: "smartphone",
            paragraphs: [
              "Push for more quantitative baseline metrics earlier so we could measure impact (e.g., support ticket volume, time-to-first-automation) before and after the redesign.",
              "Create a research repository so insights from NFL, Disney, and Live Nation studies were discoverable and reusable across the org.",
              "Document design decisions more systematically so future teams could understand the rationale behind the wizard approach and tradeoffs we made.",
            ],
          },
          {
            id: "impacts-on-career",
            title: "Impacts on my Career",
            icon: "layout-dashboard",
            listHeading: "This role helped me:",
            listItems: [
              "Build research programs from scratch in organizations without research maturity",
              "Drive strategic influence through evidence and storytelling",
              "Redesign complex enterprise tools while managing stakeholder expectations",
              "Present to executives and frame UX work in business terms",
              "Work in high-pressure, high-stakes environments (live events with zero room for error)",
            ],
            closingParagraph:
              "Live Event Technology at Leap was a turning point in how I approach research, complexity, and organizational change.",
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
    formspreeEndpoint: "https://formspree.io/f/xqedqvvo",
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
