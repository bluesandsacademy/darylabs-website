"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1
            className="text-2xl sm:text-2xl lg:text-4xl font-bold text-secondary mb-6 leading-tight"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Empowering the <span className="text-primary">Next Generation</span>{" "}
            of African
            <br />
            Innovators with DaryLabs
          </h1>

          <p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            At DaryLabs, we're transforming how science is taught and learned.
            Through immersive virtual labs and teacher-led innovation.
          </p>
        </motion.div>

        {/* Hero Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <Image
            src="/about/1.jpg"
            alt="DaryLabs team in office"
            fill
            className="object-cover object-[center_top]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Year */}
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-2"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                2022
              </h2>

              {/* Label */}
              <h3
                className="text-xl sm:text-2xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Year Founded
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Blue Sands Academy is a forward-thinking EdTech and STEM
                innovation company redefining how science and technology
                education is experienced in Africa
              </p>
            </motion.div>
          </div>

          {/* Decorative Corner Accent */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-6 right-6 sm:top-8 sm:right-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-t-4 border-r-4 border-primary rounded-tr-3xl opacity-60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
