import Image from "next/image";

export default function AseeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Grid - Now height-controlled */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 [grid-template-rows:1fr_1fr] h-full">
            {/* Left: Large Image - Stretches full height */}
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src="/asee/as1.jpg"
                alt="Student using VR headset"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Two Stacked Images */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/asee/as2.jpg"
                alt="Teacher demonstrating technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/asee/as3.jpg"
                alt="Technology in classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* What is ASEE */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-light text-secondary tracking-tight">
                What is ASEE?
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                ASEE (Africa STEM EdTech Expo) is DaryLabs' showcase and meet-up
                for everyone building the future of science education in Africa.
                Think of it as a one-day testbed where real teachers, students,
                schools, parents, policymakers, and edtech partners try tools,
                swap playbooks, and pressure-test ideas that actually work in
                classrooms with tight budgets and uneven connectivity.
              </p>
            </div>

            {/* The core idea */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-light text-secondary tracking-tight">
                The core idea
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                    <strong className="font-medium text-foreground">
                      Purpose:
                    </strong>{" "}
                    make high-quality STEM practicals accessible using VR/AR
                    tools, virtual labs, AI-assisted teaching workflows, and
                    teacher-friendly implementation guide.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                    <strong className="font-medium text-foreground">
                      Focus:
                    </strong>{" "}
                    practical, offline-capable demos aligned to WAEC/IGCSE; not
                    theory theatre.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
