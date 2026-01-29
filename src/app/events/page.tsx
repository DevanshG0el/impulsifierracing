"use client";

import Link from "next/link";

const upcomingEvents = [
  {
    date: "June 2026",
    title: "SAEINDIA ABAJA",
    location: "TBA",
    type: "Race",
    status: "Upcoming"
  }
];


export default function EventsPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#ff6b00] text-xs sm:text-sm font-medium tracking-wider uppercase block mb-4 md:mb-6">
              Race Calendar
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8">
              Upcoming <span className="text-[#ff6b00]">Events</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 md:mb-12">
              Join us at racetracks around the world as we compete for glory.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16">
            Upcoming <span className="text-[#ff6b00]">Events</span>
          </h2>
          <div className="space-y-4 md:space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-[#ff6b00]/50 transition-all duration-300 p-5 sm:p-6 md:p-7"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                  <div className="text-[#ff6b00] font-mono text-xs sm:text-sm font-medium min-w-[110px]">{event.date}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 md:mb-1.5">{event.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-0">
                  <span className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-[10px] sm:text-xs font-medium uppercase border border-[#ff6b00]/20 px-2.5 py-1 md:px-3 md:py-1.5">
                    {event.type}
                  </span>
                  <span className="bg-green-500/10 text-green-400 rounded-full text-[10px] sm:text-xs font-medium uppercase border border-green-500/20 px-2.5 py-1 md:px-3 md:py-1.5">
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 md:py-32 pb-24 md:pb-48 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
 
          <div className="space-y-4 md:space-y-6">

          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Link href="/results" className="inline-flex items-center gap-2 text-[#ff6b00] hover:text-[#ff8533] font-medium transition-colors duration-300 text-sm sm:text-base">
              View All Results
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

