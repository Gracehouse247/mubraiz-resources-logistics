"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        {
            title: "Executive Haulage & Road Logistics",
            description: "End-to-end interstate transportation utilizing a state-of-the-art heavy-duty fleet. Engineered for 100% reliability.",
            icon: "local_shipping",
            href: "/services/haulage",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
            tag: "CORE INFRASTRUCTURE"
        },
        {
            title: "Contract Logistics & Warehousing",
            description: "Advanced, technology-enabled storage and inventory intelligence designed for maximum supply chain scale.",
            icon: "warehouse",
            href: "/services/warehousing",
            image: "https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=2070&auto=format&fit=crop",
            tag: "ASSET MANAGEMENT"
        },
        {
            title: "Customs Brokering & Compliance",
            description: "NCS-licensed brokerage and regulatory mastery. We transform complexity into seamless border transitions.",
            icon: "description",
            href: "/services/customs",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            tag: "REGULATORY INTEL"
        },
        {
            title: "Global Sourcing & Procurement",
            description: "Strategic industrial sourcing connecting global manufacturers with local requirements through absolute transparency.",
            icon: "shopping_cart_checkout",
            href: "/services/procurement",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
            tag: "GLOBAL SUPPLY"
        },
        {
            title: "Fleet Infrastructure V.3",
            description: "Deployment of specialized industrial assets. Low-beds, flatbeds, and prime movers as a service.",
            icon: "deployed_code",
            href: "/services/fleet",
            image: "/images/branded-sinotruk-hero.jpeg",
            tag: "POWER GRID"
        },
        {
            title: "Global Trade & Export Hub",
            description: "Architecting the trade routes of African commerce. Graded commodities and international trade facilitation.",
            icon: "public",
            href: "/services/global-trade",
            image: "/images/resources/case-studies/heavy-industry-2.jpeg",
            tag: "CONTINENTAL REACH"
        }
    ];

    const features = [
        { title: "Elite Fleet", desc: "HOWO, DAF, and Mercedes Actros units engineered for zero-failure industrial missions.", icon: "speed" },
        { title: "Digital Nodes", desc: "Real-time telemetry and GPS synchronization providing absolute asset visibility.", icon: "satellite_alt" },
        { title: "Cost Precision", desc: "Optimized routing protocols that ensure maximum budget efficiency without compromise.", icon: "savings" },
        { title: "Sustainability", desc: "Euro-grade emissions standards and environmental compliance across our entire vertical.", icon: "eco" },
    ];

    return (
        <main className="bg-white dark:bg-[#0a0f1a] min-h-screen transition-colors duration-500 overflow-x-hidden">
            {/* Dark Premium Hero Section */}
            <section className="relative bg-slate-950 py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                {/* Visual Glows */}
                <div className="absolute -top-40 -left-40 size-[600px] bg-[#a1dc84]/10 rounded-full blur-[200px] pointer-events-none"></div>
                <div className="absolute -bottom-40 -right-40 size-[600px] bg-[#a1dc84]/5 rounded-full blur-[200px] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-2 px-6 rounded-full bg-[#a1dc84]/10 border border-[#a1dc84]/20 text-[#a1dc84] text-[10px] font-black tracking-[0.4em] uppercase mb-10 backdrop-blur-md">
                            Operational Excellence Hub
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[1.1] font-primary">
                            The Industrial <br /><span className="text-[#a1dc84]">Solutions Grid.</span>
                        </h1>
                        <div className="h-1 w-24 bg-[#a1dc84] mb-10"></div>
                        <p className="text-lg text-slate-400 max-w-2xl font-medium leading-relaxed font-secondary">
                            Comprehensive logistics, procurement, and infrastructure protocols engineered to power African commerce.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-40 max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-3xl dark:shadow-none border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 transition-all duration-500"
                        >
                            <div className="h-72 relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/0 transition-all duration-700 z-10"></div>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-8 left-8 z-20">
                                    <span className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-2 rounded-full text-[9px] font-black text-slate-900 dark:text-[#a1dc84] uppercase tracking-widest shadow-2xl">
                                        {service.tag}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                    <div className="size-14 rounded-2xl bg-[#a1dc84] flex items-center justify-center text-slate-900 shadow-xl">
                                        <span className="material-symbols-outlined !text-3xl">north_east</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <div className="size-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-[#a1dc84] group-hover:text-slate-950 transition-all mb-8">
                                    <span className="material-symbols-outlined !text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter font-primary leading-tight">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed mb-10 font-secondary line-clamp-2">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-4 text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] hover:gap-8 transition-all group-hover:text-[#a1dc84]"
                                >
                                    Access Protocol <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Value Pillars */}
            <section className="py-40 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-primary font-bold">The Mubraiz Edge</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary mb-10">
                                Global Reach. <br /><span className="text-[#a1dc84]">Local Precision.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed font-secondary max-w-xl">
                                We combine a world-standard fleet infrastructure with proprietary technology to deliver cost-effective and reliable logistics nationwide.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 shadow-xl dark:shadow-none border border-slate-100 dark:border-white/5 group hover:border-[#a1dc84]/30 transition-all duration-500"
                                >
                                    <div className="size-16 bg-[#a1dc84]/10 rounded-2xl flex items-center justify-center text-[#a1dc84] mb-8 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all shadow-lg shadow-[#a1dc84]/10">
                                        <span className="material-symbols-outlined !text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter font-primary">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-secondary font-medium">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* High Impact CTA */}
            <section className="py-40 bg-white dark:bg-[#0a0f1a] transition-colors relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#a1dc84] rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-3xl shadow-[#a1dc84]/20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                        <div className="absolute -top-32 -left-32 size-96 bg-white/30 rounded-full blur-[120px] group-hover:bg-white/40 transition-all duration-1000"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="bg-slate-950 text-[#a1dc84] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 inline-block shadow-2xl">Partner With Excellence</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-12 tracking-tighter leading-[1.1] font-primary">
                                Ready to Secure <br /> Your <span className="text-white">Supply Chain?</span>
                            </h2>
                            <p className="text-slate-950/70 text-2xl font-bold mb-16 max-w-2xl mx-auto font-secondary">
                                Join the elite network of businesses powered by Mubraiz Resources. Secure, scalable, and technology-driven operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center">
                                <Link href="/tools/calculator">
                                    <button className="px-8 py-4 bg-slate-950 text-[#a1dc84] rounded-lg font-black uppercase tracking-[0.3em] text-xs shadow-3xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4">
                                        Get Instant Quote <span className="material-symbols-outlined !text-2xl">trending_up</span>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-white text-slate-950 rounded-lg font-black uppercase tracking-[0.3em] text-xs shadow-xl hover:bg-slate-50 transition-all border-2 border-slate-900/5 flex items-center justify-center gap-4">
                                        Contact Command <span className="material-symbols-outlined !text-2xl">support_agent</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

