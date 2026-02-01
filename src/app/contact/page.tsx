"use client";

export default function ContactPage() {
  return (
    <div className="relative h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Full Page Background GIF */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/contactu.gif')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/60 to-[#0a0a0a]/90" />

      {/* Content wrapper - flex column to fill viewport */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Section - Compact */}
        <section className="relative flex items-center pt-24 pb-8 px-8 sm:px-10 lg:px-12">
          {/* Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get In <span className="text-[#ff6b00]">Touch</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto" style={{ marginTop: "38px" }}>
              Whether you're interested in partnerships, careers, or just want to say hello, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info - Grid Layout */}
        <section className="flex-1 flex items-center px-8 sm:px-10 lg:px-12 pb-12">
          <div className="max-w-7xl mx-auto w-full">

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto mb-8">
              {/* Location Card */}
              <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 p-6">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2">Headquarters</h3>
                  <p className="text-white/60 text-sm">123 Racing Lane<br />Speed City, SC 12345</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 p-6">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2">Email</h3>
                  <p className="text-white/60 text-sm">info@impulsifierracing.com</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 p-6">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2">Phone</h3>
                  <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Social Links - Compact */}
            <div className="text-center" style={{ marginTop: "48px" }}>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3 justify-center" style={{ marginTop: "28px" }}>
                {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

