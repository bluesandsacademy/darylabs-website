/**
 * Hero CTA Section
 *
 * Empowering message with call-to-action button and grid background
 */

export default function HeroCTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-secondary py-10 md:py-12 lg:py-20 overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("/grid.png")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white tracking-tight max-w-4xl">
            Empowering the Future of Learning
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-3xl">
            Whether you are a student eager to explore science, a teacher
            looking to transform classroom engagement, or a school striving to
            deliver cutting-edge STEM education — DaryLabs is built for you.
          </p>

          {/* CTA Button */}
          <a
            href="/auth/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-normal text-base md:text-lg hover:bg-white/95 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join the future of learning
          </a>

          {/* Optional: Decorative elements */}
          <div className="flex gap-2 pt-4">
            <div className="w-16 h-1 bg-white/30 rounded-full" />
            <div className="w-16 h-1 bg-white/50 rounded-full" />
            <div className="w-16 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration (Optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-16 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
