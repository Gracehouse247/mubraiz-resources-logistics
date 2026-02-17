"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#f6f8f6] dark:bg-[#0a0f1a] min-h-screen font-sans text-slate-900 dark:text-white antialiased">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Compliance Protocol</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-8 font-primary">Privacy Policy.</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto font-secondary leading-relaxed">
                            Our commitment to the NDPR & GDPR standards ensuring the absolute integrity of your enterprise data.
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 group">
                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">1. Node Identity Retrieval</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                Mubraiz Resources Ltd ("The Grid") collects identifying telemetry from organizational nodes including:
                                Corporate Entity Name, Access Credentials, IP Vectors, and Operational Frequency data.
                                This information is vital for maintaining the security of the trans-African logistics grid.
                            </p>
                        </section>

                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">2. Data Encryption Standards</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                All mission-critical data transmitted through our gateway is secured using 256-bit AES encryption.
                                We adhere strictly to the Nigeria Data Protection Regulation (NDPR) to prevent unauthorized exfiltration.
                            </p>
                        </section>

                        <section className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl transition-all hover:border-[#a1dc84]/30">
                            <h2 className="text-2xl font-black tracking-tighter mb-6 font-primary">3. Third-Party Syncing</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                We do not trade or broadcast your fleet intelligence to external brokers.
                                Data is only synchronized with authorized regulatory nodes (NCS, PAARS) for customs clearance efficiency.
                            </p>
                        </section>
                    </div>

                    <div className="text-center pt-20">
                        <Link href="/">
                            <button className="h-16 px-12 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                Return to Command Center
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
