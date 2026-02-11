"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products, shadeNames, type Product } from "@/lib/products";

const ProductCard = ({ product }: { product: Product }) => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		const handleChange = (event: MediaQueryListEvent) => {
			setIsDesktop(event.matches);
		};

		setIsDesktop(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);
	return (
		<motion.div
			layout
			className="relative group rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-200/50 hover:shadow-xl transition-all duration-500 border-[0.5px] border-gray-200"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}>
			{/* Soft Gradient Overlay for Depth */}
			{/* <div className="absolute inset-0 bg-linear-to-br from-white via-transparent to-gray-50 opacity-50 pointer-events-none"></div> */}

			<div className="relative p-8 flex flex-col h-full z-10">
				{/* Header */}
				<div className="flex justify-between items-start">
					<div>
						<span className="text-xs font-bold text-brand-teal uppercase tracking-widest">
							{product.category}
						</span>
						<h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mt-2">
							{product.name}
						</h3>
					</div>
					{/* <Link
						href={`/products/${product.slug}`}
						className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-gray-400 group-hover:text-brand-teal transition-colors border border-gray-100">
						<ArrowUpRight size={16} />
					</Link> */}
				</div>

				{/* Product Image */}
				<motion.div
					className="w-full aspect-4/3 flex items-center justify-center relative overflow-hidden"
					animate={isDesktop ? { y: [0, -6, 0] } : undefined}
					transition={
						isDesktop
							? {
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							}
							: undefined
					}>
					<Image
						src={product.image}
						alt={product.name}
						fill
						sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
						className="object-contain p-4"
					/>
					<div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
				</motion.div>

				{/* Specs Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{product.specs.map((spec, i) => (
						<span
							key={i}
							className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-wide border border-gray-200">
							{spec}
						</span>
					))}
				</div>

				{/* Expandable Description */}
				<div className="mt-auto">
					<p className="text-gray-600 text-sm leading-relaxed mb-6 pt-2 border-t border-gray-100">
						{product.summary}
					</p>

					{/* {product.shades && (
                        <div className="mb-6">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Palette size={12} /> Shades Available
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.shades.map((shade, i) => (
                                    <div key={i} className="group/shade relative">
                                        <div
                                            className="w-6 h-6 rounded-full border border-gray-200 shadow-sm cursor-help hover:scale-110 transition-transform"
                                            style={{ backgroundColor: shade }}
                                        ></div>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/shade:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            {shadeNames[shade] || shade}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}

					<Link
						href={`/products/${product.slug}`}
						className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-teal transition-colors border-t border-gray-100 group-hover:border-brand-teal/20">
						View Details
						<ArrowUpRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default function ProductSection() {
	return (
		<section
			id="products"
			className="py-24 bg-linear-to-b from-[#FFFFFF] to-[#E5E4E2] font-sans selection:bg-brand-teal selection:text-white relative overflow-hidden">
			{/* Specular Studio Light Overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent)] opacity-60 pointer-events-none"></div>

			<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
				{/* Section Header */}
				<div className="mb-24 text-center relative">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-6 drop-shadow-sm">
						ENGINEERED{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-700 to-gray-800">
							EXCELLENCE
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="text-gray-600 max-w-2xl mx-auto text-lg">
						Professional-grade adhesives and grouts designed for
						precision, durability, and aesthetic perfection.
					</motion.p>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* Grout Visualizer Link (Kept Dark for Contrast/CTA) */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative rounded-3xl overflow-hidden bg-linear-to-r from-brand-teal via-red-500 to-blue-600 p-0.5 shadow-2xl">
						
					<div className="bg-[#1A1A1A] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
						<div className="absolute inset-0 bg-[url('/blueprint_bg.svg')] opacity-10 bg-repeat bg-center"></div>

						<div className="relative z-10">
							<h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
								Visualize Your Space
							</h2>
							<p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
								Not sure which grout color matches your tiles?
								Use our interactive visualizer tool to
								experiment with different combinations.
							</p>
							<div className="flex justify-center">
								<button
									type="button"
									onClick={() => {
										window.history.pushState(null, "", "#grout-picker");
										window.dispatchEvent(new HashChangeEvent("hashchange"));
									}}
									className="cursor-pointer inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold tracking-wide text-center hover:bg-gray-100 transition-all shadow-[0_8px_24px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]">
									<Palette size={20} className="shrink-0" />
									<span className="text-sm md:text-base whitespace-nowrap leading-none">Open Grout Visualizer</span>
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
