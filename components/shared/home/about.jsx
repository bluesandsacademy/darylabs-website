import VideoSection from "./video";

export default function VirtualLabsSection() {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-lg font-bold mb-3 tracking-wide">
            About DaryLabs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Virtual Science Labs Built for African Classrooms
          </h1>
          <p className="text-foreground/70 max-w-4xl mx-auto text-base leading-relaxed">
            DaryLabs delivers curriculum-aligned Physics, Chemistry, and Biology
            experiments to students and teachers across Africa.
          </p>
        </div>

        <VideoSection />
      </div>
    </section>
  );
}
