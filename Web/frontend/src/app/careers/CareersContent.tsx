"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const jobListings = [
    {
        id: 1,
        title: "Heavy-Duty Fleet Captain",
        dept: "local_shipping",
        type: "Full-Time",
        location: "Lagos, Nigeria",
        salary: "₦350k - ₦550k",
        status: "open",
        department: "Fleet Operations",
        description: "Seeking elite long-haul specialists for our nationwide Sinotruk fleet. Must possess valid Class C license and clean safety record."
    },
    {
        id: 2,
        title: "Precision Maintenance Tech",
        dept: "precision_manufacturing",
        type: "Full-Time",
        location: "Ibafo, Ogun State",
        salary: "₦300k - ₦450k",
        status: "open",
        department: "Maintenance",
        description: "Experienced mechanic for preventive maintenance and diagnostics on heavy-duty diesel engines at our Ibafo precision hub."
    },
    {
        id: 3,
        title: "Logistics Node Coordinator",
        dept: "hub",
        type: "Full-Time",
        location: "Lagos, Nigeria",
        salary: "₦400k - ₦600k",
        status: "open",
        department: "Operations",
        description: "Orchestrate complex cargo flows across the continental grid. Requires advanced knowledge of West African trade corridors."
    },
    {
        id: 4,
        title: "Supply Chain Strategy Analyst",
        dept: "monitoring",
        type: "Remote",
        location: "Lagos / Remote",
        salary: "₦500k - ₦750k",
        status: "open",
        department: "Supply Chain",
        description: "Data-driven strategist to optimize resource flow and mitigate supply chain volatility using AI-powered telemetry."
    },
    {
        id: 5,
        title: "Customs Compliance Marshal",
        dept: "verified_user",
        type: "Full-Time",
        location: "Apapa, Lagos",
        salary: "₦380k - ₦550k",
        status: "closed",
        department: "Customs & Forwarding",
        description: "Ensure zero-friction clearance at pivotal ports. (Applications currently under review)."
    },
    {
        id: 6,
        title: "Safety & Excellence Auditor",
        dept: "security",
        type: "Full-Time",
        location: "Ibafo, Ogun State",
        salary: "₦320k - ₦480k",
        status: "open",
        department: "Safety",
        description: "Uphold our BN2911944 certified standards through rigorous protocol auditing and operator training."
    }
];

export default function CareersContent() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [applyingJob, setApplyingJob] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const filteredJobs = jobListings.filter(job => {
        const matchesTab = activeTab === "all" || (activeTab === "remote" && job.type === "Remote") || (activeTab === "open" && job.status === "open");
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginLoading(true);
        setTimeout(() => {
            setLoginLoading(false);
            setLoginSuccess(true);
            setTimeout(() => setLoginSuccess(false), 3000);
        }, 1500);
    };

    const resetApplication = () => {
        setApplyingJob(null);
        setIsSubmitted(false);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500 overflow-x-hidden">
            {/* Split Hero Section */}
            <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-slate-100 dark:border-white/5">
                {/* Corporate Engine Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center px-8 md:px-24 py-24 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a1dc84] to-transparent"></div>
                    <div className="relative z-10 max-w-xl">
                        <span className="inline-flex items-center gap-3 px-4 py-2 bg-[#a1dc84]/10 border border-[#a1dc84]/20 text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 font-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                            </span>
                            Human Capital Hub
                        </span>
                        <h1 className="text-slate-950 dark:text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-10 font-primary">
                            Architect <br />
                            <span className="text-[#a1dc84]">The Grid.</span>
                        </h1>
                        <p className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 border-l-4 border-[#a1dc84] pl-8 font-secondary mb-12">
                            We aren't just moving cargo; we're engineering the economic nervous system of West Africa. Join an elite collective of logistics visionaries.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="#job-board"
                                className="h-16 flex items-center justify-center px-12 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl font-primary"
                            >
                                Explore Nodes
                            </a>
                            <button className="h-16 flex items-center justify-center px-10 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-slate-50 dark:hover:bg-white/10 transition-all font-primary">
                                Cultural Brief
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Tactical Fleet Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative group overflow-hidden flex flex-col justify-center px-8 md:px-24 py-24"
                >
                    <Image
                        alt="Join the Elite Fleet"
                        src="/images/driver excellence.png"
                        fill
                        className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-700"></div>
                    <div className="relative z-10 max-w-xl">
                        <span className="inline-flex items-center gap-3 px-4 py-2 bg-[#a1dc84] text-slate-950 text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 font-primary shadow-xl">
                            Tactical Fleet Recruitment
                        </span>
                        <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-10 font-primary">
                            Elite <br />
                            Captains <br />
                            <span className="text-[#a1dc84]">Wanted.</span>
                        </h2>
                        <div className="space-y-6 mb-12">
                            {[
                                "Tier-1 Remuneration Package",
                                "Sinotruk Performance Fleet",
                                "Strategic Interstate Routing"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/90 text-sm font-black uppercase tracking-widest font-secondary">
                                    <span className="material-symbols-outlined text-[#a1dc84] fill-1">verified</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <button
                                onClick={() => setApplyingJob(jobListings[0])}
                                className="h-16 flex items-center justify-center px-12 rounded-2xl bg-[#a1dc84] text-slate-950 text-xs font-black uppercase tracking-[0.3em] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 font-primary"
                            >
                                Apply Now
                            </button>
                            <Link href="/portal/tracking">
                                <button className="h-16 flex items-center justify-center px-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/20 transition-all font-primary">
                                    Driver Intel
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Dynamic Job Board */}
            <section className="py-40 max-w-7xl mx-auto px-8 md:px-20" id="job-board">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                    <div className="max-w-2xl">
                        <span className="text-[#a1dc84] font-black tracking-[0.5em] text-[10px] uppercase mb-6 block font-primary italic">Resource Allocation</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter font-primary">
                            Operational <br /><span className="text-[#a1dc84]">Openings.</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            { id: "all", label: "Registry", icon: "data_exploration" },
                            { id: "open", label: "Active Nodes", icon: "sensors" },
                            { id: "remote", label: "Remote Logic", icon: "cloud" }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex h-12 items-center gap-3 rounded-2xl px-8 font-black text-[10px] uppercase tracking-[0.2em] transition-all font-primary shadow-xl ${activeTab === tab.id ? "bg-[#a1dc84] text-slate-950 shadow-[#a1dc84]/20" : "bg-slate-50 dark:bg-white/5 text-slate-500 hover:text-white"}`}
                            >
                                <span className="material-symbols-outlined !text-lg">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter Interface */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-[3rem] p-10 mb-16 shadow-2xl">
                    <div className="grid lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-7 relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#a1dc84] font-black">search</span>
                            <input
                                className="w-full h-16 pl-16 pr-8 rounded-[1.5rem] border-none bg-white dark:bg-slate-900 focus:ring-4 focus:ring-[#a1dc84]/10 dark:text-white placeholder:text-slate-400 placeholder:font-black uppercase tracking-widest text-xs font-black outline-none transition-all shadow-inner"
                                placeholder="Locate your specialty node..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="lg:col-span-5 flex gap-4">
                            <select className="flex-1 h-16 pl-6 pr-10 rounded-[1.5rem] border-none bg-white dark:bg-slate-900 dark:text-white appearance-none focus:ring-4 focus:ring-[#a1dc84]/10 outline-none transition-all font-black text-[10px] uppercase tracking-widest cursor-pointer shadow-inner">
                                <option>All Departments</option>
                                <option>Fleet Operations</option>
                                <option>Maintenance</option>
                                <option>Warehousing</option>
                                <option>Supply Chain</option>
                            </select>
                            <div className="size-16 flex items-center justify-center rounded-[1.5rem] bg-[#a1dc84] text-slate-950 shadow-xl shadow-[#a1dc84]/20 cursor-pointer hover:rotate-90 transition-transform">
                                <span className="material-symbols-outlined font-black">tune</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <motion.div
                                    layout
                                    key={job.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="group grid md:grid-cols-12 items-center p-10 rounded-[3rem] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-white/5 transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:border-[#a1dc84]/30 relative overflow-hidden"
                                >
                                    <div className="md:col-span-7 flex gap-10 items-center">
                                        <div className="size-20 rounded-[1.5rem] bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 transition-all group-hover:bg-[#a1dc84] group-hover:text-slate-950 flex-shrink-0 shadow-inner">
                                            <span className="material-symbols-outlined !text-4xl">{job.dept}</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <h3 className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter font-primary">{job.title}</h3>
                                                {job.status === "open" ? (
                                                    <span className="px-3 py-1 bg-[#a1dc84]/10 text-[#a1dc84] text-[8px] font-black uppercase tracking-widest rounded-full border border-[#a1dc84]/20 animate-pulse">Node: Active</span>
                                                ) : (
                                                    <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[8px] font-black uppercase tracking-widest rounded-full border border-slate-200">Node: Offline</span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] text-slate-500 font-black uppercase tracking-widest font-secondary">
                                                <span className="flex items-center gap-2"><span className="material-symbols-outlined !text-sm text-[#a1dc84]">location_on</span> {job.location}</span>
                                                <span className="flex items-center gap-2"><span className="material-symbols-outlined !text-sm text-[#a1dc84]">payments</span> {job.salary}</span>
                                                <span className="flex items-center gap-2"><span className="material-symbols-outlined !text-sm text-[#a1dc84]">work_history</span> {job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 flex items-center justify-end gap-6 mt-8 md:mt-0">
                                        <p className="hidden xl:block text-[10px] font-bold text-slate-400 dark:text-slate-600 max-w-[200px] text-right uppercase tracking-[0.1em] italic leading-tight">
                                            {job.description}
                                        </p>
                                        <button
                                            onClick={() => setApplyingJob(job)}
                                            disabled={job.status !== "open"}
                                            className={`h-16 px-12 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all font-primary shadow-xl ${job.status === "open" ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:scale-105 active:scale-95 shadow-slate-950/20" : "bg-slate-100 text-slate-400 cursor-not-allowed opacity-50"}`}
                                        >
                                            {job.status === "open" ? "Initialize" : "Sealed"}
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-32 text-center bg-slate-50 dark:bg-white/5 rounded-[4rem] border border-dashed border-slate-200 dark:border-white/10"
                            >
                                <span className="material-symbols-outlined !text-8xl text-slate-200 dark:text-slate-800 mb-8 block">query_stats</span>
                                <h3 className="text-2xl font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">No matching capacity nodes found</h3>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {applyingJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={resetApplication}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[4rem] p-12 md:p-20 shadow-3xl relative overflow-hidden"
                        >
                            <button onClick={resetApplication} className="absolute top-10 right-10 size-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-slate-950 transition-all">
                                <span className="material-symbols-outlined !text-2xl">close</span>
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="size-24 bg-[#a1dc84] text-slate-950 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                                        <span className="material-symbols-outlined !text-6xl font-black animate-bounce">rocket_launch</span>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-950 dark:text-white tracking-tighter mb-8 font-primary">Transmission <br /> <span className="text-[#a1dc84]">Complete.</span></h2>
                                    <div className="inline-block py-3 px-10 bg-slate-50 dark:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] text-[#a1dc84] mb-12 border border-[#a1dc84]/20">
                                        REF: #MRL-CAP-{Math.floor(10000 + Math.random() * 90000)}-S
                                    </div>
                                    <button onClick={resetApplication} className="block w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] font-primary active:scale-95 transition-all">
                                        Acknowledge & Close
                                    </button>
                                </div>
                            ) : (
                                <div className="relative">
                                    {isSubmitting && (
                                        <div className="absolute inset-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center rounded-[3rem]">
                                            <div className="size-20 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                            <span className="mt-8 text-[10px] font-black text-slate-950 dark:text-[#a1dc84] uppercase tracking-[0.5em] animate-pulse">Syncing Human Capital Node...</span>
                                        </div>
                                    )}
                                    <div className="mb-14">
                                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Application Protocol v1.4</span>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white leading-[1.1] tracking-tighter font-primary">{applyingJob.title}</h3>
                                    </div>

                                    <form onSubmit={handleApply} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-6">Full Identity Name</label>
                                                <input required className="w-full h-16 px-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 dark:text-white text-sm font-black outline-none focus:border-[#a1dc84] transition-all font-secondary" placeholder="Tunde Logistics" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-6">Digital Contact Email</label>
                                                <input required type="email" className="w-full h-16 px-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 dark:text-white text-sm font-black outline-none focus:border-[#a1dc84] transition-all font-secondary" placeholder="tunde@mubraiz.com" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-6">Core Capability Summary</label>
                                            <textarea required rows={3} className="w-full p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 dark:text-white text-sm font-black outline-none focus:border-[#a1dc84] transition-all font-secondary resize-none" placeholder="Describe your logistic engineering background..." />
                                        </div>
                                        <div className="p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10 text-center group hover:border-[#a1dc84]/50 transition-all cursor-pointer">
                                            <span className="material-symbols-outlined !text-5xl text-slate-200 dark:text-slate-800 group-hover:text-[#a1dc84] transition-all mb-4">cloud_upload</span>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Drop Professional CV / Resume</p>
                                        </div>

                                        <button className="w-full bg-[#a1dc84] text-slate-950 py-8 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] font-primary shadow-3xl shadow-[#a1dc84]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-6">
                                            Transmit Application <span className="material-symbols-outlined !text-2xl">send</span>
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Staff Secure Portal */}
            <section className="bg-slate-950 py-40 px-8 md:px-20 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-[#a1dc84] to-transparent pointer-events-none blur-[100px]"></div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div>
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.6em] mb-10 block animate-pulse">Staff Infrastructure</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-12 font-primary">
                            The <br />
                            Cockpit <br />
                            <span className="text-[#a1dc84]">Environment.</span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-16 leading-relaxed font-medium font-secondary max-w-xl">
                            Access our proprietary neural ERP. Manage interstate deployments, safety logs, and global performance metrics through a secured biometric link.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: "Intel Repository", text: "Training & ISO compliance modules.", icon: "menu_book" },
                                { title: "Deployment Hub", text: "Live route sync & schedule confirm.", icon: "traffic" }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-[#a1dc84]/10 hover:border-[#a1dc84]/30 transition-all group">
                                    <div className="size-16 rounded-2xl bg-[#a1dc84]/10 flex items-center justify-center text-[#a1dc84] mb-8 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all">
                                        <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-white font-black text-2xl mb-4 font-primary tracking-tight">{item.title}</h4>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white dark:bg-[#0f172a] p-12 md:p-20 rounded-[4rem] shadow-3xl border border-white/10 relative overflow-hidden">
                            <AnimatePresence>
                                {loginSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-30 bg-[#a1dc84] flex flex-col items-center justify-center p-12 text-center"
                                    >
                                        <div className="size-24 bg-slate-950 text-[#a1dc84] rounded-full flex items-center justify-center mb-10 shadow-3xl">
                                            <span className="material-symbols-outlined !text-5xl animate-spin">fingerprint</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-950 tracking-tighter leading-none mb-6 font-primary">Credential <br /> Authenticated</h3>
                                        <p className="text-slate-900 font-black text-[10px] uppercase tracking-widest">Redirecting to Neural Core...</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {loginLoading && (
                                <div className="absolute inset-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col items-center justify-center">
                                    <div className="size-20 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                    <span className="mt-8 text-[10px] font-black text-slate-950 dark:text-[#a1dc84] uppercase tracking-[0.5em] animate-pulse">Biometric Handshake...</span>
                                </div>
                            )}

                            <div className="absolute -top-6 left-16 px-8 py-3 bg-[#a1dc84] text-slate-950 font-black rounded-2xl shadow-2xl uppercase tracking-[0.3em] text-[10px] font-primary z-10 border border-white/20">
                                Secured Protocol v9.2
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-12 tracking-tighter font-primary">Portal <br /> Access.</h3>

                            <form onSubmit={handleLogin} className="space-y-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Staff Identifier</label>
                                    <input required className="w-full h-16 px-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 dark:text-white text-sm font-black outline-none focus:border-[#a1dc84] transition-all font-secondary" placeholder="MRL-CAP-XXXXX" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Digital Key</label>
                                    <input required type="password" className="w-full h-16 px-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 dark:text-white text-sm font-black outline-none focus:border-[#a1dc84] transition-all font-secondary" placeholder="••••••••" />
                                </div>
                                <div className="flex items-center justify-between px-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="size-5 rounded border border-slate-300 dark:border-white/10 flex items-center justify-center group-hover:border-[#a1dc84] transition-all">
                                            <div className="size-2.5 bg-[#a1dc84] rounded-sm scale-0 group-hover:scale-100 transition-transform"></div>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Trust this node</span>
                                    </label>
                                    <a className="text-[10px] font-black text-[#a1dc84] hover:underline underline-offset-8 tracking-widest" href="#">Lost Key?</a>
                                </div>
                                <button className="w-full h-18 py-6 rounded-3xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-[12px] uppercase tracking-[0.5em] shadow-3xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-5 font-primary">
                                    Authorize Entry
                                    <span className="material-symbols-outlined !text-2xl">fingerprint</span>
                                </button>
                            </form>
                        </div>
                        {/* Abstract decoration */}
                        <div className="absolute -bottom-10 -right-10 size-60 bg-[#a1dc84] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
