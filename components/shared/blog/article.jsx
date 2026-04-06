"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { articles2 } from "@/lib/data";

const ArticleCard = ({
  image,
  author,
  date,
  title,
  description,
  tags,
  link,
}) => {
  return (
    <article className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Blue tint gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent pointer-events-none" />
      </div>

      {/* Author and Date */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary font-semibold text-sm">{author}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>

      {/* Title with Arrow */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-2xl md:text-3xl font-bold text-secondary leading-tight flex-1 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm font-medium px-0 ${
                tag.color === "primary"
                  ? "text-primary"
                  : tag.color === "green"
                  ? "text-green-600"
                  : tag.color === "purple"
                  ? "text-purple-600"
                  : tag.color === "pink"
                  ? "text-pink-600"
                  : "text-gray-700"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
const ArticleGrid = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles2.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
