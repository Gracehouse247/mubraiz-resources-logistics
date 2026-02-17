"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SignIn } from "@clerk/nextjs";

const GridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #a1dc84 1px, transparent 1px), linear-gradient(to bottom, #a1dc84 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}></div>
    </div>
);

const FloatingNodes = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute size-1 rounded-full bg-[#a1dc84]/30"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0
                    }}
                    animate={{
                        y: [null, "-20%", "120%"],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default function ExecutiveLogin() {
    const [status, setStatus] = useState("CORE_READY");

    useEffect(() => {
        const intervals = ["SYNCING...", "VERIFYING...", "CORE_READY", "NODE_ACTIVE"];
        let i = 0;
        const interval = setInterval(() => {
            setStatus(intervals[i % intervals.length]);
            i++;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#f8fafc] dark:bg-[#050a05] font-sans text-[#0e1b12] dark:text-white antialiased overflow-hidden">
            <div className="flex min-h-screen w-full relative">
                {/* Sidebar Illustration Section */}
                <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-[#0a140a]">
                    <motion.div
                        className="absolute inset-0 z-0"
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 1, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a140a] via-[#0a140a]/85 to-transparent"></div>
                    </motion.div>

                    {/* Sidebar Content */}
                    <div className="relative z-20 flex flex-col justify-between p-16 xl:p-20 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link href="/" className="flex items-center gap-4 group">
                                <div className="size-14 bg-[#a1dc84] rounded-2xl flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(161,220,132,0.3)] group-hover:rotate-6 transition-all duration-500">
                                    <span className="material-symbols-outlined !text-3xl">hub</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none">Mubraiz</span>
                                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] mt-1">Resources Ltd.</span>
                                </div>
                            </Link>
                        </motion.div>

                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-[1px] w-12 bg-[#a1dc84]"></span>
                                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em]">{status}</span>
                                </div>
                                <h1 className="text-white text-5xl xl:text-7xl font-black leading-[0.95] tracking-tighter mb-8 uppercase">
                                    Executive <br />
                                    <span className="text-[#a1dc84] relative">
                                        Command
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-1 bg-[#a1dc84]/20 w-full"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 1, duration: 1 }}
                                        ></motion.span>
                                    </span>
                                </h1>
                                <p className="text-slate-400 text-base xl:text-lg font-medium leading-relaxed max-w-sm border-l-2 border-[#a1dc84]/50 pl-6 mb-12">
                                    Orchestrating complex logistics ecosystems with real-time intelligence and unbreakable integrity.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:border-[#a1dc84]/30 transition-all">
                                    <div className="text-[#a1dc84] mb-2"><span className="material-symbols-outlined !text-xl">security</span></div>
                                    <div className="text-[10px] text-white font-black uppercase tracking-widest">End-to-End</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-1">256-bit Encryption</div>
                                </div>
                                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:border-[#a1dc84]/30 transition-all">
                                    <div className="text-[#a1dc84] mb-2"><span className="material-symbols-outlined !text-xl">monitoring</span></div>
                                    <div className="text-[10px] text-white font-black uppercase tracking-widest">Live Matrix</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-1">Real-time Sync</div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex items-center justify-between py-6 px-8 border-t border-white/10 bg-[#0a140a]/50 backdrop-blur-xl">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="size-10 rounded-full border-2 border-[#0a140a] bg-slate-800 overflow-hidden ring-1 ring-white/10">
                                        <img src={`https://i.pravatar.cc/100?u=admin${i}`} alt="Admin" className="w-full h-full object-cover grayscale brightness-110" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-right">
                                <p className="text-white text-[10px] font-black uppercase tracking-widest">Active Controllers</p>
                                <p className="text-[9px] text-[#a1dc84] font-bold uppercase flex items-center justify-end gap-1">
                                    <span className="size-1.5 rounded-full bg-[#a1dc84] animate-pulse"></span> 14 Online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Form Section */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center items-center px-6 py-20 bg-white dark:bg-[#050a05] relative z-10">
                    <GridBackground />
                    <FloatingNodes />

                    {/* Decorative blobs */}
                    <div className="absolute top-1/4 -right-20 size-[500px] bg-[#a1dc84]/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 -left-20 size-[500px] bg-sky-500/5 blur-[120px] rounded-full"></div>

                    <div className="w-full max-w-md relative z-20 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="w-full"
                        >
                            <SignIn
                                appearance={{
                                    elements: {
                                        rootBox: "w-full",
                                        card: "w-full bg-white dark:bg-[#0a0f0a]/90 backdrop-blur-2xl border border-slate-200 dark:border-[#a1dc84]/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] rounded-[2.5rem] p-10 relative overflow-hidden",
                                        headerTitle: "text-slate-900 dark:text-white text-3xl font-black uppercase tracking-tighter",
                                        headerSubtitle: "text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-2",
                                        formButtonPrimary: "bg-[#a1dc84] hover:bg-[#8bc76d] text-slate-900 font-black uppercase tracking-[0.2em] h-14 rounded-xl shadow-xl shadow-[#a1dc84]/20 transition-all border-none mt-4 hover:-translate-y-0.5 active:translate-y-0",
                                        formFieldLabel: "text-slate-600 dark:text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 px-2",
                                        formFieldInput: "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 h-14 px-6 rounded-xl text-slate-900 dark:text-white font-bold transition-all",
                                        footerActionText: "text-slate-400 font-bold text-xs",
                                        footerActionLink: "text-[#a1dc84] hover:text-[#8bc76d] font-black uppercase tracking-widest text-[10px] transition-colors",
                                        identityPreviewText: "text-slate-900 dark:text-white font-bold",
                                        identityPreviewEditButtonIcon: "text-[#a1dc84]",
                                        dividerLine: "bg-slate-100 dark:bg-white/10",
                                        dividerText: "text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]",
                                        socialButtonsBlockButton: "border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 h-14 rounded-xl transition-all",
                                        socialButtonsBlockButtonText: "text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-[10px]",
                                        formFieldErrorText: "text-red-500 font-black text-[10px] uppercase tracking-widest mt-2",
                                        alert: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20 rounded-2xl flex p-4",
                                        alertText: "text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-widest",
                                    }
                                }}
                                signUpUrl="/auth/register"
                            />

                            <div className="mt-12 flex flex-col items-center gap-6">
                                <div className="flex gap-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                                    <Link href="#" className="hover:text-[#a1dc84] transition-colors">Security Audit</Link>
                                    <Link href="#" className="hover:text-[#a1dc84] transition-colors">Privacy Node</Link>
                                    <Link href="#" className="hover:text-[#a1dc84] transition-colors">Grid Terms</Link>
                                </div>
                                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.5em] flex items-center gap-2">
                                    <span className="material-symbols-outlined !text-[10px]">copyright</span>
                                    2024 Mubraiz Operating System v4.1.0
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
