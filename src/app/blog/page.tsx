import Link from "next/link";
import Navigation, { SideNavigation } from "@/components/Navigation";

export const metadata = {
  title: "Blog | Impulsifier Racing",
  description: "Latest news, updates, and stories from Impulsifier Racing.",
};

const blogPosts = [
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
    excerpt: "We&apos;re excited to announce new partnerships that will help drive our success in 2026.",
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

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--secondary)] relative overflow-hidden">
        <Navigation />
        <SideNavigation className="absolute right-12 top-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Latest <span className="text-[var(--accent)]">News</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Stay up to date with the latest news, stories, and updates from Impulsifier Racing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[var(--secondary)] rounded-2xl overflow-hidden"
              >
                <div className="aspect-video bg-[#1a1a1a] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    Featured Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[var(--accent)] text-sm">{post.category}</span>
                    <span className="text-white/40 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm">{post.excerpt}</p>
                  <div className="mt-4 text-white/40 text-sm">{post.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[var(--background)] rounded-xl p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[var(--accent)] text-sm">{post.category}</span>
                  <span className="text-white/40 text-sm">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent)] transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-white/40 text-sm">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
