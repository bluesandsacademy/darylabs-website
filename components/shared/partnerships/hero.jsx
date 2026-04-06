"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnershipsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A7FFF] via-[#0B6FE8] to-[#0D5FD1] py-8 lg:py-10">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/grid.png')",
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Decorative Dots Pattern - Top Right */}
      <div className="absolute top-8 right-8 lg:top-12 lg:right-32">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          className="opacity-30"
        >
          {/* Create a 6x6 grid of dots */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 20}
                cy={10 + row * 20}
                r="3"
                fill="white"
              />
            ))
          )}
        </svg>
      </div>

      {/* Decorative Dots Pattern - Bottom Left */}
      <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-16">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="opacity-30"
        >
          {/* Create a 4x4 grid of dots */}
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 20}
                cy={10 + row * 20}
                r="3"
                fill="white"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 lg:space-y-8"
          >
            {/* Heading */}
            <h2
              className="font-bold text-4xl lg:text-4xl xl:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Partnerships that Power Innovation in Education
            </h2>

            {/* Description */}
            <p
              className="text-base lg:text-lg leading-relaxed text-white/90 max-w-xl"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              We work with schools, governments, organizations, and investors to
              scale immersive, technology-driven science learning across Africa,
              ensuring every student has the tools to explore, discover, and
              succeed.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Apply to Partner
            </motion.button>
          </motion.div>

          {/* Right Content - Image with Blob Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Blob Background */}
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/pricing/irregular.png"
                alt=""
                fill
                className="object-contain"
                priority
              />

              {/* Person Image inside blob */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[85%] h-[85%]">
                  <Image
                    src="/partnerships/hero.png"
                    alt="Partnership illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
