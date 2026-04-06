"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 0.85, 1],
    [0.88, 1, 1, 0.96, 0.92]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 0.85, 1],
    [120, 0, 0, -15, -30]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.65, 0.85, 1],
    [0, 0.5, 1, 1, 0.8, 0.5]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [5, 0, 0, -3]
  );

  const blur = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 3]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [isEven ? -20 : 20, 0, 0, isEven ? 5 : -5]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    [0.1, 0.2, 0.2, 0.05]
  );

  const brightness = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 0.85, 1],
    [0.95, 1, 1, 0.98, 0.95]
  );

  const topPosition = 90 + index * 25;

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: `${topPosition}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className=" overflow-hidden mx-auto max-w-7xl shadow-2xl"
        style={{
          scale,
          opacity,
          y,
          x,
          rotateX,
          filter: useTransform(
            [blur, brightness],
            ([blurValue, brightnessValue]) =>
              `blur(${blurValue}px) brightness(${brightnessValue})`
          ),
          transformPerspective: 1500,
          boxShadow: useTransform(
            shadowOpacity,
            (value) =>
              `0 30px 90px rgba(4, 131, 226, ${
                value * 0.15
              }), 0 10px 40px rgba(0, 0, 0, ${value * 0.1})`
          ),
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
          {/* Image Section */}
          <motion.div
            className={`${
              isEven ? "lg:order-1" : "lg:order-2"
            } relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100`}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -30]),
            }}
          >
            <motion.div
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [1.15, 1, 1.08]
                ),
              }}
              className="w-full h-full"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={90}
              />
            </motion.div>

            <div
              className={`absolute inset-0 bg-gradient-to-${
                isEven ? "r" : "l"
              } from-transparent via-transparent to-white/10 pointer-events-none`}
            />
          </motion.div>

          {/* Content Section */}
          <div
            className={`${
              isEven ? "lg:order-2" : "lg:order-1"
            } relative bg-white flex flex-col justify-center`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A7FFF]/5 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 lg:p-12 space-y-6">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-tight"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.2, 0.7, 1],
                    [0, 1, 1, 0.8]
                  ),
                }}
              >
                {feature.title}
              </motion.h2>

              <motion.p
                className="text-base text-gray-600 leading-relaxed"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.25, 0.7, 1],
                    [0, 1, 1, 0.7]
                  ),
                }}
              >
                {feature.description}
              </motion.p>

              {feature.keyPoints && (
                <motion.div
                  className="space-y-3 pt-2"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0, 0.3, 0.7, 1],
                      [0, 1, 1, 0.7]
                    ),
                  }}
                >
                  {feature.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0A7FFF]/10 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#0A7FFF]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
