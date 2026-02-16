import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  FileText,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Lightbulb,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const STRATEGIC_CHALLENGE_ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  smartphone: Smartphone,
  "layout-dashboard": LayoutDashboard,
  "layout-grid": LayoutGrid,
  "file-text": FileText,
  "bar-chart": BarChart2,
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
      <section className="px-6 pt-6 pb-4 md:pt-10 md:pb-6">
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
              {"clients" in details.meta && details.meta.clients && (
                <div>
                  <dt className="text-sm font-semibold text-foreground">CLIENTS</dt>
                  <dd className="text-muted-foreground">{details.meta.clients}</dd>
                </div>
              )}
              {"platform" in details.meta && details.meta.platform && (
                <div>
                  <dt className="text-sm font-semibold text-foreground">PLATFORM</dt>
                  <dd className="text-muted-foreground">{details.meta.platform}</dd>
                </div>
              )}
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
        className="bg-white px-6 pt-8 pb-12"
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
      <section className="px-6 py-12 md:py-16">
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
                ).map((item, i) =>
                  typeof item === "string" ? (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </p>
                  ) : "bullets" in item ? (
                    <ul
                      key={i}
                      className="list-disc space-y-1 pl-4 text-muted-foreground leading-relaxed"
                    >
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  ) : null
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {(details as { businessChallengeRightHeading?: string })
                  .businessChallengeRightHeading ??
                  ((details as { theStakes?: unknown }).theStakes
                    ? "The Stakes"
                    : "Business Problem")}
              </h3>
              <div className="mt-4 space-y-4">
                {(
                  (details as { theStakes?: (string | { bullets: string[] })[] })
                    .theStakes ?? (Array.isArray(details.businessProblem)
                    ? details.businessProblem
                    : [details.businessProblem])
                ).map((item: string | { bullets: string[] }, i: number) =>
                  typeof item === "string" ? (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </p>
                  ) : "bullets" in item ? (
                    <ul
                      key={i}
                      className="list-disc space-y-1 pl-4 text-muted-foreground leading-relaxed"
                    >
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  ) : null
                )}
              </div>
            </div>
          </div>

          {"myChallenge" in details && details.myChallenge && (
            <div className="mt-12">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                My Challenge
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {String(details.myChallenge)}
              </p>
            </div>
          )}

          {(() => {
            const approach = (details as typeof details & {
              strategicApproach?: {
                label: string;
                heading: string;
                introParagraph?: string;
                methods: { title: string; icon: string; details: string[] }[];
                keyInsight?: { icon: string; text: string };
              };
            }).strategicApproach;
            if (!approach) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Strategic Approach"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {approach.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {approach.heading}
                  </h2>
                  {approach.introParagraph && (
                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                      {approach.introParagraph}
                    </p>
                  )}
                </div>
                <div
                  className={`mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12 ${approach.methods.length >= 5 ? "lg:grid-cols-3 xl:grid-cols-5" : "lg:grid-cols-2"}`}
                >
                  {approach.methods.map((method) => {
                    const IconComponent =
                      STRATEGIC_CHALLENGE_ICONS[method.icon] ?? Layers;
                    return (
                      <div key={method.title}>
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
                          {method.title}
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                          {method.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {"keyInsight" in approach && approach.keyInsight && (
                  <div className="mt-8 rounded-xl bg-muted/50 p-6">
                    {(() => {
                      const KeyInsightIcon =
                        STRATEGIC_CHALLENGE_ICONS[approach.keyInsight.icon] ??
                        Layers;
                      return (
                        <>
                          <div
                            className="flex h-10 w-10 items-center justify-center"
                            aria-hidden
                          >
                            <KeyInsightIcon
                              className="h-8 w-8 shrink-0 stroke-[1.5]"
                              style={{ color: "var(--hero-accent)" }}
                              strokeWidth={1.5}
                            />
                          </div>
                          <h4 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                            Key Insight
                          </h4>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {approach.keyInsight.text}
                          </p>
                        </>
                      );
                    })()}
                  </div>
                )}
              </section>
            );
          })()}

          {(() => {
            const fieldResearch = (details as typeof details & {
              fieldResearchAtScale?: {
                label: string;
                heading: string;
                images: string[];
                highProfileEventStudies?: {
                  title: string;
                  description: string;
                  items: string[];
                };
                whatIWasInvestigating?: {
                  title: string;
                  subsections: { heading: string; bullets: string[] }[];
                };
                sitemapNotes?: {
                  title: string;
                  notes: string[];
                };
                keyInsights?: {
                  title: string;
                  insights: {
                    number: number;
                    title: string;
                    body: string;
                    impact?: string;
                  }[];
                };
              };
            }).fieldResearchAtScale;
            if (!fieldResearch) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Field Research at Scale"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {fieldResearch.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {fieldResearch.heading}
                  </h2>
                </div>

                <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
                  <div className="space-y-6 max-w-md">
                    {fieldResearch.images?.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-10">
                    {fieldResearch.highProfileEventStudies && (
                      <div>
                        <h3
                          className="text-lg font-bold tracking-tight text-foreground"
                          style={{ color: "var(--hero-accent)" }}
                        >
                          {fieldResearch.highProfileEventStudies.title}
                        </h3>
                        <p className="mt-3 font-semibold text-foreground leading-relaxed">
                          {fieldResearch.highProfileEventStudies.description}
                        </p>
                        <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                          {fieldResearch.highProfileEventStudies.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {fieldResearch.whatIWasInvestigating && (
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground">
                          {fieldResearch.whatIWasInvestigating.title}
                        </h3>
                        <div className="mt-6 space-y-5">
                          {fieldResearch.whatIWasInvestigating.subsections.map((sub, i) => (
                            <div key={i}>
                              <p className="text-sm font-semibold text-foreground">
                                {sub.heading}
                              </p>
                              <ul className="mt-2 list-disc space-y-0.5 pl-4 text-sm text-muted-foreground leading-relaxed">
                                {sub.bullets.map((b, j) => (
                                  <li key={j}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {fieldResearch.sitemapNotes && (
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground">
                          {fieldResearch.sitemapNotes.title}
                        </h3>
                        <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                          {fieldResearch.sitemapNotes.notes.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {fieldResearch.keyInsights && (
                  <div className="mt-12 rounded-xl border border-border bg-[#f8f8f8] p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3">
                      <Lightbulb
                        className="h-6 w-6 shrink-0"
                        style={{ color: "var(--hero-accent)" }}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {fieldResearch.keyInsights.title}
                      </h3>
                    </div>
                    <div className="mt-6 space-y-6">
                      {fieldResearch.keyInsights.insights.map((insight) => (
                        <div key={insight.number}>
                          <p className="font-bold text-foreground">
                            {insight.number}. {insight.title}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {insight.body}
                          </p>
                          {insight.impact && (
                            <p className="mt-2 text-sm">
                              <span className="font-semibold text-foreground">Impact: </span>
                              <span className="text-muted-foreground">{insight.impact}</span>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })()}

          {(() => {
            const challenges = (details as typeof details & { strategicChallenges?: { label: string; heading: string; challenges: { title: string; description: string; icon: string }[] } }).strategicChallenges;
            if (!challenges) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
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
            const sdt = (details as typeof details & {
              strategicDecisionsTradeoffs?: {
                label: string;
                heading: string;
                decisions: {
                  number: number;
                  title: string;
                  image: string;
                  imagePosition: "left" | "right";
                  blocks: { heading: string; content?: string; items?: string[] }[];
                }[];
              };
            }).strategicDecisionsTradeoffs;
            if (!sdt) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Strategic Decisions & Tradeoffs"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {sdt.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {sdt.heading}
                  </h2>
                </div>
                <div className="mt-12 space-y-14">
                  {sdt.decisions.map((d) => (
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
                          {d.blocks.map((block, i) => (
                            <div key={i}>
                              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                {block.heading}
                              </p>
                              {block.content ? (
                                <p className="mt-1 text-sm leading-relaxed">
                                  {block.content}
                                </p>
                              ) : block.items ? (
                                <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                                  {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {(() => {
            const alignment = (details as typeof details & {
              buildingAlignment?: {
                label: string;
                heading: string;
                columns: { title: string; items: string[] }[];
              };
            }).buildingAlignment;
            if (!alignment) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Building Alignment"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {alignment.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {alignment.heading}
                  </h2>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {alignment.columns.map((col) => (
                    <div key={col.title}>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {col.title}
                      </h3>
                      <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-muted-foreground leading-relaxed">
                        {col.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {(() => {
            const scale = (details as typeof details & {
              designAtScale?: {
                label: string;
                heading: string;
                cards: { title: string; icon: string; items: string[] }[];
                roadmap: {
                  phase: number;
                  title: string;
                  status: string;
                  items: string[];
                }[];
              };
            }).designAtScale;
            if (!scale) return null;
            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Driving Design at Scale"
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--nav-active)" }}
                  >
                    {scale.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {scale.heading}
                  </h2>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {scale.cards.map((card) => {
                    const IconComponent =
                      STRATEGIC_CHALLENGE_ICONS[card.icon] ?? Layers;
                    return (
                      <div
                        key={card.title}
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
                        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                          {card.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {scale.roadmap.map((phase) => (
                    <div key={phase.phase} className="flex flex-col items-start">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                          style={{ backgroundColor: "var(--nav)" }}
                        >
                          {phase.phase}
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "var(--hero-accent)" }}
                          >
                            {phase.status}
                          </p>
                          <h4 className="font-bold tracking-tight text-foreground">
                            {phase.title}
                          </h4>
                        </div>
                      </div>
                      <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                className="mt-12 pt-12 md:pt-14"
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
                <div className="mt-12 space-y-14">
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
                className="mt-12 pt-12 md:pt-14"
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
                label?: string;
                title: string;
                layout?: string;
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
                  | {
                      id: string;
                      title: string;
                      icon: string;
                      before: { heading: string; items: string[] };
                      after: { heading: string; items: string[] };
                      closingParagraph: string;
                    }
                )[];
              };
            }).reflectionsAndLearnings;
            if (!reflections) return null;

            const renderCard = (card: (typeof reflections.cards)[number]) => {
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
                    {"paragraphs" in card &&
                      !("before" in card) &&
                      card.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    {"listHeading" in card &&
                      !("before" in card) && (
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
                    {"before" in card && "after" in card && (
                      <>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {card.before.heading}
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                            {card.before.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {card.after.heading}
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground leading-relaxed">
                            {card.after.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {card.closingParagraph}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            };

            return (
              <section
                className="mt-12 pt-12 md:pt-14"
                aria-label="Reflections & Learnings"
              >
                <div className="text-center">
                  {reflections.label && (
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--nav-active)" }}
                    >
                      {reflections.label}
                    </p>
                  )}
                  <h2 className={`text-3xl font-bold tracking-tight text-foreground md:text-4xl ${reflections.label ? "mt-2" : ""}`}>
                    {reflections.title}
                  </h2>
                </div>
                <div className="mt-12 space-y-6">
                  {reflections.cards.slice(0, 1).map(renderCard)}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {reflections.cards.slice(1).map(renderCard)}
                  </div>
                </div>
              </section>
            );
          })()}

          <div className="mt-12 text-center">
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
