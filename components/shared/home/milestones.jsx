import { Users, School, Globe, FlaskConical } from "lucide-react";

export default function MilestonesSection() {
  const milestones = [
    {
      icon: Users,
      stat: "7,000+ Users",
      description: "Students learning virtually across Ghana",
    },
    {
      icon: School,
      stat: "100+ Schools",
      description: "Partnered institutions using DaryLabs",
    },
    {
      icon: FlaskConical,
      stat: "150+ Simulations",
      description: "Across Physics, Chemistry & Biology",
    },
    {
      icon: Globe,
      stat: "3 Countries",
      description: "Expanding impact in Africa",
    },
  ];

  return (
    <section className="bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-6">
          Our Milestones
        </h2>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Stat */}
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {milestone.stat}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
