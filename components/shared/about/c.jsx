"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  const ctaBlocks = [
    {
      title: "Become a Partner",
      description:
        "We believe that collaboration drives transformation. Join us as we create sustainable change in education across Africa. Whether you're an investor, development agency, corporate organization, or educational institution, your partnership can help shape the future of learning.",
      buttonText: "Partner With Us",
      buttonLink: "/contact",
      image: "/about/3.jpg",
      imageAlt: "Team collaboration and partnership meeting",
      imagePosition: "left",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 lg:space-y-20">
        {ctaBlocks.map((block, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              block.imagePosition === "right" ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: block.imagePosition === "left" ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative ${
                block.imagePosition === "right" ? "lg:col-start-2" : ""
              }`}
            >
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/20"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: block.imagePosition === "left" ? 50 : -50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className={`space-y-6 ${
                block.imagePosition === "right"
                  ? "lg:col-start-1 lg:row-start-1"
                  : ""
              }`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {block.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {block.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href={block.buttonLink}
                  className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold 
                             px-8 py-4 rounded-xl transition-all duration-300 
                             hover:shadow-lg hover:-translate-y-1 "
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {block.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;
