"use client";

import { tradeAPI } from "@/lib/tradeAPI";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function TrustedPartnershipsPage() {
    const [activePartner, setActivePartner] = useState<number | null>(null);
    const [dynamicPartners, setDynamicPartners] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const data = await tradeAPI.getPartners();
                setDynamicPartners(data);
            } catch (err) {
                console.error("Failed to load partners", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, []);

    // Featured Partners Data (Extracted from images)
    const featuredPartners = [
        {
            id: 1,
            name: 'Nigerian Sinotrucks Limited',
            logo: '/partners/8.png',
            category: 'Fleet Maintenance Partner',
            relationship: 'Strategic Technical Partnership',
            description: 'Our partnership with Nigerian Sinotrucks Limited is underpinned by a robust Service Retainership Agreement, delivering comprehensive repair and maintenance services. This collaboration ensures our fleet consistently operates at optimal capacity, minimizing downtime and maximizing efficiency.',
            image: '/images/fleet/flet yard/fleetyard2.png',
            metrics: {
                coverage: 'Nationwide Support',
                vehicles: '500+ Fleet Units',
                uptime: '99.9%'
            },
            testimonial: 'Nigerian Sinotrucks Limited\'s unwavering dedication to maintaining our vehicles reflects their commitment to our success. This collaboration ensures that our fleet consistently operates at its optimal capacity.'
        },
        {
            id: 2,
            name: 'TGI Distri',
            logo: '/partners/5.png',
            category: 'Nationwide Product Distribution',
            relationship: 'Strategic Logistics & Distribution Partnership',
            description: 'Mubraiz Resources is honoured to be the chosen logistics partner for the nationwide distribution of TGI Distri\'s wide array of products. Our efficient and reliable services serve as the linchpin in ensuring that their products reach every corner of the nation in a timely manner.',
            image: '/images/fleet/TGI truck.jpeg',
            metrics: {
                routes: '200+ Active Routes',
                deliveries: '15,000+ Monthly',
                efficiency: '97% On-Time'
            },
            testimonial: 'Providing integrated supply chain solutions optimised for enhanced market reach.'
        },
        {
            id: 3,
            name: 'Chi Limited (Chivita)',
            logo: '/partners/1.png',
            category: 'Large-Scale Fleet Management',
            relationship: 'A Strong Partnership Journey',
            description: 'Our collaboration with Chi Limited stands as a testament to the enduring power of strong partnerships. In 2021, we initiated our engagement with Chi Limited by deploying a modest fleet of 5 trucks, marking the inception of a logistics relationship. What began as a modest logistics partnership quickly transformed into a resounding success.',
            image: '/images/fleet/reliability-truck.jpeg',
            metrics: {
                growth: '400% Fleet Expansion',
                satisfaction: 'Officially Commended',
                partnership: 'Since 2021'
            },
            testimonial: 'Remarkable growth partnership from initial 5-vehicle support to large-scale fleet management. Officially commended for operational excellence and outstanding service delivery.'
        }
    ];

    // Static fallback + Dynamic
    const additionalPartners = [
        ...dynamicPartners.map((p, idx) => ({
            id: `dyn-${p.id}`,
            name: p.companyName,
            logo: '/partners/placeholder.png', // Or p.logo if available
            category: p.industry,
            description: p.companyName + ' is a valued partner in our logistics ecosystem.',
            icon: 'verified',
            color: '#16a34a'
        })),
        {
            id: 4,
            name: 'Tunjex Integrated Limited',
            logo: '/partners/4.png',
            category: 'Integrated Logistics',
            description: 'Tunjex Integrated Limited partners with us to provide seamless end-to-end supply chain solutions, enhancing our operational capabilities across key logistical corridors in Nigeria.',
            icon: 'local_shipping',
            color: '#16a34a'
        },
        {
            id: 5,
            name: 'West African Tire Services (WATS)',
            logo: '/partners/3.png',
            category: 'Tire Management Solutions',
            description: 'West African TIRE Services (WATS) is our premier supplier for top-quality tires and expert tire management solutions. Their meticulous oversight ensures optimal tire performance, enhancing safety and efficiency across our operations.',
            icon: 'tire_repair',
            color: '#e74c3c'
        },
        {
            id: 6,
            name: 'Gambus Energy Limited',
            logo: '/partners/6.png',
            category: 'Fleet Tracking & Fuel Management',
            description: 'Gambus Energy Ltd. is our trusted partner for comprehensive truck and diesel tracking solutions at Mubraiz Resources. With precision and reliability, they streamline our operations, ensuring efficient fleet management.',
            icon: 'satellite_alt',
            color: '#f39c12'
        },
        {
            id: 7,
            name: 'Zenith Bank PLC',
            logo: '/partners/2.png',
            category: 'Banking & Financial Services',
            description: 'Zenith Bank Plc, our trusted banking partner, plays a pivotal role in facilitating our financial transactions and supporting our financial stability. Their expertise and commitment into excellence in financial services underscore their significance.',
            icon: 'account_balance',
            color: '#c0392b'
        }
    ];

    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0a0f0a] font-primary transition-colors duration-500">
            {/* SEO-Optimized JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mubraiz Resources Ltd",
                        "description": "Leading logistics and supply chain solutions provider in Nigeria and West Africa",
                        "url": "https://mubraizresources.com/partners",
                        "logo": "https://mubraizresources.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+234-XXX-XXX-XXXX",
                            "contactType": "Partnership Inquiries",
                            "areaServed": "NG",
                            "availableLanguage": "en"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/mubraiz-resources",
                            "https://twitter.com/mubraizresources"
                        ],
                        "partner": [
                            ...featuredPartners.map(p => ({
                                "@type": "Organization",
                                "name": p.name,
                                "description": p.description
                            })),
                            ...additionalPartners.map(p => ({
                                "@type": "Organization",
                                "name": p.name,
                                "description": p.description
                            }))
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative flex min-h-[750px] w-full items-center overflow-hidden bg-[#0f172a] pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2084"
                        alt="Strategic Partnership"
                        fill
                        className="object-cover opacity-40 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block bg-[#a1dc84]/10 border border-[#a1dc84]/30 text-[#a1dc84] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 font-primary">
                            Trusted Client Partnerships
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white mb-8 font-primary">
                            Building Success Through <br />
                            <span className="text-[#a1dc84]">Strategic Collaboration.</span>
                        </h1>

                        <p className="text-lg text-slate-300 leading-relaxed font-medium max-w-lg mb-12 font-secondary border-l-4 border-[#a1dc84] pl-8">
                            Our client relationships are built on trust, performance, and mutual growth. We don't just transport goods – we deliver on promises and exceed expectations consistently.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 h-16 px-12 rounded-2xl bg-[#a1dc84] text-slate-900 text-xs font-black uppercase tracking-widest shadow-2xl shadow-[#a1dc84]/20 hover:scale-105 active:scale-95 transition-all font-primary"
                            >
                                <span className="material-symbols-outlined">handshake</span>
                                Become a Partner
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-3 h-16 px-12 rounded-2xl border-2 border-white/30 bg-white/10 text-white text-xs font-black uppercase tracking-widest backdrop-blur-md hover:bg-white/20 transition-all font-primary"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Philosophy */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Our Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight mb-8 font-primary">
                            Performance-Driven <br />
                            <span className="text-[#a1dc84]">Partnerships.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-secondary">
                            These partnerships demonstrate our ability to scale operations according to client needs whilst maintaining the highest standards of service quality and reliability across Nigeria's challenging logistics landscape.
                        </p>
                        <div className="border-l-4 border-[#a1dc84] pl-8 py-6 bg-slate-50 dark:bg-white/5 rounded-r-2xl">
                            <p className="text-slate-700 dark:text-slate-300 font-bold text-lg leading-relaxed font-secondary">
                                "We don't just transport goods – we deliver on promises and exceed expectations consistently."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { label: 'Client Retention Rate', value: '98%', icon: 'verified' },
                            { label: 'Partnership Duration', value: '5+ Years', icon: 'schedule' },
                            { label: 'Service Excellence', value: '99.8%', icon: 'star' },
                            { label: 'Market Coverage', value: '36 States', icon: 'map' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5">
                                <span className="material-symbols-outlined text-4xl text-[#a1dc84] mb-4 block">{stat.icon}</span>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 font-primary">{stat.value}</h3>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest font-primary">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Partners - Premium Showcase */}
            <section className="py-32 bg-white dark:bg-slate-900/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Featured Partnerships</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 font-primary">
                            Trusted Client <span className="text-[#a1dc84]">Partnerships.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-secondary">
                            At Mubraiz Resources, we take great pride in our enduring relationships with a diverse clientele, exemplifying our commitment to excellence in the logistics industry.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {featuredPartners.map((partner, idx) => (
                            <motion.article
                                key={partner.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5 group hover:shadow-[#a1dc84]/10 transition-all duration-500"
                            >
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative h-[400px] lg:h-auto overflow-hidden bg-slate-900">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                                        <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl">
                                            <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] font-primary">{partner.category}</p>
                                        </div>
                                        {/* Placeholder for partner truck image */}
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-12 lg:p-16 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 mb-8">
                                                {/* Logo display */}
                                                <div className="size-20 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-white/10">
                                                    <Image
                                                        src={partner.logo}
                                                        alt={partner.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-primary">{partner.name}</h3>
                                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest mt-1 font-primary">{partner.relationship}</p>
                                                </div>
                                            </div>

                                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-secondary">
                                                {partner.description}
                                            </p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-4 mb-8">
                                                {Object.entries(partner.metrics).map(([key, value], mIdx) => (
                                                    <div key={mIdx} className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                                                        <p className="text-lg font-black text-slate-900 dark:text-white mb-1 font-primary uppercase">{value}</p>
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-primary">{key}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className="border-l-4 border-[#a1dc84] pl-6 py-4">
                                            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium font-secondary">
                                                {partner.testimonial}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Partners Grid */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Trusted Partners</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 font-primary">
                        Some of Our Trusted <span className="text-[#a1dc84]">Partnerships.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {additionalPartners.map((partner, idx) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-white/5 group cursor-pointer transition-all duration-300"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="size-20 bg-slate-100 dark:bg-white/5 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all overflow-hidden relative border border-slate-100 dark:border-white/10">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-2 font-primary group-hover:text-[#a1dc84] transition-colors">
                                        {partner.name}
                                    </h3>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-primary">{partner.category}</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-secondary">
                                {partner.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Partnership Values */}
            <section className="py-32 bg-slate-50 dark:bg-slate-900/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-primary">Why Partner With Us</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 font-primary">
                            Partnership <span className="text-[#a1dc84]">Excellence.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'verified_user',
                                title: 'Trust & Reliability',
                                description: 'Proven track record of delivering on commitments with 99.8% service uptime and exceptional client retention.'
                            },
                            {
                                icon: 'trending_up',
                                title: 'Mutual Growth',
                                description: 'We scale our operations according to your needs, growing alongside your business with flexible solutions.'
                            },
                            {
                                icon: 'support_agent',
                                title: 'Dedicated Support',
                                description: 'Assigned account managers and 24/7 operational support ensure seamless communication and rapid response.'
                            },
                            {
                                icon: 'engineering',
                                title: 'Technical Excellence',
                                description: 'Modern fleet, advanced GPS tracking, and IoT-driven diagnostics for complete visibility and control.'
                            },
                            {
                                icon: 'public',
                                title: 'Nationwide Coverage',
                                description: 'Comprehensive reach across all 36 Nigerian states with optimized routes and strategic staging facilities.'
                            },
                            {
                                icon: 'workspace_premium',
                                title: 'Industry Leadership',
                                description: 'Recognized for operational excellence with official commendations from major industry partners.'
                            }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-white/5 group hover:border-[#a1dc84]/30 transition-all"
                            >
                                <div className="size-16 bg-[#a1dc84]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a1dc84] transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-[#a1dc84] group-hover:text-slate-900 transition-colors">{value.icon}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-4 font-primary">{value.title}</h3>
                                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-secondary">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden rounded-[4rem] bg-slate-900 p-16 lg:p-24 text-center shadow-2xl">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #a1dc84 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                        <div className="absolute -right-20 -bottom-20 size-[400px] bg-[#a1dc84] blur-[100px] opacity-10 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <span className="material-symbols-outlined text-7xl text-[#a1dc84] mb-8 block">handshake</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter font-primary">
                                Ready to Build a <br />
                                <span className="text-[#a1dc84]">Strategic Partnership?</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-secondary">
                                Join Nigeria's leading enterprises in experiencing world-class logistics solutions. Our partnership team is ready to discuss how we can support your growth objectives.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 h-16 px-12 rounded-2xl bg-[#a1dc84] text-slate-900 text-xs font-black uppercase tracking-widest shadow-2xl shadow-[#a1dc84]/20 hover:scale-105 active:scale-95 transition-all font-primary"
                                >
                                    <span className="material-symbols-outlined">mail</span>
                                    Contact Partnership Team
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-3 h-16 px-12 rounded-2xl border-2 border-slate-700 bg-transparent text-white text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all font-primary"
                                >
                                    <span className="material-symbols-outlined">description</span>
                                    Download Capabilities Brief
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
