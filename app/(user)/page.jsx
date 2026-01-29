import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/shared/home/hero";
import VirtualLabsSection from "@/components/shared/home/about";
import MilestonesSection from "@/components/shared/home/milestones";
import EmpoweringLearningSection from "@/components/shared/home/learn";
import Features from "@/components/shared/home/africaStats";
import PartnersSection from "@/components/shared/home/features";
import AfricanSTEMSection from "@/components/shared/home/sub-hero";

// Lazy load components with SSR enabled

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

// Skeleton component for loading states
function SectionSkeleton() {
  return (
    <div className="w-full h-96 bg-gray-50 animate-pulse flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export const metadata = {
  title: "DaryLabs | Virtual Science Labs for African Schools",
  description:
    "Virtual Labs Africa - Empowering African Education with Virtual Labs and STEM Solutions.",
};

// This is now a server component - no "use client" directive
export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Critical above-the-fold content - rendered immediately */}
      <Hero />
      <VirtualLabsSection />
      <MilestonesSection />
      <EmpoweringLearningSection />
      <AfricanSTEMSection />
      <Features />

      {/* Below-the-fold content with streaming */}
      {/* <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection />
      </Suspense> */}

      <Suspense fallback={<SectionSkeleton />}>
        <STEMChallengesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>

      {/* <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense> */}

      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
    </div>
  );
}
