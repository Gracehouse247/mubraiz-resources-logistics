"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        serviceType: "General Inquiry",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: "", email: "", serviceType: "General Inquiry", message: "" });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <main className="w-full bg-white">
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-6 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="max-w-md space-y-6"
                        >
                            <div className="size-24 rounded-full bg-[#a1dc84]/10 flex items-center justify-center mx-auto mb-8">
                                <span className="material-symbols-outlined text-[#a1dc84] text-5xl font-black">check_circle</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight font-primary">Message Dispatched</h2>
                            <p className="text-slate-500 font-medium">Your inquiry has been encrypted and sent to our global logistics team. We typically respond within 12 business hours.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section: Heading, Form & Map */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Heading & Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-[#a1dc84] font-black tracking-widest text-xs uppercase bg-[#a1dc84]/10 px-3 py-1 rounded-full">
                                Contact Us
                            </span>
                            <h1 className="text-slate-900 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary">
                                Get in <span className="text-[#a1dc84]">Touch</span>
                            </h1>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed font-secondary max-w-lg">
                                Connecting your business to the world through our global logistics ecosystem. Reach out to our team of experts today.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#a1dc84]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#a1dc84]/20 transition-all duration-700"></div>

                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-900 text-sm font-bold">Full Name</span>
                                    <input
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#a1dc84] focus:border-transparent px-4 py-3 outline-none transition-all font-medium text-slate-800"
                                        placeholder="John Doe"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-900 text-sm font-bold">Email Address</span>
                                    <input
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#a1dc84] focus:border-transparent px-4 py-3 outline-none transition-all font-medium text-slate-800"
                                        placeholder="john@example.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col gap-2 relative z-10">
                                <span className="text-slate-900 text-sm font-bold">Service Type</span>
                                <div className="relative">
                                    <select
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#a1dc84] focus:border-transparent px-4 py-3 outline-none transition-all font-medium text-slate-800 appearance-none cursor-pointer"
                                        value={formData.serviceType}
                                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Fleet Transport</option>
                                        <option>Container Haulage</option>
                                        <option>Warehousing</option>
                                        <option>Customs Clearance</option>
                                        <option>Procurement & Supply Chain</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xl">expand_more</span>
                                </div>
                            </label>

                            <label className="flex flex-col gap-2 relative z-10">
                                <span className="text-slate-900 text-sm font-bold">Message</span>
                                <textarea
                                    required
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#a1dc84] focus:border-transparent px-4 py-3 resize-none outline-none transition-all font-medium text-slate-800"
                                    placeholder="How can our logistics team help you?"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </label>

                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-[#a1dc84] hover:bg-[#8bc76d] text-slate-900 font-black px-8 py-4 rounded-lg transition-all shadow-lg shadow-[#a1dc84]/20 hover:shadow-[#a1dc84]/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 relative z-10 disabled:opacity-50"
                                type="submit"
                            >
                                {status === 'loading' ? (
                                    <span className="animate-pulse">Dispatching...</span>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined font-bold">send</span>
                                        Send Message
                                    </>
                                )}
                            </button>
                            {status === 'error' && <p className="text-red-500 text-xs font-bold uppercase text-center mt-2">Network Error. Please try again.</p>}
                        </form>
                    </motion.div>

                    {/* Right: Global Map Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-full min-h-[500px] flex flex-col justify-center"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
                            <Image
                                alt="World map"
                                className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvsN98Fuu8e3z32GAgh0RY9zp6sZNK_sw2JORKZUR5rRKJQPQ96JIPHS8cqnTm566olZKRzkyhx-7q1oV7Ug1emHq4NISJUYVRWMkvfzhmyW9ephN7OJMP5OBy0-pmplPZo-z8zUgtWsw8jcA57BIUcnscdYbhJhkLG6BnFPouUqxPnte-ydp5lC7dpkaSTNhPfQXuOMzkf-l_-OibzoL5cxoaKlmUUOiiZMU-WHddgxqtHHdetu-8fVEy3gXsa01fw6WJgI6Q9sQ"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                            {/* Map Points */}
                            {[
                                { top: "48%", left: "53%", label: "Lagos HQ", sub: "Ajao Estate, Lagos", active: true }
                            ].map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (idx * 0.2), type: "spring" }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 group/point cursor-pointer"
                                    style={{ top: point.top, left: point.left }}
                                >
                                    <div className="relative">
                                        {point.active && <div className="absolute -inset-3 bg-[#a1dc84]/40 rounded-full animate-ping"></div>}
                                        <div className={`relative p-2 rounded-full border-2 border-white shadow-lg transition-transform group-hover/point:scale-110 ${point.active ? 'bg-[#a1dc84]' : 'bg-slate-700'}`}>
                                            <span className="material-symbols-outlined text-white text-xs block">location_on</span>
                                        </div>

                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/point:opacity-100 transition-all duration-300 translate-y-2 group-hover/point:translate-y-0 w-max pointer-events-none z-20">
                                            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 text-center">
                                                <p className="font-bold text-sm text-slate-900">{point.label}</p>
                                                {point.sub && <p className="text-[10px] uppercase font-bold text-[#a1dc84] tracking-wider">{point.sub}</p>}
                                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/90 rotate-45"></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 flex gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                                <span className="w-3 h-3 rounded-full bg-[#a1dc84] shadow-[0_0_10px_#a1dc84]"></span>
                                <span className="text-sm font-bold text-slate-600">Global HQ</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Global Office Directory */}
            <section className="bg-slate-50 py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center md:text-left">
                        <span className="text-[#a1dc84] font-black tracking-widest text-xs uppercase mb-4 block">Our Presence</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-primary tracking-tighter">National Office Directory</h2>
                        <p className="text-slate-600 text-lg max-w-2xl font-medium">Our physical presence ensures your cargo is monitored at every critical junction of the supply chain.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Lagos HQ */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-[#a1dc84]/10 rounded-2xl group-hover:bg-[#a1dc84] transition-colors duration-300">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-3xl group-hover:text-white transition-colors">corporate_fare</span>
                                </div>
                                <span className="bg-[#a1dc84]/10 text-[#a1dc84] text-[10px] uppercase font-black px-3 py-1.5 rounded-full tracking-wider">Headquarters</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Lagos, Nigeria</h3>
                            <div className="space-y-5 text-sm font-medium">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl mt-0.5">location_on</span>
                                    <p className="text-slate-600 leading-relaxed">12 Solo Amahotul Street, behind Parklane Hotel, Elangaza bus stop, Ajao estate, Lagos, Nigeria</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">call</span>
                                    <p className="text-slate-600">+(234) 0813 482 2126</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">mail</span>
                                    <p className="text-slate-600">info@mubraizresourcesltd.com</p>
                                </div>
                            </div>
                            <a href="mailto:info@mubraizresourcesltd.com" className="mt-8 w-full border border-slate-200 hover:border-[#a1dc84] hover:bg-[#a1dc84] text-slate-900 font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group/btn">
                                <span className="material-symbols-outlined group-hover/btn:text-white transition-colors">mail</span>
                                <span className="group-hover/btn:text-white transition-colors">Direct Email</span>
                            </a>
                        </motion.div>
                        {/* Delta State Office */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-[#a1dc84]/10 rounded-2xl group-hover:bg-[#a1dc84] transition-colors duration-300">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-3xl group-hover:text-white transition-colors">location_city</span>
                                </div>
                                <span className="bg-[#a1dc84]/10 text-[#a1dc84] text-[10px] uppercase font-black px-3 py-1.5 rounded-full tracking-wider">Regional Hub</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Delta State, Nigeria</h3>
                            <div className="space-y-5 text-sm font-medium">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl mt-0.5">location_on</span>
                                    <p className="text-slate-600 leading-relaxed">Strategic Operations Center, Regional Logistics Node, Delta State, Nigeria.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">call</span>
                                    <p className="text-slate-600">+(234) 0813 482 2126</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">mail</span>
                                    <p className="text-slate-600">info@mubraizresourcesltd.com</p>
                                </div>
                            </div>
                            <a href="mailto:info@mubraizresourcesltd.com" className="mt-8 w-full border border-slate-200 hover:border-[#a1dc84] hover:bg-[#a1dc84] text-slate-900 font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group/btn">
                                <span className="material-symbols-outlined group-hover/btn:text-white transition-colors">mail</span>
                                <span className="group-hover/btn:text-white transition-colors">Direct Email</span>
                            </a>
                        </motion.div>

                        {/* Abuja Office */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-[#a1dc84]/10 rounded-2xl group-hover:bg-[#a1dc84] transition-colors duration-300">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-3xl group-hover:text-white transition-colors">account_balance</span>
                                </div>
                                <span className="bg-[#a1dc84]/10 text-[#a1dc84] text-[10px] uppercase font-black px-3 py-1.5 rounded-full tracking-wider">Regional Hub</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Port Harcourt Office, Nigeria</h3>
                            <div className="space-y-5 text-sm font-medium">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl mt-0.5">location_on</span>
                                    <p className="text-slate-600 leading-relaxed">27, igwuruta/Airport Road Port Harcourt Rivers State.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">call</span>
                                    <p className="text-slate-600">+(234) 0813 482 2126</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-[#a1dc84] text-xl">mail</span>
                                    <p className="text-slate-600">info@mubraizresourcesltd.com</p>
                                </div>
                            </div>
                            <a href="mailto:info@mubraizresourcesltd.com" className="mt-8 w-full border border-slate-200 hover:border-[#a1dc84] hover:bg-[#a1dc84] text-slate-900 font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group/btn">
                                <span className="material-symbols-outlined group-hover/btn:text-white transition-colors">mail</span>
                                <span className="group-hover/btn:text-white transition-colors">Direct Email</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 24/7 Emergency Logistics Support Banner */}
            <section className="bg-[#a1dc84] py-12 border-y-4 border-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 rounded-full bg-slate-900 flex items-center justify-center shadow-xl">
                            <span className="material-symbols-outlined text-[#a1dc84] text-4xl font-black">emergency_share</span>
                        </div>
                        <div>
                            <h2 className="text-slate-900 text-3xl font-black tracking-tighter leading-none mb-1 font-primary">24/7 Emergency Support</h2>
                            <p className="text-slate-900 font-bold uppercase text-xs tracking-[0.2em] opacity-80">Mubraiz Resources Limited.d</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                        <div className="text-center md:text-right hidden md:block">
                            <p className="text-slate-900 text-xs font-black uppercase tracking-widest mb-1">Immediate Response Line</p>
                            <p className="text-slate-900 text-4xl font-black tabular-nums tracking-tight">+(234) 813 482 2126</p>
                        </div>
                        <a
                            className="w-full md:w-auto bg-slate-900 text-white font-black px-8 py-4 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl hover:shadow-slate-900/50"
                            href="tel:+2348134822126"
                        >
                            <span className="material-symbols-outlined animate-pulse">phone_in_talk</span>
                            CALL NOW
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

