import Link from "next/link";
import Navigation, { SideNavigation } from "@/components/Navigation";

export const metadata = {
  title: "Team | Impulsifier Racing",
  description: "Meet the talented drivers, engineers, and strategists behind Impulsifier Racing.",
};

const teamMembers = [
  {
    name: "Alex Martinez",
    role: "Lead Driver",
    bio: "5-time championship winner with over 15 years of professional racing experience.",
    image: "/team/driver-1.jpg",
    social: { twitter: "#", instagram: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Chief Engineer",
    bio: "MIT graduate with expertise in aerodynamics and powertrain optimization.",
    image: "/team/engineer-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Michael Torres",
    role: "Race Strategist",
    bio: "Former Formula 1 strategist with an unmatched understanding of race dynamics.",
    image: "/team/strategist-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Emma Williams",
    role: "Technical Director",
    bio: "20 years of experience in motorsport engineering and team management.",
    image: "/team/director-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "James Rodriguez",
    role: "Second Driver",
    bio: "Rising star with multiple podium finishes in his debut season.",
    image: "/team/driver-2.jpg",
    social: { twitter: "#", instagram: "#" }
  },
  {
    name: "Lisa Park",
    role: "Performance Analyst",
    bio: "Data science expert specializing in real-time performance optimization.",
    image: "/team/analyst-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "David Kim",
    role: "Mechanical Engineer",
    bio: "Specialist in suspension systems and chassis dynamics.",
    image: "/team/engineer-2.jpg",
    social: { linkedin: "#" }
  },
  {
    name: "Rachel Green",
    role: "Team Manager",
    bio: "Ensures seamless operations across all team functions.",
    image: "/team/manager-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-[var(--accent)]">Team</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Meet the passionate individuals who make Impulsifier Racing a force to be reckoned with on every track.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[var(--secondary)]"
              >
                {/* Image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: '#2a2a2a',
                      backgroundImage: `url('${member.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[var(--accent)] text-sm mb-2">{member.role}</p>
                  <p className="text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-white/60 mb-8">
            We&apos;re always looking for talented individuals who share our passion for racing excellence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
