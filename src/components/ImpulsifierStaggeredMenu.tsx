"use client";

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import StaggeredMenu from './StaggeredMenu';

// Custom logo component for StaggeredMenu
const CustomLogo = () => {
    return (
        <Link href="/" className="inline-flex items-center gap-3 group">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-wider">IMPULSIFIER</span>
                <span className="text-[#ff6b00] text-xs tracking-[0.3em] uppercase">Racing</span>
            </div>
        </Link>
    );
};

export default function ImpulsifierStaggeredMenu({ navLinks }: { navLinks: Array<{ name: string; href: string }> }) {
    // Prepare menu items for StaggeredMenu
    const menuItems = navLinks.map(link => ({
        label: link.name,
        link: link.href,
        ariaLabel: `Navigate to ${link.name}`
    }));

    // Social media links
    const socialItems = [
        { label: "Instagram", link: "https://instagram.com/impulsifierracing" },
        { label: "Twitter", link: "https://twitter.com/impulsifierracing" },
        { label: "YouTube", link: "https://youtube.com/@impulsifierracing" },
        { label: "LinkedIn", link: "https://linkedin.com/company/impulsifierracing" }
    ];

    // Create a wrapper to inject custom logo
    const MenuWithCustomLogo = () => {
        const StaggeredMenuComponent = StaggeredMenu as any;

        return (
            <div className="staggered-menu-custom">
                <StaggeredMenuComponent
                    position="right"
                    colors={['#0a0a0a', '#1a1a1a', '#ff6b00']}
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    logoUrl="" // We'll override this with custom logo
                    menuButtonColor="#ffffff"
                    openMenuButtonColor="#ff6b00"
                    accentColor="#ff6b00"
                    changeMenuColorOnOpen={true}
                    isFixed={true}
                    closeOnClickAway={true}
                />
                <style jsx global>{`
          .staggered-menu-custom .sm-logo {
            all: unset;
            display: flex;
            align-items: center;
            pointer-events: auto;
          }
          .staggered-menu-custom .sm-logo-img {
            display: none;
          }
        `}</style>
                <div className="fixed top-8 left-8 z-[10000] pointer-events-auto">
                    <CustomLogo />
                </div>
            </div>
        );
    };

    return <MenuWithCustomLogo />;
}
