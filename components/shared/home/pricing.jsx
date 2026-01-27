"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [currency, setCurrency] = useState("naira");
  const [exchangeRate, setExchangeRate] = useState(1600);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/892a9ad526f14e1e8f7652e0/latest/USD"
        );
        const data = await response.json();
        if (data.conversion_rates?.NGN)
          setExchangeRate(data.conversion_rates.NGN);
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
      }
    };
    fetchExchangeRate();
  }, []);

  const plans = [
    {
      name: "Basic Plan",
      badge: "Best for Individuals",
      tagline:
        "Perfect for individual learners and students exploring science on their own.",
      priceUSD: 5,
      priceNGN: 5000,
      period: "/Term",
      features: [
        "Access to core Physics, Chemistry, and Biology simulations",
        "Graded assignments, tracking & quizzes",
        "Learn on PC & tablet, offline-ready modules",
        "Email support",
      ],
      buttonText: "Get started",
      buttonStyle: "primary",
      popular: false,
    },
    {
      name: "School Plan",
      badge: "Most Popular!",
      tagline:
        "Empower your whole school with immersive practical science and powerful lessons.",
      priceUSD: 50,
      priceNGN: 50000,
      period: "/Term",
      features: [
        "Multi-user school license (admins, teachers, students)",
        "Teacher dashboard, performance analytics & exports",
        "Auto-graded quizzes, rubrics & reports (CSV/PDF)",
        "Offline Lab Packages & Sync for low connectivity",
        "Priority onboarding & support",
      ],
      buttonText: "Subscribe",
      buttonStyle: "white",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      badge: "Custom Deployment",
      tagline:
        "For multi-campus institutions, ministries, and education networks that need scale and flexibility.",
      priceUSD: null,
      priceNGN: null,
      period: null,
      features: [
        "Scalable deployment across campuses & geographies",
        "Integration with LMS/SSO, data pipelines & SLAs",
        "Advanced analytics & custom dashboards",
        "Curriculum mapping & localization",
        "Dedicated technical account manager",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "primary",
      popular: false,
    },
  ];

  const formatPrice = (usdPrice) => {
    if (usdPrice === null) return "Custom";
    return currency === "dollar"
      ? `$${usdPrice}`
      : `₦${Math.round(usdPrice * exchangeRate).toLocaleString()}`;
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wider mb-3"
          >
            Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            Choose Your Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Flexible pricing designed for African educational budgets
          </motion.p>

          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <span
              className={`text-sm font-semibold ${
                currency === "dollar" ? "text-secondary" : "text-gray-400"
              }`}
            >
              USD
            </span>
            <button
              onClick={() =>
                setCurrency(currency === "dollar" ? "naira" : "dollar")
              }
              className="relative w-14 h-7 bg-primary rounded-full transition-all duration-300"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  currency === "naira" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                currency === "naira" ? "text-secondary" : "text-gray-400"
              }`}
            >
              NGN
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl" // ← Added rounded-2xl here
            >
              <div
                className={`h-full p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-white shadow-xl scale-[1.02]"
                    : "bg-white text-secondary shadow-md hover:shadow-lg"
                }`} // ← Unified to rounded-2xl, removed conflicting rounded-3xl
              >
                {/* Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      plan.popular ? "bg-white/20" : "bg-primary text-white"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p
                  className={`text-sm sm:text-base mb-6 ${
                    plan.popular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold">
                      {formatPrice(plan.priceUSD)}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-base sm:text-lg ${
                          plan.popular ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.popular
                            ? "text-white"
                            : "bg-blue-100 text-primary rounded-3xl"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.buttonStyle === "white"
                      ? "bg-white text-primary hover:bg-secondary hover:text-white"
                      : plan.popular
                      ? "bg-white text-primary hover:bg-gray-50"
                      : "bg-primary text-white hover:bg-secondary"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

              {plan.popular && (
                <div className="absolute top-2 right-[-1%] sm:right-[-6%] bg-white text-primary text-[10px] sm:text-xs font-semibold px-8 py-2 shadow-md transform rotate-[30deg]">
                  Most Popular
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
