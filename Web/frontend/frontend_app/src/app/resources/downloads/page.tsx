"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function DownloadsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [toast, setToast] = useState<string | null>(null);

    const triggerDownload = (title: string, url?: string) => {
        setToast(`Secure Download Initiated: ${title}`);
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.download = title;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        setTimeout(() => setToast(null), 3000);
    };

    const categories = ['All', 'Regulatory', 'Corporate', 'Technical', 'Compliance'];

    const resources = [
        {
            title: "Mubraiz Resources Company Profile",
            category: "Corporate",
            type: "PDF",
            size: "3.7 MB",
            date: "Feb 13, 2026",
            icon: "business_center",
            desc: "Comprehensive overview of Mubraiz Resources operations, fleet capacity, and strategic logistics framework.",
            url: "/downloads/Mubraiz Resources Company profile.pdf"
        },
        {
            title: "Health Safety and Environmental Policy",
            category: "Compliance",
            type: "PDF",
            size: "0.1 MB",
            date: "Feb 13, 2026",
            icon: "security",
            desc: "Official HSE framework outlining our commitment to workplace safety, environmental protection, and operational risk management.",
            url: "/downloads/Health Safety and Environmental Policy.pdf"
        },
        {
            title: "CAC Incorporation Certificate",
            category: "Compliance",
            type: "PDF",
            size: "0.9 MB",
            date: "Feb 13, 2026",
            icon: "verified",
            desc: "Official Corporate Affairs Commission certification validating Mubraiz Resources Limited as a legally registered entity in Nigeria.",
            url: "/downloads/CERTIFICATE - MUBRAIZ RESOURCES LIMITED.pdf"
        },
        {
            title: "Mubraiz Corporate Profile 2026",
            category: "Corporate",
            type: "PDF",
            size: "4.2 MB",
            date: "Jan 15, 2026",
            icon: "business_center",
            desc: "Complete overview of our logistics capabilities, global network, and strategic vision for the fiscal year."
        },
        {
            title: "NCS Form M Filing Guide",
            category: "Regulatory",
            type: "PDF",
            size: "1.8 MB",
            date: "Feb 02, 2026",
            icon: "description",
            desc: "Step-by-step executive guide to initiating valid Form M applications through the Single Window Trade Portal."
        },
        {
            title: "NXP Export Proceeds Protocol",
            category: "Regulatory",
            type: "PDF",
            size: "2.1 MB",
            date: "Jan 20, 2026",
            icon: "flight_takeoff",
            desc: "Mandatory guidelines for non-oil exporters to ensure repatriation of proceeds and CBN compliance."
        },
        {
            title: "Ibafo Warehouse Technical Specs",
            category: "Technical",
            type: "PDF",
            size: "3.5 MB",
            date: "Dec 10, 2025",
            icon: "warehouse",
            desc: "Detailed architectural and operational specifications of our primary technical hub, including racking capacities."
        },
        {
            title: "ISO 9001:2015 Certification",
            category: "Compliance",
            type: "PDF",
            size: "0.8 MB",
            date: "Nov 05, 2025",
            icon: "verified_user",
            desc: "Official Quality Management System certification validating our operational excellence standards."
        },
        {
            title: "Dangerous Goods Handling Manual",
            category: "Technical",
            type: "PDF",
            size: "5.6 MB",
            date: "Jan 08, 2026",
            icon: "warning",
            desc: "Safety protocols and classification codes for transporting HAZMAT and sensitive chemical cargo."
        },
        {
            title: "Fleet Safety & Maintenance Policy",
            category: "Compliance",
            type: "PDF",
            size: "2.4 MB",
            date: "Jan 12, 2026",
            icon: "local_shipping",
            desc: "Our internal standards for vehicle upkeep, driver vetting, and road safety enforcement."
        },
        {
            title: "Project Cargo Case Study: Siemens Energy",
            category: "Corporate",
            type: "PDF",
            size: "6.1 MB",
            date: "Feb 01, 2026",
            icon: "engineering",
            desc: "In-depth analysis of the heavy-lift logistics execution for the Siemens power turbine project."
        },
        {
            title: "Updated Import Duty Tariff List Q1",
            category: "Regulatory",
            type: "XLSX",
            size: "1.2 MB",
            date: "Feb 05, 2026",
            icon: "table_view",
            desc: "Comprehensive spreadsheet of current HS Codes and applicable duty rates for general cargo."
        }
    ];

    const filteredResources = resources.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#f8faf8] dark:bg-[#0a0f0a] font-display text-slate-700 dark:text-white transition-colors duration-500 min-h-screen pt-24 pb-20">
            <main className="max-w-7xl mx-auto px-6 space-y-20">
                {/* Hero Section */}
                <section className="relative rounded-[3rem] overflow-hidden min-h-[450px] flex flex-col items-center justify-center text-center p-12 bg-slate-900 group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 z-0 opacity-30">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#a1dc8433,transparent)]"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                    {/* Abstract bg image could go here */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-20 max-w-4xl space-y-8"
                    >
                        <span className="inline-block bg-[#a1dc84]/10 border border-[#a1dc84]/30 text-[#a1dc84] px-6 py-2 rounded-full text-[10px] font-black capitalize tracking-[0.4em] mb-4 font-primary">
                            Executive Documentation
                        </span>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter capitalize font-primary">
                            Resource <span className="text-[#a1dc84]">Archive.</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed font-medium max-w-lg mx-auto font-secondary">
                            Access our repository of regulatory guides, technical specifications, and corporate intelligence.
                        </p>
                    </motion.div>
                </section>

                {/* Filter & Search Bar */}
                <div className="sticky top-28 z-40">
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5 p-6 md:p-8 flex flex-col xl:flex-row gap-8 items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-3 rounded-lg text-[10px] font-black capitalize tracking-widest transition-all font-primary ${activeCategory === cat
                                        ? 'bg-[#a1dc84] text-slate-900 shadow-lg shadow-[#a1dc84]/20'
                                        : 'bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full xl:max-w-md group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-[#a1dc84] transition-colors">search</span>
                            <input
                                type="text"
                                placeholder="Search documents..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-14 pl-14 pr-6 bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 rounded-2xl focus:border-[#a1dc84] outline-none font-bold text-sm transition-all placeholder:text-slate-400 font-secondary"
                            />
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative">
                    <AnimatePresence>
                        {toast && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 border border-[#a1dc84]/30 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
                            >
                                <span className="material-symbols-outlined text-[#a1dc84] animate-bounce">download_done</span>
                                <span className="text-xs font-black capitalize tracking-widest">{toast}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="popLayout">
                        {filteredResources.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl hover:border-[#a1dc84]/30 group transition-all"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="size-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black capitalize tracking-widest ${item.type === 'PDF' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
                                            }`}>
                                            {item.type}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400">{item.size}</span>
                                    </div>
                                </div>

                                <div className="mb-8 min-h-[120px]">
                                    <span className="text-[#a1dc84] text-[10px] font-black capitalize tracking-widest mb-3 block font-primary">{item.category}</span>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#a1dc84] transition-colors line-clamp-2 capitalize tracking-tight font-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 font-secondary">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-slate-400 font-secondary">Updated: {item.date}</span>
                                    <button
                                        onClick={() => triggerDownload(item.title, item.url)}
                                        className="size-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white hover:bg-[#a1dc84] hover:text-slate-900 transition-all shadow-md group/download"
                                    >
                                        <span className="material-symbols-outlined text-xl group-hover/download:scale-110 transition-transform">download</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-32 bg-slate-50 dark:bg-white/5 rounded-[3rem]">
                        <span className="material-symbols-outlined text-7xl text-slate-300 dark:text-slate-600 mb-6">folder_off</span>
                        <h3 className="text-xl font-black text-slate-500 dark:text-slate-400 capitalize tracking-widest font-primary">No documents found</h3>
                        <p className="text-slate-400 mt-2 text-sm font-secondary">Try adjusting your search criteria</p>
                    </div>
                )}

                {/* Request Document CTA */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#a1dc8422,transparent_70%)]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="material-symbols-outlined text-6xl text-[#a1dc84] mb-8">lock_person</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 capitalize tracking-tighter font-primary">
                            Restricted <span className="text-[#a1dc84]">Access.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed font-secondary">
                            Looking for sensitive contract templates, audit reports, or specialized rate cards?
                            Authorized partners can request secure access via our client portal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact" className="px-8 py-4 bg-[#a1dc84] text-slate-900 rounded-lg font-black capitalize text-xs tracking-[0.25em] hover:scale-105 transition-transform shadow-2xl shadow-[#a1dc84]/20 font-primary">
                                Contact Support
                            </Link>
                            <Link href="/portal/login" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-black capitalize text-xs tracking-[0.25em] hover:bg-white/10 transition-colors font-primary">
                                Partner Login
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
