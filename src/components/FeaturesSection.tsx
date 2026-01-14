"use client";

import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "High Performance",
        description: "Cutting-edge engineering for maximum speed and efficiency on the track.",
        stat: "200+",
        statLabel: "km/h Top Speed"
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Precision Engineering",
        description: "Every component designed and tested for peak performance and reliability.",
        stat: "99.9%",
        statLabel: "Precision Rate"
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Expert Team",
        description: "World-class engineers, drivers, and strategists working in perfect harmony.",
        stat: "150+",
        statLabel: "Team Members"
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Championship Proven",
        description: "Multiple championship wins across various racing categories worldwide.",
        stat: "25+",
        statLabel: "Race Victories"
    }
];

function AnimatedCounter({ target }: { target: string }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const increment = numericValue / 60;
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= numericValue) {
                            setCount(numericValue);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numericValue, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function FeaturesSection() {
    return (
        <section className="w-full pt-32 pb-40 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase mb-6 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ marginBottom: '28px' }}>
                        Why <span className="text-[#ff6b00]">Impulsifier</span>?
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
                        We combine passion with technology to create racing experiences that push the boundaries of what&apos;s possible.
                    </p>
                </div>

                {/* Features Grid - No Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6b00] transition-colors">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/50 text-sm leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            {/* Stat */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="text-3xl font-bold text-[#ff6b00] mb-1">
                                    <AnimatedCounter target={feature.stat} />
                                </div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">
                                    {feature.statLabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
