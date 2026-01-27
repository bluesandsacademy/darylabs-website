/**
 * Cookies Policy Page
 *
 * Displays the cookies policy with structured sections
 */

import HeroCTA from "@/components/legal";

export default function CookiesPolicy() {
  const effectiveDate = "26 October 2025";
  const contactEmail = "legal@bluesandsacademy.org";

  const sections = [
    {
      id: 1,
      title: "What Are Cookies?",
      content:
        "Cookies are small text files stored on your device. We also use local storage and similar technologies ('Cookies').",
    },
    {
      id: 2,
      title: "How We Use Cookies",
      list: [
        {
          main: "Strictly Necessary: login/session management, load balancing, fraud prevention, safeguarding controls (cannot be switched off).",
          subItems: [],
        },
        {
          main: "Preferences: language, accessibility options, classroom view settings.",
          subItems: [],
        },
        {
          main: "Analytics & Performance: aggregated usage (time-on-task, feature usage) with IP truncation and k-anonymity thresholds; used to improve learning experience and safety.",
          subItems: [],
        },
        {
          main: "Security & Moderation: rate-limiting, abuse detection, content moderation signals.",
          subItems: [],
        },
      ],
      subContent: "We do not use third-party advertising cookies.",
    },
    {
      id: 3,
      title: "Your Choices",
      content:
        "On first visit, we display a consent banner (except for strictly necessary cookies). You can manage preferences at any time via Cookie Settings in the footer and by clearing cookies in your browser. School-managed environments may pre-configure settings.",
    },
    {
      id: 4,
      title: "Cookies We Set (illustrative)",
      list: [
        {
          main: "bssl_session (Strictly necessary): maintains login session.",
          subItems: [],
        },
        {
          main: "bssl_pref_lang (Preferences): stores language.",
          subItems: [],
        },
        {
          main: "bssl_analytics (Analytics): collects aggregated usage; expiry ≈ 13 months.",
          subItems: [],
        },
        {
          main: "bssl_sec_rate (Security): rate-limit and anti-abuse.",
          subItems: [],
        },
      ],
      subContent:
        "Actual names may vary; we maintain an up-to-date list in the Cookie Settings panel.",
    },
    {
      id: 5,
      title: "Third-Party Cookies / SDKs",
      content:
        'While some browsers offer "DNT," industry standards are evolving. We treat it as a preference signal and continue to honor explicit choices in our Cookie Settings.',
    },
    {
      id: 6,
      title: "Updates",
      content:
        "We may update this Policy. Material changes appear on the banner or this page with a new effective date.",
    },
    {
      id: 7,
      title: "Contact",
      content: `Questions about cookies? ${contactEmail}`,
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-secondary/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary tracking-tight">
              Cookies Policy
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

      {/* Cookies Policy Content */}
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
                    <ul className="space-y-3 mt-4">
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

                  {/* Sub Content (appears after list if present) */}
                  {section.subContent && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/70 font-light mt-4 pl-0 md:pl-6">
                      {section.subContent}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HeroCTA />
    </main>
  );
}
