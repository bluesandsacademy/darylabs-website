import CTA from "@/components/shared/about/c";
import AboutHero from "@/components/shared/about/hero";

import VisionMissionPurpose from "@/components/shared/about/vision";
import WhoWeAre from "@/components/shared/about/who";
import OurWhySection from "@/components/shared/about/why";

import TeamSection from "@/components/shared/home/team";
import React from "react";

export const metadata = {
  title: "About DaryLabs | Africa’s Virtual Science Education Pioneer",
  description:
    "DaryLabs is revolutionizing STEM education across Ghana and Africa with immersive virtual labs powered by AI, AR, and VR,  making science learning accessible, interactive, and inclusive for all.",
};
export default function Aboutpage() {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <VisionMissionPurpose />
      <OurWhySection />
      <TeamSection />
      <CTA />
    </div>
  );
}
