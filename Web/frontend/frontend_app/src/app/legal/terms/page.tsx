"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <div className="bg-[#f6f8f6] dark:bg-[#0a0f1a] min-h-screen font-sans text-slate-900 dark:text-white antialiased">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Grid Protocols</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-8 font-primary">Terms of Service.</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto font-secondary leading-relaxed">
                            The legal architecture governing the use of the Mubraiz Resources Global Logistics Infrastructure.
                        </p>
                    </div>

                    <div className="space-y-10 group">
                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">1. Usage Authorization</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                By accessing the Grid, you declare that you represent a valid organization with the legal capacity to engage in haulage and trade orchestration.
                                Any attempt to disrupt network telemetry or bypass administrative controls will result in node revocation.
                            </p>
                        </section>

                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">2. SLA Constraints</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                While we strive for 99.8% grid uptime, Mubraiz Resources is not liable for Force Majeure events affecting the trans-African corridors, including but not limited to, extreme climate anomalies or sudden regulatory shifts.
                            </p>
                        </section>

                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">3. Payment & Settlement</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                All financial yield settlement must be executed through our secure gateway. Late synchrony of invoices may result in a 0.5% grid maintenance tariff per cycle.
                            </p>
                        </section>
                    </div>

                    <div className="text-center pt-20">
                        <Link href="/">
                            <button className="h-16 px-12 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                Accept & Synchronize
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
