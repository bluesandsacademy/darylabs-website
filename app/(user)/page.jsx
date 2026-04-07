import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/shared/home/hero";
import VirtualLabsSection from "@/components/shared/home/about";
import MilestonesSection from "@/components/shared/home/milestones";
import EmpoweringLearningSection from "@/components/shared/home/learn";
import SubHero from "@/components/shared/home/sub-hero";
import Features from "@/components/shared/home/features";

const STEMChallengesSection = dynamic(
  () => import("@/components/shared/home/challenges"),
  { ssr: true },
);
const PricingSection = dynamic(
  () => import("@/components/shared/home/pricing"),
  { ssr: true },
);
const TeamSection = dynamic(() => import("@/components/shared/home/team"), {
  ssr: true,
});
const BlogSection = dynamic(() => import("@/components/shared/home/blog"), {
  ssr: true,
});
const TestimonialsSection = dynamic(
  () => import("@/components/shared/home/testimonial"),
  { ssr: true },
);
const FAQSection = dynamic(() => import("@/components/shared/home/faq"), {
  ssr: true,
});

export const metadata = {
  title: "Darylabs | Virtual Science Labs for African Schools",
  description:
    "Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences.",
};

function SectionSkeleton() {
  return (
    <div className="w-full h-96 bg-gray-50 animate-pulse flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VirtualLabsSection />
      <MilestonesSection />
      <EmpoweringLearningSection />
      <SubHero />
      {/* <Features /> */}
      <Suspense fallback={<SectionSkeleton />}>
        <STEMChallengesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
    </div>
  );
}
