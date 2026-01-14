"use client";

import Link from "next/link";

const updatePosts = [
  {
    slug: "championship-victory-2025",
    title: "Championship Victory: A Season to Remember",
    excerpt: "Reflecting on our incredible journey to the 2025 championship title and the team effort that made it possible.",
    date: "Dec 15, 2025",
    category: "News",
    readTime: "5 min read",
    featured: true
  },
  {
    slug: "new-car-reveal",
    title: "Unveiling Our 2026 Challenger",
    excerpt: "Get an exclusive first look at our latest racing machine, featuring groundbreaking aerodynamic innovations.",
    date: "Jan 05, 2026",
    category: "Technology",
    readTime: "4 min read",
    featured: true
  },
  {
    slug: "driver-interview-alex",
    title: "In Conversation with Alex Martinez",
    excerpt: "Our lead driver shares insights on his racing philosophy, preparation routines, and goals for the upcoming season.",
    date: "Jan 02, 2026",
    category: "Interviews",
    readTime: "8 min read",
    featured: false
  },
  {
    slug: "engineering-deep-dive",
    title: "Engineering Excellence: Behind the Scenes",
    excerpt: "Take a deep dive into the engineering processes that give our cars their competitive edge.",
    date: "Dec 20, 2025",
    category: "Technology",
    readTime: "6 min read",
    featured: false
  },
  {
    slug: "sponsor-announcement",
    title: "Welcoming Our New Partners",
    excerpt: "We're excited to announce new partnerships that will help drive our success in 2026.",
    date: "Dec 10, 2025",
    category: "News",
    readTime: "3 min read",
    featured: false
  },
  {
    slug: "training-program",
    title: "How Our Drivers Prepare for Race Day",
    excerpt: "An inside look at the physical and mental training regimens that keep our drivers at peak performance.",
    date: "Nov 28, 2025",
    category: "Behind the Scenes",
    readTime: "7 min read",
    featured: false
  },
];

export default function UpdatesPage() {
  const featuredPosts = updatePosts.filter(post => post.featured);
  const regularPosts = updatePosts.filter(post => !post.featured);

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
              Latest News
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
              Team <span className="text-[#ff6b00]">Updates</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
              Stay up to date with the latest news, stories, and updates from Impulsifier Racing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '48px' }}>
            Featured <span className="text-[#ff6b00]">Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/updates/${post.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#ff6b00]/50 transition-all duration-300"
              >
                <div className="aspect-video bg-[#1a1a1a] relative border-b border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b00]/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <p className="text-white/30 text-sm">Featured Image</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '28px' }}>
                  <div className="flex items-center gap-4" style={{ marginBottom: '16px' }}>
                    <span className="text-[#ff6b00] text-xs font-medium uppercase tracking-wider">{post.category}</span>
                    <span className="text-white/40 text-xs">{post.date}</span>
                    <span className="text-white/40 text-xs">• {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff6b00] transition-colors" style={{ marginBottom: '12px' }}>
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pt-48 pb-48 bg-[#0a0a0a]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '30px' }}>
            All <span className="text-[#ff6b00]">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/updates/${post.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#ff6b00]/50 transition-all duration-300"
                style={{ padding: '24px' }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: '16px' }}>
                  <span className="text-[#ff6b00] text-xs font-medium uppercase tracking-wider">{post.category}</span>
                  <span className="text-white/40 text-xs">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b00] transition-colors" style={{ marginBottom: '12px' }}>
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2" style={{ marginBottom: '16px' }}>{post.excerpt}</p>
                <div className="text-white/40 text-xs">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

