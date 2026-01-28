/**
 * Licenses & Attribution Page
 *
 * Displays licensing information and attribution details
 */

import HeroCTA from "@/components/legal";

export default function LicensesAttribution() {
  const effectiveDate = "26 October 2025";
  const contactEmail = "legal@darylabs.com";

  const sections = [
    {
      id: 1,
      title: "End-User Educational License",
      content:
        "Subject to these terms, BSSL grants you (or your school) a limited, non-exclusive, non-transferable license to access and use the Services for educational purposes during an active subscription or authorized pilot. You may not sublicense or commercially exploit the Services.",
    },
    {
      id: 2,
      title: "Content & Curriculum",
      list: [
        {
          main: "BSSL Content: All simulations, curricula, text, images, videos, and assessments are owned by BSSL or licensed to BSSL. Except as permitted by the Service, you may not copy, modify, or distribute BSSL Content without permission.",
          subItems: [],
        },
        {
          main: "Teacher-Generated Materials: Teachers retain rights to original materials they upload. You grant BSSL a license to host, display, and process such materials to operate the Services for your class.",
          subItems: [],
        },
      ],
    },
    {
      id: 3,
      title: "Software Components",
      list: [
        {
          main: "Proprietary Software: BSSL software is licensed, not sold. Reverse engineering, circumventing security, or removing notices is prohibited unless permitted by law.",
          subItems: [],
        },
        {
          main: "Open-Source Software (OSS): The Services may include OSS governed by their respective licenses. To the extent required, attributions and license texts are provided in the Open-Source Notices section of the app/site or upon request at legal@darylabs.com. Where OSS licenses grant you additional rights, those rights are unaffected by these terms.",
          subItems: [],
        },
      ],
    },
    {
      id: 4,
      title: "Trademarks",
      content:
        '"DaryLabs" and related logos are trademarks of DaryLabs Limited. Do not use our marks without prior written permission. Schools and partners may use approved marks per brand guidelines for co-marketing with prior consent.',
    },
    {
      id: 5,
      title: "Feedback",
      content:
        "If you submit feedback, ideas, or suggestions, you grant BSSL a perpetual, irrevocable, worldwide, royalty-free license to use and incorporate them without obligation or attribution.",
    },
    {
      id: 6,
      title: "Third-Party Services",
      content:
        "Certain features may integrate third-party services (e.g., SSO, storage). Their licenses and terms apply. BSSL is not responsible for third-party terms or service availability.",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-secondary/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary tracking-tight">
              Licenses & Attribution
            </h1>
            <p className="text-base md:text-lg font-light text-foreground/60">
              <span className="font-normal text-foreground/80">
                Effective Date:
              </span>{" "}
              {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Licenses Content */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                className="border-l-2 border-primary/20 pl-6 md:pl-8 space-y-4 hover:border-primary/40 transition-colors duration-300"
              >
                {/* Section Number & Title */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-light text-primary/60">
                    {section.id}.
                  </span>
                  <h2 className="text-2xl md:text-3xl font-normal text-secondary">
                    {section.title}
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Main Content */}
                  {section.content && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/70 font-light">
                      {section.content}
                    </p>
                  )}

                  {/* List Items if present */}
                  {section.list && (
                    <ul className="space-y-4 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="space-y-2">
                          {/* Main bullet point */}
                          <div className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
                            <span className="text-base md:text-lg leading-relaxed text-foreground/70 font-light">
                              {item.main}
                            </span>
                          </div>

                          {/* Sub-items (nested bullets) if present */}
                          {item.subItems && item.subItems.length > 0 && (
                            <ul className="ml-6 space-y-2">
                              {item.subItems.map((subItem, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="flex gap-3 items-start"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary/30 mt-2.5 flex-shrink-0" />
                                  <span className="text-sm md:text-base leading-relaxed text-foreground/60 font-light">
                                    {subItem}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sub Content if present */}
                  {section.subContent && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/70 font-light mt-4 pl-0 md:pl-6">
                      {section.subContent}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Open Source Acknowledgment */}
        </div>
      </section>
      <HeroCTA />
    </main>
  );
}
