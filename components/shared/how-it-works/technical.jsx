"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnicalHighlightsSection() {
  const keyCapabilities = [
    {
      text: "3D & Immersive Simulations: Realistic and interactive lab environments built using Unity and WebGL for seamless experience on desktop and mobile.",
    },
    {
      text: "AI-Driven Personalization: Adaptive feedback and recommendations to support individual learning pace.",
    },
    {
      text: "Data Analytics Dashboard: Real-time insights for teachers and administrators to measure engagement and performance.",
    },
    {
      text: "Secure Cloud Infrastructure: Scalable system hosted on cloud servers with data privacy and school-level management.",
    },
    {
      text: "Cross-Platform Access: Works on any device: laptops, tablets, or mobile phones.",
    },
  ];

  const howItWorks = [
    {
      text: "Students can download experiments and lessons when connected to the internet.",
    },
    {
      text: "Once downloaded, experiments can be performed offline.",
    },
    {
      text: "Progress syncs automatically when the user reconnects.",
    },
  ];

  const benefits = [
    {
      text: "Ideal for schools and communities with poor internet access.",
    },
    {
      text: "Ensures consistent STEM education delivery.",
    },
    {
      text: "Expands learning opportunities to rural and underserved areas.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Technical Highlights
          </h2>
        </motion.div>

        {/* Powerful, Flexible Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/features/technical1.jpg"
                    alt="Students using VR headsets for science experiments"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                Powerful, Flexible, and Built for All Environments
              </h3>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                DaryLabs is built using modern technologies designed for
                accessibility, scalability, and inclusivity.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-secondary mb-4">
                  Key Capabilities:
                </h4>

                <div className="space-y-4">
                  {keyCapabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      {/* Checkmark */}
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {capability.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Offline Access Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Offline Access — Learning Without Limits
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 lg:order-1"
            >
              <div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  One of DaryLabs' most transformative features is Offline Mode,
                  built to ensure learning never stops, even in low-connectivity
                  environments.
                </p>

                <h4 className="text-lg font-semibold text-secondary mb-4">
                  How It Works:
                </h4>

                <div className="space-y-4 mb-8">
                  {howItWorks.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      {/* Checkmark */}
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-secondary mb-4">
                  Benefits:
                </h4>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      {/* Checkmark */}
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {benefit.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/features/technical2.jpg"
                    alt="Student studying with laptop and taking notes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
