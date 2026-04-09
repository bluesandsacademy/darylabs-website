"use client";

import { FeatureCard } from "@/components/shared/partnerships/card";
import { featuresData } from "@/lib/data";

export default function FeaturesSection() {
  return (
    <section className="relative bg-linear-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 lg:py-24">
      {/* Section Header */}

      {/* Feature Cards with Sticky Scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
