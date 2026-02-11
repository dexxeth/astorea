'use client';

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Arjun Mehta",
        role: "Principal Architect, Studio AM",
        text: "Astorea's adhesives have become our standard specification for high-end residential projects. The consistency and bond strength are exactly what we need for large-format slabs.",
        rating: 5
    },
    {
        id: 2,
        name: "Rohan Khanna",
        role: "Senior Contractor, BuildCorp",
        text: "The workability of the AstoreaFix Ultra is unmatched. It holds heavy tiles instantly without sagging, which saves us hours of labor on site.",
        rating: 5
    },
    {
        id: 3,
        name: "Priya Singh",
        role: "Interior Designer, LuxeSpaces",
        text: "The Golden Sparkle epoxy grout added that perfect touch of understated luxury to my client's master bath. It's not just functional; it's a design element.",
        rating: 5
    },
    {
        id: 4,
        name: "Vikram Malhotra",
        role: "Developer, SkyHigh Towers",
        text: "We switched to Astorea for our latest commercial tower in Gurgaon. Their technical support and on-site training for our team made a huge difference.",
        rating: 4
    }
];

export default function Testimonials() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-125 h-125 bg-brand-teal/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] left-[10%] w-100 h-100 bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-orange text-sm font-bold tracking-[0.3em] uppercase mb-4">Trusted By Professionals</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Voices from the <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500">Industry</span>
                    </h3>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="flex gap-8"
                        >
                            {testimonials.map((t) => (
                                <motion.div
                                    key={t.id}
                                    className="min-w-87.5 md:min-w-112.5 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative group overflow-hidden"
                                    whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Quote Icon */}
                                    <div className="absolute top-8 right-8 text-white/5 group-hover:text-brand-teal/10 transition-colors">
                                        <Quote size={80} />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6 text-brand-orange">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < t.rating ? "currentColor" : "none"}
                                                className={i < t.rating ? "" : "text-gray-700"}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10 font-light">
                                        "{t.text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-brand-teal to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{t.name}</h4>
                                            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{t.role}</p>
                                        </div>
                                    </div>

                                    {/* Subtle Gradient Glow on Hover */}
                                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="mt-8 flex justify-center gap-2">
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                            <span className="w-8 h-px bg-gray-600"></span>
                            Drag to explore
                            <span className="w-8 h-px bg-gray-600"></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
