"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuickQuote() {
    return (
        <aside className="relative">
            <div className="sticky top-28 flex flex-col w-full max-w-[360px] mx-auto lg:mx-0">
                {/* Quick Quote Widget */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 dark:border-slate-800 overflow-hidden"
                >
                    {/* Widget Header */}
                    <div className="px-6 py-5 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white">Quick Quote</h3>
                            <p className="text-[10px] text-[#a1dc84] uppercase tracking-widest font-black">Global Logistics</p>
                        </div>
                        <div className="text-[#a1dc84] bg-[#a1dc84]/10 p-2 rounded-xl">
                            <span className="material-symbols-outlined !text-[24px]">rocket_launch</span>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="p-6 space-y-5">
                        {/* Origin Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 ml-1">Origin</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#a1dc84] transition-colors text-lg">location_on</span>
                                <input
                                    className="w-full h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-black/20 focus:ring-2 focus:ring-[#a1dc84]/20 focus:border-[#a1dc84] pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                    placeholder="City or Port"
                                />
                            </div>
                        </div>

                        {/* Destination Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 ml-1">Destination</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#a1dc84] transition-colors text-lg">explore</span>
                                <input
                                    className="w-full h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-black/20 focus:ring-2 focus:ring-[#a1dc84]/20 focus:border-[#a1dc84] pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                    placeholder="Delivery Location"
                                />
                            </div>
                        </div>

                        {/* Weight Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 ml-1">Estimated Weight (kg)</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#a1dc84] transition-colors text-lg">weight</span>
                                <input
                                    className="w-full h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-black/20 focus:ring-2 focus:ring-[#a1dc84]/20 focus:border-[#a1dc84] pl-11 pr-4 text-sm font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                    placeholder="e.g. 500"
                                />
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#a1dc84] hover:bg-[#8bc76d] text-slate-900 text-sm font-black uppercase tracking-widest px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#a1dc84]/20"
                        >
                            <span>Generate Instant Rate</span>
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </motion.button>
                    </div>

                    {/* Footer Badge / Green Logistics */}
                    <div className="bg-[#a1dc84]/5 dark:bg-[#a1dc84]/10 px-6 py-4 border-t border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="text-[#a1dc84] flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shrink-0 size-8 shadow-sm">
                                <span className="material-symbols-outlined !text-lg">eco</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-slate-900 dark:text-white text-[11px] font-black leading-none mb-1">Green Logistics</p>
                                <p className="text-slate-400 text-[9px] font-bold leading-none uppercase tracking-tighter">Carbon Footprint Included</p>
                            </div>
                            <div className="ml-auto">
                                <div className="flex size-5 items-center justify-center">
                                    <div className="size-2 rounded-full bg-[#a1dc84] animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Sidebar Link */}
                <div className="mt-6 px-2">
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-4 p-5 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#a1dc84] hover:bg-[#a1dc84]/5 dark:hover:bg-[#a1dc84]/10 transition-all cursor-pointer group"
                    >
                        <div className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#a1dc84] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all">
                            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">support_agent</span>
                        </div>
                        <span className="text-xs font-black text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-wider">Talk to a Freight Expert</span>
                    </motion.div>
                </div>
            </div>
        </aside>
    );
}

