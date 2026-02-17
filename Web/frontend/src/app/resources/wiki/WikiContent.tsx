"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function KnowledgeEngine() {
    const [activeView, setActiveView] = useState<'insights' | 'glossary' | 'incoterms'>('insights');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [viewingArticle, setViewingArticle] = useState<any | null>(null);

    const categories = [
        { id: 'all', label: 'All Knowledge', count: 248, icon: 'grid_view' },
        { id: 'Customs Mastery', label: 'Customs Mastery', count: 62, icon: 'gavel' },
        { id: 'Haulage & Fleet', label: 'Haulage & Fleet', count: 84, icon: 'local_shipping' },
        { id: 'Supply Orchestration', label: 'Supply Orchestration', count: 52, icon: 'hub' },
        { id: 'Storage Tech', label: 'Storage Tech', count: 50, icon: 'warehouse' }
    ];

    const featuredArticle = {
        id: 'feat-1',
        category: 'Customs Mastery',
        title: 'Beyond the PAAR: Navigating 2026 NCS Digital Protocols',
        desc: 'An executive deep-dive into the latest Pre-Arrival Assessment Report protocols and how Nigerian importers can leverage digital migration to reduce port dwell times by 40%.',
        content: `
            The Nigerian Customs Service (NCS) has accelerated its digital transformation agenda for 2026, introducing high-fidelity AI processing for PAAR (Pre-Arrival Assessment Report) submissions. 
            
            Key shifts include the mandatory adoption of the Unified Trade Interface (UTI), which integrates directly with global shipping manifests. For the strategic importer, this means a reduction in physical inspection requirements if the digital footprint of the cargo is verified at the point of origin.

            Our analysis suggests that by synchronizing your documentation within our "Mubraiz Gateway" seven days prior to vessel arrival, you can bypass traditional verification bottlenecks.
        `,
        author: 'Chief Compliance Officer',
        role: 'Mubraiz Resources',
        readTime: '12 min read',
        time: '12 min read',
        image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
        date: 'Feb 08, 2026',
        icon: 'gavel'
    };

    const articlesList = [
        {
            id: 'art-1',
            date: 'Feb 04, 2026',
            time: '8 min read',
            readTime: '8 min read',
            category: 'Haulage & Fleet',
            title: 'Precision Road Intelligence: Optimizing the Lagos Corridor',
            desc: 'A technical analysis of topographical routing, fuel efficiency, and secure truck staging strategies for Nigerian inland transport.',
            content: 'Detailed strategies for navigating the unique logistical landscape of Southwest Nigeria, focusing on the Apapa-Ibadan trade artery.',
            icon: 'route',
            author: 'Logistics Director',
            image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'art-2',
            date: 'Jan 30, 2026',
            time: '10 min read',
            readTime: '10 min read',
            category: 'Supply Orchestration',
            title: 'The JIT Revolution: Eliminating Waste in West Africa',
            desc: 'How Just-In-Time procurement models are saving Nigerian industrial firms millions in warehouse holding costs.',
            content: 'Case studies on supply chain lean transformation across the manufacturing sector in Ogun State and Lagos.',
            icon: 'architecture',
            author: 'Operations Head',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'art-3',
            date: 'Jan 25, 2026',
            time: '15 min read',
            readTime: '15 min read',
            category: 'Customs Mastery',
            title: 'AfCFTA 2.0: Understanding Rules of Origin',
            desc: 'A masterclass on the continental trade agreement and how to qualify for zero-tariff status on manufactured goods.',
            content: 'Breaking down the complexities of value-added evidence and transformation criteria for intra-African trade.',
            icon: 'gavel',
            author: 'Trade Specialist',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    const glossaryData = [
        {
            letter: 'A', terms: [
                { t: 'Ad Valorem', d: 'Customs duties calculated based on the total value of the goods rather than weight or quantity.' },
                { t: 'AfCFTA', d: 'African Continental Free Trade Area. A strategic trade agreement designed to create a single market across Africa.', crucial: true },
                { t: 'Air Waybill', d: 'The non-negotiable document of title issued by an air carrier to acknowledge receipt of cargo.' }
            ]
        },
        {
            letter: 'B', terms: [
                { t: 'Bill of Lading (B/L)', d: 'The primary legal document detailing the type, quantity, and destination of goods being carried.', crucial: true },
                { t: 'Bonded Warehouse', d: 'A secure facility where goods may be stored without payment of duty until they are removed.' }
            ]
        },
        {
            letter: 'C', terms: [
                { t: 'CIF', d: 'Cost, Insurance, and Freight. Seller pays costs and freight to bring goods to the port of destination.' },
                { t: 'Consignment', d: 'Goods sent to an agent for sale or to a customer, with title remaining with the sender until sold.' }
            ]
        }
    ];

    const incotermsMatrix = [
        { term: 'EXW', name: 'Ex Works', origin: true, freight: false, insurance: false, import: false, delivery: false },
        { term: 'FOB', name: 'Free On Board', origin: true, freight: false, insurance: false, import: false, delivery: false },
        { term: 'CIF', name: 'Cost, Insurance, Freight', origin: true, freight: true, insurance: true, import: false, delivery: false },
        { term: 'DDP', name: 'Delivered Duty Paid', origin: true, freight: true, insurance: true, import: true, delivery: true },
        { term: 'CFR', name: 'Cost and Freight', origin: true, freight: true, insurance: false, import: false, delivery: false },
        { term: 'FCA', name: 'Free Carrier', origin: true, freight: false, insurance: false, import: false, delivery: false },
    ];

    // Filter Logic
    const filteredArticles = useMemo(() => {
        let list = [featuredArticle, ...articlesList];
        if (selectedCategory !== 'all') {
            list = list.filter(a => a.category === selectedCategory);
        }
        if (searchTerm) {
            list = list.filter(a =>
                a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                a.desc.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return list;
    }, [searchTerm, selectedCategory]);

    const filteredGlossary = useMemo(() => {
        if (!searchTerm) return glossaryData;
        const lowSearch = searchTerm.toLowerCase();
        return glossaryData.map(section => ({
            ...section,
            terms: section.terms.filter(t => t.t.toLowerCase().includes(lowSearch) || t.d.toLowerCase().includes(lowSearch))
        })).filter(section => section.terms.length > 0);
    }, [searchTerm]);

    const filteredIncoterms = useMemo(() => {
        if (!searchTerm) return incotermsMatrix;
        return incotermsMatrix.filter(i =>
            i.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            i.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <main className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a1dc84]/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
                </div>

                <div className="relative z-20 mx-auto w-full max-w-6xl px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-[10px] font-black capitalize tracking-[0.4em] text-[#a1dc84] backdrop-blur-md mb-8">
                                <span className="material-symbols-outlined !text-sm">auto_awesome</span>
                                Knowledge Engine
                            </div>
                            <h1 className="text-5xl lg:text-8xl font-black leading-[1] tracking-tighter capitalize text-white mb-10 font-primary">
                                Trade <br />
                                <span className="text-[#a1dc84]">Intelligence.</span>
                            </h1>

                            <p className="text-lg font-medium leading-relaxed text-slate-300 font-secondary max-w-lg border-l-4 border-[#a1dc84] pl-8 mb-12">
                                Access a high-fidelity intelligence repository covering global trade protocols, customs mastery, and West African logistics telemetry.
                            </p>

                            <div className="relative group max-w-2xl">
                                <div className="absolute inset-0 bg-[#a1dc84]/20 blur-3xl group-focus-within:bg-[#a1dc84]/30 transition-all opacity-0 group-focus-within:opacity-100"></div>
                                <div className="relative flex items-center bg-white/5 backdrop-blur-3xl rounded-3xl h-20 border border-white/10 px-8 shadow-2xl overflow-hidden">
                                    <span className="material-symbols-outlined text-3xl text-[#a1dc84] mr-5">search</span>
                                    <input
                                        className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-medium text-white placeholder:text-slate-500 font-secondary outline-none"
                                        placeholder="Search technical dossiers, glossary terms, or incoterms..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {searchTerm && (
                                        <button onClick={() => setSearchTerm('')} className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white transition-all">
                                            <span className="material-symbols-outlined !text-lg">close</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Navigation Sidebar */}
                    <aside className="lg:col-span-3 space-y-12">
                        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-4 border border-slate-100 dark:border-white/5 shadow-2xl">
                            <h3 className="text-[10px] font-black text-slate-400 capitalize tracking-widest mb-6 px-8 pt-6 font-primary">Navigation</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'insights', label: 'Market Insights', icon: 'auto_awesome' },
                                    { id: 'glossary', label: 'Trade Glossary', icon: 'menu_book' },
                                    { id: 'incoterms', label: 'Incoterms Hub', icon: 'grid_view' }
                                ].map(mode => (
                                    <button
                                        key={mode.id}
                                        onClick={() => { setActiveView(mode.id as any); setViewingArticle(null); }}
                                        className={`w-full flex items-center gap-5 px-8 py-4 rounded-lg text-[10px] font-black capitalize tracking-widest transition-all font-primary ${activeView === mode.id && !viewingArticle ? 'bg-[#a1dc84] text-slate-900 shadow-xl' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                    >
                                        <span className={`material-symbols-outlined !text-xl ${activeView === mode.id ? 'text-slate-900' : 'text-[#a1dc84]'}`}>{mode.icon}</span>
                                        {mode.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {activeView === 'insights' && (
                            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-4 border border-slate-100 dark:border-white/5 shadow-2xl animate-in slide-in-from-left duration-500">
                                <h3 className="text-[10px] font-black text-slate-400 capitalize tracking-widest mb-6 px-8 pt-6 font-primary">Categories</h3>
                                <div className="space-y-1">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`w-full flex items-center justify-between px-8 py-4 rounded-lg group transition-all text-left ${selectedCategory === cat.id ? 'bg-slate-50 dark:bg-white/5' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`material-symbols-outlined !text-xl ${selectedCategory === cat.id ? 'text-[#a1dc84]' : 'text-slate-300 group-hover:text-[#a1dc84]'}`}>{cat.icon}</span>
                                                <span className={`text-[10px] font-black capitalize transition-colors font-primary ${selectedCategory === cat.id ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{cat.label}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <span className="material-symbols-outlined text-9xl">gavel</span>
                            </div>
                            <h3 className="text-3xl font-black mb-6 relative z-10 leading-none capitalize tracking-tighter font-primary">NCS <br />Advisory.</h3>
                            <p className="text-slate-400 font-medium text-xs leading-relaxed mb-10 relative z-10 font-secondary">Verified customs compliance protocols 2026.</p>
                            <Link href="/resources/customs" className="w-full bg-white/5 border border-white/10 flex items-center justify-center gap-4 px-8 py-4 rounded-lg font-black text-[10px] capitalize tracking-widest hover:bg-[#a1dc84] hover:text-slate-900 transition-all font-primary">
                                Full Registry
                            </Link>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            {viewingArticle ? (
                                <motion.div key="article" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                    <button
                                        onClick={() => setViewingArticle(null)}
                                        className="inline-flex items-center gap-3 text-[11px] font-black text-slate-900 dark:text-white capitalize tracking-widest hover:gap-5 transition-all mb-8"
                                    >
                                        <span className="material-symbols-outlined !text-xl text-[#a1dc84]">west</span> Back to Intelligence Feed
                                    </button>

                                    <div className="bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl">
                                        <div className="h-[400px] relative">
                                            <img src={viewingArticle.image || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'} className="size-full object-cover" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                            <div className="absolute bottom-12 left-12 right-12">
                                                <span className="px-6 py-2 bg-[#a1dc84] text-slate-900 rounded-full text-[10px] font-black capitalize tracking-widest mb-6 inline-block">{viewingArticle.category}</span>
                                                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter capitalize leading-tight">{viewingArticle.title}</h2>
                                            </div>
                                        </div>
                                        <div className="p-16 lg:p-24 space-y-10">
                                            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-50 dark:border-white/5 text-[11px] font-black capitalize tracking-widest text-[#a1dc84]">
                                                <div className="flex items-center gap-3"><span className="material-symbols-outlined">calendar_today</span> {viewingArticle.date}</div>
                                                <div className="flex items-center gap-3"><span className="material-symbols-outlined">schedule</span> {viewingArticle.time || viewingArticle.readTime}</div>
                                                <div className="flex items-center gap-3"><span className="material-symbols-outlined">person</span> {viewingArticle.author || 'Mubraiz Strategic Intel'}</div>
                                            </div>
                                            <div className="text-lg lg:text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed font-secondary space-y-6 whitespace-pre-line">
                                                {viewingArticle.content || viewingArticle.desc}
                                                <p>Furthermore, our regional staging hubs in Port Harcourt and Kano are now equipped with pre-clearance scanning arrays, ensuring that cargo once unloaded is ready for final-mile haulage within 4 business hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : activeView === 'insights' ? (
                                <motion.div key="insights" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-16">
                                    {filteredArticles.length > 0 ? (
                                        <>
                                            {filteredArticles.map((art, i) => (
                                                <article
                                                    key={art.id}
                                                    onClick={() => setViewingArticle(art)}
                                                    className={`group cursor-pointer bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col ${i === 0 && !searchTerm && selectedCategory === 'all' ? 'lg:flex-row' : ''}`}
                                                >
                                                    {i === 0 && !searchTerm && selectedCategory === 'all' && (
                                                        <div className="lg:w-2/5 relative h-[300px] lg:h-auto overflow-hidden">
                                                            <img src={art.image} className="size-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="" />
                                                            <div className="absolute top-8 left-8">
                                                                <span className="bg-[#a1dc84] text-slate-900 px-6 py-2 rounded-full text-[10px] font-black capitalize tracking-widest shadow-2xl animate-pulse">Featured Dossier</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className={`p-16 flex-1 flex flex-col justify-between ${i === 0 && !searchTerm && selectedCategory === 'all' ? 'lg:p-20' : ''}`}>
                                                        <div>
                                                            <div className="flex items-center gap-4 text-[10px] font-black text-[#a1dc84] capitalize tracking-widest mb-6">
                                                                <span className="material-symbols-outlined !text-xl">{art.icon}</span>
                                                                <span>{art.category}</span>
                                                                <span className="opacity-30">•</span>
                                                                <span>{art.readTime || art.time}</span>
                                                            </div>
                                                            <h3 className={`font-black text-slate-900 dark:text-white capitalize tracking-tighter leading-tight group-hover:text-[#a1dc84] transition-colors mb-6 font-primary ${i === 0 && !searchTerm && selectedCategory === 'all' ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'}`}>
                                                                {art.title}
                                                            </h3>
                                                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 line-clamp-3 font-secondary text-base lg:text-lg">
                                                                {art.desc}
                                                            </p>
                                                        </div>
                                                        <div className="pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                                                            <span className="text-[10px] font-black text-slate-400 capitalize tracking-widest">Released: {art.date}</span>
                                                            <span className="material-symbols-outlined text-[#a1dc84] group-hover:translate-x-3 transition-transform">east</span>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="h-[400px] flex flex-col items-center justify-center text-slate-400">
                                            <span className="material-symbols-outlined !text-6xl mb-4 opacity-20">inventory_2</span>
                                            <p className="text-xs font-black capitalize tracking-widest">No matching dossiers found</p>
                                        </div>
                                    )}
                                </motion.div>
                            ) : activeView === 'glossary' ? (
                                <motion.div key="glossary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                                    <div className="bg-white dark:bg-slate-900 rounded-[4rem] p-12 lg:p-16 border border-slate-100 dark:border-white/5 shadow-2xl">
                                        <div className="flex items-center gap-3 mb-16 overflow-x-auto pb-6 scrollbar-hide">
                                            <button
                                                onClick={() => setSelectedLetter(null)}
                                                className={`px-8 py-3 rounded-2xl font-black text-[10px] capitalize shadow-xl transition-all font-primary ${!selectedLetter ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/30' : 'bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-slate-900'}`}
                                            >Full System</button>
                                            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
                                                <button
                                                    key={l}
                                                    onClick={() => setSelectedLetter(l)}
                                                    className={`size-12 rounded-2xl font-black text-[10px] hover:text-[#a1dc84] flex items-center justify-center transition-all border border-transparent shadow-sm font-primary ${selectedLetter === l ? 'bg-[#a1dc84] text-slate-900' : 'bg-slate-50 dark:bg-white/5 text-slate-400 hover:bg-white dark:hover:bg-slate-800'}`}
                                                >{l}</button>
                                            ))}
                                        </div>

                                        <div className="space-y-24">
                                            {filteredGlossary.filter(s => !selectedLetter || s.letter === selectedLetter).map((sec) => (
                                                <section key={sec.letter} className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
                                                    <div className="flex items-center gap-10">
                                                        <h3 className="text-6xl lg:text-9xl font-black text-[#a1dc84]/15 font-primary pointer-events-none">{sec.letter}</h3>
                                                        <div className="h-0.5 flex-grow bg-slate-50 dark:bg-white/5" />
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                                        {sec.terms.map((term, i) => (
                                                            <div key={i} className={`p-10 lg:p-12 rounded-[3.5rem] bg-slate-50 dark:bg-white/5 border-l-8 transition-all hover:bg-white dark:hover:bg-slate-800 shadow-xl group ${term.crucial ? 'border-[#a1dc84]' : 'border-slate-200 dark:border-white/5'}`}>
                                                                <div className="flex justify-between items-start mb-6">
                                                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white capitalize tracking-tighter font-primary group-hover:text-[#a1dc84] transition-colors">{term.t}</h4>
                                                                    {term.crucial && <span className="material-symbols-outlined text-[#a1dc84] !text-xl">verified</span>}
                                                                </div>
                                                                <p className="text-base lg:text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed font-secondary">{term.d}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>
                                            ))}
                                            {filteredGlossary.length === 0 && (
                                                <div className="py-20 text-center">
                                                    <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">search_off</span>
                                                    <p className="text-xs font-black capitalize text-slate-400 tracking-widest">No definitions found for "{searchTerm}"</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="incoterms" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-10">
                                    <div className="bg-white dark:bg-slate-900 rounded-[4rem] p-12 lg:p-16 border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden">
                                        <div className="mb-16">
                                            <span className="text-[#a1dc84] text-[10px] font-black capitalize tracking-[0.4em] mb-6 block font-primary animate-pulse">Incoterms v2020 Matrix</span>
                                            <h3 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white capitalize tracking-tighter leading-[0.9] mb-10 font-primary">Responsibility <br /><span className="text-[#a1dc84]">Protocols.</span></h3>
                                            <p className="text-slate-500 font-medium text-lg lg:text-xl max-w-2xl font-secondary">A unified technical surface for commercial risk allocation and logistical duty mapping.</p>
                                        </div>

                                        <div className="overflow-x-auto rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-3xl">
                                            <table className="w-full text-left min-w-[1000px]">
                                                <thead className="bg-[#a1dc84] text-slate-900">
                                                    <tr className="text-[10px] font-black capitalize tracking-[0.2em] font-primary">
                                                        <th className="px-10 py-10">Identifier</th>
                                                        <th className="px-8 py-10">Description</th>
                                                        <th className="px-6 py-10 text-center">Packaging</th>
                                                        <th className="px-6 py-10 text-center">Freight</th>
                                                        <th className="px-6 py-10 text-center">Insurance</th>
                                                        <th className="px-6 py-10 text-center">Import Duty</th>
                                                        <th className="px-6 py-10 text-center">Final Deli.</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                                    {filteredIncoterms.map((row, i) => (
                                                        <tr key={i} className="group/row hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors">
                                                            <td className="px-10 py-10">
                                                                <span className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white group-hover/row:text-[#a1dc84] transition-colors font-primary">{row.term}</span>
                                                            </td>
                                                            <td className="px-8 py-10 text-xs font-black capitalize tracking-widest text-slate-500 dark:text-slate-400 group-hover/row:text-slate-900 dark:group-hover/row:text-white transition-colors">
                                                                {row.name}
                                                            </td>
                                                            {[row.origin, row.freight, row.insurance, row.import, row.delivery].map((val, idx) => (
                                                                <td key={idx} className="px-6 py-10 text-center">
                                                                    <div className={`size-10 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 ${val ? 'bg-[#a1dc84] text-slate-900 shadow-xl shadow-[#a1dc84]/20' : 'bg-slate-50 dark:bg-white/5 text-transparent border border-slate-100 dark:border-white/5'}`}>
                                                                        <span className="material-symbols-outlined !text-xl">check</span>
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
