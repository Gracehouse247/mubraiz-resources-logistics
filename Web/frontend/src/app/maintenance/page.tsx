"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Maintenance() {
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 45, s: 22 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#f6f8f6] dark:bg-[#102210] min-h-screen flex flex-col font-sans overflow-hidden">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Header Overlay */}
            <header className="relative z-10 w-full flex items-center justify-between px-10 py-8">
                <div className="flex items-center gap-3">
                    <img
                        src="/images/mubraiz-logo.svg"
                        alt="Mubraiz Resources Limited"
                        className="h-10 w-auto object-contain"
                    />
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/status" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#a1dc84] transition-colors">Infrastructure Health</Link>
                    <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#a1dc84] transition-colors">Emergency Support</Link>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-[720px] w-full bg-white dark:bg-white/5 backdrop-blur-3xl p-12 md:p-20 rounded-[48px] shadow-2xl border border-slate-100 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden"
                >
                    {/* Animated Decorative Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#a1dc84]/20 rounded-full blur-xl"></div>

                    {/* Safety Icon */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="mb-10 p-6 rounded-[32px] bg-amber-100 dark:bg-amber-400/10 text-amber-500 shadow-xl shadow-amber-500/10"
                    >
                        <span className="material-symbols-outlined !text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                        Optimizing the <span className="text-[#a1dc84]">Ecosystem</span>
                    </h1>

                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12 font-secondary border-l-4 border-[#a1dc84] pl-8 max-w-lg">
                        Our cloud architects are currently upgrading the <strong>'Control Tower'</strong> core to enhance global logistics throughput and predictive capacity routing.
                    </p>

                    {/* Progress Monitor */}
                    <div className="w-full space-y-4 mb-16">
                        <div className="flex justify-between items-end px-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Syncing Nodes...</span>
                            <span className="text-2xl font-black text-[#a1dc84]">75%</span>
                        </div>
                        <div className="h-4 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-1 shadow-inner">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                className="h-full bg-[#a1dc84] rounded-full shadow-lg shadow-[#a1dc84]/20"
                            />
                        </div>
                        <p className="text-xs font-bold text-slate-400">Stage: Global Database Propagation & Resource Scaling</p>
                    </div>

                    {/* Precision Countdown */}
                    <div className="grid grid-cols-3 gap-8 mb-16 px-12 py-8 bg-slate-50 dark:bg-black/20 rounded-[32px] border border-slate-100 dark:border-white/5">
                        {[
                            { value: timeLeft.h, label: "Hours" },
                            { value: timeLeft.m, label: "Minutes" },
                            { value: timeLeft.s, label: "Seconds" }
                        ].map((time, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">{time.value.toString().padStart(2, '0')}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{time.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive CTA */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-black/10 dark:shadow-[#a1dc84]/10"
                    >
                        <span className="material-symbols-outlined !text-xl">notifications_active</span>
                        Notify Deployment Complete
                    </motion.button>
                </motion.div>
            </main>

            {/* Emergency Support Context */}
            <footer className="relative z-10 w-full py-12 px-10 flex flex-col md:flex-row justify-between items-center bg-white/50 dark:bg-transparent border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Logistics Mission Critical?</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">
                        <span className="text-[#a1dc84] mr-2">Emergency Hub:</span>
                        <a href="tel:+2348134822126" className="hover:underline">+(234) 0813 482 2126</a>
                    </p>
                </div>
                <div className="flex gap-8 mt-8 md:mt-0 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Link href="/legal/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Legal Terms</Link>
                    <Link href="/status" className="hover:text-slate-900 dark:hover:text-white transition-colors">Infrastructure</Link>
                    <p>© {new Date().getFullYear()} Resilience Hub v4.2.0</p>
                </div>
            </footer>

            {/* Float Decoration */}
            <div className="absolute -bottom-20 -right-20 size-[500px] bg-[#a1dc84]/5 blur-[120px] rounded-full"></div>
            <div className="absolute -top-20 -left-20 size-[500px] bg-[#a1dc84]/5 blur-[120px] rounded-full"></div>
        </div>
    );
}

