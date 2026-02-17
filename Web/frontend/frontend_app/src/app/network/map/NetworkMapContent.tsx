"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function NetworkMapContent() {
    const [selectedHub, setSelectedHub] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<'road' | 'sea' | 'rail'>('road');
    const [searchQuery, setSearchQuery] = useState("");
    const [isExporting, setIsExporting] = useState(false);
    const [exportSuccess, setExportSuccess] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const hubs = [
        { id: 'lagos', name: 'Lagos Corridor (NG)', x: 450, y: 320, type: 'port', cap: 82, clearance: '1.8 Days', traffic: '450', status: 'optimal', color: '#a1dc84' },
        { id: 'tema', name: 'Tema Trade Node (GH)', x: 380, y: 340, type: 'port', cap: 65, clearance: '4.2 Days', traffic: '280', status: 'congestion', color: '#FACC15' },
        { id: 'abidjan', name: 'Abidjan Hub (CI)', x: 300, y: 330, type: 'hub', cap: 91, clearance: '2.1 Days', traffic: '190', status: 'optimal', color: '#a1dc84' },
        { id: 'durban', x: 650, y: 580, name: 'Port of Durban (ZA)', type: 'port', cap: 78, clearance: '3.5 Days', traffic: '520', status: 'optimal', color: '#a1dc84' },
        { id: 'lubumbashi', name: 'Lubumbashi (CD)', x: 580, y: 420, type: 'rail', cap: 45, clearance: '0.8 Days', traffic: '120', status: 'alert', color: '#ef4444' },
        { id: 'mombasa', name: 'Mombasa Gate (KE)', x: 720, y: 390, type: 'port', cap: 88, clearance: '2.4 Days', traffic: '310', status: 'optimal', color: '#a1dc84' },
        { id: 'kano', name: 'Kano Dry Port (NG)', x: 470, y: 240, type: 'hub', cap: 72, clearance: '1.2 Days', traffic: '180', status: 'optimal', color: '#a1dc84' },
        { id: 'douala', name: 'Douala Port (CM)', x: 500, y: 380, type: 'port', cap: 55, clearance: '3.8 Days', traffic: '210', status: 'congestion', color: '#FACC15' },
    ];

    const alerts = [
        { port: "Tema Port (GH)", status: "HIGH", time: "12m ago", msg: "Average clearance: 4.2 days", color: "amber" },
        { port: "Beitbridge Border", status: "ALERT", time: "2h ago", msg: "Manual inspection backlog.", color: "red" },
        { port: "Lagos Apapa (NG)", status: "NORMAL", time: "1h ago", msg: "Average clearance: 1.8 days", color: "green" },
    ];

    const filteredHubs = searchQuery
        ? hubs.filter(h => h.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : hubs;

    const currentHubData = hubs.find(h => h.id === selectedHub);

    const handleExport = () => {
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false);
            setExportSuccess(true);
            setTimeout(() => setExportSuccess(false), 3000);
        }, 2200);
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1200);
    };

    const [requestStatus, setRequestStatus] = useState<string | null>(null);

    const handleDispatchLog = (hubName: string) => {
        setRequestStatus(hubName);
        setTimeout(() => setRequestStatus(null), 3000);
    };

    return (
        <main className="h-screen flex flex-col bg-white dark:bg-[#0a0f1a] font-primary text-slate-800 dark:text-slate-300 overflow-hidden transition-colors duration-500">

            {/* Top Command Bar */}
            <header className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur-xl dark:bg-slate-900/90 dark:border-white/5 z-50">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-[#a1dc84] shadow-2xl group-hover:rotate-12 transition-transform p-2">
                            <span className="material-symbols-outlined !text-2xl font-black">hub</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-sm font-black uppercase tracking-widest dark:text-white leading-none">Network Command</h2>
                            <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-[0.3em] mt-1">Live Sync v4.2</span>
                        </div>
                    </Link>
                    <nav className="hidden xl:flex items-center gap-8">
                        {[
                            { name: 'Global Assets', href: '/fleet' },
                            { name: 'Fleet Radar', href: '/fleet' },
                            { name: 'Trade Lanes', href: '/services/global-trade' },
                            { name: 'Regulatory Grid', href: '/resources/wiki' }
                        ].map(item => (
                            <Link key={item.name} href={item.href} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-[#a1dc84] transition-all relative group">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a1dc84] transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col text-right mr-4 leading-tight">
                        <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mb-1 animate-pulse">Satellite Uplink Active</p>
                        <p className="text-[11px] font-black dark:text-white uppercase tracking-tighter">Latency: 2.14ms</p>
                    </div>
                    <button onClick={handleRefresh} className={`size-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-[#a1dc84]/10 transition-all ${isRefreshing ? 'animate-spin' : ''}`}>
                        <span className="material-symbols-outlined !text-xl">sync</span>
                    </button>
                    <Link href="/resources/help">
                        <button className="bg-[#a1dc84] text-slate-900 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(161,220,132,0.3)] hover:brightness-110 active:scale-95 transition-all">
                            Operator HQ
                        </button>
                    </Link>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative">
                {/* Left Vitals Panel */}
                <aside className="w-96 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-2xl border-r border-slate-200 dark:border-white/5 flex flex-col z-40">
                    <div className="p-8 space-y-12 flex flex-col h-full">
                        <div>
                            <div className="flex justify-between items-end mb-8">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Network Vitals</h3>
                                <button className="text-[8px] font-black text-[#a1dc84] uppercase underline underline-offset-4 tracking-[0.2em] hover:text-white transition-colors">Details</button>
                            </div>
                            <div className="space-y-4">
                                <div className="p-8 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm group hover:border-[#a1dc84]/30 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Fleet Load</p>
                                        <span className="material-symbols-outlined !text-xl text-[#a1dc84] opacity-40">local_shipping</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-4xl font-black dark:text-white font-primary italic">1,248</span>
                                        <span className="text-[#a1dc84] text-[11px] font-black">+5.2%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-[#a1dc84] to-emerald-400" />
                                    </div>
                                </div>
                                <div className="p-8 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm group hover:border-[#a1dc84]/30 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Route Efficiency</p>
                                        <span className="material-symbols-outlined !text-xl text-[#a1dc84] opacity-40">bolt</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black dark:text-white font-primary italic">94.8%</span>
                                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-widest">Optimal Node</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Congestion Alerts</h3>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                                    <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Live Feed</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {alerts.map((alert, i) => (
                                    <div key={i} className={`p-6 bg-white dark:bg-white/5 rounded-3xl border border-transparent hover:border-white/10 transition-all group cursor-pointer ${alert.color === 'amber' ? 'bg-amber-500/5' : alert.color === 'red' ? 'bg-red-500/5' : 'bg-[#a1dc84]/5'}`}>
                                        <div className="flex justify-between items-start mb-3">
                                            <p className="text-xs font-black dark:text-white uppercase tracking-tight">{alert.port}</p>
                                            <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${alert.color === 'amber' ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/20' : alert.color === 'red' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-[#a1dc84] text-slate-900 shadow-lg shadow-[#a1dc84]/20'}`}>
                                                {alert.status}
                                            </span>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-4 italic">"{alert.msg}"</p>
                                        <div className="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                            <span className="material-symbols-outlined !text-xs">schedule</span>
                                            Updated {alert.time}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-200 dark:border-white/5">
                            <button
                                onClick={handleExport}
                                disabled={isExporting}
                                className={`w-full h-16 flex items-center justify-center gap-4 rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-2xl relative overflow-hidden ${exportSuccess ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-950 text-white shadow-slate-950/20 active:scale-95'}`}
                            >
                                <AnimatePresence mode="wait">
                                    {isExporting ? (
                                        <motion.div key="exporting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined animate-spin">autorenew</span>
                                            Packaging Data...
                                        </motion.div>
                                    ) : exportSuccess ? (
                                        <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined">check_circle</span>
                                            Audit Downloaded
                                        </motion.div>
                                    ) : (
                                        <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined !text-xl">analytics</span>
                                            Export Network Audit
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Interactive Map View */}
                <section className="flex-1 relative bg-[#f1f4f1] dark:bg-[#0a0f1d] overflow-hidden">
                    {/* Floating Search Hub */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-40">
                        <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-3xl flex items-center p-2 border border-white/20 dark:border-white/5">
                            <div className="pl-6 text-[#a1dc84]">
                                <span className="material-symbols-outlined !text-2xl font-black">gps_fixed</span>
                            </div>
                            <input
                                className="flex-1 h-14 border-none focus:ring-0 text-xs font-black bg-transparent dark:text-white placeholder:text-slate-400 placeholder:font-black uppercase tracking-[0.3em] pl-6"
                                placeholder="Locate regional node..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")} className="px-4 text-slate-400 hover:text-[#a1dc84] transition-colors">
                                    <span className="material-symbols-outlined !text-xl">backspace</span>
                                </button>
                            )}
                            <div className="h-10 w-px bg-slate-200 dark:bg-white/10 mx-4"></div>
                            <button className="flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 transition-all active:scale-95">
                                <span className="material-symbols-outlined !text-lg">tune</span>
                                <span className="hidden sm:inline">Adv. Filters</span>
                            </button>
                        </div>
                        {searchQuery && filteredHubs.length > 0 && (
                            <div className="absolute top-[calc(100%+12px)] inset-x-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-3xl p-4 space-y-2">
                                {filteredHubs.map(hub => (
                                    <button
                                        key={hub.id}
                                        onClick={() => { setSelectedHub(hub.id); setSearchQuery(""); }}
                                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-[#a1dc84]/10 group transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="size-3 rounded-full" style={{ backgroundColor: hub.color }}></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-[#a1dc84] transition-colors">{hub.name}</span>
                                        </div>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{hub.type} node</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Interactive SVG Layer */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-10">
                        <svg className="w-full h-full max-w-6xl max-h-[75vh]" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
                            {/* Connector Routes Grid */}
                            <g className="opacity-40">
                                {activeFilter === 'road' && (
                                    <>
                                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} d="M380,340 L450,320" fill="none" stroke="#a1dc84" strokeWidth="2.5" strokeDasharray="12 6" />
                                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} d="M450,320 L470,240" fill="none" stroke="#a1dc84" strokeWidth="2.5" strokeDasharray="12 6" />
                                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} d="M450,320 L580,420" fill="none" stroke="#a1dc84" strokeWidth="2.5" strokeDasharray="12 6" />
                                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2 }} d="M580,420 L650,580" fill="none" stroke="#a1dc84" strokeWidth="2.5" strokeDasharray="12 6" />
                                    </>
                                )}
                                {activeFilter === 'sea' && (
                                    <motion.path
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3 }}
                                        d="M300,330 Q450,500 650,580"
                                        fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="15 8"
                                    />
                                )}
                                {activeFilter === 'rail' && (
                                    <motion.path
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
                                        d="M720,390 L580,420"
                                        fill="none" stroke="#FACC15" strokeWidth="3" strokeDasharray="20 4"
                                    />
                                )}
                            </g>

                            {/* Hub Nodes */}
                            {hubs.map(hub => {
                                const isSearching = searchQuery && hub.name.toLowerCase().includes(searchQuery.toLowerCase());
                                const isSelected = selectedHub === hub.id;

                                return (
                                    <g key={hub.id} onClick={() => setSelectedHub(hub.id)} className="cursor-pointer group pointer-events-auto">
                                        <motion.circle
                                            cx={hub.x} cy={hub.y} r={isSelected || isSearching ? "35" : "18"}
                                            fill={hub.color}
                                            className="opacity-10"
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
                                            transition={{ duration: 2.5, repeat: Infinity }}
                                        />
                                        <motion.circle
                                            cx={hub.x} cy={hub.y} r={isSelected || isSearching ? "12" : "7"}
                                            fill={hub.color}
                                            animate={{ r: isSelected || isSearching ? 12 : 7 }}
                                            className="shadow-2xl"
                                        />
                                        {/* Label Text */}
                                        <text
                                            x={hub.x} y={hub.y + 25}
                                            textAnchor="middle"
                                            className="text-[9px] font-black uppercase tracking-widest font-primary dark:fill-white"
                                            fill="#0f172a"
                                            style={{ opacity: isSelected || isSearching ? 1 : 0.4 }}
                                        >
                                            {hub.name.split(' (')[0].toUpperCase()}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Pop-up Info Surface */}
                    <AnimatePresence>
                        {selectedHub && currentHubData && (
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotateY: 20 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: 50, rotateY: 20 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="absolute right-12 top-1/2 -translate-y-1/2 w-96 z-[60] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[4rem] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10"
                            >
                                <button onClick={() => setSelectedHub(null)} className="absolute top-10 right-10 size-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-[#a1dc84] transition-all">
                                    <span className="material-symbols-outlined !text-xl">close</span>
                                </button>

                                <div className="space-y-10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border border-[#a1dc84]/20 animate-pulse">Node Intelligence Active</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase font-primary">{currentHubData.name}</h3>
                                        <div className="flex gap-3 mt-6">
                                            <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] shadow-lg ${currentHubData.status === 'optimal' ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/30' : 'bg-red-500 text-white shadow-red-500/30'}`}>
                                                {currentHubData.status}
                                            </span>
                                            <span className="px-4 py-2 rounded-xl bg-slate-950 text-white text-[9px] font-black uppercase tracking-[0.3em] font-mono">
                                                ID: {currentHubData.id.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5">
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency Load Factor</span>
                                                <span className="text-lg font-black dark:text-white font-primary italic">{currentHubData.cap}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: `${currentHubData.cap}%` }} className="h-full bg-gradient-to-r from-[#a1dc84] to-emerald-400"></motion.div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Clearance</p>
                                                <p className="text-xl font-black dark:text-white italic">{currentHubData.clearance}</p>
                                            </div>
                                            <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Traffic</p>
                                                <p className="text-xl font-black dark:text-white italic">{currentHubData.traffic}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-10 border-t border-slate-100 dark:border-white/5">
                                        <button
                                            onClick={() => handleDispatchLog(currentHubData.name)}
                                            className={`w-full py-6 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-3xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group ${requestStatus === currentHubData.name ? 'bg-[#a1dc84] text-slate-900' : 'bg-slate-950 dark:bg-white text-white dark:text-slate-900'}`}
                                        >
                                            <span className="material-symbols-outlined !text-xl group-hover:rotate-12 transition-transform">
                                                {requestStatus === currentHubData.name ? 'verified' : 'receipt_long'}
                                            </span>
                                            {requestStatus === currentHubData.name ? 'Log Transmission Finalized' : 'Request Dispatch Log'}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Layer Controls Dashboard */}
                    <div className="absolute bottom-12 left-12 z-40 bg-white/70 dark:bg-slate-950/80 backdrop-blur-3xl p-4 rounded-[3.5rem] shadow-3xl border border-white/20 dark:border-white/10 flex flex-col gap-3">
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.5em] mb-2 px-4">Transport Layers</span>
                        {[
                            { id: 'road', name: 'Road Transport', icon: 'local_shipping', color: '#a1dc84' },
                            { id: 'sea', name: 'Maritime Lanes', icon: 'waves', color: '#3b82f6' },
                            { id: 'rail', name: 'Rail Corridors', icon: 'train', color: '#FACC15' }
                        ].map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id as any)}
                                className={`flex items-center gap-6 px-8 h-16 rounded-[2rem] transition-all group relative overflow-hidden ${activeFilter === filter.id ? 'bg-slate-900 text-white shadow-2xl' : 'text-slate-500 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}`}
                            >
                                <span className={`material-symbols-outlined !text-2xl transition-all ${activeFilter === filter.id ? 'text-[#a1dc84] scale-110' : ''}`}>{filter.icon}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">{filter.name}</span>
                                {activeFilter === filter.id && (
                                    <motion.div layoutId="transport-glow" className="absolute left-0 w-1.5 h-full bg-[#a1dc84]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                </section>
            </div>

            {/* Bottom Telemetry Legend */}
            <footer className="h-16 shrink-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 flex items-center justify-between px-12 z-[70] transition-colors duration-500">
                <div className="flex gap-12">
                    {[
                        { label: 'Cloud Node Sync', color: '#a1dc84' },
                        { label: 'Dynamic Load', color: '#FACC15' },
                        { label: 'Critical Escallation', color: '#ef4444' }
                    ].map(legend => (
                        <div key={legend.label} className="flex items-center gap-4">
                            <div className="size-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: legend.color, color: legend.color }}></div>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">{legend.label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.5em] text-slate-400">
                    <span className="flex items-center gap-3">
                        <span className="size-2 bg-[#a1dc84] rounded-full animate-pulse shadow-[0_0_8px_#a1dc84]"></span>
                        METRIC FEDERATION ALIVE
                    </span>
                    <span className="text-slate-200 dark:text-slate-800">|</span>
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined !text-sm">verified</span>
                        T-SECURED V6.2
                    </span>
                </div>
            </footer>
        </main>
    );
}
