"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReadyToMove from "@/components/home/ReadyToMove";

export default function HaulageContent() {
    const [auditLoading, setAuditLoading] = useState(false);
    const [auditSubmitted, setAuditSubmitted] = useState(false);
    const [auditData, setAuditData] = useState({ origin: '', destination: '' });

    const handleAuditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAuditLoading(true);
        setTimeout(() => {
            setAuditLoading(false);
            setAuditSubmitted(true);
        }, 1500);
    };

    return (
        <main className="w-full bg-white dark:bg-[#0a0f1a] transition-colors duration-500 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative flex min-h-[750px] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
                    <Image
                        src="/images/branded-sinotruk-hero.jpeg"
                        alt="Mubraiz Resources - Premium Haulage Fleet"
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] font-primary text-white">
                            Executive <br />
                            <span className="text-[#a1dc84]">Haulage</span> <br />
                            <span className="text-white/40">Protocols.</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-2xl mb-14 leading-relaxed font-secondary">
                            Precision interstate container logistics with real-time telemetry. Optimized for <span className="text-white font-black underline decoration-[#a1dc84] decoration-2 underline-offset-4">100% Reliability.</span>
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/services/haulage/quote">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#a1dc84] text-slate-950 px-8 py-4 rounded-lg font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all flex items-center gap-4"
                                >
                                    Request Haulage Quote <span className="material-symbols-outlined !text-xl">trending_up</span>
                                </motion.button>
                            </Link>
                            <Link href="/portal/tracking">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4"
                                >
                                    Track Asset Intelligence <span className="material-symbols-outlined !text-xl">satellite_alt</span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
                        <div>
                            <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Brand Intelligence</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-10 font-primary">
                                Powering The <span className="text-[#a1dc84]">Modern</span> <br /> Supply Chain.
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-xl font-secondary">
                                Mubraiz Resources isn't just a trucking company. We are a technology-integrated logistics node, architecting the fastest routes between port terminals and industrial hubs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { val: "99.8%", label: "SLA Uptime", icon: "bolt" },
                                { val: "15min", label: "Dispatch Sync", icon: "sync" },
                                { val: "24/7", label: "Command Monitoring", icon: "monitoring" },
                                { val: "36", label: "States Covered", icon: "map" },
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl hover:border-[#a1dc84]/30 transition-all group relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined !text-8xl">{stat.icon}</span>
                                    </div>
                                    <div className="text-5xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-[#a1dc84] transition-colors tracking-tighter uppercase font-primary">{stat.val}</div>
                                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Workflow Integration */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                        <div className="max-w-2xl">
                            <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">Execution Protocol</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight font-primary">The Port-To-Door <br /> Engine.</h2>
                        </div>
                        <p className="text-slate-400 dark:text-slate-500 font-medium text-xl max-w-sm leading-relaxed pb-2">Full-stack logistics management from initial discharge to final facility receipt.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {[
                            { step: "01", icon: "anchor", title: "Port Clearance", desc: "Coordinated vessel docking and container discharge at major terminals." },
                            { step: "02", icon: "fact_check", title: "NCS Processing", desc: "Expert handling of all regulatory documentation and duty protocols." },
                            { step: "03", icon: "departure_board", title: "GPS Dispatch", desc: "Asset mobilization on Euro-6 certified vehicles with live satellite sync." },
                            { step: "04", icon: "strikethrough_s", title: "Facility Receipt", desc: "Precision arrival and unloading at your regional hub or private yard." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-white dark:bg-white/[0.02] p-10 rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col items-start gap-8 relative z-10 group hover:border-[#a1dc84]/30 hover:shadow-2xl hover:shadow-[#a1dc84]/5 transition-all duration-500 shadow-sm"
                            >
                                <div className="size-16 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all duration-500">
                                    <span className="material-symbols-outlined !text-3xl font-black">{item.icon}</span>
                                </div>
                                <div>
                                    <span className="text-[#a1dc84] font-black text-[9px] uppercase tracking-[0.4em] block mb-3">{item.step} Phase</span>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter font-primary leading-tight">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed font-secondary">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Asset Capabilities Section */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-32">
                        <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Hardware Intelligence</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[1.1] font-primary">
                            Modern Heavy <br /><span className="text-[#a1dc84]">Duty Infrastructure.</span>
                        </h2>
                        <div className="w-24 h-2 bg-[#a1dc84] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { name: "20FT Container Rig", category: "Heavy Input", stats: ["28,000kg Paylaod", "33.2cbm Capacity"], image: "/images/fleet/truck-1.jpeg" },
                            { name: "40FT Logistics Rig", category: "Volume Specialist", stats: ["26,000kg Payload", "67.7cbm Capacity"], image: "/images/fleet/15ton-truck-1.jpeg" },
                            { name: "High-Cube 40FT", category: "Max Capacity", stats: ["26,000kg Payload", "76.3cbm Capacity"], image: "/images/fleet/truck-2.jpeg" }
                        ].map((item, idx) => (
                            <motion.div key={idx} whileHover={{ y: -10 }} className="group bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-700">
                                <div className="relative h-72">
                                    <Image src={item.image} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-[#a1dc84] text-slate-950 text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-2xl">{item.category}</span>
                                    </div>
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-black text-white mb-6 tracking-tighter font-primary">{item.name}</h3>
                                    <div className="space-y-4 pt-8 border-t border-white/5 mt-auto">
                                        {item.stats.map((s, i) => (
                                            <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span>Specification</span>
                                                <span className="text-white">{s}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Table Hook */}
                    <div className="mt-32 p-16 md:p-32 bg-white/[0.02] rounded-[5rem] border border-white/5">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-[1.1] font-primary">
                                    Technical <br /> <span className="text-[#a1dc84]">Index V.3</span>
                                </h3>
                                <p className="text-slate-400 font-medium text-lg leading-relaxed mb-12 font-secondary">
                                    Our fleet is composed of 100% Sinotruk HOWO and Mercedes Actros units, maintained to Euro-6 environmental and mechanical safety standards.
                                </p>
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-black text-white font-primary tracking-tighter">ABS+ESC</span>
                                        <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Stability Systems</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-black text-white font-primary tracking-tighter">SAT-L3</span>
                                        <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Tracking Level</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: 'Standard Slider Chassis', val: '20ft/40ft Combined' },
                                    { label: 'Heavy Duty Fixed', val: 'Low-Center Gravity' },
                                    { label: 'Triple-Axle Units', val: 'Max Stability Proto' },
                                    { label: 'Hydraulic Hooks', val: 'Specialized OOG Ops' }
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-[#a1dc84]/5 hover:border-[#a1dc84]/30 transition-all group">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.label}</span>
                                        <span className="text-sm font-black text-white uppercase group-hover:text-[#a1dc84] transition-colors">{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Functional Intelligence Section */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="relative">
                            <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border-[15px] border-slate-50 dark:border-slate-800 shadow-3xl">
                                <Image src="/images/haulage/hero-truck.jpeg" alt="Logistics Intelligence Hub" fill className="object-cover grayscale" />
                                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center p-12 text-center">
                                    <div>
                                        <div className="size-20 bg-[#a1dc84] rounded-[2rem] flex items-center justify-center text-slate-950 mx-auto mb-8 shadow-2xl">
                                            <span className="material-symbols-outlined !text-4xl">travel_explore</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-4 font-primary">Command Node</h3>
                                        <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Active Monitoring Grid</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="audit" className="bg-slate-900 rounded-[5rem] p-16 md:p-32 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[100px] pointer-events-none"></div>

                            <AnimatePresence mode="wait">
                                {auditSubmitted ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                                        <div className="size-24 rounded-[2rem] bg-[#a1dc84] text-slate-900 flex items-center justify-center mx-auto mb-12 shadow-[0_20px_50px_rgba(161,220,132,0.3)]">
                                            <span className="material-symbols-outlined !text-5xl">share_location</span>
                                        </div>
                                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] font-primary">Corridor <br /> Synced.</h2>
                                        <p className="text-slate-400 text-xl font-medium mb-12 font-secondary">
                                            Intelligence for <span className="text-white font-black">{auditData.origin} → {auditData.destination}</span> has been transmitted to our optimization engine.
                                        </p>
                                        <div className="bg-white/5 px-10 py-5 rounded-2xl border border-white/5 mb-12 inline-block font-mono text-[#a1dc84] text-sm uppercase tracking-widest">
                                            ID: #TRZ-{(Math.random() * 9999).toFixed(0)}-L
                                        </div>
                                        <button onClick={() => setAuditSubmitted(false)} className="block w-full text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.4em] hover:text-white transition-all">New Corridor Audit</button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        <span className="bg-[#a1dc84]/20 text-[#a1dc84] px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.4em] mb-10 inline-block border border-[#a1dc84]/20">Logistics Audit Protocol</span>
                                        <h2 className="text-white text-5xl lg:text-6xl font-black mb-10 tracking-tighter leading-[0.9] font-primary">
                                            Check Your <br /> Transit <span className="text-[#a1dc84]">Direction.</span>
                                        </h2>
                                        <p className="text-slate-400 text-xl font-medium leading-relaxed mb-16 font-secondary">
                                            Input your primary route below. We will calculate the efficiency rating and provide a strategic haulage optimization brief.
                                        </p>

                                        <form onSubmit={handleAuditSubmit} className="space-y-10">
                                            {auditLoading && (
                                                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center rounded-[3rem]">
                                                    <div className="size-24 border-8 border-[#a1dc84]/10 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                                    <span className="mt-10 text-[11px] font-black text-[#a1dc84] uppercase tracking-[0.5em] animate-pulse">Syncing Network Grid...</span>
                                                </div>
                                            )}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-6">Port / Pickup Origin</label>
                                                    <input required type="text" value={auditData.origin} onChange={(e) => setAuditData({ ...auditData, origin: e.target.value })} placeholder="e.g. Apapa Terminal" className="w-full bg-white/5 border-2 border-white/5 rounded-3xl px-10 py-8 text-white text-lg font-bold outline-none focus:border-[#a1dc84] transition-all" />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-6">Regional Delivery Hub</label>
                                                    <input required type="text" value={auditData.destination} onChange={(e) => setAuditData({ ...auditData, destination: e.target.value })} placeholder="e.g. Kano Facility" className="w-full bg-white/5 border-2 border-white/5 rounded-3xl px-10 py-8 text-white text-lg font-bold outline-none focus:border-[#a1dc84] transition-all" />
                                                </div>
                                            </div>
                                            <button className="w-full h-14 bg-[#a1dc84] text-slate-950 rounded-lg font-black uppercase tracking-[0.4em] text-[10px] shadow-3xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
                                                Execute Intelligence Brief <span className="material-symbols-outlined !text-2xl">insights</span>
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auxiliary Tools Callout */}
            <section className="py-40 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        <Link href="/tools/calculator" className="group p-20 bg-white dark:bg-slate-900 rounded-[5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-3xl transition-all h-full flex flex-col justify-between">
                            <div>
                                <div className="size-20 bg-[#a1dc84]/10 rounded-[2rem] flex items-center justify-center text-[#a1dc84] mb-12 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all">
                                    <span className="material-symbols-outlined !text-4xl">calculate</span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-[1.1] font-primary">Freight Rate <br /> Engine.</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg font-secondary">Instant haulage cost calculation for any domestic route in Nigeria.</p>
                            </div>
                            <div className="pt-12 mt-12 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.3em]">Access Toolset</span>
                                <span className="material-symbols-outlined text-[#a1dc84] group-hover:translate-x-4 transition-transform">east</span>
                            </div>
                        </Link>
                        <Link href="/portal/tracking" className="group p-20 bg-slate-900 rounded-[5rem] border border-white/10 hover:border-[#a1dc84]/30 shadow-3xl transition-all h-full flex flex-col justify-between overflow-hidden relative">
                            <div className="absolute -top-20 -right-20 size-80 bg-[#a1dc84]/5 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="size-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-white mb-12 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all">
                                    <span className="material-symbols-outlined !text-4xl">my_location</span>
                                </div>
                                <h3 className="text-3xl font-black text-white tracking-tighter mb-6 leading-[1.1] font-primary">Telemetry <br /> Command.</h3>
                                <p className="text-white/40 font-medium text-lg font-secondary">Live GPS status and electronic proof of delivery (ePOD) dashboard.</p>
                            </div>
                            <div className="relative z-10 pt-12 mt-12 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.3em]">Launch Portal</span>
                                <span className="material-symbols-outlined text-[#a1dc84] group-hover:translate-x-4 transition-transform">east</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <ReadyToMove />
        </main>
    );
}

