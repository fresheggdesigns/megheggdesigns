import { Hero } from "@/components/home/Hero";
import { AboutMe } from "@/components/home/AboutMe";
import { StrategicFocus } from "@/components/home/StrategicFocus";
import { Impact } from "@/components/home/Impact";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ProductStrategy } from "@/components/home/ProductStrategy";
import { CTA } from "@/components/home/CTA";
import { HashScroll } from "@/components/layout/HashScroll";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Hero />
      <AboutMe />
      <StrategicFocus />
      <Impact />
      <CaseStudies />
      <ProductStrategy />
      <CTA />
    </>
  );
}
