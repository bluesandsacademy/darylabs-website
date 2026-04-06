"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { articles } from "@/lib/data";

const BlogSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="py-10 sm:py-10  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wider mb-3"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Our blog
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Resources & Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-primary focus:border-transparent"
              style={{ fontFamily: "var(--font-jarkata)" }}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-lg 
                       transition-colors duration-300"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Subscribe
            </button>
          </motion.form>

          <p
            className="text-xs text-gray-500"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            We care about your data in our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              privacy policy
            </a>
            .
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <a href={article.link} className="block">
                {/* Image with Blue Gradient Overlay */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Blue gradient overlay from bottom - thicker at bottom, fades upward */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(4, 131, 226, 0.75) 0%, rgba(4, 131, 226, 0.5) 15%, rgba(4, 131, 226, 0.25) 30%, rgba(4, 131, 226, 0.1) 45%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Meta */}
                  <div
                    className="flex items-center gap-2 text-sm text-gray-600"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                  >
                    <span className="font-semibold text-primary">
                      {article.author}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-secondary group-hover:text-primary 
                             transition-colors duration-300 flex items-start justify-between gap-2"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                  >
                    <span>{article.title}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 transform group-hover:translate-x-1 
                               group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "var(--font-jarkata)" }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        style={{ fontFamily: "var(--font-jarkata)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
