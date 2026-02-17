"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tradeAPI } from "@/lib/tradeAPI";
import Link from 'next/link';

export default function UnifiedTrackingContent() {
    const [trackingId, setTrackingId] = useState('#MR-882910-US');
    const [isSearching, setIsSearching] = useState(false);
    const [viewMode, setViewMode] = useState<'timeline' | 'telemetry' | 'docs' | 'comms'>('timeline');
    const [shipmentData, setShipmentData] = useState<any>(null);
    const [error, setError] = useState('');
    const [isLive, setIsLive] = useState(true);

    // Initial load
    useEffect(() => {
        handleSearch(new Event('submit') as any);
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;

        setIsSearching(true);
        setError('');

        try {
            const data = await tradeAPI.getShipment(trackingId);
            setShipmentData(data);
        } catch (err: any) {
            setError('Shipment node not found in current grid.');
            setShipmentData(null);
        } finally {
            setIsSearching(false);
        }
    };

    const telemetry = shipmentData ? {
        vessel: shipmentData.vesselName || "MUB-STAR-ALPHA",
        imo: shipmentData.imoNumber || "992831",
        speed: `${shipmentData.speed || 18.2} knots`,
        heading: `${shipmentData.heading || 284}°`,
        seaState: shipmentData.seaState || "Moderate",
        satellite: shipmentData.satelliteStatus || "STABLE",
        coords: shipmentData.currentLocation || "5.4541° N, 3.3947° E"
    } : {
        vessel: "---",
        imo: "---",
        speed: "---",
        heading: "---",
        seaState: "---",
        satellite: "SEARCHING...",
        coords: "---"
    };

    const milestones = shipmentData?.telemetryLogs?.map((log: any, idx: number) => ({
        status: idx === shipmentData.telemetryLogs.length - 1 ? 'Active' : 'Completed',
        title: log.status,
        location: log.location,
        time: new Date(log.timestamp).toLocaleString(),
        icon: 'verified'
    })) || [];

    return (
        <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Tactical Input Bar */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-4 items-center shadow-sm">
                <div className="flex-1 w-full relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 !text-xl group-focus-within:text-[#a1dc84] transition-colors">qr_code_scanner</span>
                    <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                        className="w-full h-14 pl-14 pr-6 bg-slate-50 dark:bg-white/5 rounded-xl text-sm font-black text-slate-900 dark:text-white border-2 border-transparent focus:border-[#a1dc84] outline-none transition-all placeholder:text-slate-300 uppercase tracking-widest"
                        placeholder="ENTER WAYBILL IDENTIFIER..."
                    />
                </div>
                <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="h-14 px-8 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                >
                    {isSearching ? 'SYNCING NODE...' : 'INITIATE TRACKING'}
                </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Intel Panel */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    {/* Visual Progress Bar */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Control Tower Dispatch</h2>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">E2E Visibility Channel #MRL-9920</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#a1dc84]/10 rounded-full border border-[#a1dc84]/20">
                                <span className="size-2 bg-[#a1dc84] rounded-full animate-ping"></span>
                                <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-tighter">Live Telemetry</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-50 dark:border-white/5">
                            {[
                                { l: 'Destination', v: 'Lagos Hub (NG)', s: 'Final Gate' },
                                { l: 'Est. Arrival', v: 'Nov 18, 08:30', s: 'AI Predicted' },
                                { l: 'Load Status', v: 'Clearing Customs', s: 'Tactical Item' },
                                { l: 'Security', v: 'Verified', s: 'Seal #8821', success: true }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.l}</p>
                                    <p className={`text-sm font-black text-slate-900 dark:text-white ${stat.success ? 'text-[#a1dc84]' : ''}`}>{stat.v}</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">{stat.s}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Tabs */}
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                        <div className="p-2 flex bg-slate-50 dark:bg-white/5 gap-2">
                            {[
                                { id: 'timeline', label: 'Milestone Log', icon: 'route' },
                                { id: 'telemetry', label: 'Sensor Data', icon: 'sensors' },
                                { id: 'comms', label: 'Enterprise Comms', icon: 'forum' },
                                { id: 'docs', label: 'E-Waybill Vault', icon: 'description' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setViewMode(tab.id as any)}
                                    className={`flex-1 h-14 rounded-2xl flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${viewMode === tab.id ? 'bg-white dark:bg-slate-800 text-[#a1dc84] shadow-md border border-slate-100 dark:border-white/5' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <span className="material-symbols-outlined !text-xl">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="p-8 lg:p-12">
                            <AnimatePresence mode="wait">
                                {viewMode === 'timeline' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 relative">
                                        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-white/5" />
                                        {milestones.length > 0 ? milestones.map((m: any, idx: number) => (
                                            <div key={idx} className="relative flex gap-10 group">
                                                <div className={`size-12 rounded-full flex items-center justify-center z-10 border-4 border-white dark:border-slate-900 shadow-sm transition-all duration-500 ${m.status === 'Completed' ? 'bg-[#a1dc84] text-slate-900' : 'bg-slate-900 dark:bg-white text-[#a1dc84]'}`}>
                                                    <span className="material-symbols-outlined !text-xl font-black">{m.status === 'Completed' ? 'check' : 'near_me'}</span>
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <div className="flex items-center gap-4 mb-2">
                                                        <h4 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{m.title}</h4>
                                                        {m.status === 'Active' && <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border border-[#a1dc84]/20">Active Node</span>}
                                                    </div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.location}</p>
                                                    <p className="text-[9px] font-bold text-slate-500 mt-1">{m.time}</p>
                                                </div>
                                            </div>
                                        )) : (
                                            <div className="text-center py-20 text-slate-400 italic">No node journey data found.</div>
                                        )}
                                    </motion.div>
                                )}

                                {viewMode === 'comms' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                        {/* Proactive Mitigation Alert */}
                                        <div className="bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 p-6 rounded-3xl flex gap-6 items-start">
                                            <div className="size-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                                                <span className="material-symbols-outlined !text-2xl font-black">warning_amber</span>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-amber-900 dark:text-amber-400 uppercase tracking-tight italic">Strategic Mitigation Suggestion</h4>
                                                <p className="text-xs font-bold text-amber-800/70 dark:text-amber-400/60 mt-1 leading-relaxed">
                                                    AI node detected 14% congestion increase at Lagos Port. We recommend initiating a <span className="underline">Secondary Hub Dispatch</span> to avoid a 48hr vessel delay.
                                                </p>
                                                <div className="flex gap-4 mt-4">
                                                    <button className="px-5 py-2 bg-amber-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:scale-105 transition-all">Authorize Re-route</button>
                                                    <button className="px-5 py-2 border border-amber-200 text-amber-500 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-amber-100 transition-all">Dismiss</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stakeholder Thread */}
                                        <div className="space-y-6">
                                            <div className="flex gap-4 items-start">
                                                <div className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-400 shrink-0">OPS</div>
                                                <div className="flex-1">
                                                    <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-3xl rounded-tl-none border border-slate-100 dark:border-white/5">
                                                        <p className="text-[11px] font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                                            Vessel MUB-STAR-ALPHA is currently in clearance. HS codes for the FCL node have been extract by AI OCR and verified by customs agents.
                                                        </p>
                                                    </div>
                                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-2 ml-1">Mission Control • 2h ago</p>
                                                </div>
                                            </div>

                                            <div className="relative group">
                                                <textarea
                                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 pr-32 text-xs font-bold focus:ring-1 focus:ring-[#a1dc84] outline-none transition-all resize-none dark:text-white"
                                                    placeholder="MESSAGE STAKEHOLDERS..."
                                                    rows={2}
                                                />
                                                <button className="absolute right-3 bottom-3 px-6 py-2 bg-[#a1dc84] text-slate-900 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-[#a1dc84]/20 hover:scale-105 transition-all">Send</button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Satellite Hub (Right Side) */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    {/* Visual Map Context */}
                    <div className="bg-slate-900 rounded-[2.5rem] h-80 relative overflow-hidden group shadow-xl">
                        <div className="absolute inset-0 grayscale opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-[20s]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -inset-10 border border-[#a1dc84] rounded-full" />
                                <div className="size-4 bg-[#a1dc84] rounded-full border-4 border-slate-900 shadow-[0_0_20px_#a1dc84] relative z-10" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-slate-950/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center text-white">
                                <div>
                                    <p className="text-[8px] font-black uppercase text-slate-500 mb-0.5">Live AIS Coords</p>
                                    <p className="text-[10px] font-mono font-black">{telemetry.coords}</p>
                                </div>
                                <span className="material-symbols-outlined text-[#a1dc84] !text-lg">satellite_alt</span>
                            </div>
                        </div>
                    </div>

                    {/* Sensor Array */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
                        <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6">Asset Sensors</h3>
                        <div className="space-y-5">
                            {[
                                { l: 'Speed Over Ground', v: telemetry.speed, icon: 'bolt' },
                                { l: 'Transit Heading', v: telemetry.heading, icon: 'explore' },
                                { l: 'Sea Conditions', v: telemetry.seaState, icon: 'waves' },
                                { l: 'Sat Comms', v: telemetry.satellite, icon: 'signal_cellular_4_bar' }
                            ].map((p, i) => (
                                <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-50 dark:border-white/5 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined !text-lg text-slate-300">{p.icon}</span>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.l}</span>
                                    </div>
                                    <span className="text-xs font-black text-slate-900 dark:text-white italic">{p.v}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/portal/client/epod" className="w-full h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest mt-8 hover:bg-slate-800 transition-all transition-all active:scale-95 shadow-xl">
                            <span className="material-symbols-outlined !text-xl">qr_code_2</span>
                            AUTHENTICATE EPOD
                        </Link>
                    </div>

                    {/* Sustainability Node */}
                    <div className="p-8 rounded-[2rem] bg-[#a1dc84] shadow-lg shadow-[#a1dc84]/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-widest leading-none mb-1">Eco-Intelligence</h4>
                            <p className="text-2xl font-black text-slate-900 tracking-tighter leading-none mb-4 italic">65% <span className="text-[10px] font-bold opacity-60 ml-1">Carbon Reduction</span></p>
                            <div className="w-full h-1.5 bg-slate-950/20 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 2 }} className="h-full bg-slate-950" />
                            </div>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 !text-7xl text-slate-950/10 rotate-12">eco</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
