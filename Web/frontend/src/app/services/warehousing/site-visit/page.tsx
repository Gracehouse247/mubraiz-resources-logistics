"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SiteVisitPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: 'Morning (09:00 - 12:00)',
        objective: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/site-visit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    preferredDate: `${formData.date} ${formData.time}`,
                    requirements: formData.objective
                })
            });
            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Site visit request submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a1dc84]/5 rounded-full blur-[120px] -mt-[200px]"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center border border-slate-100 dark:border-[#a1dc84]/10 shadow-2xl relative z-10"
                >
                    <div className="size-24 rounded-3xl bg-[#a1dc84] text-slate-900 flex items-center justify-center mx-auto mb-10 shadow-[0_20px_40px_rgba(161,220,132,0.3)]">
                        <span className="material-symbols-outlined !text-5xl animate-pulse">security</span>
                    </div>

                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
                        Clearance <span className="text-[#a1dc84]">Initiated.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-10 leading-relaxed">
                        Your facility access request has been logged. Our security dispatch is now coordinating with the site supervisor for your visit on <span className="text-slate-900 dark:text-white font-bold">{formData.date || 'the selected date'}</span>.
                    </p>

                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-3xl p-8 text-left mb-10 space-y-6">
                        <div className="flex justify-between items-center pb-6 border-b border-slate-200 dark:border-white/10">
                            <div>
                                <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest block mb-1">Pass Reference</span>
                                <span className="text-xl font-black text-slate-900 dark:text-white font-mono uppercase">VIS-{(Math.random() * 10000).toFixed(0)}-SEC</span>
                            </div>
                            <span className="material-symbols-outlined text-[#a1dc84] !text-4xl">qr_code_2</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Visitor Identity</span>
                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase">{formData.name || 'Site Guest'}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Temporal Window</span>
                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase">{formData.time}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                            <h4 className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined !text-sm">warning</span>
                                Mandatory Safety Protocol
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {['Photo ID Required', 'Hard Hats Provided', 'Closed-Toe Shoes', 'Safety Vest Mandatory'].map((item, i) => (
                                    <li key={i} className="text-[10px] text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                                        <span className="size-1 bg-[#a1dc84] rounded-full"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/services/warehousing" className="flex-1 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:brightness-110 transition-all">
                            Back to Overview
                        </Link>
                        <button onClick={() => window.print()} className="flex-1 py-5 border-2 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined !text-sm">download</span>
                            Visitor Pass (PDF)
                        </button>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
            {/* Header / Breadcrumbs */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                        <Link href="/" className="text-slate-400 hover:text-[#a1dc84] transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 !text-sm">chevron_right</span>
                        <Link href="/services/warehousing" className="text-slate-400 hover:text-[#a1dc84] transition-colors">Warehousing</Link>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 !text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Site Audit Access</span>
                    </div>
                </div>
            </div>

            <section className="py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-6 py-2 rounded-full font-black tracking-[0.3em] text-[10px] uppercase mb-8 inline-block shadow-sm">Facility Integration</span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none">
                            Experience <span className="text-[#a1dc84]">Operational</span> <br /> Excellence.
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-xl max-w-3xl mx-auto leading-relaxed">
                            Schedule an authorized physical audit of our state-of-the-art facilities. Witness the convergence of high-capacity logistics and technical precision.
                        </p>
                    </motion.div>

                    <div className="bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.05)] dark:shadow-none overflow-hidden relative">
                        {loading && (
                            <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-slate-900 dark:text-white">
                                <div className="relative">
                                    <div className="size-24 border-4 border-[#a1dc84]/20 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-3xl text-[#a1dc84]">verified_user</span>
                                </div>
                                <h3 className="mt-8 text-sm font-black uppercase tracking-[0.4em] animate-pulse">Syncing Security Matrix...</h3>
                            </div>
                        )}

                        <div className="p-10 md:p-20">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-4 group-focus-within:text-[#a1dc84] transition-colors">Visitor Full Name</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 transition-colors group-focus-within:text-[#a1dc84]">person</span>
                                            <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full legal name" className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl pl-16 pr-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84]/50 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-4 group-focus-within:text-[#a1dc84] transition-colors">Professional Email</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 transition-colors group-focus-within:text-[#a1dc84]">alternate_email</span>
                                            <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="company@entity.com" className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl pl-16 pr-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84]/50 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-4 group-focus-within:text-[#a1dc84] transition-colors">Proposed Access Date</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 transition-colors group-focus-within:text-[#a1dc84]">calendar_today</span>
                                            <input required type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl pl-16 pr-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84]/50 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-3 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-4 group-focus-within:text-[#a1dc84] transition-colors">Temporal Window</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 transition-colors group-focus-within:text-[#a1dc84]">schedule</span>
                                            <select value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl pl-16 pr-8 py-6 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84]/50 transition-all appearance-none cursor-pointer">
                                                <option>Morning (09:00 - 12:00)</option>
                                                <option>Afternoon (13:00 - 16:00)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-4 group-focus-within:text-[#a1dc84] transition-colors">Audit Objective</label>
                                    <textarea rows={5} value={formData.objective} onChange={(e) => setFormData({ ...formData, objective: e.target.value })} placeholder="Describe your inspection requirements or compliance checklists..." className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2.5rem] px-8 py-8 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 focus:border-[#a1dc84]/50 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"></textarea>
                                </div>

                                <div className="pt-10">
                                    <button type="submit" className="w-full bg-[#a1dc84] text-slate-950 font-black uppercase tracking-[0.3em] text-xs py-8 rounded-[2.5rem] shadow-2xl shadow-[#a1dc84]/20 hover:scale-[1.01] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-4">
                                        Initiate Access Protocol <span className="material-symbols-outlined !text-xl">shield_with_heart</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-[20%] -right-[15%] size-[600px] bg-[#a1dc84]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[20%] -left-[15%] size-[600px] bg-slate-900/10 dark:bg-[#a1dc84]/5 rounded-full blur-[120px] pointer-events-none"></div>

                {/* Tech Lines Decoration */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(90deg,transparent_20%,#a1dc84_20.1%,#a1dc84_20.2%,transparent_20.3%),linear-gradient(0deg,transparent_20%,#a1dc84_20.1%,#a1dc84_20.2%,transparent_20.3%)] bg-[size:100px_100px]"></div>
            </section>
        </main>
    );
}

