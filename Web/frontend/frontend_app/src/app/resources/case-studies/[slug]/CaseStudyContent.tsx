"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyContentProps {
    study: CaseStudy;
    allStudies: CaseStudy[];
}

export default function CaseStudyContent({ study, allStudies }: CaseStudyContentProps) {
    const router = useRouter();
    const nextStudy = allStudies.find(s => s.slug !== study.slug) || allStudies[0];

    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0a0f0a] pt-24 font-display transition-colors duration-500">
            {/* Immersive Header */}
            <section className="relative h-[700px] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/60 to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto w-full px-6 pb-24">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Link href="/resources/case-studies" className="inline-flex items-center gap-3 text-[#37ec13] font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:gap-6 transition-all group">
                            <span className="material-symbols-outlined !text-sm">west</span>
                            Operational Archive
                        </Link>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <span className="bg-[#37ec13] text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">{study.category}</span>
                            <span className="bg-white/10 backdrop-blur-xl text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">{study.region}</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">
                            {study.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? 'text-[#37ec13]' : ''}>{word} </span>
                            ))}
                        </h1>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#37ec13] mb-3">Project Scope</p>
                                <p className="text-xl font-black text-white">{study.duration}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#37ec13] mb-3">Vertical</p>
                                <p className="text-xl font-black text-white">{study.clientType}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#37ec13] mb-3">Core Impact</p>
                                <p className="text-xl font-black text-[#37ec13]">{study.impact}</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#37ec13] mb-3">Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-[#37ec13] animate-pulse"></span>
                                    <p className="text-xl font-black text-white uppercase">Active</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Strategy Narrative */}
                    <article className="lg:col-span-8 space-y-24">
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">01 Executive Briefing</h2>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                                {study.challenge}
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-white/5 relative overflow-hidden group">
                                <span className="material-symbols-outlined text-4xl text-red-500/20 mb-8 block font-black">warning</span>
                                <h3 className="text-2xl font-black mb-6">The Hurdles</h3>
                                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">Fragmented visibility and aging infrastructure created a critical bottleneck for regional operations.</p>
                                <div className="space-y-4">
                                    {study.outcomes.slice(0, 2).map((o, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="size-1.5 rounded-full bg-red-400"></span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{o.label} Pain Points</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-[3s]">
                                    <span className="material-symbols-outlined !text-9xl">crisis_alert</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                                <span className="material-symbols-outlined text-4xl text-[#37ec13] mb-8 block font-black">bolt</span>
                                <h3 className="text-2xl font-black text-white mb-6">The Maneuver</h3>
                                <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8">{study.solution}</p>
                                <button className="text-[9px] font-black uppercase tracking-widest text-[#37ec13] flex items-center gap-2 hover:gap-4 transition-all">
                                    Technical Breakdown <span className="material-symbols-outlined !text-sm">east</span>
                                </button>
                                <div className="absolute -right-8 -bottom-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-[3s]">
                                    <span className="material-symbols-outlined !text-9xl">account_tree</span>
                                </div>
                            </div>
                        </div>

                        <section className="space-y-12">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">02 Tactical Execution</h2>
                            <p className="text-xl font-medium text-slate-500 leading-relaxed">
                                {study.implementation}
                            </p>
                            <div className="rounded-[4rem] overflow-hidden shadow-soft border border-slate-100 dark:border-white/5 group">
                                <img src={study.accentImage || study.image} alt="Process visual" className="w-full h-[500px] object-cover transition-transform duration-[5s] group-hover:scale-110" />
                            </div>
                        </section>
                    </article>

                    {/* Operational Telemetry (Sidebar) */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-32 space-y-12">
                            <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#37ec1311,transparent)]"></div>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#37ec13] mb-12">Performance Telemetry</h3>
                                <div className="space-y-12 relative z-10">
                                    {study.outcomes.map((outcome, idx) => (
                                        <div key={idx} className="group/item">
                                            <div className="text-6xl font-black text-white mb-3 tracking-tighter group-hover/item:text-[#37ec13] transition-colors">{outcome.value}</div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{outcome.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-16 pt-12 border-t border-white/5">
                                    <button className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">Download Full Audit</button>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-12 shadow-xl border border-slate-100 dark:border-white/5 text-center relative overflow-hidden group">
                                <div className="size-20 bg-slate-50 dark:bg-white/5 rounded-full mx-auto mb-8 border border-slate-100 dark:border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-slate-300">chat_bubble</span>
                                </div>
                                <p className="text-slate-900 dark:text-white font-bold text-xl mb-6 leading-snug">"{study.testimonial.text}"</p>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase mb-1">{study.testimonial.author}</p>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{study.testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Success Continuity */}
            <section className="bg-slate-50 dark:bg-white/[0.02] py-40 border-t border-slate-100 dark:border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-[#37ec13] text-[10px] font-black uppercase tracking-[0.4em] mb-8">Next Success Vector</p>
                    <Link href={`/resources/case-studies/${nextStudy.slug}`} className="group">
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-16 hover:text-[#37ec13] transition-colors leading-[0.9] tracking-tighter">
                            {nextStudy.title}
                        </h2>
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-2xl">
                            <span className="material-symbols-outlined !text-3xl font-black">east</span>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
