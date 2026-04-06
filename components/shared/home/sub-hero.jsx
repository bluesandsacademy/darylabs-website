"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { statistics, stats } from "@/lib/data";

const SubHero = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Left column stats animation
  const leftStatVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // Center map animation
  const mapVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1,
      },
    },
  };

  // Right column stats animation
  const rightStatVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // Top flags animation
  const topFlagVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full bg-[#f8f9fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl md:max-h-[80vh] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1
            className="font-bold text-4xl sm:text-5xl lg:text-[56px] text-secondary leading-tight mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Transforming African STEM Education
          </h1>

          <p
            className="font-normal text-lg sm:text-xl text-[#6b7280] max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Addressing the unique challenges facing African schools and students
          </p>
        </motion.div>

        {/* Five Column Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-2 items-center  max-w-6xl"
        >
          {/* Column 1 - First 3 Country Flags and Stats */}
          <motion.div
            variants={containerVariants}
            className="flex flex-row md:flex-col items-center lg:items-end gap-6"
          >
            {stats.slice(0, 3).map((stat, index) => (
              <motion.div
                key={index}
                variants={leftStatVariants}
                whileHover={{
                  x: -10,
                  transition: { duration: 0.3 },
                }}
                className="flex md:flex-col  items-center gap-4 w-full max-w-[280px] lg:max-w-none"
              >
                {/* Flag Circle - Half Size */}
                <motion.div
                  className="relative w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 shadow-md"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src={`https://flagcdn.com/w160/${stat.flagCode}.png`}
                    alt={`${stat.country} flag`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                {/* Percentage */}
                <motion.h3
                  className="text-primary text-lg sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    type: "spring",
                    stiffness: 150,
                  }}
                >
                  {stat.stat}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 - Additional 2 Flags */}
          {stats.length > 3 && (
            <motion.div
              variants={containerVariants}
              className="flex flex-row md:flex-col items-center justify-center gap-6"
            >
              {stats.slice(3).map((stat, index) => (
                <motion.div
                  key={index}
                  variants={topFlagVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="flex flex-col items-center gap-3"
                >
                  {/* Flag Circle - Half Size */}
                  <motion.div
                    className="relative w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md"
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src={`https://flagcdn.com/w160/${stat.flagCode}.png`}
                      alt={`${stat.country} flag`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>

                  {/* Percentage */}
                  <motion.h3
                    className="text-primary text-lg sm:text-xl font-bold"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 150,
                    }}
                  >
                    {stat.stat}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <p
              className="text-[#6b7280] text-sm sm:text-base text-center lg:text-left leading-relaxed font-normal max-w-[250px]"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              secondary schools lack adequate laboratory infrastructure
            </p>
          </motion.div>
          {/* Column 3 - Africa Map */}
          <motion.div
            variants={mapVariants}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] aspect-4/5">
              <Image
                src="/map.png"
                alt="Africa map"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Column 4 - Text */}

          {/* Column 5 - Impact Statistics */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start gap-6 lg:gap-8"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={rightStatVariants}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="flex items-start gap-3 lg:gap-4 w-full md:w-[500px]"
              >
                {/* Percentage */}
                <motion.h3
                  className="text-primary text-lg sm:text-xl lg:text-[30px] font-bold shrink-0 min-w-[100px] lg:min-w-[120px]"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    type: "spring",
                    stiffness: 150,
                  }}
                >
                  {stat.percentage}
                </motion.h3>

                {/* Description Text */}
                <motion.p
                  className="text-[#6b7280] text-sm sm:text-base lg:text-base leading-relaxed font-normal pt-1"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.6,
                    duration: 0.5,
                  }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubHero;
