import PageLayout from "@/components/layout/PageLayout";

const HistoryPage = () => {
    return (
        <PageLayout>
            {/* Fixed Sidebar Navigation - Visible on Desktop */}
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-10">
                {[
                    { label: "Bailur 1932", id: "origins" },
                    { label: "Pune 1949", id: "pune" },
                    { label: "Evolution", id: "evolution" },
                ].map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex items-center justify-center cursor-pointer"
                    >
                        <span className="w-1.5 h-10 bg-primary-green/20 rounded-full group-hover:bg-primary-green transition-all"></span>
                        <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-all text-[10px] font-bold tracking-widest uppercase text-primary-green whitespace-nowrap">
                            {item.label}
                        </span>
                    </div>
                ))}
            </nav>

            <main className="bg-gradient-to-b from-cream to-mint font-sans">
                {/* Dynamic Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1590053141666-998f4dc799a4?q=80&w=1200&auto=format&fit=crop"
                            alt="Heritage facade texture"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/80 to-cream"></div>
                        <div className="absolute top-40 right-[10%] opacity-20 rotate-12">
                            <span className="material-symbols-outlined text-[120px] text-primary-green">
                                eco
                            </span>
                        </div>
                        <div className="absolute bottom-40 left-[5%] opacity-10 -rotate-45">
                            <span className="material-symbols-outlined text-[200px] text-muted-blue">
                                potted_plant
                            </span>
                        </div>
                    </div>
                    <div className="relative z-10 text-center max-w-4xl px-6">
                        <div className="flex justify-center mb-6">
                            <span className="bg-peach/30 text-primary-green px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border border-peach">
                                Established mid-20th century
                            </span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl mb-8 text-stone-900 leading-[1.1]">
                            The Vaishali <br />
                            <span className="italic font-light text-muted-blue">
                                Legacy Story
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-blue max-w-2xl mx-auto font-light leading-relaxed">
                            A journey of perseverance, passion, and the flavors that defined a
                            city since the mid-20th century.
                        </p>
                        <div className="mt-16 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-green/40">
                                Scroll to explore history
                            </span>
                            <span className="material-symbols-outlined text-primary-green animate-bounce">
                                keyboard_double_arrow_down
                            </span>
                        </div>
                    </div>
                </section>

                {/* Timeline Narrative */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-primary-green via-sage to-transparent hidden md:block rounded-full"></div>

                    <div className="max-w-7xl mx-auto px-6 space-y-40">
                        {/* 1932-1945 */}
                        <div id="origins" className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
                            <div className="md:w-1/2 md:pr-24 text-right hidden md:block">
                                <span className="font-serif text-7xl font-black text-peach/40 absolute right-[50%] -translate-y-16">
                                    1932-1945
                                </span>
                                <h3 className="font-serif text-4xl mb-6 text-stone-800">
                                    The Humble Roots
                                </h3>
                                <p className="text-muted-blue leading-relaxed font-light">
                                    Born in Bailur, Shri Jagannath B. Shetty began his journey at
                                    age 13, earning just Rs. 3 per month while learning the ropes
                                    of hospitality.
                                </p>
                            </div>
                            <div className="z-10 w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-cream shadow-lg ring-[12px] ring-cream border-2 border-sage">
                                <span className="material-symbols-outlined text-lg">home</span>
                            </div>
                            <div className="md:w-1/2 md:pl-24">
                                <div className="block md:hidden mb-6">
                                    <span className="text-primary-green font-bold">1932-1945</span>
                                    <h3 className="font-serif text-3xl mb-2">The Humble Roots</h3>
                                    <p className="text-muted-blue">
                                        Born in Bailur, Shri Jagannath B. Shetty began his journey at
                                        age 13, learning the ropes of hospitality.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-3xl shadow-xl shadow-sage/10 transform hover:scale-[1.02] transition-transform">
                                    <img
                                        alt="Heritage Architecture Facade"
                                        className="w-full h-80 object-cover rounded-2xl grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
                                        src="https://images.unsplash.com/photo-1582234053648-735990262193?q=80&w=800&auto=format&fit=crop"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 1949 */}
                        <div id="pune" className="relative flex flex-col md:flex-row-reverse items-center gap-12 md:gap-0">
                            <div className="md:w-1/2 md:pl-24 text-left hidden md:block">
                                <span className="font-serif text-8xl font-black text-sage/30 absolute left-[50%] -translate-y-16">
                                    1949
                                </span>
                                <h3 className="font-serif text-4xl mb-6 text-primary-green italic">
                                    Arrival in Pune
                                </h3>
                                <p className="text-muted-blue leading-relaxed font-light">
                                    At age 17, Jagannath moved to Pune, working 19-hour days to
                                    master the craft that would later give birth to Café Madras
                                    and Madras Health Home.
                                </p>
                                <div className="mt-6 flex items-center gap-3 text-primary-green font-bold text-[10px] uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">
                                        filter_vintage
                                    </span>
                                    <span>The Seeds of Café Madras & Madras Health Home</span>
                                </div>
                            </div>
                            <div className="z-10 w-10 h-10 rounded-full bg-muted-blue flex items-center justify-center text-cream shadow-lg ring-[12px] ring-cream border-2 border-peach">
                                <span className="material-symbols-outlined text-lg">
                                    restaurant
                                </span>
                            </div>
                            <div className="md:w-1/2 md:pr-24">
                                <div className="block md:hidden mb-6">
                                    <span className="text-primary-green font-bold">1949</span>
                                    <h3 className="font-serif text-3xl mb-2 italic">
                                        Arrival in Pune
                                    </h3>
                                    <p className="text-muted-blue">
                                        Jagannath moved to Pune, working 19-hour days to master the
                                        craft that defined his future.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-3xl shadow-xl shadow-peach/20 -rotate-2 hover:rotate-0 transition-transform">
                                    <img
                                        alt="Mid-century Heritage Interior"
                                        className="w-full h-80 object-cover rounded-2xl"
                                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Evolution */}
                        <div id="evolution" className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
                            <div className="md:w-1/2 md:pr-24 text-right hidden md:block">
                                <span className="font-serif text-7xl font-black text-muted-blue/10 absolute right-[50%] -translate-y-16">
                                    The Evolution
                                </span>
                                <h3 className="font-serif text-4xl mb-6 text-stone-800">
                                    A Landmark Emerges
                                </h3>
                                <p className="text-muted-blue leading-relaxed font-light">
                                    Madras Health Home transformed into the iconic Vaishali on FC
                                    Road, becoming a social hub for Fergusson and BMCC students.
                                </p>
                            </div>
                            <div className="z-10 w-10 h-10 rounded-full bg-peach flex items-center justify-center text-primary-green shadow-lg ring-[12px] ring-cream border-2 border-primary-green">
                                <span className="material-symbols-outlined text-lg">
                                    history_edu
                                </span>
                            </div>
                            <div className="md:w-1/2 md:pl-24">
                                <div className="block md:hidden mb-6">
                                    <span className="text-primary-green font-bold">
                                        The Evolution
                                    </span>
                                    <h3 className="font-serif text-3xl mb-2">
                                        A Landmark Emerges
                                    </h3>
                                    <p className="text-muted-blue">
                                        Transforming into the iconic Vaishali on FC Road, a sanctuary
                                        for students and families alike.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-3xl shadow-xl shadow-sage/20 rotate-1 hover:rotate-0 transition-transform">
                                    <img
                                        alt="Heritage Dining Setup"
                                        className="w-full h-80 object-cover rounded-2xl"
                                        src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Narrative Sections */}
                <section className="py-32 relative bg-primary-green/5">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                        <span className="material-symbols-outlined absolute top-20 left-10 text-[300px]">
                            coffee
                        </span>
                        <span className="material-symbols-outlined absolute bottom-20 right-10 text-[300px]">
                            golf_course
                        </span>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div>
                                    <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block border-l-2 border-primary-green pl-4">
                                        Culinary Adaptation
                                    </span>
                                    <h2 className="font-serif text-5xl mb-6 text-stone-900 leading-tight">
                                        The Puneri <span className="text-muted-blue italic font-light text-4xl">Twist</span>
                                    </h2>
                                    <p className="text-lg text-muted-blue font-light leading-relaxed">
                                        Shri Jagannath Shetty understood his patrons deeply. He
                                        refined the classic Sambar and Filter Coffee, infusing them
                                        with a local profile that resonated with Pune's unique
                                        palate, turning a South Indian staple into a city-wide
                                        obsession.
                                    </p>
                                </div>
                                <div>
                                    <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block border-l-2 border-primary-green pl-4">
                                        A Life Well Lived
                                    </span>
                                    <h2 className="font-serif text-5xl mb-6 text-stone-900 leading-tight">
                                        Beyond the <span className="text-muted-blue italic font-light text-4xl">Kitchen</span>
                                    </h2>
                                    <p className="text-lg text-muted-blue font-light leading-relaxed mb-6">
                                        His impact reached far beyond hospitality. A recipient of
                                        the prestigious 'Punya Bhushan Puraskar' in 2000, he was a
                                        dedicated social servant and an avid golfer, founding the
                                        cherished Vaishali Cup.
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary-green">
                                                military_tech
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                                Punya Bhushan 2000
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary-green">
                                                sports_golf
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                                Vaishali Cup
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 relative">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-peach rounded-full opacity-20 blur-3xl"></div>
                                <div className="space-y-6 pt-16">
                                    <div className="relative group">
                                        <img
                                            alt="Fine Heritage Detail"
                                            className="rounded-3xl w-full h-72 object-cover shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
                                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
                                        />
                                    </div>
                                    <img
                                        alt="Colonial Building"
                                        className="rounded-3xl w-full h-80 object-cover shadow-lg"
                                        src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <img
                                        alt="Grand Heritage Garden"
                                        className="rounded-3xl w-full h-96 object-cover shadow-2xl"
                                        src="https://images.unsplash.com/photo-1558449101-de8a63503f57?q=80&w=800&auto=format&fit=crop"
                                    />
                                    <div className="relative group">
                                        <img
                                            alt="Brass and Silverware"
                                            className="rounded-3xl w-full h-56 object-cover shadow-lg group-hover:scale-105 transition-transform"
                                            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-cream/90 text-primary-green text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                                                AUTHENTIC FILTER COFFEE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Continuation Section */}
                <section className="py-32 text-center bg-mint">
                    <div className="max-w-4xl mx-auto px-6">
                        <span className="text-muted-blue font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
                            The Legacy Continues
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl mb-12 italic text-stone-800">
                            Carrying the Torch
                        </h2>
                        <div className="relative group cursor-pointer overflow-hidden rounded-[40px] mb-16 shadow-2xl">
                            <img
                                alt="Grand Colonial Dining Hall"
                                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-primary-green/20 to-transparent flex flex-col justify-end p-16 text-left">
                                <span className="material-symbols-outlined text-cream/40 text-6xl mb-4">
                                    format_quote
                                </span>
                                <p className="text-cream text-2xl md:text-3xl font-light italic leading-snug max-w-2xl">
                                    "While our founder Shri Jagannath Shetty passed in Dec 2021,
                                    his spirit remains in every rustle of the garden leaves and
                                    every greeting at our door."
                                </p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-0.5 bg-peach"></div>
                                    <span className="text-cream font-bold tracking-widest text-xs uppercase">
                                        Under the stewardship of the Shetty family
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="p-4 group text-center">
                                <div className="w-16 h-16 bg-sage/20 rounded-2xl flex items-center justify-center text-primary-green mb-6 mx-auto group-hover:bg-primary-green group-hover:text-cream transition-colors">
                                    <span className="material-symbols-outlined">menu_book</span>
                                </div>
                                <h4 className="font-serif text-xl mb-3 text-stone-800">Original Recipes</h4>
                                <p className="text-sm text-muted-blue font-light">
                                    Maintaining the gold standard of flavors set by our founder
                                    over 70 years ago.
                                </p>
                            </div>
                            <div className="p-4 group text-center">
                                <div className="w-16 h-16 bg-peach/20 rounded-2xl flex items-center justify-center text-primary-green mb-6 mx-auto group-hover:bg-primary-green group-hover:text-cream transition-colors">
                                    <span className="material-symbols-outlined">diversity_1</span>
                                </div>
                                <h4 className="font-serif text-xl mb-3 text-stone-800">Community First</h4>
                                <p className="text-sm text-muted-blue font-light">
                                    Continuing the tradition of social service and supporting
                                    local Puneri culture.
                                </p>
                            </div>
                            <div className="p-4 group text-center">
                                <div className="w-16 h-16 bg-muted-blue/20 rounded-2xl flex items-center justify-center text-primary-green mb-6 mx-auto group-hover:bg-primary-green group-hover:text-cream transition-colors">
                                    <span className="material-symbols-outlined">nature_people</span>
                                </div>
                                <h4 className="font-serif text-xl mb-3 text-stone-800">The Garden Soul</h4>
                                <p className="text-sm text-muted-blue font-light">
                                    Preserving the botanical oasis that has seen generations of
                                    families grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden bg-primary-green">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-peach rounded-full blur-[100px]"></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <div className="mb-10 inline-flex items-center gap-2 text-peach font-bold text-[10px] tracking-[0.4em] uppercase">
                            <span className="w-8 h-px bg-peach"></span>
                            Experience the Legacy
                            <span className="w-8 h-px bg-peach"></span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl mb-10 text-cream leading-tight">
                            Begin Your Own <br />
                            <span className="italic text-peach font-light">Chapter</span>
                        </h2>
                        <p className="text-lg text-sage mb-14 max-w-xl mx-auto font-light">
                            The aroma of fresh filter coffee and the whispers of history await
                            you in our garden.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-peach hover:bg-cream text-primary-green px-12 py-5 rounded-full text-[11px] font-black tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-4 group uppercase">
                                Reserve Your Table
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                    eco
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </PageLayout>
    );
};

export default HistoryPage;
