import Image from "next/image";
import Link from "next/link";
import {
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#F5F5F7] text-gray-900 py-20 border-t border-black/10 relative z-50">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-4 gap-12 mb-16">
					{/* Brand */}
					<div>
						<div className="mb-6">
							<Image
								src="/logo-dark.png"
								alt="Astorea"
								width={140}
								height={32}
							/>
						</div>
						<p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-8">
							Engineered for perfection. The gold standard in tile
							adhesives, grouts, and construction chemicals.
							Building the future, one bond at a time.
						</p>
						<div className="flex gap-4">
							<Link
								href="https://www.instagram.com/astoreaofficial/"
								className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-gray-500 hover:bg-brand-pink hover:text-white transition-all transform hover:-translate-y-1">
								<Instagram size={18} />
							</Link>
							{/* <Link
								href="#"
								className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
								<Linkedin size={18} />
							</Link> */}
						</div>
					</div>

					{/* Contact - Gurgaon */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">
							Contact Us
						</h4>
						<ul className="space-y-6 text-gray-600 text-sm">
							<li className="flex items-start gap-3">
								<MapPin
									size={18}
									className="text-brand-orange mt-1 shrink-0"
								/>
								<span>
									Plot No. 123, Udyog Vihar Phase IV, Gurgaon,
									Haryana 122015, India
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone
									size={18}
									className="text-brand-orange shrink-0"
								/>
								<span>+91 92539 01000</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail
									size={18}
									className="text-brand-orange shrink-0"
								/>
								<span>astoreaofficial@gmail.com</span>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">
							Products
						</h4>
						<ul className="space-y-4 text-gray-600 text-sm">
							<li>
								<Link
									href="/products/c1-001"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Fix C1-001
								</Link>
							</li>
							<li>
								<Link
									href="/products/c1t-101"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Fix C1T-101
								</Link>
							</li>
							<li>
								<Link
									href="/products/c2t-301"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Fix C2T-301
								</Link>
							</li>
							<li>
								<Link
									href="/products/c2te-501"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Fix C2TE-501
								</Link>
							</li>
							<li>
								<Link
									href="/products/grout-101"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Grout 101
								</Link>
							</li>
							<li>
								<Link
									href="/products/epoxy-5kg"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Astorea Epoxy Grout
								</Link>
							</li>
						</ul>
					</div>

					{/* Pages */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">
							Pages
						</h4>
						<ul className="space-y-4 text-gray-600 text-sm">
							<li>
								<Link
									href="/"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									About
								</Link>
							</li>
							<li>
								<Link
									href="#products"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Products
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="#grout-picker"
									className="hover:text-black hover:translate-x-1 inline-block transition-all">
									Grout Picker
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
					<p>
						© {new Date().getFullYear()} Astorea Construction
						Chemicals Pvt. Ltd. All rights reserved.
					</p>
					<p>
						Designed with precision in India by{" "}
						<Link
							href="https://auraweb.tech"
							className="text-brand-teal hover:text-brand-orange transition-colors">
							<span className="text-black font-bold">Aura</span>
							<span className="text-red-600 font-bold">Web</span>
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
