"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        name: "Footwear",
        tagline: "Sneakers & Mules",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
        href: "/category/footwear",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        name: "Denim",
        tagline: "Raw & Distressed",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
        href: "/category/denim",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        name: "Tops",
        tagline: "Essential Wear",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
        href: "/category/tops",
        span: "md:col-span-1 md:row-span-1",
    },
];

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-white dark:bg-brand-charcoal overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-display font-black text-4xl md:text-5xl text-brand-charcoal dark:text-white mb-4 tracking-tight uppercase">
                            Curated <span className="text-brand-blue">Essentials</span>
                        </h2>
                        <p className="text-brand-charcoal/50 dark:text-white/50 font-medium">
                            Explore our hand-picked collections, meticulously crafted for style, comfort, and Nigerian urban culture.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="group flex items-center space-x-2 text-sm font-black tracking-widest text-brand-blue uppercase hover:text-brand-sky transition-colors"
                    >
                        <span>View All Collections</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[700px]">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-gray-800 transition-all hover:shadow-2xl hover:shadow-brand-blue/20 ${cat.span}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${cat.image}')` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <p className="text-brand-sky text-xs font-black tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {cat.tagline}
                                </p>
                                <h3 className="text-white font-display font-black text-3xl md:text-4xl tracking-tighter mb-4 leading-none">
                                    {cat.name}
                                </h3>

                                <div className="flex items-center space-x-3 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 text-white font-bold text-xs tracking-widest">
                                    <span>DISCOVER NOW</span>
                                    <div className="w-8 h-[2px] bg-brand-sky"></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
