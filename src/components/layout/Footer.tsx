import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary-green text-cream/80 pt-24 pb-12 relative overflow-hidden">
            {/* Botanical Backdrop */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[600px] absolute -bottom-40 -left-40">
                    eco
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24">
                    <div className="md:col-span-5">
                        <h2 className="text-4xl md:text-5xl text-cream mb-8 leading-tight italic font-serif tracking-tight">
                            Preserving the flavor of Pune's legacy since 1951.
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-cream/60 mb-12 max-w-lg">
                            Our garden restaurant on FC Road remains a sanctuary of tradition,
                            where stories are shared over steaming cups of coffee.
                        </p>
                        <div className="flex gap-10">
                            <a
                                href="https://www.instagram.com/desynor.in"
                                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-sage transition-colors border-b border-cream/20 pb-1"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.desynor.in"
                                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-sage transition-colors border-b border-cream/20 pb-1"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.desynor.in"
                                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-sage transition-colors border-b border-cream/20 pb-1"
                            >
                                Archive
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3 md:col-start-7">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage mb-8">
                            The Location
                        </h4>
                        <p className="text-sm font-light leading-loose text-cream/60">
                            1216/1, Fergusson College Rd,
                            <br />
                            Shivajinagar, Pune,
                            <br />
                            Maharashtra 411004
                        </p>
                        <p className="text-sm font-medium mt-6 text-cream tracking-widest italic">
                            +91 020 2553 1244
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage mb-8">
                            Garden Hours
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-baseline border-b border-cream/10 pb-4">
                                <span className="text-sm font-light">Mon - Sun</span>
                                <span className="text-sm font-light">07:00 - 23:00</span>
                            </div>
                            <p className="text-xs font-serif italic text-sage">
                                Breakfast concludes at 11:30
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col">
                        <span className="text-3xl font-serif text-cream tracking-tight">
                            Vaishali
                        </span>
                        <span className="text-[10px] tracking-[0.4em] font-semibold text-sage uppercase">
                            © 2026 Legacy Collection • Est. 1951 • Redesigned by Desynor
                        </span>
                    </div>
                    <div className="flex gap-12 text-[9px] font-bold tracking-[0.2em] uppercase text-cream/40">
                        <Link href="https://www.desynor.in" className="hover:text-cream transition-colors">
                            Privacy
                        </Link>
                        <Link href="https://www.desynor.in" className="hover:text-cream transition-colors">
                            Accessibility
                        </Link>
                        <Link href="https://www.desynor.in" className="hover:text-cream transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
