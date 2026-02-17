"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WarehouseSpecsPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
            {/* Desktop Print Controls (Hidden on Print) */}
            <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <Link href="/services/warehousing" className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined !text-sm">arrow_back</span>
                    Back to Services
                </Link>
                <div className="flex gap-4">
                    <button
                        onClick={handlePrint}
                        className="bg-[#a1dc84] text-slate-900 px-8 py-4 rounded-lg font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl hover:scale-105 transition-all"
                    >
                        <span className="material-symbols-outlined">archive</span>
                        Generate Branded PDF
                    </button>
                </div>
            </div>

            {/* The Document Container */}
            <div id="printable-doc" className="max-w-5xl mx-auto bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-slate-100 print:shadow-none print:rounded-none print:border-none">

                {/* Cover Section */}
                <div className="bg-slate-900 text-white p-16 md:p-24 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-10 w-2 bg-[#a1dc84]"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Official Infrastructure Standards</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none font-primary">
                            Technical <br />
                            <span className="text-[#a1dc84]">Specifications Guide</span>
                        </h1>
                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-xl">
                            A world-class overview of Mubraiz Resources Ltd's logistics infrastructure, capacity, asset tracking ecosystems, and security protocols.
                        </p>
                    </div>
                    {/* Branded Icon Watermark */}
                    <span className="material-symbols-outlined absolute -bottom-20 -right-20 text-white/5 !text-[500px] pointer-events-none">architecture</span>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#a1dc84]/10 to-transparent"></div>
                </div>

                {/* Section 01: Core Infrastructure */}
                <div className="p-16 md:p-20">
                    <div className="grid md:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4 font-primary tracking-tighter">
                                <span className="size-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 text-lg font-sans">01</span>
                                Facility Architecture
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed mb-10">
                                Mubraiz Hub-X is designed for rapid-deployment logistics. Engineered with high-tensile steel racking and advanced thermal insulation for pharmaceutical and specialized cargo.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: "Total Asset Footprint", value: "100,000 SQ FT (Certified)" },
                                    { label: "Racking Elevation", value: "14 METERS (Tier 5)" },
                                    { label: "Floor Integrity", value: "8,000 KG / SQ M (Anti-Static)" },
                                    { label: "Climate Control", value: "Ambient, Chilled, Deep Frozen" }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                                        <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 relative overflow-hidden group">
                            <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight relative z-10 font-primary">Security Matrix</h3>
                            <div className="space-y-8 relative z-10">
                                {[
                                    { icon: "verified_user", title: "Biometric Gates", desc: "Multi-layered authentication for sensitive asset zones." },
                                    { icon: "videocam", title: "CCTV Ecosystem", desc: "4K telemetry monitoring with 90-day archive." },
                                    { icon: "emergency_heat", title: "Thermal Sensors", desc: "Real-time heat-mapping for cold-chain integrity." },
                                    { icon: "shield", title: "Global Compliance", desc: "TAPA and ISO 28000 Security Management." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="size-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#a1dc84] group-hover:bg-[#a1dc84] group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-sm mb-1 font-primary tracking-tighter">{item.title}</h4>
                                            <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* High-End Technical Visual */}
                <div className="px-16 md:px-20 pb-20">
                    <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden bg-slate-900 border-8 border-slate-50 group">
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                            alt="Facility Technical Layout"
                            fill
                            className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10 flex items-center gap-4">
                            <span className="bg-[#a1dc84] text-slate-900 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Live Audit View</span>
                            <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest hidden md:block">Reference ID: MR-WHS-104</span>
                        </div>
                    </div>
                </div>

                {/* Section 02: Digital Core */}
                <div className="bg-slate-50 p-16 md:p-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4 font-primary tracking-tighter">
                        <span className="size-10 bg-white rounded-xl flex items-center justify-center text-slate-900 text-lg font-sans">02</span>
                        Asset Tracking Core
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Proprietary WMS", desc: "Our Next-Gen WMS provides real-time SKU movement data directly to your client portal.", icon: "cloud_done" },
                            { title: "RFID Scanning", desc: "Automated gate-passing and inventory cycle-counting with 100% data fidelity.", icon: "sensors" },
                            { title: "Unified API", desc: "Seamless integration with your SAP, Oracle, or internal ERP ecosystems.", icon: "integration_instructions" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-4xl mb-6">{item.icon}</span>
                                <h4 className="text-lg font-black text-slate-900 mb-4 font-primary tracking-tighter">{item.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Branded Document Footer */}
                <div className="p-16 text-center border-t border-slate-100">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-slate-900 mb-8">
                        <div className="text-center">
                            <span className="block text-[8px] font-black text-slate-400 uppercase mb-1">Corporate Office</span>
                            <span className="text-xs font-black">Lagos | Port Harcourt</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[8px] font-black text-slate-400 uppercase mb-1">Digital Access</span>
                            <span className="text-xs font-black">mubraizresourcesltd.com</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[8px] font-black text-slate-400 uppercase mb-1">Authorization</span>
                            <span className="text-[10px] font-black text-[#a1dc84]">LEVEL 4 VERIFIED</span>
                        </div>
                    </div>
                    <p className="text-[8px] font-medium text-slate-300 uppercase tracking-[0.4em]">Confidential Business Infrastructure Guide • 2024</p>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    @page { margin: 0; size: A4; }
                    body { margin: 0; background: white; -webkit-print-color-adjust: exact; }
                    .print-hidden, nav, footer { display: none !important; }
                    #printable-doc { border-radius: 0 !important; border: none !important; margin: 0 !important; width: 100% !important; max-width: none !important; }
                }
            `}</style>
        </main>
    );
}

