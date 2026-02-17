"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fleetCategories = [
    { id: 'all', name: 'All Assets' },
    { id: 'heavy', name: 'Heavy Haulage' },
    { id: 'distribution', name: 'Distribution Units' },
    { id: 'container', name: 'Container Chassis' },
    { id: 'specialized', name: 'OOG & Project Units' }
];

const fleetItems = [
    {
        id: 1,
        name: 'Mubraiz Heavy Haulage 8x4',
        category: 'heavy',
        specs: { hp: '750 HP V8', payload: '120 Ton', drive: '8x4 Hub Reduction', status: 'Available' },
        description: 'Elite heavy-lift tractor designed for extreme payloads and industrial machinery transit.',
        image: '/images/fleet/truck-1.jpeg'
    },
    {
        id: 2,
        name: 'Distribution Logistics X1',
        category: 'distribution',
        specs: { engine: 'Turbo Diesel', capacity: '15 Ton', range: '1400km', status: 'Active' },
        description: 'High-velocity distribution unit optimized for urban supply chains and FMCG delivery.',
        image: '/images/fleet/15ton-truck-1.jpeg'
    },
    {
        id: 3,
        name: 'Super-Chassis Container Rig',
        category: 'container',
        specs: { hp: '580 HP', config: 'Skeleton Chassis', axle: '6x4 Heavy Duty', status: 'Available' },
        description: 'Precision-engineered for 40ft container stability across long-haul interstate routes.',
        image: '/images/fleet/truck-2.jpeg'
    },
    {
        id: 4,
        name: '15T Logistics Command X2',
        category: 'distribution',
        specs: { lift: 'Hydraulic Gate', fuel: 'Clean Diesel', height: 'Low-Flow', status: 'Stationed' },
        description: 'Versatile regional hauler with automated tail-lift for efficient depot-to-door ops.',
        image: '/images/fleet/15ton-truck-2.jpeg'
    },
    {
        id: 5,
        name: 'Fleet Support Platform',
        category: 'specialized',
        specs: { length: '13.6m', crane: 'Hiab Hydraulic', load: '24 Ton', status: 'Work-Ready' },
        description: 'Specialized flatbed unit with integrated crane for remote project site deployments.',
        image: '/images/fleet/truck-3.jpeg'
    },
    {
        id: 6,
        name: 'Heavy-Duty 15T Master X3',
        category: 'heavy',
        specs: { hp: '600 HP', torque: '2100 lb-ft', sleeper: 'High-Roof', status: 'Under Maintenance' },
        description: 'Premium interstate tractor combining high torque with maximum operator comfort.',
        image: '/images/fleet/15ton-truck-3.jpeg'
    },
    {
        id: 7,
        name: 'Extended Low-Loader Unit',
        category: 'specialized',
        specs: { config: 'Swan Neck', width: '3.5m Ext', load: '85 Ton', status: 'Available' },
        description: 'The definitive solution for OOG (Out-Of-Gauge) cargo and oversized industrial plant.',
        image: '/images/fleet/15ton-truck-4.jpeg'
    },
    {
        id: 8,
        name: 'Intermodal Volume Specialist',
        category: 'container',
        specs: { capacity: '76.3cbm', type: 'High-Cube Ready', chassis: 'Tri-Axle', status: 'Available' },
        description: 'Optimized for maximium volume container transport with ultra-stable axle geometry.',
        image: '/images/fleet/reliability-truck.jpeg'
    }
];

export default function FleetShowcaseContent() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [inquiringAsset, setInquiringAsset] = useState<any>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ company: '', location: '', summary: '' });

    const filteredFleet = activeCategory === 'all'
        ? fleetItems
        : fleetItems.filter(item => item.category === activeCategory);

    const handleInquiry = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/asset-inquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    assetName: inquiringAsset.name,
                    company: formData.company,
                    location: formData.location,
                    summary: formData.summary
                })
            });
            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('Asset inquiry submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    const resetInquiry = () => {
        setInquiringAsset(null);
        setIsSubmitted(false);
        setFormData({ company: '', location: '', summary: '' });
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500 overflow-x-hidden">
            {/* Hero Section - Optimized Layout */}
            <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10"></div>
                    <Image
                        alt="High-Performance Fleet Showcase"
                        className="h-full w-full object-cover grayscale opacity-50 hover:grayscale-0 transition-opacity duration-1000"
                        src="/images/branded-sinotruk-hero.jpeg"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                    {/* Integrated Breadcrumbs */}
                    <div className="absolute top-10 left-4 sm:left-6 lg:left-8">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                            <Link href="/" className="hover:text-[#a1dc84] transition-colors">Home</Link>
                            <span className="material-symbols-outlined !text-[10px]">chevron_right</span>
                            <span className="text-[#a1dc84]">Fleet Showcase</span>
                        </div>
                    </div>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-4 rounded-full border border-[#a1dc84]/20 bg-[#a1dc84]/10 px-8 py-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#a1dc84] backdrop-blur-md mb-10">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                                </span>
                                Active Asset Grid
                            </span>
                            <h1 className="text-white text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] font-primary capitalize">
                                Elite <br />
                                <span className="text-[#a1dc84]">Logistics Assets.</span>
                            </h1>
                            <p className="border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary max-w-lg">
                                Explore a fleet architected for the rigorous demands of Nigerian and West African logistics. Every unit is a fusion of durability and technical precision.
                            </p>
                            <div className="flex flex-wrap gap-8 mt-12">
                                <Link href="#catalog">
                                    <button className="flex items-center gap-4 rounded-[2rem] bg-[#a1dc84] px-12 py-6 text-xs font-black text-slate-900 shadow-2xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.3em] font-primary">
                                        Explore Inventory <span className="material-symbols-outlined !text-xl">dashboard</span>
                                    </button>
                                </Link>
                                <Link href="/portal/tracking">
                                    <button className="flex items-center gap-4 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 px-12 py-6 text-xs font-black text-white hover:bg-white/10 active:scale-95 transition-all uppercase tracking-[0.3em] font-primary">
                                        Asset Telemetry <span className="material-symbols-outlined !text-xl">satellite_alt</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Overlay Style */}
            <section className="relative z-30 -mt-16 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 rounded-[3rem] overflow-hidden shadow-3xl bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/5 backdrop-blur-2xl">
                    <div className="bg-white dark:bg-slate-900 p-10 flex flex-col items-center text-center">
                        <span className="text-[#a1dc84] font-black text-4xl mb-2">55+</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Fleet Assets</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-10 flex flex-col items-center text-center">
                        <span className="text-[#a1dc84] font-black text-4xl mb-2">100%</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">IoT Integrated</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-10 flex flex-col items-center text-center">
                        <span className="text-[#a1dc84] font-black text-4xl mb-2">24/7</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Command Support</span>
                    </div>
                </div>
            </section>

            {/* Catalog Section */}
            <section id="catalog" className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-[#a1dc84] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-primary">Asset Catalog</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none font-primary capitalize">
                            Engineered <br /><span className="text-[#a1dc84]">Hardware.</span>
                        </h2>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3">
                        {fleetCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all font-primary ${activeCategory === cat.id
                                    ? 'bg-[#a1dc84] text-slate-900 shadow-xl shadow-[#a1dc84]/20'
                                    : 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/5 hover:text-[#a1dc84] hover:bg-[#a1dc84]/5'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fleet Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredFleet.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5 shadow-2xl"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay Details */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight font-primary leading-tight capitalize">{item.name}</h3>
                                    <p className="text-[10px] text-slate-300 font-bold mb-8 font-secondary line-clamp-2 uppercase tracking-wide">{item.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {Object.entries(item.specs).slice(0, 2).map(([key, val]) => (
                                            <div key={key}>
                                                <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mb-1">{key}</p>
                                                <p className="text-xs font-black text-white font-secondary">{val as string}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setInquiringAsset(item)}
                                        className="w-full bg-[#a1dc84] text-slate-900 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all font-primary shadow-xl flex items-center justify-center gap-3"
                                    >
                                        <span className="material-symbols-outlined !text-lg">point_of_sale</span>
                                        Inquire Asset
                                    </button>
                                </div>

                                {/* Quick Info Tag */}
                                <div className="absolute top-6 right-6 flex items-center gap-3 group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="bg-slate-950/40 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Asset Inquiry Modal */}
            <AnimatePresence>
                {inquiringAsset && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={resetInquiry}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-white/10 shadow-3xl relative overflow-hidden"
                        >
                            <button
                                onClick={resetInquiry}
                                className="absolute top-10 right-10 text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined !text-3xl">close</span>
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="size-24 bg-[#a1dc84] text-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl">
                                        <span className="material-symbols-outlined !text-5xl font-black animate-pulse">verified_user</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white capitalize tracking-tighter mb-6 font-primary">Inquiry <span className="text-[#a1dc84]">Synthesized.</span></h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-12 font-secondary leading-relaxed">
                                        Your request for the <span className="text-slate-950 dark:text-white font-black">{inquiringAsset.name}</span> has been logged into the Mubraiz Asset Management Node.
                                    </p>
                                    <div className="bg-slate-50 dark:bg-white/5 px-10 py-5 rounded-2xl mb-12 inline-block font-mono text-[#a1dc84] text-sm uppercase tracking-widest font-bold">
                                        REF: #FLX-{Math.floor(10000 + Math.random() * 90000)}-Z
                                    </div>
                                    <button
                                        onClick={resetInquiry}
                                        className="block w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] font-primary active:scale-95 transition-all"
                                    >
                                        Return to Showcase
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-12">
                                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block animate-pulse">Asset Allocation Protocol</span>
                                        <h3 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter capitalize leading-none font-primary">{inquiringAsset.name}</h3>
                                        <p className="mt-6 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest font-secondary">Specify operation parameters below.</p>
                                    </div>

                                    <form onSubmit={handleInquiry} className="space-y-10 relative">
                                        {loading && (
                                            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-20 flex flex-col items-center justify-center rounded-3xl">
                                                <div className="size-16 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                                <span className="mt-8 text-[10px] font-black text-slate-900 dark:text-[#a1dc84] uppercase tracking-[0.4em] animate-pulse">Syncing Fleet Nodes...</span>
                                            </div>
                                        )}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Corporate Entity</label>
                                                <input required type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl px-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:border-[#a1dc84] transition-all font-secondary" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Deployment Zone</label>
                                                <input required type="text" placeholder="e.g. Lagos, Onitsha" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl px-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:border-[#a1dc84] transition-all font-secondary" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Operational Summary</label>
                                            <textarea required rows={3} placeholder="Describe cargo and lease duration..." value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-[2rem] px-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:border-[#a1dc84] transition-all font-secondary resize-none"></textarea>
                                        </div>

                                        <button
                                            className="w-full bg-[#a1dc84] text-slate-900 py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] font-primary hover:brightness-105 active:scale-95 transition-all shadow-3xl shadow-[#a1dc84]/20 flex items-center justify-center gap-6"
                                        >
                                            Transmit Inquiry <span className="material-symbols-outlined !text-2xl">sensors</span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Performance Standards */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a1dc84]/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div>
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block animate-pulse">Technical Compliance Grid</span>
                            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter font-primary mb-12 capitalize">
                                Zero. <br />
                                <span className="text-[#a1dc84]">Failure.</span> <br />
                                Protocol.
                            </h2>
                            <p className="text-slate-400 font-medium leading-relaxed max-w-xl font-secondary text-xl mb-16">
                                We maintain a rigorous daily diagnostic cycle on 100% of our fleet. Integrated telematics feed live data to our Ibafo command center, ensuring every asset operates at peak engineering performance.
                            </p>
                            <Link href="/fleet/safety">
                                <button className="px-12 py-6 bg-white text-slate-950 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#a1dc84] transition-all flex items-center gap-4">
                                    Technical Specs Deep-Dive <span className="material-symbols-outlined !text-xl">science</span>
                                </button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: 'Fleet Intelligence', desc: 'Real-time engine & fuel telemetry.', icon: 'monitoring' },
                                { title: 'Safety Integrity', desc: 'ISO certified mechanical protocols.', icon: 'verified_user' },
                                { title: 'Predictive Care', desc: 'AI-driven wear & tear analysis.', icon: 'precision_manufacturing' },
                                { title: 'Operator Sync', desc: 'Dedicated professional driver training.', icon: 'settings_accessibility' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition-all group">
                                    <div className="size-20 bg-[#a1dc84]/10 rounded-[2.5rem] flex items-center justify-center text-[#a1dc84] mb-8 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all">
                                        <span className="material-symbols-outlined !text-4xl">{stat.icon}</span>
                                    </div>
                                    <h4 className="text-white font-black text-xl mb-4 font-primary capitalize tracking-tighter">{stat.title}</h4>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest font-secondary leading-relaxed">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Yard Spotlight */}
            <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 dark:bg-white/5 rounded-[5rem] p-16 md:p-32 relative overflow-hidden group border border-slate-100 dark:border-white/5">
                    <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
                        <div className="order-2 lg:order-1 relative h-[500px] rounded-[4rem] overflow-hidden shadow-3xl border-[20px] border-white dark:border-slate-800">
                            <Image
                                src="/images/fleet/flet yard/fleetyard1.png"
                                alt="Mubraiz Maintenance Hub"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>

                        <div className="order-1 lg:order-2 space-y-12">
                            <div>
                                <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Operational HQ</span>
                                <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter font-primary capitalize">
                                    Ibafo <br /> <span className="text-[#a1dc84]">Command</span> <br /> Center.
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed font-secondary text-xl">
                                Strategically positioned along the Lagos/Ibadan expressway, our facility serves as the staging ground for West African logistics dominance. Over 5000sqm of engineered yard space.
                            </p>
                            <div className="flex gap-12">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white">6500sqm</span>
                                    <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mt-2 underline underline-offset-4">Secured Staging</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white">24/7/365</span>
                                    <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mt-2 underline underline-offset-4">Tactical Response</span>
                                </div>
                            </div>
                            <Link href="/fleet/facility">
                                <button className="px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-3xl">
                                    Inspect Maintenance Yard
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-16 tracking-tighter font-primary capitalize leading-none">
                        Deploy <br /> <span className="text-[#a1dc84]">Operational</span> <br /> Power.
                    </h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <button
                            onClick={() => setInquiringAsset({ name: 'Fleet Leasing Portfolio' })}
                            className="bg-[#a1dc84] text-slate-900 px-16 py-8 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-3xl shadow-[#a1dc84]/30 hover:brightness-110 active:scale-95 transition-all"
                        >
                            Execute Leasing Brief
                        </button>
                        <Link href="/contact" className="px-16 py-8 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-white/10">
                            Talk To Controller
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
