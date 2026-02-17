"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CargoClaims() {
    return (
        <div className="p-4 md:p-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Page Title */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">Claims & Disputes Hub</h2>
                        <p className="mt-1 text-sm font-medium text-slate-500">Legal escalation and insurance claim management for global cargos.</p>
                    </div>
                    <button className="h-14 px-10 rounded-2xl bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-red-600/20 hover:scale-105 active:scale-95 transition-all">
                        Initiate Urgent Dispute
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar Stats */}
                    <aside className="lg:col-span-3 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
                        >
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Active Risk Meter</p>
                            <div className="relative h-6 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "65%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#a1dc84] via-yellow-400 to-red-500"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Moderate Alert</span>
                                <span className="text-2xl font-black text-slate-900 dark:text-white">65%</span>
                            </div>
                        </motion.div>

                        <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Verification To-Do</p>
                            <div className="space-y-6">
                                {[
                                    { title: "SDR Evaluation", ref: "Ref: SDR-2024-9", checked: true },
                                    { title: "Waybill Validation", ref: "Signature Required", checked: false },
                                    { title: "Damage Proof", ref: "Upload Images", checked: false },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                        <div className={`mt-0.5 size-5 rounded-lg border-2 flex items-center justify-center transition-all ${item.checked ? 'bg-[#a1dc84] border-[#a1dc84] text-white' : 'border-slate-200 dark:border-white/10 group-hover:border-[#a1dc84]'}`}>
                                            {item.checked && <span className="material-symbols-outlined !text-[14px] font-black">check</span>}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-[#a1dc84] transition-colors">{item.title}</p>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.ref}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl flex flex-col h-[400px] border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                        <div className="size-12 rounded-2xl bg-slate-700 bg-center bg-cover border-2 border-[#a1dc84]/30" style={{ backgroundImage: 'url("https://i.pravatar.cc/100?u=marcus")' }}></div>
                                        <div className="absolute -bottom-1 -right-1 size-4 bg-[#a1dc84] border-[3px] border-slate-900 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black tracking-tighter">Marcus Sterling</p>
                                        <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">Lead Adjuster</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6 pr-2">
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none text-[11px] font-medium leading-relaxed max-w-[90%] border border-white/5">
                                        I've reviewed the manifest. Could you please provide the secondary seal reference?
                                    </div>
                                    <div className="bg-[#a1dc84]/10 text-[#a1dc84] p-4 rounded-2xl rounded-tr-none text-[11px] font-black leading-relaxed max-w-[90%] self-end ml-auto border border-[#a1dc84]/20">
                                        Sending the PDF scan now.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Areas */}
                    <div className="lg:col-span-9 space-y-8">
                        {/* Evidence Zone */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none p-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Evidence Depository</h3>
                                    <p className="text-xs font-semibold text-slate-400 mt-1">Legally binding documentation for Claim #MBL-2023-9001</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="h-12 px-6 rounded-xl border border-slate-200 dark:border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">Download Bundle</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { title: "Manifest Seal", desc: "Photo • 4.2 MB", icon: "photo_camera" },
                                    { title: "Waybill v2", desc: "PDF • 1.1 MB", icon: "picture_as_pdf" },
                                    { title: "Damage Report", desc: "Doc • 0.8 MB", icon: "description" },
                                    { title: "CCTV Export", desc: "Video • 22 MB", icon: "videocam" },
                                ].map((item, i) => (
                                    <div key={i} className="group flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 hover:border-[#a1dc84]/50 hover:bg-white dark:hover:bg-white/5 transition-all cursor-pointer">
                                        <span className="material-symbols-outlined !text-3xl text-slate-300 group-hover:text-[#a1dc84] transition-colors mb-4">{item.icon}</span>
                                        <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight text-center">{item.title}</p>
                                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.desc}</p>
                                    </div>
                                ))}
                                <div className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-[#a1dc84] hover:bg-[#a1dc84]/5 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined !text-2xl text-[#a1dc84] mb-2">add_circle</span>
                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest">Upload Documentation</p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Disputes Table */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                            <div className="px-10 py-8 border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Recent Dispute History</h3>
                                <button className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest hover:underline">Full Legal Archive</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50/50 dark:bg-black/20">
                                        <tr>
                                            <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Reference</th>
                                            <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Claim Value</th>
                                            <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Stage</th>
                                            <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                        {[
                                            { id: "CLA-11204", value: "$4,200.00", stage: "Under Review", status: "Active" },
                                            { id: "CLA-11198", value: "$12,000.00", stage: "Settled", status: "Resolved" },
                                            { id: "CLA-11192", value: "$1,850.00", stage: "Awaiting Court", status: "Escalated" },
                                        ].map((claim) => (
                                            <tr key={claim.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-10 py-6 font-black text-slate-900 dark:text-white text-sm uppercase">{claim.id}</td>
                                                <td className="px-10 py-6 font-black text-slate-900 dark:text-white">{claim.value}</td>
                                                <td className="px-10 py-6 text-xs font-bold text-slate-500 uppercase tracking-widest">{claim.stage}</td>
                                                <td className="px-10 py-6">
                                                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${claim.status === 'Resolved' ? 'bg-green-50 text-green-600' : claim.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}>
                                                        {claim.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

