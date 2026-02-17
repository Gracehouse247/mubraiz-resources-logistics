"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

export default function SupportOperationsHub() {
    const [selectedTab, setSelectedTab] = useState<'tickets' | 'docs' | 'comms'>('tickets');

    const { data: ticketData, isLoading } = useQuery({
        queryKey: ['admin-tickets'],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`);
            if (!res.ok) throw new Error('Failed to synchronize ticket queue');
            return res.json();
        }
    });

    const tickets: any[] = ticketData?.tickets || [];

    if (isLoading) {
        return (
            <div className="p-8 lg:p-12 min-h-screen flex items-center justify-center">
                <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.5em] animate-pulse">Synchronizing Operations Hub...</p>
            </div>
        );
    }

    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-[1600px] mx-auto">
            {/* Command Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Operations & Support Grid</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Managing Client Exceptions & Strategic Comms</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                    {[
                        { id: 'tickets', label: 'TICKET QUEUE', icon: 'confirmation_number' },
                        { id: 'docs', label: 'DOC REQUESTS', icon: 'description' },
                        { id: 'comms', label: 'LIVE CHANNELS', icon: 'quick_reference_all' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id as any)}
                            className={`px-8 h-12 rounded-xl flex items-center gap-3 text-[9px] font-black uppercase tracking-widest transition-all ${selectedTab === tab.id ? 'bg-white dark:bg-slate-800 text-[#a1dc84] shadow-xl border border-slate-100 dark:border-white/5' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <span className="material-symbols-outlined !text-xl">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Secondary Toggles / Stats */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 italic">Queue Health</p>
                        <div className="space-y-6">
                            {[
                                { l: 'ACTIVE TICKETS', v: '24 Nodes', c: 'text-amber-500' },
                                { l: 'UNASSIGNED', v: '08 Nodes', c: 'text-red-500' },
                                { l: 'RESOLVED (24H)', v: '142 Nodes', c: 'text-[#a1dc84]' }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-slate-50 dark:border-white/5 pb-4 last:border-0">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{s.l}</span>
                                    <span className={`text-lg font-black italic tracking-tighter ${s.c}`}>{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-white text-sm font-black italic uppercase mb-2">Internal Broadcast</h4>
                            <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-widest">System maintenance scheduled for UTC 02:00. All live fleet nodes will remain active.</p>
                            <button className="mt-6 w-full h-10 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Dismiss Signal</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 !text-6xl text-white/5 rotate-12">campaign</span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden">
                    <div className="p-8 border-b border-slate-50 dark:border-white/5 flex justify-between items-center bg-slate-50/50 dark:bg-black/20">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Active Operational Queue</h3>
                        <div className="flex gap-4">
                            <button className="h-10 px-6 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[9px] font-black uppercase tracking-widest">Export Log</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-black/10">
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">ID</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Strategic Client</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Exception Detail</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Threat Level</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                    <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Sync</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                {tickets.map((t: any) => (
                                    <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer">
                                        <td className="px-10 py-8">
                                            <span className="text-sm font-black text-slate-900 dark:text-white italic tracking-tighter">{t.ticketNumber}</span>
                                            <p className="text-[8px] font-bold text-slate-400 uppercase mt-1">{new Date(t.createdAt).toLocaleDateString()}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">{t.clientId || 'Anonymous Grid'}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <p className="text-xs font-bold text-slate-500 italic max-w-xs truncate">{t.subject}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className={`text-[8px] font-black uppercase tracking-widest ${t.priority.toUpperCase() === 'CRITICAL' ? 'text-red-500' : t.priority.toUpperCase() === 'HIGH' ? 'text-amber-500' : 'text-blue-500'}`}>
                                                {t.priority}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-2">
                                                <span className={`size-1.5 rounded-full ${t.status === 'Open' ? 'bg-red-500 animate-pulse' : t.status === 'In-Progress' ? 'bg-amber-500' : 'bg-[#a1dc84]'}`}></span>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{t.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <button className="px-6 py-2 bg-slate-100 dark:bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#a1dc84] transition-all">Dispatch</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
