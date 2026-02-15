import PageLayout from "@/components/layout/PageLayout";

const menuCategories = [
    "Classics",
    "Street Food",
    "Fast Food",
    "Beverages",
];

interface MenuItem {
    name: string;
    price: string;
    description: string;
    image?: string;
    tag?: string;
    popular?: boolean;
}

interface MenuSection {
    category: string;
    items: MenuItem[];
}

const menuItems: MenuSection[] = [
    {
        category: "Classics",
        items: [
            {
                name: "Mysore Masala Dosa",
                price: "195",
                description: "Crispy dosa with a generous spread of spicy Mysore chutney and our signature potato masala.",
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop",
                tag: "Classic Choice",
            },
            {
                name: "Cheese Sada Dosa",
                price: "210",
                description: "Golden crisp plain dosa layered with Mysore spice mix and melted cheese.",
                image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Special Masala Dosa",
                price: "225",
                description: "Our house-special dosa crafted with a secret blend of spices and rich vegetable filling.",
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        category: "Street Food",
        items: [
            {
                name: "SPDP Legacy",
                price: "120",
                description: "The legendary Pune favorite. Crisp puris filled with potatoes, topped with sweet dahi and fine sev.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
                popular: true,
            },
            {
                name: "Sev Potato Puri",
                price: "100",
                description: "Crunchy flat puris topped with spiced potatoes, tangy chutneys, and a mountain of golden sev.",
                image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Special Bhelpuri",
                price: "95",
                description: "A perfectly balanced mix of puffed rice, vegetables, and our signature tangy tamarind chutney.",
                image: "https://media.istockphoto.com/id/1437266802/photo/bhel-puri-indian-street-food.jpg?s=612x612&w=0&k=20&c=gZ8771FwzP0uzJjvln81k4aoAwQ8CPUyo5gLLHefL2o=",
            },
        ],
    },
    {
        category: "Fast Food",
        items: [
            {
                name: "Veg Cutlet",
                price: "110",
                description: "Hearty vegetable patties, spiced and golden-fried to perfection. A tea-time favorite.",
                image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800&auto=format&fit=crop",
                popular: true,
            },
            {
                name: "Cheese Veg Burger",
                price: "145",
                description: "Freshly baked bun with a crisp veg patty, melting cheese, and our signature herb sauce.",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Veg Cheese Pizza",
                price: "240",
                description: "Thin crust topped with fresh farm vegetables and a generous layer of premium mozzarella.",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
            },
        ],
    },
    {
        category: "Beverages",
        items: [
            {
                name: "Iconic Filter Coffee",
                price: "70",
                description: "The soul of Vaishali, brewed with freshly roasted beans and served traditionally.",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
                tag: "Since 1951",
            },
            {
                name: "Kokum Sharbat",
                price: "85",
                description: "Traditional cooling drink made from handpicked Kokum berries. Perfect for the sun.",
                image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=800&auto=format&fit=crop",
            },
            {
                name: "Mango Shake",
                price: "160",
                description: "Thick and creamy shake made with luscious Alphonso mangoes, celebrating the season's best.",
                image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
];

const MenuPage = () => {
    return (
        <PageLayout>
            <main className="max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 relative z-10">
                <section className="mb-24 text-center">
                    <h1 className="text-6xl md:text-9xl mb-10 text-forest italic leading-[0.9] tracking-tighter serif-title">
                        Authentic Heritage Menu
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-forest/70 font-light leading-relaxed">
                        A diverse spread of beloved South Indian classics, crafted with
                        signature masalas that Punekars have enjoyed for generations.
                    </p>
                </section>

                {/* Categorized Sticky Nav */}
                <div className="sticky top-[80px] z-40 bg-ivory/95 backdrop-blur-md py-6 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-sage/20 mb-24">
                    <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar scrollbar-hide">
                        {menuCategories.map((category) => (
                            <button
                                key={category}
                                className="text-[10px] font-bold tracking-[0.2em] text-forest/40 hover:text-forest transition-colors uppercase whitespace-nowrap"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-sage/60 text-lg">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Search flavors..."
                            className="pl-8 pr-4 py-2 bg-transparent border-0 border-b border-sage/20 focus:ring-0 focus:border-sage transition-all text-[10px] tracking-widest uppercase placeholder:text-forest/20 min-w-[240px]"
                        />
                    </div>
                </div>

                {/* Menu Sections */}
                <div className="space-y-40">
                    {menuItems.map((section) => (
                        <section key={section.category} id={section.category.toLowerCase().replace(" ", "-")}>
                            <div className="flex flex-col items-center text-center mb-16">
                                <span className="text-sage text-sm font-display italic mb-4 serif-title">
                                    {section.category === "Classics" ? "Established Excellence" :
                                        section.category === "Street Food" ? "The Puneri Twist" :
                                            section.category === "Fast Food" ? "Quick Bites" :
                                                "Artisanal Brews"}
                                </span>
                                <h2 className="text-5xl md:text-7xl text-forest italic tracking-tight mb-2 serif-title">
                                    {section.category}
                                </h2>
                                <div className="w-12 h-[1px] bg-sage mt-6"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-white border border-sage/10 rounded-3xl overflow-hidden flex flex-col group hover:shadow-2xl hover:border-sage transition-all duration-500"
                                    >
                                        {item.image && (
                                            <div className="p-4">
                                                <div className="relative rounded-[3rem_1rem_3rem_1rem] overflow-hidden aspect-[4/5] bg-sage/5">
                                                    {item.tag && (
                                                        <div className="absolute top-6 left-6 z-10">
                                                            <span className="bg-gold text-ivory text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                                                                {item.tag}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="p-8 pt-4 flex-1 flex flex-col">
                                            <div className="flex justify-between items-baseline mb-4">
                                                <h3 className="text-3xl text-forest tracking-tight serif-title">
                                                    {item.name}
                                                </h3>
                                                <span className="text-sm font-display italic text-sage serif-title">
                                                    ₹{item.price}
                                                </span>
                                            </div>
                                            <p className="text-[13px] text-forest/60 font-light leading-relaxed mb-8">
                                                {item.description}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-sage/10 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-xs text-sage">
                                                        {section.category === "Beverages" ? "local_cafe" : "restaurant"}
                                                    </span>
                                                    <span className="text-[8px] font-bold tracking-[0.2em] text-forest/40 uppercase">
                                                        {item.popular ? "Most Popular" : "Authentic"}
                                                    </span>
                                                </div>
                                                <button className="flex items-center gap-2 group/btn">
                                                    <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-forest/60 group-hover/btn:text-sage transition-colors">
                                                        Select
                                                    </span>
                                                    <span className="material-symbols-outlined text-sm text-sage group-hover/btn:translate-x-1 transition-transform">
                                                        arrow_forward
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </PageLayout>
    );
};

export default MenuPage;
