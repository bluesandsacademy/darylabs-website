import { partners } from "@/lib/data";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 tracking-tight">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-8 items-center">
          {partners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Partner Logo Component
 */
function PartnerLogo({ partner }) {
  return (
    <div className="flex items-center justify-center group">
      <div className="relative w-32 h-20 md:w-36 md:h-24 lg:w-40 lg:h-24">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain "
          unoptimized
        />
      </div>
    </div>
  );
}
