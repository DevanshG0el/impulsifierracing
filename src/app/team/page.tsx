"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Shantanu Anantwar ",
    role: "Software Lead",
    bio: "Working on vehicle path planning, control logic, sensor interfacing and simulations.",
    image: "/shantanu_anantwar_pfp - Shantanu.jpg",
    social: { twitter: "#", instagram: "#" }
  },
  {
    name: "Shloak Nioding",
    role: "Chief Engineer",
    bio: "Computer science undergrad working at intersection of machine learning and robotics",
    image: "/Shloak_Nioding_pfp - CSE_C2_34_Shloak Nioding.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: " Pranil Bankar",
    role: "Software Engineer",
    bio: ".",
    image: "/Pranil_Bankar_pfp - Pranil Bankar.jpeg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Devansh Goel",
    role: "Jr.Software Engineer",
    bio: "Tech Nerd working on Emergency braking system and Control Logic",
    image: "/team/director-1.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Sachin Mardikar",
    role: "Jr.Software Engineer",
    bio: "A curious engineer who enjoys building reliable autonomous systems and solving real-world problems through practical AI.",
    image: "/Sachin_Mardikar_pfp - Sachin Mardikar.jpeg",
    social: { twitter: "#", instagram: "#" }
  },
  {
    name: "Ayush khandwe",
    role: "Electronics Engineer",
    bio: "Responsible for the electrical and electronics domain of the autonomous A-Baja vehicle, focusing on power distribution and integration.",
    image: "/Ayush_Khandwe_pfp - Dangerous Boi.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Govind Dhengare",
    role: "Electronics Engineer",
    bio: "Handling electronics and electrical architecture for Steer-By-Wire and Brake-By-Wire, ensuring closed loop control and safe operation..",
    image: "/Govind_Dhengare_pfp - Govind Dhengare.jpg",
    social: { linkedin: "#" }
  },
  {
    name: "Jigisha Mandavkar",
    role: "Creative Media",
    bio: "Creative media enthusiast crafting impactful visuals and stories for Impulsifier's autonomous vehicle team.",
    image: "/Jigisha_Mandavksr_pfp - Jigisha.jpg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Pradaksh Sawai",
    role: "AI/ML Engineer",
    bio: "I design autonomous intelligence, teaching machines to perceive the road, reason in motion, and drive the future!",
    image: "/pradaksh_sawai_pfp - Pradaksh Sawai.jpeg",
    social: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Tamanna Sura",
    role: "Designer",
    bio: "An ambitious and brilliant mind fueled by passion, discipline, and vision, committed to pushing boundaries and achieving excellence in racing.",
    image: "/Tamanna_Sura_photo - Tamanna Sura.jpeg",
    social: { twitter: "#", linkedin: "#" }
  },
];

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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
              The People Behind the Speed
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Our <span className="text-[#ff6b00]">Team</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Meet the passionate individuals who make Impulsifier Racing a force to be reckoned with on every track.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={sectionRef} className="py-32 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: '#1a1a1a',
                      backgroundImage: `url('${member.image}')`,
                      backgroundSize: 'cover'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Hover Bio */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white/80 text-sm leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent" style={{ padding: '24px 20px' }}>
                  <h3 className="text-lg font-bold text-white" style={{ marginBottom: '4px', lineHeight: '1.3' }}>{member.name}</h3>
                  <p className="text-[#ff6b00] text-xs font-medium uppercase tracking-wider" style={{ lineHeight: '1.4' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

