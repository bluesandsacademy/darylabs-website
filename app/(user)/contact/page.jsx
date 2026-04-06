import ContactOptionsForms from "@/components/shared/contact/form";
import ContactHeroSection from "@/components/shared/contact/hero";
import OfficeHours from "@/components/shared/contact/hours";
import ThreeQuickPaths from "@/components/shared/contact/paths";
import React from "react";

export const metadata = {
  title: "Contact DaryLabs | Book a Demo or Partner with Us",
  description:
    "Get in touch with DaryLabs. Schedule a demo, request partnership info, or talk to our team about bringing virtual STEM education to your school in Ghana or across Africa.",
};
const ContactPage = () => {
  return (
    <div>
      <ContactHeroSection />
      <ThreeQuickPaths />
      <ContactOptionsForms />
    </div>
  );
};

export default ContactPage;
