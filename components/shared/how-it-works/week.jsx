export default function TypicalWeekSection() {
  const schedule = [
    {
      day: "Monday - Introduce Concept",
      description: 'Teacher assigns Guided "Friction Cluster" (20 min)',
    },
    {
      day: "Wednesday - Practice",
      description:
        "Students repeat in Exploratory mode to test their own hypotheses",
    },
    {
      day: "Friday - Check Mastery",
      description:
        "Assessment mode auto-grades and sends an evidence pack to the teacher",
    },
    {
      day: "Anytime - Catch-up",
      description:
        "Absent or low-connectivity students complete offline; data syncs next time they're online",
    },
  ];

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="week-grid"
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
          <rect width="100%" height="100%" fill="url(#week-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8">
            What a Typical Week Looks Like
          </h2>
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {item.day}
              </h3>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
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
