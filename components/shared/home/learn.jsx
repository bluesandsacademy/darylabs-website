"use client";

import { useState } from "react";
import Image from "next/image";
import { tabContent } from "@/lib/data";
import Link from "next/link";

export default function EmpoweringLearningSection() {
  const [activeTab, setActiveTab] = useState("students");

  const currentContent = tabContent[activeTab];

  return (
    <section className="relative bg-secondary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>

          {/* Perspective grid */}
          <g transform="translate(500, 600) rotate(-5) skewY(-20)">
            <rect
              x="-1000"
              y="-500"
              width="2000"
              height="1000"
              fill="url(#grid)"
            />
          </g>

          {/* Fade overlay */}
          <rect width="1000" height="800" fill="url(#fade)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            DaryLabs
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Empowering the Future of Learning
          </h3>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            Built for African next-generation of innovators
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeTab === "students"
                ? "bg-white text-secondary shadow-lg"
                : "bg-primary text-white hover:bg-primary/80"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setActiveTab("teachers")}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeTab === "teachers"
                ? "bg-white text-secondary shadow-lg"
                : "bg-primary text-white hover:bg-primary/80"
            }`}
          >
            Teachers
          </button>
          <button
            onClick={() => setActiveTab("schools")}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeTab === "schools"
                ? "bg-white text-secondary shadow-lg"
                : "bg-primary text-white hover:bg-primary/80"
            }`}
          >
            Schools
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 text-white">
              <h4 className="text-xl font-bold mb-2">{currentContent.title}</h4>
              <h5 className="text-2xl md:text-3xl font-bold mb-4">
                {currentContent.subtitle}
              </h5>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                {currentContent.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">•</span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                {currentContent.buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium cursor-pointer text-sm transition-all duration-300 ${
                      button.primary
                        ? "bg-white text-black hover:bg-white/90 shadow-lg"
                        : "bg-transparent border-2 border-white text-white hover:bg-white/10"
                    }`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>

              {/* Footer Text */}
              <p className="text-white/70 text-xs">{currentContent.footer}</p>
            </div>

            {/* Right Content - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-6 h-full flex flex-col">
                {/* Image */}
                <div className="relative bg-gray-700 rounded-xl mb-4 h-56 overflow-hidden">
                  <Image
                    src={currentContent.image}
                    alt={currentContent.cardTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div>
                  <h6 className="text-white font-bold text-lg mb-2">
                    {currentContent.cardTitle}
                  </h6>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {currentContent.cardDescription}
                  </p>
                  <Link href={currentContent.blogLink}>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-[#0483e2] font-semibold text-sm hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
                      Read More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
