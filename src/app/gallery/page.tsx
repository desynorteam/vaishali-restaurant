"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";

const categories = ["All Stories", "Ambiance", "Heritage", "Cuisine"];

const galleryItems = [
    {
        category: "Heritage",
        title: "The Original Facade, 1954",
        image: "https://images.unsplash.com/photo-1582234053648-735990262193?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        grayscale: true,
    },
    {
        category: "Cuisine",
        title: "The Signature Mysore Dosa",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-square",
        mt: "md:mt-16",
    },
    {
        category: "Ambiance",
        title: "Morning Rituals at the Courtyard",
        image: "https://images.unsplash.com/photo-1590053141666-998f4dc799a4?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
    },
    {
        category: "Cuisine",
        title: "The Art of Filter Coffee",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-square",
        mt: "md:-mt-8",
    },
    {
        category: "Heritage",
        title: "Archival Heritage Collections",
        image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        grayscale: true,
    },
    {
        category: "Ambiance",
        title: "Atmospheric Greenery",
        image: "https://images.unsplash.com/photo-1558449101-de8a63503f57?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-square",
        mt: "md:mt-8",
    },
];

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState("All Stories");

    const filteredItems = galleryItems.filter(
        (item) => activeTab === "All Stories" || item.category === activeTab
    );

    return (
        <PageLayout>
            <header className="px-6 sm:px-12 lg:px-24 pt-16 pb-8 flex flex-col items-center text-center">
                <div className="w-[1px] bg-gradient-to-b from-transparent via-sage to-transparent h-24 mb-12" />
                <p className="text-[10px] uppercase tracking-[0.5em] text-sage font-bold mb-8">
                    The Visual Narrative
                </p>
                <h1 className="text-6xl md:text-8xl font-display text-forest leading-tight mb-12 serif-title">
                    A Visual <span className="italic font-normal">Legacy</span>
                </h1>
                <p className="text-lg text-forest/60 max-w-2xl font-light leading-relaxed mb-16">
                    A curated journey through the moments, flavors, and architecture that
                    have defined our sanctuary for seven decades.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-8 border-b border-sage/20 pb-4">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all pb-2 ${activeTab === tab
                                ? "text-forest border-b-2 border-forest"
                                : "text-forest/40 hover:text-sage"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className={`gallery-card group relative overflow-hidden rounded-xl shadow-xl shadow-forest/5 transition-transform duration-700 hover:-translate-y-2 ${item.mt || ""
                                }`}
                        >
                            <div className={`${item.aspect} bg-gray-100 relative overflow-hidden`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={`object-cover transition-all duration-1000 group-hover:scale-105 ${item.grayscale ? "grayscale group-hover:grayscale-0" : ""
                                        }`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-ivory text-[10px] uppercase tracking-[0.2em] font-medium">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </PageLayout>
    );
};

export default GalleryPage;
