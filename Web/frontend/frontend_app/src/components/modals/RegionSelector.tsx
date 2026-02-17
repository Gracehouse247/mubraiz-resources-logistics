"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface RegionSelectorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegionSelector({ isOpen, onClose }: RegionSelectorProps) {
    const [selectedLang, setSelectedLang] = useState('English');
    const [selectedRegion, setSelectedRegion] = useState('Nigeria');

    const languages = [
        { name: 'English', region: 'Global', flag: '🇬🇧' },
        { name: 'French', region: 'West Africa', flag: '🇫🇷' },
        { name: 'Arabic', region: 'North Africa', flag: '🇸🇦' },
        { name: 'Portuguese', region: 'Southern Africa', flag: '🇵🇹' }
    ];

    const hubs = [
        {
            title: 'West Africa',
            countries: ['Nigeria', 'Ghana', 'Ivory Coast', 'Senegal']
        },
        {
            title: 'North & East',
            countries: ['Egypt', 'Kenya', 'Morocco', 'Ethiopia']
        },
        {
            title: 'Global Operations',
            countries: ['United Kingdom', 'United States', 'UAE', 'China']
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white dark:bg-[#102210] rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="relative px-8 pt-10 pb-6 text-center border-b border-slate-50 dark:border-white/5">
                            <button
                                onClick={onClose}
                                className="absolute right-8 top-8 size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Select Your Language & Region</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Tailor your global logistics experience with Mubraiz Resources Ltd.</p>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto px-8 py-10 space-y-12 max-h-[60vh] custom-scrollbar">
                            {/* Languages Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="size-8 rounded-lg bg-[#a1dc84]/10 text-[#a1dc84] flex items-center justify-center">
                                        <span className="material-symbols-outlined !text-xl">translate</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider text-sm">System Language</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {languages.map((lang) => (
                                        <motion.div
                                            key={lang.name}
                                            whileHover={{ y: -2 }}
                                            onClick={() => setSelectedLang(lang.name)}
                                            className={`relative cursor-pointer p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${selectedLang === lang.name
                                                ? 'border-[#a1dc84] bg-[#a1dc84]/5 dark:bg-[#a1dc84]/10'
                                                : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 hover:border-[#a1dc84]/30'
                                                }`}
                                        >
                                            <div className="text-4xl shadow-sm">{lang.flag}</div>
                                            <div className="text-center">
                                                <p className="text-slate-900 dark:text-white font-black text-sm">{lang.name}</p>
                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">{lang.region}</p>
                                            </div>
                                            {selectedLang === lang.name && (
                                                <div className="absolute top-3 right-3 text-[#a1dc84]">
                                                    <span className="material-symbols-outlined !text-base">check_circle</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Regions Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="size-8 rounded-lg bg-[#a1dc84]/10 text-[#a1dc84] flex items-center justify-center">
                                        <span className="material-symbols-outlined !text-xl">hub</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider text-sm">Regional Hubs</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {hubs.map((hub) => (
                                        <div key={hub.title} className="space-y-4">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-2">{hub.title}</h4>
                                            <div className="space-y-1">
                                                {hub.countries.map((country) => (
                                                    <button
                                                        key={country}
                                                        onClick={() => setSelectedRegion(country)}
                                                        className={`w-full group flex items-center justify-between px-5 py-3.5 rounded-xl font-bold text-sm transition-all ${selectedRegion === country
                                                            ? 'bg-[#a1dc84]/10 text-green-800 dark:text-[#a1dc84] border border-[#a1dc84]/20'
                                                            : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                                            }`}
                                                    >
                                                        {country}
                                                        <span className={`material-symbols-outlined !text-base ${selectedRegion === country ? 'text-[#a1dc84]' : 'text-slate-200 dark:text-slate-800'}`}>
                                                            {selectedRegion === country ? 'radio_button_checked' : 'radio_button_unchecked'}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-8 bg-slate-50 dark:bg-black/20 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                            <Link href="/legal/privacy" className="text-xs font-bold text-slate-400 hover:text-[#a1dc84] transition-colors underline underline-offset-4">Privacy & Data Preferences</Link>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <button
                                    onClick={onClose}
                                    className="flex-1 md:flex-none px-8 py-4 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white text-sm font-black hover:bg-white dark:hover:bg-white/5 transition-all uppercase tracking-widest"
                                >
                                    Discard
                                </button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                    className="flex-1 md:flex-none px-8 py-4 rounded-lg bg-[#a1dc84] text-slate-900 text-sm font-black shadow-xl shadow-[#a1dc84]/20 hover:bg-[#8bc76d] transition-all uppercase tracking-widest"
                                >
                                    Secure Preferences
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

