"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="absolute top-0 left-0 w-full z-50 py-8 transition-all duration-300 bg-linear-to-b from-navy-900/90 to-transparent backdrop-blur-[1px]"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group mr-auto">
                    <div className="relative w-60 h-20">
                        <Image
                            src="/logo.png"
                            alt="ASTOREA"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: "home", href: "/" },
                        { name: "about", href: "#about" },
                        { name: "product", href: "#products" },
                        { name: "contact", href: "#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-white/90 hover:text-white font-medium text-sm tracking-[0.15em] lowercase group/link transition-colors"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-teal transition-all duration-300 group-hover/link:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle (CTA Removed) */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-white hover:text-brand-teal transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About Us", href: "#about" },
                        { name: "Product", href: "#products" },
                        { name: "Contact", href: "#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/90 text-lg font-light tracking-wide"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
