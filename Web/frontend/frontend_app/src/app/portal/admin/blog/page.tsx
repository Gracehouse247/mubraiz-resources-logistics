"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function BlogEngine() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Strategic Growth');
    const [image, setImage] = useState('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop');
    const [seoScore, setSeoScore] = useState(0);
    const [isPublished, setIsPublished] = useState(true);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (newPost: any) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            });
            if (!res.ok) throw new Error('Failed to transmit intel to grid');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['news-posts'] });
            alert("INTEL TRANSMITTED: Post is now live on the Public Grid.");
            setTitle('');
            setContent('');
        }
    });

    const handlePublish = () => {
        if (!title || !content) return alert("CRITICAL ERROR: Mission data incomplete.");

        mutation.mutate({
            title,
            content,
            excerpt: content.substring(0, 150) + '...',
            category,
            image,
            isPublished
        });
    };

    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-[1600px] mx-auto">
            {/* Header Content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Content Engine Terminal</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">SEO Blog & Strategic News Release Hub</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-14 px-8 bg-slate-100 dark:bg-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-all border border-slate-100 dark:border-white/5">Save Draft</button>
                    <button
                        onClick={handlePublish}
                        disabled={mutation.isPending}
                        className="h-14 px-10 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 border border-[#a1dc84]/20 disabled:opacity-50"
                    >
                        {mutation.isPending ? 'TRANSMITTING...' : 'Publish To Grid'}
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Editor Surface */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden min-h-[700px]">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-transparent border-none text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic outline-none placeholder:text-slate-200 mb-10"
                            placeholder="TRANS-AFRICAN MISSION TITLE..."
                        />

                        <div className="flex gap-4 border-b border-slate-50 dark:border-white/5 pb-6 mb-10">
                            {['format_bold', 'format_italic', 'link', 'image', 'list_bulleted', 'code'].map(tool => (
                                <button key={tool} className="size-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#a1dc84] hover:text-slate-900 transition-all">
                                    <span className="material-symbols-outlined !text-xl">{tool}</span>
                                </button>
                            ))}
                        </div>

                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full flex-1 bg-transparent border-none text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 outline-none resize-none placeholder:text-slate-100 h-[400px]"
                            placeholder="COMMENCE INTEL TRANSMISSION HERE..."
                        />
                    </div>
                </div>

                {/* SEO Intelligence Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* RankMath-style SEO Score */}
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">SEO Grid Analysis</h3>
                            <div className={`size-16 rounded-full border-4 ${seoScore > 80 ? 'border-[#a1dc84]' : 'border-amber-500'} flex items-center justify-center`}>
                                <span className={`text-xl font-black italic ${seoScore > 80 ? 'text-[#a1dc84]' : 'text-amber-500'}`}>{seoScore}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { l: 'Focus Keyword in Title', s: true },
                                { l: 'Meta Description Optimal', s: true },
                                { l: 'Keyword Density (0.8%)', s: true },
                                { l: 'Internal Grid Links Found', s: false },
                                { l: 'Technical Readability Grade', s: true }
                            ].map((check, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className={`material-symbols-outlined !text-xl ${check.s ? 'text-[#a1dc84]' : 'text-slate-300'}`}>
                                        {check.s ? 'check_circle' : 'circle'}
                                    </span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{check.l}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meta Snapshot Preview */}
                    <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
                        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">SERP GRID PREVIEW</h4>
                        <div className="space-y-4">
                            <p className="text-[#8ab4f8] text-lg font-bold hover:underline cursor-pointer leading-tight mb-1">{title}</p>
                            <p className="text-[#bdc1c6] text-[11px] leading-relaxed line-clamp-2">Exploring the strategic evolution of trans-African corridors and how Mubraiz Resources is establishing the grid for 2024 logistics...</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-black text-slate-500 uppercase">Featured</span>
                                <span className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-black text-slate-500 uppercase">Logistics</span>
                            </div>
                        </div>
                    </div>

                    {/* Meta Editor Node */}
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl">
                        <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8 italic text-center">Protocol Metatags</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Custom OG Title</label>
                                <input className="w-full h-12 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 px-4 text-xs font-bold text-slate-900 dark:text-white outline-none focus:border-[#a1dc84] transition-all" defaultValue={title} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Canonical Endpoint</label>
                                <input className="w-full h-12 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 px-4 text-xs font-bold text-slate-900 dark:text-white outline-none focus:border-[#a1dc84] transition-all" defaultValue="https://mubraiz.com/grid/logistics-2024" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
