export default function OfficeHours() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/contact/2.jpg"
                alt="Person working at desk"
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Office & Hours
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-primary shrink-0 mt-1"></div>
                <p className="text-lg">Hours: Mon-Fri, 9:00-17:00 WAT</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-primary shrink-0 mt-1"></div>
                <p className="text-lg">
                  Timezone supported for demos: WAT, GMT, EAT, CAT (others by
                  request)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-primary shrink-0 mt-1"></div>
                <p className="text-lg">
                  Mailing address: (Add your registered address here)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1 h-6 bg-primary shrink-0 mt-1"></div>
                <p className="text-lg">
                  Phone (general): (Add your contact number if available)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
