import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full pt-24 pb-32 bg-[var(--background)] relative isolate overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to <span className="text-[var(--accent)]">Join</span> the Race?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
          Whether you&apos;re a potential sponsor, aspiring team member, or racing enthusiast,
          we&apos;d love to hear from you. Let&apos;s create something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-colors duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-6">
          {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-white/40 hover:text-[var(--accent)] transition-colors duration-300 text-sm"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
