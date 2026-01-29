"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import '../components/MagicBento.css';

const GLOW_COLOR = '255, 107, 0'; // #ff6b00 in RGB

interface ParticleCardProps {
    children?: ReactNode;
    icon: string;
    title: string;
    description: string;
}

const ParticleCard = ({ children, icon, title, description }: ParticleCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);

    const createParticle = (x: number, y: number) => {
        const el = document.createElement('div');
        el.className = 'particle';
        el.style.cssText = `
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: rgba(${GLOW_COLOR}, 1);
      box-shadow: 0 0 6px rgba(${GLOW_COLOR}, 0.6);
      pointer-events: none;
      z-index: 100;
      left: ${x}px;
      top: ${y}px;
    `;
        return el;
    };

    const handleMouseEnter = () => {
        if (!cardRef.current) return;

        const { width, height } = cardRef.current.getBoundingClientRect();

        // Create 8 particles
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                if (!cardRef.current) return;

                const particle = createParticle(
                    Math.random() * width,
                    Math.random() * height
                );

                cardRef.current.appendChild(particle);
                particlesRef.current.push(particle);

                gsap.fromTo(particle,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                );

                gsap.to(particle, {
                    x: (Math.random() - 0.5) * 80,
                    y: (Math.random() - 0.5) * 80,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to(particle, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, i * 80);
        }
    };

    const handleMouseLeave = () => {
        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => particle.remove()
            });
        });
        particlesRef.current = [];
    };

    return (
        <div
            ref={cardRef}
            className="magic-bento-card magic-bento-card--border-glow particle-container"
            style={{
                backgroundColor: '#0a0a0a',
                '--glow-color': GLOW_COLOR,
                position: 'relative',
                overflow: 'hidden'
            } as React.CSSProperties}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="magic-bento-card__header">
                <div className="w-14 h-14 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] transition-transform duration-300 hover:scale-110">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                </div>
            </div>
            <div className="magic-bento-card__content">
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{description}</p>
            </div>
        </div>
    );
};

interface GlobalSpotlightProps {
    gridRef: React.RefObject<HTMLDivElement | null>;
}

const GlobalSpotlight = ({ gridRef }: GlobalSpotlightProps) => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef?.current) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${GLOW_COLOR}, 0.15) 0%,
        rgba(${GLOW_COLOR}, 0.08) 15%,
        rgba(${GLOW_COLOR}, 0.04) 25%,
        rgba(${GLOW_COLOR}, 0.02) 40%,
        rgba(${GLOW_COLOR}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section');
            const rect = section?.getBoundingClientRect();
            const mouseInside = rect &&
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                return;
            }

            const cards = gridRef.current.querySelectorAll('.magic-bento-card');
            let minDistance = Infinity;

            cards.forEach((card) => {
                const htmlCard = card as HTMLElement;
                const cardRect = htmlCard.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

                minDistance = Math.min(minDistance, distance);

                const relativeX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
                const relativeY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
                const glowIntensity = distance < 300 ? 1 - (distance / 300) : 0;

                htmlCard.style.setProperty('--glow-x', `${relativeX}%`);
                htmlCard.style.setProperty('--glow-y', `${relativeY}%`);
                htmlCard.style.setProperty('--glow-intensity', glowIntensity.toString());
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                opacity: minDistance < 300 ? 0.8 : 0,
                duration: 0.2,
                ease: 'power2.out'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            spotlightRef.current?.remove();
        };
    }, [gridRef]);

    return null;
};

interface Value {
    icon: string;
    title: string;
    description: string;
}

interface CoreValuesGridProps {
    values: Value[];
}

export default function CoreValuesGrid({ values }: CoreValuesGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <GlobalSpotlight gridRef={gridRef} />
            <div ref={gridRef} className="card-grid bento-section" style={{ maxWidth: '100%' }}>
                {values.map((value, index) => (
                    <ParticleCard
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </div>
        </>
    );
}
