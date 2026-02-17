"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const awards = [
    {
        title: "Haulage Strategic Partner",
        organization: "CHI Limited",
        year: "2021",
        description: "Officially commended for excellence in heavy-duty truck provision and contributing to distribution growth.",
        icon: "handshake"
    },
    {
        title: "Best Logistics Company 2024",
        organization: "Nigerian Logistics Awards",
        year: "2024",
        description: "Recognized for excellence in nationwide distribution and supply chain innovation.",
        icon: "trophy"
    },
    {
        title: "Safety Excellence Award",
        organization: "National Safety Council",
        year: "2023",
        description: "Awarded for achieving zero major incidents and implementing top-tier safety protocols.",
        icon: "health_and_safety"
    },
    {
        title: "Green Logistics Pioneer",
        organization: "Eco-Transport Initiative",
        year: "2023",
        description: "Acknowledged for our commitment to reducing carbon emissions through fleet modernization.",
        icon: "eco"
    },
    {
        title: "Most Reliable Haulage Partner",
        organization: "FMCG Distributors Association",
        year: "2022",
        description: "Voted by industry leaders for consistent on-time delivery and service reliability.",
        icon: "local_shipping"
    }
];

export default function AwardsPage() {
    return (
        <main className="w-full bg-[#f8faf8] dark:bg-[#0a0f0a] transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50 z-10"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <Image
                        alt="Awards and Recognition Hero"
                        className="h-full w-full object-cover grayscale opacity-40"
                        src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=2070&auto=format&fit=crop"
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
                            Excellence Recognized
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-display text-white mb-10">
                            Awards & <br />
                            <span className="text-[#a1dc84]">Recognition.</span>
                        </h1>

                        <p className="max-w-lg border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                            Our commitment to quality, safety, and innovation has earned us recognition from industry leaders and organizations across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Hall of Fame</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter font-display leading-tight uppercase">Our <span className="text-[#a1dc84]">Achievements.</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-12 bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined !text-9xl text-slate-900 dark:text-white">{award.icon}</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[#a1dc84] mb-8 bg-slate-50 dark:bg-white/5 size-20 rounded-2xl flex items-center justify-center shadow-lg shadow-[#a1dc84]/5">
                                        <span className="material-symbols-outlined !text-4xl">{award.icon}</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-4 py-1 rounded-full bg-[#a1dc84]/10 text-[#a1dc84] text-xs font-black uppercase tracking-widest border border-[#a1dc84]/20">
                                            {award.year}
                                        </span>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 font-display tracking-tighter">
                                        {award.title}
                                    </h4>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 font-sans">{award.organization}</p>

                                    <p className="text-slate-500 dark:text-slate-400 font-sans font-medium text-lg leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Commendations Section */}
            <section className="py-24 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[4rem] overflow-hidden p-8 lg:p-20 relative border border-[#a1dc84]/20 shadow-2xl">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#a1dc84]/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#a1dc84] mb-8">
                                    Strategic Recommendation
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tighter uppercase font-display">
                                    Partner <span className="text-[#a1dc84]">Perspective.</span>
                                </h3>
                                <blockquote className="text-xl lg:text-3xl font-medium text-slate-300 italic mb-8 leading-relaxed font-secondary">
                                    "Their service rendition has been good and has contributed to the growth of our distribution operation. We hereby recommend Mubraiz Resources as a business partner."
                                </blockquote>
                                <div className="flex items-center gap-6">
                                    <div className="size-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-xl">
                                        <img
                                            src="https://www.chilimited.com/wp-content/themes/chi/images/logo.png"
                                            alt="CHI Limited"
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = '<span class="material-symbols-outlined text-slate-900">business</span>';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#a1dc84] font-black uppercase tracking-widest text-sm">Head of Logistics</div>
                                        <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">CHI Limited • 2021</div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, rotate: 2 }}
                                whileInView={{ opacity: 1, rotate: -2 }}
                                className="bg-white p-8 lg:p-12 shadow-2xl rounded-sm border border-slate-200 relative group hidden lg:block"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined !text-6xl text-slate-900">verified</span>
                                </div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="size-12 rounded bg-slate-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400">description</span>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Document Registry #REF-CHI-2021</div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-slate-900 font-black uppercase tracking-tighter text-xl border-b-2 border-slate-100 pb-4">CHI Limited Verification</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        Confirmed long-term partnership in heavy-duty logistics, facilitating seamless cross-regional transportation and operational scaling for consumer goods distribution.
                                    </p>
                                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Signed: Log. Division</div>
                                        <div className="h-0.5 w-12 bg-[#a1dc84]"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Commendations Section */}
            <section className="py-24 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[4rem] overflow-hidden p-8 lg:p-20 relative border border-[#a1dc84]/20 shadow-2xl">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#a1dc84]/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#a1dc84] mb-8">
                                    Strategic Recommendation
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tighter uppercase font-display">
                                    Partner <span className="text-[#a1dc84]">Perspective.</span>
                                </h3>
                                <blockquote className="text-xl lg:text-3xl font-medium text-slate-300 italic mb-8 leading-relaxed font-secondary">
                                    "Their service rendition has been good and has contributed to the growth of our distribution operation. We hereby recommend Mubraiz Resources as a business partner."
                                </blockquote>
                                <div className="flex items-center gap-6">
                                    <div className="size-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-xl">
                                        <img
                                            src="https://www.chilimited.com/wp-content/themes/chi/images/logo.png"
                                            alt="CHI Limited"
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = '<span class="material-symbols-outlined text-slate-900">business</span>';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#a1dc84] font-black uppercase tracking-widest text-sm">Head of Logistics</div>
                                        <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">CHI Limited • 2021</div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, rotate: 2 }}
                                whileInView={{ opacity: 1, rotate: -2 }}
                                className="bg-white p-8 lg:p-12 shadow-2xl rounded-sm border border-slate-200 relative group hidden lg:block"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined !text-6xl text-slate-900">verified</span>
                                </div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="size-12 rounded bg-slate-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400">description</span>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Document Registry #REF-CHI-2021</div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-slate-900 font-black uppercase tracking-tighter text-xl border-b-2 border-slate-100 pb-4">CHI Limited Verification</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        Confirmed long-term partnership in heavy-duty logistics, facilitating seamless cross-regional transportation and operational scaling for consumer goods distribution.
                                    </p>
                                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Signed: Log. Division</div>
                                        <div className="h-0.5 w-12 bg-[#a1dc84]"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate/Validation Section */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-sans">Industry Standards</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-10 leading-tight font-display uppercase">
                                Certified for <br />
                                <span className="text-[#a1dc84]">Excellence.</span>
                            </h2>
                            <p className="text-slate-400 text-lg font-sans font-medium leading-relaxed mb-10">
                                We hold certifications from leading regulatory bodies, ensuring that our operations meet the highest standards of safety, quality, and environmental responsibility.
                            </p>
                            <Link href="/company/road-worthiness" className="inline-flex items-center gap-2 text-[#a1dc84] font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                                View Road Worthiness Standards <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                            </Link>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center p-8 group hover:bg-white/10 transition-colors">
                                    <span className="material-symbols-outlined !text-6xl text-slate-600 group-hover:text-[#a1dc84] transition-colors">verified</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-24 -left-24 size-[600px] bg-[#a1dc84] blur-[200px] opacity-[0.05] pointer-events-none" />
            </section>
        </main>
    );
}
