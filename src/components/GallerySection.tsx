"use client";

import Masonry from "./Masonry";

const galleryItems = [
    // Impulsifier Racing Vehicles
    { id: 1, height: 420, img: "/gallery/vehicle.jpeg" }, // Impulsifier vehicle
    { id: 2, height: 420, img: "/gallery/vehicle1.jpeg" }, // Impulsifier vehicle
    // Autonomous Racing Technology
    { id: 3, height: 450, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" }, // Modern autonomous car with sensors
    { id: 4, height: 400, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" }, // Luxury sports car
    { id: 5, height: 440, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" }, // Electric racing vehicle
    { id: 6, height: 380, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800" }, // Off-road racing
    // Racing & Performance
    { id: 7, height: 420, img: "https://images.unsplash.com/photo-1533591380348-14193f1e5ced?auto=format&fit=crop&q=80&w=800" }, // Off-road buggy racing
    { id: 8, height: 460, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" }, // High-performance racing car
];

export default function GallerySection() {
    return (
        <section className="w-full pt-48 pb-32 bg-[#0a0a0a] relative overflow-hidden">

            <div className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '48px', marginTop: '58px' }}>
                    <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase mb-4 block">
                        Our Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ marginBottom: '24px' }}>
                        Racing <span className="text-[#ff6b00]">Moments</span>
                    </h2>

                </div>

                {/* Masonry Gallery */}
                <div className="w-full h-[600px] relative">
                    <Masonry
                        items={galleryItems}
                        scaleOnHover={true}
                        hoverScale={1.05}
                        blurToFocus={true}
                        colorShiftOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
}
