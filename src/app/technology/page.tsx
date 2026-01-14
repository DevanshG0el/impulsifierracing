"use client";

const technologies = [
  {
    title: "Advanced Aerodynamics",
    description: "Our cars feature state-of-the-art aerodynamic designs developed through extensive CFD simulations and wind tunnel testing. Every curve and angle is optimized for maximum downforce and minimal drag.",
    specs: ["Active DRS System", "Carbon Fiber Body Panels", "Ground Effect Floor Design"]
  },
  {
    title: "Hybrid Power Unit",
    description: "Our hybrid powertrain combines a high-revving internal combustion engine with advanced electric motors, delivering unprecedented power and efficiency on the track.",
    specs: ["850+ Horsepower", "Energy Recovery System", "Regenerative Braking"]
  },
  {
    title: "Advanced Telemetry",
    description: "Real-time data analysis allows our team to make split-second decisions during races. Over 300 sensors monitor every aspect of car performance.",
    specs: ["300+ Data Points", "Real-time Analysis", "AI-Powered Predictions"]
  },
  {
    title: "Lightweight Materials",
    description: "Every gram counts in racing. We use the latest in composite materials and manufacturing techniques to achieve the perfect balance of strength and weight.",
    specs: ["Full Carbon Chassis", "Titanium Components", "3D Printed Parts"]
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Our <span className="text-[#ff6b00]">Technology</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Pushing the boundaries of engineering excellence with cutting-edge innovations that define the future of racing.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '24px' }}>{tech.title}</h2>
                  <p className="text-white/60 leading-relaxed text-lg" style={{ marginBottom: '32px' }}>{tech.description}</p>
                  <ul className="space-y-4">
                    {tech.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/80">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                        <span className="text-base">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#ff6b00]/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <p className="text-white/40 text-sm">Technology Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center" style={{ marginBottom: '48px' }}>
            By The <span className="text-[#ff6b00]">Numbers</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "850+", label: "Horsepower" },
              { number: "2.5s", label: "0-100 km/h" },
              { number: "350", label: "Top Speed (km/h)" },
              { number: "300+", label: "Sensors" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#ff6b00]" style={{ marginBottom: '12px' }}>{stat.number}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

