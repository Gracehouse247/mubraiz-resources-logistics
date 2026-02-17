"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ShipmentListContent() {
    const [filter, setFilter] = useState('all');

    const shipments = [
        { id: "#MR-882910-US", origin: "NEW YORK (US)", dest: "LAGOS (NG)", status: "In Transit", eta: "Nov 18", progress: 65, type: "FCL 40ft" },
        { id: "#MR-882905-UK", origin: "LONDON (UK)", dest: "TEMA (GH)", status: "Delivered", eta: "Nov 12", progress: 100, type: "LCL" },
        { id: "#MR-882901-CN", origin: "SHANGHAI (CN)", dest: "LAGOS (NG)", status: "Clearing", eta: "Nov 20", progress: 85, type: "FCL 20ft" },
        { id: "#MR-882898-ZA", origin: "DURBAN (ZA)", dest: "KANO (NG)", status: "Pending", eta: "Nov 25", progress: 10, type: "Flatbed" },
    ];

    const filtered = shipments.filter(s => filter === 'all' || s.status.toLowerCase().includes(filter));

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
            {/* Header / Stats Overlay */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Global Shipment Inventory</h2>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Active Strategic Supply Chain Nodes</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl gap-2 border border-slate-200/50 dark:border-white/5">
                    {['all', 'transit', 'delivered', 'clearing'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-white dark:bg-slate-800 text-[#a1dc84] shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Shipment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((shipment, idx) => (
                        <motion.div
                            key={shipment.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden group hover:border-[#a1dc84]/50 transition-all cursor-pointer"
                        >
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mb-1">{shipment.status}</p>
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">{shipment.id}</h3>
                                    </div>
                                    <div className="size-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#a1dc84] transition-colors">
                                        <span className="material-symbols-outlined !text-2xl">local_shipping</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="size-2 bg-[#a1dc84] rounded-full" />
                                            <div className="w-0.5 h-6 bg-slate-100 dark:bg-white/5" />
                                            <div className="size-2 border-2 border-[#a1dc84] rounded-full" />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div>
                                                <p className="text-[8px] font-black text-slate-400 uppercase">Origin</p>
                                                <p className="text-xs font-black text-slate-900 dark:text-white tracking-tight">{shipment.origin}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black text-slate-400 uppercase">Destination</p>
                                                <p className="text-xs font-black text-slate-900 dark:text-white tracking-tight">{shipment.dest}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[8px] font-black text-slate-400 uppercase">Mission Progress</p>
                                        <p className="text-[10px] font-black text-slate-900 dark:text-white italic">{shipment.progress}%</p>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${shipment.progress}%` }}
                                            className="h-full bg-[#a1dc84]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-white/5 px-8 py-5 border-t border-slate-100 dark:border-white/5 flex justify-between items-center group-hover:bg-[#a1dc84] transition-all">
                                <div>
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900">ETA Estimate</p>
                                    <p className="text-xs font-black text-slate-900 group-hover:text-slate-900 italic tracking-tight">{shipment.eta}</p>
                                </div>
                                <Link href="/portal/client/tracking" className="h-10 px-6 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center hover:scale-105 transition-all group-hover:bg-slate-950 shadow-xl shadow-slate-950/20">
                                    Open Node
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Book New Node */}
                <div className="rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center p-12 text-center group hover:border-[#a1dc84] hover:bg-[#a1dc84]/5 transition-all cursor-pointer">
                    <div className="size-16 rounded-[2rem] bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#a1dc84]/20 transition-all">
                        <span className="material-symbols-outlined !text-4xl text-[#a1dc84]">add_circle</span>
                    </div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Initiate Cargo Node</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 max-w-[180px] leading-relaxed uppercase tracking-widest">Connect a new asset stream to the global infrastructure.</p>
                </div>
            </div>
        </div>
    );
}
