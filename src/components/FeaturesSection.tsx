"use client";

import { useEffect, useRef, useState } from "react";
import HyperspeedWrapper from "./HyperspeedWrapper";


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
        <section className="w-full min-h-screen py-32 md:py-40 lg:py-48 bg-[#0a0a0a] relative overflow-hidden flex items-center">
            {/* Hyperspeed Background Animation */}
            <HyperspeedWrapper opacity={0.3} />

            <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 lg:mb-24">
                    <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ marginBottom: '32px' }}>
                        Why <span className="text-[#ff6b00]">Impulsifier</span>?
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ marginBottom: '80px' }}>
                        We combine passion with technology to create racing experiences that push the boundaries of what&apos;s possible.
                    </p>
                </div>


            </div>
        </section>
    );
}
