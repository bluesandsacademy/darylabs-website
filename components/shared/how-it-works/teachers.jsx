"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeachersSection() {
  const howItWorksSteps = [
    {
      text: "Create a Class: Teachers can invite students or integrate with the school's learning platform.",
    },
    {
      text: "Select Experiments: Access a curated library of interactive experiments aligned with WAEC, and international STEM standards.",
    },
    {
      text: "Demonstrate Live or Assign Tasks: Use the virtual lab during class for demonstrations or assign experiments as virtual homework.",
    },
    {
      text: "Monitor and Assess: Track student performance, engagement, and comprehension through the teacher dashboard.",
    },
  ];

  const teacherBenefits = [
    {
      text: "Simplifies science instruction and improves learning outcomes.",
    },
    {
      text: "Reduces cost and safety challenges of physical labs.",
    },
    {
      text: "Provides data insights to personalize student learning.",
    },
    {
      text: "Enables blended and remote teaching with ease.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-20 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

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
            Teachers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Teachers use DaryLabs to enhance lessons, simplify complex topics,
            and create an engaging classroom experience.
          </p>
        </motion.div>

        {/* How it Works Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                How it works
              </h3>

              <div className="space-y-6">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    {/* Checkmark */}
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
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
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.text}
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
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 p-3">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/features/teacher1.jpg"
                    alt="Teacher in classroom with tablet"
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

        {/* Teacher Benefits Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 p-3">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/features/teacher2.jpg"
                    alt="Teacher helping student"
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
              className="space-y-8 lg:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                Teacher Benefits
              </h3>

              <div className="space-y-6">
                {teacherBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    {/* Checkmark */}
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
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
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
