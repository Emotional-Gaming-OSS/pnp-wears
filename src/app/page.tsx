import React from "react";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.filter(p => !p.isNew); // Just for demo variety

  return (
    <div className="bg-white dark:bg-brand-charcoal">
      {/* Hero Section */}
      <Hero />

      {/* Category Selection */}
      <CategoryGrid />

      {/* Featured Products Section */}
      <section className="py-24 bg-[#f8fafc] dark:bg-brand-charcoal/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <p className="text-brand-blue font-black text-xs tracking-[0.3em] uppercase mb-4 animate-pulse">
                Handpicked for you
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-brand-charcoal dark:text-white leading-tight tracking-tight uppercase">
                Featured <span className="text-brand-blue">Arrivals</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="flex items-center space-x-3 bg-brand-charcoal dark:bg-white text-white dark:text-brand-charcoal px-8 py-4 rounded-2xl font-black text-xs tracking-widest hover:bg-brand-blue dark:hover:bg-brand-sky transition-all hover:scale-105"
            >
              <span>EXPLORE ALL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement / CTA Section */}
      <section className="py-32 relative overflow-hidden bg-brand-blue">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-4xl md:text-7xl text-white mb-10 leading-[0.9] tracking-tighter uppercase">
            REDEFINE YOUR <br />
            URBAN <span className="text-brand-sky">EXCELLENCE</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
            Join thousands of gentlemen who have upgraded their lifestyle with PnP WEARS. Handcrafted quality that speaks for itself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-brand-blue px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-brand-sky hover:text-brand-charcoal transition-all hover:scale-110 shadow-2xl">
              SHOP COLLECTION
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center space-x-3 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest border border-white/20 hover:bg-white/10 transition-all">
              <span>OUR STORY</span>
            </button>
          </div>
        </div>

        {/* Floating Brand Elements */}
        {/* In production, we would use a more robust way to handle the stroke, but for this demo, inline CSS is fine */}
        <div className="absolute -bottom-10 -right-20 pointer-events-none select-none opacity-20">
          <p className="text-[20rem] font-display font-black leading-none text-transparent [text-stroke:2px_white] [-webkit-text-stroke:2px_white]">PNP</p>
        </div>
      </section>
    </div>
  );
}
