"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "Do we need the internet during class?",
      answer: "No. Pre-download content; run offline; sync later.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Our platform works on Windows, Mac, iOS, Android, and web browsers. It's optimized for tablets, laptops, and smartphones. Minimum requirements include 2GB RAM and a modern browser (Chrome, Safari, Firefox, Edge).",
    },
    {
      question: "Can I export grades?",
      answer:
        "Yes, you can export grades in multiple formats including CSV, Excel, and PDF. Teachers can download individual student reports or entire class data. The export includes assignment scores, completion dates, and detailed performance analytics.",
    },
    {
      question: "How many simulations are included?",
      answer:
        "We offer 150+ interactive simulations across Biology, Chemistry, and Physics. New simulations are added regularly, and all are included in your subscription. Each simulation is curriculum-aligned and includes teacher guides and assessment tools.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // FAQ item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-secondary font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Frequently asked questions
          </h2>
          <p
            className="text-gray-600 text-lg sm:text-xl"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Everything you need to know about our virtual STEM Lab
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-gray-200 last:border-b-0"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3
                  className="text-secondary font-semibold text-xl sm:text-2xl pr-8 group-hover:text-primary transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center"
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.1 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(4, 131, 226, 0.1)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {openIndex === index ? (
                      <motion.div
                        key="minus"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Minus
                          className="w-5 h-5 text-primary"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus
                          className="w-5 h-5 text-primary"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>

              {/* Answer with AnimatePresence */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-base sm:text-lg leading-relaxed pr-14 pb-6"
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
