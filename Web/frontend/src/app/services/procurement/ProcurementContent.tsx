"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';

export default function ProcurementContent() {
    const [briefSubmitted, setBriefSubmitted] = useState(false);
    const [briefData, setBriefData] = useState({ category: '', requirements: '' });

    const mutation = useMutation({
        mutationFn: async (newBrief: any) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/procurement/request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBrief)
            });
            if (!res.ok) throw new Error('Failed to transmit brief to grid');
            return res.json();
        },
        onSuccess: () => {
            setBriefSubmitted(true);
        }
    });

    const handleBriefSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({
            type: 'Sourcing Brief',
            item: briefData.category,
            details: briefData.requirements,
            status: 'New'
        });
    };

    return (
        <main className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen transition-colors duration-500 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                    <Image
                        alt="Global Procurement and Sourcing Mastery"
                        className="h-full w-full object-cover grayscale opacity-50 hover:grayscale-0 transition-opacity duration-1000"
                        src="/images/resources/case-studies/heavy-industry.jpeg"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 py-20">
                    <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col gap-10"
                        >
                            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#a1dc84]/20 bg-[#a1dc84]/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md shadow-lg shadow-[#a1dc84]/5">
                                <span className="w-2 h-2 rounded-full bg-[#a1dc84] animate-pulse"></span>
                                Global Sourcing Node
                            </div>

                            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary">
                                Sourcing <br />
                                <span className="text-[#a1dc84]">Intelligence.</span>
                            </h1>

                            <p className="max-w-xl border-l-4 border-[#a1dc84] pl-10 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                                Strategic procurement engineered for industrial scale. We bridge the gap between global manufacturers and local operational requirements with absolute transparency.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <Link href="#brief">
                                    <button className="flex items-center gap-4 rounded-lg bg-[#a1dc84] px-8 py-4 text-xs font-black text-slate-900 shadow-3xl shadow-[#a1dc84]/30 hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.3em] font-primary">
                                        Submit Sourcing Brief <span className="material-symbols-outlined !text-xl">list_alt</span>
                                    </button>
                                </Link>
                                <Link href="/resources/consultation">
                                    <button className="flex items-center gap-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 text-xs font-black text-white hover:bg-white/10 transition-all uppercase tracking-[0.3em] font-primary">
                                        Talk to Specialist <span className="material-symbols-outlined !text-xl">headset_mic</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Asset */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative aspect-square rounded-[5rem] overflow-hidden border-[15px] border-white/5 shadow-3xl">
                                <Image
                                    src="/images/sustainability/Sourcing.png"
                                    alt="Professional Procurement Ops"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-16 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                                    <div className="text-4xl font-black text-white tracking-tighter mb-2 font-primary">Global Nodes</div>
                                    <div className="text-[10px] text-[#a1dc84] font-black uppercase tracking-[0.4em] font-secondary">Vetted Vendor Network</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-40 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 max-w-4xl mx-auto">
                        <span className="text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-primary font-bold">Value Chain Engineering</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary mb-10">
                            The Procurement <br /><span className="text-[#a1dc84]">Edge.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                icon: "search_insights",
                                title: "Strategic Sourcing",
                                desc: "Identification and vetting of top-tier global manufacturers to match your specific engineering standards.",
                            },
                            {
                                icon: "inventory",
                                title: "Material Ops",
                                desc: "Bulk material procurement for construction, mining, and industrial sectors with precision delivery cycles.",
                            },
                            {
                                icon: "verified_user",
                                title: "Vendor Integrity",
                                desc: "Rigorous compliance checks and quality assurance protocols at every point of the supply chain.",
                            },
                            {
                                icon: "payments",
                                title: "Cost Efficiency",
                                desc: "Leveraging bulk buying power and direct manufacturer relationships to optimize your operational budget.",
                            },
                            {
                                icon: "handshake",
                                title: "PO Management",
                                desc: "End-to-end management of purchase orders, from initial negotiation to final site delivery.",
                            },
                            {
                                icon: "security_update_good",
                                title: "Inbound Control",
                                desc: "Seamless integration with our customs and haulage teams for a true door-to-door experience.",
                            }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-14 bg-white dark:bg-slate-900 rounded-[5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-2xl transition-all h-full"
                            >
                                <div className="size-20 bg-slate-50 dark:bg-white/5 rounded-[2rem] flex items-center justify-center text-slate-900 dark:text-[#a1dc84] mb-10 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all shadow-lg">
                                    <span className="material-symbols-outlined !text-4xl">{stat.icon}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{stat.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed font-secondary">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sourcing Intelligence Workflow */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-32 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-primary animate-pulse">Execution Matrix</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] font-primary mb-10">
                                Global <br /> <span className="text-[#a1dc84]">Execution</span> <br /> Blueprint.
                            </h2>
                            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-16 font-secondary">
                                We transform traditional procurement into a digitalized, high-velocity operation. From initial RFQ to final deployment, precision is our baseline.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid gap-10">
                            {[
                                { step: "01", title: "Intelligence Gathering", desc: "Detailed analysis of project specifications and material requirements." },
                                { step: "02", title: "Market Scanning", desc: "Global vendor identification across Europe, Asia, and the Americas." },
                                { step: "03", title: "Quality Sync", desc: "Site inspections and pre-shipment quality certifications." },
                                { step: "04", title: "Logistics Fuse", desc: "End-to-end integration with Mubraiz clearance and haulage nodes." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-10 items-start group">
                                    <div className="text-5xl font-black text-[#a1dc84] opacity-20 group-hover:opacity-100 transition-opacity font-display">{item.step}</div>
                                    <div>
                                        <h4 className="text-xl lg:text-2xl font-black text-white mb-3 tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed font-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 size-[800px] bg-[#a1dc84]/5 blur-[200px] pointer-events-none rounded-full" />
            </section>

            {/* Functional Brief Hub */}
            <section id="brief" className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#a1dc84] rounded-[5rem] p-16 md:p-32 shadow-3xl text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                        <div className="absolute -top-32 -left-32 size-96 bg-white/30 rounded-full blur-[120px] group-hover:bg-white/40 transition-all duration-1000"></div>

                        <AnimatePresence mode="wait">
                            {briefSubmitted ? (
                                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-2xl mx-auto py-10 text-slate-900">
                                    <div className="size-24 rounded-[2rem] bg-slate-950 text-[#a1dc84] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                                        <span className="material-symbols-outlined !text-5xl">inventory</span>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none font-primary">Brief <br /> Integrated.</h2>
                                    <p className="text-slate-900/70 text-xl font-bold mb-12 font-secondary">
                                        Your procurement requirements for <span className="text-slate-950 font-black">{briefData.category}</span> have been synchronized. An expert will transmit the initial vendor matrix within 4 hours.
                                    </p>
                                    <div className="bg-slate-950/10 px-10 py-5 rounded-2xl border border-slate-950/10 mb-10 inline-block font-mono text-slate-950 text-sm font-black uppercase tracking-widest">
                                        Protocol Ref: #PRO-{(Math.random() * 9999).toFixed(0)}-H
                                    </div>
                                    <div className="flex flex-wrap gap-8 justify-center">
                                        <button onClick={() => setBriefSubmitted(false)} className="px-8 py-4 bg-slate-950 text-[#a1dc84] rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">New Sourcing Brief</button>
                                        <Link href="/services" className="px-8 py-4 bg-white text-slate-950 rounded-lg font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all">Service Hub</Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
                                    <span className="bg-slate-950 text-[#a1dc84] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 inline-block shadow-2xl">Strategic Sourcing Initiator</span>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-12 tracking-tighter leading-[1.1] font-primary">
                                        Activate Your <br /> Supply <span className="text-white">Channel.</span>
                                    </h2>

                                    <form onSubmit={handleBriefSubmit} className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8">
                                        {mutation.isPending && (
                                            <div className="absolute inset-0 bg-[#a1dc84]/80 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-[3rem]">
                                                <div className="size-20 border-4 border-slate-950/10 border-t-slate-950 rounded-full animate-spin"></div>
                                                <span className="mt-8 text-[11px] font-black text-slate-950 uppercase tracking-[0.5em] animate-pulse">Syncing Global Nodes...</span>
                                            </div>
                                        )}
                                        <div className="md:col-span-4 relative group">
                                            <select required value={briefData.category} onChange={(e) => setBriefData({ ...briefData, category: e.target.value })} className="w-full h-24 bg-white border-2 border-slate-950/5 rounded-3xl px-8 text-slate-950 font-black uppercase text-xs tracking-widest outline-none focus:border-slate-950 transition-all appearance-none cursor-pointer">
                                                <option value="">Asset Category</option>
                                                <option value="Industrial Spares">Industrial Spares</option>
                                                <option value="Heavy Machinery">Heavy Machinery</option>
                                                <option value="Raw Materials">Raw Materials</option>
                                                <option value="FMCG / Trade Goods">FMCG / Trade Goods</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-8 top-1/2 -translate-y-1/2 text-slate-950 group-hover:translate-y-[-40%] transition-transform">expand_more</span>
                                        </div>
                                        <div className="md:col-span-5">
                                            <input required type="text" value={briefData.requirements} onChange={(e) => setBriefData({ ...briefData, requirements: e.target.value })} placeholder="Specifications / Qty Required..." className="w-full h-24 bg-white border-2 border-slate-950/5 rounded-3xl px-8 text-slate-950 font-black placeholder:text-slate-300 text-xs tracking-widest outline-none focus:border-slate-950 transition-all uppercase" />
                                        </div>
                                        <div className="md:col-span-3">
                                            <button className="w-full h-14 bg-slate-950 text-[#a1dc84] rounded-lg font-black uppercase tracking-[0.4em] text-[11px] shadow-3xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-4">
                                                Execute Brief <span className="material-symbols-outlined !text-xl">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Ready to Move Integration */}
            <section className="py-40 bg-[#f8faf8] dark:bg-slate-900/40">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-black mb-12 tracking-tight font-primary">Operational Ecosystem Integration</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {[
                            { label: "Haulage Sync", icon: "local_shipping", link: "/services/haulage" },
                            { label: "Warehousing Sync", icon: "warehouse", link: "/services/warehousing" },
                            { label: "Customs Sync", icon: "security_update_good", link: "/services/customs" }
                        ].map((node, i) => (
                            <Link key={i} href={node.link} className="flex flex-col items-center gap-6 group">
                                <div className="size-20 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all shadow-xl">
                                    <span className="material-symbols-outlined !text-4xl">{node.icon}</span>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 group-hover:text-[#a1dc84] uppercase tracking-widest transition-colors">{node.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

