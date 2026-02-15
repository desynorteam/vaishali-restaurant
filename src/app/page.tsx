import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="w-[1px] bg-gradient-to-b from-transparent via-sage to-transparent h-24 mb-12" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-sage font-bold mb-12">
              Established 1954
            </p>
            <h1 className="text-5xl md:text-8xl font-display text-forest leading-tight mb-12 serif-title">
              Pune’s Iconic South Indian Restaurant{" "}
              <span className="italic font-normal">Since 1954</span>
            </h1>
            <p className="text-lg text-forest/60 max-w-2xl font-light leading-relaxed mb-16">
              A legacy woven through generations, serving the authentic soul of
              South India in the heart of Pune's greenery.
            </p>
            <Button size="xl">Begin the Experience</Button>
          </div>
        </div>
      </section>

      {/* Legacy Story Section */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <div className="bg-white border border-sage/20 shadow-xl shadow-forest/5 p-8 md:p-16 rounded-sm flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-1/2 overflow-hidden aspect-square rounded-sm relative">
              <Image
                src="https://images.unsplash.com/photo-1590001158193-790dc249aa3d?q=80&w=1200&auto=format&fit=crop"
                alt="Heritage Courtyard"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-bold">
                The Legacy Story
              </span>
              <h2 className="text-4xl font-display italic text-forest serif-title">
                A Garden Sanctuary
              </h2>
              <p className="text-base text-forest/70 leading-relaxed font-light">
                What began as a modest coffee house on FC Road has blossomed
                into a cultural landmark. Our story is not just about the food,
                but the millions of memories shared under our canopy for over
                seven decades.
              </p>
              <Link
                href="/history"
                className="inline-flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold group"
              >
                Our History{" "}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full md:w-7/12 aspect-[16/10] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop"
                alt="Mysore Special Masala Dosa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="w-full md:w-5/12 py-8 border-l border-sage/20 pl-8 lg:pl-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-bold mb-8 block">
                Signature Dish
              </span>
              <h3 className="text-4xl font-display text-forest mb-8 serif-title">
                Mysore Special Masala Dosa
              </h3>
              <p className="text-base text-forest/60 leading-relaxed font-light">
                Our hallmark creation. A crisp, golden-brown rice crepe coated
                with our secret spicy chutney and filled with perfectly tempered
                mashed potatoes. Served with tradition.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24 items-center">
            <div className="w-full md:w-7/12 aspect-[16/10] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1594910413528-9430d4a70420?q=80&w=1200&auto=format&fit=crop"
                alt="Vaishali Filter Coffee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="w-full md:w-5/12 py-8 border-r border-sage/20 pr-8 lg:pr-16 text-right">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sage font-bold mb-8 block">
                The Ritual
              </span>
              <h3 className="text-4xl font-display text-forest mb-8 serif-title">
                Pure Filter Coffee
              </h3>
              <p className="text-base text-forest/60 leading-relaxed font-light">
                Sourced from the estates of Chikmagalur, our coffee is slow-dripped
                and frothed with fresh milk to achieve that perfect head of foam.
                A ritual unchanged since 1954.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taste the Heritage CTA */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 text-center">
        <div className="w-[1px] bg-gradient-to-b from-transparent via-sage to-transparent h-24 mx-auto mb-12" />
        <h2 className="text-4xl font-display text-forest mb-8 serif-title">
          Taste the Heritage
        </h2>
        <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-16">
          Full Menu Experience
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/menu">
            <Button variant="outline" className="w-full sm:w-auto">View Main Menu</Button>
          </Link>
          <Link href="/menu">
            <Button variant="secondary" className="w-full sm:w-auto border border-sage">Garden Specials</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
