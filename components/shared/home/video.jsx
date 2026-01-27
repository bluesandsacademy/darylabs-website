"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="py-12 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Video Player Container */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Device Frame */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-2 sm:p-3 lg:p-4 shadow-2xl">
              {/* Screen Bezel */}
              <div className="relative bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 sm:p-2 lg:p-3">
                {/* Video Container */}
                <div className="relative aspect-video rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-black">
                  {/* Thumbnail */}
                  <Image
                    src="/hero/video.jpg"
                    alt="DaryLabs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={handlePlayClick}
                      className="group relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl scale-150 group-hover:scale-[2] transition-transform duration-500" />

                      {/* Button Circle */}
                      <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-18 lg:h-18 bg-blue-500/20 backdrop-blur-sm rounded-xl border-2 border-white/30 group-hover:bg-blue-600 group-hover:border-white/50 transition-all duration-300 shadow-xl">
                        <FaPlay className="w-7 h-7 sm:w-8 sm:h-8 lg:w-6 lg:h-6 text-white ml-1" />
                      </div>

                      {/* Pulse Animation */}
                    </motion.button>
                  </div>

                  {/* Camera Indicator */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Shadow */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-4 sm:h-6 bg-gray-400/20 blur-2xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Video Modal/Lightbox */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            aria-label="Close video"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube/Vimeo Embed */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="DaryLabs Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Or use HTML5 Video */}
            {/* <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
            >
              <source src="/your-video.mp4" type="video/mp4" />
            </video> */}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default VideoSection;
