"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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

      {/* Contact Form & Info */}
      <section className="py-32 pb-48 bg-[#0a0a0a]" style={{ marginBottom: '32px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '32px' }}>
                Send us a <span className="text-[#ff6b00]">message</span>
              </h2>

              {isSubmitted ? (
                <div className="p-8 bg-green-500/10 border border-green-500/30 rounded-2xl">
                  <div className="text-green-400 text-lg font-semibold" style={{ marginBottom: '8px' }}>Message Sent!</div>
                  <p className="text-white/60" style={{ marginBottom: '16px' }}>Thank you for reaching out. We'll get back to you soon.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#ff6b00] hover:text-[#ff8533] font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium" style={{ marginBottom: '8px' }}>Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff6b00] transition-colors"
                      style={{ padding: '14px 16px' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium" style={{ marginBottom: '8px' }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff6b00] transition-colors"
                      style={{ padding: '14px 16px' }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="subject" className="block text-white/80 text-sm font-medium" style={{ marginBottom: '8px' }}>Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff6b00] transition-colors"
                      style={{ padding: '14px 16px' }}
                    >
                      <option value="" className="bg-[#1a1a1a]">Select a subject</option>
                      <option value="sponsorship" className="bg-[#1a1a1a]">Sponsorship Inquiry</option>
                      <option value="careers" className="bg-[#1a1a1a]">Career Opportunities</option>
                      <option value="media" className="bg-[#1a1a1a]">Media & Press</option>
                      <option value="general" className="bg-[#1a1a1a]">General Inquiry</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium" style={{ marginBottom: '8px' }}>Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ff6b00] transition-colors resize-none"
                      style={{ padding: '14px 16px' }}
                      placeholder="Your message..."
                    />
                  </div>
                  <div style={{ marginTop: '32px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ff6b00] text-white font-bold rounded-full hover:bg-[#ff8533] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff6b00]/30"
                      style={{ padding: '16px 32px' }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '32px' }}>
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
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '48px' }}>
                <h3 className="text-white font-bold" style={{ marginBottom: '16px' }}>Follow Us</h3>
                <div className="flex gap-4">
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
        </div>
      </section>
    </div>
  );
}

