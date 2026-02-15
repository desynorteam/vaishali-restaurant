"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "The Story", href: "/history" },
        { name: "The Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-xl border-b border-sage/10 font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
                <Link href="/" className="flex flex-col group">
                    <span className="text-2xl sm:text-3xl font-serif text-forest tracking-tight group-hover:text-primary-green transition-colors">
                        Vaishali
                    </span>
                    <span className="text-[8px] sm:text-[9px] tracking-[0.4em] font-semibold text-sage/80 -mt-1 uppercase">
                        Heritage Pune • Est. 1951
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${pathname === link.href
                                ? "text-forest after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-sage"
                                : "text-forest/40 hover:text-forest"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <Link href="/contact" className="hidden sm:block">
                        <button className="bg-forest text-ivory px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-primary-green transition-all uppercase shadow-lg shadow-forest/10 active:scale-95 whitespace-nowrap">
                            Reservations
                        </button>
                    </Link>

                    <button
                        className="md:hidden text-forest p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-ivory transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full pt-32 px-10 pb-12">
                    <nav className="flex flex-col space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-4xl font-serif italic tracking-tight transition-all ${pathname === link.href ? "text-forest" : "text-forest/30"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto">
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                            <button className="w-full bg-forest text-ivory py-5 rounded-2xl text-xs font-bold tracking-[0.3em] uppercase">
                                Book a Table
                            </button>
                        </Link>
                        <div className="mt-8 flex justify-between items-center text-[10px] tracking-widest text-forest/40 font-bold uppercase">
                            <span>Since 1951</span>
                            <span>Pune, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
