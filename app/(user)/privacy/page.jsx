/**
 * Privacy Policy Page
 *
 * Displays the complete privacy policy with structured sections (NDPR/NDPA-Aligned)
 */

import HeroCTA from "@/components/legal";

export default function PrivacyPolicy() {
  const effectiveDate = "25 October 2025";
  const controller =
    "Blue Stem Labs ('BSL'), 'I.umina a school in the classroom'";
  const email = "hello@bluestemlabs.org";
  const dpoEmail = "privacy@[your-domain]";

  const sections = [
    {
      id: 1,
      title: "Scope",
      content:
        "This Policy explains how we collect, use, disclose, and protect personal data on our websites, apps, VR/AR simulations, support channels, and events",
    },
    {
      id: 2,
      title: "Children & Students",
      content:
        "We design for minors’ safety. Student experiences default to pseudonyms, restricted messaging, and educator oversight. Where schools onboard students, the school is generally the controller; BSSL is the processor. For direct-to-consumer products, BSSL is the controller and obtains verifiable parental/guardian consent where required.",
    },
    {
      id: 3,
      title: "Categories of Data We Process",
      content: "",
      list: [
        {
          main: "Account & Identity: name, email/username, role (student/teacher/school admin), school/ class, age band (not full DOB unless required by school).",
          subItems: [],
        },
        {
          main: "Learning Activity: simulations run, scores, badges, time-on-task, attempts, teacher feedback.",
          subItems: [],
        },
        {
          main: "Safety & Moderation: reports/blocks, message flags, moderation outcomes, incident logs (restricted access).",
          subItems: [],
        },
        {
          main: "Device & Usage: IP, device/browser, app version, telemetry, coarse location (for security/compliance).",
          subItems: [],
        },
        {
          main: "Support & Comms: tickets, emails, chat with our support teams.",
          subItems: [],
        },
        {
          main: "Events/Media (optional): photos/video at events with explicit consent.",
          subItems: [],
        },
      ],
    },
    {
      id: 4,
      title: "Purposes & Lawful Bases (NDPR/NDPA)",
      content: "We process personal data for:",
      list: [
        {
          main: "Provide & improve Services (performance of a contract, legitimate interest).",
          subItems: [],
        },
        {
          main: "Safeguarding & moderation (vital interests; substantial public interest; legitimate interests; legal obligation).",
          subItems: [],
        },
        {
          main: "Analytics & product safety (legitimate interests; data minimized/aggregated; k-anonymity thresholds).",
          subItems: [],
        },
        {
          main: "Legal compliance (legal obligation). Where consent is used, you may withdraw it at any time via settings or by contacting us.",
          subItems: [],
        },
      ],
      subContent:
        "Where we rely on legitimate interest, we balance it against your rights. Where required by law, we obtain consent.",
    },
    {
      id: 5,
      title: "Data Minimization & Retention",
      content: "We collect the minimum necessary. Typical retention:",
      list: [
        {
          main: "Learning data: academic year + configurable school window; deletion on contract end or request.",
          subItems: [],
        },
        {
          main: "Safeguarding logs: per legal requirement and case complexity (secure, restricted).",
          subItems: [],
        },
        {
          main: "Support tickets/billing: statutory retention.",
          subItems: [],
        },
        {
          main: "Backups are rotated; deletions propagate on the next cycle.",
          subItems: [],
        },
      ],
    },
    {
      id: 6,
      title: "Sharing & Recipients",
      content: "We may share data with:",
      list: [
        {
          main: "Schools/teachers (for classroom use/insight).",
          subItems: [],
        },
        {
          main: "Service Providers /Processors (hosting, logging, analytics, support )under NON-compliant DPAs.",
          subItems: [],
        },
        {
          main: "Authorities where legally required or to protect vital interests of a child.",
          subItems: [],
        },
        {
          main: "We do not sell personal data",
          subItems: [],
        },
      ],
    },
    {
      id: 7,
      title: "International Transfers",
      content:
        "We prefer Ghanan/regional data centers. If transfer occurs, we apply appropriate safeguards (standard contractual clauses or NDPR-recognized mechanisms) and record them in our DPIAs/Registers.",
    },
    {
      id: 8,
      title: "Security",
      content:
        "Encryption in transit/at rest, role-based access, MFA for staff, secure development practices, monitoring, and incident response. Production data is not used in lower environments without approved anonymisation.",
    },
    {
      id: 9,
      title: "Your Rights (NDPR/NDPA)",
      content:
        "Subject to exceptions, you may access, rectify, erase, restrict, object, and port your data. Parents/guardians may exercise rights for minors. Submit requests via privacy@[your-domain] or through your school administrator (if they are the controller). We will respond within the statutory period.",
      subContent:
        "Submit requests e.g:nitag@[our-domain] or through your school administrator if they are the controller. We will respond within the statutory period.",
    },
    {
      id: 10,
      title: "Cookies & Similar Technologies",
      content:
        "We use essential cookies, preferences, analytics (with thresholds and IP truncation), and security cookies. See our Cookies Policy for details and choices.",
    },
    {
      id: 11,
      title: "Changes",
      content:
        "We’ll post updates with a new effective date and, where material, notify users/schools.",
    },
    {
      id: 12,
      title: "Contact the DPO",
      content: `You can contact us at ${email}`,
      subContent: `If unresolved, you may contact the Ghana Data Protection Commission (NDPC).`,
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-secondary/5 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-secondary tracking-tight">
              Privacy Policy (NDPR/NDPA-Aligned)
            </h1>
            <div className="space-y-2 text-foreground/60">
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">
                  Effective Date:
                </span>{" "}
                {effectiveDate}
              </p>
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">
                  Controller (Company):
                </span>{" "}
                {controller}
              </p>
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">Contact:</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {email}
                </a>
              </p>
              <p className="text-base md:text-lg font-light">
                <span className="font-normal text-foreground/80">
                  Data Protection Officer (DPO) [Ghana]:
                </span>{" "}
                <a
                  href={`mailto:${dpoEmail}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {dpoEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                  <p className="text-base md:text-lg leading-relaxed text-foreground/70 font-light">
                    {section.content}
                  </p>

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

          {/* Data Rights Information Box */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-normal text-secondary">
                Your Data Protection Rights
              </h3>
              <p className="text-base text-foreground/60 font-light leading-relaxed">
                Under the Ghana Data Protection Regulation (NDPR) and Ghana Data
                Protection Act (NDPA), you have rights regarding your personal
                data. You can access, correct, delete, or restrict the
                processing of your information. For students under 18, parents
                or guardians may exercise these rights on their behalf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`mailto:${dpoEmail}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-normal text-base hover:bg-primary/90 transition-colors duration-300"
                >
                  Contact DPO
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-normal text-base hover:bg-primary/5 transition-colors duration-300"
                >
                  General Inquiries
                </a>
              </div>
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="mt-8 p-6 rounded-xl bg-secondary/5 border border-secondary/10">
            <p className="text-sm md:text-base text-foreground/60 font-light leading-relaxed">
              <span className="font-normal text-secondary">
                Regulatory Authority:
              </span>{" "}
              If you have concerns about how we handle your data and are not
              satisfied with our response, you may lodge a complaint with the
              Ghana Data Protection Commission (NDPC) at{" "}
              <a
                href="https://ndpc.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                ndpc.gov.ng
              </a>
            </p>
          </div>
        </div>
      </section>
      <HeroCTA />
    </main>
  );
}
