"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const TestimonialsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Video Thumbnail */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] lg:aspect-[21/9]">
              <Image
                src="/testimonials/1.jpg"
                alt="Parent testimonials"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Play Button - Simple Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 rounded-2xl bg-[#0483E2]/10 backdrop-blur-sm border-2 border-[#0483E2]/40 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
                <p
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white text-center max-w-5xl"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Don't take our words for it, hear what our{" "}
                  <span className="text-[#0483E2]">parents</span> have to say.
                </p>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {isPlaying && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setIsPlaying(false)}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                onClick={() => setIsPlaying(false)}
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Parent testimonials"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Testimonial Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" p-6 sm:p-8 "
            >
              {/* Quote Text */}
              <div className="mb-8">
                <p
                  className="text-white/90 text-base text-center sm:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t text-center border-white/10 pt-6">
                <p
                  className="text-white font-semibold text-base mb-1"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
