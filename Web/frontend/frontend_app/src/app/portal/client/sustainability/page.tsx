"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilityDashboard() {
    const metrics = [
        { label: "Total Carbon Footprint", value: "1,240.5", unit: "tCO2e", trend: "-12.5%", color: "text-[#a1dc84]" },
        { label: "Eco-Efficiency Score", value: "88/100", unit: "GLEC Grade", trend: "A+", color: "text-emerald-500" },
        { label: "Reforestation Impact", value: "2,400", unit: "Hectares Offset", trend: "Global Goal", color: "text-blue-500" },
    ];

    const corridors = [
        { name: "Lagos - Kano Corridor", emission: "0.12 kg/ton-km", status: "Optimal", efficiency: 95 },
        { name: "Atlantic Maritime Hub", emission: "0.08 kg/ton-km", status: "Greening", efficiency: 82 },
        { name: "Tema - Ouagadougou", emission: "0.15 kg/ton-km", status: "Review", efficiency: 68 },
    ];

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
            {/* Command Header */}
            <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-16 overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <div className="max-w-xl">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">ESG Command Center</span>
                        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight italic">Carbon Intelligence <br /> & Sustainability Node</h2>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-widest">
                            Real-time GLEC-compliant emissions tracking across your global supply chain grid.
                        </p>
                    </div>
                    <div className="size-48 rounded-full border-8 border-white/5 flex items-center justify-center relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute inset-0 border-t-8 border-[#a1dc84] rounded-full"
                        />
                        <div className="text-center">
                            <p className="text-4xl font-black text-white italic tracking-tighter">88%</p>
                            <p className="text-[8px] font-black text-[#a1dc84] uppercase tracking-widest">Grid Efficiency</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((m, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
                    >
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{m.label}</p>
                        <div className="flex items-baseline gap-2">
                            <span className={`text-4xl font-black italic tracking-tighter ${m.color}`}>{m.value}</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{m.unit}</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                            <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">{m.trend} Potential</span>
                            <span className="material-symbols-outlined text-[#a1dc84] !text-xl">trending_down</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Lane Efficiency Radar */}
                <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Corridor Efficiency Matrix</h3>
                            <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">Live Performance Analytics</p>
                        </div>
                        <button className="h-10 px-6 bg-slate-50 dark:bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#a1dc84] hover:text-slate-900 transition-all">Export GLEC Report</button>
                    </div>

                    <div className="space-y-8">
                        {corridors.map((c, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{c.status}</p>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{c.name}</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-900 dark:text-white italic">{c.emission}</p>
                                        <p className="text-[8px] font-bold text-slate-400 uppercase">Per Ton-KM</p>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-slate-50 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${c.efficiency}%` }}
                                        transition={{ duration: 1.5, delay: idx * 0.2 }}
                                        className={`h-full ${c.efficiency > 90 ? 'bg-[#a1dc84]' : c.efficiency > 75 ? 'bg-blue-500' : 'bg-amber-500'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sustainability Strategy Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-[#a1dc84] p-10 rounded-[3rem] shadow-2xl shadow-[#a1dc84]/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4">Greener Pathing AI</h4>
                            <p className="text-2xl font-black text-slate-900 tracking-tighter italic mb-6">Switch to Rail <br /> for 40% Offset</p>
                            <button className="w-full h-14 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Re-route Active Node
                            </button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 !text-[12rem] text-slate-900/5 rotate-12">eco</span>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[3rem] border border-white/5 shadow-2xl">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6">Impact Log</h4>
                        <div className="space-y-6">
                            {[
                                { t: "Tree Planting Initiative", v: "+150 Units", d: "Oct 12" },
                                { t: "Biofuel Fleet Migration", v: "8.2t Offset", d: "Oct 09" },
                                { t: "Intermodal Rail Shift", v: "15.4t Offset", d: "Sept 28" },
                            ].map((log, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-tight">{log.t}</p>
                                        <p className="text-[8px] font-bold text-slate-500 uppercase mt-1">{log.d} • Verified</p>
                                    </div>
                                    <span className="text-[10px] font-black text-[#a1dc84] tracking-tighter">{log.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
