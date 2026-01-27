"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do we need always-on internet?",
      answer:
        "No. Pre-downloaded content: students can work offline and sync later.",
    },
    {
      question: "Can I export grades?",
      answer:
        "Yes, you can export grades in CSV format or integrate with your LMS for automatic grade syncing.",
    },
    {
      question: "How many simulations are included?",
      answer:
        "We offer 50+ interactive simulations covering physics, chemistry, and biology topics aligned with curriculum standards.",
    },
    {
      question: "What about accessibility?",
      answer:
        "Our platform includes screen reader support, keyboard navigation, adjustable text sizes, and color contrast options to ensure all students can learn effectively.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-3">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
              >
                <span className="text-base lg:text-lg font-semibold text-secondary pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="pb-4 pr-12">
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
