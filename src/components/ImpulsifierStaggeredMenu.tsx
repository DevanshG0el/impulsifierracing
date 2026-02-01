"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import StaggeredMenu from "./StaggeredMenu";

interface NavLink {
    name: string;
    href: string;
}

interface ImpulsifierStaggeredMenuProps {
    navLinks: NavLink[];
}

const ImpulsifierStaggeredMenu: React.FC<ImpulsifierStaggeredMenuProps> = ({ navLinks }) => {
    // Prepare menu items for StaggeredMenu
    const menuItems = navLinks.map((link) => ({
        label: link.name,
        link: link.href,
        ariaLabel: `Navigate to ${link.name}`,
    }));

    // Social media links
    const socialItems = [
        { label: "Instagram", link: "https://instagram.com/impulsifierracing" },
        { label: "Twitter", link: "https://twitter.com/impulsifierracing" },
        { label: "YouTube", link: "https://youtube.com/@impulsifierracing" },
        { label: "LinkedIn", link: "https://linkedin.com/company/impulsifierracing" },
    ];

    // Custom logo component
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

    return (
        <>
            {/* Solid Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 z-[9998] bg-[#0a0a0a]/95 backdrop-blur-md">
                <div className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-12 xl:px-20 py-4">
                    {/* Empty container for spacing - actual content rendered by StaggeredMenu */}
                </div>
            </div>

            {/* StaggeredMenu Component */}
            <div className="staggered-menu-custom" suppressHydrationWarning>
                <StaggeredMenu
                    position="right"
                    colors={["#0a0a0a", "#1a1a1a", "#ff6b00"]}
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    logoUrl=""
                    menuButtonColor="#ffffff"
                    openMenuButtonColor="#ff6b00"
                    accentColor="#ff6b00"
                    changeMenuColorOnOpen={true}
                    isFixed={true}
                    closeOnClickAway={true}
                />
                <div className="fixed top-4 left-6 lg:left-12 xl:left-20 z-[10000] pointer-events-auto">
                    <CustomLogo />
                </div>
            </div>
        </>
    );
};

export default ImpulsifierStaggeredMenu;
