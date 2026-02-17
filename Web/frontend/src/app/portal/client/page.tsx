"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { tradeAPI } from "@/lib/tradeAPI";

export default function ClientDashboard() {
    const { data: dashboardData, isLoading, refetch } = useQuery({
        queryKey: ['client-dashboard'],
        queryFn: tradeAPI.getDashboardStats
    });

    const stats = [
        { title: "Active Shipments", value: (dashboardData as any)?.stats?.activeShipments?.toString() || "0", trend: "+2 this week", icon: "local_shipping", color: "green" },
        { title: "Pending Invoices", value: (dashboardData as any)?.stats?.pendingAmount ? `$${(dashboardData as any).stats.pendingAmount.toLocaleString()}` : "$0", trend: "Due in 5 days", icon: "description", color: "amber" },
        { title: "Eco Efficiency", value: "88%", trend: "Top 10% in Sector", icon: "eco", color: "emerald" },
    ];

    const shipments: any[] = (dashboardData as any)?.shipments || [];
    const invoices: any[] = (dashboardData as any)?.invoices || [];

    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [registerType, setRegisterType] = useState<'shipment' | 'vehicle'>('shipment');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
            setShowRegisterModal(false);
            setSubmitSuccess(false);
            refetch();
        }, 2000);
    };

    if (isLoading) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="size-12 border-4 border-slate-200 border-t-[#a1dc84] rounded-full animate-spin"></div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Synchronizing Global Grid...</p>
        </div>
    );

    return (
        <div className="p-4 md:p-10 space-y-10 max-w-[1600px] mx-auto">
            <div className="flex flex-col gap-8">
                {/* Page Heading */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20">
                    <div className="flex items-center gap-6">
                        <div className="size-16 rounded-2xl bg-slate-900 flex items-center justify-center border border-white/5 shadow-2xl">
                            <img src="/images/mubraiz-logo.svg" alt="Mubraiz" className="size-10 object-contain" />
                        </div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-3xl font-black tracking-tight text-slate-900 dark:text-white italic"
                            >
                                Operational Overview
                            </motion.h2>
                            <p className="mt-1 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Corporate ID: <span className="text-[#a1dc84]">MUB-2024-ENT</span> | Security Level: <span className="text-[#a1dc84]">TIER 1</span></p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => { setRegisterType('vehicle'); setShowRegisterModal(true); }}
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 px-8 text-[10px] font-black text-slate-900 dark:text-white hover:bg-slate-100 transition-all uppercase tracking-widest border border-slate-100 dark:border-white/5"
                        >
                            + Add Asset
                        </button>
                        <button
                            onClick={() => { setRegisterType('shipment'); setShowRegisterModal(true); }}
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-[#a1dc84] px-8 text-[10px] font-black text-slate-900 shadow-xl shadow-[#a1dc84]/20 hover:scale-[1.02] transition-all uppercase tracking-widest"
                        >
                            + New Shipment
                        </button>
                    </div>
                </div>

                {/* Registration Modal */}
                <AnimatePresence>
                    {showRegisterModal && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                                className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-white/10 shadow-3xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100 dark:bg-white/5">
                                    <motion.div
                                        className="h-full bg-[#a1dc84]"
                                        initial={{ width: 0 }}
                                        animate={{ width: isSubmitting ? '100%' : '0%' }}
                                        transition={{ duration: 2 }}
                                    />
                                </div>

                                <button onClick={() => setShowRegisterModal(false)} className="absolute top-8 right-8 text-slate-400 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined !text-3xl">close</span>
                                </button>

                                {submitSuccess ? (
                                    <div className="py-20 text-center space-y-6">
                                        <div className="size-20 rounded-full bg-[#a1dc84]/20 text-[#a1dc84] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                                            <span className="material-symbols-outlined !text-5xl">check_circle</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white italic">Asset Catalogued</h3>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Entry verified and synchronized across global nodes.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-8">
                                        <div>
                                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Asset Ingestion Matrix</span>
                                            <h3 className="text-4xl font-black text-slate-900 dark:text-white italic mb-4 leading-none">
                                                {registerType === 'vehicle' ? 'Vehicle Entry' : 'Shipment Seed'}
                                            </h3>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Provide precise operational metadata for real-time tracking.</p>
                                        </div>

                                        <div className="space-y-6">
                                            {registerType === 'vehicle' ? (
                                                <>
                                                    <div className="space-y-3">
                                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">License Identification</label>
                                                        <input required className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84] focus:ring-4 focus:ring-[#a1dc84]/10 transition-all" placeholder="e.g. LAG-90-XTZ" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Controller Name</label>
                                                        <input required className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84] focus:ring-4 focus:ring-[#a1dc84]/10 transition-all" placeholder="e.g. Sunday Michael" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="space-y-3">
                                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Cargo Reference</label>
                                                        <input required className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84] focus:ring-4 focus:ring-[#a1dc84]/10 transition-all" placeholder="e.g. PRJ-2024-772" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Logistics Vector (Origin - Dest)</label>
                                                        <input required className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84] focus:ring-4 focus:ring-[#a1dc84]/10 transition-all" placeholder="e.g. Port Harcourt -> Ibadan" />
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full h-20 bg-slate-900 text-[#a1dc84] rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl disabled:opacity-50 overflow-hidden relative group"
                                        >
                                            <span className="relative z-10">{isSubmitting ? 'SECURELY UPLOADING...' : 'CONFIRM DATA SUBMISSION'}</span>
                                            <div className="absolute inset-0 bg-[#a1dc84] translate-y-full group-hover:translate-y-[90%] transition-transform opacity-10"></div>
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-xl shadow-slate-200/40 border border-slate-100 dark:bg-slate-900 dark:border-white/5 dark:shadow-none hover:border-[#a1dc84]/30 transition-all group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className={`rounded-2xl p-4 shadow-lg ${stat.color === 'green' ? 'bg-green-50 text-green-600 shadow-green-200/20' :
                                        stat.color === 'amber' ? 'bg-amber-50 text-amber-600 shadow-amber-200/20' :
                                            'bg-blue-50 text-blue-600 shadow-blue-200/20'
                                    } group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined !text-3xl">{stat.icon}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#a1dc84]">{stat.trend}</span>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Real-time Data</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white italic">{stat.value}</h3>
                                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Split Layout */}
                <div className="flex flex-col gap-10 lg:flex-row">
                    {/* Shipment History Table */}
                    <div className="flex-1 rounded-[3rem] bg-white shadow-2xl shadow-slate-200/30 border border-slate-100 dark:bg-slate-900 dark:border-white/5 dark:shadow-none overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-50 px-10 py-8 dark:border-white/5 bg-slate-50/30">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-1">Fleet Intelligence</h3>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Global Nodal Movements</p>
                            </div>
                            <Link className="flex items-center gap-2 text-[10px] font-black text-[#a1dc84] uppercase tracking-widest hover:brightness-110 group" href="/portal/client/tracking" target="_blank">
                                View Full Map <span className="material-symbols-outlined !text-sm group-hover:translate-x-1 transition-transform">east</span>
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-separate border-spacing-0">
                                <thead className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:bg-black/20">
                                    <tr>
                                        <th className="px-10 py-6">Operational ID</th>
                                        <th className="px-10 py-6">Logistic Corridor</th>
                                        <th className="px-10 py-6 text-right">Synchronization</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-white/5 font-display">
                                    {shipments.length > 0 ? shipments.map((shp: any) => (
                                        <tr key={shp.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                                            <td className="px-10 py-7">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-2 rounded-full bg-[#a1dc84] animate-pulse"></div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{shp.id}</span>
                                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Priority Nodal Sync</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-7">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{shp.origin}</span>
                                                    <div className="h-px w-8 bg-slate-200 relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-[#a1dc84] -translate-x-full animate-progress" style={{ animationDuration: '3s' }}></div>
                                                    </div>
                                                    <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">{shp.destination}</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-7 text-right">
                                                <span className="inline-flex items-center rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-[9px] font-black uppercase tracking-widest text-blue-600 shadow-sm shadow-blue-200/10">
                                                    {shp.status}
                                                </span>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={3} className="px-10 py-20 text-center">
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">No active nodes identified in grid.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Invoice Vault Widget */}
                    <div className="w-full lg:w-[400px] flex-none">
                        <div className="flex h-full flex-col rounded-[3rem] bg-white shadow-2xl shadow-slate-200/30 border border-slate-100 dark:bg-slate-900 dark:border-white/5 dark:shadow-none overflow-hidden">
                            <div className="flex items-center justify-between border-b border-slate-50 px-10 py-8 dark:border-white/5 bg-slate-50/30">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">Trade Ledger</h3>
                                <span className="material-symbols-outlined text-slate-400 !text-xl cursor-help" title="Cryptographically verified document vault">verified</span>
                            </div>
                            <div className="flex-1 p-8 space-y-5">
                                {invoices.length > 0 ? invoices.map((inv: any) => (
                                    <div key={inv.id} className="group flex items-center justify-between rounded-2xl border border-slate-100 p-5 hover:border-[#a1dc84] hover:bg-slate-50/80 transition-all dark:border-white/5 dark:hover:bg-white/5 cursor-pointer shadow-sm shadow-slate-200/10">
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 dark:bg-red-900/20 shadow-inner group-hover:rotate-6 transition-transform">
                                                <span className="material-symbols-outlined !text-2xl font-black">article</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">{inv.invoiceNumber}</p>
                                                <p className="text-[10px] font-black text-[#a1dc84] mt-1">${inv.amount}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Due: {new Date(inv.dueDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <button className="size-10 rounded-full flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 hover:text-slate-900 hover:bg-[#a1dc84] transition-all border border-slate-100 bg-white shadow-lg">
                                            <span className="material-symbols-outlined !text-xl">download</span>
                                        </button>
                                    </div>
                                )) : (
                                    <div className="py-20 text-center text-xs font-black text-slate-400 uppercase tracking-widest italic opacity-50">
                                        ledger empty.
                                    </div>
                                )}
                            </div>
                            <div className="p-8 bg-slate-900">
                                <Link href="/portal/client/invoices" className="w-full flex h-14 items-center justify-center rounded-2xl bg-[#a1dc84] text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/10">
                                    ACCESS FINANCIAL ARCHIVE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Banner */}
                <div className="rounded-[4rem] bg-slate-900 p-12 text-center sm:text-left shadow-2xl overflow-hidden relative border border-white/5">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a1dc84]/50 to-transparent"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/graphy.png")' }}></div>
                    <div className="relative z-10 flex flex-col items-center justify-between gap-12 sm:flex-row">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em]">Grid Support Protocol</span>
                            <h3 className="text-4xl font-black text-white tracking-tighter italic leading-none">Intelligence. Integrity. Speed.</h3>
                            <p className="max-w-xl text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wider">Our Command Center is available 24/7 for nodal optimization and route strategy.</p>
                        </div>
                        <div className="flex flex-col gap-4 shrink-0">
                            <Link href="/portal/client/support" className="rounded-2xl bg-white px-12 py-5 text-[10px] font-black text-slate-900 shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-slate-100">
                                Contact Human Agent
                            </Link>
                            <p className="text-[#a1dc84] text-[9px] font-black uppercase tracking-widest text-center">Average Response: 120s</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-10 text-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-400 pb-10">
                MUBRAIZ OPERATING SYSTEM v4.1.0 | CLOUD-NATIVE LOGISTICS ECOSYSTEM
            </footer>
        </div>
    );
}
