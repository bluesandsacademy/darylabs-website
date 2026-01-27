import FAQ from "@/components/shared/simulations/faq";
import HeroSection from "@/components/shared/simulations/hero";
import LabCourses from "@/components/shared/simulations/simulations";
import React from "react";

export const metadata = {
  title:
    "Virtual Lab Simulations | 150+ Interactive STEM Experiments | DaryLabs",
  description:
    "Explore 150+ interactive virtual science simulations across Biology, Chemistry, and Physics. Designed for African schools with offline capability, mobile-first design, and curriculum alignment. Transform STEM education with hands-on virtual experiments.",
  keywords: [
    "virtual lab simulations",
    "African STEM education",
    "interactive science experiments",
    "biology simulations",
    "chemistry simulations",
    "physics simulations",
    "virtual science labs Africa",
    "offline virtual labs",
    "mobile science labs",
    "STEM education Africa",
    "virtual laboratory",
    "science simulations for schools",
    "DaryLabs",
  ],
  authors: [{ name: "DaryLabs" }],
  creator: "DaryLabs",
  publisher: "DaryLabs",
  openGraph: {
    title: "Virtual Lab Simulations | DaryLabs",
    description:
      "Access 150+ interactive virtual science simulations designed for African schools. Explore Biology, Chemistry, and Physics experiments with offline capability and mobile-first design.",
    url: "https://bluesandstemlabs.com/simulations",
    siteName: "DaryLabs",

    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluesandstemlabs.com/simulations",
  },
  category: "Education Technology",
};
const SimulationsPage = () => {
  return (
    <div>
      <HeroSection />
      <LabCourses />
      <FAQ />
    </div>
  );
};

export default SimulationsPage;
