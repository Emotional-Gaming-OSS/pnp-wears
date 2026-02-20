"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, MessageCircle, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-charcoal text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Col */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-8 group">
                            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-xl tracking-tighter">PnP</span>
                            </div>
                            <span className="font-display font-black text-2xl tracking-tight">WEARS</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-8">
                            Premium handcrafted footwear, luxury denim, and elevated essentials. Redefining Nigerian urban fashion since 2026.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-8 tracking-tight uppercase">Collections</h4>
                        <ul className="space-y-4">
                            <li><Link href="/category/footwear" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Footwear</Link></li>
                            <li><Link href="/category/denim" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Denim Specialists</Link></li>
                            <li><Link href="/category/tops" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Premium Tops</Link></li>
                            <li><Link href="/shop" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-8 tracking-tight uppercase">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Our Story</Link></li>
                            <li><Link href="/shipping" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Shipping & Delivery</Link></li>
                            <li><Link href="/returns" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Returns & Exchanges</Link></li>
                            <li><Link href="/contact" className="text-white/50 hover:text-brand-sky transition-colors text-sm font-medium">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Col */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-8 tracking-tight uppercase">Newsletter</h4>
                        <p className="text-white/50 text-sm mb-6">Join our elite circle for early access to drops and exclusive offers.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                            />
                            <button className="absolute right-2 top-2 w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center hover:bg-brand-sky hover:text-brand-charcoal transition-all">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                        &copy; 2026 PnP WEARS. ALL RIGHTS RESERVED. HANDCRAFTED IN NIGERIA.
                    </p>
                    <div className="flex items-center space-x-8 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
