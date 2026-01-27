"use client";

import Masonry from "./Masonry";

const galleryItems = [
    { id: 1, height: 400, img: "https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&q=80&w=800" },
    { id: 2, height: 300, img: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=800" },
    { id: 3, height: 500, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800" },
    { id: 4, height: 350, img: "https://images.unsplash.com/photo-1533591380362-7c3553256c7d?auto=format&fit=crop&q=80&w=800" },
    { id: 5, height: 450, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" },
    { id: 6, height: 320, img: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&q=80&w=800" },
    { id: 7, height: 420, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" },
    { id: 8, height: 380, img: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=800" },
    { id: 9, height: 480, img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800" },
    { id: 10, height: 360, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" },
];

export default function GallerySection() {
    return (
        <section className="w-full pt-48 pb-32 bg-[#0a0a0a] relative overflow-hidden">

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '48px' }}>
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
