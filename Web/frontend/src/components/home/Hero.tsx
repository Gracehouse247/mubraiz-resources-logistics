"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SLIDES = [
    {
        id: 1,
        heading: <>Delivering Excellence <br /> <span className="text-[#a1dc84]">Haulage Solutions.</span></>,
        body: "Seamless supply chain ecosystems powered by real-time data.",
        image: "/images/truck-hero.jpeg",
        ctaText: "Explore Capabilities",
        ctaLink: "/services",
        badge: "Operational Excellence"
    },
    {
        id: 2,
        heading: <>Executive <br /> <span className="text-[#a1dc84]">Haulage Protocols.</span></>,
        body: "Precision interstate container logistics with real-time telemetry. Optimized for 100% Reliability.",
        image: "/images/fleet/truck-1.jpeg",
        ctaText: "Initiate Quote",
        ctaLink: "/services/haulage/quote",
        badge: "Elite Fleet"
    },
    {
        id: 3,
        heading: <>Contract Logistics <br /> <span className="text-[#a1dc84]">& Warehousing</span></>,
        body: "Comprehensive warehousing solutions, inventory management, and procurement services.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        ctaText: "Inspect Facility",
        ctaLink: "/services/warehousing",
        badge: "Smart Storage"
    },
    {
        id: 4,
        heading: <>Seamless <br /> <span className="text-[#a1dc84]">Customs Clearance</span></>,
        body: "Regulatory compliance & clearance. Expert documentation handling.",
        image: "/images/sustainability/Customs.png",
        ctaText: "Compliance Guide",
        ctaLink: "/services/customs",
        badge: "Customs Defense"
    },
    {
        id: 5,
        heading: <>Global <br /> <span className="text-[#a1dc84]">Sourcing Engine.</span></>,
        body: "Supply chain orchestration & vetting. Strategic industrial sourcing.",
        image: "/images/sustainability/Sourcing.png",
        ctaText: "Sustainability Map",
        ctaLink: "/services/procurement",
        badge: "Green Logistics"
    },
    {
        id: 6,
        heading: <>Fleet Asset <br /> <span className="text-[#a1dc84]">Intelligence.</span></>,
        body: "Industrial asset & vehicle tracking with advanced telemetry.",
        image: "/images/fleet/flet yard/fleetyard1.png",
        ctaText: "View Asset Grid",
        ctaLink: "/portal/tracking",
        badge: "Asset Optimization"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative flex min-h-[90vh] lg:min-h-screen w-full items-center overflow-hidden bg-slate-950">
            {/* Ambient Background Noise/Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1.8,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="absolute inset-0"
                >
                    {/* Visual Core */}
                    <div className="absolute inset-0 z-0">
                        {/* More Transparent Master Cinematic Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-slate-950/10 to-transparent z-10 transition-opacity duration-1000"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/5 z-10"></div>

                        {/* High-Impact Image with Ken Burns + Enhanced Parallax Effect */}
                        <motion.div
                            initial={{ scale: 1.05, x: 0 }}
                            animate={{ scale: 1.2, x: -120 }}
                            transition={{
                                duration: 25,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="relative h-full w-full"
                        >
                            <Image
                                alt={`Mubraiz Hero ${SLIDES[current].id}`}
                                className="h-full w-full object-cover brightness-[0.9] contrast-[1.05] transition-all duration-1000"
                                src={SLIDES[current].image}
                                fill
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Elite Content Layer */}
                    <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 h-full flex items-center pt-20">
                        <div className="w-full max-w-5xl py-20 pb-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="flex flex-col gap-10"
                            >
                                {/* Cinematic Heading - Styled like Warehousing Page */}
                                <motion.h1
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, delay: 0.4 }}
                                    className="text-white text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] font-primary drop-shadow-lg"
                                >
                                    {SLIDES[current].heading}
                                </motion.h1>

                                <div className="flex flex-col gap-12 max-w-4xl">
                                    {/* Intelligence Summary - Styled like Warehousing Page */}
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        className="text-white/90 text-lg md:text-xl font-medium max-w-3xl leading-relaxed border-l-4 border-[#a1dc84] pl-10 font-secondary drop-shadow-md"
                                    >
                                        {SLIDES[current].body}
                                    </motion.p>

                                    {/* Action Hub - Side-by-Side CTA and Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16"
                                    >
                                        <Link href={SLIDES[current].ctaLink}>
                                            <button className="flex items-center gap-6 rounded-lg bg-[#a1dc84] px-8 py-4 text-[10px] font-black text-slate-900 transition-all shadow-3xl shadow-[#a1dc84]/40 hover:scale-105 active:scale-95 group uppercase tracking-[0.4em] font-primary whitespace-nowrap">
                                                {SLIDES[current].ctaText}
                                                <span className="material-symbols-outlined !text-xl transition-transform group-hover:translate-x-2">east</span>
                                            </button>
                                        </Link>

                                        <div className="flex items-center gap-6 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/5">
                                            <div className="flex -space-x-4">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800 shadow-2xl">
                                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Mubraiz Customer" className="object-cover h-full w-full" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#a1dc84] font-black text-[9px] leading-none uppercase tracking-widest">Global Operations</span>
                                                <span className="text-white font-bold text-[8px] mt-1 uppercase tracking-[0.2em] opacity-80">99.8% Efficiency Rate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Subtle Watermark */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none select-none z-10 opacity-[0.03]">
                <span className="text-[25rem] lg:text-[40rem] font-black text-white italic tracking-tighter leading-none">MUBRAIZ</span>
            </div>
        </section>
    );
}
