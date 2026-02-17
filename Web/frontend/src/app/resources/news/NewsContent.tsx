"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

export default function NewsContent() {
    const { data: newsData, isLoading } = useQuery({
        queryKey: ['news-posts'],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/posts`);
            if (!res.ok) throw new Error('Failed to fetch intelligence feed');
            return res.json();
        }
    });

    const news: any[] = newsData?.posts || [];

    if (isLoading) {
        return (
            <div className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen pt-32 flex items-center justify-center">
                <p className="text-[10px] font-black text-[#a1dc84] capitalize tracking-[0.5em] animate-pulse">Synchronizing Intelligence Hub...</p>
            </div>
        );
    }

    return (
        <div className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 space-y-20">
                {/* Tactical Hero */}
                <div className="relative rounded-[3rem] bg-slate-900 p-16 md:p-24 overflow-hidden border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="relative z-10 max-w-2xl">
                        <span className="text-[#a1dc84] text-[10px] font-black capitalize tracking-[0.4em] mb-4 block">Strategic Intel Feed</span>
                        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter capitalize italic leading-[0.9]">Mubraiz <br /> <span className="text-[#a1dc84]">Chronicle.</span></h1>
                        <p className="text-slate-400 text-lg font-medium mt-8 leading-relaxed font-secondary border-l-4 border-[#a1dc84] pl-8 max-w-lg">Official updates on global logistics advancements, nodal expansions, and technical breakthroughs.</p>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {news.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#a1dc84]/30 transition-all group cursor-pointer"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-[#a1dc84] text-slate-900 px-4 py-1.5 rounded-full text-[9px] font-black capitalize tracking-widest">{item.category}</span>
                                </div>
                            </div>
                            <div className="p-10 space-y-6">
                                <p className="text-[10px] font-black text-slate-400 capitalize tracking-widest">{item.date}</p>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight italic capitalize group-hover:text-[#a1dc84] transition-colors">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed line-clamp-3">{item.excerpt}</p>
                                <div className="pt-6 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[9px] font-black text-slate-900 dark:text-white capitalize tracking-widest group-hover:translate-x-2 transition-transform">Read Mission Intel</span>
                                    <span className="material-symbols-outlined text-[#a1dc84]">arrow_forward</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
