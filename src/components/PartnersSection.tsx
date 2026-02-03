"use client";

import Image from "next/image";

export default function PartnersSection() {
    const partners = [
        { id: 1, name: "HTR", logo: "/htr.jpg" },
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
                <div className="flex justify-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10 overflow-hidden"
                        >
                            {partner.logo ? (
                                <div className="relative w-full h-full p-6">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain rounded-full"
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
