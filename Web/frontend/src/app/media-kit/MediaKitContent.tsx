"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MediaKitContent() {
    return (
        <main className="w-full bg-white pb-20">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
                <nav className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <a className="hover:underline hover:text-[#a1dc84]" href="/">Home</a>
                    <span>/</span>
                    <a className="hover:underline hover:text-[#a1dc84]" href="#">Newsroom</a>
                    <span>/</span>
                    <span className="text-slate-900">Media Kit & Brand Assets</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[320px] flex items-center p-8 lg:p-16">
                    <Image
                        alt="Logistics network visualization for media kit"
                        src="/images/news-hero.jpg"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 max-w-2xl"
                    >
                        <h1 className="text-white text-4xl lg:text-7xl font-black leading-[1.1] mb-4 font-primary tracking-tighter">Mubraiz Brand Resources</h1>
                        <p className="text-slate-300 text-lg mb-8 font-secondary font-medium leading-relaxed border-l-4 border-[#a1dc84] pl-8 max-w-lg">
                            The official resource hub for press and partners. Access our approved logo suite, photography gallery, and company fact sheets.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#a1dc84] text-slate-900 px-6 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-[#8bc76d] transition-all shadow-lg">
                                <span className="material-symbols-outlined text-xl">download</span>
                                Download Brand Guidelines (PDF)
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Logo Suite Section */}
            <section className="mt-16 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h2 className="text-2xl font-black tracking-tighter text-slate-900 font-primary">Logo Suite</h2>
                    <p className="text-slate-600 mt-1 font-sans font-medium">Please do not alter or distort the logo in any way.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-full aspect-video bg-slate-50 rounded-xl mb-6 flex items-center justify-center border border-dashed border-slate-300">
                            <img
                                src="/images/mubraiz-logo.svg"
                                alt="Mubraiz Resources Logo Light"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="font-black text-lg mb-1 font-primary tracking-tighter">Primary Logo - Light Background</h3>
                            <p className="text-sm text-slate-600 mb-6 font-sans font-medium">Use on white or light grey surfaces.</p>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-[#a1dc84]/20 hover:bg-[#a1dc84]/30 text-slate-900 py-2 rounded-lg text-sm font-bold transition-colors">SVG</button>
                                <button className="flex-1 bg-[#a1dc84]/20 hover:bg-[#a1dc84]/30 text-slate-900 py-2 rounded-lg text-sm font-bold transition-colors">PNG</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-full aspect-video bg-slate-800 rounded-xl mb-6 flex items-center justify-center">
                            <img
                                src="/images/mubraiz-logo.svg"
                                alt="Mubraiz Resources Logo Dark"
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="font-black text-lg text-white mb-1 font-primary tracking-tighter">Primary Logo - Dark Background</h3>
                            <p className="text-sm text-slate-400 mb-6 font-sans font-medium">Use on black or slate grey backgrounds.</p>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm font-bold transition-colors">SVG</button>
                                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm font-bold transition-colors">PNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Palette Section */}
            <section className="mt-20 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h2 className="text-2xl font-black tracking-tighter text-slate-900 font-primary">Brand Palette</h2>
                    <p className="text-slate-600 mt-1 font-sans font-medium">Consistency in color helps build a recognizable brand.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { name: "Apple Green", role: "Primary Action", hex: "#a1dc84", rgb: "76, 217, 100", bg: "bg-[#a1dc84]" },
                        { name: "Deep Slate", role: "Primary Text", hex: "#0F172A", rgb: "15, 23, 42", bg: "bg-slate-900" },
                        { name: "Soft Moss", role: "Background", hex: "#F8FAFC", rgb: "248, 250, 252", bg: "bg-slate-50 border border-slate-200" },
                        { name: "Purity", role: "Canvas", hex: "#FFFFFF", rgb: "255, 255, 255", bg: "bg-white border border-slate-200" }
                    ].map((color, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className={`h-32 ${color.bg} rounded-xl mb-4`}></div>
                            <div>
                                <p className="text-xs uppercase font-black text-[#a1dc84]">{color.name}</p>
                                <p className="text-lg font-black mb-3 text-slate-900">{color.role}</p>
                                <div className="space-y-1 font-mono text-sm text-slate-600">
                                    <p className="flex justify-between"><span>HEX:</span> <span>{color.hex}</span></p>
                                    <p className="flex justify-between"><span>RGB:</span> <span>{color.rgb}</span></p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Press Kit Section */}
            <section className="mt-20 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 border border-slate-200">
                    <div className="lg:w-1/3">
                        <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 relative">
                            <div className="w-full h-full border border-slate-100 flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-6xl text-[#a1dc84]/40 mb-4">description</span>
                                <h4 className="font-black text-slate-900 font-primary">Mubraiz Resources Ltd</h4>
                                <p className="text-[10px] uppercase tracking-widest mt-2 text-slate-600 font-bold">Official Press Kit 2024</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-[#a1dc84] rounded-full flex items-center justify-center text-slate-900 shadow-lg border-4 border-slate-50">
                                <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-black mb-4 text-slate-900 font-primary tracking-tighter">Complete Press Kit</h2>
                        <p className="text-lg text-slate-600 mb-8 font-sans font-medium">
                            Everything you need to cover Mubraiz Resources Ltd. Includes our company fact sheet, high-level executive bios, historical timeline, and core mission statement.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {["Company Fact Sheet", "Executive Headshots", "Bio Sheets (PDF)", "Press Release Archive"].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#a1dc84]">check_circle</span>
                                    <span className="font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg">
                            Download Full Press Kit (PDF, 12MB)
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
