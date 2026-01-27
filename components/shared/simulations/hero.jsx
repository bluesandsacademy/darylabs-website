"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const features = [
    "Curriculum-Aligned",
    "Works Offline",
    "Teacher Dashboards",
    "Auto-graded Assessments",
    "Optional VR",
  ];
  return (
    <section className="relative min-h-[600px] bg-primary overflow-hidden">
      {/* Grid Background Pattern - Using your image */}
      <div className="absolute inset-0 opacity-80">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Main Heading */}
            <h2
              className="font-bold text-4xl sm:text-5xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              A complete virtual science lab—online or offline
            </h2>

            {/* Description */}
            <p
              className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              150+ interactive simulations across Biology, Chemistry, and
              Physics. Assign in seconds, monitor progress, and assess
              understanding—on the devices you already have.
            </p>

            {/* CTA Button */}
            <div>
              <Link href="/request-demo">
                <button
                  className="bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Book a Demo
                </button>
              </Link>
            </div>

            {/* Features List with Checkmarks */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Checkmark Circle */}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                  </div>

                  {/* Feature Text */}
                  <span
                    className="text-white text-base sm:text-lg font-medium"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[550px]"
          >
            {/* Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-0 -right-6 w-[95%] z-10"
            >
              {/* Laptop Screen */}
              <div className="relative">
                {/* Screen Bezel */}
                <div className="relative bg-gray-900 rounded-t-2xl shadow-2xl overflow-hidden border-8 border-gray-800 border-b-0">
                  {/* Camera Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>

                  {/* Browser Chrome */}
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Lab Interface */}
                  <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200">
                    <Image
                      src="/features/lab.png"
                      alt="Virtual Lab Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Laptop Base/Keyboard */}
                <div className="relative">
                  {/* Keyboard Base */}
                  <div className="h-3 bg-linear-to-b from-gray-800 to-gray-900 rounded-b-sm"></div>

                  {/* Laptop Bottom/Deck */}
                  <div
                    className="relative h-16 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 rounded-b-2xl shadow-2xl"
                    style={{
                      clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    {/* Keyboard Keys Simulation */}
                    <div className="absolute inset-0 px-8 py-3 flex items-center justify-center gap-1 opacity-40">
                      {/* Row of simulated keys */}
                      <div className="flex gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-gray-700 rounded-sm"
                            style={{
                              boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.5)",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Trackpad */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-8 bg-gray-700/30 rounded-lg border border-gray-600/30"></div>

                    {/* Brand Logo Area */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Shadow underneath laptop */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-xl rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-6 -left-8 w-[40%] z-20"
            >
              <div className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

                {/* Phone Screen */}
                <div className="relative aspect-9/19 bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/features/lab.png"
                    alt="Mobile Lab Interface"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
