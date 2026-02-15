import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
  const imageSrc = project?.image ?? "/CaseStudyThumbnails/ClientellingThumbnail.png";

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
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
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Impact at a Glance */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: "var(--nav)" }}
        aria-label="Impact at a Glance"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/90">
            Impact at a Glance
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {details.metrics.map((metric) => (
              <div
                key={metric.description}
                className="rounded-lg bg-white/10 p-6 text-white"
              >
                <p className="text-2xl font-bold md:text-3xl">{metric.value}</p>
                <p className="mt-2 text-sm text-white/90">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Context */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Strategic Context
              </h2>
              <p className="mt-4 text-muted-foreground">
                {details.strategicContext}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Business Problem
              </h2>
              <p className="mt-4 text-muted-foreground">
                {details.businessProblem}
              </p>
            </div>
          </div>
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
