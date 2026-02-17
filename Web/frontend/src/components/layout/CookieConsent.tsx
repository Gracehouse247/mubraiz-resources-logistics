"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('mubraiz-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('mubraiz-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('mubraiz-cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 pointer-events-none"
                >
                    <div className="max-w-6xl mx-auto w-full bg-white dark:bg-[#102210] rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/5 p-6 md:p-10 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Info */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-xl bg-[#a1dc84]/10 text-[#a1dc84] flex items-center justify-center">
                                    <span className="material-symbols-outlined !text-xl">security</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">Privacy & Preference</h3>
                            </div>
                            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                                Mubraiz Resources Ltd uses cookies to optimize your global logistics experience, analyze traffic, and ensure the security of our supply chain ecosystem. By accepting, you consent to our specialized data protocols. Read our <Link href="/legal/privacy" className="text-[#a1dc84] hover:underline decoration-2 underline-offset-4 font-black transition-all">Privacy Framework</Link>.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-8 py-4 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm font-black hover:bg-slate-50 dark:hover:bg-white/5 transition-all uppercase tracking-widest"
                            >
                                Optimize Settings
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-8 py-4 rounded-lg bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 text-sm font-black shadow-xl shadow-black/10 dark:shadow-[#a1dc84]/20 hover:bg-black dark:hover:bg-[#8bc76d] transition-all uppercase tracking-widest"
                            >
                                Accept All Cookies
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

