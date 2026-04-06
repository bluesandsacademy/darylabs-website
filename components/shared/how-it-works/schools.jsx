"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ForSchoolsSection() {
  const administratorSteps = [
    {
      text: "Onboard Your School: Schools register and receive dedicated access with multiple teacher and student accounts.",
    },
    {
      text: "Assign Curriculum Aligned Experiments to Students Account: Assign virtual experiments to your student account",
    },
    {
      text: "Monitor Performance: Access the school dashboard to view analytics on usage, learning outcomes, and student engagement.",
    },
    {
      text: "Enhance STEM Delivery: Use the platform to strengthen your school's science programs and demonstrate innovation in education.",
    },
  ];

  const schoolBenefits = [
    {
      text: "Affordable alternative to building and maintaining physical labs.",
    },
    {
      text: "Supports blended and digital learning initiatives.",
    },
    {
      text: "Enhances school reputation and STEM performance.",
    },
    {
      text: "Centralized analytics for school-wide performance tracking.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-secondary overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            For Schools
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Teachers use DaryLabs to enhance lessons, simplify complex topics,
            and create an engaging classroom experience.
          </p>
        </motion.div>

        {/* School Administrators Section */}
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
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/features/school1.jpg"
                    alt="School administrators meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-3xl -z-10"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                School Administrators
              </h3>

              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Schools use DaryLabs as a scalable, cost-effective solution to
                deliver world-class STEM education, even without physical
                infrastructure.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  How it works:
                </h4>

                <div className="space-y-5">
                  {administratorSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      {/* Checkmark Circle */}
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
                      <p className="text-base text-white/95 leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* School Benefits Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 lg:order-1"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                School Benefits
              </h3>

              <div className="space-y-5">
                {schoolBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    {/* Checkmark Circle */}
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
                    <p className="text-base text-white/95 leading-relaxed">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
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
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/features/school2.jpg"
                    alt="School educators collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
