import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Palette } from "lucide-react";
import { getProductBySlug, products, shadeNames } from "@/lib/products";
import ProductImageZoom from "@/components/ProductImageZoom";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-linear-to-b from-[#FFFFFF] to-[#E5E4E2] text-[#1A1A1A] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent)] opacity-70 pointer-events-none"></div>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10">
                <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-teal transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 mt-10 items-start">
                    <ProductImageZoom src={product.image} alt={product.name} priority />

                    <div className="space-y-10">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
                                {product.name}
                            </h1>
                            <p className="text-lg text-gray-600 mt-4 max-w-xl">
                                {product.summary}
                            </p>
                            <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
                                {product.description}
                            </p>
                        </div>

                         <div className="mt-6 flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200">
                                {product.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-brand-teal/10 text-xs font-semibold uppercase tracking-widest text-brand-teal border border-brand-teal/20">
                                {product.code}
                            </span>
                            {product.packaging && (
                                <span className="px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold uppercase tracking-widest text-gray-600 border border-gray-200">
                                    {product.packaging}
                                </span>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                    Key Specs
                                </h2>
                                <ul className="space-y-3">
                                    {product.specs.map((spec) => (
                                        <li key={spec} className="flex items-center gap-3 text-gray-700">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal/15 text-brand-teal">
                                                <Check size={14} />
                                            </span>
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                    Applications
                                </h2>
                                <ul className="space-y-3">
                                    {product.applications.map((application) => (
                                        <li key={application} className="flex items-center gap-3 text-gray-700">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500">
                                                <Check size={14} />
                                            </span>
                                            <span>{application}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {product.shades && (
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                                    <Palette size={14} />
                                    Shades Available
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {product.shades.map((shade) => (
                                        <div key={shade} className="group relative flex items-center gap-3">
                                            <div
                                                className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                                                style={{ backgroundColor: shade }}
                                            />
                                            <span className="text-sm font-semibold text-gray-600">
                                                {shadeNames[shade] || shade}
                                            </span>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                {shadeNames[shade] || shade}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="rounded-2xl border border-brand-teal/20 bg-linear-to-r from-brand-teal/10 to-blue-600/10 p-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Need Help Matching?</h2>
                            <p className="text-gray-600 max-w-xl">
                                Explore grout color pairings and see how each shade complements your tiles.
                            </p>
                            <Link
                                href="/#grout-picker"
                                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
                            >
                                Open Grout Visualizer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
