"use client";

import { useRef, CSSProperties } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

interface ProductImageZoomProps {
	src: string;
	alt: string;
	priority?: boolean;
}

export default function ProductImageZoom({
	src,
	alt,
	priority,
}: ProductImageZoomProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;

		event.currentTarget.style.setProperty("--x", `${x}%`);
		event.currentTarget.style.setProperty("--y", `${y}%`);
	};

	const handleLeave = (event: React.MouseEvent<HTMLDivElement>) => {
		event.currentTarget.style.setProperty("--x", "50%");
		event.currentTarget.style.setProperty("--y", "50%");
	};

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
			className="group relative "
			style={
				{
					// Default zoom origin center for consistent first hover.
					"--x": "50%",
					"--y": "50%",
				} as CSSProperties
			}>
			<motion.div
				className="w-full aspect-4/3 flex items-center justify-center relative overflow-hidden"
				animate={{ y: [0, -6, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}>
				<Image
					src={src}
					alt={alt}
					fill
					sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 90vw"
					className="object-contain p-6 transition-transform duration-300 ease-out origin-[var(--x)_var(--y)] group-hover:scale-125"
					priority={priority}
				/>
				<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{/* <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/50 to-transparent" /> */}
				</div>
			</motion.div>
		</div>
	);
}
