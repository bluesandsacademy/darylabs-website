/**
 * Event Details Section
 *
 * Displays venue, date, and time information for the event
 */

export default function EventDetails() {
  const details = [
    {
      id: 1,
      label: "VENUE",
      content: ["Comfort Hall", "Oke ira Bridge Bus Stop, off Addo Road", "Ajah, Lagos"],

    },
    {
      id: 2,
      label: "DATE",
      content: ["Tuesday, 25th November 2025"],
    },
    {
      id: 3,
      label: "TIME",
      content: ["8:00AM-5:00PM WAT"],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {details.map((detail) => (
            <DetailCard key={detail.id} detail={detail} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Detail Card Component
 */
function DetailCard({ detail }) {
  return (
    <article className="space-y-3">
      {/* Label */}
      <h3 className="text-xs md:text-sm font-medium text-foreground/50 tracking-wider uppercase">
        {detail.label}
      </h3>

      {/* Content */}
      <div className="space-y-1">
        {detail.content.map((line, index) => (
          <p
            key={index}
            className="text-base md:text-lg text-secondary font-light leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </article>
  );
}
