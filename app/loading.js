"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Loading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 100);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // Adjust delay before hiding if needed

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-60" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Blue Stem Labs"
            width={96}
            height={96}
            className="object-contain"
            priority
          />
        </div>

        <h1
          className="text-3xl font-bold text-primary"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          BLUE STEM LABS
        </h1>

        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
