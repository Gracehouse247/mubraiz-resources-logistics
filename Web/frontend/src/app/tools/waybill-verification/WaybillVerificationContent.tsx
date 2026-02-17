"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function WaybillVerificationContent() {
    const [waybillId, setWaybillId] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);

        // Mock API call
        setTimeout(() => {
            if (waybillId === 'MBL-88721094') {
                setResult({
                    status: 'Delivered',
                    timestamp: 'Oct 24, 2023 | 14:35 GMT',
                    receiver: 'Benjamin S. Thompson',
                    location: 'Port Terminal 7, Berth 42A',
                    hash: '7f28...a9b2',
                    verified: true
                });
            } else {
                setResult({ error: 'Waybill ID not found in secure ledger.' });
            }
            setIsSearching(false);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#f6f8f6] dark:bg-[#0f172a] pt-32 pb-20 font-display">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-4 rounded-full bg-[#37ec13]/20 border border-[#37ec13]/30 text-[#37ec13] text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        Secure Chain-of-Custody
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6"
                    >
                        Waybill <span className="text-[#37ec13]">Verification</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Verify the authenticity and delivery status of any Mubraiz digital waybill. Our encrypted ledger ensures tamper-proof record keeping.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-slate-100 dark:border-white/5"
                >
                    <form onSubmit={handleVerify} className="space-y-8">
                        <div className="relative group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-[#37ec13] transition-colors">qr_code_scanner</span>
                            <input
                                type="text"
                                value={waybillId}
                                onChange={(e) => setWaybillId(e.target.value.toUpperCase())}
                                placeholder="ENTER WAYBILL ID (e.g. MBL-88721094)"
                                className="w-full h-20 bg-slate-50 dark:bg-white/5 border-2 border-slate-50 dark:border-white/5 rounded-[1.5rem] pl-16 pr-8 text-lg font-black text-slate-900 dark:text-white focus:border-[#37ec13] outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSearching || !waybillId}
                            className="w-full px-8 py-4 bg-[#37ec13] text-slate-900 rounded-lg font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#37ec13]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isSearching ? (
                                <>
                                    <span className="animate-spin material-symbols-outlined !text-xl">progress_activity</span>
                                    CONSULTING LEDGER...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined !text-xl">verified_user</span>
                                    VERIFY DOCUMENT
                                </>
                            )}
                        </button>
                    </form>

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-12 pt-12 border-t border-slate-100 dark:border-white/5"
                            >
                                {result.error ? (
                                    <div className="p-8 rounded-[2rem] bg-red-50 dark:bg-red-400/5 border-2 border-red-100 dark:border-red-400/10 flex items-center gap-6">
                                        <div className="size-14 bg-red-100 dark:bg-red-400/10 rounded-2xl flex items-center justify-center text-red-600">
                                            <span className="material-symbols-outlined !text-3xl">error</span>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-black text-red-900 dark:text-red-400 uppercase tracking-widest">Verification Failed</h3>
                                            <p className="text-xs font-bold text-red-800/60 dark:text-red-400/60">{result.error}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="size-16 bg-[#37ec13] rounded-[1.5rem] flex items-center justify-center text-slate-900 shadow-xl shadow-[#37ec13]/20">
                                                    <span className="material-symbols-outlined !text-3xl">check_circle</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{result.status}</h3>
                                                    <p className="text-[10px] font-black text-[#37ec13] uppercase tracking-widest">{result.timestamp}</p>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/portal/client/epod?id=${waybillId}`}
                                                className="px-8 py-4 flex items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
                                            >
                                                View Official ePOD
                                            </Link>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                            <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Receiver</p>
                                                <p className="text-xs font-black text-slate-900 dark:text-white">{result.receiver}</p>
                                            </div>
                                            <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                                <p className="text-xs font-black text-slate-900 dark:text-white line-clamp-1">{result.location}</p>
                                            </div>
                                            <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 col-span-2 md:col-span-1">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Transit Hash</p>
                                                <p className="text-xs font-black text-slate-900 dark:text-white font-mono">{result.hash}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: 'lock', title: 'Ledger Secured', desc: 'Each waybill is hashed and stored in our distributed logistics ledger.' },
                        { icon: 'location_on', title: 'GPS Validated', desc: 'Coordinates are captured at the point of receipt for absolute proof.' },
                        { icon: 'history', title: 'Real-time Trace', desc: 'Instant updates from our global network hubs to your dashboard.' }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="size-12 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-[#37ec13] mx-auto border border-slate-100 dark:border-white/5">
                                <span className="material-symbols-outlined !text-2xl">{item.icon}</span>
                            </div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">{item.title}</h4>
                            <p className="text-xs font-bold text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
