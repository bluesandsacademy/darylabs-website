import React from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

const NeedHelp = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Available In-app & via WhatsApp",
      link: "#",
    },
    {
      icon: Mail,
      title: "Email",
      description: "support@bluesandstemlabs.com",
      link: "mailto:support@bluesandstemlabs.com",
    },
    {
      icon: Phone,
      title: "Call",
      description: "+234 (0) 813-962-2943",
      link: "tel:+2348139622943",
    },
  ];

  return (
    <div className="w-full bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="text-white text-4xl sm:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: "var(--font-jarkata)" }}
        >
          Need Help?
        </h2>

        {/* Contact Options Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {contactOptions.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <option.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3
                className="text-secondary text-xl font-bold"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {option.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {option.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Request Demo Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
