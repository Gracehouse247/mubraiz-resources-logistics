"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const corridors = [
    {
        id: "lkw",
        name: "Lagos-Kano-West",
        type: "Interstate Road",
        efficiency: 94,
        load: "High",
        status: "Fluid",
        desc: "The primary industrial artery connecting the Port of Apapa to Northern Nigerian hubs."
    },
    {
        id: "tgh",
        name: "Tema-Ouagadougou",
        type: "Cross-Border Road",
        efficiency: 82,
        load: "Moderate",
        status: "Delayed (Customs)",
        desc: "Strategic land-locked corridor facilitating transit from Ghana's Tema Port to Burkina Faso."
    },
    {
        id: "atl",
        name: "Atlantic Maritime Hub",
        type: "Sea Lane",
        efficiency: 98,
        load: "Extreme",
        status: "Optimal",
        desc: "High-volume container transit route linking West African ports to global maritime nodes."
    }
];

const infrastructureNodes = [
    { title: "Apapa Port Ops", location: "Lagos, NG", icon: "port_service" },
    { title: "Ibafo Maintenance Yard", location: "Ogun, NG", icon: "precision_manufacturing" },
    { title: "Kano Dry Hub", location: "Kano, NG", icon: "inventory_2" },
    { title: "Tema Trade Node", location: "Tema, GH", icon: "hub" }
];

export default function NetworkOverviewContent() {
    const [activeCorridor, setActiveCorridor] = useState(corridors[0]);
    const [requestLoading, setRequestLoading] = useState(false);
    const [requestSuccess, setRequestSuccess] = useState(false);

    const handleNetworkBrief = (e: React.FormEvent) => {
        e.preventDefault();
        setRequestLoading(true);
        setTimeout(() => {
            setRequestLoading(false);
            setRequestSuccess(true);
            setTimeout(() => setRequestSuccess(false), 3000);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500 overflow-x-hidden">
            {/* Dark Tech Hero */}
            <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#a1dc84]/5 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
                    {/* Simulated World Map Grid */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "radial-gradient(#a1dc84 1px, transparent 1px)",
                        backgroundSize: "60px 60px"
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#a1dc84] mb-12">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="material-symbols-outlined !text-[10px]">chevron_right</span>
                            <span>Global Network</span>
                        </nav>

                        <h1 className="text-white text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-10 uppercase font-primary">
                            The <br />
                            Continental <br />
                            <span className="text-[#a1dc84]">Grid.</span>
                        </h1>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg border-l-4 border-[#a1dc84] pl-8 mb-12 font-secondary">
                            A high-fidelity logistics network architected for the rigors of African trade. Spanning strategic ports, dry hubs, and optimized interstate corridors.
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <Link href="/network/map">
                                <button className="h-16 flex items-center gap-4 px-12 rounded-2xl bg-[#a1dc84] text-slate-950 text-xs font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 font-primary">
                                    Launch Interface <span className="material-symbols-outlined !text-xl">satellite_alt</span>
                                </button>
                            </Link>
                            <a href="#stats">
                                <button className="h-16 flex items-center gap-4 px-10 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-primary">
                                    Network Specs
                                </button>
                            </a>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-slate-900/50 backdrop-blur-3xl p-12 rounded-[5rem] border border-white/10 shadow-3xl relative z-10"
                        >
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <span className="text-[#a1dc84] text-[9px] font-black uppercase tracking-widest block mb-2">Live Node Status</span>
                                    <h3 className="text-3xl text-white font-black uppercase tracking-tighter font-primary">Apapa-Kano-Node</h3>
                                </div>
                                <span className="size-3 bg-[#a1dc84] rounded-full animate-ping"></span>
                            </div>

                            <div className="space-y-10">
                                {corridors.slice(0, 2).map((corridor, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest">
                                            <span>{corridor.name} Efficiency</span>
                                            <span className="text-white">{corridor.efficiency}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${corridor.efficiency}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                                                className="h-full bg-gradient-to-r from-[#a1dc84] to-emerald-400"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Active Units</p>
                                    <p className="text-3xl font-black text-white font-primary italic underline underline-offset-8 decoration-[#a1dc84]">1,248+</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Uptime Index</p>
                                    <p className="text-3xl font-black text-white font-primary italic underline underline-offset-8 decoration-[#a1dc84]">99.98</p>
                                </div>
                            </div>
                        </motion.div>
                        {/* Decorative Circles */}
                        <div className="absolute -top-10 -right-10 size-60 bg-[#a1dc84] rounded-full blur-[120px] opacity-10"></div>
                        <div className="absolute -bottom-20 -left-10 size-80 bg-blue-500 rounded-full blur-[140px] opacity-10"></div>
                    </div>
                </div>
            </section>

            {/* Strategic Infrastructure Stats */}
            <section id="stats" className="py-40 max-w-7xl mx-auto px-8 md:px-20">
                <div className="text-center mb-24">
                    <span className="text-[#a1dc84] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block font-primary">Network Capability</span>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white uppercase tracking-tighter leading-none mb-10 font-primary">
                        Physical <br className="md:hidden" /> Infrastructure.
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium font-secondary max-w-2xl mx-auto text-lg">
                        Mubraiz Resources operates at the intersection of scale and precision, managing specialized nodes that power cross-border commerce.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infrastructureNodes.map((node, i) => (
                        <div key={i} className="group p-10 bg-slate-50 dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 transition-all hover:shadow-2xl">
                            <div className="size-16 bg-[#a1dc84]/10 rounded-2xl flex items-center justify-center text-[#a1dc84] mb-8 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all">
                                <span className="material-symbols-outlined !text-3xl">{node.icon}</span>
                            </div>
                            <h4 className="text-xl font-black text-slate-950 dark:text-white uppercase tracking-tighter font-primary mb-2 italic">{node.title}</h4>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{node.location}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Corridor Detail Node */}
            <section className="py-40 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 md:px-20 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[#a1dc84] font-black text-[10px] uppercase tracking-[0.5em] mb-8 block font-primary">Trade Corridors</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tighter uppercase font-primary mb-12">
                            Optimized <br /> <span className="text-[#a1dc84]">Operational</span> <br /> Lanes.
                        </h2>

                        <div className="space-y-4">
                            {corridors.map(corridor => (
                                <button
                                    key={corridor.id}
                                    onClick={() => setActiveCorridor(corridor)}
                                    className={`w-full flex items-center justify-between p-8 rounded-[2rem] transition-all group ${activeCorridor.id === corridor.id ? 'bg-slate-950 text-white shadow-2xl' : 'bg-white dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                    <div className="text-left">
                                        <h4 className={`text-lg font-black uppercase tracking-tight font-primary ${activeCorridor.id === corridor.id ? 'text-[#a1dc84]' : 'group-hover:text-[#a1dc84]'}`}>{corridor.name}</h4>
                                        <p className="text-[9px] font-black uppercase tracking-widest opacity-60">{corridor.type}</p>
                                    </div>
                                    <span className="material-symbols-outlined !text-4xl group-hover:translate-x-2 transition-transform">{activeCorridor.id === corridor.id ? 'arrow_circle_right' : 'chevron_right'}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#0f172a] p-12 md:p-20 rounded-[5rem] shadow-3xl border border-slate-100 dark:border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-[#a1dc84] to-transparent"></div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCorridor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-10"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest italic">{activeCorridor.type}</span>
                                        <h3 className="text-4xl font-black text-slate-950 dark:text-white uppercase tracking-tighter font-primary leading-tight">{activeCorridor.name}</h3>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg ${activeCorridor.status === 'Optimal' || activeCorridor.status === 'Fluid' ? 'bg-[#a1dc84] text-slate-950' : 'bg-amber-400 text-slate-950'}`}>
                                        {activeCorridor.status}
                                    </div>
                                </div>

                                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed font-secondary">
                                    {activeCorridor.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Efficiency Rating</p>
                                        <p className="text-4xl font-black text-slate-950 dark:text-white font-primary italic">{activeCorridor.efficiency}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Load Density</p>
                                        <p className="text-4xl font-black text-slate-950 dark:text-white font-primary italic">{activeCorridor.load}</p>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex gap-4">
                                    <button className="flex-1 bg-slate-950 dark:bg-white text-white dark:text-slate-950 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-xl font-primary active:scale-95 transition-all">
                                        Corridor Intel
                                    </button>
                                    <button className="size-16 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 text-[#a1dc84] hover:bg-[#a1dc84] hover:text-white transition-all">
                                        <span className="material-symbols-outlined font-black">gps_fixed</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Strategic Consultation CTA */}
            <section className="py-40 max-w-5xl mx-auto px-8 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-[#a1dc84]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="relative z-10 space-y-12">
                    <h2 className="text-5xl md:text-8xl font-black text-slate-950 dark:text-white leading-[0.85] tracking-tighter uppercase font-primary">
                        Access <br className="md:hidden" /> The <span className="text-[#a1dc84]">Global</span> <br /> Grid.
                    </h2>

                    <form onSubmit={handleNetworkBrief} className="max-w-xl mx-auto space-y-6">
                        <div className="relative group">
                            <input
                                required
                                type="email"
                                placeholder="Corporate Email Address"
                                className="w-full h-20 px-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white font-black text-sm uppercase tracking-widest outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84] transition-all text-center"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#a1dc84] scale-x-0 group-focus-within:scale-x-100 transition-transform origin-center"></div>
                        </div>
                        <button
                            disabled={requestLoading || requestSuccess}
                            className={`w-full py-7 rounded-3xl font-black text-[11px] uppercase tracking-[0.5em] shadow-3xl transition-all flex items-center justify-center gap-6 font-primary ${requestSuccess ? 'bg-[#a1dc84] text-slate-950 shadow-[#a1dc84]/20' : 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-slate-950/20 active:scale-95'}`}
                        >
                            {requestLoading ? (
                                <><span className="material-symbols-outlined animate-spin">autorenew</span> Syncing Network Nodes...</>
                            ) : requestSuccess ? (
                                <><span className="material-symbols-outlined">verified</span> Brief Transmitted</>
                            ) : (
                                <>Request Network Brief <span className="material-symbols-outlined !text-2xl">sensors</span></>
                            )}
                        </button>
                    </form>

                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-12">
                        Real-time status: <span className="text-[#a1dc84] animate-pulse">All nodes operational</span>
                    </p>
                </div>
            </section>
        </main>
    );
}
