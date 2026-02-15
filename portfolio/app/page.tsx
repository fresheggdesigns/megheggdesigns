import { Hero } from "@/components/home/Hero";
import { AboutMe } from "@/components/home/AboutMe";
import { StrategicFocus } from "@/components/home/StrategicFocus";
import { Impact } from "@/components/home/Impact";
import { CaseStudies } from "@/components/home/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <StrategicFocus />
      <Impact />
      <CaseStudies />
      <section id="design-principles" className="min-h-[50vh] px-6 py-24" aria-label="Design Principles">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Design Principles</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
      <section id="contact" className="min-h-[50vh] px-6 py-24 bg-muted/40" aria-label="Contact">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground">Content coming soon.</p>
        </div>
      </section>
    </>
  );
}
