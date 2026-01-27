/**
 * Benefits Section
 *
 * Displays benefits for different audience segments in blue cards
 */

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Benefits for Students",
      description:
        "Hands-on experiments without risk or consumable costs. Badges, prizes, and a platform to showcase talent.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Benefits for Teachers",
      description:
        "Classroom-ready demos and AI tips for lesson planning, assessment, and feedback, & implementation guidance.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Benefits for Schools",
      description:
        "Cost-saving virtual labs with multi-seat licensing and admin dashboard. Offline packages & sync-for-low-bandwidth campuses. Pilot rollout plan and budget.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Benefits for Partners",
      description:
        "Curated educator audience, demo tools, co-pilots, co-branding, plus impact reporting and post-event follow-ups.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Benefit Card Component
 */
function BenefitCard({ benefit }) {
  return (
    <article className="bg-primary rounded-2xl p-8 flex flex-col items-center text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
        <div className="text-primary">{benefit.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-tight">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
        {benefit.description}
      </p>
    </article>
  );
}
