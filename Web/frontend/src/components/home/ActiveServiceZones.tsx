"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ActiveServiceZones() {
    return (
        <section className="bg-white py-20 border-t border-slate-100 overflow-hidden brand-mesh-bg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 flex flex-col justify-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 font-black text-[#a1dc84] tracking-widest text-xs uppercase">
                            <span className="material-symbols-outlined !text-lg">language</span>
                            NATIONWIDE COVERAGE
                        </div>
                        <h2 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter font-primary">
                            Active Service <br /><span className="text-[#a1dc84]">Zones</span>
                        </h2>
                        <p className="mb-8 text-lg text-slate-600 font-medium">
                            Our comprehensive land network covers all 36 states in Nigeria, ensuring seamless logistics across the nation.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="relative group">
                                <span className="absolute left-3 top-3.5 text-slate-400 material-symbols-outlined group-focus-within:text-[#a1dc84] transition-colors">search</span>
                                <input className="w-full rounded-xl border-0 bg-slate-50 py-4 pl-10 pr-4 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-[#a1dc84] outline-none transition-all font-bold text-slate-900" placeholder="Find a state..." type="text" />
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100 hover:border-[#a1dc84]/30 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-slate-900 text-sm">Latest Route Added</span>
                                    <span className="text-[10px] font-black text-[#a1dc84] px-2 py-1 bg-[#a1dc84]/10 rounded uppercase tracking-wider">NEW</span>
                                </div>
                                <div className="text-sm text-slate-500 font-medium flex items-center">
                                    <span className="text-slate-900 font-bold">Lagos (LOS)</span>
                                    <span className="material-symbols-outlined mx-2 text-xs text-slate-300">arrow_forward</span>
                                    <span className="text-slate-900 font-bold">Kano (KAN)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 relative min-h-[500px] aspect-[4/3] overflow-hidden rounded-3xl bg-[#0f172a] shadow-2xl border border-slate-800"
                    >
                        <Image
                            alt="Map of Nigeria showing active service zones"
                            className="absolute inset-0 h-full w-full object-cover opacity-60"
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Nigeria_blank_map.svg"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-30"></div>

                        {/* Map Points - All 36 Nigerian States */}
                        {[
                            // South West
                            { id: "lagos", name: "Lagos", status: "HQ", top: "88%", left: "18%", color: "bg-[#a1dc84]" },
                            { id: "ogun", name: "Ogun", status: "Active", top: "82%", left: "16%", color: "bg-[#a1dc84]" },
                            { id: "oyo", name: "Oyo", status: "Active", top: "72%", left: "15%", color: "bg-[#a1dc84]" },
                            { id: "osun", name: "Osun", status: "Active", top: "78%", left: "22%", color: "bg-[#a1dc84]" },
                            { id: "ondo", name: "Ondo", status: "Active", top: "82%", left: "29%", color: "bg-[#a1dc84]" },
                            { id: "ekiti", name: "Ekiti", status: "Active", top: "75%", left: "28%", color: "bg-[#a1dc84]" },

                            // South South
                            { id: "edo", name: "Edo", status: "Active", top: "80%", left: "38%", color: "bg-[#a1dc84]" },
                            { id: "delta", name: "Delta", status: "Active", top: "88%", left: "37%", color: "bg-[#a1dc84]" },
                            { id: "bayelsa", name: "Bayelsa", status: "Active", top: "95%", left: "40%", color: "bg-[#a1dc84]" },
                            { id: "rivers", name: "Rivers", status: "Active", top: "92%", left: "48%", color: "bg-[#a1dc84]" },
                            { id: "akwa-ibom", name: "Akwa Ibom", status: "Active", top: "92%", left: "55%", color: "bg-[#a1dc84]" },
                            { id: "cross-river", name: "Cross River", status: "Active", top: "88%", left: "62%", color: "bg-[#a1dc84]" },

                            // South East
                            { id: "abia", name: "Abia", status: "Active", top: "85%", left: "52%", color: "bg-[#a1dc84]" },
                            { id: "imo", name: "Imo", status: "Active", top: "85%", left: "45%", color: "bg-[#a1dc84]" },
                            { id: "anambra", name: "Anambra", status: "Active", top: "80%", left: "46%", color: "bg-[#a1dc84]" },
                            { id: "enugu", name: "Enugu", status: "Active", top: "78%", left: "52%", color: "bg-[#a1dc84]" },
                            { id: "ebonyi", name: "Ebonyi", status: "Active", top: "78%", left: "58%", color: "bg-[#a1dc84]" },

                            // North Central
                            { id: "fct", name: "FCT Abuja", status: "Active", top: "55%", left: "45%", color: "bg-[#a1dc84]" },
                            { id: "niger", name: "Niger", status: "Active", top: "45%", left: "32%", color: "bg-[#a1dc84]" },
                            { id: "kwara", name: "Kwara", status: "Active", top: "58%", left: "22%", color: "bg-[#a1dc84]" },
                            { id: "kogi", name: "Kogi", status: "Active", top: "72%", left: "40%", color: "bg-[#a1dc84]" },
                            { id: "benue", name: "Benue", status: "Active", top: "70%", left: "58%", color: "bg-[#a1dc84]" },
                            { id: "plateau", name: "Plateau", status: "Active", top: "52%", left: "60%", color: "bg-[#a1dc84]" },
                            { id: "nasarawa", name: "Nasarawa", status: "Active", top: "60%", left: "52%", color: "bg-[#a1dc84]" },

                            // North West
                            { id: "kaduna", name: "Kaduna", status: "Active", top: "40%", left: "45%", color: "bg-[#a1dc84]" },
                            { id: "kano", name: "Kano", status: "Active", top: "25%", left: "52%", color: "bg-[#a1dc84]" },
                            { id: "katsina", name: "Katsina", status: "Active", top: "15%", left: "45%", color: "bg-[#a1dc84]" },
                            { id: "sokoto", name: "Sokoto", status: "Active", top: "15%", left: "22%", color: "bg-[#a1dc84]" },
                            { id: "zamfara", name: "Zamfara", status: "Active", top: "25%", left: "32%", color: "bg-[#a1dc84]" },
                            { id: "kebbi", name: "Kebbi", status: "Active", top: "28%", left: "15%", color: "bg-[#a1dc84]" },
                            { id: "jigawa", name: "Jigawa", status: "Active", top: "20%", left: "62%", color: "bg-[#a1dc84]" },

                            // North East
                            { id: "borno", name: "Borno", status: "Active", top: "20%", left: "85%", color: "bg-[#a1dc84]" },
                            { id: "yobe", name: "Yobe", status: "Active", top: "20%", left: "75%", color: "bg-[#a1dc84]" },
                            { id: "bauchi", name: "Bauchi", status: "Active", top: "35%", left: "68%", color: "bg-[#a1dc84]" },
                            { id: "gombe", name: "Gombe", status: "Active", top: "40%", left: "78%", color: "bg-[#a1dc84]" },
                            { id: "adamawa", name: "Adamawa", status: "Active", top: "55%", left: "85%", color: "bg-[#a1dc84]" },
                            { id: "taraba", name: "Taraba", status: "Active", top: "65%", left: "75%", color: "bg-[#a1dc84]" }
                        ].map((point) => (
                            <div
                                key={point.id}
                                className="absolute flex flex-col items-center group cursor-pointer"
                                style={{ top: point.top, left: point.left }}
                            >
                                <div className="relative flex h-3 w-3 lg:h-4 lg:w-4 items-center justify-center">
                                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 duration-1000 ${point.color}`}></span>
                                    <span className={`relative inline-flex h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full shadow-lg border border-white/20 ${point.color}`}></span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-3 -translate-y-2 group-hover:translate-y-0 absolute top-full left-1/2 -translate-x-1/2 min-w-[120px] z-20 pointer-events-none">
                                    <div className="rounded-lg bg-slate-900/90 backdrop-blur-md px-4 py-3 text-xs border border-white/10 shadow-xl text-center">
                                        <span className="block font-black text-white text-sm mb-1">{point.name}</span>
                                        <span className={`font-bold uppercase tracking-wider text-[10px] ${point.status === 'HQ' ? 'text-[#a1dc84]' : 'text-white/70'}`}>{point.status}</span>
                                    </div>
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-slate-900/90 absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-180"></div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

