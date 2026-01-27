export default function ContactHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* 3D perspective lines */}
          <g opacity="0.6">
            <line
              x1="0"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              x1="20%"
              y1="0"
              x2="60%"
              y2="100%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="40%"
              y1="0"
              x2="70%"
              y2="100%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="60%"
              y1="0"
              x2="80%"
              y2="100%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="80%"
              y1="0"
              x2="90%"
              y2="100%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="100%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-20 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Talk to a real person about bringing practical science to your
              school
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Book a live demo, request a quote, or get help with setup and
              offline content packs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
                Book a Demo
              </button>
              <button className="px-8 py-4 bg-primary border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:ml-auto">
            {/* Decorative dots pattern */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 grid grid-cols-4 gap-3 opacity-40">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>

            <div className="absolute -right-8 bottom-8 grid grid-cols-4 gap-3 opacity-40">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>

            {/* Decorative wave shape behind image */}
            <div className="absolute -right-12 -top-12 w-96 h-96">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path
                  d="M 0,200 Q 100,100 200,200 T 400,200 L 400,400 L 0,400 Z"
                  fill="rgba(255,255,255,0.1)"
                />
              </svg>
            </div>

            {/* Image container */}
            <div className="relative w-full max-w-lg ml-auto">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/contact/1.jpg"
                    alt="Person waving at laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Abstract decorative line */}
            <div className="absolute -bottom-8 -right-16 w-64 h-32">
              <svg viewBox="0 0 200 100" className="w-full h-full opacity-30">
                <path
                  d="M 0,50 Q 50,20 100,50 T 200,50"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
