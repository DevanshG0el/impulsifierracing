"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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
              Who We Are
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              About <span className="text-[#ff6b00]">Impulsifier</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Impulsifier Racing is more than a team – we're a family united by our passion for speed,
              precision engineering, and the relentless pursuit of racing excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={sectionRef} className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '32px' }}>
                The Story Behind the <span className="text-[#ff6b00]">Speed</span>
              </h2>
              <div className="text-white/60 leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p>
                  Founded in 2015, Impulsifier Racing began as a small group of engineering enthusiasts
                  with a shared dream: to build racing machines that push the boundaries of what's possible.
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

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { number: "2015", label: "Founded" },
                { number: "25+", label: "Race Victories" },
                { number: "150+", label: "Team Members" },
                { number: "10", label: "Championships" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300" style={{ padding: '32px 24px' }}>
                  <div className="text-4xl font-bold text-[#ff6b00]" style={{ marginBottom: '12px' }}>{stat.number}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '48px' }}>
              Mission & <span className="text-[#ff6b00]">Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300" style={{ padding: '48px 40px' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" style={{ marginBottom: '32px' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                To push the limits of racing technology and human performance, creating machines and
                experiences that inspire the next generation of racers and engineers.
              </p>
            </div>

            <div className="group bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300" style={{ padding: '48px 40px' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" style={{ marginBottom: '32px' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                To become the world's most innovative and successful racing team, known for our
                cutting-edge technology, exceptional talent, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ marginBottom: '48px' }}>
              Our Core <span className="text-[#ff6b00]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in everything we do, from engineering to execution.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Innovation",
                description: "We embrace new ideas and technologies to stay ahead of the competition.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              {
                title: "Teamwork",
                description: "We succeed together as one unified team, supporting each other every step.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "Integrity",
                description: "We compete fairly and honestly, upholding the highest standards of sportsmanship.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Passion",
                description: "We love what we do and it shows in every race, every design, every victory.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              },
              {
                title: "Resilience",
                description: "We learn from setbacks and come back stronger, never giving up on our goals.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              },
            ].map((value, index) => (
              <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center" style={{ padding: '40px 32px' }}>
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" style={{ marginBottom: '24px' }}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '16px' }}>{value.title}</h3>
                <p className="text-white/60 leading-relaxed" style={{ minHeight: '60px' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '24px' }}>
            Want to be part of our <span className="text-[#ff6b00]">story</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ marginBottom: '32px' }}>
            Whether you're a potential sponsor, aspiring team member, or racing enthusiast, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ff6b00] text-white font-semibold rounded-full hover:bg-[#ff8533] transition-all duration-300"
            style={{ padding: '14px 32px', fontSize: '16px' }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

