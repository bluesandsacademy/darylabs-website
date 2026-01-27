"use client";
import React, { useState } from "react";
import Image from "next/image";

const SolutionWorksHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Video Card */}
        <div
          className="relative rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {/* Background Image */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7]">
            <Image
              src="/video/1.jpg"
              alt="Student using VR technology"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8">
              {/* Play Button */}
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-md 
                           flex items-center justify-center border-4 border-white/40
                           hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                aria-label="Play video"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                {/* Ripple Effect */}
                <span
                  className="absolute inset-0 rounded-full border-2 border-white/60 
                                animate-ping opacity-75"
                />
              </button>

              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center px-4"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                How our Solution works
              </h2>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div
            className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 pointer-events-none"
          />
        </div>

        {/* Optional: Modal for video playback */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 
                       hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">
              {/* Replace with your video embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="How our Solution works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionWorksHero;
