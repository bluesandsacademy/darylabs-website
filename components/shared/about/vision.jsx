"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cards } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VisionMissionPurpose = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;

      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center
                       transition-all duration-300 hover:bg-gray-50 hover:shadow-xl
                       ${
                         !canScrollLeft
                           ? "opacity-0 pointer-events-none"
                           : "opacity-100"
                       }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-primary" strokeWidth={2.5} />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center
                       transition-all duration-300 hover:bg-gray-50 hover:shadow-xl
                       ${
                         !canScrollRight
                           ? "opacity-0 pointer-events-none"
                           : "opacity-100"
                       }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2.5} />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[380px] snap-center first:ml-0 last:mr-0"
            >
              <div className="backdrop-blur-sm rounded-3xl p-8 lg:p-10  h-full flex flex-col items-center text-center transition-all duration-300  hover:shadow-2xl hover:-translate-y-2 s">
                {/* Icon Circle (now Image) */}
                <div className="w-20 h-20  flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-black mb-4"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-black text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-jarkata)" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {cards.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VisionMissionPurpose;
