"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WarehousingPage() {
    const [briefLoading, setBriefLoading] = useState(false);
    const [briefSubmitted, setBriefSubmitted] = useState(false);
    const [briefData, setBriefData] = useState({ category: '', requirements: '' });

    const handleBriefSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setBriefLoading(true);
        setTimeout(() => {
            setBriefLoading(false);
            setBriefSubmitted(true);
        }, 1600);
    };

    return (
        <main className="w-full bg-white dark:bg-[#0a0f1a] transition-colors duration-500">


            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden bg-slate-950 pt-20 pb-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXh45SYcnbj488sslfPvQWB9iHr_r22xIbWb0R2vc28SD5hayhqpYlQ64naROUJFH4EAnQFNxkQinooh0Dov824Nc9ig53bW5GCfCka3_f3OTW9I4RrhM9pn1TFCRSOdrPnjOedgG-9ZM9sVFiGJQojNsINZXzzpGDWUxvF2nDoDXxD1pVKGZTW2gkxVYxFnu2VGxj-ig8dDPRliQjqsdXtp9lqOi4V7VGfs1ZGfpvGczTD-IkMklE1uLhs6xwqEHZ4dLve5scNY"
                        alt="Advanced Contract Logistics and Warehousing Facility in Nigeria"
                        className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#a1dc84]/10 border border-[#a1dc84]/20 text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-10 backdrop-blur-md shadow-lg shadow-[#a1dc84]/5">
                            <span className="w-2 h-2 rounded-full bg-[#a1dc84] animate-pulse"></span>
                            End-to-End Supply Chain Intelligence
                        </span>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[1.1] font-primary text-white">
                            Contract <br />
                            Logistics <br />
                            <span className="text-[#a1dc84]">& Warehousing.</span>
                        </h1>
                        <p className="text-white/80 text-lg font-medium max-w-3xl mb-14 leading-relaxed border-l-4 border-[#a1dc84] pl-10 font-secondary">
                            Comprehensive warehousing solutions, inventory management, and procurement services engineered for <span className="text-[#a1dc84] font-black uppercase">uncompromising operational scale.</span>
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/services/haulage/quote">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#a1dc84] text-slate-950 px-8 py-4 rounded-lg font-black text-xs uppercase tracking-[0.3em] shadow-3xl shadow-[#a1dc84]/20 transition-all flex items-center gap-4"
                                >
                                    Get A Storage Quote <span className="material-symbols-outlined !text-xl">inventory_2</span>
                                </motion.button>
                            </Link>
                            <Link href="/resources/consultation">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4"
                                >
                                    Consult an Expert <span className="material-symbols-outlined !text-xl">smart_toy</span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] relative z-10 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-32 max-w-4xl mx-auto group">
                        <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">Integrated Logistics Ecosystem</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter font-primary leading-[1.1]">
                            Beyond Simple <span className="text-[#a1dc84]">Storage.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed font-secondary">
                            We transform warehousing from a cost center into a strategic competitive advantage. Our contract logistics services are engineered to optimize your entire value chain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Strategic Warehousing",
                                icon: "warehouse",
                                desc: "Multi-user and dedicated facilities strategically located near key transit nodes. We offer bonded terminals, temperature-controlled zones, and bulk storage configurations.",
                                features: ["Bonded Terminals", "Temp-Control", "Bulk & Rack"]
                            },
                            {
                                title: "Inventory Intelligence",
                                icon: "inventory",
                                desc: "Advanced WMS (Warehouse Management System) providing real-time visibility. We create transparency in your stock levels, reducing carrying costs and preventing stockouts.",
                                features: ["Cycle Counting", "Real-time API", "Expiry Management"]
                            },
                            {
                                title: "Procurement Ops",
                                icon: "shopping_cart_checkout",
                                desc: "End-to-end procurement support tailored to your requirements. We handle sourcing, vendor management, and inbound logistics, ensuring your materials arrive on time.",
                                features: ["Strategic Sourcing", "Vendor Vetting", "PO Management"]
                            },
                            {
                                title: "Order Fulfillment",
                                icon: "package_2",
                                desc: "Rapid pick, pack, and ship operations. Our fulfillment centers are optimized for high-velocity FMCG and retail distribution, ensuring 99.9% order accuracy.",
                                features: ["Kitting & Assembly", "Labeling/Barcoding", "Reverse Logistics"]
                            },
                            {
                                title: "Cross-Docking",
                                icon: "move_up",
                                desc: "Minimize storage costs with our efficient cross-docking solutions. We transfer inbound cargo directly to outbound vehicles, reducing dwell time and accelerating speed-to-market.",
                                features: ["Flow-Through", "Consolidation", "Deconsolidation"]
                            },
                            {
                                title: "Value-Added Hub",
                                icon: "construction",
                                desc: "Customization at the point of distribution. We provide co-packing, bundling, re-branding, and quality control inspections to meet local market needs.",
                                features: ["Co-Packing", "Quality Testing", "Localization"]
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-slate-50 dark:bg-white/[0.02] p-12 rounded-[4rem] border border-slate-100 dark:border-white/5 group hover:border-[#a1dc84]/30 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-3xl transition-all duration-700"
                            >
                                <div className="size-20 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-xl dark:shadow-none shadow-slate-200/50 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all duration-500 mb-10">
                                    <span className="material-symbols-outlined !text-4xl font-black">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-6 font-primary tracking-tight group-hover:text-[#a1dc84] transition-colors">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8 font-secondary">
                                    {service.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-white/5">
                                    {service.features.map((feature, fIdx) => (
                                        <span key={fIdx} className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:border-[#a1dc84]/30 group-hover:text-[#a1dc84] transition-all">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs Section */}
            <section id="facilities" className="py-40 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a1dc84]/5 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-8 block font-primary animate-pulse">Infrastructure Standards</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-10 tracking-tighter font-primary leading-[1.1] text-white">
                                World-Class <br /> <span className="text-[#a1dc84]">Facility</span> Specs.
                            </h2>
                            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 font-secondary max-w-xl">
                                Our facilities are engineered to global standards, ensuring the integrity of your goods whether they are pharmaceuticals, electronics, or industrial equipment.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { icon: "deployed_code", label: "Capacity", value: "100k+", unit: "SQ FT Active" },
                                    { icon: "security", label: "Security", value: "Tier 4", unit: "Surveillance" },
                                    { icon: "thermostat", label: "Climate", value: "Active", unit: "Environmental Control" },
                                    { icon: "local_shipping", label: "Heavy Fleet", value: "150+", unit: "Operational Units" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl group hover:border-[#a1dc84]/30 transition-all duration-500">
                                        <div className="text-[#a1dc84] mb-6 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined !text-4xl">{stat.icon}</span>
                                        </div>
                                        <div className="text-4xl font-black font-display tracking-tighter mb-1 uppercase bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">{stat.value}</div>
                                        <div className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-black">{stat.unit}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="relative aspect-square rounded-[5rem] overflow-hidden border-[12px] border-white/5 shadow-3xl hover:border-[#a1dc84]/20 transition-all duration-1000">
                                <Image
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Warehouse Interior Racking"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-16">
                                    <div className="bg-[#a1dc84] text-slate-950 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.4em] inline-flex items-center gap-3 mb-6 shadow-2xl">
                                        <span className="material-symbols-outlined !text-sm">verified</span>
                                        ISO 9001:2015 Certified
                                    </div>
                                    <p className="font-bold text-white text-lg leading-relaxed max-w-sm uppercase tracking-tight">
                                        Operational excellence guaranteed through rigorous HSE protocols and international quality audits.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 size-40 bg-[#a1dc84]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#a1dc84]/40 transition-all duration-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inventory Tech Section */}
            <section className="py-40 bg-[#f8faf8] dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-32 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="grid gap-8">
                                {[
                                    { title: "Real-Time Visibility", icon: "visibility", desc: "Track your inventory status, locations, and movements in real-time through our secure executive dashboard node." },
                                    { title: "Predictive Analytics", icon: "analytics", desc: "Schedule automated intelligence reports, aging analysis, and demand turnover metrics to drive decision excellence." },
                                    { title: "Zero-Error Protocol", icon: "qr_code_scanner", desc: "Multi-layered barcode and RFID synchronization ensures 100% precision in heavy cargo picking and packing cycles." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 15 }}
                                        className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 flex items-start gap-10 group transition-all duration-500 hover:border-[#a1dc84]/30"
                                    >
                                        <div className="size-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all duration-500 shrink-0 shadow-lg">
                                            <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-3 font-primary tracking-tight group-hover:text-[#a1dc84] transition-colors">{item.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed font-secondary">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-10 block font-primary animate-pulse">Proprietary Technology Hub</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[1.1] font-primary">
                                Precision <br /> <span className="text-[#a1dc84]">Inventory</span> <br /> Architecture.
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12 font-secondary max-w-xl">
                                In modern logistics, information is as critical as the cargo itself. We leverage elite digital twins to ensure absolute control over your global assets.
                            </p>
                            <Link href="/services/customs">
                                <span className="inline-flex items-center gap-3 text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.4em] border-b-2 border-[#a1dc84] pb-2 hover:text-[#a1dc84] transition-all group">
                                    Integration: Customs Intelligence Hub <span className="material-symbols-outlined !text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Functional Facility Audit Section */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-[#a1dc84] dark:bg-[#a1dc84] rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-3xl shadow-[#a1dc84]/20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                        <div className="absolute -top-32 -left-32 size-96 bg-white/30 rounded-full blur-[120px] group-hover:bg-white/40 transition-all duration-1000"></div>

                        <AnimatePresence mode="wait">
                            {briefSubmitted ? (
                                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-2xl mx-auto py-10 text-slate-900">
                                    <div className="size-24 rounded-[2rem] bg-slate-900 text-[#a1dc84] flex items-center justify-center mx-auto mb-12 shadow-2xl">
                                        <span className="material-symbols-outlined !text-5xl">inventory_2</span>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none font-primary text-slate-900">Facility Brief <br /> Dispatched.</h2>
                                    <p className="text-slate-900/70 text-xl font-bold mb-12 font-secondary">
                                        Your strategic requirements for <span className="text-slate-900 font-black">{briefData.category}</span> have been synchronized. An operational architect will contact you within 60 minutes.
                                    </p>
                                    <div className="bg-slate-900/10 px-10 py-5 rounded-2xl border border-slate-900/10 mb-10 inline-block font-mono text-slate-900 text-sm font-black uppercase tracking-widest">
                                        Protocol Node: #FAC-{(Math.random() * 9999).toFixed(0)}-QT
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button onClick={() => setBriefSubmitted(false)} className="px-8 py-4 bg-slate-900 text-[#a1dc84] rounded-lg font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all">New Application</button>
                                        <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-slate-900 rounded-lg font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all">Service Hub</Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 max-w-4xl mx-auto">
                                    <span className="bg-slate-900 text-[#a1dc84] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 inline-block shadow-2xl">Asset Optimization Protocol</span>
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[1.1] font-primary">
                                        Streamline Your <br /> Supply <span className="text-white">Chain.</span>
                                    </h2>
                                    <p className="text-slate-950/70 text-xl font-bold mb-16 max-w-2xl mx-auto font-secondary">
                                        Partner with Mubraiz for warehousing excellence. Secure, scalable, and elite technology-driven facility protocols.
                                    </p>

                                    <form onSubmit={handleBriefSubmit} className="grid md:grid-cols-12 gap-6 p-4">
                                        {briefLoading && (
                                            <div className="absolute inset-0 bg-[#a1dc84]/80 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-[3rem]">
                                                <div className="size-20 border-4 border-slate-900/10 border-t-slate-900 rounded-full animate-spin"></div>
                                                <span className="mt-8 text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] animate-pulse">Syncing Facility Intelligence...</span>
                                            </div>
                                        )}
                                        <div className="md:col-span-4 group relative">
                                            <select required value={briefData.category} onChange={(e) => setBriefData({ ...briefData, category: e.target.value })} className="w-full h-[80px] bg-white border-2 border-slate-900/5 rounded-[2rem] px-8 text-slate-900 font-black uppercase text-xs tracking-widest outline-none focus:border-slate-900 transition-all appearance-none">
                                                <option value="">Storage Category</option>
                                                <option value="Bonded Terminals">Bonded Terminals</option>
                                                <option value="Temp-Controlled">Temp-Controlled</option>
                                                <option value="Raw Materials">Raw Materials</option>
                                                <option value="FMCG Distribution">FMCG Distribution</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-8 top-1/2 -translate-y-1/2 text-slate-900 pointer-events-none transition-transform group-focus-within:rotate-180">expand_more</span>
                                        </div>
                                        <div className="md:col-span-5">
                                            <input required type="text" value={briefData.requirements} onChange={(e) => setBriefData({ ...briefData, requirements: e.target.value })} placeholder="Approx SQ FT/Specific Requirements..." className="w-full h-[80px] bg-white border-2 border-slate-900/5 rounded-[2rem] px-8 text-slate-900 font-black placeholder:text-slate-300 text-xs tracking-widest outline-none focus:border-slate-900 transition-all uppercase" />
                                        </div>
                                        <div className="md:col-span-3">
                                            <button type="submit" className="w-full px-8 py-4 bg-slate-900 text-[#a1dc84] rounded-lg font-black uppercase tracking-[0.3em] text-[10px] shadow-3xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                                                Execute Brief <span className="material-symbols-outlined !text-xl">send_and_archive</span>
                                            </button>
                                        </div>
                                    </form>

                                    <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center">
                                        <Link href="/resources/consultation" className="text-slate-900 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-3 hover:underline">
                                            <span className="material-symbols-outlined">support_agent</span> Consult Engineering Team
                                        </Link>
                                        <Link href="/resources/warehouse-specs" className="text-slate-900 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-3 hover:underline">
                                            <span className="material-symbols-outlined">download</span> Download World-Standard Specs
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
}

