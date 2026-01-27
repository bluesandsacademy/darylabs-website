import { Briefcase, Users, HeadphonesIcon } from "lucide-react";

export default function ThreeQuickPaths() {
  const paths = [
    {
      icon: Briefcase,
      title: "Book a Demo",
      description:
        "30-45 mins live walkthrough (teacher dashboard + a simulation)",
    },
    {
      icon: Users,
      title: "Sales & Partnerships",
      description:
        "Pricing for single schools, districts/NGOs, or campus-wide licenses",
    },
    {
      icon: HeadphonesIcon,
      title: "Get Support",
      description: "Contact us at (+234) 8109622583",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-secondary text-center mb-16">
          Three Quick Paths
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <path.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">
                {path.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
