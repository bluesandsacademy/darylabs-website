import React from "react";
import Image from "next/image";

const PricingHeader = () => {
  return (
    <div className="relative w-full bg-primary overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-60">
        <Image src="/grid.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Simple, Scalable, and Affordable Plans for Every School and
              Student in Africa
            </h1>

            <p
              className="text-white/90 text-lg sm:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Choose a plan that fits your learning needs: from individual
              learners to multi-campus institutions. Experience world-class
              science learning without breaking the bank.
            </p>
          </div>

          {/* Right Column - Image with Blob Background */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Blob Background */}
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/pricing/irregular.png"
                alt=""
                fill
                className="object-contain"
                priority
              />

              {/* Person Image inside blob */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[85%] h-[85%]">
                  <Image
                    src="/pricing/Vector.png"
                    alt="Student with laptop and credit card"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Decorative Icon (bottom left) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
