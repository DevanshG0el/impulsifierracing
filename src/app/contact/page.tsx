"use client";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* Left Side - White Background with Contact Info */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-screen">
        <div className="max-w-xl w-full">
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-[#ff6b00] mb-2 text-center">
            GET IN TOUCH
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
            with us
          </h2>

          {/* Contact Information */}
          <div className="space-y-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold mb-1">Email</h3>
                <a href="mailto:impulsifierracing@gmail.com" className="text-gray-600 hover:text-[#ff6b00] transition-colors">
                  impulsifierracing@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div style={{ marginTop: '48px', marginBottom: '24px' }}>
                <h3 className="text-gray-900 font-bold mb-1">Phone</h3>
                <a href="tel:+918208177972" className="text-gray-600 hover:text-[#ff6b00] transition-colors block">
                  +91 8208177972
                </a>
                <a href="tel:+918446656859" className="text-gray-600 hover:text-[#ff6b00] transition-colors block">
                  +91 8446656859
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-gray-900 font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/impulsifierracing?utm_source=qr&igsh=dDNoMHVlODA3N3lt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#ff6b00] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <img
                  src="/icons8-instagram-50.png"
                  alt="Instagram"
                  className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/impulsifier-racing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#ff6b00] flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <img
                  src="/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Black Background with Vehicle Image */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-screen relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b00] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b00] rounded-full blur-3xl" />
        </div>

        {/* Vehicle Image */}
        <div className="relative z-10 w-full max-w-3xl">
          <img
            src="/contact_page.png"
            alt="Impulsifier Racing Autonomous Vehicle"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

    </div>
  );
}
