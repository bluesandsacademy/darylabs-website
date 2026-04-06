"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I use DaryLabs without internet?",
      answer:
        "Yes! Our offline mode allows students to access the labs and complete experiments offline. Results sync automatically once back online.",
    },
    {
      question: "How many users can access the School Plan?",
      answer:
        "Each School Plan covers multiple users, including administrators, teachers, and students; depending on your license size.",
    },
    {
      question: "Do teachers get training or support?",
      answer:
        "Absolutely! We offer onboarding sessions, digital handbooks, and continuous technical support for teachers and administrators.",
    },
    {
      question: " Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes. You can change your plan or add users directly from your dashboard at any time.",
    },
    {
      question: "Is DaryLabs available outside Ghana?",
      answer:
        "Yes! Our solution supports schools and learners across Africa with localized curriculum mapping.",
    },
    {
      question: "What devices does it support?",
      answer: "You can use DaryLabs on any PC, tablet, or Android device.",
    },
    {
      question: "What happens if my subscription expires?",
      answer:
        "Your access will pause, but all your data, progress, and experiments will be saved. Reactivate anytime to continue.",
    },
  ];

  const teamMembers = [
    { image: "/home/random/1.jpg", name: "Team Member 1" },
    { image: "/home/random/2.png", name: "Team Member 2" },
    { image: "/home/random/3.jpg", name: "Team Member 3" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Frequently asked questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Everything you need to know about the product and billing
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left 
                         hover:bg-gray-50 transition-colors duration-300"
              >
                <span
                  className="text-base sm:text-lg font-semibold text-secondary pr-4"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {faq.question}
                </span>

                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                            ${
                              openIndex === index
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-primary"
                            }
                            transition-all duration-300`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: "var(--font-jarkata)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 sm:p-10 text-center"
        >
          {/* Team Avatars */}
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-primary to-secondary"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold text-secondary mb-2"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Still have questions?
          </h3>

          {/* Description */}
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary 
                     text-white font-semibold rounded-xl transition-colors duration-300"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Get in touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
