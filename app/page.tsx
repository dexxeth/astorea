import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import GroutPicker from "@/components/GroutPicker";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<main className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-navy-900 text-white selection:bg-brand-pink selection:text-white">
			<Header />
			<Hero />
			<AboutSection />
			<ProductSection />
			<GroutPicker />
			<Testimonials />
			<Footer />
		</main>
	);
}
