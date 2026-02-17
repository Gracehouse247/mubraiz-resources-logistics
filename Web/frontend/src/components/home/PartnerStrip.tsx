"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnerStrip() {
    return (
        <section className="border-b border-gray-100 bg-white py-12 overflow-hidden brand-mesh-bg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="w-full lg:w-auto overflow-hidden">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6 text-center lg:text-left"
                        >
                            Trusted Partners & Certifications
                        </motion.h3>

                        <div className="flex items-center gap-12 overflow-hidden mask-gradient-x">
                            <motion.div
                                className="flex gap-12 min-w-max items-center"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 30
                                }}
                            >
                                {/* First Set */}
                                {[1, 2].map((set) => (
                                    <div key={set} className="flex gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                            <div key={num} className="relative h-16 w-36 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex-shrink-0">
                                                <Image
                                                    src={`/partners/${num}.png`}
                                                    alt={`Partner ${num}`}
                                                    fill
                                                    className="object-contain" // Ensures image fits within h-16 w-36 without distortion
                                                    sizes="(max-width: 768px) 100px, 150px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="shrink-0"
                    >
                        <Link className="group flex items-center gap-4 rounded-full border border-slate-200 bg-slate-50 py-2 pl-2 pr-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-[#a1dc84]/10 hover:border-[#a1dc84]/30" href="/services/fleet">
                            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm relative group-hover:scale-105 transition-transform">
                                <Image
                                    alt="Fleet"
                                    className="h-full w-full object-cover"
                                    src="/images/fleet/15ton-truck-4.jpeg"
                                    fill
                                    sizes="40px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-900 group-hover:text-[#a1dc84] uppercase tracking-wider transition-colors">Fleet Showcase</span>
                                <span className="text-[9px] text-slate-500 font-bold group-hover:text-slate-600">High-performance assets</span>
                            </div>
                            <span className="material-symbols-outlined !text-sm text-slate-400 group-hover:text-[#a1dc84] group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

