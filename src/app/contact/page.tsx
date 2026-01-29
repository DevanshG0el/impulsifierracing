"use client";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
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

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[#ff6b00] text-sm font-medium tracking-wider uppercase block" style={{ marginBottom: '24px' }}>
                Contact Us
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ marginBottom: '32px' }}>
                Get In <span className="text-[#ff6b00]">Touch</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed" style={{ marginBottom: '48px' }}>
                Whether you're interested in partnerships, careers, or just want to say hello, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-32 pb-48 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center" style={{ marginBottom: '48px' }}>
                Contact <span className="text-[#ff6b00]">Information</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300" style={{ padding: '28px' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ marginBottom: '4px' }}>Headquarters</h3>
                    <p className="text-white/60 text-sm">123 Racing Lane<br />Speed City, SC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300" style={{ padding: '28px' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ marginBottom: '4px' }}>Email</h3>
                    <p className="text-white/60 text-sm">info@impulsifierracing.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300" style={{ padding: '28px' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ marginBottom: '4px' }}>Phone</h3>
                    <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '48px', marginBottom: '48px' }}>
                <h3 className="text-white font-bold text-center" style={{ marginBottom: '16px' }}>Follow Us</h3>
                <div className="flex gap-4 justify-center">
                  {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] transition-all duration-300"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

