"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const invoices = [
    { id: "INV-2023-8821", amount: "$12,450.00", date: "Jan 12, 2024", status: "Paid", type: "Freight" },
    { id: "INV-2023-8820", amount: "$3,200.00", date: "Jan 05, 2024", status: "Paid", type: "Customs" },
    { id: "INV-2023-8815", amount: "$850.00", date: "Dec 20, 2023", status: "Overdue", type: "Handling" },
    { id: "INV-2023-8812", amount: "$5,600.00", date: "Dec 15, 2023", status: "Paid", type: "Freight" },
    { id: "INV-2023-8809", amount: "$2,100.00", date: "Dec 10, 2023", status: "Pending", type: "Storage" },
    { id: "INV-2023-8805", amount: "$9,400.00", date: "Dec 01, 2023", status: "Paid", type: "Freight" },
];

export default function InvoicesPage() {
    return (
        <div className="p-4 md:p-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Financial Ledger</h2>
                        <p className="mt-1 text-sm font-medium text-slate-500">Manage your shipping invoices, customs duties, and payment history.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="h-12 px-6 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest hover:brightness-125 transition-all">
                            Export Statements
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: 'Total Outstanding', val: '$2,950.00', icon: 'payments', color: 'red' },
                        { label: 'Paid This Quarter', val: '$45,720.00', icon: 'account_balance_wallet', color: 'green' },
                        { label: 'Pending Clearances', val: '04 Items', icon: 'description', color: 'amber' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{stat.val}</h3>
                                <div className={`size-12 rounded-2xl flex items-center justify-center ${stat.color === 'red' ? 'bg-red-50 text-red-500' : stat.color === 'green' ? 'bg-green-50 text-green-500' : 'bg-amber-50 text-amber-500'}`}>
                                    <span className="material-symbols-outlined !text-2xl">{stat.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Invoices List */}
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                    <div className="px-10 py-8 border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Transaction History</h3>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-[#a1dc84] transition-colors">All</button>
                            <button className="px-4 py-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#a1dc84] transition-colors">Pending</button>
                            <button className="px-4 py-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#a1dc84] transition-colors">Paid</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 dark:bg-black/20">
                                <tr>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Invoice ID</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Service Type</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                                    <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                    <th className="px-10 py-5 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                {invoices.map((inv) => (
                                    <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                                        <td className="px-10 py-6">
                                            <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{inv.id}</span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className="text-xs font-bold text-slate-500">{inv.date}</span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">{inv.type}</span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className="text-sm font-black text-slate-900 dark:text-white">{inv.amount}</span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'bg-green-50 text-green-600' : inv.status === 'Overdue' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-[#a1dc84] hover:bg-white transition-all">
                                                    <span className="material-symbols-outlined !text-xl">visibility</span>
                                                </button>
                                                <button className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-[#a1dc84] hover:bg-white transition-all">
                                                    <span className="material-symbols-outlined !text-xl">download_for_offline</span>
                                                </button>
                                            </div>
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

