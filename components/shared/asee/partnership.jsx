import Image from "next/image";

/**
 * Partnership & Event Desk Section
 *
 * Displays contact cards for partnership and event inquiries
 */

export default function PartnershipDesk() {
  const contacts = [
    {
      id: 1,
      name: "Thaddeus Awase",
      role: "Partnerships & Ecosystem",
      phone: "+234 813 307 7505",
      email: "partnership@bluesandstemlabs.org",
      image: "/home/team/1.png",
    },
    {
      id: 2,
      name: "Cliff Kingsley",
      role: "Events & School Relations",
      phone: "+234 916 431 0578",
      email: "info@bluesandsacademy.org",
      image: "/home/team/1.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-secondary tracking-tight text-center mb-12 md:mb-16">
          Partnership & Event Desk
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto place-items-center">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} useImage={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Contact Card Component
 */
function ContactCard({ contact, useImage = false }) {
  return (
    <article className="flex flex-col items-center space-y-4 px-4">
      {/* Image */}

      {/* Contact Info */}
      <div className="space-y-3 w-full">
        {/* Name */}
        <h3 className="text-xl md:text-2xl font-medium text-secondary">
          {contact.name}
        </h3>

        {/* Role */}
        <p className="text-primary text-sm md:text-base font-medium">
          {contact.role}
        </p>

        {/* Phone */}
        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="text-foreground/60 text-sm md:text-base hover:text-primary transition-colors block font-light"
        >
          {contact.phone}
        </a>

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="text-foreground/60 text-sm md:text-base hover:text-primary transition-colors block font-light break-all"
        >
          {contact.email}
        </a>
      </div>
    </article>
  );
}
