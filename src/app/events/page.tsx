"use client";

import Link from "next/link";

const upcomingEvents = [
  {
    date: "Mar 15, 2026",
    title: "Grand Prix Opening Round",
    location: "Monaco Circuit",
    type: "Race",
    status: "Upcoming"
  },
  {
    date: "Apr 02, 2026",
    title: "Spring Championship",
    location: "Silverstone, UK",
    type: "Race",
    status: "Upcoming"
  },
  {
    date: "Apr 20, 2026",
    title: "Tech Showcase Event",
    location: "Munich, Germany",
    type: "Exhibition",
    status: "Upcoming"
  },
  {
    date: "May 10, 2026",
    title: "Endurance Race",
    location: "Le Mans, France",
    type: "Race",
    status: "Upcoming"
  },
];

const pastEvents = [
  {
    date: "Dec 10, 2025",
    title: "Season Finale",
    location: "Abu Dhabi",
    type: "Race",
    result: "1st Place"
  },
  {
    date: "Nov 25, 2025",
    title: "Night Race Championship",
    location: "Singapore",
    type: "Race",
    result: "2nd Place"
  },
  {
    date: "Nov 05, 2025",
    title: "American Grand Prix",
    location: "Austin, Texas",
    type: "Race",
    result: "1st Place"
  },
];

export default function EventsPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
              Race Calendar
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Upcoming <span className="text-[#ff6b00]">Events</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Join us at racetracks around the world as we compete for glory.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '48px', marginTop: '48px' }}>
            Upcoming <span className="text-[#ff6b00]">Events</span>
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#ff6b00]/50 transition-all duration-300"
                style={{ padding: '24px 28px' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="text-[#ff6b00] font-mono text-sm font-medium min-w-[110px]">{event.date}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ marginBottom: '6px' }}>{event.title}</h3>
                    <p className="text-white/60 text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <span className="bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs font-medium uppercase border border-[#ff6b00]/20" style={{ padding: '6px 12px', display: 'inline-block' }}>
                    {event.type}
                  </span>
                  <span className="bg-green-500/10 text-green-400 rounded-full text-xs font-medium uppercase border border-green-500/20" style={{ padding: '6px 12px', display: 'inline-block' }}>
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-32 pb-48 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '48px', marginTop: '48px' }}>
            Past <span className="text-[#ff6b00]">Results</span>
          </h2>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                style={{ padding: '24px 28px' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="text-white/40 font-mono text-sm font-medium min-w-[110px]">{event.date}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ marginBottom: '6px' }}>{event.title}</h3>
                    <p className="text-white/60 text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <span className="bg-[#ff6b00] text-white rounded-full text-sm font-bold shadow-lg shadow-[#ff6b00]/30" style={{ padding: '10px 20px', display: 'inline-block' }}>
                    {event.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/results" className="inline-flex items-center gap-2 text-[#ff6b00] hover:text-[#ff8533] font-medium transition-colors duration-300">
              View All Results
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

