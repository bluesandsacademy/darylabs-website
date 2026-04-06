"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PricingHeroSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-6 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden">
      {/* Decorative dots pattern - top right */}
      <div className="absolute top-8 right-32 lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className="w-2 h-2 rounded-full bg-white/40"
            />
          ))}
        </div>
      </div>

      {/* Decorative dots pattern - bottom right */}
      <div className="absolute bottom-8 right-16 hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.02, duration: 0.3 }}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>

      {/* Blue circle decoration */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-1/2 right-[28%] -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 bg-primary rounded-full hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Simple, affordable plans
              <br />
              for real classrooms
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              Start free, upgrade when you're ready. All plans work online and
              include curriculum-aligned Biology, Chemistry, and Physics
              simulations.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3.5 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Request a Quote
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative aspect-square rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/pricing/1.jpg"
                  alt="Student using mobile phone for learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
