"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EmpoweringFutureSection() {
  return (
    <section className="relative py-10 lg:py-12 bg-primary overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
        >
          Empowering the Future of Learning
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/95 leading-relaxed mb-10 max-w-4xl mx-auto"
        >
          Whether you are a student eager to explore science, a teacher looking
          to transform classroom engagement, or a school striving to deliver
          cutting-edge STEM education — DaryLabs is built for you.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="//auth/register"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Join the future of learning
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
