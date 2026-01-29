"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0a0a0a] relative overflow-hidden" style={{ paddingTop: '20px', paddingBottom: '50px' }}>


            <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-12 text-center relative z-10">
                {/* Badge */}
                <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase">
                        Join Our Journey
                    </span>
                </div>

                {/* Heading */}
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '28px' }}>
                    Ready to <span className="text-[#ff6b00]">Join</span> the Race?
                </h2>

                {/* Description */}
                <p className={`text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '22px' }}>
                    Whether you&apos;re a potential sponsor, aspiring team member, or racing enthusiast,
                    we&apos;d love to hear from you.
                </p>

                {/* Buttons */}
                <div className={`flex flex-row gap-2 justify-center items-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Link
                        href="/contact"
                        className="bg-[#ff6b00] text-white font-semibold rounded-full hover:bg-[#ff8533] transition-all duration-300 text-center flex-shrink-0"
                        style={{ whiteSpace: 'nowrap', padding: '10px 20px', fontSize: '13px' }}
                    >
                        Get In Touch
                    </Link>
                    <Link
                        href="/about"
                        className="border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center flex-shrink-0"
                        style={{ whiteSpace: 'nowrap', padding: '10px 20px', fontSize: '13px' }}
                    >
                        Learn More
                    </Link>
                </div>



            </div>
        </section>
    );
}
