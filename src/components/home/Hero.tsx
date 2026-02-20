"use client";

import React from "react";
import { ArrowRight, Play, ShoppingBag } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f4f7fa] dark:bg-[#0f1115]">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-sky px-4 py-2 rounded-full mb-8 animate-fade-in">
                            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">New Collection 2026</span>
                        </div>

                        <h1 className="font-display font-black text-6xl md:text-8xl text-brand-charcoal dark:text-white leading-[0.95] mb-8 tracking-tighter">
                            ELEVATE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-sky">
                                STREETWEAR
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-brand-charcoal/60 dark:text-white/60 mb-10 max-w-lg leading-relaxed font-medium">
                            Premium Nigerian-made footwear, denim, and tops. Designed for the urban gentleman who demands excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <button className="w-full sm:w-auto bg-brand-charcoal dark:bg-white text-white dark:text-brand-charcoal px-8 py-5 rounded-2xl font-black text-sm tracking-[0.1em] hover:bg-brand-blue dark:hover:bg-brand-sky transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/30 flex items-center justify-center space-x-3">
                                <ShoppingBag className="w-5 h-5" />
                                <span>SHOP COLLECTION</span>
                            </button>

                            <button className="w-full sm:w-auto flex items-center justify-center space-x-3 group px-8 py-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-charcoal/10 dark:border-white/10 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all">
                                    <Play className="w-4 h-4 fill-brand-charcoal dark:fill-white group-hover:fill-white transition-all ml-1" />
                                </div>
                                <span className="font-bold text-sm tracking-widest text-brand-charcoal dark:text-white">WATCH FILM</span>
                            </button>
                        </div>

                        <div className="mt-16 flex items-center space-x-10 opacity-40 dark:opacity-20">
                            <div className="text-center">
                                <p className="text-2xl font-black">2.5k+</p>
                                <p className="text-[10px] font-bold tracking-widest uppercase">Verified Sales</p>
                            </div>
                            <div className="w-px h-10 bg-brand-charcoal dark:bg-white"></div>
                            <div className="text-center">
                                <p className="text-2xl font-black">98%</p>
                                <p className="text-[10px] font-bold tracking-widest uppercase">Positive Feedback</p>
                            </div>
                        </div>
                    </div>

                    {/* Image / Visual Side */}
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-brand-blue to-brand-charcoal rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60"></div>

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <p className="text-white/40 font-display font-black text-10xl leading-none select-none">PNP</p>
                                </div>
                            </div>

                            {/* Float Cards */}
                            <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-brand-charcoal/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-brand-charcoal/40 dark:text-white/40 uppercase tracking-widest">Growth</p>
                                    <p className="text-sm font-black text-brand-charcoal dark:text-white">+120% Style</p>
                                </div>
                            </div>
                        </div>

                        {/* Outline Text Background */}
                        <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-5 dark:opacity-10">
                            <p className="text-[15rem] font-display font-black leading-none text-transparent border-text stroke-white">STYLE</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 2px currentColor;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;
