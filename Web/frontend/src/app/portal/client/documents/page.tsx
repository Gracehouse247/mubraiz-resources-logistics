"use client";

import React from 'react';
import { motion } from 'framer-motion';

const docCategories = [
    { name: "AfCFTA Templates", count: 12, icon: "africa", color: "emerald" },
    { name: "Shipping Forms", count: 24, icon: "local_shipping", color: "blue" },
    { name: "Customs Declarations", count: 8, icon: "description", color: "red" },
    { name: "Trade Compliance", count: 15, icon: "verified_user", color: "amber" },
];

const documents = [
    { title: "Form A - Certificate of Origin", type: "AfCFTA", size: "2.4 MB", date: "Oct 2023", icon: "picture_as_pdf", color: "red", status: "Verified" },
    { title: "Master Bill of Lading (MBL)", type: "Shipping", size: "450 KB", date: "Sep 2023", icon: "description", color: "blue", status: "Requires Signature" },
    { title: "SAD 500 Entry Form", type: "Customs", size: "1.8 MB", date: "Nov 2023", icon: "picture_as_pdf", color: "red", status: "Verified" },
    { title: "KYC Exporter Profile v2", type: "Compliance", size: "320 KB", date: "Jan 2024", icon: "description", color: "blue", status: "Under Review" },
    { title: "Dangerous Goods Declaration", type: "Safety", size: "1.2 MB", date: "Dec 2023", icon: "warning", color: "red", status: "Critical" },
];

export default function DocumentsLibrary() {
    return (
        <div className="p-4 md:p-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Hero Header */}
                <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-16 overflow-hidden border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="relative z-10 max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
                        >
                            Logistics Intelligence Hub
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight"
                        >
                            Customs & Trade <br /> Documentation Library
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-base md:text-lg font-medium leading-relaxed"
                        >
                            Access the world's most comprehensive repository of shipping forms, AfCFTA protocols, and global compliance templates.
                        </motion.p>
                    </div>
                </div>
                {/* AI Document Ingestion */}
                <div className="grid lg:grid-cols-2 gap-8 -mt-12 relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#a1dc84] p-10 rounded-[3rem] shadow-2xl shadow-[#a1dc84]/20 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900/60 mb-2 block">World-Class Feature</span>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic mb-4">AI OCR Ingestion</h3>
                            <p className="text-slate-900/70 text-sm font-bold leading-relaxed max-w-sm">Drop any PDF invoice or waybill. Our AI node will automatically extract HS codes, weights, and values for immediate customs filing.</p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined !text-3xl">upload_file</span>
                            </div>
                            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Identify & Scan Node</span>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 !text-[12rem] text-slate-900/5 rotate-12">robot</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 flex flex-col justify-between group cursor-pointer"
                    >
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a1dc84] mb-2 block">Secure Protocol</span>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter italic mb-4">Digital Identity Vault</h3>
                            <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-sm">Legally binding, eIDAS compliant signatures. Review and sign trade authorizations instantly from your mobile terminal.</p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-slate-50 dark:bg-white/5 text-[#a1dc84] flex items-center justify-center group-hover:bg-[#a1dc84]/10 transition-colors">
                                <span className="material-symbols-outlined !text-3xl">draw</span>
                            </div>
                            <span className="text-xs font-black text-slate-400 dark:text-gray-400 uppercase tracking-widest">2 Documents Awaiting Signature</span>
                        </div>
                    </motion.div>
                </div>

                {/* Search & Filter */}
                <div className="relative -mt-16 z-20 px-4 md:px-20 max-w-5xl mx-auto w-full">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-3 border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 flex items-center gap-4 px-4 w-full">
                            <span className="material-symbols-outlined text-slate-400 !text-2xl">search</span>
                            <input
                                className="w-full h-12 border-none bg-transparent text-sm font-bold placeholder:text-slate-400 focus:ring-0 dark:text-white"
                                placeholder="Search HS codes, shipping forms, or compliance regulations..."
                                type="text"
                            />
                        </div>
                        <button className="w-full md:w-auto px-10 py-4 bg-[#a1dc84] text-[#0f172a] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20">
                            Search Library
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Feed */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Technical Alert */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 text-white p-8 rounded-[2.5rem] border-l-8 border-[#a1dc84] relative overflow-hidden"
                        >
                            <div className="flex gap-6 items-start relative z-10">
                                <div className="size-14 rounded-2xl bg-[#a1dc84]/10 text-[#a1dc84] flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined !text-3xl">lightbulb</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-black tracking-tight mb-2">Technical Insight: AfCFTA Origin Criteria</h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">Mandatory for all intra-African trade under the preferential tariff regime. Must include exporter details, HS Code (6-digit minimum), and origin criteria. Digital signatures are accepted only if registered with the national customs authority.</p>
                                    <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-slate-500">
                                        <span>Ref: PROTO-2024-V2</span>
                                        <span>Security: Watermarked</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-2xl">folder_managed</span>
                                Essential Trade Resources
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {documents.map((doc, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none group"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`size-12 rounded-2xl flex items-center justify-center ${doc.color === 'red' ? 'bg-red-50 text-red-500' : doc.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-emerald-50 text-emerald-500'}`}>
                                                    <span className="material-symbols-outlined !text-2xl">{doc.icon}</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{doc.type}</p>
                                                        <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter ${doc.status === 'Verified' ? 'bg-green-100 text-green-600' : doc.status === 'Requires Signature' ? 'bg-amber-100 text-amber-600 animate-pulse' : 'bg-slate-100 text-slate-600'}`}>{doc.status}</span>
                                                    </div>
                                                    <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight line-clamp-1">{doc.title}</h4>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-black text-slate-300 uppercase">{doc.size}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 h-12 rounded-xl bg-slate-50 dark:bg-white/5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:bg-[#a1dc84] hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                                                <span className="material-symbols-outlined !text-xl">download_for_offline</span>
                                                One-Click Sync
                                            </button>
                                            <button className="size-12 rounded-xl border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-300 hover:text-[#a1dc84] transition-all">
                                                <span className="material-symbols-outlined !text-xl">share</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Categories List */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6 px-1">Library Verticals</h4>
                            <div className="space-y-4">
                                {docCategories.map((cat, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-xl bg-slate-50 dark:bg-black/20 flex items-center justify-center group-hover:bg-[#a1dc84]/10 transition-colors">
                                                <span className={`material-symbols-outlined !text-xl ${cat.color === 'emerald' ? 'text-emerald-500' : cat.color === 'blue' ? 'text-blue-500' : cat.color === 'red' ? 'text-red-500' : 'text-amber-500'}`}>
                                                    {cat.icon}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{cat.name}</span>
                                        </div>
                                        <span className="text-[9px] font-black text-slate-300 group-hover:text-[#a1dc84] transition-colors">{cat.count} Docs</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden relative">
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 px-1 relative z-10">Trending Now</h4>
                            <div className="space-y-6 relative z-10">
                                {[
                                    { rank: "01", title: "EUR.1 Movement Cert", downloads: "12.5k" },
                                    { rank: "02", title: "Commercial Invoice v4", downloads: "8.2k" },
                                    { rank: "03", title: "Hazardous Goods Dec", downloads: "5.1k" },
                                ].map((rank, i) => (
                                    <div key={i} className="flex items-start gap-4 group cursor-pointer">
                                        <span className="text-3xl font-black text-white/10 group-hover:text-[#a1dc84] transition-colors leading-none">{rank.rank}</span>
                                        <div>
                                            <h5 className="text-xs font-black text-white group-hover:text-[#a1dc84] transition-colors">{rank.title}</h5>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">{rank.downloads} Syncs</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

