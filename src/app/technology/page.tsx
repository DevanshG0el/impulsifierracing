"use client";

export default function TechnologyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Coming Soon Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff6b00]/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
    

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"style={{ marginBottom: '48px', marginTop: '58px' }}>
            Coming <span className="text-[#ff6b00]">Soon</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            We're working on something extraordinary. Our technology page will showcase the cutting-edge innovations that power our racing excellence.
          </p>


        </div>
      </section>
    </div>
  );
}
