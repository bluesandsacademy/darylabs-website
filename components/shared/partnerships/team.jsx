"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnershipTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Alero Thompson",
      title: "Founder & CEO",
      image: "/home/team/alero.png", // Replace with actual path
      titleColor: "#0483e2",
    },
    {
      id: 2,
      name: "Kingsley Okechukwu",
      title: "Chief Technology Officer",
      image: "/home/team/kingsley.jpg", // Replace with actual path
      titleColor: "#0483e2",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-8 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary font-sans">
            Meet Our Partnership Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className=" overflow-hidden rounded-lg">
                {/* Image Container */}
                <div className="relative w-full aspect-4/5 max-h-[350px] overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                  />
                </div>

                {/* Info Container */}
                <div className="space-y-2 py-2">
                  <h3 className="text-xl lg:text-base  text-secondary">
                    {member.name}
                  </h3>
                  <p
                    className="text-base lg:text-sm "
                    style={{ color: member.titleColor }}
                  >
                    {member.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
