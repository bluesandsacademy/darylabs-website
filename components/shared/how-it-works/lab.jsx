"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VirtualLabVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add your video play logic here
  };

  return (
    <section className="relative bg-primary overflow-hidden py-20 lg:py-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="video-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#video-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
          {/* Video Thumbnail/Player */}
          <div className="relative aspect-video bg-gray-900">
            {/* Replace with your actual video thumbnail */}
            <img
              src="/features/17.png"
              alt="Virtual Lab Preview"
              className="w-full h-full object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl group-hover:shadow-primary/50"
                aria-label="Play video"
              >
                <Play
                  className="text-primary ml-1"
                  size={40}
                  fill="currentColor"
                />
              </button>
            )}

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="inline-block bg-primary px-8 py-4 rounded-xl shadow-lg">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Explore the Virtual Lab
                </h3>
              </div>
            </div>
          </div>

          {/* Optional: If you want to embed actual video player */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black">
              <iframe
                className="w-full h-full"
                src="YOUR_VIDEO_URL?autoplay=1"
                title="Virtual Lab Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
