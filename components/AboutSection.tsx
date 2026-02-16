"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Award, Factory, Boxes } from "lucide-react";
import about1 from "@/public/images/about/about-1.jpg";
import about2 from "@/public/images/about/about-2.jpg";
import about3 from "@/public/images/about/about-3.jpg";
import about4 from "@/public/images/about/about-4.jpg";
import about5 from "@/public/images/about/about-5.jpg";
import about6 from "@/public/images/about/about-6.jpg";
import about7 from "@/public/images/about/about-7.jpg";
import about8 from "@/public/images/about/about-8.jpg";
import about9 from "@/public/images/about/about-9.jpg";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
    {
        year: "2017",
        title: "Start Trading",
        description: "Founded by Sunil and co-founded by Divesh Batra, Astorea began its journey towards redefining construction standards through excellence in trading.",
        icon: <Boxes size={24} />
    },
    {
        year: "2023",
        title: "Manufacturing Pan India",
        description: "Transitioned to full-scale manufacturing with a state-of-the-art facility pan India, ensuring superior quality control.",
        icon: <Factory size={24} />
    },
    {
        year: "ISO",
        title: "Certified",
        description: "Achieved ISO 9001:2015 certification, validating our commitment to global manufacturing standards and consistent quality.",
        icon: <Award size={24} />
    }
];

const aboutImages = [
    about1.src,
    about2.src,
    about3.src,
    about4.src,
    about5.src,
    about6.src,
    about7.src,
    about8.src,
    about9.src
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const blueprintRef = useRef<HTMLDivElement>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setCurrentImage(0);
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % aboutImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [aboutImages.length]);

    // Parallax effect removed for performance
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    yHero.set("0%"); // Disable parallax for performance, can be re-enabled if needed

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline Animation
            if (timelineRef.current) {
                const items = timelineRef.current.querySelectorAll(".timeline-item");

                items.forEach((item, i) => {
                    gsap.fromTo(item,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });
            }

            // Blueprint Parallax
            if (blueprintRef.current) {
                gsap.to(blueprintRef.current, {
                    y: "15%", // Move down slightly slower than scroll
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-12 md:py-16 bg-[#F5F5F7] overflow-hidden"
        >
            {/* Maximized Width Container */}
            <div className="w-full max-w-450 mx-auto px-4 md:px-8 relative z-10">

                {/* Blueprint Background Parallax */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div
                        ref={blueprintRef}
                        className="absolute inset-0 bg-contain bg-bottom-right bg-no-repeat opacity-45 grayscale mix-blend-multiply"
                        style={{
                            backgroundImage: "url('/blueprint_bg.svg')",
                            backgroundSize: "80%"
                        }}
                    ></div>
                </div>

                {/* About Us Grid Layout - Full Width & Height */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20 lg:min-h-[80vh]">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="px-4 md:px-0 md:pl-4"
                    >
                        <h4 className="text-brand-teal text-center md:text-left text-base font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">About Us</h4>

                        {/* GSAP-style Text Reveal */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-8xl text-center md:text-left font-black text-[#1a1a1a] mb-6 md:mb-10 leading-none tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We are <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-700 via-gray-800 to-gray-900">ASTOREA</span>
                        </motion.h1>

                        <p className="text-gray-600 text-center md:text-left text-base sm:text-lg md:text-2xl leading-relaxed mb-8 md:mb-12 font-light max-w-2xl">
                            Since 2017, we have been engineering superior bonding solutions, transforming from traders to elite manufacturers pan India. We bridge the gap between industrial strength and aesthetic perfection.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer group relative px-10 py-4 bg-[#1a1a1a] text-white text-base font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-2xl"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">Explore Heritage</span>
                            <div className="absolute inset-0 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        className="relative group h-full flex items-center justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {/* Image Placeholder with Chrome Border & Overlay - Taller & Wider */}
                        <div className="relative overflow-hidden w-full max-w-3xl h-auto sm:h-105 md:h-150 lg:h-200 mr-0 ml-auto">
                            {/* Slideshow */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={aboutImages[currentImage]}
                                    initial={{ opacity: 0, x: "20%" }}
                                    animate={{ opacity: 1, x: "0%" }}
                                    exit={{ opacity: 0, x: "-20%" }}
                                    transition={{ duration: 0.9, ease: "easeInOut" }}
                                    className="relative block w-full h-auto object-contain"
                                    alt="Astorea Factory & Products"
                                />
                            </AnimatePresence>

                            {/* Architectural Tint Overlay */}
                            {/* <div className="absolute inset-0 bg-linear-to-tr from-[#1a1a1a]/40 to-transparent group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div> */}

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none"></div>
                        </div>

                        {/* ISO Watermark */}
                        {/* <div className="absolute -bottom-20 -right-20 text-gray-200/50 rotate-[-15deg] pointer-events-none z-0 scale-150">
                            <Award size={200} strokeWidth={0.5} />
                        </div> */}
                    </motion.div>
                </div>

                {/* Timeline Header (Smaller) */}
                <div className="text-center mb-12 md:mb-20 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 text-xs font-bold tracking-[0.5em] uppercase"
                    >
                        Our Journey
                    </motion.h2>
                </div>

                {/* Timeline Section */}
                <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-20 md:mb-32 z-10">

                    {/* Aesthetic Background: Industrial Haze (Drifting Gradients) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full -z-10 pointer-events-none opacity-40">
                        {/* Cool Teal/Grey Orb */}
                        <motion.div
                            className="absolute top-0 left-0 w-125 h-125 bg-linear-to-br from-gray-200 via-gray-300 to-transparent rounded-full blur-[80px] mix-blend-multiply"
                            animate={{
                                y: [0, 100, 0],
                                x: [0, 50, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Warm Champagne/Gold Orb */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-150 h-150 bg-linear-to-tl from-[#e6d5c3] via-[#f5f5f5] to-transparent rounded-full blur-[100px] mix-blend-multiply"
                            animate={{
                                y: [0, -120, 0],
                                x: [0, -60, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </div>

                    {/* Vertical Line - Drawing Animation */}
                    <motion.div
                        className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-teal shadow-2xl to-transparent -translate-x-1/2 md:translate-x-0"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    ></motion.div>

                    {timelineEvents.map((event, index) => (
                        <div key={index} className={`timeline-item flex flex-col md:flex-row items-center mb-14 md:mb-20 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                            {/* Date Bubble */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-14 h-14 rounded-full bg-linear-to-br from-white to-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 text-brand-teal mb-6 md:mb-0"
                            >
                                {event.icon}
                            </motion.div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2), ease: "easeOut" }}
                                className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 md:text-right"
                            >
                                <div className={`
                                    p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg
                                    hover:shadow-xl hover:bg-white/50 transition-all duration-500 group will-change-transform
                                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto md:text-left"}
                                `}>
                                    <div className="text-4xl font-black text-black/70 absolute -top-12 right-4 md:left-0 z-50 ">
                                        {event.year}
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-900 mb-2 relative z-10">{event.title}</h3>
                                    <p className="text-gray-600 leading-relaxed relative z-10">{event.description}</p>
                                </div>
                            </motion.div>

                            {/* Spacer for alternating layout */}
                            <div className="w-full md:w-[45%]"></div>
                        </div>
                    ))}
                </div>

                {/* Removed ISO Certification & Grid as per user request */}



            </div >
        </section >
    );
}
