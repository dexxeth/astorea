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
    },
    {
        id: 2,
        name: "Rohan Khanna",
        role: "Senior Contractor, BuildCorp",
        text: "The workability of the AstoreaFix Ultra is unmatched. It holds heavy tiles instantly without sagging, which saves us hours of labor on site.",
    },
    {
        id: 3,
        name: "Priya Singh",
        role: "Interior Designer, LuxeSpaces",
        text: "The Golden Sparkle epoxy grout added that perfect touch of understated luxury to my client's master bath. It's not just functional; it's a design element.",
    },
    {
        id: 4,
        name: "Vikram Malhotra",
        role: "Developer, SkyHigh Towers",
        text: "We switched to Astorea for our latest commercial tower in Gurgaon. Their technical support and on-site training for our team made a huge difference.",
    }
];

export default function Testimonials() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth / 2);
        }
    }, []);

    const loopTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 w-screen bg-[#F5F5F7] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-125 h-125 bg-brand-teal/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] left-[10%] w-100 h-100 bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-screen relative z-10">
                <div className="text-center mb-16 px-6">
                    <h2 className="text-brand-orange text-sm font-black tracking-[0.3em] uppercase mb-4">Trusted By Professionals</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight">
                        Voices from the <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-500 via-gray-600 to-gray-700">Industry</span>
                    </h3>
                </div>

                <div className="overflow-hidden">
                    <motion.div ref={carouselRef} className="overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: [0, -width] }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        >
                            {loopTestimonials.map((t, index) => (
                                <motion.div
                                    key={`${t.id}-${index}`}
                                    className="min-w-[78vw] md:min-w-112.5 p-6 md:p-12 rounded-3xl bg-linear-to-r from-gray-500 via-gray-600 to-gray-700 border border-white/10 relative group overflow-hidden"
                                >
                                    {/* Quote Icon */}
                                    <div className="text-brand-orange mb-6">
                                        <Quote size={56} />
                                    </div>

                                    <p className="text-gray-200 text-lg leading-relaxed mb-10 font-light">
                                        "{t.text}"
                                    </p>

                                    <div>
                                        <h4 className="text-white font-bold text-lg">{t.name}</h4>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{t.role}</p>
                                    </div>

                                    {/* Subtle Gradient Glow on Hover */}
                                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
