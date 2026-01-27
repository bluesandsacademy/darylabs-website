import FeaturesScrollSection from "@/components/shared/how-it-works/teachers";
import PartnershipsHeroSection from "@/components/shared/partnerships/hero";
import FeaturesSection from "@/components/shared/partnerships/features";
import WhyPartnerSection from "@/components/shared/partnerships/why-partner";
import PartnersSection from "@/components/shared/partnerships/partners";
import BecomePartnerCTA from "@/components/shared/partnerships/become-partner";
import PartnershipTeam from "@/components/shared/partnerships/team";

export default function PartnershipsPagse() {
  return (
    <div>
      <PartnershipsHeroSection />

      <FeaturesSection />
      <WhyPartnerSection />
      <PartnersSection />
      <BecomePartnerCTA />
      <PartnershipTeam />
    </div>
  );
}
