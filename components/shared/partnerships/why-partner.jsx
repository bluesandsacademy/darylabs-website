"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyPartnerSection() {
  const reasons = [
    {
      id: 1,
      title: "Transform Education",
      description:
        "Empower students with hands-on, inquiry-based science experiences.",
    },
    {
      id: 2,
      title: "Innovate with Purpose",
      description:
        "Join the movement using AR, VR, and AI to enhance learning outcomes.",
    },
    {
      id: 3,
      title: "Collaborate for Impact",
      description:
        "Co-create initiatives that bridge the education gap in underserved communities.",
    },
    {
      id: 4,
      title: "Scale Together",
      description:
        "Access a growing network of schools, educators, and policymakers across Africa.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0D3B5C] py-10 lg:py-12">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] p-2 lg:p-3 bg-white shadow-2xl">
                <div className="relative w-full h-[380px] lg:h-[480px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                  <Image
                    src="/partnerships/7.jpg"
                    alt="Professional woman working on tablet - DaryLabs partner"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={90}
                  />
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent blur-2xl -z-10 rounded-[3rem]" />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white space-y-2 lg:space-y-3"
          >
            {/* Header */}
            <div className="space-y-1.5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                Why Partner With DaryLabs
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm lg:text-base text-white/90 leading-relaxed"
              >
                DaryLabs supports flexible, secure payment options:
              </motion.p>
            </div>

            {/* Reduced Reasons List */}
            <div className="space-y-2 lg:space-y-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-3 group"
                >
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-white/60 via-white/40 to-transparent rounded-full" />
                  <div className="flex-1 space-y-0.5">
                    <h3 className="text-base lg:text-lg font-semibold text-white">
                      {reason.title}:
                    </h3>
                    <p className="text-xs lg:text-sm text-white/85 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
