"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Background Parallax
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Content Fade In
            gsap.from(contentRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5,
            });

            // 2. Staggered Text Reveal
            const tl = gsap.timeline({ delay: 0.5 });

            // Tagline reveal
            tl.from(taglineRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Title lines reveal (using child split logic simulated by animating the h1 directly for now, 
            // ideally would split text but standard fade up works well for this request)
            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8");

            // Description reveal
            tl.from(descRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

            // Buttons reveal
            tl.from(buttonsRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pb-20"
        >
            {/* Background Image with Enhanced Gradient Overlay */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 h-[120%] w-full"
            >
                <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                    alt="Luxury Interior"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Darker, richer overlay for better contrast */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/90" />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                <div className="absolute inset-0 backdrop-blur-xs" />
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-32 flex flex-col items-center md:items-start md:text-left text-center">

                {/* Tagline: Glassmorphism & Wide Spacing */}
                <div
                    ref={taglineRef}
                    className="inline-block px-4 py-2 my-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <h2 className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                        The <span className="text-yellow-500">Gold</span> Standard
                    </h2>
                </div>

                {/* Main Heading: Bold, Tight, Authoritative */}
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9] drop-shadow-lg"
                >
                    Constructing <br />
                    <span>
                        Homes <br className="md:hidden" /> with Pride
                    </span>
                </h1>

                {/* Description: Clean & Legible */}
                <p
                    ref={descRef}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed tracking-wide mix-blend-screen"
                >
                    Premium adhesives, grouts, and epoxy tailored for industrial luxury.
                    Engineered for strength, designed for perfection.
                </p>

                {/* Buttons: Modern & Glass */}
                <div ref={buttonsRef} className="flex flex-col md:flex-row items-center gap-6">
                    <Link
                        href="#products"
                        className="group relative px-8 py-4 bg-white text-navy-900 rounded-full font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span className="relative z-10">Explore Solutions</span>
                        <div className="absolute inset-0 bg-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Solutions</span>
                    </Link>

                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full font-medium text-white transition-all hover:bg-white/20 border border-white/20 backdrop-blur-lg bg-white/5 shadow-lg"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}
