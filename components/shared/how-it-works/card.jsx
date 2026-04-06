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
      className="sticky w-full px-6"
      style={{
        top: `${topPosition}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="bg-primary rounded-[2.5rem] overflow-hidden mx-auto max-w-7xl shadow-2xl"
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
                value * 0.2
              }), 0 10px 40px rgba(0, 0, 0, ${value * 0.15})`
          ),
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12 items-center min-h-[200px]">
          {/* Image Section */}
          <motion.div
            className={`${
              isEven ? "lg:order-1" : "lg:order-2"
            } relative overflow-hidden rounded-3xl bg-white`}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -20]),
            }}
          >
            <motion.div
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [1.1, 1, 1.05]
                ),
              }}
              className="w-full aspect-5/5 relative"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                quality={90}
              />
            </motion.div>

            {/* Optional: White border effect */}
            <div className="absolute inset-0 rounded-3xl ring-8 ring-white/10 pointer-events-none" />
          </motion.div>

          {/* Content Section */}
          <div
            className={`${
              isEven ? "lg:order-2" : "lg:order-1"
            } relative flex flex-col justify-center space-y-6`}
          >
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
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
              className="text-base lg:text-lg text-white/90 leading-relaxed"
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

            {/* How it works section */}
            {feature.howItWorks && (
              <motion.div
                className="space-y-1"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.3, 0.7, 1],
                    [0, 1, 1, 0.7]
                  ),
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  How it works:
                </h3>
              </motion.div>
            )}

            {feature.keyPoints && (
              <motion.div
                className="space-y-4"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.3, 0.7, 1],
                    [0, 1, 1, 0.7]
                  ),
                }}
              >
                {feature.keyPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-white/95 leading-relaxed flex-1">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
