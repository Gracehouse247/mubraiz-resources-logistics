"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function UnifiedSupportContent() {
    const tickets = [
        { id: "#TKT-00124", status: "Active", subject: "Route Optimization Inquiry", time: "12m ago", priority: "High" },
        { id: "#TKT-00122", status: "Resolved", subject: "Billing Discrepancy", time: "2h ago", priority: "Med" },
        { id: "#TKT-00119", status: "Active", subject: "Vendor Logistics Delay", time: "Yesterday", priority: "Low" },
    ];

    return (
        <div className="flex h-full w-full bg-[#f6f8f6] dark:bg-[#0f172a] font-sans text-slate-900 antialiased overflow-hidden">
            {/* Ticket List Sidebar */}
            <aside className="hidden w-80 flex-col border-r border-slate-200 bg-white dark:bg-slate-900 dark:border-white/5 h-full shrink-0 md:flex">
                <div className="p-8 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Active Nodes</h2>
                        <button className="size-8 bg-[#a1dc84] text-slate-900 rounded-lg flex items-center justify-center hover:scale-110 transition-all shadow-lg shadow-[#a1dc84]/20 border border-[#a1dc84]/20">
                            <span className="material-symbols-outlined !text-xl font-black">add</span>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 !text-lg">search</span>
                        <input className="w-full h-12 pl-10 pr-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest focus:ring-1 focus:ring-[#a1dc84] transition-all outline-none" placeholder="Search Intel..." type="text" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {tickets.map((ticket, i) => (
                        <motion.div
                            key={ticket.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-[2rem] border cursor-pointer transition-all group ${i === 0 ? 'bg-white dark:bg-slate-800 border-[#a1dc84] shadow-xl shadow-[#a1dc84]/5' : 'bg-transparent border-slate-50 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10'}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{ticket.id}</p>
                                <span className={`text-[7px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full ${ticket.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>{ticket.priority}</span>
                            </div>
                            <h4 className={`text-xs font-black mb-1 line-clamp-1 italic ${i === 0 ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>{ticket.subject}</h4>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{ticket.time}</p>
                        </motion.div>
                    ))}
                </div>
            </aside>

            {/* Main Conversation Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-950 relative">
                <header className="h-20 flex items-center justify-between px-10 border-b border-slate-50 dark:border-white/5 shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10">
                    <div className="flex items-center gap-5">
                        <div className="size-12 rounded-2xl bg-slate-900 text-[#a1dc84] flex items-center justify-center font-black text-sm border border-[#a1dc84]/20 ring-4 ring-[#a1dc84]/5 shadow-xl">MB</div>
                        <div>
                            <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight tracking-tight italic">COMMAND SUPPORT HUB</h3>
                            <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest flex items-center gap-2 mt-1">
                                <span className="w-1.5 h-1.5 bg-[#a1dc84] rounded-full animate-pulse"></span> SYSTEM OPTIMAL
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-100 dark:border-white/10 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] hover:text-slate-900 dark:hover:text-white transition-all">Deactivate Node</button>
                        <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white dark:bg-[#a1dc84] dark:text-slate-900 text-[9px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-slate-900/10 dark:shadow-[#a1dc84]/10">Escalate Intel</button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-12 space-y-12 bg-slate-50/30 dark:bg-slate-900/10">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] text-center mb-10">Transmission Established • UTC 20:45</p>

                        <div className="flex gap-8 items-start">
                            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 shrink-0 font-black text-xs border border-slate-100 dark:border-white/5 shadow-sm">AM</div>
                            <div className="space-y-3 max-w-2xl">
                                <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] rounded-tl-none border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none text-[13px] font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                                    Hi team, we're seeing a slight delay in the <span className="text-[#a1dc84] font-black uppercase tracking-widest">Route 402</span> corridor optimization. Could you check if there's any pending vendor sync that might be causing this?
                                </div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 opacity-60">Alex Morgan • 11:45 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start self-end flex-row-reverse">
                            <div className="size-12 rounded-2xl bg-[#a1dc84] text-slate-900 flex items-center justify-center shrink-0 font-black text-xs shadow-xl shadow-[#a1dc84]/20">MS</div>
                            <div className="space-y-3 max-w-2xl text-right">
                                <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] rounded-tr-none shadow-2xl text-[13px] font-medium leading-relaxed border border-white/5">
                                    Checking that now for you, Alex. It looks like the vendor manifest for <span className="text-[#a1dc84] font-black uppercase tracking-widest">Corridor #12</span> is currently in processing. We'll have an update within 15 minutes.
                                </div>
                                <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mr-1">Marcus • Strategic Lead • 11:48 AM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-10 border-t border-slate-50 dark:border-white/5 bg-white dark:bg-slate-900">
                    <div className="max-w-4xl mx-auto relative group">
                        <textarea
                            className="w-full h-32 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 pr-48 text-[13px] font-medium focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84] outline-none transition-all resize-none dark:text-white"
                            placeholder="TRANSMIT SECURE INTEL TO MISSION CONTROL..."
                            rows={3}
                        />
                        <div className="absolute right-6 bottom-6 flex gap-4">
                            <button className="p-3 text-slate-400 hover:text-[#a1dc84] transition-all">
                                <span className="material-symbols-outlined !text-2xl">attach_file_add</span>
                            </button>
                            <button className="px-10 py-3 bg-[#a1dc84] text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 border border-[#a1dc84]/20">
                                Transmit
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-[8px] font-black text-slate-300 uppercase tracking-[0.5em] mt-8">E2E ENCRYPTED LOGISTICS CHANNEL VERIFIED BY MUBRAIZ SECURE GRID</p>
                </div>
            </main>
        </div>
    );
}
