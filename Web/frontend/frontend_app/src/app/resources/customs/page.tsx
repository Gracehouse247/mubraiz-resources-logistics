"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CustomsLibraryPage() {
    return (
        <main className="w-full bg-[#f8faf8] min-h-screen">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-100 py-12">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-6 font-mono tracking-tighter uppercase">
                                <Link href="/" className="hover:text-[#a1dc84]">Home</Link>
                                <span>/</span>
                                <Link href="/resources" className="hover:text-[#a1dc84]">Resources</Link>
                                <span>/</span>
                                <span className="text-slate-900">Customs Library</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                                Trade <br />
                                <span className="text-[#a1dc84]">Documentation.</span>
                            </h1>
                            <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-2xl">
                                Access the industry's most comprehensive repository of global shipping forms, AfCFTA protocols, and compliance templates.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-[#a1dc84] hover:text-slate-950 transition-all">
                                Portal Login
                            </button>
                        </div>
                    </div>

                    {/* Search Bar Component */}
                    <div className="relative max-w-4xl z-20">
                        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-3 flex items-center border border-slate-100 ring-4 ring-slate-50">
                            <span className="material-symbols-outlined ml-6 text-slate-300 !text-3xl">search</span>
                            <input
                                className="w-full border-none focus:ring-0 bg-transparent text-xl py-6 px-6 placeholder:text-slate-300 font-medium"
                                placeholder="Search AfCFTA documents, shipping forms..."
                                type="text"
                            />
                            <button className="bg-[#a1dc84] px-8 py-4 rounded-lg font-black text-slate-950 uppercase tracking-widest text-xs hidden sm:block">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-12 gap-12">
                    {/* Main Content Column */}
                    <div className="col-span-12 lg:col-span-8">
                        {/* Technical Specification Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-10 mb-16 relative overflow-hidden group border-l-8 border-[#a1dc84]"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-[#a1dc84] flex items-center justify-center text-slate-950">
                                        <span className="material-symbols-outlined font-black">info</span>
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">AfCFTA Certificate of Origin Specs</h3>
                                </div>
                                <p className="text-white/60 text-lg font-medium mb-8 leading-relaxed">
                                    Mandatory for all intra-African trade under the preferential tariff regime. Must include exporter details, HS Code (6-digit), and origin criteria.
                                </p>
                                <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-widest text-white/30 font-mono">
                                    <span className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#a1dc84]"></div> Ref: PROTO-2023-V4</span>
                                    <span className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#a1dc84]"></div> Security: Watermarked</span>
                                    <span className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#a1dc84]"></div> Updated: Oct 2023</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-white/5 !text-[180px] pointer-events-none transition-transform group-hover:scale-110 duration-1000">verified</span>
                        </motion.div>

                        <div className="flex items-center gap-4 mb-10">
                            <span className="material-symbols-outlined text-[#a1dc84] !text-4xl">folder_managed</span>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Verified Resource Index</h2>
                        </div>

                        {/* Resource Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Form A - CoO", category: "AfCFTA Documents", size: "2.4 MB", type: "PDF", icon: "verified" },
                                { title: "Master Bill of Lading", category: "Shipping Forms", size: "450 KB", type: "Docs", icon: "description" },
                                { title: "SAD 500 Entry", category: "Customs Declarations", size: "1.8 MB", type: "PDF", icon: "receipt_long" },
                                { title: "KYC Exporter Profile", category: "Compliance Templates", size: "320 KB", type: "Docs", icon: "manage_accounts" }
                            ].map((doc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-2xl hover:shadow-[#a1dc84]/5 hover:border-[#a1dc84]/30 transition-all duration-500 group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all duration-500">
                                            <span className="material-symbols-outlined !text-3xl font-black">{doc.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-300 uppercase underline decoration-[#a1dc84]/30 underline-offset-4">{doc.size}</span>
                                    </div>
                                    <div className="mb-8">
                                        <span className="text-[#a1dc84] text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">{doc.category}</span>
                                        <h4 className="text-xl font-black text-slate-900 leading-tight">{doc.title}</h4>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-slate-50 text-slate-900 font-black px-8 py-4 rounded-lg text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#a1dc84] transition-all">
                                            <span className="material-symbols-outlined !text-sm">download</span> Download
                                        </button>
                                        <button className="size-12 border border-slate-100 rounded-lg text-slate-300 hover:text-[#a1dc84] transition-colors flex items-center justify-center">
                                            <span className="material-symbols-outlined !text-lg">share</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="col-span-12 lg:col-span-4 space-y-8">
                        {/* Trending Section */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/20">
                            <h4 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-2xl">trending_up</span>
                                Trending Files
                            </h4>
                            <div className="space-y-8">
                                {[
                                    { num: "01", name: "EUR.1 Movement Cert", downloads: "12.5k" },
                                    { num: "02", name: "Commercial Invoice v4", downloads: "8.2k" },
                                    { num: "03", name: "Hazardous Goods Dec", downloads: "5.1k" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                                        <span className="text-3xl font-black text-slate-100 group-hover:text-[#a1dc84] transition-colors">{item.num}</span>
                                        <div>
                                            <p className="font-black text-slate-900 group-hover:text-[#a1dc84] transition-colors">{item.name}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.downloads} Downloads</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Guide CTA */}
                        <div className="bg-[#a1dc84] rounded-[2.5rem] p-10 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter leading-none">Need a Technical Guide?</h4>
                                <p className="text-slate-950/60 font-bold mb-8">Get our proprietary export template for AfCFTA compliance.</p>
                                <Link
                                    href="/resources/customs/guide"
                                    className="inline-flex bg-slate-950 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-[10px] items-center gap-3 shadow-2xl hover:gap-5 transition-all"
                                >
                                    Open Guide <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-slate-950/5 !text-[200px] pointer-events-none group-hover:scale-110 transition-transform duration-1000 font-black">menu_book</span>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

