import Link from "next/link";
import Navigation, { SideNavigation } from "@/components/Navigation";

export const metadata = {
  title: "Events | Impulsifier Racing",
  description: "Upcoming races, events, and appearances by Impulsifier Racing.",
};

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
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Upcoming <span className="text-[var(--accent)]">Events</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Join us at racetracks around the world as we compete for glory.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[var(--secondary)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="text-[var(--accent)] font-mono text-sm">{event.date}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-white/50">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-12">Past Results</h2>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[var(--background)] rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="text-white/40 font-mono text-sm">{event.date}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-white/50">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-[var(--accent)] text-white rounded-full text-sm font-semibold">
                    {event.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/results" className="text-[var(--accent)] hover:underline">
              View All Results →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
