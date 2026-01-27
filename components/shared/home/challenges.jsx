"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { challenges } from "@/lib/data";

const STEMChallengesSection = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-[#024570] to-secondary relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0483e2 1px, transparent 1px), linear-gradient(90deg, #0483e2 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 px-4"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          Solving Real African STEM Challenges
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] xs:h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full flex items-center justify-center"
          >
            <div className="relative w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[80%] rounded-[20px] sm:rounded-3xl md:rounded-[28px] lg:rounded-4xl border-6 border-white overflow-hidden shadow-xl sm:shadow-2xl hover:scale-[1.03] transition-transform duration-500">
              <div className="aspect-13/14 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChallenge}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={challenges[activeChallenge].image}
                      alt={challenges[activeChallenge].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Challenges List Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20 hidden sm:block" />

            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-0 w-[2px] bg-primary hidden sm:block"
              initial={false}
              animate={{
                top: `${(activeChallenge / challenges.length) * 100}%`,
                height: `${100 / challenges.length}%`,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            <div className="space-y-0">
              {challenges.map((challenge, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full text-left relative sm:pl-8 transition-all duration-300 ${
                    activeChallenge === index
                      ? "bg-primary/90 backdrop-blur-sm rounded-xl sm:rounded-lg py-4 px-4 sm:py-6 sm:pr-6 md:py-7 md:pr-7 lg:py-8 lg:pr-8"
                      : "py-3 px-4 sm:py-4 sm:pr-4 md:py-5 md:pr-4 hover:bg-white/5 rounded-lg"
                  }`}
                >
                  {/* Dot on the line - Hidden on mobile */}
                  <div
                    className={`absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 hidden sm:block ${
                      activeChallenge === index
                        ? "bg-primary scale-150"
                        : "bg-white/40"
                    }`}
                  />

                  <div>
                    <h3
                      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white transition-all duration-300 ${
                        activeChallenge === index ? "mb-2 sm:mb-3" : ""
                      }`}
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      {challenge.title}
                    </h3>

                    {/* Animated Description */}
                    <AnimatePresence>
                      {activeChallenge === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed"
                            style={{ fontFamily: "var(--font-jarkata)" }}
                          >
                            {challenge.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default STEMChallengesSection;
