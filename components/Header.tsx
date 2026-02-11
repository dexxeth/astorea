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
        <>
            {/* Background Blur Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <header
                className={clsx(
                    "fixed top-0 left-0 w-full z-50 py-1 md:py-1 transition-all duration-600",
                    isScrolled 
                        ? "bg-white shadow-md" 
                        : "bg-linear-to-b from-black/50 to-transparent"
                )}
            >
            <div className="container mx-auto px-4 md:px-10 lg:px-16 flex items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group mr-auto">
                    <div className="relative w-36 h-12 md:w-44 md:h-14">
                        <Image
                            src={isScrolled ? "/logo-dark.png" : "/logo.png"}
                            alt="ASTOREA"
                            fill
                            className="object-contain object-left transition-opacity duration-300"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "#about" },
                        { name: "Product", href: "#products" },
                        { name: "Contact", href: "#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "relative font-medium text-sm tracking-[0.15em] uppercase group/link transition-colors",
                                isScrolled 
                                    ? "text-gray-800 hover:text-black" 
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-teal transition-all duration-300 group-hover/link:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle (CTA Removed) */}
                <div className="flex items-center gap-4">
                    <button
                        className={clsx(
                            "md:hidden transition-colors",
                            isScrolled 
                                ? "text-gray-800 hover:text-black"
                                : "text-white hover:text-brand-teal"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "absolute top-full left-4 right-4 md:hidden font-bold flex flex-col items-center gap-6 mt-4 rounded-3xl bg-black/70 py-8 shadow-2xl backdrop-blur-xl transition-all duration-300",
                    isMobileMenuOpen
                        ? "origin-top scale-y-100 opacity-100"
                        : "origin-bottom scale-y-0 opacity-0 pointer-events-none"
                )}
            >
                {[{
                    name: "Home", href: "/" },
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
        </header>
        </>
    );
}
