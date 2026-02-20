"use client";

import React from "react";
import { Product, generateWhatsAppLink } from "@/lib/products";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group bg-white dark:bg-brand-charcoal/40 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 transition-all hover:shadow-2-xl hover:shadow-brand-blue/10">
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {product.isNew && (
                        <span className="bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                            New Arrival
                        </span>
                    )}
                    {product.isBestSeller && (
                        <span className="bg-brand-sky text-brand-charcoal text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                            Best Seller
                        </span>
                    )}
                </div>

                {/* Quick View / Cart Overlay */}
                <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 translate-y-4 group-hover:translate-y-0 text-center z-20">
                    <h4 className="text-white font-display font-bold text-lg mb-1">{product.name}</h4>
                    <p className="text-white/60 text-xs mb-4 line-clamp-2">{product.description}</p>
                    <a
                        href={generateWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-brand-blue hover:bg-brand-sky text-white hover:text-brand-charcoal py-3 rounded-xl font-black text-xs tracking-widest transition-all flex items-center justify-center space-x-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>ORDER ON WHATSAPP</span>
                    </a>
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-xl font-bold text-xs tracking-widest transition-all">
                        ADD TO CART
                    </button>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">
                            {product.category}
                        </p>
                        <h3 className="text-brand-charcoal dark:text-white font-bold text-lg leading-tight group-hover:text-brand-blue transition-colors">
                            {product.name}
                        </h3>
                    </div>
                    <div className="text-right">
                        <p className="text-brand-charcoal dark:text-white font-black text-lg">
                            ₦{product.price.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
