import FAQSection from "@/components/shared/home/faq";

import React from "react";

import PricingSection from "@/components/shared/home/pricing";
import PricingHeader from "./hero";
import PaymentOptions from "./payment";
import NeedHelp from "./needHelp";

export const metadata = {
  title:
    "Affordable Virtual STEM Lab Plans for Schools and Students in Africa| DaryLabs",
  description:
    "Explore flexible pricing for DaryLabs, affordable virtual science lab solutions for schools, teachers, and students in Ghana and across Africa.",
};

const Pricingpage = () => {
  return (
    <div>
      <PricingHeader />
      <PricingSection />
      <PaymentOptions />

      <FAQSection />
      <NeedHelp />
    </div>
  );
};

export default Pricingpage;
