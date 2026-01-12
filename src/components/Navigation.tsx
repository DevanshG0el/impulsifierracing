"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Technology", href: "/technology" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function SideNavigation({ className = "" }: { className?: string }) {
  return (
    <nav className={`hidden lg:flex flex-col items-end gap-4 z-40 ${className}`.trim()}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm text-white/60 hover:text-[var(--accent)] transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <Logo />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wider">IMPULSIFIER</span>
            <span className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase">Racing</span>
          </div>
        </Link>

        {/* Language Selector */}
        <div className="hidden md:flex items-center gap-2 text-white/70 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>Eng</span>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-end justify-center h-full pr-12 lg:pr-24">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl lg:text-3xl font-light text-white/80 hover:text-[var(--accent)] transition-all duration-300 py-3 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
