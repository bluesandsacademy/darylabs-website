"use client";

import { studentFeatures } from "@/lib/data";
import { FeatureCard } from "./card";
import Image from "next/image";

export default function ForStudentsSection() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 relative inline-block">
            For Individual Students
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="space-y-24 pb-32">
          {studentFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
