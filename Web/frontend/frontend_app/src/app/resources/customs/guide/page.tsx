"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TechnicalCustomsGuidePage() {
    return (
        <main className="w-full bg-[#f6f8f6] min-h-screen">
            {/* Navigation & Progress */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-20 flex items-center">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/resources/customs" className="text-slate-400 hover:text-[#a1dc84] transition-colors">
                            <span className="material-symbols-outlined !text-4xl">arrow_back</span>
                        </Link>
                        <div>
                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-0.5">Resources / Technical Guide</span>
                            <h2 className="text-xl font-black text-slate-900 tracking-tighter">AfCFTA Export Framework</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol v2.4</span>
                            <div className="flex gap-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`h-1.5 w-8 rounded-full ${i < 3 ? 'bg-[#a1dc84]' : 'bg-slate-100'}`}></div>
                                ))}
                            </div>
                        </div>
                        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#a1dc84] transition-all">
                            <span className="material-symbols-outlined !text-sm">download</span> PDF Annex
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Table of Contents */}
                    <aside className="hidden lg:block w-80 shrink-0">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 font-mono">Guide Navigation</h3>
                                <div className="space-y-2">
                                    {[
                                        { id: "intro", label: "Introduction", icon: "help_center" },
                                        { id: "docs", label: "Documentation", icon: "description" },
                                        { id: "process", label: "Customs Process", icon: "account_tree" },
                                        { id: "hs-codes", label: "HS Classification", icon: "list_alt" },
                                        { id: "compliance", label: "Compliance Loop", icon: "verified_user" }
                                    ].map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={`#${link.id}`}
                                            className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-black text-xs uppercase tracking-tight group ${idx === 0 ? 'bg-white shadow-xl shadow-slate-200/50 text-slate-900 ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-900 hover:bg-white'}`}
                                        >
                                            <span className={`material-symbols-outlined !text-xl ${idx === 0 ? 'text-[#a1dc84]' : 'text-slate-300 group-hover:text-[#a1dc84]'}`}>{link.icon}</span>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#1A1A1A] p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Need expert consultation?</h4>
                                <p className="text-white/40 text-sm font-medium mb-8 relative z-10">Our trade specialists provide verified AfCFTA clearance strategies.</p>
                                <button className="w-full bg-[#a1dc84] text-slate-950 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest relative z-10 shadow-2xl">Book Session</button>
                                <div className="absolute -bottom-10 -right-10 size-40 bg-white/5 rounded-full blur-3xl group-hover:bg-[#a1dc84]/20 transition-all duration-700"></div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 max-w-4xl space-y-24">
                        {/* Section: Intro */}
                        <section id="intro">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-12"
                            >
                                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                                    The AfCFTA <br />
                                    <span className="text-[#a1dc84]">Export Guide.</span>
                                </h1>
                                <p className="border-l-4 border-[#a1dc84] pl-8 text-lg text-slate-500 font-medium leading-relaxed max-w-lg font-secondary mb-12">
                                    A comprehensive technical manual for navigating the African Continental Free Trade Area procedures with 100% compliance.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { label: "Reading Time", value: "15 mins", icon: "schedule" },
                                        { label: "Complexity", value: "High Tech", icon: "precision_manufacturing" },
                                        { label: "Compliance", value: "12 Docs", icon: "verified_user" }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/10">
                                            <div className="flex items-center gap-3 text-[#a1dc84] mb-4">
                                                <span className="material-symbols-outlined font-black">{stat.icon}</span>
                                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</span>
                                            </div>
                                            <p className="text-xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Section: Documentation */}
                        <section id="docs">
                            <div className="flex items-end justify-between mb-12 border-b-2 border-slate-100 pb-8">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">01. Documentation Requirements</h2>
                                <span className="text-[10px] font-black text-slate-300 select-none uppercase tracking-[0.3em]">Module One</span>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#a1dc84]/30 transition-all group">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                                        <div className="flex items-center gap-6">
                                            <div className="size-16 rounded-3xl bg-slate-50 flex items-center justify-center text-[#a1dc84] group-hover:bg-[#a1dc84] group-hover:text-white transition-all">
                                                <span className="material-symbols-outlined !text-3xl font-black">verified</span>
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black text-slate-900 mb-1">Certificate of Origin (CoO)</h4>
                                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Reference: Protocol Annex 2</p>
                                            </div>
                                        </div>
                                        <span className="px-5 py-2 bg-red-100 text-red-600 font-black text-[9px] uppercase tracking-widest rounded-full">Mandatory</span>
                                    </div>
                                    <ul className="text-lg text-slate-500 font-medium space-y-4 ml-2 list-none">
                                        {[
                                            "Must be issued by designated competent national authority.",
                                            "Electronic signatures verified via the Single Window RSW.",
                                            "Operational duration: 12 months from timestamped issue."
                                        ].map((li, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <div className="size-2 rounded-full bg-[#a1dc84] mt-2.5 shrink-0"></div>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="bg-[#a1dc84] p-12 rounded-[3rem] text-slate-950 relative overflow-hidden group"
                                >
                                    <div className="flex items-center gap-4 mb-6 relative z-10">
                                        <div className="size-10 rounded-full bg-slate-950 flex items-center justify-center text-[#a1dc84]">
                                            <span className="material-symbols-outlined font-black">lightbulb</span>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">Strategic Insight</span>
                                    </div>
                                    <p className="text-2xl font-black tracking-tight leading-tight relative z-10">
                                        "Synchronous HS Coding is parity for profit. Ensure HS codes on CoO strictly match Commercial Invoices to avoid multi-day border detention."
                                    </p>
                                    <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-slate-950/5 !text-[200px] pointer-events-none group-hover:scale-110 transition-transform duration-700">tips_and_updates</span>
                                </motion.div>
                            </div>
                        </section>

                        {/* Section: Process */}
                        <section id="process">
                            <div className="flex items-end justify-between mb-12 border-b-2 border-slate-100 pb-8">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">02. Customs Process Flow</h2>
                                <span className="text-[10px] font-black text-slate-300 select-none uppercase tracking-[0.3em]">Module Two</span>
                            </div>

                            <div className="space-y-12">
                                {[
                                    { step: 1, title: "Pre-Shipment Audit", desc: "Rigorous verification of quality parity against destination country standards." },
                                    { step: 2, title: "Universal Digital Filing", desc: "Secure multi-manifest upload to Regional Single Window portal." },
                                    { step: 3, title: "Differential Duty Assessment", desc: "Tariff calculation adjusted for AfCFTA preferential rates (Target 0%)." },
                                    { step: 4, title: "Border Exit Authorization", desc: "Final telemetric verification and generation of digital Exit Note." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-12 group">
                                        <div className="flex flex-col items-center gap-6">
                                            <div className="size-14 rounded-2xl bg-[#1A1A1A] text-[#a1dc84] font-black text-xl flex items-center justify-center group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all duration-500">
                                                {item.step}
                                            </div>
                                            <div className="w-0.5 h-full bg-slate-100 group-last:hidden"></div>
                                        </div>
                                        <div className="pb-12">
                                            <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-12 right-12 flex flex-col items-end gap-4 z-[100]">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="size-16 bg-[#a1dc84] text-slate-950 rounded-full shadow-2xl flex items-center justify-center border-4 border-white group"
                >
                    <span className="material-symbols-outlined !text-3xl font-black group-hover:rotate-12 transition-transform">chat_bubble</span>
                </motion.button>
            </div>
        </main>
    );
}

