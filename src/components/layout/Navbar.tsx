"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
                    <Link href="/contact">
                        <button className="bg-forest text-ivory px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-primary-green transition-all uppercase shadow-lg shadow-forest/10 active:scale-95 whitespace-nowrap">
                            Reservations
                        </button>
                    </Link>
                    {/* Mobile Menu Button - Optional visual polish */}
                    <button className="md:hidden text-forest p-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
