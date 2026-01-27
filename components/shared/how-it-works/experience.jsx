"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Experience Science. Anytime. Anywhere.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            DaryLabs makes practical science learning possible for every student
            in Africa whether in the classroom, at home, or in underserved
            African communities with limited access to physical laboratories.
          </p>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our virtual lab provides an immersive, interactive, and realistic
            environment where students can perform experiments, visualize
            abstract concepts, and build confidence in STEM subjects, all from
            their device.
          </p>
        </motion.div>

        {/* VR Experience Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Image Container with Enhanced Styling */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main Image */}
            <div className="relative aspect-video">
              <Image
                src="/features/exp.jpg"
                alt="Student experiencing virtual reality science lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm mb-1">
                    Immersive Learning
                  </h3>
                  <p className="text-xs text-gray-600">
                    3D visualization of complex concepts
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm mb-1">
                    Safe Experiments
                  </h3>
                  <p className="text-xs text-gray-600">
                    Risk-free hands-on practice
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Border Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/30 rounded-br-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
