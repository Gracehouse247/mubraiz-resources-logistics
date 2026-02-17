"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesContent() {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = ['All Projects', 'Customs Clearance & Forwarding', 'Haulage', 'Warehousing', 'Supply Chain'];

    const filteredProjects = caseStudies.filter(p =>
        (activeFilter === 'All Projects' || p.category === activeFilter) &&
        (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.challenge.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0a0f0a] font-primary transition-colors duration-500">
            {/* Success Hero */}
            <section className="relative overflow-hidden bg-slate-900 border-b border-white/5 py-32">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#a1dc8422,transparent)]"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-4 rounded-full bg-[#a1dc84]/10 border border-[#a1dc84]/20 text-[#a1dc84] text-[10px] font-black capitalize tracking-[0.3em] mb-8 font-primary"
                    >
                        Client Success Stories
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 font-primary capitalize"
                    >
                        Proven <span className="text-[#a1dc84]">Excellence.</span>
                    </motion.h1>
                    <p className="text-slate-400 font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-secondary">
                        Discover how Mubraiz Resources transforms supply chains through strategic partnerships, operational excellence, and unwavering commitment to client success.
                    </p>
                </div>
            </section>

            {/* Strategy Control Strip */}
            <section className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 px-6 py-6 transition-all shadow-sm">
                <div className="mx-auto max-w-7xl flex items-center justify-between flex-wrap gap-8">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar items-center">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex h-12 shrink-0 items-center justify-center rounded-lg px-8 text-[10px] font-black capitalize tracking-widest transition-all font-primary ${activeFilter === filter
                                    ? 'bg-[#a1dc84] text-slate-900 shadow-lg shadow-[#a1dc84]/20'
                                    : 'text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-80 group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#a1dc84] transition-colors">search</span>
                        <input
                            className="w-full bg-slate-50 dark:bg-black/20 border-2 border-transparent focus:border-[#a1dc84] rounded-2xl pl-12 pr-6 h-14 outline-none text-sm font-bold transition-all dark:text-white placeholder:text-slate-400 font-secondary"
                            placeholder="Locate success story..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Performance Grid */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                                    key={project.id}
                                    className="group flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative h-80 w-full overflow-hidden">
                                        <img src={project.image} alt={`${project.title} - Logistics Success Story`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-[#a1dc84] text-slate-900 px-4 py-1.5 rounded-full text-[9px] font-black capitalize tracking-widest shadow-xl font-primary">{project.category}</span>
                                        </div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="flex gap-2">
                                                {project.stats.map((stat, i) => (
                                                    <div key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-white">
                                                        <span className="text-[10px] font-black uppercase tracking-tighter font-primary">{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter capitalize group-hover:text-[#a1dc84] transition-colors font-primary">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed mb-10 line-clamp-3 font-secondary">
                                            {project.challenge}
                                        </p>
                                        <div className="mt-auto pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 capitalize tracking-widest font-primary">{project.region}</span>
                                            <Link
                                                href={`/resources/case-studies/${project.slug}`}
                                                className="size-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all shadow-xl"
                                            >
                                                <span className="material-symbols-outlined !text-2xl">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-32">
                            <div className="size-24 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl text-slate-300">manage_search</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-400">Tactical mismatch.</h3>
                            <p className="text-slate-500 mt-2 font-medium">No case studies match your current parameters.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Strategic Call to Action */}
            <section className="bg-slate-900 py-32 px-6 overflow-hidden relative border-t border-white/5">
                <div className="max-w-[1000px] mx-auto bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 md:p-24 shadow-2xl text-center flex flex-col items-center border border-white/10 relative z-10">
                    <motion.div
                        initial={{ rotate: 10 }} whileInView={{ rotate: 0 }}
                        className="size-24 bg-[#a1dc84] rounded-[2rem] flex items-center justify-center text-slate-900 mb-10 shadow-2xl shadow-[#a1dc84]/20"
                    >
                        <span className="material-symbols-outlined text-5xl font-black">handshake</span>
                    </motion.div>
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tighter capitalize font-primary">Create Your Success Story.</h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed font-secondary">
                        Partner with our strategic team to engineer high-impact solutions for your supply chain challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                        <Link href="/contact" className="bg-[#a1dc84] text-slate-900 px-8 py-4 rounded-lg text-[10px] font-black capitalize tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#a1dc84]/30 font-primary">
                            Consult Partnership Team
                        </Link>
                        <Link href="/services" className="bg-white/10 text-white px-8 py-4 rounded-lg text-[10px] font-black capitalize tracking-widest hover:bg-white/20 transition-all border border-white/10 font-primary">
                            Service Capabilities
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
