import Link from "next/link";

const galleryImages = [
  { id: 1, title: "Race Day", category: "Events", aspectClass: "col-span-2 row-span-2" },
  { id: 2, title: "Pit Stop", category: "Behind the Scenes", aspectClass: "" },
  { id: 3, title: "Victory Lap", category: "Celebrations", aspectClass: "" },
  { id: 4, title: "Team Huddle", category: "Team", aspectClass: "col-span-2" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Photo <span className="text-[var(--accent)]">Gallery</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              Capturing the speed, passion, and glory of our racing journey.
            </p>
          </div>
          <Link
            href="/gallery"
            className="mt-6 md:mt-0 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 group"
          >
            View Full Gallery
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl bg-[var(--background)] cursor-pointer ${image.aspectClass}`}
            >
              {/* Placeholder for gallery image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: '#1a1a1a',
                  backgroundImage: `url('/gallery/image-${image.id}.jpg')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold">{image.title}</h3>
                <p className="text-[var(--accent)] text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
