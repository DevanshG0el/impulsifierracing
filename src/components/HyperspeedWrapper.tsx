"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Hyperspeed with no SSR
const HyperspeedComponent = dynamic(
    () => import('./Hyperspeed'),
    {
        ssr: false,
        loading: () => <div className="w-full h-full bg-transparent" />
    }
);

interface HyperspeedWrapperProps {
    opacity?: number;
}

export default function HyperspeedWrapper({ opacity = 0.3 }: HyperspeedWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure we're in the browser
        if (typeof window === 'undefined') return;
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none"
            style={{
                opacity,
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            }}
        >
            <HyperspeedComponent
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 3,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 30,
                    lightPairsPerRoadWay: 50,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0x1a1a1a,
                        brokenLines: 0x1a1a1a,
                        leftCars: [0xff6b00, 0xff8533, 0xffa366],
                        rightCars: [0xff6b00, 0xff8533, 0xffa366],
                        sticks: 0xff6b00
                    }
                }}
            />
        </div>
    );
}
