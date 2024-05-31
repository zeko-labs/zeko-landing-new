"use client";

import { AnnouncementSection } from "@/components/announcement-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { PageBreakSection } from "@/components/pagebreak-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection />
      <ProblemSolutionSection />
      <PageBreakSection />
      <ServicesSection />
      <FeatureSection />
      <AnnouncementSection />
    </section>
  );
}
