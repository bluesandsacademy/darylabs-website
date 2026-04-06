"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Event Highlight Section
 *
 * Displays event highlights with a text list and animated image gallery
 * Uses dedicated image sets for each slide for better control
 */

export default function EventHighlight() {
  const highlights = [
    "Live VR/AR lab demos (Physics, Chemistry, Biology, Earth Science)",
    "AI Teacher power sessions on AI for planning, marking, and feedback.",
    "Student tech challenge with prizes and a public leaderboard.",
    "Panels/lightning talks on what's working (and what isn't) in African classrooms.",
    "Partner alley for demos, collaborations, and pilots.",
  ];

  // Define dedicated image sets for each slide
  // Each slide shows exactly 3 images: one large (left) and two small (right)
  const imageSlides = [
    {
      // Slide 1
      large: {
        src: "/asee/slide11.jpg",
        alt: "Interactive lab demo with digital display",
      },
      topRight: {
        src: "/asee/slide12.jpg",
        alt: "Students engaging with technology",
      },
      bottomRight: {
        src: "/asee/slide13.jpg",
        alt: "AI Teacher demonstration",
      },
    },
    {
      // Slide 2
      large: { src: "/asee/slide21.jpg", alt: "Panel discussion session" },
      topRight: { src: "/asee/slide22.jpg", alt: "Team photo at event" },
      bottomRight: {
        src: "/asee/slide23.jpg",
        alt: "Hands-on VR demonstration",
      },
    },
    {
      // Slide 3
      large: { src: "/asee/slide31.jpg", alt: "Partner collaboration space" },
      topRight: { src: "/asee/slide32.jpg", alt: "Student tech challenge" },
      bottomRight: { src: "/asee/slide33.jpg", alt: "VR experience showcase" },
    },
    {
      // Slide 4
      large: { src: "/asee/slide41.jpg", alt: "Networking session" },
      topRight: { src: "/asee/slide42.jpg", alt: "Technology exhibition" },
      bottomRight: { src: "/asee/slide43.jpg", alt: "Interactive workshop" },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSlides.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 4000);

    return () => clearInterval(interval);
  }, [imageSlides.length]);

  const currentImages = imageSlides[currentSlide];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-secondary tracking-tight">
              Event Highlight
            </h2>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                  <span className="text-foreground/60 text-base md:text-lg leading-relaxed font-light">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            {/* Progress Indicator */}
            <div className="flex gap-2 pt-4">
              {imageSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentSlide(idx);
                      setIsTransitioning(false);
                    }, 500);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentSlide === idx
                      ? "w-8 bg-primary"
                      : "w-6 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Animated Image Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[200px] relative">
            {/* Large Image - Spans 2 rows (Left side) */}
            <AnimatedImageBox
              image={currentImages.large}
              className="row-span-2"
              isTransitioning={isTransitioning}
            />

            {/* Top Right Image */}
            <AnimatedImageBox
              image={currentImages.topRight}
              className=""
              isTransitioning={isTransitioning}
              delay={100}
            />

            {/* Bottom Right Image */}
            <AnimatedImageBox
              image={currentImages.bottomRight}
              className=""
              isTransitioning={isTransitioning}
              delay={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * AnimatedImageBox Component
 * Renders images with smooth fade transitions
 */
function AnimatedImageBox({ image, className, isTransitioning, delay = 0 }) {
  if (!image) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden bg-gray-200 ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-xs font-light">No Image</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden group ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={delay === 0} // Prioritize the large image
        />
      </div>
    </div>
  );
}
