"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/lib/data";

const TeamSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wide mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Meet Our Team
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            We work together, as a seamless remote team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Our philosophy is simple, hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              {/* Image Container - Optimized for Headshots */}
              <div className="relative mb-5 overflow-hidden rounded-xl aspect-6/6 w-full bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <h3
                className="text-xl font-bold text-secondary mb-2"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {member.name}
              </h3>

              <p
                className="text-base font-semibold text-primary mb-3"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
