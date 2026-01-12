import Link from "next/link";
import Navigation, { SideNavigation } from "@/components/Navigation";

export const metadata = {
  title: "About | Impulsifier Racing",
  description: "Learn about Impulsifier Racing - our history, mission, and the passion that drives us to excellence.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-[var(--accent)]">Us</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Impulsifier Racing is more than a team – we&apos;re a family united by our passion for speed, 
              precision engineering, and the relentless pursuit of racing excellence.
            </p>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[var(--accent)]/10 to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/60">
                <p>
                  Founded in 2015, Impulsifier Racing began as a small group of engineering enthusiasts 
                  with a shared dream: to build racing machines that push the boundaries of what&apos;s possible.
                </p>
                <p>
                  What started in a modest garage has grown into a world-class racing operation, 
                  competing in prestigious events across the globe. Our journey has been defined by 
                  innovation, perseverance, and an unwavering commitment to excellence.
                </p>
                <p>
                  Today, we stand as a testament to what passion and dedication can achieve. 
                  With multiple championship victories and a growing team of talented individuals, 
                  we continue to chase our ultimate goal: racing glory.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-[var(--secondary)]">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/10 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60">
                To push the limits of racing technology and human performance, creating machines and 
                experiences that inspire the next generation of racers and engineers.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60">
                To become the world&apos;s most innovative and successful racing team, known for our 
                cutting-edge technology, exceptional talent, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", description: "We strive for perfection in everything we do." },
              { title: "Innovation", description: "We embrace new ideas and technologies." },
              { title: "Teamwork", description: "We succeed together as one unified team." },
              { title: "Integrity", description: "We compete fairly and honestly." },
              { title: "Passion", description: "We love what we do and it shows." },
              { title: "Resilience", description: "We learn from setbacks and come back stronger." },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to be part of our story?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[var(--accent)] text-white font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
