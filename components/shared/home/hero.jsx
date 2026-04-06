"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { BiAtom } from "react-icons/bi";

const backgroundClasses = {
  primary: "bg-[#0483e2]",
  secondary: "bg-[#02345A]",
};

// Floating Cards (memoized for performance)
const FloatingCards = memo(() => {
  return (
    <>
      {/* Top-left card */}
      <motion.div
        className="absolute top-6 left-3 sm:top-10 sm:left-8 bg-white rounded-2xl shadow-lg p-3 sm:p-4 w-48 sm:w-64 z-10"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex -space-x-2 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden"
            >
              <Image
                src={`/hero/community/${i}.jpg`}
                alt="Student"
                fill
                className="object-cover"
                sizes="40px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-600">
          Join our community of <br />
          <span className="font-bold text-foreground">1,200+ Students</span>
        </p>
      </motion.div>

      {/* Top-right progress arc */}
      <motion.div
        className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-white rounded-2xl shadow-lg p-3 sm:p-4 w-44 sm:w-56 z-10"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col items-center pb-8">
          <div className="relative w-32 h-20 sm:w-32 sm:h-24 flex flex-col">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              <path
                d="M10,50 A40,40 0 0,1 90,50"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <motion.path
                d="M10,50 A40,40 0 0,1 90,50"
                stroke="#0483e2"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={Math.PI * 80}
                initial={{ strokeDashoffset: Math.PI * 80 }}
                animate={{
                  strokeDashoffset: Math.PI * 80 * (1 - 87.6 / 100),
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute w-full flex flex-col items-center justify-center top-[48%]">
              <div className="w-3 h-3 bg-primary rounded-full my-2"></div>

              <span className="text-xs sm:text-sm font-bold text-primary">
                87.6%
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#7A869A]">
                Completion rate of our experiments
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom-left course card */}
      <motion.div
        className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 bg-white rounded-2xl shadow-lg p-4 sm:p-5 w-48 sm:w-60 z-10"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <BiAtom className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-gray-600">
              Total Simulations
            </p>
            <p className="text-lg sm:text-2xl font-bold text-foreground">
              100+
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
});
FloatingCards.displayName = "FloatingCards";

// Individual Slide Components

const Slide1 = ({ isActive }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Text Section */}
      <div className=" md:space-y-6 text-center lg:text-left max-h-[90%] pt-20 md:pt-0">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.h1
              key="slide1-title"
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              Empowering Africa&apos;s Next Generation of STEM Innovators
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key="slide1-desc"
              className="text-sm sm:text-base md:text-lg text-white/90 leading-loose max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bridging the digital divide with world-class virtual laboratory
              experiences. From Lagos to Cape Town, unlock limitless potential
              in Science, Technology, Engineering, and Mathematics.
            </motion.p>
          )}
        </AnimatePresence>

        {isActive && (
          <div className="gap-4">
            <Link href="/auth/register">
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-secondary font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:mt-10  lg:mt-0">
        <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[5/5] lg:aspect-[6/5] xl:aspect-[5/4] flex justify-center items-center max-h-[80vh]">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                key="slide1-image"
                className="relative w-full h-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-5xl rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/hero/1.jpg"
                  alt="STEM Student"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                  className="object-contain rounded-2xl"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const Slide2 = ({ isActive }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Text Section */}
      <div className="space-y-6 md:space-y-6 text-center lg:text-left max-h-[90%]">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.h1
              key="slide2-title"
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              Virtual & Augmented Reality in STEM Education for Secondary &
              Tertiary Schools.
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key="slide2-desc"
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Virtual Science Labs offers students engaging STEM courses
              accessible on tablet or PC anywhere, anytime.
            </motion.p>
          )}
        </AnimatePresence>

        {isActive && (
          <div className="gap-4">
            <Link href="/auth/register">
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-secondary font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="w-full max-w-6xl mx-auto md:ml-20 mt-10 lg:mt-0 relative">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="slide-2"
              className="relative rounded-2xl overflow-hidden z-10 inline-block ml-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/hero/3.jpg"
                alt="ASEE 2025 Event"
                width={1200} // ← Put the REAL natural width here
                height={700} // ← Put the REAL natural height here
                className="object-contain w-auto h-[70vh] "
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="border-4 rounded-2xl border-white h-[450px] md:h-[500px] w-[300px] absolute top-8 md:top-6 left-24"></div>
      </div>
    </>
  );
};

const Slide3 = ({ isActive }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Text Section */}
      <div className="space-y-6 md:space-y-6 text-center lg:text-left max-h-[90%]">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.h1
              key="slide3-title"
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-20 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              Unlock Potential in Your Classroom
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key="slide3-desc"
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your classroom with DaryLabs. Our virtual labs use VR
              and AR to give students practical, hands-on science experience,
              preparing them for a future in innovation.
            </motion.p>
          )}
        </AnimatePresence>

        {isActive && (
          <div className="gap-4">
            <Link href="/auth/register">
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-secondary font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 lg:mt-0">
        <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[5/5] lg:aspect-[6/5] xl:aspect-[5/4] flex justify-center items-center max-h-screen">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                key="slide3-image"
                className="relative w-full h-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-5xl rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/hero/2.png"
                  alt="STEM Student"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // ASEE + 3 regular slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => setCurrentSlide(index), []);

  // Determine background based on current slide
  const getBackground = () => {
    if (currentSlide === 0) return "secondary"; // ASEE
    if (currentSlide === 1) return "primary"; // Slide 1
    if (currentSlide === 2) return "secondary"; // Slide 2
    return "primary"; // Slide 3
  };

  const getSlideHeight = () => {
    if (currentSlide === 0) return "h-[650px]"; // Slide1
    if (currentSlide === 1) return "h-[900px]"; // Slide2
    if (currentSlide === 2) return "h-[700px]"; // Slide3
    return "h-[1100px]";
  };

  return (
    <section
      className={clsx(
        `relative overflow-hidden ${getSlideHeight()} sm:min-h-[650px] md:min-h-[500px] md:max-h-[650px] flex items-center`,
        backgroundClasses[getBackground()],
      )}
    >
      {/* Grid Line Vector Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/grid.png"
          alt="Grid background pattern"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
      </div>

      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-12  md:py-10 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.96 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-24 items-center"
          >
            {currentSlide === 0 && <Slide1 isActive={true} />}
            {currentSlide === 1 && <Slide2 isActive={true} />}
            {currentSlide === 2 && <Slide3 isActive={true} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSlider;
