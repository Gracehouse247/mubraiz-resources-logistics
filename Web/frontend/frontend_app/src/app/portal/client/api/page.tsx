"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClientAPIHub() {
    const [apiKey, setApiKey] = useState('mrl_live_8829_xX99201_A');
    const [isObscured, setIsObscured] = useState(true);

    const endpoints = [
        { method: 'GET', path: '/v1/shipments', desc: 'List all active logistics nodes' },
        { method: 'POST', path: '/v1/shipments/track', desc: 'Initialize real-time AIS tracking' },
        { method: 'GET', path: '/v1/documents/:id', desc: 'Retrieve authenticated trade documents' },
        { method: 'POST', path: '/v1/webhooks/subscribe', desc: 'Register callback for status changes' },
    ];

    return (
        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
            {/* API Hero */}
            <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-16 overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10 max-w-2xl">
                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Enterprise Integration</span>
                    <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight italic">Logistics API & <br /> Webhook Terminal</h2>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-widest leading-relaxed">
                        Connect your ERP, SAP, or custom TMS directly to the Mubraiz Global Grid. Automate your supply chain with our high-performance REST nodes.
                    </p>
                </div>
                <span className="material-symbols-outlined absolute -bottom-10 -right-10 !text-[15rem] text-white/5 rotate-12">api</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Integration Credentials */}
                <div className="lg:col-span-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex-1 w-full">
                                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4">Live API Key</h3>
                                <div className="relative group">
                                    <div className="w-full h-16 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center px-6 font-mono text-sm font-bold tracking-widest text-slate-900 dark:text-white overflow-hidden">
                                        {isObscured ? '••••••••••••••••••••••••••••' : apiKey}
                                    </div>
                                    <button
                                        onClick={() => setIsObscured(!isObscured)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#a1dc84] transition-colors"
                                    >
                                        <span className="material-symbols-outlined !text-xl">{isObscured ? 'visibility' : 'visibility_off'}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <button className="h-16 px-10 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">Roll Key</button>
                                <button className="h-16 px-10 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#a1dc84]/20">Download SDK</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Documentation Snippets */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <div className="bg-slate-50 dark:bg-white/5 px-8 py-5 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
                            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Protocol Reference</h3>
                            <span className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest">REST v1.2 Stable</span>
                        </div>
                        <div className="divide-y divide-slate-50 dark:divide-white/5">
                            {endpoints.map((ep, i) => (
                                <div key={i} className="p-8 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black ${ep.method === 'GET' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>{ep.method}</span>
                                            <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tracking-widest">{ep.path}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-[#a1dc84] transition-colors">code</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-gray-400">{ep.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Webhook Configuration */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-slate-900 p-8 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6">Active Webhooks</h4>
                        <div className="space-y-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[8px] font-black text-[#a1dc84] uppercase tracking-widest">Status Hub</span>
                                    <span className="size-2 bg-[#a1dc84] rounded-full animate-pulse"></span>
                                </div>
                                <p className="text-[10px] font-mono text-white/60 truncate italic mb-1">https://api.client.com/updates</p>
                                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Event: Shipment.StatusChanged</p>
                            </div>
                        </div>
                        <button className="w-full h-14 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[9px] font-black uppercase tracking-widest mt-10 transition-all border border-white/10">
                            Configure New Webhook
                        </button>
                    </div>

                    <div className="p-8 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-1">Integrations Status</h4>
                        <div className="space-y-5">
                            {[
                                { n: 'SAP Connector', s: 'Connected', c: 'text-[#a1dc84]' },
                                { n: 'Oracle NetSuite', s: 'Standby', c: 'text-blue-500' },
                                { n: 'Microsoft D365', s: 'Setup Required', c: 'text-slate-400' },
                            ].map((integ, i) => (
                                <div key={i} className="flex justify-between items-center px-1">
                                    <span className="text-[11px] font-black text-slate-700 dark:text-white uppercase tracking-tight">{integ.n}</span>
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${integ.c}`}>{integ.s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
