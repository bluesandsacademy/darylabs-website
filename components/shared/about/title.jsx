import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center space-y-4 sm:space-y-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          The Story Behind <span className="text-primary">Ghana's</span>{" "}
          Smartest Way to Learn Science
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          From virtual experiments to real-time assessments and guided learning,
          DaryLabs was built to bring the science lab to every Ghanan
          classroom—no equipment required.
        </p>
      </div>
    </div>
  );
};

export default Title;
