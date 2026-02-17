"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function UnifiedEPOD() {
    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-3 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <Link className="hover:text-[#a1dc84]" href="/portal/client">Home</Link>
                <span className="material-symbols-outlined !text-xs opacity-50">chevron_right</span>
                <Link className="hover:text-[#a1dc84]" href="/portal/client/tracking">Shipments</Link>
                <span className="material-symbols-outlined !text-xs opacity-50">chevron_right</span>
                <span className="text-slate-900 dark:text-white">ePOD - Shipment #MR-99281</span>
            </div>

            {/* Tactical Header */}
            <div className="flex flex-wrap justify-between items-end gap-8 bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tighter leading-none uppercase italic">Delivery Receipt</h1>
                        <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#a1dc84]/20">Verified node</span>
                    </div>
                    <p className="text-slate-400 text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#a1dc84] !text-xl">event_available</span>
                        Oct 24, 2023 | 14:35 GMT
                    </p>
                </div>
                <button className="flex min-w-[240px] items-center justify-center gap-4 rounded-2xl h-14 px-8 bg-[#a1dc84] text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-[#a1dc84]/30 hover:brightness-105 active:scale-[0.98] transition-all">
                    <span className="material-symbols-outlined !text-xl font-black">download</span>
                    Sync PDF Evidence
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: "Status", value: "DELIVERED", color: "text-[#a1dc84]" },
                    { label: "Asset Tag", value: "TRK-9920-X" },
                    { label: "Client Account", value: "GLOBAL LOGISTICS CORP" },
                ].map(stat => (
                    <div key={stat.label} className="p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/20 dark:shadow-none">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">{stat.label}</p>
                        <p className={`text-2xl font-black tracking-tighter italic ${stat.color || 'text-slate-900 dark:text-white'}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 flex flex-col gap-10">
                    {/* Photo Evidence */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-none">
                        <h2 className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest px-10 py-8 border-b border-slate-50 dark:border-white/5 flex items-center gap-4">
                            <span className="material-symbols-outlined text-[#a1dc84] !text-2xl">photo_library</span>
                            Cargo Visual Intelligence
                        </h2>
                        <div className="p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Point of Contact", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" },
                                    { title: "Seal Verification", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
                                ].map(photo => (
                                    <div key={photo.title} className="group relative aspect-video overflow-hidden rounded-[2rem] bg-slate-100 cursor-pointer shadow-lg">
                                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={photo.img} alt={photo.title} />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                                            <p className="text-white text-[10px] font-black uppercase tracking-widest">{photo.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Digital Sig */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-none">
                            <h2 className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest px-8 py-6 border-b border-slate-50 dark:border-white/5 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-xl">draw</span>
                                Enterprise Signature
                            </h2>
                            <div className="p-10 flex flex-col items-center">
                                <div className="w-full h-32 border-2 border-dashed border-slate-100 dark:border-white/10 rounded-3xl flex items-center justify-center bg-slate-50/50 dark:bg-white/5 p-6 transition-all group-hover:bg-[#a1dc84]/5">
                                    <img className="max-h-full dark:invert grayscale opacity-60 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGny9B_dIugJTsqCavhQMBIOWDsGNM9XbOCVTE8GJLRS6tyE3P2YrsLJlN8LbjMxAkxYgWMRPFUvRfqsi3DJAcc4EH_CiX4gZXqhYX--9Yecvo8f-F1OXc7w3bbpmcBpiLTdUiXIc9A9VvNeOf8yn5sBicFpCmHLwNsNglOsPIVykbXjPaMeLiacZStS8280nzn5PBYe2AAce7_50o_PcNl61-OfT3OUuCa5VzfR7GHEXA3oxQPryRSgOa-UiSsL5W-sXGiGRnZGU" alt="Signature" />
                                </div>
                                <div className="mt-8 text-center">
                                    <p className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm italic tracking-tight">Benjamin S. Thompson</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Nodal Admin • Lagos Hub</p>
                                </div>
                            </div>
                        </div>

                        {/* Coords */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-none">
                            <h2 className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest px-8 py-6 border-b border-slate-50 dark:border-white/5 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-xl">satellite_alt</span>
                                AIS Drop Coordinates
                            </h2>
                            <div className="h-48 w-full relative group cursor-crosshair overflow-hidden grayscale opacity-40 hover:grayscale-0 transition-all">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -inset-10 border border-[#a1dc84] rounded-full" />
                                        <div className="size-4 bg-[#a1dc84] rounded-full shadow-[0_0_20px_#a1dc84]" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-white/5 text-center">
                                <span className="text-[10px] font-mono font-black text-slate-900 dark:text-white uppercase tracking-widest">6.454° N, 3.394° E</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Stat Hub */}
                <div className="lg:col-span-4 flex flex-col gap-10">
                    <div className="bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/5">
                        <div className="bg-[#a1dc84] px-8 py-6 flex items-center justify-between relative z-10">
                            <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                                <span className="material-symbols-outlined !text-xl text-slate-900">inventory_2</span>
                                Node condition
                            </h3>
                            <span className="bg-slate-900/20 px-3 py-1 rounded-full text-[9px] font-black text-slate-900 uppercase">Ver-8229</span>
                        </div>
                        <div className="p-10 flex flex-col gap-8 relative z-10">
                            {[
                                { l: "Seal Integrity", v: "COMPROMISE-ZERO", s: "Verified" },
                                { l: "Ambient Humidity", v: "42% RELATIVE", s: "Optimal" },
                                { l: "Cargo Load", v: "15.4 TONS", s: "FCL Status" },
                            ].map((spec, i) => (
                                <div key={i} className="flex flex-col border-l-2 border-[#a1dc84]/20 pl-6">
                                    <span className="text-[9px] text-[#a1dc84] font-black uppercase tracking-widest mb-1">{spec.l}</span>
                                    <p className="text-lg font-black text-white italic tracking-tighter uppercase">{spec.v}</p>
                                    <p className="text-[8px] font-bold text-slate-500 uppercase mt-1 tracking-widest">{spec.s}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#a1dc84] mb-8">Digital Handshake Hash</h4>
                        <div className="space-y-6">
                            {[
                                { k: "Vehicle Node", v: "TRK-992-NY" },
                                { k: "Grid Sequence", v: "7f28-9921-a9b2" },
                                { k: "Protocol Log", v: "LO-88273-001" },
                            ].map(id => (
                                <div key={id.k} className="flex justify-between items-center py-4 border-b border-slate-50 dark:border-white/5 last:border-0">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{id.k}</span>
                                    <span className="text-[10px] font-mono font-black text-slate-900 dark:text-white uppercase tracking-tighter">{id.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Evidence Certification */}
            <div className="flex flex-col items-center justify-center py-10 gap-6 opacity-40 border-t border-slate-50 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#a1dc84] !text-2xl font-black">verified_user</span>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Secure E2E Provenance Verified</p>
                </div>
                <p className="text-[10px] text-center max-w-lg font-bold leading-relaxed uppercase tracking-[0.3em] px-6">
                    Mubraiz resources ecosystem signature node verified at lagos terminal.
                </p>
            </div>
        </div>
    );
}
