"use client";

import Masonry from "./Masonry";

const galleryItems = [
    // Autonomous Vehicle Technology
    { id: 1, height: 420, img: "https://images.unsplash.com/photo-1617886322207-6e72e1043b1d?auto=format&fit=crop&q=80&w=800" }, // Self-driving car sensors
    { id: 2, height: 380, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800" }, // Autonomous vehicle tech
    { id: 3, height: 450, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" }, // Modern autonomous car
    // CARLA Simulation & AI Technology
    { id: 4, height: 400, img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800" }, // AI and technology
    { id: 5, height: 360, img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }, // Computer vision
    { id: 6, height: 480, img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" }, // Tech and sensors
    // Buggy Racing & Motorsports
    { id: 7, height: 440, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800" }, // Off-road racing
    { id: 8, height: 390, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" }, // Racing car
    { id: 9, height: 420, img: "https://images.unsplash.com/photo-1533591380348-14193f1e5ced?auto=format&fit=crop&q=80&w=800" }, // Off-road buggy
    { id: 10, height: 370, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800" }, // Black sports car
    { id: 11, height: 400, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" }, // Autonomous vehicle
    { id: 12, height: 430, img: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?auto=format&fit=crop&q=80&w=800" }, // Tech car
    { id: 13, height: 390, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }, // Technology
    { id: 14, height: 420, img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800" }, // AI tech
    { id: 15, height: 410, img: "https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&q=80&w=800" }, // Racing action
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
