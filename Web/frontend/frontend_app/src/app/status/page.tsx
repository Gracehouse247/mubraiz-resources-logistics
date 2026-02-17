"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SystemStatus() {
    const [lastRefresh, setLastRefresh] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState("");

    const [regions, setRegions] = useState([
        { name: "Lagos HQ (West)", latency: "4ms", load: 24, color: "bg-[#a1dc84]" },
        { name: "Port Harcourt Node (South)", latency: "18ms", load: 38, color: "bg-[#a1dc84]" },
        { name: "Abuja Central (North Central)", latency: "22ms", load: 45, color: "bg-[#a1dc84]" },
        { name: "Kano Distribution (North)", latency: "35ms", load: 12, color: "bg-[#a1dc84]" }
    ]);

    const services = [
        { name: "Haulage Operations Hub", type: "Main Logistics Engine", uptime: "99.99%", status: "Operational", icon: "local_shipping", bars: 50 },
        { name: "Fleet Intelligence AI", type: "IoT & GPS Telemetry", uptime: "99.92%", status: "Operational", icon: "trolley", bars: 50 },
        { name: "Warehouse Inventory Grid", type: "Smart Storage API", uptime: "100.0%", status: "Operational", icon: "inventory_2", bars: 50 },
        { name: "Customs Compliance Portal", type: "Regulatory Sync", uptime: "99.95%", status: "Operational", icon: "verified", bars: 50 },
        { name: "Procurement Sourcing Engine", type: "Supply Chain DB", uptime: "99.98%", status: "Operational", icon: "hub", bars: 50 }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setLastRefresh(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setRegions(prev => prev.map(r => ({
                ...r,
                latency: `${Math.floor(Math.random() * 40) + 2}ms`,
                load: Math.floor(Math.random() * 60) + 10
            })));
            setLastRefresh(0);
            setIsRefreshing(false);
        }, 1200);
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => setIsSubscribed(false), 5000);
            setEmail("");
        }
    };

    return (
        <div className="bg-[#f6f8f6] dark:bg-[#0a0f0a] min-h-screen font-sans text-slate-900 dark:text-white pb-20 transition-colors duration-500">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-6 px-4 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/images/mubraiz-logo.svg"
                            alt="Mubraiz Resources Limited"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">Operational <span className="text-[#a1dc84]">Status</span></h1>
                    <div className="hidden md:flex items-center gap-3 bg-[#a1dc84]/10 px-4 py-2 rounded-full border border-[#a1dc84]/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                        </span>
                        <span className="text-[10px] font-black text-green-800 dark:text-[#a1dc84] uppercase tracking-[0.3em]">Network Active</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <span className="hidden sm:inline text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Last Refresh: {lastRefresh}s ago
                    </span>
                    <button
                        onClick={handleRefresh}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-black hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/10 ${isRefreshing ? 'opacity-50 cursor-wait' : ''}`}
                    >
                        <span className={`material-symbols-outlined !text-sm ${isRefreshing ? 'animate-spin' : ''}`}>refresh</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Navigation Sidebar */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="sticky top-32 space-y-8 text-sm font-black text-slate-400 uppercase tracking-widest">
                            <div className="space-y-4">
                                <h3 className="px-4 text-[10px] text-slate-500 font-black tracking-[0.4em]">Integrated Infrastructure</h3>
                                <nav className="flex flex-col gap-1">
                                    <button className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#a1dc84] text-slate-950 border border-[#a1dc84] shadow-lg shadow-[#a1dc84]/20 transition-all text-left">
                                        <span className="material-symbols-outlined !text-xl">dashboard</span> Dashboard
                                    </button>
                                    <button className="flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all text-slate-500 text-left">
                                        <span className="material-symbols-outlined !text-xl">insights</span> Operations
                                    </button>
                                    <button className="flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all text-slate-500 text-left">
                                        <span className="material-symbols-outlined !text-xl">history</span> Incident Logs
                                    </button>
                                    <button className="flex items-center gap-4 px-8 py-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all text-slate-500 text-left">
                                        <span className="material-symbols-outlined !text-xl">shield</span> Security
                                    </button>
                                </nav>
                            </div>

                            {/* Subscribe Card */}
                            <div className="bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group border border-white/5">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-150 transition-transform">
                                    <span className="material-symbols-outlined text-6xl text-[#a1dc84]">broadcast_on_home</span>
                                </div>
                                <h4 className="text-lg font-black mb-2 relative z-10 normal-case tracking-tighter">Infrastructure Alerts</h4>
                                <p className="text-xs font-medium text-white/50 mb-8 normal-case tracking-normal leading-relaxed">Stay updated on fleet status and network health disruptions across all Nigerian hubs.</p>

                                {isSubscribed ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-[#a1dc84]/20 border border-[#a1dc84]/40 p-4 rounded-xl text-[10px] font-black text-[#a1dc84] uppercase tracking-widest text-center"
                                    >
                                        Successfully Subscribed
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="space-y-4 relative z-10">
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/5 rounded-xl px-4 py-4 text-xs border border-white/10 focus:border-[#a1dc84] transition-colors placeholder:text-white/20 outline-none"
                                            placeholder="Email for notifications"
                                        />
                                        <button type="submit" className="w-full bg-[#a1dc84] text-slate-900 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#a1dc84]/10">Subscribe Now</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-12">
                        {/* Summary Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: "Fleet Uptime", value: "99.99%", sub: "+0.02%", color: "text-[#a1dc84]" },
                                { label: "Network Latency", value: regions[0].latency, sub: "-4ms", color: "text-[#a1dc84]" },
                                { label: "Active Nodes", value: "112", sub: "All Stable", color: "text-[#a1dc84]" },
                                { label: "Safety Rating", value: "99.8%", sub: "High Standard", color: "text-[#a1dc84]" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm backdrop-blur-sm"
                                >
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">{stat.label}</p>
                                    <h4 className="text-3xl font-black mb-1 text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
                                    <p className={`text-[10px] font-black ${stat.color} tracking-widest`}>{stat.sub}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* All Systems Operational Status */}
                        <section className="bg-[#a1dc84]/5 dark:bg-[#a1dc84]/5 border border-[#a1dc84]/20 rounded-[3rem] p-12 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
                            <div className="size-20 rounded-3xl bg-[#a1dc84] flex items-center justify-center text-slate-950 shrink-0 shadow-2xl shadow-[#a1dc84]/20">
                                <span className="material-symbols-outlined text-4xl font-bold">check_circle</span>
                            </div>
                            <div className="space-y-3 flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">All Systems Operational</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                                    Current logistics data flow, tracking telemetry, and warehousing portals are functioning at optimal capacity nationwide. No disruptions reported in the last 24 hours.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none">
                                <span className="material-symbols-outlined text-[240px] text-[#a1dc84]">verified</span>
                            </div>
                        </section>

                        {/* Service Health List */}
                        <section className="space-y-10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-4">
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Cluster Health (90 Days)</h2>
                                <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                                    <div className="flex items-center gap-2"><div className="size-3 rounded-md bg-[#a1dc84]"></div> Optimal</div>
                                    <div className="flex items-center gap-2"><div className="size-3 rounded-md bg-orange-400"></div> Degraded</div>
                                    <div className="flex items-center gap-2"><div className="size-3 rounded-md bg-red-600"></div> Offline</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {services.map((service, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-10 border border-slate-100 dark:border-white/5 shadow-xl transition-all"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-10">
                                            <div className="flex items-center gap-8">
                                                <div className="size-16 rounded-2xl bg-[#a1dc84]/10 dark:bg-white/5 flex items-center justify-center text-[#a1dc84] shadow-inner">
                                                    <span className="material-symbols-outlined text-3xl font-bold">{service.icon}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{service.name}</h3>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-2">{service.type}</p>
                                                </div>
                                            </div>
                                            <div className="text-center sm:text-right">
                                                <p className="text-2xl font-black text-[#a1dc84] tracking-tight">{service.uptime}</p>
                                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Status: Stable</p>
                                            </div>
                                        </div>

                                        {/* Uptime Bars */}
                                        <div className="flex gap-1 items-center h-10">
                                            {Array.from({ length: service.bars }).map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className="h-full flex-1 rounded-sm bg-[#a1dc84] opacity-[0.4] hover:opacity-100 transition-all cursor-crosshair"
                                                />
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-4 text-[8px] font-black text-slate-400 uppercase tracking-widest">
                                            <span>90 Days Ago</span>
                                            <span>System Synchronized</span>
                                            <span>Active Now</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Network Latency Mesh */}
                        <section className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">Latency Grid</h2>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Network response times across our primary Nigerian distribution hubs.</p>
                                    </div>
                                    <div className="space-y-10">
                                        {regions.map((region, i) => (
                                            <div key={i} className="space-y-4">
                                                <div className="flex justify-between items-center px-1 font-black uppercase tracking-[0.2em] text-[10px]">
                                                    <span className="text-slate-900 dark:text-slate-200">{region.name}</span>
                                                    <span className="text-[#a1dc84]">{region.latency}</span>
                                                </div>
                                                <div className="w-full bg-slate-100 dark:bg-white/5 h-4 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${region.load}%` }}
                                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                                        className="h-full bg-gradient-to-r from-[#a1dc84]/40 to-[#a1dc84] rounded-full shadow-lg shadow-[#a1dc84]/20"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="aspect-square bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-3xl group flex flex-col items-center justify-center border-[12px] border-slate-800/50">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000')] bg-cover grayscale hover:grayscale-0 transition-all duration-1000"></div>
                                    <div className="size-32 rounded-full bg-[#a1dc84]/20 flex items-center justify-center border border-[#a1dc84]/30 animate-pulse mb-8">
                                        <span className="material-symbols-outlined text-6xl text-[#a1dc84]">language</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 relative z-10">Global Sync Active</p>
                                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-white/60">NODE STATUS</span>
                                            <span className="text-[10px] font-black text-[#a1dc84]">100% ONLINE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

