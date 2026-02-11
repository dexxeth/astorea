"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Custom Bezier Easing Function (Spline-like)
        // Similar to CSS ease-out-quart or a custom Apple-style ease: [0.33, 1, 0.68, 1]
        // This function approximates a cubic-bezier(0.33, 1, 0.68, 1) curve for fluid momentum.
        const easeOutQuart = (x: number): number => {
            return 1 - Math.pow(1 - x, 4);
        };

        const lenis = new Lenis({
            duration: 1.5, // Increased duration for a more luxurious feel
            easing: easeOutQuart,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2, // Slightly increased multiplier for responsiveness
            touchMultiplier: 2,
        });

        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const target = document.querySelector<HTMLElement>(hash);
            if (!target) return;
            lenis.scrollTo(target, { offset: 0 });
        };

        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            event.preventDefault();
            const section = document.querySelector<HTMLElement>(href);
            if (!section) return;
            lenis.scrollTo(section, { offset: 0 });
            window.history.pushState(null, "", href);
        };

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame to GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's lag smoothing to prevent stuttering
        gsap.ticker.lagSmoothing(0);

        document.addEventListener("click", handleAnchorClick);
        window.addEventListener("hashchange", scrollToHash);
        scrollToHash();

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            document.removeEventListener("click", handleAnchorClick);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, []);

    return <>{children}</>;
}
