"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import Logo from "@/components/common/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Footwear", href: "/category/footwear" },
    { name: "Denim", href: "/category/denim" },
    { name: "Tops", href: "/category/tops" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-brand-charcoal/80 backdrop-blur-lg py-3 shadow-sm border-b border-white/10"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-brand-blue p-2 px-3.5 rounded flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-blue/30">
            <Logo size={24} textColor="white" arrowColor="black" />
          </div>
          <span className="font-display font-black text-2xl tracking-tight text-brand-charcoal dark:text-white group-hover:text-brand-blue transition-colors">
            WEARS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-sm text-brand-charcoal/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-sky transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="p-2 hover:bg-brand-blue/10 rounded-full transition-colors group">
            <Search className="w-5 h-5 text-brand-charcoal dark:text-white group-hover:text-brand-blue" />
          </button>
          <button className="p-2 hover:bg-brand-blue/10 rounded-full transition-colors group relative">
            <ShoppingBag className="w-5 h-5 text-brand-charcoal dark:text-white group-hover:text-brand-blue" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-blue rounded-full border-2 border-white dark:border-brand-charcoal"></span>
          </button>
          <button className="flex items-center space-x-2 bg-brand-charcoal dark:bg-white text-white dark:text-brand-charcoal px-5 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-brand-blue dark:hover:bg-brand-sky transition-all hover:shadow-lg hover:shadow-brand-blue/20">
            <User className="w-3.5 h-3.5" />
            <span>LOGIN</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-charcoal dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-brand-charcoal border-t border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100 border-b shadow-xl" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-brand-charcoal dark:text-white hover:text-brand-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t flex items-center space-x-4">
            <button className="flex-1 bg-brand-blue text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>MY CART</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
