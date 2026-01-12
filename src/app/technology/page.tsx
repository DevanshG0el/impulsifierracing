export const metadata = {
  title: "Technology | Impulsifier Racing",
  description: "Discover the cutting-edge technology and engineering behind Impulsifier Racing.",
};

import Navigation, { SideNavigation } from "@/components/Navigation";

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
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-[var(--accent)]">Technology</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Pushing the boundaries of engineering excellence with cutting-edge innovations that define the future of racing.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tech.title}</h2>
                  <p className="text-white/60 mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-[var(--secondary)] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    Technology Image {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "850+", label: "Horsepower" },
              { number: "2.5s", label: "0-100 km/h" },
              { number: "350", label: "Top Speed (km/h)" },
              { number: "300+", label: "Sensors" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent)]">{stat.number}</div>
                <div className="text-white/50 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
