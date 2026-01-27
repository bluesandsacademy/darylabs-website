import React from "react";

const Title = ({ title, subText }) => {
  return (
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <div className="relative inline-block">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-1"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          {title}
        </h1>

        {/* Hand-drawn style underline */}
        <svg
          className="absolute -bottom-1 left-1/2 -translate-x-1/2"
          width="240"
          height="20"
          viewBox="0 0 240 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M3 8.5C20 6 40 4.5 60 5.5C80 6.5 100 8 120 7C140 6 160 4.5 180 5.5C200 6.5 220 8 237 7.5"
            stroke="#0483e2"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <p
        className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto mt-4 sm:mt-5 px-4"
        style={{ fontFamily: "var(--font-jarkata)" }}
      >
        {subText}
      </p>
    </div>
  );
};

export default Title;
