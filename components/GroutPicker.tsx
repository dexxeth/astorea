"use client";

import { useState } from "react";
import clsx from "clsx";

const tileColors = [
    { name: "Marble White", value: "#f3f4f6" },
    { name: "Slate Grey", value: "#334155" },
    { name: "Onyx Black", value: "#0f172a" },
    { name: "Warm Beige", value: "#d6d3d1" },
];

const groutColors = [
    { name: "Bright White", value: "#ffffff" },
    { name: "Silver Grey", value: "#9ca3af" },
    { name: "Charcoal", value: "#374151" },
    { name: "Midnight", value: "#000000" },
    { name: "Brand Pink", value: "#e91e63" },
    { name: "Brand Teal", value: "#009688" },
    { name: "Brand Orange", value: "#ff9800" },
];

export default function GroutPicker() {
    const [selectedTile, setSelectedTile] = useState(tileColors[0]);
    const [selectedGrout, setSelectedGrout] = useState(groutColors[1]);

    return (
        <section className="py-24 bg-zinc-900 text-white" id="grout-picker">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visualizer */}
                <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square w-full max-w-md mx-auto bg-gray-800 rounded-2xl p-4 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 ease-out">
                        <div
                            className="w-full h-full grid grid-cols-2 gap-2 p-2 rounded-xl transition-colors duration-300"
                            style={{ backgroundColor: selectedGrout.value }}
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-full h-full rounded-md shadow-inner transition-colors duration-300 relative overflow-hidden"
                                    style={{ backgroundColor: selectedTile.value }}
                                >
                                    {/* Faux Texture Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent"></div>
                                </div>
                            ))}
                        </div>
                        {/* Label Overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-white text-navy-900 px-6 py-4 rounded-xl shadow-lg border-2 border-brand-teal/20">
                            <div className="text-xs font-bold uppercase tracking-wider opacity-60">Combination</div>
                            <div className="text-sm font-semibold">{selectedTile.name} + <span style={{ color: selectedGrout.value !== '#ffffff' ? selectedGrout.value : '#000' }}>{selectedGrout.name}</span></div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="order-1 lg:order-2 space-y-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Grout Visualizer</h2>
                        <p className="text-gray-400 max-w-md">
                            The finish details matter. See how our epoxy grout complements different tile aesthetics.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Select Tile</label>
                            <div className="flex flex-wrap gap-3">
                                {tileColors.map((tile) => (
                                    <button
                                        key={tile.name}
                                        onClick={() => setSelectedTile(tile)}
                                        className={clsx(
                                            "w-12 h-12 rounded-full border-2 transition-all duration-300 shadow-lg",
                                            selectedTile.name === tile.name ? "border-brand-teal scale-110" : "border-transparent hover:scale-105"
                                        )}
                                        style={{ backgroundColor: tile.value }}
                                        title={tile.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Select Grout</label>
                            <div className="flex flex-wrap gap-3">
                                {groutColors.map((grout) => (
                                    <button
                                        key={grout.name}
                                        onClick={() => setSelectedGrout(grout)}
                                        className={clsx(
                                            "w-10 h-10 rounded-full border-2 transition-all duration-300 shadow-md",
                                            selectedGrout.name === grout.name ? "border-white scale-110" : "border-transparent hover:scale-105"
                                        )}
                                        style={{ backgroundColor: grout.value }}
                                        title={grout.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <button className="px-8 py-3 bg-white text-navy-900 rounded-full font-bold hover:bg-brand-teal hover:text-white transition-all shadow-lg">
                        Save This Look
                    </button> */}
                </div>
            </div>
        </section>
    );
}
