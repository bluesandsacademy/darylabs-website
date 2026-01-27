"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export default function BecomePartnerCTA() {
  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      label: "Email",
      value: "partnerships@bluesandstemlabs.org",
      href: "mailto:partnerships@bluesandstemlabs.org",
    },
    {
      id: 2,
      icon: Phone,
      label: "Call",
      value: "+234 (0) 813-962-2583",
      href: "tel:+2348139622583",
    },
    {
      id: 3,
      icon: Globe,
      label: "Website",
      value: "https://www.bluesandstemlabs.com/",
      href: "https://www.bluesandstemlabs.com/",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0483e2] via-[#0483e2] to-[#0370c7] py-16 lg:py-24">
      {/* Diagonal Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.05) 60px,
            rgba(255,255,255,0.05) 120px
          )`,
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Become A Partner
          </h2>
          <div className="max-w-3xl mx-auto space-y-1">
            <p className="text-white/95 text-base lg:text-lg">
              Join us in shaping the future of science learning in Africa.
            </p>
            <p className="text-white/95 text-base lg:text-lg">
              We welcome partnerships in technology, education, funding, and
              policy development.
            </p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.id}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16  rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-3">
                  {method.label}
                </h3>

                {/* Value */}
                <p className="text-sm lg:text-base text-gray-600 font-medium">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
        >
          <Link
            href="/apply-partner"
            className="group relative px-8 lg:px-10 py-3.5 lg:py-4 bg-white text-[#02345a] rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:shadow-xl transition-all duration-300 "
          >
            Apply to Partner
          </Link>

          <Link
            href="/partnership-deck"
            className="group relative px-8 lg:px-10 py-3.5 lg:py-4 bg-[#0370c7] text-white rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:bg-[#025a9e] transition-all duration-300 border-2 border-white/20"
          >
            Download Partnership Deck
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
