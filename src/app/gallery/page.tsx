"use client";

import { useState } from "react";

const galleryItems = [
  { id: 1, title: "Championship Victory", category: "Celebrations", size: "large" },
  { id: 2, title: "Pit Stop Action", category: "Race Day", size: "small" },
  { id: 3, title: "Team Briefing", category: "Behind the Scenes", size: "small" },
  { id: 4, title: "Our Latest Machine", category: "Cars", size: "medium" },
  { id: 5, title: "Podium Finish", category: "Celebrations", size: "small" },
  { id: 6, title: "Night Race", category: "Race Day", size: "large" },
  { id: 7, title: "Engineering Team", category: "Team", size: "small" },
  { id: 8, title: "Track Testing", category: "Behind the Scenes", size: "medium" },
  { id: 9, title: "Driver Portrait", category: "Team", size: "small" },
  { id: 10, title: "Victory Celebration", category: "Celebrations", size: "small" },
  { id: 11, title: "Engine Detail", category: "Cars", size: "medium" },
  { id: 12, title: "Starting Grid", category: "Race Day", size: "large" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
              Moments Captured
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Photo <span className="text-[#ff6b00]">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Capturing the speed, passion, and glory of our racing journey through stunning imagery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:border-[#ff6b00]/50 transition-all duration-500 ${item.size === "large" ? "col-span-2 row-span-2" :
                  item.size === "medium" ? "col-span-2" : ""
                  }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundColor: '#1a1a1a',
                    backgroundImage: `url('/gallery/image-${item.id}.jpg')`,
                    backgroundSize: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info - Always visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent" style={{ padding: '24px 20px' }}>
                  <h3 className="text-white font-bold text-lg" style={{ marginBottom: '4px', lineHeight: '1.3' }}>{item.title}</h3>
                  <p className="text-[#ff6b00] text-xs font-medium uppercase tracking-wider">{item.category}</p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-6xl w-full aspect-video bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#ff6b00]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/60 text-lg">Image {selectedImage}</p>
              <p className="text-white/40 text-sm mt-2">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

