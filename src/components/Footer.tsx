import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
    navigation: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Gallery", href: "/gallery" },
        { name: "Events", href: "/events" },
    ],
    resources: [
        { name: "Technology", href: "/technology" },
        { name: "Updates", href: "/updates" },
        { name: "Press Kit", href: "/press" },
        { name: "Sponsors", href: "/sponsors" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
    social: [
        { name: "Instagram", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "LinkedIn", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-white/5">
            {/* Main Footer Content */}
            <div className="w-full px-6 lg:px-12 xl:px-20 py-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

                        {/* Brand Column - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                                <Logo className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xl tracking-wider">IMPULSIFIER</span>
                                    <span className="text-[#ff6b00] text-xs tracking-[0.3em] uppercase">Racing</span>
                                </div>
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                                Pushing the limits of speed and engineering excellence. Join us on our journey to racing glory and become part of the Impulsifier family.
                            </p>

                            {/* Newsletter */}
                            <div className="max-w-sm">
                                <p className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors"
                                        style={{ padding: '10px 16px' }}
                                    />
                                    <button
                                        className="bg-[#ff6b00] text-white text-sm font-medium rounded-lg hover:bg-[#ff8533] transition-colors whitespace-nowrap"
                                        style={{ padding: '10px 20px' }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Navigation</h4>
                            <ul className="space-y-3">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-[#ff6b00] transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Resources</h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-[#ff6b00] transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Legal</h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-[#ff6b00] transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Follow Us</h4>
                            <ul className="space-y-3">
                                {footerLinks.social.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/50 hover:text-[#ff6b00] transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact */}
                            <div className="mt-8">
                                <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Contact</p>
                                <a href="mailto:hello@impulsifier.com" className="text-white/50 hover:text-[#ff6b00] transition-colors text-sm block mb-2">
                                    hello@impulsifier.com
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Full Width */}
            <div className="w-full pt-8 mt-8">
                <div className="w-full px-6 lg:px-12 xl:px-20 py-6">
                    <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} Impulsifier Racing. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}
