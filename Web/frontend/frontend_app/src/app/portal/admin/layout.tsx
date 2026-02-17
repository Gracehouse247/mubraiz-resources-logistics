"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser, SignOutButton } from "@clerk/nextjs";

type AdminRole = 'super_admin' | 'fleet_manager' | 'support_agent' | 'executive';

export default function AdminPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCommandOpen, setIsCommandOpen] = useState(false);

    // Command Palette Keyboard Shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsCommandOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navItems = [
        { name: "Executive Tower", icon: "monitoring", href: "/portal/admin/dashboard", roles: ['super_admin', 'executive'] },
        { name: "Fleet Control", icon: "minor_crash", href: "/portal/admin/fleet", roles: ['super_admin', 'fleet_manager', 'executive'] },
        { name: "Ops & Support", icon: "hub", href: "/portal/admin/operations", roles: ['super_admin', 'support_agent', 'executive'] },
        { name: "Blog Engine", icon: "edit_note", href: "/portal/admin/blog", roles: ['super_admin', 'executive'] },
        { name: "Asset Vault", icon: "folder_managed", href: "/portal/admin/assets", roles: ['super_admin', 'fleet_manager', 'support_agent', 'executive'] },
        { name: "Access Control", icon: "admin_panel_settings", href: "/portal/admin/access", roles: ['super_admin'] },
    ];

    const { user } = useUser();
    const role = (user?.publicMetadata?.role as AdminRole) || 'super_admin';

    const filteredNav = navItems.filter(item => item.roles.includes(role));

    const isActive = (href: string) => pathname.startsWith(href);

    const [commandInput, setCommandInput] = useState('');
    const [commandResults, setCommandResults] = useState<string[]>([]);

    const missions = [
        'Quick Article Publish',
        'Sync Port AIS Data',
        'Reset Fleet Nodes',
        'Emergency Support Broadcast',
        'Revoke Driver Node',
        'Publish Tariff PDF',
        'Calculate Grid Yield',
        'Initiate Tactical Rewind'
    ];

    useEffect(() => {
        if (!commandInput) {
            setCommandResults([]);
            return;
        }
        const filtered = missions.filter(m => m.toLowerCase().includes(commandInput.toLowerCase()));
        setCommandResults(filtered);
    }, [commandInput]);

    return (
        <div className="flex h-screen w-full bg-[#f8fafc] dark:bg-[#020617] font-sans text-slate-600 dark:text-slate-300 antialiased overflow-hidden">
            {/* Command Palette Overlay */}
            <AnimatePresence>
                {isCommandOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-4"
                        onClick={() => setIsCommandOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-white/5 shadow-2xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-2xl animate-pulse">terminal</span>
                                <input
                                    autoFocus
                                    value={commandInput}
                                    onChange={(e) => setCommandInput(e.target.value)}
                                    className="flex-1 bg-transparent border-none text-lg font-black text-slate-900 dark:text-white outline-none placeholder:text-slate-400 italic"
                                    placeholder="Universal Command Input (e.g. 'Rewind Fleet', 'Publish PDF')..."
                                />
                                <div className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest">⌘K</div>
                            </div>
                            <div className="p-4 space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-4 mb-2">
                                    {commandInput ? 'Identified Command Nodes' : 'Popular Missions'}
                                </p>
                                {(commandInput ? commandResults : missions.slice(0, 4)).map((cmd, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (cmd.includes('Rewind')) window.location.href = '/portal/admin/fleet';
                                            if (cmd.includes('Article')) window.location.href = '/portal/admin/blog';
                                            setIsCommandOpen(false);
                                        }}
                                        className="w-full text-left px-5 py-3 rounded-2xl hover:bg-[#a1dc84] hover:text-slate-900 transition-all flex items-center justify-between group"
                                    >
                                        <span className="text-sm font-bold">{cmd}</span>
                                        <span className="material-symbols-outlined !text-xl opacity-0 group-hover:opacity-100">arrow_forward_ios</span>
                                    </button>
                                ))}
                                {commandInput && commandResults.length === 0 && (
                                    <p className="p-4 text-xs font-bold text-slate-500 italic">No node matches command sequence.</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tactical Sidebar */}
            <aside className="hidden lg:flex w-72 flex-col bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-white/5 shrink-0">
                <div className="p-8 border-b border-slate-50 dark:border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="size-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 p-2.5">
                            <img src="/images/mubraiz-logo.svg" alt="Mubraiz" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-xs font-black text-slate-900 dark:text-white tracking-widest uppercase italic">MUBRAIZ</h2>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">EXECUTIVE SYSTEM v5</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-6 py-10 space-y-2 overflow-y-auto custom-scrollbar">
                    {filteredNav.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-4 px-6 py-4 rounded-[1.5rem] transition-all group border ${isActive(item.href)
                                ? 'bg-[#a1dc84] text-slate-900 shadow-xl shadow-[#a1dc84]/20 border-[#a1dc84]'
                                : 'text-slate-400 border-transparent hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white hover:border-slate-100 dark:hover:border-white/5'}`}
                        >
                            <span className={`material-symbols-outlined !text-2xl ${isActive(item.href) ? 'text-slate-900' : 'group-hover:text-slate-900 dark:group-hover:text-white'}`}>{item.icon}</span>
                            <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                    <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-slate-900 text-[#a1dc84] flex items-center justify-center font-black text-xs">SA</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-black text-slate-900 dark:text-white truncate uppercase italic tracking-tighter">{user?.fullName || "Super Admin"}</p>
                            <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest leading-none">Role: {role.replace('_', ' ')}</p>
                        </div>
                        <SignOutButton>
                            <button className="material-symbols-outlined text-slate-300 hover:text-red-500 transition-colors cursor-pointer">logout</button>
                        </SignOutButton>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-[#020617]">
                <header className="h-20 shrink-0 flex items-center justify-between px-10 border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl z-20">
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex flex-col">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Corridor</p>
                            <p className="text-[11px] font-black text-[#a1dc84] uppercase italic tracking-tighter">INTERNAL COMMAND SYSTEM v5.0</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col text-right">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Network Synchronicity</p>
                            <div className="flex items-center gap-2 justify-end">
                                <span className="text-xs font-black text-slate-900 dark:text-white italic tracking-tighter">99.98% OPTIMAL</span>
                                <span className="size-2 bg-[#a1dc84] rounded-full animate-ping"></span>
                            </div>
                        </div>
                        <div className="size-px h-8 bg-slate-100 dark:bg-white/5" />
                        <button
                            onClick={() => setIsCommandOpen(true)}
                            className="hidden sm:flex items-center gap-3 px-6 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group"
                        >
                            <span className="material-symbols-outlined !text-xl group-hover:scale-110 transition-transform">terminal</span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Unified Command (⌘K)</span>
                        </button>
                        <button className="relative size-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-500 hover:text-[#a1dc84] border border-slate-100 dark:border-white/5 transition-all">
                            <span className="material-symbols-outlined !text-2xl">notifications</span>
                            <span className="absolute top-3 right-3 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-950"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
