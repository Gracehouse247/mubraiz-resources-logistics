"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AuthGateway() {
    return (
        <div className="bg-[#f6f8f6] dark:bg-[#152210] font-sans text-[#111b0d] dark:text-white transition-colors duration-300 min-h-screen">
            <div className="flex min-h-screen w-full flex-col lg:flex-row">
                {/* Left Side: Hero Image & Branding */}
                <div
                    className="relative hidden lg:flex lg:w-1/2 xl:w-3/5 bg-cover bg-center items-center justify-center p-12 overflow-hidden"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")' }}
                >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

                    <div className="relative z-10 max-w-2xl text-white">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <Link href="/" className="flex items-center gap-3">
                                <div className="bg-[#49ec13] rounded-lg p-2">
                                    <span className="material-symbols-outlined !text-3xl text-[#152210] font-bold">local_shipping</span>
                                </div>
                                <span className="text-2xl font-black tracking-tight">MUBRAIZ</span>
                            </Link>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl xl:text-7xl font-black leading-tight tracking-[-0.033em] mb-6"
                        >
                            Logistics at the <br />
                            <span className="text-[#49ec13]">Speed of Trust</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-lg xl:text-xl font-normal opacity-90 leading-relaxed max-w-lg"
                        >
                            Access the Mubraiz Resources Ltd Global Logistics Ecosystem. Secure, reliable, and integrated fleet management at your fingertips.
                        </motion.p>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="absolute bottom-10 left-12 right-12 flex justify-between items-center z-10 text-white/60 text-sm">
                        <span>© 2024 Mubraiz Resources Ltd.</span>
                        <div className="flex gap-6">
                            <span>Global Operations</span>
                            <span>Fleet Network</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Auth Zone */}
                <div className="flex flex-1 flex-col justify-center items-center bg-white dark:bg-[#152210] px-6 py-12 lg:px-12">
                    <div className="w-full max-w-[480px]">
                        {/* Mobile Branding */}
                        <div className="lg:hidden flex flex-col items-center mb-10">
                            <div className="bg-[#49ec13] rounded-lg p-2 mb-4">
                                <span className="material-symbols-outlined !text-3xl text-[#152210] font-bold">local_shipping</span>
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-[#111b0d] dark:text-white">MUBRAIZ RESOURCES</h2>
                        </div>

                        {/* Header Content */}
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-[#111b0d] dark:text-white mb-2">Welcome Back</h2>
                            <p className="text-slate-500 dark:text-slate-400">Enter your credentials to access the gateway.</p>
                        </div>

                        {/* Tabs */}
                        <div className="mb-8">
                            <div className="flex border-b border-slate-200 dark:border-white/10 gap-8">
                                <button className="flex flex-col items-center justify-center border-b-[3px] border-[#49ec13] text-[#111b0d] dark:text-white pb-[13px] pt-4">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Login</p>
                                </button>
                                <Link href="/auth/register" className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-[#111b0d] dark:hover:text-white pb-[13px] pt-4 transition-colors">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Sign Up</p>
                                </Link>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col">
                                <label className="pb-2">
                                    <p className="text-[#111b0d] dark:text-white text-sm font-semibold leading-normal">Email Address</p>
                                </label>
                                <input
                                    className="flex w-full rounded-lg text-[#111b0d] dark:text-white focus:ring-2 focus:ring-[#49ec13]/50 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a160a] h-14 p-4 text-base font-normal transition-all outline-none"
                                    placeholder="e.g. driver@mubraiz.com"
                                    type="email"
                                />
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-between items-center pb-2">
                                    <label className="text-[#111b0d] dark:text-white text-sm font-semibold leading-normal">Password</label>
                                </div>
                                <div className="relative flex w-full items-stretch rounded-lg">
                                    <input
                                        className="flex w-full rounded-lg text-[#111b0d] dark:text-white focus:ring-2 focus:ring-[#49ec13]/50 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a160a] h-14 p-4 pr-12 text-base font-normal transition-all outline-none"
                                        placeholder="Enter your password"
                                        type="password"
                                    />
                                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 text-slate-400 hover:text-[#49ec13] cursor-pointer transition-colors">
                                        <span className="material-symbols-outlined !text-xl">visibility</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Link href="#" className="text-[#49ec13] text-sm font-medium hover:underline transition-all font-bold">Forgot Password?</Link>
                            </div>

                            <Link
                                href="/portal/client"
                                className="w-full flex items-center justify-center rounded-lg h-14 bg-[#49ec13] text-[#111b0d] text-base font-black tracking-wider hover:brightness-105 active:scale-[0.98] transition-all shadow-xl shadow-[#49ec13]/20"
                            >
                                SECURE LOGIN
                            </Link>
                        </form>

                        {/* Social Auth */}
                        <div className="mt-10">
                            <div className="relative flex items-center mb-6">
                                <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-[10px] uppercase tracking-widest font-black">Or continue with</span>
                                <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 flex items-center justify-center h-12 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a160a] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider">SSO Login</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center h-12 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a160a] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider">Corporate ID</span>
                                </button>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="mt-12 text-center text-[10px] text-slate-400 dark:text-slate-500 flex justify-center gap-6 uppercase font-bold tracking-widest">
                            <Link href="#" className="hover:text-[#49ec13] transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-[#49ec13] transition-colors">Terms of Service</Link>
                            <Link href="#" className="hover:text-[#49ec13] transition-colors">Help Center</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

