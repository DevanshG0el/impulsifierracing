import Link from "next/link";

const teamMembers = [
  {
    name: "Alex Martinez",
    role: "Lead Driver",
    image: "/team/driver-1.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Chief Engineer",
    image: "/team/engineer-1.jpg",
  },
  {
    name: "Michael Torres",
    role: "Race Strategist",
    image: "/team/strategist-1.jpg",
  },
  {
    name: "Emma Williams",
    role: "Technical Director",
    image: "/team/director-1.jpg",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the <span className="text-[var(--accent)]">Team</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              Our world-class team of drivers, engineers, and strategists work together to achieve racing excellence.
            </p>
          </div>
          <Link
            href="/team"
            className="mt-6 md:mt-0 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 group"
          >
            View All Team
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[var(--secondary)] aspect-[3/4]"
            >
              {/* Placeholder for team member image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: '#2a2a2a',
                  backgroundImage: `url('${member.image}')`
                }}
              />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-[var(--accent)] text-sm">{member.role}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
