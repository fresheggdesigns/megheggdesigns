import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const STRATEGIC_CHALLENGE_ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  smartphone: Smartphone,
  "layout-dashboard": LayoutDashboard,
  "layout-grid": LayoutGrid,
};

type CaseStudySlug = keyof typeof siteConfig.caseStudyDetails;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const details = siteConfig.caseStudyDetails[slug as CaseStudySlug];
  if (!details) return { title: "Case Study | Meg Hegg Design" };
  return {
    title: `${details.title} | Meg Hegg Design`,
    description: details.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const details = siteConfig.caseStudyDetails[slug as CaseStudySlug];
  if (!details) notFound();

  const project = siteConfig.caseStudies.projects.find((p) => p.slug === slug);
  const caseStudyWithHero = details as typeof details & { heroImage?: string };
  const imageSrc =
    caseStudyWithHero.heroImage ??
    project?.image ??
    "/CaseStudyThumbnails/ClientellingThumbnail.png";

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="px-6 pt-10 pb-6 md:pt-14 md:pb-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#33b8bc]">
              {details.category}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {details.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{details.subtitle}</p>
            <dl className="mt-8 space-y-3">
              <div>
                <dt className="text-sm font-semibold text-foreground">ROLE</dt>
                <dd className="text-muted-foreground">{details.meta.role}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">TIMELINE</dt>
                <dd className="text-muted-foreground">{details.meta.timeline}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">TEAM</dt>
                <dd className="text-muted-foreground">{details.meta.team}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">PLATFORM</dt>
                <dd className="text-muted-foreground">{details.meta.platform}</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Impact at a Glance */}
      <section
        className="bg-white px-6 pt-8 pb-16"
        aria-label="Impact at a Glance"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--hero-accent)" }}
          >
            Impact at a Glance
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {details.metrics.map((metric) => (
              <div
                key={metric.description}
                className="rounded-xl p-6 text-white"
                style={{ backgroundColor: "var(--nav)" }}
              >
                <p className="text-2xl font-bold md:text-3xl">{metric.value}</p>
                <p className="mt-2 text-sm font-normal text-white/90">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Challenge */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--hero-accent)" }}
          >
            Business Challenge
          </h2>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Strategic Context
              </h3>
              <div className="mt-4 space-y-4">
                {(Array.isArray(details.strategicContext)
                  ? details.strategicContext
                  : [details.strategicContext]
                ).map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Business Problem
              </h3>
              <div className="mt-4 space-y-4">
                {(Array.isArray(details.businessProblem)
                  ? details.businessProblem
                  : [details.businessProblem]
                ).map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {(() => {
            const challenges = (details as typeof details & { strategicChallenges?: { label: string; heading: string; challenges: { title: string; description: string; icon: string }[] } }).strategicChallenges;
            if (!challenges) return null;
            return (
              <section
                className="mt-20 pt-16 md:pt-20"
                aria-label="My Strategic Challenge"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {challenges.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {challenges.heading}
                  </h2>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {challenges.challenges.map((challenge) => {
                    const IconComponent =
                      STRATEGIC_CHALLENGE_ICONS[challenge.icon] ?? Layers;
                    return (
                      <div
                        key={challenge.title}
                        className="flex flex-col items-center text-center"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center"
                          aria-hidden
                        >
                          <IconComponent
                            className="h-10 w-10 shrink-0 stroke-[1.5]"
                            style={{ color: "var(--hero-accent)" }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                          {challenge.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })()}

          {(() => {
            const decisions = (details as typeof details & {
              keyDesignDecisions?: {
                label: string;
                heading: string;
                decisions: {
                  number: number;
                  title: string;
                  image: string;
                  imagePosition: "left" | "right";
                  content: {
                    decision: string;
                    whyItMattered: string[];
                    strategy?: string[];
                    tradeoff: string[];
                    outcome: string[];
                  };
                }[];
              };
            }).keyDesignDecisions;
            if (!decisions) return null;
            return (
              <section
                className="mt-20 pt-16 md:pt-20"
                aria-label="How I Work"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {decisions.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {decisions.heading}
                  </h2>
                </div>
                <div className="mt-12 space-y-20">
                  {decisions.decisions.map((d) => (
                    <div
                      key={d.number}
                      className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
                    >
                      <div
                        className={`relative aspect-[3/4] overflow-hidden rounded-xl ${d.imagePosition === "right" ? "lg:order-2" : ""}`}
                      >
                        <Image
                          src={d.image}
                          alt=""
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div
                        className={d.imagePosition === "right" ? "lg:order-1" : ""}
                      >
                        <p
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--hero-accent)" }}
                        >
                          Decision {d.number}
                        </p>
                        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                          {d.title}
                        </h3>
                        <div className="mt-6 space-y-5 text-muted-foreground">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                              The decision
                            </p>
                            <p className="mt-1 text-sm leading-relaxed">
                              {d.content.decision}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                              Why it mattered
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                              {d.content.whyItMattered.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          {d.content.strategy && (
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                The strategy
                              </p>
                              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                                {d.content.strategy.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                              The tradeoff
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                              {d.content.tradeoff.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                              The outcome
                            </p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                              {d.content.outcome.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {(() => {
            const research = (details as typeof details & {
              researchAndDiscovery?: {
                label: string;
                subsections: {
                  title: string;
                  image: string;
                  blocks: { heading: string; bullets: string[] }[];
                }[];
              };
            }).researchAndDiscovery;
            if (!research) return null;
            return (
              <section
                className="mt-20 pt-16 md:pt-20"
                aria-label="Research & Discovery"
              >
                <div className="text-center">
                  <h2
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    {research.label}
                  </h2>
                </div>
                <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
                  {research.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                        {sub.title}
                      </h3>
                      <div className="relative mt-4 aspect-[4/3] max-w-sm overflow-hidden rounded-xl">
                        <Image
                          src={sub.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="mt-6 space-y-6">
                        {sub.blocks.map((block) => (
                          <div key={block.heading}>
                            <p className="text-sm font-semibold text-foreground">
                              {block.heading}
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                              {block.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {(() => {
            const reflections = (details as typeof details & {
              reflectionsAndLearnings?: {
                title: string;
                cards: (
                  | {
                      id: string;
                      title: string;
                      icon: string;
                      items: {
                        number: number;
                        heading: string;
                        body: string;
                      }[];
                    }
                  | {
                      id: string;
                      title: string;
                      icon: string;
                      paragraphs: string[];
                    }
                  | {
                      id: string;
                      title: string;
                      icon: string;
                      listHeading: string;
                      listItems: string[];
                      closingParagraph: string;
                    }
                )[];
              };
            }).reflectionsAndLearnings;
            if (!reflections) return null;
            return (
              <section
                className="mt-20 pt-16 md:pt-20"
                aria-label="Reflections & Learnings"
              >
                <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {reflections.title}
                </h2>
                <div className="mt-12 space-y-6">
                  {reflections.cards.slice(0, 1).map((card) => {
                    const IconComponent =
                      STRATEGIC_CHALLENGE_ICONS[card.icon] ?? Layers;
                    return (
                      <div
                        key={card.id}
                        className="rounded-xl bg-muted/50 p-6"
                      >
                        <div
                          className="flex h-10 w-10 items-center justify-center"
                          aria-hidden
                        >
                          <IconComponent
                            className="h-8 w-8 shrink-0 stroke-[1.5]"
                            style={{ color: "var(--hero-accent)" }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                          {card.title}
                        </h3>
                        <div className="mt-4 space-y-5">
                          {"items" in card &&
                            card.items.map((item) => (
                              <div key={item.number}>
                                <p className="text-sm font-semibold text-foreground">
                                  {item.number}. {item.heading}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                  {item.body}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  })}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {reflections.cards.slice(1).map((card) => {
                      const IconComponent =
                        STRATEGIC_CHALLENGE_ICONS[card.icon] ?? Layers;
                      return (
                        <div
                          key={card.id}
                          className="rounded-xl bg-muted/50 p-6"
                        >
                          <div
                            className="flex h-10 w-10 items-center justify-center"
                            aria-hidden
                          >
                            <IconComponent
                              className="h-8 w-8 shrink-0 stroke-[1.5]"
                              style={{ color: "var(--hero-accent)" }}
                              strokeWidth={1.5}
                            />
                          </div>
                          <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                            {card.title}
                          </h3>
                          <div className="mt-4 space-y-5">
                            {"paragraphs" in card &&
                              card.paragraphs.map((para, i) => (
                                <p
                                  key={i}
                                  className="text-sm text-muted-foreground leading-relaxed"
                                >
                                  {para}
                                </p>
                              ))}
                            {"listHeading" in card && (
                              <>
                                <p className="text-sm font-semibold text-foreground">
                                  {card.listHeading}
                                </p>
                                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                                  {card.listItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {card.closingParagraph}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })()}

          <div className="mt-16 text-center">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--nav)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
