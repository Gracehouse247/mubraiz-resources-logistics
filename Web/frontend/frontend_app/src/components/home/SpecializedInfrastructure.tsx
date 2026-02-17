"use client";

import { motion } from "framer-motion";

export default function SpecializedInfrastructure() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 50
            }
        },
    };

    return (
        <section className="bg-slate-50 py-24 border-t border-slate-100 relative overflow-hidden brand-mesh-bg">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#a1dc84]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#a1dc84] font-black tracking-widest text-xs uppercase bg-[#a1dc84]/10 px-3 py-1 rounded-full"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl lg:text-7xl font-primary leading-[1.1]"
                    >
                        Specialized Logistics <br />
                        <span className="text-[#a1dc84]">Infrastructure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-slate-600 font-medium"
                    >
                        Engineered for efficiency. From heavy haulage to precision warehousing, our assets define global standards.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Card 1 */}
                    <motion.div variants={item} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                        <div className="h-1.5 w-full bg-slate-900 group-hover:bg-[#a1dc84] transition-colors duration-500"></div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined !text-3xl">local_shipping</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-black text-slate-900 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Industrial Fleet Command</h3>
                            <p className="mb-6 text-sm text-slate-500 leading-relaxed font-medium">Strategic fleet management for domestic heavy industrial nodes.</p>
                            <div className="mt-auto rounded-xl bg-slate-50/50 p-4 border border-slate-100 group-hover:border-[#a1dc84]/20 transition-colors">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 pb-2 border-b border-slate-200 tracking-widest">Technical Specs</h4>
                                <ul className="space-y-2 text-xs text-slate-600 font-bold">
                                    <li className="flex justify-between"><span>Payload:</span> <span className="text-slate-900">Up to 45T</span></li>
                                    <li className="flex justify-between"><span>Coverage:</span> <span className="text-slate-900">Nationwide</span></li>
                                    <li className="flex justify-between"><span>Tracking:</span> <span className="text-[#a1dc84]">GPS Live</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={item} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                        <div className="h-1.5 w-full bg-slate-900 group-hover:bg-[#a1dc84] transition-colors duration-500"></div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined !text-3xl">conveyor_belt</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-black text-slate-900 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Executive Haulage Protocols</h3>
                            <p className="mb-6 text-sm text-slate-500 leading-relaxed font-medium">Multi-modal container movement and port-to-door optimization.</p>
                            <div className="mt-auto rounded-xl bg-slate-50/50 p-4 border border-slate-100 group-hover:border-[#a1dc84]/20 transition-colors">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 pb-2 border-b border-slate-200 tracking-widest">Technical Specs</h4>
                                <ul className="space-y-2 text-xs text-slate-600 font-bold">
                                    <li className="flex justify-between"><span>Types:</span> <span className="text-slate-900">20ft / 40ft</span></li>
                                    <li className="flex justify-between"><span>Chassis:</span> <span className="text-slate-900">Tri-axle</span></li>
                                    <li className="flex justify-between"><span>Volume:</span> <span className="text-slate-900">High Cap.</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={item} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                        <div className="h-1.5 w-full bg-slate-900 group-hover:bg-[#a1dc84] transition-colors duration-500"></div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined !text-3xl">warehouse</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-black text-slate-900 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Contract Logistics Nodes</h3>
                            <p className="mb-6 text-sm text-slate-500 leading-relaxed font-medium">Enterprise storage solutions with unified inventory intelligence.</p>
                            <div className="mt-auto rounded-xl bg-slate-50/50 p-4 border border-slate-100 group-hover:border-[#a1dc84]/20 transition-colors">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 pb-2 border-b border-slate-200 tracking-widest">Technical Specs</h4>
                                <ul className="space-y-2 text-xs text-slate-600 font-bold">
                                    <li className="flex justify-between"><span>Space:</span> <span className="text-slate-900">500k sq.ft</span></li>
                                    <li className="flex justify-between"><span>Climate:</span> <span className="text-slate-900">Controlled</span></li>
                                    <li className="flex justify-between"><span>Security:</span> <span className="text-[#a1dc84]">24/7 CCTV</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div variants={item} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                        <div className="h-1.5 w-full bg-slate-900 group-hover:bg-[#a1dc84] transition-colors duration-500"></div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined !text-3xl">public</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-black text-slate-900 group-hover:text-[#a1dc84] transition-colors font-primary tracking-tighter">Customs Clearance & Forwarding</h3>
                            <p className="mb-6 text-sm text-slate-500 leading-relaxed font-medium">Expert customs clearance services, cargo handling, & documentation support for seamless import/export operations.</p>
                            <div className="mt-auto rounded-xl bg-slate-50/50 p-4 border border-slate-100 group-hover:border-[#a1dc84]/20 transition-colors">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 pb-2 border-b border-slate-200 tracking-widest">Technical Specs</h4>
                                <ul className="space-y-2 text-xs text-slate-600 font-bold">
                                    <li className="flex justify-between"><span>Customs:</span> <span className="text-slate-900">In-house</span></li>
                                    <li className="flex justify-between"><span>Docs:</span> <span className="text-slate-900">Automated</span></li>
                                    <li className="flex justify-between"><span>Lanes:</span> <span className="text-slate-900">Global</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

