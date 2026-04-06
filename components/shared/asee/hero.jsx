"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AseeHero() {
  const headline = "Africa STEM EdTech Expo";

  return (
    <section className="relative bg-[#02345a] overflow-hidden">
      {/* Grid Line Vector Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full opacity-40"
          style={{
            backgroundImage: "url(/grid.png)", // Adjust the path to your actual file name
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-60 hidden md:block z-[1]">
        <div className="grid grid-cols-6 gap-4 h-full items-center pr-8">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

      <div className="max-w-8xl mx-auto w-full px-4 sm:px-6 lg:px-16 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                ASEE 2025
              </h1>
              <p className="text-white/80 text-base sm:text-lg font-light">
                Powered by DaryLabs
              </p>
            </motion.div>

            {/* Typing Animation Headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="inline-block overflow-hidden border-r-2 border-white pr-1">
                  {headline.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6 + i * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  {/* Blinking Cursor */}
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="text-white/90 text-lg sm:text-xl font-medium"
              >
                Comfort Hall, Oke Ira Bridge Bus Stop, off Addo Road, Ajah,
                Lagos.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="text-white/90 text-lg sm:text-xl font-medium"
              >
                25th November 2025
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              A convening for teachers, school leaders, students, EdTech
              founders, investors, NGOs, and government education stakeholders
              to experience immersive VR/AR education tools, digital STEM labs,
              classroom AI tools, and African-aligned digital content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.4 }}
              className="pt-4"
            >
              <Link href="/asee-2025/register">
                <button className="bg-white text-[#02345a] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
                  Register for Event
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="absolute top-60 w-64 h-64 bg-[#0483e2] rounded-[100%_90%_80%_60%_/_10%_70%_20%_180%] opacity-75 blur-xl"></div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/asee/hero.jpg"
                alt="ASEE 2025 Event Mockup"
                width={600}
                height={600}
                className="w-full h-[550px] rounded-2xl object-contain drop-shadow-2xl"
                priority
              />

              {/* Decorative blob */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[#0483e2] rounded-full blur-3xl opacity-20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
