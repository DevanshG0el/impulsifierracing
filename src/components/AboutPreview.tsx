import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[var(--accent)]">Impulsifier</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              We’re a high-performance racing team built on precision engineering and relentless
              iteration. From the workshop to the track, every decision is driven by speed,
              reliability, and teamwork.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-8 py-3 bg-[var(--accent)] text-white font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-colors duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/team"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          <div className="relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden bg-[var(--background)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              About Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
