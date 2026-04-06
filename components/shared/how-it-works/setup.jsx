import { setupSteps } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function SimpleSetupSection() {
  return (
    <section className="relative bg-primary overflow-hidden py-20 lg:py-10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="setup-grid"
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
          <rect width="100%" height="100%" fill="url(#setup-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/80 text-lg mb-4">Simple Setup</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3">
            Start in minutes—no IT ticket required.
          </h2>
          {/* Underline decoration */}
          <div className="flex justify-center">
            <svg
              width="200"
              height="20"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M2 10 Q 50 5, 100 8 T 198 12"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M2 14 Q 50 9, 100 12 T 198 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
              />
              <path
                d="M2 17 Q 50 12, 100 15 T 198 18"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 mb-8">
          {setupSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-8 lg:gap-12">
              {/* Step Card */}
              <div className="relative text-center w-full max-w-xs min-h-[280px] flex items-end justify-center pb-8">
                {/* Large Number - Background */}
                <div className="absolute inset-0 flex items-center justify-center text-[140px] lg:text-[180px] font-bold text-white/15 leading-none select-none">
                  {step.number}
                </div>

                {/* Content - Positioned at bottom */}
                <div className="relative z-10 px-6">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                    {step.description}
                  </p>
                  {step.detail && (
                    <p className="text-white/70 text-xs lg:text-sm mt-2">
                      {step.detail}
                    </p>
                  )}
                </div>
              </div>

              {/* Arrow (not after last item) */}
              {index < setupSteps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block text-white/50 flex-shrink-0 mb-12"
                  size={40}
                  strokeWidth={2.5}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-10 py-5 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-2xl">
            See Dashboard
          </button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
