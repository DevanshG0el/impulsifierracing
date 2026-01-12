"use client";

import { useState } from "react";
import Navigation, { SideNavigation } from "@/components/Navigation";

const categories = ["All", "Race Day", "Behind the Scenes", "Team", "Celebrations", "Cars"];

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
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Photo <span className="text-[var(--accent)]">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Capturing the speed, passion, and glory of our racing journey through stunning imagery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[var(--background)] sticky top-16 z-30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--secondary)] text-white/60 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className={`group relative overflow-hidden rounded-xl bg-[var(--secondary)] cursor-pointer ${
                  item.size === "large" ? "col-span-2 row-span-2" : 
                  item.size === "medium" ? "col-span-2" : ""
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: '#1a1a1a',
                    backgroundImage: `url('/gallery/image-${item.id}.jpg')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-[var(--accent)] text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full aspect-video bg-[var(--secondary)] rounded-lg flex items-center justify-center">
            <span className="text-white/30">Image {selectedImage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
