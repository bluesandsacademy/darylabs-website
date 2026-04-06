/**
 * Who Should Attend Section
 *
 * Displays target audience cards for ASEE with icons and descriptions
 */

export default function WhoShouldAttend() {
  const attendees = [
    {
      id: 1,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Students",
      description: "who want hands-on science and friendly competitions.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Teachers",
      description:
        "looking for ready-to-use lesson ideas, assessment tips, and CPD.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-7 h-7"
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
      title: "School leaders",
      description: "evaluating cost-saving virtual labs and rollout plans.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      title: "Government/NGOs",
      description: "targeting digital literacy and inclusion.",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-7 h-7"
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
      title: "EdTech partners/investors",
      description: "scouting pilots and impact opportunities.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary to-primary/90 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white text-center mb-12 md:mb-16 tracking-tight">
          Who Should Attend
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {attendees.slice(0, 3).map((attendee) => (
            <AttendeeCard key={attendee.id} attendee={attendee} />
          ))}
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6 lg:mt-8">
          {attendees.slice(3).map((attendee) => (
            <AttendeeCard key={attendee.id} attendee={attendee} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Attendee Card Component
 */
function AttendeeCard({ attendee }) {
  return (
    <article className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-md">
        <div className="text-white">{attendee.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-medium text-secondary mb-3 tracking-tight">
        {attendee.title}
      </h3>

      {/* Description */}
      <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
        {attendee.description}
      </p>
    </article>
  );
}
