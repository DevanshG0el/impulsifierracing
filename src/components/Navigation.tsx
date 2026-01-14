"use client";

import Link from "next/link";
import Logo from "./Logo";
import ImpulsifierStaggeredMenu from "./ImpulsifierStaggeredMenu";

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
  return <ImpulsifierStaggeredMenu navLinks={navLinks} />;
}
