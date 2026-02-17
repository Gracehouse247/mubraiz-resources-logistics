"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        title: "Strategic Location",
        desc: "Prime location along the Lagos/Ibadan Expressway granting unparalleled access to key transportation routes nationwide.",
        icon: "location_on"
    },
    {
        title: "Dedicated Maintenance",
        desc: "Experienced technicians conducting routine inspections, repairs, and servicing to guarantee peak fleet performance.",
        icon: "engineering"
    },
    {
        title: "Diesel Intelligence",
        desc: "Integrated fueling station ensuring uninterrupted journeys and convenient energy management for our entire fleet.",
        icon: "local_gas_station"
    },
    {
        title: "Security Protocols",
        desc: "Highest safety standards with rigorous protocols to safeguard our personnel, assets, and the environment.",
        icon: "security"
    },
    {
        title: "Fleet Inventory",
        desc: "Ample vehicle storage space, keeping our fleet organized and ready for immediate deployment at all times.",
        icon: "inventory_2"
    },
    {
        title: "Operational Integrity",
        desc: "The cornerstone of our efficiency, ensuring every vehicle remains a paragon of reliability and performance.",
        icon: "verified"
    }
];

export default function FacilityContent() {
    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0a0f0a] font-primary transition-colors duration-500">
            {/* Hero Section - Homepage Adopted (Removed pt-24) */}
            <section className="relative flex min-h-[750px] w-full items-center overflow-hidden bg-[#0f172a]">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>

                    {/* Brand Dominance Glow */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[120px] z-15 pointer-events-none"></div>

                    <Image
                        src="/images/fleet/flet yard/fleetyard1.png"
                        alt="Mubraiz Maintenance Yard Panorama"
                        fill
                        className="object-cover grayscale opacity-60"
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col gap-8 text-white"
                        >
                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md font-primary">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                                </span>
                                Operations Infrastructure Hub
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary">
                                Fleet Garage & <br />
                                <span className="text-[#a1dc84]">Yard Ops.</span>
                            </h1>

                            <p className="max-w-lg border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                                Strategically located in Ibafo along the Lagos/Ibadan Expressway, our maintenance yard is the beating heart of Mubraiz Logistics.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-6">
                                <Link href="/contact">
                                    <button className="flex items-center gap-3 rounded-2xl bg-[#a1dc84] px-10 py-5 text-xs font-black text-slate-900 hover:brightness-110 transition-all shadow-2xl shadow-[#a1dc84]/30 uppercase tracking-widest group font-primary">
                                        Visit Facility
                                        <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                </Link>
                                <Link href="#details">
                                    <button className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-xs font-black text-white hover:bg-white/20 transition-all uppercase tracking-widest font-primary">
                                        Operational Scale
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: Site Map / Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-[4rem] shadow-2xl overflow-hidden aspect-square">
                                <Image
                                    src="/images/fleet/flet yard/fleetyard2.png"
                                    alt="Maintenance Yard"
                                    fill
                                    className="object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center font-black">
                                        <div className="text-8xl text-white opacity-20 tracking-tighter mb-2 font-primary">Ibafo</div>
                                        <div className="text-[#a1dc84] text-xs tracking-[0.5em] uppercase font-primary">Principal Yard</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hub Introduction - Homepage Spacing */}
            <section id="details" className="py-32 px-6 relative z-10 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Strategic Backbone</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-10 leading-[1.1] font-primary">
                                Operational <br /><span className="text-[#a1dc84]">Excellence.</span>
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-secondary font-medium leading-relaxed mb-8">
                                At Mubraiz Resources, our commitment to excellence extends beyond the road. Our Fleet Garage and Maintenance Yard serve as the bedrock of our reliability.
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-secondary font-medium leading-relaxed border-l-2 border-[#a1dc84] pl-8">
                                Here, industrial precision meets high-tier performance, ensuring that our fleet is always in peak condition to meet demanding nationwide requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10 group"
                        >
                            <Image
                                src="/images/fleet/flet yard/fleetyard2.png"
                                alt="Maintenance Yard Performance"
                                fill
                                className="object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Key Features Grid - Homepage Card Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-12 bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-xl hover:shadow-[#a1dc84]/5 transition-all duration-500 text-center"
                            >
                                <div className="size-20 bg-slate-900 dark:bg-white/5 rounded-[1.5rem] flex items-center justify-center text-white dark:text-[#a1dc84] mb-10 mx-auto group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all shadow-xl shadow-[#a1dc84]/10">
                                    <span className="material-symbols-outlined !text-4xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter font-primary">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-secondary font-medium text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark Authority Section: Commitment */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="bg-white/5 backdrop-blur-xl rounded-[5rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
                        <div className="relative z-10 max-w-4xl">
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Our Heritage</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[1.1] font-primary text-white">
                                Sustaining <br /><span className="text-[#a1dc84]">The Mission.</span>
                            </h2>
                            <p className="text-slate-400 text-lg font-secondary font-medium leading-relaxed mb-16">
                                Decisions at this facility are based on absolute facts and objective analysis—our "fact-founded, thought-through approach." We ensure our operations match global logistics dynamics with executive urgency.
                            </p>
                            <Link href="/contact">
                                <button className="bg-[#a1dc84] text-slate-900 px-16 py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-[#a1dc84]/20 border border-[#a1dc84] font-primary">
                                    Executive Tour Request
                                </button>
                            </Link>
                        </div>

                        {/* Abstract Decoration */}
                        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none">
                            <span className="material-symbols-outlined !text-[400px] text-[#a1dc84]">precision_manufacturing</span>
                        </div>
                    </div>
                </div>
                {/* Brand Glows */}
                <div className="absolute top-0 right-0 size-[800px] bg-[#a1dc84] blur-[250px] opacity-[0.03] pointer-events-none" />
            </section>

            {/* Visual Gallery - Full Impact */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { url: "/images/fleet/flet yard/fleetyard1.png", label: "Main Logistics Hub - Ibafo" },
                            { url: "/images/fleet/flet yard/fleetyard2.png", label: "Ready for Precision Deployment" }
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative aspect-[16/9] rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-slate-50 dark:border-white/5"
                            >
                                <Image
                                    src={img.url}
                                    alt={img.label}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                                    <p className="text-white font-black text-[10px] tracking-[0.4em] font-primary">{img.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-12 tracking-tighter leading-[1.1] font-primary">
                        The Core Of <br /><span className="text-[#a1dc84]">Success.</span>
                    </h2>
                    <p className="text-slate-500 font-secondary font-medium text-lg mb-16 px-12">
                        Unmatched maintenance. Zero-incident protocols. 24/7 readiness.
                    </p>
                    <Link href="/contact" className="px-16 py-7 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl font-primary">
                        Consult Our Ops Managers
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
