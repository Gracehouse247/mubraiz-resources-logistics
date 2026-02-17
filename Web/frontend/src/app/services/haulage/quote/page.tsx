"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HaulageQuotePage() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        vector: '',
        origin: '',
        destination: '',
        company: '',
        email: '',
        notes: ''
    });

    const containerTypes = [
        { id: "20ft", name: "20FT Standard", desc: "Standard dry cargo unit", icon: "inventory_2" },
        { id: "40ft", name: "40FT Standard", desc: "High-volume cargo vector", icon: "inventory_2" },
        { id: "40hc", name: "40FT High-Cube", desc: "Extended height capacity", icon: "inventory_2" },
        { id: "flatbed", name: "Flat-Bed", desc: "Specialized oversized cargo", icon: "conveyor_belt" },
        { id: "lowbed", name: "Low-Bed", desc: "Heavy machinery transport", icon: "agriculture" },
    ];

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.company,
                    email: formData.email,
                    cargoType: formData.vector,
                    origin: formData.origin,
                    destination: formData.destination,
                    details: formData.notes
                })
            });
            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('Quote request submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0a0f1a] flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#a1dc84]/5 rounded-full blur-[120px] -mt-[200px]"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-3xl w-full bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-20 text-center border border-slate-100 dark:border-white/5 shadow-2xl relative z-10"
                >
                    <div className="size-24 rounded-[2rem] bg-[#a1dc84] text-slate-900 flex items-center justify-center mx-auto mb-12 shadow-[0_30px_60px_rgba(161,220,132,0.3)]">
                        <span className="material-symbols-outlined !text-5xl animate-pulse">check_circle</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-none">
                        Quote Request <span className="text-[#a1dc84]">Dispatched.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                        Your corridor parameters have been synced with our optimization engine. A senior logistics analyst will review your <span className="text-slate-900 dark:text-white font-bold">{formData.origin} to {formData.destination}</span> route within 2 operational hours.
                    </p>

                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[3rem] p-10 text-left mb-12 space-y-8">
                        <div className="flex justify-between items-center pb-8 border-b border-slate-200 dark:border-white/10">
                            <div>
                                <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.3em] block mb-2">Protocol Reference</span>
                                <span className="text-2xl font-black text-slate-900 dark:text-white font-mono uppercase tracking-tighter">#TRZ-QT-{(Math.random() * 9000).toFixed(0)}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-white/5 shadow-sm">
                                <span className="size-2 bg-[#a1dc84] rounded-full animate-ping"></span>
                                <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Processing Intelligence</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Asset Vector</span>
                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase">{formData.vector || 'Standard'}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Navigation Origin</span>
                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase truncate">{formData.origin}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Navigation Target</span>
                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase truncate">{formData.destination}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="/services/haulage" className="flex-1 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:brightness-110 transition-all flex items-center justify-center gap-3">
                            Back to Haulage
                        </Link>
                        <button onClick={() => window.print()} className="flex-1 py-6 border-2 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined !text-xl">download_for_offline</span>
                            Download Brief
                        </button>
                    </div>
                </motion.div>

                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(90deg,transparent_20%,#a1dc84_20.1%,#a1dc84_20.2%,transparent_20.3%),linear-gradient(0deg,transparent_20%,#a1dc84_20.1%,#a1dc84_20.2%,transparent_20.3%)] bg-[size:80px_80px]"></div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
            {/* Header / Breadcrumbs */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                        <Link href="/" className="text-slate-400 hover:text-[#a1dc84] transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 !text-sm">chevron_right</span>
                        <Link href="/services/haulage" className="text-slate-400 hover:text-[#a1dc84] transition-colors">Executive Haulage</Link>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 !text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Quote Request Protocol</span>
                    </div>
                </div>
            </div>

            <section className="py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <span className="bg-[#a1dc84]/10 text-[#a1dc84] px-6 py-2 rounded-full font-black tracking-[0.4em] text-[10px] uppercase mb-8 inline-block shadow-sm">Transit Optimization</span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
                            Scale Your <span className="text-[#a1dc84]">Haulage</span> <br /> Capabilities.
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-xl max-w-3xl mx-auto leading-relaxed">
                            Provide your corridor intelligence below. Our engine will calculate the optimal transit vector for your port-to-door requirements.
                        </p>
                    </motion.div>

                    <div className="bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-3xl overflow-hidden relative">
                        {loading && (
                            <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-slate-900 dark:text-white text-center p-10">
                                <div className="relative">
                                    <div className="size-24 border-4 border-[#a1dc84]/10 border-t-[#a1dc84] rounded-full animate-spin"></div>
                                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-3xl text-[#a1dc84] animate-pulse">analytics</span>
                                </div>
                                <h3 className="mt-10 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Optimizing Corridor Logistics...</h3>
                                <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-widest max-w-[200px] leading-relaxed">Calculations include fuel hedging, toll analytics, and port protocols.</p>
                            </div>
                        )}

                        <div className="p-8 md:p-20">
                            {/* Step Indicator */}
                            <div className="flex gap-4 mb-20">
                                {[1, 2, 3, 4].map((s) => (
                                    <div key={s} className="flex-1 h-3 rounded-full bg-slate-50 dark:bg-white/5 overflow-hidden">
                                        <motion.div
                                            initial={false}
                                            animate={{ width: step >= s ? '100%' : '0%' }}
                                            className="h-full bg-[#a1dc84] shadow-[0_0_20px_rgba(161,220,132,0.4)] shadow-inner"
                                        ></motion.div>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-12">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest block mb-4">Phase 01</span>
                                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Cargo Vector</h3>
                                                </div>
                                                <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Asset Integrity</span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {containerTypes.map((type) => (
                                                    <button
                                                        key={type.id}
                                                        type="button"
                                                        onClick={() => { setFormData({ ...formData, vector: type.name }); handleNext(); }}
                                                        className={`p-10 rounded-[2.5rem] border-2 transition-all text-left flex flex-col group relative overflow-hidden ${formData.vector === type.name ? 'border-[#a1dc84] bg-[#a1dc84]/5 shadow-xl' : 'border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] hover:border-[#a1dc84]/30'}`}
                                                    >
                                                        <span className={`material-symbols-outlined !text-4xl mb-6 transition-colors ${formData.vector === type.name ? 'text-[#a1dc84]' : 'text-slate-300 dark:text-slate-700 group-hover:text-[#a1dc84]'}`}>{type.icon}</span>
                                                        <span className="font-black text-slate-900 dark:text-white block text-lg mb-2 uppercase tracking-tight">{type.name}</span>
                                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{type.desc}</p>
                                                        <span className="material-symbols-outlined absolute top-10 right-10 !text-xl text-[#a1dc84] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-12">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest block mb-4">Phase 02</span>
                                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Navigation Corridor</h3>
                                                </div>
                                                <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Route Metrics</span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-3 group">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-6 group-focus-within:text-[#a1dc84] transition-colors">Port of Pickup / Origin</label>
                                                    <div className="relative">
                                                        <span className="material-symbols-outlined absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 group-focus-within:text-[#a1dc84]">location_on</span>
                                                        <input required type="text" value={formData.origin} onChange={(e) => setFormData({ ...formData, origin: e.target.value })} placeholder="Apapa, Tincan, Onne..." className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2rem] pl-20 pr-10 py-8 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 transition-all font-secondary" />
                                                    </div>
                                                </div>
                                                <div className="space-y-3 group">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-6 group-focus-within:text-[#a1dc84] transition-colors">Target Delivery Point</label>
                                                    <div className="relative">
                                                        <span className="material-symbols-outlined absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700 group-focus-within:text-[#a1dc84]">local_shipping</span>
                                                        <input required type="text" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} placeholder="Warehouse address / Yard..." className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2rem] pl-20 pr-10 py-8 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 transition-all font-secondary" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-12 flex gap-6">
                                                <button type="button" onClick={handleBack} className="px-12 py-6 bg-slate-50 dark:bg-white/5 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all">Previous</button>
                                                <button type="button" onClick={handleNext} disabled={!formData.origin || !formData.destination} className="flex-1 py-7 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] rounded-[2rem] hover:brightness-110 shadow-2xl transition-all disabled:opacity-50 disabled:grayscale">Continue Corridor Configuration</button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-12">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest block mb-4">Phase 03</span>
                                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Entity Identity</h3>
                                                </div>
                                                <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Stakeholder Intelligence</span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-3 group">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-6 group-focus-within:text-[#a1dc84] transition-colors">Corporate Entity Name</label>
                                                    <input required type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Mubraiz Logistics etc." className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2rem] px-10 py-8 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 transition-all font-secondary" />
                                                </div>
                                                <div className="space-y-3 group">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-6 group-focus-within:text-[#a1dc84] transition-colors">Business Intelligence Email</label>
                                                    <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="dispatch@domain.com" className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2rem] px-10 py-8 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 transition-all font-secondary" />
                                                </div>
                                            </div>

                                            <div className="space-y-3 group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-6 group-focus-within:text-[#a1dc84] transition-colors">Special Transit Requirements / Technical Notes</label>
                                                <textarea rows={5} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Provide cargo specifications, weight limits, or security protocols..." className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2.5rem] px-10 py-10 text-slate-900 dark:text-white font-bold outline-none focus:ring-4 focus:ring-[#a1dc84]/10 transition-all font-secondary resize-none"></textarea>
                                            </div>

                                            <div className="pt-12 flex gap-6">
                                                <button type="button" onClick={handleBack} className="px-12 py-6 bg-slate-50 dark:bg-white/5 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all">Previous</button>
                                                <button type="button" onClick={handleNext} disabled={!formData.company || !formData.email} className="flex-1 py-7 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] rounded-[2rem] hover:brightness-110 shadow-2xl transition-all disabled:opacity-50 disabled:grayscale">Verify Intelligence Summary</button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 4 && (
                                        <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-12">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest block mb-4">Phase 04</span>
                                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Review & Dispatch</h3>
                                                </div>
                                                <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Final Audit</span>
                                            </div>

                                            <div className="grid gap-6">
                                                {[
                                                    { label: 'Cargo Vector', value: formData.vector },
                                                    { label: 'Transport Corridor', value: `${formData.origin} → ${formData.destination}` },
                                                    { label: 'Corporate Entity', value: formData.company },
                                                    { label: 'Contact Node', value: formData.email }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex justify-between items-center p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-3xl">
                                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                                                        <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-12 flex gap-6">
                                                <button type="button" onClick={handleBack} className="px-12 py-6 bg-slate-50 dark:bg-white/5 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all">Modify Request</button>
                                                <button type="submit" className="flex-1 py-8 bg-[#a1dc84] text-slate-900 font-black uppercase tracking-[0.4em] text-[10px] rounded-[2.5rem] shadow-2xl shadow-[#a1dc84]/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-4">
                                                    Execute Quote Protocol
                                                    <span className="material-symbols-outlined !text-xl">send_and_archive</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -right-[15%] size-[600px] bg-[#a1dc84]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -left-[15%] size-[600px] bg-slate-900/5 rounded-full blur-[120px] pointer-events-none"></div>
            </section>
        </main>
    );
}

