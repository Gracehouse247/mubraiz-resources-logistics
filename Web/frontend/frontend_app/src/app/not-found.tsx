"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="bg-[#f6f8f6] dark:bg-[#102210] min-h-screen flex flex-col font-sans">
            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="max-w-4xl w-full">
                    {/* Visual 404 Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-64 md:h-96 w-full rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5 mb-16"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                            alt="Logistics shipment detour"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#f6f8f6] dark:from-[#102210] via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-[120px] md:text-[200px] font-black text-slate-900/10 dark:text-white/10 select-none tracking-tighter">404</h2>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                            Route <span className="text-[#a1dc84]">Not Found</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            It looks like this shipment took a wrong turn. Let's get you back on the right track. The resource you are looking for might have been relocated or no longer exists.
                        </p>

                        {/* Action Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                            <Link href="/">
                                <motion.button
                                    whileHover={{ y: -5 }}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#a1dc84] text-slate-900 font-black text-sm uppercase tracking-widest shadow-xl shadow-[#a1dc84]/20 hover:bg-[#8bc76d] transition-all"
                                >
                                    <span className="material-symbols-outlined">home</span>
                                    Return Home
                                </motion.button>
                            </Link>
                            <Link href="/portal/tracking">
                                <motion.button
                                    whileHover={{ y: -5 }}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white dark:bg-white/5 text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest border border-slate-200 dark:border-white/10 shadow-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                                >
                                    <span className="material-symbols-outlined">location_on</span>
                                    Track Shipment
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ y: -5 }}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white dark:bg-white/5 text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest border border-slate-200 dark:border-white/10 shadow-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                                >
                                    <span className="material-symbols-outlined">support_agent</span>
                                    Ask Support
                                </motion.button>
                            </Link>
                        </div>

                        {/* Search Focus */}
                        <div className="max-w-xl mx-auto pt-16">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#a1dc84]/10 blur-2xl group-focus-within:bg-[#a1dc84]/20 transition-all opacity-100"></div>
                                <div className="relative flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl h-16 px-6">
                                    <span className="material-symbols-outlined text-slate-400 mr-4">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search for pages, services, or shipment IDs..."
                                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-slate-400"
                                    />
                                </div>
                            </div>
                            <p className="mt-6 text-xs font-black text-slate-400 uppercase tracking-widest">
                                Need technical help? Visit our <Link href="/resources/help" className="text-[#a1dc84] hover:underline">Help Center</Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="py-10 border-t border-slate-100 dark:border-white/5 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} Mubraiz Resources Ltd. Operational Resilience Hub.
                </p>
            </footer>
        </div>
    );
}

