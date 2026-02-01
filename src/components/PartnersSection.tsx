"use client";

import Image from "next/image";

export default function PartnersSection() {
    const partners = [
        { id: 1, name: "HTR", logo: "/htr.jpg" },
        { id: 2, name: "Partner 2" },
        { id: 3, name: "Partner 3" },
        { id: 4, name: "Partner 4" },
        { id: 5, name: "Partner 5" },
        { id: 6, name: "Partner 6" },
        { id: 7, name: "Partner 7" },
        { id: 8, name: "Partner 8" },
    ];

    return (
        <section className="w-full pt-16 pb-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ marginBottom: '48px', marginTop: '48px' }}>
                        OUR <span className="text-[#ff6b00]">PARTNERS</span>
                    </h2>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="aspect-video bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
                        >
                            {partner.logo ? (
                                <div className="relative w-full h-full p-6">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-white/40 text-sm font-medium">
                                    {partner.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
