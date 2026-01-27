import React from "react";
import Image from "next/image";
import {
  Globe,
  DollarSign,
  FlaskConical,
  Smartphone,
  Languages,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Low-Bandwidth Optimized",
      description:
        "Designed to work seamlessly with the limited internet connectivity common across African secondary and tertiary institutions. Smart caching and offline capabilities ensure uninterrupted learning.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Flexible payment plans that accommodate African school budgets, with special discounts for institutions serving underserved communities and transparent pricing.",
    },
    {
      icon: FlaskConical,
      title: "200+ African-Relevant Labs",
      description:
        "Virtual experiments covering chemistry, physics, biology and other topics curated to Africa's development needs.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Optimized for smartphones and tablets, acknowledging that mobile devices are often the primary internet access point for African students.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description:
        "Available in English, French, Arabic, and other major African languages to ensure accessibility across the continent.",
    },
    {
      icon: Zap,
      title: "Solar-Powered Compatibility",
      description:
        "Low-power consumption design that works with solar charging stations and power-efficient devices common in rural African areas.",
    },
  ];

  return (
    <div className="relative bg-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Grid Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-white font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Virtual Science Lab For Students &<br />
            Teachers In African Schools
          </h2>
          <p
            className="text-white/90 text-base md:text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Addressing infrastructure challenges while delivering world-class
            education
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="text-secondary font-bold text-xl mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
