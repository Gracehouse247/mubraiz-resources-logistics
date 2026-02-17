"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import ReadyToMove from "@/components/home/ReadyToMove";

export default function TradeContent() {
    const [auditLoading, setAuditLoading] = useState(false);
    const [auditSubmitted, setAuditSubmitted] = useState(false);
    const [auditData, setAuditData] = useState({ sector: '', volume: '', destination: '' });

    const handleAuditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAuditLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/trade-audit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(auditData)
            });
            if (response.ok) {
                setAuditSubmitted(true);
            }
        } catch (error) {
            console.error('Trade audit submission error:', error);
        } finally {
            setAuditLoading(false);
        }
    };

    return (
        <main className="w-full bg-white dark:bg-[#0a0f1a] transition-colors duration-500 overflow-x-hidden">
            {/* Hero Section - No top space */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
                    <Image
                        alt="Global Trade and Export Mastery"
                        className="h-full w-full object-cover grayscale opacity-60 hover:grayscale-0 transition-opacity duration-1000"
                        src="/images/fleet/15ton-truck-1.jpeg"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 py-24">
                    {/* Breadcrumbs inside Hero for minimal space */}
                    <div className="absolute top-10 left-6 lg:left-8">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                            <Link href="/" className="hover:text-[#a1dc84] transition-colors">Home</Link>
                            <span className="material-symbols-outlined !text-[10px]">chevron_right</span>
                            <Link href="/services" className="hover:text-[#a1dc84] transition-colors">Services</Link>
                            <span className="material-symbols-outlined !text-[10px]">chevron_right</span>
                            <span className="text-white">Global Trade Hub</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col gap-10"
                        >
                            <div className="inline-flex w-fit items-center gap-4 rounded-full border border-[#a1dc84]/20 bg-[#a1dc84]/10 px-8 py-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#a1dc84] backdrop-blur-md shadow-2xl">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                                </span>
                                Continental Export Node
                            </div>

                            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary">
                                Global <br />
                                <span className="text-[#a1dc84]">Commerce.</span>
                            </h1>

                            <p className="max-w-xl border-l-4 border-[#a1dc84] pl-10 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                                Synchronizing Nigerian production with global demand. We architect the trade routes that define tomorrow's <span className="text-white font-black uppercase">Industrial African Grid.</span>
                            </p>

                            <div className="flex flex-wrap gap-8 pt-6">
                                <Link href="#audit">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-4 rounded-lg bg-[#a1dc84] px-8 py-4 text-xs font-black text-slate-900 shadow-[0_20px_40px_rgba(161,220,132,0.3)] hover:brightness-110 transition-all uppercase tracking-[0.3em] font-primary"
                                    >
                                        Execute Trade Audit <span className="material-symbols-outlined !text-2xl">query_stats</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Intelligence Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="hidden lg:block relative"
                        >
                            <div className="absolute inset-0 bg-[#a1dc84]/20 blur-[120px] rounded-full"></div>
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-16 rounded-[4rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="size-16 rounded-2xl bg-[#a1dc84] flex items-center justify-center text-slate-950 shadow-xl shadow-[#a1dc84]/20">
                                        <span className="material-symbols-outlined !text-3xl font-black">public</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-2xl tracking-tighter font-primary">Export Ops Active</h4>
                                        <p className="text-[10px] text-[#a1dc84] font-black uppercase tracking-[0.4em]">Live Commodity Tracker</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { label: "Agro-Commodities", stat: "Active Routes" },
                                        { label: "Solid Minerals", stat: "Vessel Loading" },
                                        { label: "Industrial Trade", stat: "Distribution Ops" },
                                        { label: "Compliance Grid", stat: "100% Certified" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-none">
                                            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{item.label}</span>
                                            <span className="text-[#a1dc84] font-black text-[10px] uppercase tracking-widest bg-[#a1dc84]/10 px-4 py-1.5 rounded-full">{item.stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
                        <div>
                            <span className="text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-primary">Trade Specialization</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary">
                                Resource <br /><span className="text-[#a1dc84]">Flow.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-xl font-secondary">
                            Specializing in the export and trade of high-value African resources, ensuring global standards are exceeded at every node of the supply chain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Solid Minerals",
                                icon: "diamond",
                                desc: "Export of Lithium, Zinc, and Lead ores. We manage the entire chain from mine-site to global smelters.",
                                stats: ["ISO Certified", "Grade Analysis", "Vessel Ops"]
                            },
                            {
                                title: "Agro-Commodities",
                                icon: "spa",
                                desc: "Strategic sourcing and export of Cocoa, Cashew, and Ginger. Clean, graded, and globally compliant.",
                                stats: ["Grading Node", "Dry Logistics", "Global Standards"]
                            },
                            {
                                title: "Industrial Trade",
                                icon: "settings_suggest",
                                desc: "Cross-border distribution of industrial machinery and construction materials within the African trade zone.",
                                stats: ["AFCTFA Ready", "OOG Specialists", "Route Intelligence"]
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group bg-slate-50 dark:bg-white/[0.02] rounded-[5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-2xl transition-all duration-700 h-full p-16"
                            >
                                <div className="size-24 rounded-[2.5rem] bg-white dark:bg-slate-900 flex items-center justify-center text-slate-950 dark:text-[#a1dc84] mb-12 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all shadow-xl">
                                    <span className="material-symbols-outlined !text-5xl font-black">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed mb-12 font-secondary">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-12 border-t border-slate-200 dark:border-white/10">
                                    {item.stats.map((stat, i) => (
                                        <span key={i} className="px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-[#a1dc84]">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach Interstitial */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block font-primary animate-pulse">Global Network Density</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] font-primary mb-24">
                        The World <br /> <span className="text-[#a1dc84]">Within Reach.</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-24">
                        {[
                            { label: "Transit Ports", val: "120+", icon: "anchore" },
                            { label: "Trade Hubs", val: "45+", icon: "hub" },
                            { label: "Agents Sync", val: "500+", icon: "groups" }
                        ].map((node, idx) => (
                            <div key={idx} className="group relative">
                                <div className="text-9xl font-black text-white/5 group-hover:text-[#a1dc84]/10 transition-colors tracking-tighter font-display mb-[-4rem]">{node.val}</div>
                                <h4 className="text-2xl font-black text-white tracking-tighter font-primary mb-4 group-hover:text-[#a1dc84] transition-colors">{node.label}</h4>
                                <div className="w-16 h-1 bg-[#a1dc84] mx-auto rounded-full group-hover:w-32 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Functional Trade Audit Hub */}
            <section id="audit" className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#a1dc84] rounded-[5rem] p-16 md:p-32 shadow-3xl text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                        <div className="absolute -bottom-32 -right-32 size-[500px] bg-white/20 rounded-full blur-[100px] group-hover:bg-white/30 transition-all duration-1000"></div>

                        <AnimatePresence mode="wait">
                            {auditSubmitted ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 max-w-3xl mx-auto py-10">
                                    <div className="size-24 rounded-[2rem] bg-slate-950 text-[#a1dc84] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                                        <span className="material-symbols-outlined !text-5xl font-black uppercase">verified</span>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter mb-8 leading-none font-primary">Corridor <br /> Synchronized.</h2>
                                    <p className="text-slate-950/70 text-2xl font-bold mb-12 font-secondary max-w-lg mx-auto leading-relaxed">
                                        Trade analysis for <span className="text-slate-950 font-black">{auditData.sector}</span> flow to <span className="text-slate-950 font-black">{auditData.destination}</span> is being processed.
                                    </p>
                                    <div className="bg-slate-950/10 px-10 py-5 rounded-2xl border border-slate-950/10 mb-12 inline-block font-mono text-slate-950 text-sm font-black uppercase tracking-widest">
                                        Hash: #{Math.random().toString(36).substring(2, 9).toUpperCase()}-NODE
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <button onClick={() => setAuditSubmitted(false)} className="px-8 py-4 bg-slate-950 text-[#a1dc84] rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">New Export Audit</button>
                                        <Link href="/services" className="px-8 py-4 bg-white text-slate-950 rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">Service Nodes</Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
                                    <span className="bg-slate-950 text-[#a1dc84] px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-12 inline-block shadow-2xl">Global Trade Intelligence</span>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-950 mb-16 tracking-tighter leading-[1.1] font-primary">
                                        Audit Your <br /> Export <span className="text-white">Capability.</span>
                                    </h2>

                                    <form onSubmit={handleAuditSubmit} className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 relative">
                                        {auditLoading && (
                                            <div className="absolute inset-0 bg-[#a1dc84]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center rounded-[4rem]">
                                                <div className="size-20 border-8 border-slate-950/10 border-t-slate-950 rounded-full animate-spin"></div>
                                                <span className="mt-8 text-[11px] font-black text-slate-950 uppercase tracking-[0.5em] animate-pulse">Syncing International Trade Node...</span>
                                            </div>
                                        )}
                                        <div className="md:col-span-4 relative group">
                                            <select required value={auditData.sector} onChange={(e) => setAuditData({ ...auditData, sector: e.target.value })} className="w-full h-24 bg-white border-none rounded-[2.5rem] px-10 text-slate-950 font-black uppercase text-xs tracking-widest outline-none focus:ring-4 focus:ring-slate-950/5 transition-all appearance-none cursor-pointer">
                                                <option value="">Resource Sector</option>
                                                <option value="Solid Minerals">Solid Minerals</option>
                                                <option value="Agro commodities">Agro-Commodities</option>
                                                <option value="Industrial Spares">Industrial / Machinery</option>
                                                <option value="FMCG Retail">FMCG / Retail</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-10 top-1/2 -translate-y-1/2 text-slate-950 group-hover:translate-y-[-40%] transition-transform">expand_more</span>
                                        </div>
                                        <div className="md:col-span-5">
                                            <input required type="text" value={auditData.destination} onChange={(e) => setAuditData({ ...auditData, destination: e.target.value })} placeholder="Target Destination Hub..." className="w-full h-24 bg-white border-none rounded-[2.5rem] px-10 text-slate-950 font-black placeholder:text-slate-300 text-xs tracking-widest outline-none focus:ring-4 focus:ring-slate-950/5 transition-all uppercase" />
                                        </div>
                                        <div className="md:col-span-3">
                                            <button className="w-full h-14 bg-slate-950 text-[#a1dc84] rounded-lg font-black uppercase tracking-[0.4em] text-[10px] shadow-3xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-4">
                                                Audit Node <span className="material-symbols-outlined !text-2xl">rocket</span>
                                            </button>
                                        </div>
                                    </form>

                                    <div className="mt-24 flex flex-col sm:flex-row gap-16 justify-center items-center">
                                        <Link href="/resources/case-studies" className="text-slate-950 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-4 hover:underline decoration-2 underline-offset-8">
                                            <span className="material-symbols-outlined font-black">description</span> View Success Portfolios
                                        </Link>
                                        <Link href="/about" className="text-slate-950 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-2 hover:underline decoration-2 underline-offset-8">
                                            <span className="material-symbols-outlined font-black">verified_user</span> Compliance Grid
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Integration Nodes */}
            <section className="py-20 px-6 text-center border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/40">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 md:gap-32">
                    {[
                        { label: "Haulage Nodes", link: "/services/haulage" },
                        { label: "Procurement Nodes", link: "/services/procurement" },
                        { label: "Customs Nodes", link: "/services/customs" },
                        { label: "Warehousing Nodes", link: "/services/warehousing" }
                    ].map((node, i) => (
                        <Link key={i} href={node.link} className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] hover:text-[#a1dc84] transition-colors">{node.label}</Link>
                    ))}
                </div>
            </section>

            <ReadyToMove />
        </main>
    );
}
