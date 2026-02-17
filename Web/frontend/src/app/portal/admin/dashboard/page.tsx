"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExecutiveDashboard() {
    const [kpis, setKpis] = useState([
        { label: "Global Gross Yield", value: "$4.82M", trend: "LOGGING", icon: "payments", color: "text-[#a1dc84]", key: "revenueYC" },
        { label: "Fleet Utilization", value: "94.8%", trend: "+2.1%", icon: "vital_signs", color: "text-blue-500", key: "fleetUtil" },
        { label: "Active Operations", value: "142", trend: "Stable", icon: "conveyor_belt", color: "text-amber-500", key: "activeShipments" },
        { label: "Service Accuracy", value: "99.2%", trend: "Optimal", icon: "verified_user", color: "text-emerald-500", key: "onTimeRate" },
    ]);

    const [loading, setLoading] = useState(true);
    const [isSimulating, setIsSimulating] = useState(false);
    const [corridors, setCorridors] = useState<any[]>([
        { name: "Lagos - Kano Corridor", yield: "$1.2M", health: "Optimal", performance: 95 },
        { name: "Atlantic Maritime Hub", yield: "$840K", health: "Optimal", performance: 92 },
        { name: "Trans-African Node", yield: "$420K", health: "Risk Alert", performance: 68 },
    ]);

    const fetchStats = async () => {
        setIsSimulating(true);
        try {
            const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://api.mubraizresourcesltd.com';
            const res = await fetch(`${apiBase}/api/admin/overview`);
            const data = await res.json();

            if (data.kpi) {
                setKpis(prev => prev.map(kpi => ({
                    ...kpi,
                    value: data.kpi[kpi.key || ''] || kpi.value,
                    trend: kpi.key === 'revenueYC' && data.kpi[kpi.key] === 'ACCESS_RESTRICTED' ? 'LOCKED' : kpi.trend
                })));
            }

            if (data.corridors) {
                setCorridors(data.corridors);
            }
        } catch (err) {
            console.error("Dashboard Sync Failed:", err);
            // Fallback to mock data is already handled by initial state
        } finally {
            setTimeout(() => {
                setIsSimulating(false);
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-[1600px] mx-auto">
            {/* Tactical Header */}
            <div className="relative rounded-[3rem] bg-slate-900 p-10 lg:p-16 overflow-hidden border border-white/5 shadow-3xl">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#a1dc84]/10 to-transparent"></div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-[#a1dc84]"></span>
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em]">Command Console v5.1</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none italic uppercase">
                            Operational <br />
                            <span className="text-[#a1dc84]">Command Tower</span>
                        </h1>
                        <p className="text-slate-400 text-[11px] font-black leading-relaxed uppercase tracking-[0.2em] max-w-md border-l-2 border-[#a1dc84]/30 pl-6">
                            Consolidated intelligence across the Mubraiz Resources Global Grid. High-fidelity yield forecasting and fleet diagnostics.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <button className="h-16 px-10 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-[#a1dc84]/20 border border-[#a1dc84]/20 flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined !text-xl">summarize</span>
                            Generate Executive PDF
                        </button>
                        <button
                            onClick={fetchStats}
                            disabled={isSimulating}
                            className="h-16 px-10 bg-white/5 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-3 backdrop-blur-md"
                        >
                            {isSimulating ? <span className="material-symbols-outlined animate-spin">refresh</span> : <span className="material-symbols-outlined">analytics</span>}
                            {isSimulating ? 'Recalculating...' : 'Refresh Matrix'}
                        </button>
                    </div>
                </div>
            </div>

            {/* KPI Array */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {kpis.map((kpi, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-[#0a0f0a] p-10 rounded-[2.5rem] border border-slate-100 dark:border-[#a1dc84]/10 shadow-xl shadow-slate-200/20 dark:shadow-none group hover:border-[#a1dc84]/50 transition-all relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</span>
                                <span className="text-[8px] font-bold text-[#a1dc84] uppercase tracking-widest">Verified node</span>
                            </div>
                            <div className={`size-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center ${kpi.color} shadow-inner group-hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined !text-2xl font-black">{kpi.icon}</span>
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic">{kpi.value}</h3>
                            <div className="text-right">
                                <span className="text-[10px] font-black text-[#a1dc84] uppercase block">{kpi.trend}</span>
                                <div className="mt-1 h-1 w-12 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#a1dc84] w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Revenue Heatmap Graph Overlay */}
                <div className="lg:col-span-8 bg-white dark:bg-[#0a0f0a] p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 dark:border-[#a1dc84]/10 shadow-3xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                        <div>
                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] italic">Forecasting & Yield Grid</h3>
                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Computational Logistics Model v4.0</p>
                        </div>
                        <div className="flex gap-2 bg-slate-50 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-100 dark:border-white/5">
                            {['24H', '7D', '1M', 'QUARTERLY'].map(t => (
                                <button key={t} className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${t === 'QUARTERLY' ? 'bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-[450px] w-full bg-slate-50/50 dark:bg-black/20 rounded-[2.5rem] relative overflow-hidden flex items-end px-12 pb-12 gap-5 border border-slate-50 dark:border-white/5">
                        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                        <AnimatePresence>
                            {isSimulating && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-[#0a0f0a]/60 backdrop-blur-md z-10 flex flex-col items-center justify-center gap-6"
                                >
                                    <div className="size-16 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.6em] animate-pulse">Running Yield Models...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mock Graph Bars */}
                        {[35, 55, 40, 85, 65, 80, 95, 55, 45, 75, 100, 70].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: isSimulating ? `${20 + Math.random() * 80}%` : `${h}%` }}
                                    transition={{ duration: 1.5, delay: i * 0.05 }}
                                    className="w-full bg-gradient-to-t from-[#a1dc84]/5 via-[#a1dc84]/40 to-[#a1dc84] rounded-t-2xl relative cursor-pointer"
                                >
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-[#a1dc84] px-3 py-1.5 rounded-lg text-[10px] font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                                        ${h * 12}K
                                    </div>
                                </motion.div>
                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corridor Performance Sidebar */}
                <div className="lg:col-span-4 space-y-10">
                    <div className="bg-slate-900 p-12 rounded-[3.5rem] border border-white/10 shadow-3xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-2xl">hub</span>
                                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Operational Nodal Sync</h3>
                            </div>

                            <div className="space-y-10">
                                {corridors.map((c, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mb-1.5">Sector Node {idx + 1}</p>
                                                <h4 className="text-lg font-black text-white tracking-tight italic uppercase leading-none">{c.name}</h4>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-white italic">{c.yield}</p>
                                                <p className={`text-[9px] font-black uppercase tracking-widest mt-1 ${c.health.includes('Risk') ? 'text-red-500' : 'text-[#a1dc84]'}`}>{c.health}</p>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${c.performance}%` }}
                                                transition={{ duration: 2 }}
                                                className={`h-full ${c.performance > 90 ? 'bg-gradient-to-r from-[#a1dc84]/40 to-[#a1dc84]' : 'bg-red-500'}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-16 -right-16 !text-[15rem] text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">settings_suggest</span>
                    </div>

                    <div className="bg-[#a1dc84] p-12 rounded-[3.5rem] shadow-3xl shadow-[#a1dc84]/20 relative overflow-hidden group cursor-pointer hover:translate-y-[-4px] transition-all">
                        <div className="relative z-10">
                            <div className="size-14 rounded-2xl bg-slate-900/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-slate-900 !text-3xl">lightbulbs</span>
                            </div>
                            <span className="text-slate-900/40 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">AI Optimization Engine</span>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-8 leading-none italic uppercase">Optimize Lane <br /> Tariff #4 (+8%)</h3>
                            <button className="h-14 w-full bg-slate-900 text-[#a1dc84] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">Command Across Grid</button>
                        </div>
                        <div className="absolute top-0 right-0 p-8">
                            <span className="material-symbols-outlined !text-4xl text-slate-900/20 animate-pulse">auto_awesome</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-10">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em]">Mubraiz Resources Operations Group | Mission Critical Systems | © 2024</p>
            </div>
        </div>
    );
}
