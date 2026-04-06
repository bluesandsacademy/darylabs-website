"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurWhySection = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We act with honesty, transparency, and accountability at all times.",
    },
    {
      title: "Excellence",
      description:
        "We pursue high-quality work through consistent execution and continuous improvement.",
    },
    {
      title: "Innovation",
      description:
        "We innovate with curiosity, creativity, and bold, practical solutions.",
    },
    {
      title: "People",
      description:
        "We put people first, fostering respect, collaboration, and growth for everyone.",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation with 3D perspective
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  // Image card with depth effect
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      rotateY: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        duration: 1,
      },
    },
  };

  // Center large image variant
  const centerImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 1.2,
      },
    },
  };

  // Core values stagger animation
  const valueItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div className="w-full bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Bento Grid Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6"
          style={{ perspective: "2000px" }}
        >
          {/* Left Column */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            variants={cardVariants}
          >
            {/* Our Why Card */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h2
                className="text-secondary text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-jarkata)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our Why
              </motion.h2>
              <motion.p
                className="text-gray-600 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-jarkata)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Millions of students across Africa graduate from schools without
                ever experiencing a real science experiment. We are changing
                that narrative one virtual lab at a time. By combining
                innovation with inclusivity, we are creating equal learning
                opportunities, improving academic performance.
              </motion.p>
            </motion.div>

            {/* Bottom Image Card */}
            <motion.div
              className="relative h-[450px] rounded-xl overflow-hidden shadow-lg"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/about/place1.jpg"
                alt="Team collaboration in office"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Center Column - Large Image */}
          <motion.div
            className="lg:col-span-6 pb-20"
            variants={centerImageVariants}
          >
            <motion.div
              className="relative h-[500px] lg:h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.03,
                z: 50,
                transition: { duration: 0.5 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/about/place2.jpg"
                alt="Professional working at desk"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            variants={cardVariants}
          >
            {/* Our Core Value Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h2
                className="text-secondary text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-jarkata)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our Core Value
              </motion.h2>
              <div className="flex flex-col gap-5">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-1.5"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={valueItemVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h3
                      className="text-secondary text-lg font-bold"
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Image Card with Overlay Badge */}
            <motion.div
              className="relative h-[280px] rounded-xl overflow-hidden shadow-lg"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.4 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/about/place3.jpg"
                alt="Team meeting in conference room"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurWhySection;
