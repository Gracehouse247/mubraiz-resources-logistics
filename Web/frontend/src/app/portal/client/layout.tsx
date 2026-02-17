"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Dashboard", icon: "dashboard", href: "/portal/client" },
        { name: "Live Tracking", icon: "center_focus_strong", href: "/portal/client/tracking" },
        { name: "Global Shipments", icon: "inventory_2", href: "/portal/client/shipments" },
        { name: "Trade Documents", icon: "folder_open", href: "/portal/client/documents" },
        { name: "Financial Ledger", icon: "receipt_long", href: "/portal/client/invoices" },
        { name: "Cargo Claims", icon: "gavel", href: "/portal/client/claims" },
        { name: "Sustainability", icon: "eco", href: "/portal/client/sustainability" },
        { name: "Support Hub", icon: "support_agent", href: "/portal/client/support" },
        { name: "Settings", icon: "settings", href: "/portal/client/settings" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <div className="flex h-screen w-full bg-[#f6f8f6] dark:bg-[#0f172a] font-sans text-slate-600 dark:text-slate-300 antialiased overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 lg:flex shrink-0">
                <div className="flex items-center gap-4 px-6 py-8 border-b border-slate-50 dark:border-white/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 p-2.5 shadow-lg shadow-[#a1dc84]/5 border border-white/10">
                        <img src="/images/mubraiz-logo.svg" alt="Mubraiz" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-base font-black leading-none tracking-tighter italic">GATEWAY</h1>
                        <p className="text-[#a1dc84] text-[9px] font-black uppercase tracking-widest mt-1">CLIENT ACCESS</p>
                    </div>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-6 overflow-y-auto">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all font-bold text-sm ${isActive(item.href)
                                ? 'bg-[#a1dc84]/10 text-[#a1dc84]'
                                : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            <span className={`material-symbols-outlined !text-xl ${isActive(item.href) ? 'text-[#a1dc84]' : 'text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="border-t border-slate-200 dark:border-slate-800 p-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#a1dc84]/20">
                            <img src="https://i.pravatar.cc/100?u=alex" alt="Profile" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="truncate text-xs font-black text-slate-900 dark:text-white">Alex Morgan</p>
                            <p className="truncate text-[9px] font-bold text-slate-400 uppercase tracking-tight">Enterprise Client</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Nav Trigger */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="size-14 rounded-full bg-slate-900 text-[#a1dc84] shadow-2xl flex items-center justify-center border-2 border-[#a1dc84]/20"
                >
                    <span className="material-symbols-outlined !text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: -250 }}
                            animate={{ x: 0 }}
                            exit={{ x: -250 }}
                            className="w-64 h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-4 px-6 py-8 border-b border-slate-50 dark:border-white/5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 p-2.5 shadow-lg shadow-[#a1dc84]/5 border border-white/10">
                                    <img src="/images/mubraiz-logo.svg" alt="Mubraiz" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-slate-900 dark:text-white text-base font-black leading-none tracking-tighter italic">GATEWAY</h1>
                                    <p className="text-[#a1dc84] text-[9px] font-black uppercase tracking-widest mt-1">CLIENT ACCESS</p>
                                </div>
                            </div>
                            <nav className="flex-1 px-4 py-6 overflow-y-auto">
                                {navItems.map(item => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-1 text-sm font-bold ${isActive(item.href) ? 'bg-[#a1dc84]/10 text-[#a1dc84]' : 'text-slate-500 hover:bg-slate-50'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined !text-xl">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Pane */}
            <div className="flex flex-1 flex-col h-full overflow-hidden">
                {/* Shared Top Bar (Optional, specific pages can hide it) */}
                <header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 dark:bg-slate-900 dark:border-slate-800 shrink-0 z-10 lg:pl-8">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="hidden lg:flex items-center gap-2 text-slate-400">
                            <span className="text-[10px] font-black uppercase tracking-widest">{pathname.split('/').pop()}</span>
                        </div>
                        <div className="relative max-w-md w-full lg:ml-4">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 !text-lg">search</span>
                            <input
                                className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-100 dark:bg-white/5 border-none text-xs font-bold focus:ring-1 focus:ring-[#a1dc84]/50 transition-all dark:text-white"
                                placeholder="Universal Command Search..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col text-right">
                            <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest leading-none">Security Status</p>
                            <p className="text-[11px] font-bold text-slate-400">E2E Encrypted</p>
                        </div>
                        <button className="relative rounded-xl p-2.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-500 hover:text-[#a1dc84] transition-all">
                            <span className="material-symbols-outlined !text-xl">notifications</span>
                            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-900"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}

