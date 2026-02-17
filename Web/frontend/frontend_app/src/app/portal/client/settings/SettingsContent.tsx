"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SettingsContent() {
    const sections = [
        { title: "Profile Intel", desc: "Manage your personnel node and access level.", icon: "person" },
        { title: "Grid Notifications", desc: "Configure multi-channel alerts for shipment events.", icon: "notifications" },
        { title: "Security Protocol", desc: "Two-factor authentication and session security.", icon: "security" },
        { title: "Regional Units", desc: "Set currency, timezone, and metric preferences.", icon: "language" },
    ];

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Terminal Configuration</h2>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Adjust your interaction with the global grid</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none group cursor-pointer hover:border-[#a1dc84] transition-all">
                            <div className="flex items-center gap-6">
                                <div className="size-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#a1dc84] transition-colors">
                                    <span className="material-symbols-outlined !text-3xl">{section.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight italic">{section.title}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-widest">{section.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden">
                    <div className="p-10 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 flex justify-between items-center">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Active session details</h3>
                        <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Secured v4.28</span>
                    </div>
                    <div className="p-10 space-y-10">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entity Name</label>
                                    <input className="w-full h-14 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 px-6 text-sm font-black text-slate-900 dark:text-white italic focus:ring-1 focus:ring-[#a1dc84] outline-none transition-all" defaultValue="Global Logistics Corp" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Auth Level</label>
                                    <div className="w-full h-14 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 px-6 flex items-center text-sm font-black text-slate-400 uppercase tracking-widest">
                                        Enterprise Administrator
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Grid Interface Mode</label>
                                <div className="flex gap-4">
                                    <button className="flex-1 h-14 bg-[#a1dc84] text-slate-900 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest">
                                        <span className="material-symbols-outlined !text-xl">dark_mode</span>
                                        Deep Dark Mode
                                    </button>
                                    <button className="flex-1 h-14 bg-slate-50 dark:bg-white/5 text-slate-400 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest">
                                        <span className="material-symbols-outlined !text-xl">light_mode</span>
                                        High Contrast
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-slate-50 dark:border-white/5 flex justify-end gap-4">
                            <button className="h-14 px-10 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-slate-900 transition-all">Reset Node</button>
                            <button className="h-14 px-10 rounded-2xl bg-slate-900 text-white dark:bg-[#a1dc84] dark:text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-950/20 dark:shadow-[#a1dc84]/20 hover:scale-105 transition-all">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
