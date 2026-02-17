"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessControl() {
    const [roles, setRoles] = useState([
        { id: "R-1", name: "Super Admin", nodes: "ALL", access: "UNSTRICTED", agents: 2 },
        { id: "R-2", name: "Fleet Manager", nodes: "FLEET, ASSETS", access: "TIER-2", agents: 5 },
        { id: "R-3", name: "Support Agent", nodes: "OPS, ASSETS", access: "TIER-3", agents: 12 },
        { id: "R-4", name: "Executive", nodes: "TOWER, FLEET, BLOG", access: "MACRO", agents: 3 },
    ]);

    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-[1600px] mx-auto">
            {/* Security Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Access Control Terminal</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Managing Internal Permissions & Strategic Node Clearance</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-14 px-10 bg-slate-100 dark:bg-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-all border border-slate-100 dark:border-white/5">View Audit Log</button>
                    <button className="h-14 px-10 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 border border-[#a1dc84]/20">Create Role Node</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Role Status Matrix */}
                <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-black/20 border-b border-slate-100 dark:border-white/5">
                            <tr>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Tactical Role Identity</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Grid Node Clearance</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Clearance Level</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Active Agents</th>
                                <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Sync</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {roles.map((role) => (
                                <tr key={role.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer">
                                    <td className="px-10 py-8">
                                        <p className="text-sm font-black text-slate-900 dark:text-white italic tracking-tighter uppercase">{role.name}</p>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{role.id}</p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{role.nodes}</p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest ${role.access === 'UNSTRICTED' ? 'text-red-500 border border-red-500/20' : 'text-slate-500'}`}>
                                            {role.access}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex -space-x-3">
                                            {[...Array(Math.min(role.agents, 4))].map((_, i) => (
                                                <div key={i} className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-black">
                                                    {String.fromCharCode(65 + i)}
                                                </div>
                                            ))}
                                            {role.agents > 4 && <div className="size-8 rounded-full bg-[#a1dc84] border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-black text-slate-900">+{role.agents - 4}</div>}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="px-6 py-2 bg-slate-900 text-white dark:bg-[#a1dc84] dark:text-slate-900 rounded-xl text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all">Config Node</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Audit Hub / Quick Actions */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 italic">Node Synchronicity Heartbeat</h3>
                            <div className="space-y-6">
                                {[
                                    { l: 'API SYNC STATUS', v: 'OPERATIONAL', c: 'text-[#a1dc84]' },
                                    { l: 'ENCRYPTION LAYER', v: 'AES-256V2', c: 'text-blue-500' },
                                    { l: 'ANOMALY DETECTION', v: 'ZERO ALERTS', c: 'text-emerald-500' }
                                ].map((sys, idx) => (
                                    <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4 last:border-0 hover:border-white/10 transition-colors">
                                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{sys.l}</span>
                                        <span className={`text-sm font-black italic tracking-tighter ${sys.c}`}>{sys.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 !text-[12rem] text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">security</span>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl">
                        <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6">Recent Security Intel</h4>
                        <div className="space-y-6">
                            {[
                                { a: 'Agent #4', t: 'Accessed Tariff Nodes', time: '12m ago' },
                                { a: 'System', t: 'Auto-Revoked Fleet Token', time: '1h ago' },
                                { a: 'Super Admin', t: 'Updated Blog Clearance', time: '2h ago' }
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 dark:border-white/5 last:border-0">
                                    <div className="size-2 bg-[#a1dc84] rounded-full mt-1.5 shrink-0 animate-pulse"></div>
                                    <div>
                                        <p className="text-xs font-black text-slate-900 dark:text-white italic tracking-tighter">{log.t}</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{log.a} • {log.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
