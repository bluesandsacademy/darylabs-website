import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="bg-[#172B4D] py-10 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Decorative Blob */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              <Image
                src="/about/blob.svg"
                alt="Student using VR headset for virtual science lab"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 450px"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-3">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Who We Are
            </h2>

            <p
              className="text-base sm:text-base leading-relaxed text-white/90"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Blue Sands Academy is a forward-thinking EdTech and STEM
              innovation company redefining how science and technology education
              is experienced in Africa. Through immersive technologies like
              Virtual Reality (VR), Augmented Reality (AR), and Artificial
              Intelligence (AI), we make practical learning accessible,
              engaging, and equitable for every student, regardless of location
              or resources.
            </p>

            <p
              className="text-base sm:text-base leading-relaxed text-white/90"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              Our flagship product, DaryLabs, is a virtual science laboratory
              solution designed to empower secondary school students to conduct
              Physics, Chemistry, and Biology experiments anytime, anywhere,
              even with limited internet access or laboratory infrastructure.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed text-white/90"
              style={{ fontFamily: "var(--font-jarkata)" }}
            >
              We are driven by a single belief: every learner deserves the
              opportunity to explore, experiment, and innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
