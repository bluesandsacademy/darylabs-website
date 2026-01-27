/**
 * Terms & Conditions Page
 *
 * Displays the complete terms and conditions with structured sections
 */

import HeroCTA from "@/components/legal";

export default function TermsAndConditions() {
  const effectiveDate = "25 October 2025";
  const contactEmail = "legal@bluestemlabs.org";

  const sections = [
    {
      id: 1,
      title: "Acceptance",
      content:
        "Acceptance By accessing bluesands… websites, apps, or VR/AR experiences (collectively, the “Services”), you agree to these Terms. If you represent a school, you affirm you have authority to bind the institution. If you do not agree, do not use the Services.",
    },
    {
      id: 2,
      title: "Eligibility & Accounts",
      content: "",
      list: [
        "You must be 18+ or have verifiable consent from a parent/guardian or school to use student features.",
        " Schools/Teachers manage student rosters. Students access only via approved codes or SSO.",
      ],
    },
    {
      id: 3,
      title: "Educational Use, No High-Risk Use",
      content:
        "The Services are educational simulators and content—not a substitute for professional lab supervision or safety certifications. Do not use for real-world hazardous procedures or medical/industrial decision-making.",
    },
    {
      id: 4,
      title: "Acceptable Use",
      content: "You agree not to:",
      list: [
        "Harass, bully, groom, exploit, or otherwise endanger children or any user.",
        "Upload or share content that is unlawful, harmful, sexualized, hateful, or infringes IP/privacy rights.",
        "Attempt to bypass security, scrape, reverse-engineer, or overload the Services.",
        "Circumvent age/role gates, school restrictions, time limits, or geographic/device controls. We may suspend/terminate accounts that violate these Terms or our Safeguarding Policy.",
      ],
    },
    {
      id: 5,
      title: "User Content & Moderation",
      content: "",
      list: [
        "You grant BSSL a non-exclusive, worldwide, royalty-free license to host, store, transmit, display, and process User Content solely to operate, improve, secure, and support the Services.",
        " We may use automated and human moderation to enforce safeguarding and community standards. We may remove or restrict content to protect users or comply with law",
      ],
    },
    {
      id: 6,
      title: "Pseudonymns & Leaderboards",
      content:
        "For minors, leaderboards are pseudonymous by default. Real names may appear only where a school has collected appropriate consent and configured settings.",
    },
    {
      id: 7,
      title: "Intellectual Property",
      content:
        "The Services, simulations, content, trademarks, and logos are owned by BSSL or licensors and are protected by IP laws. Except as permitted by an applicable license (see Licenses & Attribution page), you may not copy, modify, distribute, or make derivative works.",
    },
    {
      id: 8,
      title: "Third-Party Links & Components",
      content:
        "The Services may link to or include third-party services and open-source software. Their terms/privacy apply. BSSL is not responsible for third-party content or availability.",
    },
    {
      id: 9,
      title: "Beta / Pre-release Features",
      content:
        "Beta / Pre-release Features We may offer experimental features (e.g., new VR modules). They are provided “as is,” may be withdrawn, and may contain defects.. ",
    },
    {
      id: 10,
      title: "Disclaimers",
      content:
        "The Services are provided “as is” and “as available.” To the extent permitted by law, BSSL disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement. Educational outcomes vary by user and school context.",
    },
    {
      id: 11,
      title: "Limitation of Liability",
      content:
        " To the extent permitted by law, BSSL will not be liable for indirect, incidental, special, consequential, or punitive damages; or any loss of data, profits, or goodwill. Our aggregate liability for claims relating to the Services is limited to the amount paid to BSSL for the Service giving rise to the claim in the 12 months prior to the event.",
    },
    {
      id: 12,
      title: "Indemnity",
      content:
        "You (and your institution, if applicable) will defend, indemnify, and hold harmless BSSL against claims arising from your misuse of the Services, violation of these Terms, or infringement of third-party rights. ",
    },
    {
      id: 13,
      title: "Safeguarding & Privacy",
      content:
        "Use is subject to our Safeguarding & Child Protection Policy, Privacy Policy, and Cookies Policy. Where schools act as controllers of student data, BSSL processes according to written data processing agreements (DPAs).",
    },
    {
      id: 14,
      title: "Termination",
      content:
        " Termination We may suspend or terminate access for violations, legal requests, or risk to users/platform. You may stop using the Services at any time; schools can request account closure per our Privacy Policy. ",
    },
    {
      id: 15,
      title: "Changes",
      content:
        " We may update these Terms. Material changes will be notified on the site or by email. Continued use after the effective date constitutes acceptance. ",
    },
    {
      id: 16,
      title: "Governing Law & Dispute Resolution",
      content:
        "Governing Law & Dispute Resolution These Terms are governed by the laws of the Federal Republic of Ghana. Parties will first attempt informal resolution; failing that, disputes shall be submitted to the competent courts in [Lagos State], unless applicable consumer law provides otherwise.",
    },
    {
      id: 17,
      title: "Contact",
      content: `For any questions about these Terms, please contact us at ${contactEmail}`,
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-secondary/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary tracking-tight">
              Website Terms & Conditions
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-foreground/60">
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">
                  Effective Date:
                </span>{" "}
                {effectiveDate}
              </p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-primary/40" />
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">
                  Operator:
                </span>{" "}
                Blue Stem Labs (
                <a
                  href="https://bluestemlabs.org"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  https://bluestemlabs.org
                </a>
                , 'we', 'our', 'us')
              </p>
            </div>
            <p className="text-base md:text-lg font-light text-foreground/60 pt-2">
              <span className="font-normal text-foreground/80">Contact:</span>{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  <p className="text-base md:text-lg leading-relaxed text-foreground/70 font-light">
                    {section.content}
                  </p>

                  {/* List Items if present */}
                  {section.list && (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
                          <span className="text-base md:text-lg leading-relaxed text-foreground/70 font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Contact Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-normal text-secondary mb-2">
                  Questions about these terms?
                </h3>
                <p className="text-base text-foreground/60 font-light">
                  We're here to help clarify anything you need.
                </p>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-normal text-base hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
      <HeroCTA />
    </main>
  );
}
