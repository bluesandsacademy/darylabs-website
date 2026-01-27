"use client";

import { FeatureCard } from "@/components/shared/partnerships/card";
import { featuresData } from "@/lib/data";

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-10 lg:py-12">
      {/* Section Header */}

      {/* Feature Cards with Sticky Scroll */}
      <div className="container mx-auto px-6">
        <div className="space-y-12 lg:space-y-16">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Spacing for Last Card Animation */}
    </section>
  );
}
