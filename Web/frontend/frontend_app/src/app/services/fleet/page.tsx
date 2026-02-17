"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ReadyToMove from "@/components/home/ReadyToMove";

const fleetLevels = [
    {
        id: "heavy",
        name: "Heavy-Duty Haulage",
        tag: "Continental Reach",
        desc: "Engineered for cross-border logistics and extreme payload stability across African industrial corridors.",
        specs: [
            { label: "Nominal Load", value: "30 - 45 Tons" },
            { label: "Asset Type", value: "HOWO / Actros Prime Movers" },
            { label: "Best For", value: "Mineral Oars, Cement, Industrial Steel" }
        ],
        image: "/images/fleet/truck-1.jpeg",
        accent: "bg-[#a1dc84]"
    },
    {
        id: "distribution",
        name: "Urban Distribution",
        tag: "Fast-Track Logistics",
        desc: "Agile 15-ton units optimized for regional intra-state delivery and high-frequency urban navigation.",
        specs: [
            { label: "Nominal Load", value: "10 - 15 Tons" },
            { label: "Asset Type", value: "DAF / 15T Medium Duty" },
            { label: "Best For", value: "FMCG, Retail Distribution, Palletized Goods" }
        ],
        image: "/images/fleet/15ton-truck-1.jpeg",
        accent: "bg-slate-900"
    },
    {
        id: "specialized",
        name: "Specialized Assets",
        tag: "Precision Engineering",
        desc: "Custom-configured units for oversized cargo, containerized freight, and project-based machinery transport.",
        specs: [
            { label: "Nominal Load", value: "Custom Config" },
            { label: "Asset Type", value: "Low-Loader / Container Chassis" },
            { label: "Best For", value: "OOG Cargo, 40ft Containers, Heavy Plant" }
        ],
        image: "/images/fleet/truck-2.jpeg",
        accent: "bg-[#a1dc84]"
    }
];

const intelligenceFeatures = [
    {
        title: "Real-time Telemetry",
        desc: "Continuous data streaming of engine health, fuel consumption, and precise GPS positioning via our Mubraiz Insight platform.",
        icon: "satellite_alt"
    },
    {
        title: "Predictive Maintenance",
        desc: "AI-driven diagnostics that anticipate mechanical wear, ensuring 99.8% fleet uptime and failure-free deliveries.",
        icon: "precision_manufacturing"
    },
    {
        title: "Eco-Stream Tech",
        desc: "Euro-6 standard emission controls integrated across our modern fleet to reduce carbon footprint and operational costs.",
        icon: "eco"
    },
    {
        title: "Security Shield",
        desc: "Multi-layered surveillance and panic-alert systems integrated with national security nodes for safe transit.",
        icon: "shield_lock"
    }
];

export default function FleetServicePage() {
    const [deployLoading, setDeployLoading] = useState(false);
    const [deploySubmitted, setDeploySubmitted] = useState(false);
    const [deployData, setDeployData] = useState({ asset: '', location: '' });

    const handleDeployRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setDeployLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/fleet-deployment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(deployData)
            });
            if (response.ok) {
                setDeploySubmitted(true);
            }
        } catch (error) {
            console.error('Fleet deployment submission error:', error);
        } finally {
            setDeployLoading(false);
        }
    };

    return (
        <main className="flex flex-col bg-[#f8faf8] dark:bg-[#0a0f0a] transition-colors duration-500">
            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
                    <Image
                        src="/images/fleet/flet yard/fleetyard2.png"
                        alt="Mubraiz Resources Industrial Fleet"
                        fill
                        className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#a1dc84]/10 border border-[#a1dc84]/20 text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-md shadow-lg shadow-[#a1dc84]/5">
                            <span className="w-2 h-2 rounded-full bg-[#a1dc84] animate-pulse"></span>
                            Fleet Infrastructure V.3 - Active
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter font-primary mb-10">
                            Powering The <br />
                            <span className="text-[#a1dc84]">African Grid.</span>
                        </h1>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-lg mb-14 border-l-4 border-[#a1dc84] pl-8 font-secondary">
                            Deploying thousands of horsepower through a diversified, tech-integrated fleet engineered for <span className="text-[#a1dc84] font-black uppercase tracking-tight">100% reliability</span> across every terrain in Nigeria.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <Link href="#deployment">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-[#a1dc84] text-slate-900 rounded-lg font-black text-xs uppercase tracking-[0.3em] shadow-3xl shadow-[#a1dc84]/30 hover:brightness-110 flex items-center gap-4 transition-all"
                                >
                                    Request Deployment <span className="material-symbols-outlined !text-xl">local_shipping</span>
                                </motion.button>
                            </Link>
                            <Link href="/resources/fleet-index">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-white/10 text-white rounded-lg font-black text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all flex items-center gap-4"
                                >
                                    Technical Index <span className="material-symbols-outlined !text-xl">menu_book</span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STRATEGIC CAPABILITY BAR */}
            <section className="relative -mt-20 z-30 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[4rem] p-12 shadow-3xl dark:shadow-none overflow-hidden group">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 items-center text-center">
                        {[
                            { val: "150+", label: "Active Units", color: "#4CD964" },
                            { val: "99.8%", label: "Uptime Record", color: "#4CD964" },
                            { val: "36", label: "States Covered", color: "#4CD964" },
                            { val: "24/7", label: "Fleet Control", color: "#4CD964" }
                        ].map((stat, i) => (
                            <div key={i} className="group-hover:translate-y-[-5px] transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="text-5xl font-black text-slate-900 dark:text-white font-display mb-2 tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] font-black text-[#4CD964] uppercase tracking-[0.3em] font-secondary">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FLEET SEGMENTATION */}
            <section className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 max-w-4xl mx-auto group">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Asset Diversification</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary mb-10">
                            Optimized For <br />
                            <span className="text-[#a1dc84]">Every Mission.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed font-secondary">
                            From high-volume FMCG distribution to heavy industrial mineral haulage, our categorized fleet ensures we have the specific power factor you need.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {fleetLevels.map((level, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group bg-slate-50 dark:bg-white/[0.02] rounded-[5rem] border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col shadow-2xl hover:shadow-[#a1dc84]/5 hover:border-[#a1dc84]/30 transition-all duration-700 h-full"
                            >
                                <div className="relative h-96 overflow-hidden">
                                    <Image
                                        src={level.image}
                                        alt={level.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute top-12 left-12">
                                        <span className={`${level.accent} text-white text-[9px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-2xl`}>
                                            {level.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-14 flex-1 flex flex-col">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter font-primary">{level.name}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-12 font-secondary">
                                        {level.desc}
                                    </p>
                                    <div className="mt-auto space-y-6 pt-10 border-t border-slate-100 dark:border-white/5">
                                        {level.specs.map((spec, i) => (
                                            <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest font-secondary">
                                                <span className="text-slate-400">{spec.label}</span>
                                                <span className="text-slate-900 dark:text-white">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTELLIGENCE SECTION */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#a1dc84]/5 blur-[200px] opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div>
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-primary animate-pulse">Tech Integration</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] font-primary mb-10">
                                Intelligence Behind <br />
                                <span className="text-[#a1dc84]">Every Throttle.</span>
                            </h2>
                            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-16 font-secondary">
                                We don't just move trucks; we manage a data-driven ecosystem. Every asset is a node in our intelligence network, providing real-time visibility and safety benchmarks.
                            </p>
                            <Link href="/fleet/safety" className="inline-flex items-center gap-6 text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] hover:gap-10 transition-all group">
                                Explore Safety Technology
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">east</span>
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {intelligenceFeatures.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-12 bg-white/5 border border-white/10 rounded-[4rem] hover:bg-white/10 hover:border-[#a1dc84]/30 transition-all group backdrop-blur-3xl"
                                >
                                    <div className="size-20 bg-[#a1dc84] border-4 border-slate-900 rounded-[2rem] flex items-center justify-center text-slate-900 mb-10 transform group-hover:rotate-12 transition-transform shadow-2xl">
                                        <span className="material-symbols-outlined !text-4xl">{feature.icon}</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-6 tracking-tighter font-primary">{feature.title}</h4>
                                    <p className="text-slate-500 font-medium text-xs leading-relaxed uppercase tracking-wide font-secondary">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAINTENANCE GUARANTEE */}
            <section className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-[5rem] overflow-hidden border border-slate-100 dark:border-white/5 p-16 md:p-32 shadow-3xl dark:shadow-none relative group">
                        <div className="grid lg:grid-cols-2 gap-32 items-center relative z-10">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary mb-10">
                                    The 53-Point <br />
                                    <span className="text-[#a1dc84]">Zero-Failure Protocol.</span>
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12 font-secondary">
                                    Every vehicle returning to our Hub undergoes a rigorous mechanical audit. We maintain our fleet beyond standard requirements to ensure your deadlines are never compromised.
                                </p>
                                <div className="space-y-8 mb-16">
                                    {[
                                        { icon: "verified", label: "ISO 9001 Certified Maintenance" },
                                        { icon: "construction", label: "24/7 Mobile Recovery Units" }
                                    ].map((check, i) => (
                                        <div key={i} className="flex items-center gap-8 group/item">
                                            <div className="size-16 rounded-[1.5rem] bg-white dark:bg-white/5 flex items-center justify-center text-[#a1dc84] shadow-xl group-hover/item:bg-[#a1dc84] group-hover/item:text-slate-900 transition-all">
                                                <span className="material-symbols-outlined !text-3xl">{check.icon}</span>
                                            </div>
                                            <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] font-primary">{check.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/fleet/facility">
                                    <button className="px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-lg font-black text-xs uppercase tracking-[0.3em] hover:bg-[#a1dc84] hover:text-slate-900 transition-all shadow-2xl">
                                        Visit Fleet Hub Facility
                                    </button>
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[5rem] overflow-hidden border-[15px] border-white dark:border-slate-800 shadow-3xl">
                                <Image
                                    src="/images/fleet/distribution/heavy-3.jpeg"
                                    alt="Maintenance Yard Operations"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                <div className="absolute bottom-16 left-16 right-16">
                                    <div className="bg-[#a1dc84] text-slate-900 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest inline-block shadow-2xl">
                                        100% Reliability Target
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Asset Deployment Hub (Functional) */}
            <section id="deployment" className="py-40 bg-[#a1dc84] transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 size-[800px] bg-white opacity-20 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="bg-slate-950 rounded-[5rem] p-16 md:p-32 shadow-3xl border-8 border-slate-900 overflow-hidden relative group">
                        <AnimatePresence mode="wait">
                            {deploySubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-10"
                                >
                                    <div className="size-24 rounded-[2rem] bg-[#a1dc84] text-slate-900 flex items-center justify-center mx-auto mb-12 shadow-2xl">
                                        <span className="material-symbols-outlined !text-5xl">task_alt</span>
                                    </div>
                                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none font-primary">Mission <br /> Authorized.</h2>
                                    <p className="text-slate-400 text-xl font-medium mb-12 font-secondary max-w-2xl mx-auto">
                                        Deployment request for <span className="text-white font-black">{deployData.asset}</span> at <span className="text-white font-black">{deployData.location}</span> has been synchronized.
                                    </p>
                                    <div className="bg-white/5 px-10 py-5 rounded-2xl border border-white/5 mb-12 inline-block font-mono text-[#a1dc84] text-sm font-black uppercase tracking-widest">
                                        Protocol Code: #OPS-{(Math.random() * 9999).toFixed(0)}-H
                                    </div>
                                    <button onClick={() => setDeploySubmitted(false)} className="block w-full text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.4em] hover:text-white transition-all">New Deployment Request</button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                                        <div>
                                            <span className="bg-[#a1dc84] text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 inline-block font-primary">Logistics Operations Hub</span>
                                            <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[1.1] font-primary">
                                                Deploy <br /> <span className="text-[#a1dc84]">Professional</span> <br /> Assets.
                                            </h2>
                                            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-16 font-secondary">
                                                Activate the grid. Secure and mobilize the exact tonnage and trailer configuration for your industrial mission.
                                            </p>
                                            <div className="flex items-center gap-8">
                                                <div className="flex flex-col">
                                                    <span className="text-4xl font-black text-white font-display">INSTANT</span>
                                                    <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest font-secondary">Response Time</span>
                                                </div>
                                                <div className="h-12 w-px bg-white/10"></div>
                                                <div className="flex flex-col">
                                                    <span className="text-4xl font-black text-white font-display">MOBILE</span>
                                                    <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest font-secondary">Field Ready</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            {deployLoading && (
                                                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-10 flex flex-col items-center justify-center rounded-[3rem]">
                                                    <div className="size-20 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                                    <span className="mt-8 text-[11px] font-black text-[#a1dc84] uppercase tracking-[0.5em] animate-pulse whitespace-nowrap">Synchronizing Operation...</span>
                                                </div>
                                            )}
                                            <form onSubmit={handleDeployRequest} className="bg-white/5 p-12 rounded-[4rem] border border-white/5 space-y-10 group-focus-within:border-[#a1dc84]/30 transition-all">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4 font-primary">Asset Classification</label>
                                                    <select required value={deployData.asset} onChange={(e) => setDeployData({ ...deployData, asset: e.target.value })} className="w-full bg-slate-900 border-2 border-white/5 rounded-2xl px-8 py-6 text-white text-xs font-black uppercase tracking-widest focus:border-[#a1dc84] outline-none appearance-none transition-all">
                                                        <option value="">Select Asset</option>
                                                        <option value="Heavy-Duty Prime Mover">Heavy-Duty Prime Mover</option>
                                                        <option value="Urban 15-Ton Cargo">Urban 15-Ton Cargo</option>
                                                        <option value="Low-Bed Trailer">Low-Bed Trailer</option>
                                                        <option value="Flatbed Container Rig">Flatbed Container Rig</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4 font-primary">Operational Location</label>
                                                    <input required type="text" value={deployData.location} onChange={(e) => setDeployData({ ...deployData, location: e.target.value })} placeholder="e.g. Apapa Terminal / Kano Hub" className="w-full bg-slate-900 border-2 border-white/5 rounded-2xl px-8 py-6 text-white text-xs font-black uppercase tracking-widest placeholder:text-slate-700 focus:border-[#a1dc84] outline-none transition-all" />
                                                </div>
                                                <button className="w-full bg-[#a1dc84] text-slate-950 font-black uppercase tracking-[0.4em] text-[10px] px-8 py-4 rounded-lg shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                                                    Execute Deployment <span className="material-symbols-outlined !text-xl">rocket_launch</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* TECHNICAL CAPABILITY INDEX */}
            <section className="py-40 px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 max-w-4xl mx-auto">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Fleet Metrics</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none font-primary">
                            Technical Capability <br /> <span className="text-[#a1dc84]">Index.</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { label: "Max Gross Weight", value: "45,000 KG" },
                            { label: "Volumetric Capacity", value: "88 CBM" },
                            { label: "Engine Strength", value: "371 - 750 HP" },
                            { label: "Gradeability", value: "15% Full Load" },
                            { label: "Braking Response", value: "ABS + ESC" },
                            { label: "Environmental", value: "Euro II / Euro VI" },
                            { label: "Tracking Level", value: "Sat-Comm L3" },
                            { label: "Primary Fleet", value: "35 HOWO Units" },
                        ].map((metric, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 p-12 rounded-[3.5rem] flex flex-col justify-between min-h-[160px] shadow-sm hover:shadow-[#a1dc84]/10 hover:border-[#a1dc84]/30 transition-all duration-500">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-secondary">{metric.label}</span>
                                <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter font-display uppercase">{metric.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ReadyToMove />
        </main>
    );
}
