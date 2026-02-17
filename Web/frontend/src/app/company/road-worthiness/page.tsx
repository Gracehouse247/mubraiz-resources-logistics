"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const checks = [
    {
        title: "Braking Systems",
        description: "Advanced ABS and EBS system diagnotics performed weekly.",
        icon: "build_circle"
    },
    {
        title: "Tire Integrity",
        description: "Laser-guided tread depth analysis and pressure monitoring.",
        icon: "tire_repair"
    },
    {
        title: "Engine Performance",
        description: "Emissions testing to meet Euro-4 and Euro-5 standards.",
        icon: "engineering"
    },
    {
        title: "Telematics & GPS",
        description: "Real-time tracking hardware functionality verification.",
        icon: "satellite_alt"
    }
];

export default function RoadWorthinessPage() {
    return (
        <main className="w-full bg-[#f8faf8] dark:bg-[#0a0f0a] transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50 z-10"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <Image
                        alt="Road Worthiness Hero"
                        className="h-full w-full object-cover grayscale opacity-40"
                        src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2074&auto=format&fit=crop"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md mb-10">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                            </span>
                            Safety Assurance
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-display text-white mb-10">
                            Road <br />
                            <span className="text-[#a1dc84]">Worthiness.</span>
                        </h1>

                        <p className="max-w-lg border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                            Ensuring every vehicle in our fleet meets the highest safety standards before hitting the road. Our rigorous maintenance protocols guarantee reliability and peace of mind.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Protocols Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Zero Compromise</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter font-display leading-tight uppercase">Maintenance <span className="text-[#a1dc84]">Protocol.</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {checks.map((check, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <div className="text-[#a1dc84] mb-8 bg-slate-50 dark:bg-white/5 size-16 rounded-2xl flex items-center justify-center shadow-lg shadow-[#a1dc84]/5 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined !text-3xl">{check.icon}</span>
                                </div>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 font-display tracking-tighter">
                                    {check.title}
                                </h4>
                                <p className="text-slate-500 dark:text-slate-400 font-sans font-medium text-sm leading-relaxed">
                                    {check.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Excellence Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-20 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined !text-[120px] text-[#a1dc84]">verified</span>
                        </div>

                        <div className="relative z-10 space-y-10">
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] block font-sans">Strategic Asset Intel</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight font-display uppercase">
                                Commitment to Fleet Excellence <br />
                                & <span className="text-[#a1dc84]">Truck Road Worthiness.</span>
                            </h2>

                            <div className="space-y-8 text-base md:text-lg text-slate-500 dark:text-slate-400 font-sans font-medium leading-relaxed border-l-4 border-[#a1dc84] pl-8 md:pl-12">
                                <p>
                                    At Mubraiz, we prioritize the safety and reliability of our fleet, ensuring all our trucks are in optimal working condition and meet stringent roadworthiness standards. To achieve this, we employ skilled and certified mechanics who maintain our vehicles with utmost diligence.
                                </p>
                                <p>
                                    Additionally, we have established partnerships with reputable service providers, including <span className="text-slate-900 dark:text-white font-black">Zino Trucks</span>, for major repairs and maintenance. This commitment to fleet excellence enables us to deliver efficient, reliable, and safe transportation services to our valued clients.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certification Badge Section */}
            <section className="py-32 bg-[#a1dc84] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-10 leading-tight font-display uppercase">
                        100% Compliance <br />
                        Record.
                    </h2>
                    <p className="text-slate-900/80 font-sans font-bold text-lg max-w-2xl mx-auto mb-16">
                        We adhere strictly to Federal Road Safety Corps (FRSC) regulations and international transport safety guidelines.
                    </p>
                    <Link href="/services/fleet" className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
                        View Fleet Gallery
                    </Link>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 size-[600px] bg-white blur-[200px] opacity-[0.2] pointer-events-none" />
            </section>
        </main>
    );
}
