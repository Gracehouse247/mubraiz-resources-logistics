"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SafetyContent() {
    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0f172a] pt-24 pb-20">
            {/* Nav & Breadcrumbs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <nav className="flex items-center gap-2 mb-8 uppercase tracking-widest text-[10px] font-black font-sans">
                    <Link href="/fleet" className="text-[#a1dc84] hover:underline transition-colors">Fleet</Link>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-900 dark:text-white">Safety & Technical Excellence</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a1dc84]/10 text-[#a1dc84] border border-[#a1dc84]/20 rounded-full mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Engineering Excellence Live</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8 font-display">
                            Safety-First <br />
                            <span className="text-[#a1dc84]">Engineering Protocols</span>
                        </h1>
                        <p className="max-w-xl border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 font-secondary">
                            Setting the global gold standard in technical excellence and fleet maintenance through rigorous engineering protocols, predictive AI diagnostics, and real-time telemetry.
                        </p>
                        <div className="mt-12 flex flex-wrap gap-4">
                            <Link href="#dashboard">
                                <button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:brightness-110 active:scale-95 transition-all">
                                    View Safety Reports
                                </button>
                            </Link>
                            <Link href="/services/fleet">
                                <button className="px-10 py-4 border-2 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                    Engineering Specifications
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#a1dc84]/30 via-transparent to-transparent blur-2xl rounded-[3rem] opacity-50"></div>
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
                            <img
                                src="/images/fleet/safety/inspection.jpeg"
                                alt="Technical Inspection"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-[2rem] border-l-[12px] border-[#a1dc84] shadow-2xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 bg-[#a1dc84]/10 rounded-xl flex items-center justify-center text-[#a1dc84]">
                                            <span className="material-symbols-outlined !text-xl">verified_user</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Last Diagnostic</p>
                                            <p className="text-sm font-black text-slate-900 dark:text-white">Vehicle ID: MR-9944-TX (Pass)</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-black bg-[#a1dc84] text-slate-900 px-3 py-1 rounded-full uppercase">Operational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Telemetry Dash (Simulated) */}
            <section id="dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32 scroll-mt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter font-display">Real-time Maintenance Dashboard</h2>
                        <p className="text-slate-500 font-sans font-medium">Live telemetry data from across our global fleet operations.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl flex items-center gap-3">
                            <span className="size-2 bg-[#a1dc84] rounded-full animate-pulse shadow-[0_0_8px_#a1dc84]"></span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Sync Active</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { label: 'Fleet Health Indice', val: '98.2%', change: '+2.4% vs LY', trend: 'up', icon: 'health_and_safety' },
                        { label: 'Routine Compliance', val: '100%', change: 'Stable Peak', trend: 'neutral', icon: 'task_alt' },
                        { label: 'Signal Strength', val: 'High', change: '12% expansion', trend: 'up', icon: 'location_searching' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-sans">{stat.label}</span>
                                <span className="material-symbols-outlined text-[#a1dc84] !text-2xl">{stat.icon}</span>
                            </div>
                            <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter font-display">{stat.val}</h3>
                            <div className={`flex items-center gap-2 text-xs font-black ${stat.trend === 'up' ? 'text-[#a1dc84]' : 'text-slate-400'}`}>
                                <span className="material-symbols-outlined !text-sm">{stat.trend === 'up' ? 'arrow_upward' : 'horizontal_rule'}</span>
                                {stat.change}
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
                                <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: idx === 1 ? '100%' : '94%' }}
                                        className="h-full bg-[#a1dc84]"
                                    ></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications Block */}
            <section className="bg-slate-900 py-32 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">Global Safety Infrastructure</h2>
                        <p className="text-slate-400 font-medium max-w-xl mx-auto">Mubraiz Resources is fully compliant with international safety and quality standards, audited quarterly.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { code: 'BN2911944', label: 'Master Registration', icon: 'assignment_turned_in' },
                            { code: 'ISO 9001', label: 'Quality Management', icon: 'workspace_premium' },
                            { code: 'ISO 45001', label: 'Safety & Health', icon: 'shield' },
                            { code: 'ISO 14001', label: 'Environment Mgmt', icon: 'eco' }
                        ].map((cert, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center group hover:bg-white/10 transition-colors">
                                <div className="size-16 bg-[#a1dc84]/10 rounded-[2rem] flex items-center justify-center text-[#a1dc84] mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined !text-4xl">{cert.icon}</span>
                                </div>
                                <h4 className="text-2xl font-black text-white mb-2">{cert.code}</h4>
                                <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest">{cert.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Backdrop Blur */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-[#a1dc84] blur-[200px] opacity-10"></div>
                </div>
            </section>

            {/* Technical Spec Blocks (Cards) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Engine Diagnostic', interval: '10,000km', specs: ['Fluid Integrity: 99%', 'Cylinder Pressure: Normal', 'Last Overhaul: Jan 2024'], icon: 'settings_input_component', progress: 85 },
                        { title: 'Tire & Traction', interval: 'Weekly Log', specs: ['Avg Tread Depth: 12.5mm', 'PSI Calibration: Automated', 'Rotational Wear: Minimal'], icon: 'tire_repair', progress: 100 },
                        { title: 'GPS Calibration', interval: 'Bi-monthly', specs: ['Signal Uptime: 99.99%', 'Precision Error: < 1.2m', 'Last Sync: 12m ago'], icon: 'satellite_alt', progress: 99 }
                    ].map((spec, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col h-full shadow-2xl shadow-slate-200/50 dark:shadow-none">
                            <div className="p-8 border-b border-slate-50 dark:border-white/5 flex items-center gap-6">
                                <div className="size-14 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined !text-2xl">{spec.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-none mb-2 font-display">{spec.title}</h3>
                                    <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest leading-none font-sans">Interval: {spec.interval}</span>
                                </div>
                            </div>
                            <div className="p-8 space-y-4 flex-1">
                                {spec.specs.map((s, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-slate-500">{s.split(': ')[0]}</span>
                                        <span className="text-xs font-black text-slate-900 dark:text-white">{s.split(': ')[1]}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-slate-50 dark:bg-white/5">
                                <div className="flex justify-between text-[9px] font-black uppercase text-slate-400 mb-3 tracking-widest">
                                    <span>Maintenance Compliance</span>
                                    <span>{spec.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${spec.progress}%` }}
                                        className="h-full bg-[#a1dc84]"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Driver Excellence Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">Driver Excellence</h2>
                        <p className="text-slate-500 font-medium mb-12 leading-relaxed">Safety is not just in the machine; it's in the operator. Our 4-stage Driver Training program ensures every fleet member is an expert in technical safety protocols.</p>

                        <div className="space-y-8">
                            {[
                                { num: '01', title: 'Defensive Training', desc: 'SADC Region level-1 onboarding.' },
                                { num: '02', title: 'Technical Simulation', desc: 'Scenario-based obstacle mastery.' },
                                { num: '03', title: 'IoT Dashboard Mastery', desc: 'Real-time telemetry interpretation.' },
                                { num: '04', title: 'Bi-Annual Recertification', desc: 'Mandatory standard renewal.' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="size-10 bg-[#a1dc84] rounded-2xl flex items-center justify-center font-black text-slate-900 transform -rotate-12">{step.num}</div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1 font-display">{step.title}</h4>
                                        <p className="text-xs text-slate-400 font-sans font-bold uppercase tracking-widest">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative min-h-[500px] bg-slate-900">
                        <img
                            src="/images/driver excellence.png"
                            alt="Mubraiz Resources Driver Excellence"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-12 md:p-20">
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <div className="bg-[#a1dc84]/10 backdrop-blur-xl border border-[#a1dc84]/20 p-8 rounded-[2.5rem]">
                                    <p className="text-4xl font-black text-white mb-2">940+</p>
                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest">Certified Specialists</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem]">
                                    <p className="text-4xl font-black text-white mb-2">0.02%</p>
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Network Incident Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
