"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function CustomsClearanceContent() {
    const [auditLoading, setAuditLoading] = useState(false);
    const [auditSubmitted, setAuditSubmitted] = useState(false);
    const [auditData, setAuditData] = useState({ category: '', value: '' });

    const handleAuditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAuditLoading(true);
        setTimeout(() => {
            setAuditLoading(false);
            setAuditSubmitted(true);
        }, 1500);
    };

    return (
        <main className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen transition-colors duration-500">
            {/* Hero Section - Homepage Adopted Structure */}
            <section className="relative flex min-h-[750px] w-full items-center overflow-hidden bg-[#0f172a]">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>

                    {/* Brand Dominance Glow */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[120px] z-15 pointer-events-none"></div>

                    <Image
                        alt="Expert Customs Brokerage Operations"
                        className="h-full w-full object-cover grayscale opacity-60"
                        src="/images/haulage/hero-truck.jpeg"
                        fill
                        priority
                    />
                </div>

                {/* Content Container - Homepage Spacing */}
                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Left Column: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col gap-8 text-white"
                        >
                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                                </span>
                                NCS Compliance Hub
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary">
                                Seamless <br />
                                <span className="text-[#a1dc84]">Customs.</span>
                            </h1>

                            <p className="max-w-lg border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                                Expert customs brokerage and global forwarding. We navigate regulatory complexities with baseline precision and uncompromising speed.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-6">
                                <Link href="#assessment">
                                    <button className="flex items-center gap-3 rounded-lg bg-[#a1dc84] px-8 py-4 text-xs font-black text-slate-900 hover:brightness-110 transition-all shadow-2xl shadow-[#a1dc84]/30 uppercase tracking-widest group">
                                        Request Clearance
                                        <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                </Link>

                                <Link href="#capabilities">
                                    <button className="flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-xs font-black text-white hover:bg-white/20 transition-all uppercase tracking-widest">
                                        View Protocol
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: Intelligence Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block relative"
                        >
                            <div className="absolute inset-0 bg-[#a1dc84]/20 blur-[100px] rounded-full"></div>
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] shadow-2xl">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="size-16 rounded-2xl bg-[#a1dc84] flex items-center justify-center text-slate-900 shadow-xl shadow-[#a1dc84]/20">
                                        <span className="material-symbols-outlined !text-3xl">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-2xl tracking-tighter font-primary">NCS Licensed</h4>
                                        <p className="text-[10px] text-[#a1dc84] font-black uppercase tracking-[0.3em] font-secondary">Authorized Agent</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: "Form M Processing", stat: "Express" },
                                        { label: "PAAR Issuance", stat: "Priority" },
                                        { label: "Duty Assessment", stat: "Optimized" },
                                        { label: "Physical Exam", stat: "Coordinated" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-none">
                                            <span className="text-slate-400 font-bold text-xs uppercase tracking-tight font-secondary">{item.label}</span>
                                            <span className="text-[#a1dc84] font-black text-[10px] uppercase tracking-widest bg-[#a1dc84]/10 px-3 py-1 rounded-full font-secondary">{item.stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section id="capabilities" className="py-32 px-6 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                        <div>
                            <span className="text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-primary">Professional Domain</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary">
                                End-to-End <br /><span className="text-[#a1dc84]">Intelligence.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-lg mb-4 font-secondary">
                            Comprehensive customs brokerage and global forwarding services ensuring every shipment is cleared with world-standard efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "gavel",
                                title: "Customs Brokering",
                                desc: "Expert handling of Form M, PAAR, and all NCS documentation requirements.",
                                tag: "NCS LICENSED"
                            },
                            {
                                icon: "flight_takeoff",
                                title: "Air & Sea Freight",
                                desc: "Global forwarding network connecting major ports with real-time tracking.",
                                tag: "GLOBAL REACH"
                            },
                            {
                                icon: "account_balance",
                                title: "Duty Advisory",
                                desc: "Strategic HS Code classification to optimize your logistics spend legally.",
                                tag: "FINANCIAL EDGE"
                            },
                            {
                                icon: "inventory",
                                title: "Project Cargo",
                                desc: "Specialized handling for heavy-duty industrial cargo across borders.",
                                tag: "HEAVY LIFT"
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-12 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-xl hover:shadow-[#a1dc84]/5 transition-all text-center"
                            >
                                <div className="size-20 bg-slate-50 dark:bg-white/5 rounded-[2rem] flex items-center justify-center text-slate-900 dark:text-[#a1dc84] mb-10 mx-auto group-hover:scale-110 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all">
                                    <span className="material-symbols-outlined !text-4xl">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10 font-secondary">
                                    {service.desc}
                                </p>
                                <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                                    <span className="text-[10px] font-black text-slate-400 group-hover:text-[#a1dc84] uppercase tracking-[0.3em] transition-colors font-primary">{service.tag}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-primary">Execution Protocol</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-20 leading-[1.1] font-primary">
                        The Clearance <br />
                        <span className="text-[#a1dc84]">Workflow.</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-12 text-left">
                        {[
                            { step: "01", title: "Audit", desc: "Cargo evaluation and HS Code determination." },
                            { step: "02", title: "Prefiling", desc: "Form M & PAAR preparation with regulatory permits." },
                            { step: "03", title: "Levy Ops", desc: "Precise duty assessment and secure settlement." },
                            { step: "04", title: "Release", desc: "Physical inspection and final NCS departure release." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] group hover:bg-[#a1dc84]/5 transition-all"
                            >
                                <div className="text-7xl font-black text-[#a1dc84]/10 mb-8 group-hover:text-[#a1dc84]/20 transition-colors tracking-tighter font-primary">{item.step}</div>
                                <h4 className="text-xl lg:text-2xl font-black text-white mb-4 tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed font-secondary">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 size-[800px] bg-[#a1dc84] blur-[250px] opacity-[0.03] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 size-[600px] bg-[#a1dc84] blur-[200px] opacity-[0.02] pointer-events-none" />
            </section>

            {/* Operational Power Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-[5rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group border border-slate-100 dark:border-white/5">
                        <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
                            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                                <Image
                                    src="/images/fleet/15ton-truck-4.jpeg"
                                    alt="Command Hub Operations"
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl font-black text-[#a1dc84] opacity-20 mb-4 tracking-tighter font-primary">NCS</div>
                                        <p className="text-white font-black text-xl uppercase tracking-tighter font-primary">Regulatory Hub</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Strategic Command</span>
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[1.1] font-primary">
                                    Navigating <br /><span className="text-[#a1dc84]">Boundaries.</span>
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed mb-12 font-secondary">
                                    We maintain high-level integration with the Nigerian Ports Authority, Nigeria Customs Service, and other regulatory bodies to ensure your transition across borders is frictionless.
                                </p>
                                <div className="grid grid-cols-2 gap-10">
                                    {[
                                        { val: "15+", label: "Years Mastery" },
                                        { val: "10k+", label: "Jobs / Month" },
                                        { val: "99%", label: "SLA Success" },
                                        { val: "24/7", label: "Agent Intel" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tighter font-primary">{stat.val}</div>
                                            <div className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest leading-none font-secondary">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Functional Assessment Hub */}
            <section id="assessment" className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="bg-white/[0.03] backdrop-blur-3xl p-12 md:p-24 rounded-[5rem] border border-white/10 shadow-3xl">
                        <AnimatePresence mode="wait">
                            {auditSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="size-24 rounded-[2rem] bg-[#a1dc84] text-slate-900 flex items-center justify-center mx-auto mb-10 shadow-[0_20px_40px_rgba(161,220,132,0.3)]">
                                        <span className="material-symbols-outlined !text-5xl">verified_user</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 font-primary">Compliance Node Synced.</h2>
                                    <p className="text-slate-400 font-medium text-xl mb-12 font-secondary max-w-2xl mx-auto">
                                        Your duty assessment for <span className="text-white font-black">{auditData.category}</span> is being processed through the NCS Single Window.
                                    </p>
                                    <div className="bg-white/5 px-10 py-5 rounded-2xl border border-white/5 mb-12 inline-block font-mono text-[#a1dc84] text-sm uppercase tracking-widest">
                                        Reference ID: #REG-{(Math.random() * 9999).toFixed(0)}-C
                                    </div>
                                    <div className="flex justify-center gap-6">
                                        <button onClick={() => setAuditSubmitted(false)} className="px-8 py-4 bg-[#a1dc84] text-slate-900 rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">New Assessment</button>
                                        <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">Back to Grid</Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-24 items-center">
                                    <div>
                                        <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-6 py-2 rounded-full font-black tracking-[0.4em] text-[10px] uppercase mb-10 inline-block">Regulatory Intelligence</span>
                                        <h2 className="text-white text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] font-primary">
                                            Accelerate <br /> <span className="text-[#a1dc84]">Compliance.</span>
                                        </h2>
                                        <p className="text-slate-400 font-medium text-lg leading-relaxed mb-12 font-secondary">
                                            Don't let customs jargon delay your commerce. Partner with the industry elite and ensure your PAAR/Form M pre-filing is flawless.
                                        </p>
                                        <div className="flex gap-10">
                                            <div className="flex flex-col">
                                                <span className="text-4xl font-black text-white font-primary tracking-tighter">100%</span>
                                                <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Success Rate</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-4xl font-black text-white font-primary tracking-tighter">FAST</span>
                                                <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Processing</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        {auditLoading && (
                                            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-10 flex flex-col items-center justify-center rounded-[3rem]">
                                                <div className="size-16 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                                <span className="mt-6 text-[11px] font-black text-[#a1dc84] uppercase tracking-[0.4em] animate-pulse">Syncing Regulatory Node...</span>
                                            </div>
                                        )}
                                        <form onSubmit={handleAuditSubmit} className="space-y-8 bg-white/5 p-12 rounded-[4rem] border border-white/5">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Consignment Classification</label>
                                                <select required value={auditData.category} onChange={(e) => setAuditData({ ...auditData, category: e.target.value })} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-[#a1dc84] transition-all font-secondary text-sm appearance-none">
                                                    <option value="">Select Category</option>
                                                    <option value="Industrial Machinery">Industrial Machinery</option>
                                                    <option value="FMCG & Soft Goods">FMCG & Soft Goods</option>
                                                    <option value="Automotive & Fleet">Automotive & Fleet</option>
                                                    <option value="Raw Minerals">Raw Minerals</option>
                                                </select>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Estimated Invoice Value ($)</label>
                                                <input required type="text" value={auditData.value} onChange={(e) => setAuditData({ ...auditData, value: e.target.value })} placeholder="e.g. 50,000" className="w-full bg-slate-900 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-[#a1dc84] transition-all font-secondary text-sm" />
                                            </div>
                                            <button className="w-full h-14 bg-[#a1dc84] text-slate-900 rounded-lg font-black uppercase tracking-[0.4em] text-[10px] shadow-3xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4">                                             Initiate Compliance Check
                                            </button>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Footer CTA - Heavy Impact */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href="/contact" className="px-16 py-7 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl font-primary">
                            Request Advisory
                        </Link>
                        <Link href="/tools/calculator" className="px-16 py-7 border-2 border-slate-900 dark:border-white/10 text-slate-900 dark:text-white rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all font-primary">
                            Freight Engine
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
