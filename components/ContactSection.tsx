"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="relative py-28 bg-[#F5F5F7] overflow-hidden text-gray-900"
		>
			{/* Ambient gradients */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-linear-to-br from-brand-teal/20 via-transparent to-transparent blur-[80px]" />
				<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-linear-to-tl from-brand-orange/20 via-transparent to-transparent blur-[90px]" />
			</div>

			<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
					{/* Left: Copy + Info */}
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A]"
						>
							Let us build
							<br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-gray-700 via-gray-800 to-gray-900">
								your next project
							</span>
						</motion.h2>
						<p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
							From specification to delivery, our technical team helps you
							choose the right adhesive, grout, or epoxy for any surface.
							Share your requirements and we will respond within 24 hours.
						</p>

						<div className="mt-10 space-y-6 text-sm text-gray-700">
							<div className="flex items-start gap-4">
								<MapPin className="text-brand-orange mt-1" size={18} />
								<span>
									Plot No. 123, Udyog Vihar Phase IV, Gurgaon, Haryana
									122015, India
								</span>
							</div>
							<div className="flex items-center gap-4">
								<Phone className="text-brand-orange" size={18} />
								<span>+91 92539 01000</span>
							</div>
							<div className="flex items-center gap-4">
								<Mail className="text-brand-orange" size={18} />
								<span>astoreaofficial@gmail.com</span>
							</div>
							<div className="flex items-center gap-4">
								<Clock className="text-brand-orange" size={18} />
								<span>Mon-Sat, 10:00 AM - 7:00 PM</span>
							</div>
						</div>
					</div>

					{/* Right: Form */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="bg-white/70 backdrop-blur-md border border-white/70 rounded-3xl shadow-xl p-8 md:p-10"
					>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
										Full Name
									</label>
									<input
										type="text"
										name="name"
										required
										placeholder="Your name"
										className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
									/>
								</div>
								<div>
									<label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
										Email
									</label>
									<input
										type="email"
										name="email"
										required
										placeholder="name@email.com"
										className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
										Phone
									</label>
									<input
										type="tel"
										name="phone"
										placeholder="+91"
										className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
									/>
								</div>
								<div>
									<label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
										Project Type
									</label>
									<select
										name="projectType"
										className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
									>
										<option>Tile Installation</option>
										<option>Grout & Finish</option>
										<option>Stone Care</option>
										<option>Industrial Project</option>
									</select>
								</div>
							</div>

							<div>
								<label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
									Message
								</label>
								<textarea
									name="message"
									required
									rows={4}
									placeholder="Tell us about your project..."
									className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
								></textarea>
							</div>

							<button
								type="submit"
								className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#1A1A1A] px-8 py-4 text-white font-bold tracking-widest uppercase text-sm shadow-2xl hover:shadow-xl transition-all"
							>
								Send Inquiry
								<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1" />
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
