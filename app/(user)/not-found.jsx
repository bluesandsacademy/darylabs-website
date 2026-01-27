"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the Lottie animation JSON
    import("@/public/animations/404.json")
      .then((data) => setAnimationData(data.default))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-auto"
                />
              ) : (
                // Fallback while loading
                <div className="w-full aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div
                      className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      style={{ fontFamily: "var(--font-jarkata)" }}
                    >
                      404
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <h1
                className="text-5xl lg:text-6xl font-bold text-secondary"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Oops!
              </h1>
              <p
                className="text-2xl font-semibold text-primary"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Page Not Found
              </p>
            </div>

            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry though, we'll help you find your way
              back!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg
                                 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Go to Homepage
                </button>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary
                               hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Go Back
              </button>
            </div>

            {/* Quick links */}
            <div className="pt-6 border-t border-gray-200">
              <p
                className="text-sm text-gray-500 mb-3"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                Or explore these pages:
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  About Us
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Services
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/contact"
                  className="text-sm text-primary hover:text-secondary transition-colors"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
