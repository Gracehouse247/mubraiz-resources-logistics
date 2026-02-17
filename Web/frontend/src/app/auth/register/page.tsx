"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SignUp } from "@clerk/nextjs";

export default function EnterpriseRegistration() {
    return (
        <div className="flex min-h-screen bg-[#f6f8f6] dark:bg-[#0a110a] font-sans text-[#0e1b12] dark:text-white antialiased overflow-hidden">
            <div className="flex min-h-screen w-full">
                {/* Sidebar Illustration Section - The "WOW" Factor */}
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#112116]">
                    <div
                        className="absolute inset-0 z-0 scale-105 hover:scale-100 transition-transform duration-[10s]"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                    {/* Overlay Gradient for high-contrast professional feel */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#112116] via-[#112116]/90 to-transparent"></div>

                    {/* Sidebar Content */}
                    <div className="relative z-20 flex flex-col justify-between p-20 w-full h-full">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="size-12 bg-[#a1dc84] rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl shadow-[#a1dc84]/20 group-hover:rotate-12 transition-transform duration-500">
                                <span className="material-symbols-outlined !text-3xl">local_shipping</span>
                            </div>
                            <span className="text-white text-3xl font-black tracking-tighter italic uppercase">Mubraiz Resources</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="max-w-xl"
                        >
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block animate-pulse text-shadow-glow">Enterprise Enrollment Node</span>
                            <h1 className="text-white text-6xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase italic">
                                Initialize <br />
                                <span className="text-[#a1dc84]">Boarding.</span>
                            </h1>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md border-l-4 border-[#a1dc84] pl-8">
                                Connect your organization to the global supply chain grid. Secure enterprise identities for high-velocity trade orchestration.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 max-w-fit">
                                <div className="flex -space-x-3">
                                    {[7, 8, 9].map(i => (
                                        <div key={i} className="size-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=reg-${i}`} alt="Client" className="w-full h-full object-cover grayscale" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] self-center">Joining 1,200+ Active Entities</p>
                            </div>

                            <div className="p-6 bg-[#a1dc84]/10 rounded-2xl border border-[#a1dc84]/20 backdrop-blur-md max-w-sm">
                                <p className="text-[#a1dc84] text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="size-1.5 bg-[#a1dc84] rounded-full animate-ping"></span>
                                    Sync Status: Ready
                                </p>
                                <p className="text-white text-xs font-bold leading-relaxed">
                                    Main Grid: Operational | Latency: 12ms | Encryption: 256-bit AES
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industrial accents */}
                    <div className="absolute bottom-0 right-0 p-10 opacity-10 hidden xl:block">
                        <div className="text-[100px] font-black text-white leading-none tracking-tighter select-none rotate-90 origin-bottom-right">ENROLL</div>
                    </div>
                </div>

                {/* Registration Form Section - Clerk Integration */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-20 bg-[#f8fafc] dark:bg-[#0a110a] relative overflow-y-auto">
                    {/* Decorative abstract elements for premium feel */}
                    <div className="absolute top-0 right-0 size-[500px] bg-[#a1dc84]/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 size-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

                    <div className="w-full max-w-md relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full"
                        >
                            <SignUp
                                appearance={{
                                    elements: {
                                        rootBox: "w-full",
                                        card: "w-full bg-white dark:bg-[#0f1a10] border border-slate-200 dark:border-white/5 shadow-3xl rounded-[3rem] p-10",
                                        headerTitle: "text-slate-900 dark:text-white text-3xl font-black uppercase tracking-tighter italic",
                                        headerSubtitle: "text-slate-400 text-sm font-bold uppercase tracking-widest mt-2",
                                        formButtonPrimary: "bg-[#a1dc84] hover:bg-[#8bc76d] text-slate-900 font-black uppercase tracking-[0.2em] h-14 rounded-lg shadow-xl shadow-[#a1dc84]/20 transition-all border-none mt-4",
                                        formFieldLabel: "text-slate-900 dark:text-gray-300 font-black text-[10px] uppercase tracking-widest mb-2 px-2",
                                        formFieldInput: "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 h-14 px-6 rounded-lg text-slate-900 dark:text-white font-bold transition-all",
                                        footerActionText: "text-slate-400 font-bold",
                                        footerActionLink: "text-[#a1dc84] hover:text-[#8bc76d] font-black uppercase tracking-widest text-[10px]",
                                        identityPreviewText: "text-slate-900 dark:text-white font-bold",
                                        identityPreviewEditButtonIcon: "text-[#a1dc84]",
                                        dividerLine: "bg-slate-100 dark:bg-white/10",
                                        dividerText: "text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]",
                                        socialButtonsBlockButton: "border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 h-14 rounded-lg transition-all",
                                        socialButtonsBlockButtonText: "text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-[10px]",
                                        formFieldErrorText: "text-red-500 font-black text-[10px] uppercase tracking-widest mt-2",
                                        alert: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20 rounded-2xl flex p-4",
                                        alertText: "text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-widest",
                                    }
                                }}
                                signInUrl="/auth/login"
                            />

                            <div className="mt-12 flex justify-center gap-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                                <Link href="#" className="hover:text-[#a1dc84] transition-colors">Privacy Node</Link>
                                <div className="size-1 rounded-full bg-slate-200 dark:bg-white/10 self-center"></div>
                                <Link href="#" className="hover:text-[#a1dc84] transition-colors">Terms of Op</Link>
                                <div className="size-1 rounded-full bg-slate-200 dark:bg-white/10 self-center"></div>
                                <Link href="#" className="hover:text-[#a1dc84] transition-colors">Grid Support</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
