"use client";

import { useEffect, useRef, useState } from "react";
import Navigation, { SideNavigation } from "./Navigation";
import PlayButton from "./PlayButton";
import Globe from "./Globe";
import TextType from "./TextType";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showHeroOverlays, setShowHeroOverlays] = useState(true);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the floating hero UI once the hero is mostly scrolled past.
        setShowHeroOverlays((entry.intersectionRatio ?? 0) > 0.6);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      <Navigation />

      {/* Side Navigation (Desktop) */}
      {showHeroOverlays && (
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
      )}

      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
        {/* Placeholder for background - replace with actual image/video */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundColor: '#0a0a0a'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          {/* Main Heading with TextType Animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Race beyond</span>
            <span className="block">the limits of</span>
            <TextType
              text={["speed", "innovation", "precision", "victory"]}
              as="span"
              className="block text-[#ff6b00]"
              typingSpeed={80}
              deletingSpeed={50}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              cursorCharacter="_"
              cursorClassName="text-[#ff6b00]"
              startOnVisible={true}
            />
          </h1>
        </div>

        {/* Play Video Button */}
        <div className="absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 hidden md:block">
          <PlayButton onClick={() => setIsVideoPlaying(true)} />
        </div>
      </div>

      {/* Globe Decoration */}
      {showHeroOverlays && <Globe />}

      {/* Scroll Indicator */}
      {showHeroOverlays && (
        <div className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />
          <span className="text-white/50 text-sm tracking-widest uppercase rotate-90 origin-left translate-x-4">
            Scroll
          </span>
        </div>
      )}

      {/* Stats */}
      {showHeroOverlays && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-12 z-20">
          <Stat number="25+" label="Race Victories" />
          <Stat number="150+" label="Team Members" />
          <Stat number="10" label="Years of Excellence" />
        </div>
      )}

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Video placeholder - replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <p>Video Player Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[var(--accent)]">{number}</div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  );
}
