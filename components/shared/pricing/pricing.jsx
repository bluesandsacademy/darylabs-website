"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      price: "₦0",
      period: "",
      subtitle: "Free",
      features: [
        "Access to 10 simulations",
        "Unlimited repetitions & instant guidance",
        "English interface & regular updates",
        "Works online or offline (with cached content)",
        "14-day trial, no credit card. 14-day money-back",
      ],
    },
    {
      price: "₦5,000",
      period: "/termly (3 Months)",
      subtitle: "Basic Silver (Termly)",
      features: [
        "50+ Virtual Labs",
        "Up to 200 Students",
        "Basic LMS Integration",
        "Email Support",
      ],
    },
    {
      price: "₦3,000",
      period: "/3 months (TBD: per student/device/school)",
      subtitle: "School (Basic Silver)",
      features: [
        "Classroom tools: create classes, assign work, live/near-live monitoring",
        "Analytics: progress tracking, performance reports, misconception insights",
        "Assessment mode: auto-graded quizzes w/analytics, exports (CSV/PDF)",
        "Priority support (school admin) & lead teacher",
        "Offline-first admin/obile, content packs, scheduled/delta updates",
        "Active classroom use across a term",
      ],
    },
    {
      price: "₦15,000",
      period: "/3 months (TBD: per student/device/school)",
      subtitle: "University (Basic Silver (Termly))",
      features: [
        "150+ Virtual Labs",
        "Advanced Analytics",
        "Multi-Language Support",
        "Priority Support",
        "Custom Branding",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-secondary mb-1">
                  {plan.price}
                  {plan.period && (
                    <span className="text-base font-normal text-gray-600">
                      {plan.period}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                Get started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
