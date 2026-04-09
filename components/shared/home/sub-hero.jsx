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
    <div className="w-full overflow-x-hidden bg-[#f8f9fb] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1
            className="font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary leading-tight mb-4"
          >
            Transforming African STEM Education
          </h1>

          <p
            className="font-normal text-xl text-gray-600 max-w-3xl mx-auto"
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
          className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-6 sm:gap-10 lg:gap-8 items-center"
        >
          {/* Column 1 - First 3 Country Flags and Stats */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col items-center gap-6"
          >
            {stats.slice(0, 3).map((stat, index) => (
              <motion.div
                key={index}
                variants={leftStatVariants}
                whileHover={{
                  x: -10,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center gap-3 w-full"
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
              className="flex flex-col items-center gap-6"
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
            className="col-span-2 lg:col-span-1 flex items-center justify-center"
          >
            <p
              className="text-gray-600 text-sm sm:text-base text-center leading-relaxed font-normal max-w-[220px]"
            >
              secondary schools lack adequate laboratory infrastructure
            </p>
          </motion.div>
          {/* Column 3 - Africa Map */}
          <motion.div
            variants={mapVariants}
            className="col-span-2 lg:col-span-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[180px] sm:max-w-60 aspect-4/5">
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
            className="col-span-2 lg:col-span-1 flex flex-col items-start gap-6 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={rightStatVariants}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="flex items-start gap-3 w-full"
              >
                {/* Percentage */}
                <motion.h3
                  className="text-primary text-lg sm:text-xl lg:text-2xl font-bold shrink-0 min-w-[100px] lg:min-w-[110px]"
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
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal pt-1"
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
