"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function HelpCenterFAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Fleet & Transport');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

    const categories = [
        { name: "Fleet & Transport", icon: "local_shipping" },
        { name: "Container Haulage", icon: "inventory_2" },
        { name: "Customs & Forwarding", icon: "gavel" },
        { name: "Warehousing", icon: "warehouse" },
        { name: "Procurement & Supply Chain", icon: "hub" },
        { name: "GPS Tracking", icon: "satellite_alt" }
    ];

    const faqs = [
        // Fleet & Transport
        {
            id: 0,
            question: "What is the typical composition of the Mubraiz fleet?",
            answer: "Our fleet consists of high-performance DAF, HOWO, and Mercedes-Benz Actros units. We maintain both 15-ton and 30-ton configurations to suit diverse regional freight requirements across Nigeria's 36 states.",
            proTip: "Check our 'Asset Showcase' page for detailed mechanical specifications of our current fleet units.",
            category: "Fleet & Transport"
        },
        {
            id: 1,
            question: "How do you ensure the safety of cargo during transit?",
            answer: "We implement a multi-layered safety protocol including real-time GPS tracking, electronic speed governors (limited to 60km/h), and mandatory driver rest intervals. Every trip is monitored 24/7 from our Command Center.",
            proTip: "You can request a live tracking link for any active shipment directly from your client portal.",
            category: "Fleet & Transport"
        },
        {
            id: 2,
            question: "Do you offer nationwide coverage including the Northern regions?",
            answer: "Yes, Mubraiz Resources provides 100% nationwide coverage across all 36 states and the FCT. We have established secure logistics corridors even in challenging terrains, backed by local intelligence and secure routing.",
            category: "Fleet & Transport"
        },
        {
            id: 3,
            question: "What is your policy on driver training and vetting?",
            answer: "All drivers undergo rigorous background checks and mandatory quarterly safety training sessions. We focus on defensive driving, cargo security, and crisis management to ensure professional handling of your assets.",
            category: "Fleet & Transport"
        },
        {
            id: 4,
            question: "What maintenance protocols are in place for the fleet?",
            answer: "We operate a 'Zero-Failure' maintenance policy. Vehicles undergo 42-point inspections after every long-haul journey and specialized preventive maintenance every 5,000 kilometers at our Ibafo facility.",
            category: "Fleet & Transport"
        },
        {
            id: 5,
            question: "Are your vehicles equipped for sensitive industrial cargo?",
            answer: "Yes, our specialized fleet includes units with air-ride suspension and climate-controlled trailers for sensitive electronics, medical supplies, and industrial components.",
            category: "Fleet & Transport"
        },
        {
            id: 6,
            question: "How often are fleet assets updated or replaced?",
            answer: "Mubraiz Resources maintains a modern fleet; vehicles are phased out after 5 years of service or upon reaching 500,000km to ensure maximum reliability and environmental compliance.",
            category: "Fleet & Transport"
        },
        {
            id: 7,
            question: "What fuel efficiency standards do you maintain?",
            answer: "We utilize Euro II and Euro III compliant engines and optimize routes via AI to reduce carbon emissions and ensure the most cost-effective haulage rates for our clients.",
            category: "Fleet & Transport"
        },

        // Container Haulage
        {
            id: 8,
            question: "Which container sizes can you accommodate for haulage?",
            answer: "We are equipped to transport 20ft (TEU) and 40ft (FEU) standard, high-cube, and open-top containers. Our flatbed and skeletal trailers are designed for high-stability transport.",
            category: "Container Haulage"
        },
        {
            id: 9,
            question: "Do you handle container shunting from the ports?",
            answer: "Yes, we provide specialized shunting services from Apapa and Tin Can ports to nearby holding bays or final warehouses, ensuring your cargo moves quickly even during peak congestion.",
            category: "Container Haulage"
        },
        {
            id: 10,
            question: "What is your process for 'Last-Mile' container delivery?",
            answer: "Our last-mile process involves final route auditing, on-site personnel coordination, and 'Ready-to-Offload' status checks before the truck enters your facility.",
            category: "Container Haulage"
        },
        {
            id: 11,
            question: "Can you provide skeletal trailers for heavy containers?",
            answer: "Absolutely. Our skeletal trailers are engineered for maximum weight distribution and stability, specifically for fully laden 40ft high-cube containers.",
            category: "Container Haulage"
        },
        {
            id: 12,
            question: "Do you offer haulage for hazardous material (HAZMAT) containers?",
            answer: "Yes, with certified drivers and specialized vehicles equipped with safety kits and emergency response protocols according to international standards.",
            category: "Container Haulage"
        },
        {
            id: 13,
            question: "How do you coordinate with shipping lines for container returns?",
            answer: "We handle the entire logistics of returning empty containers to the terminal or designated holding bays, minimizing your demurrage and detention costs.",
            category: "Container Haulage"
        },
        {
            id: 14,
            question: "What are your delivery time windows for container transport?",
            answer: "We operate 24/7. However, actual delivery windows are optimized based on port terminal gate operations and Lagos State traffic restrictions for heavy vehicles.",
            category: "Container Haulage"
        },
        {
            id: 15,
            question: "Is insurance included for container haulage services?",
            answer: "All container moves are covered by our Goods-in-Transit (GIT) insurance. We also offer specialized 'High-Value' coverage for premium cargo electronics or machinery.",
            category: "Container Haulage"
        },

        // Customs & Forwarding
        {
            id: 16,
            question: "What is the typical timeframe for customs clearance at Apapa Port?",
            answer: "For standard cargo with valid PAAR and Form M, clearance usually takes 3 to 7 working days. Specialized cargo requiring NAFDAC or SON permits may take longer.",
            proTip: "Use our 'Compliance Hub' to verify your HS Code classification before shipping to avoid duty reassessment delays.",
            category: "Customs & Forwarding"
        },
        {
            id: 17,
            question: "What documents are required for clearing commercial goods in Nigeria?",
            answer: "Key documents include: Final Invoice, Packing List, Bill of Lading, PAAR (Pre-Arrival Assessment Report), SONCAP or NAFDAC permits, and Form M.",
            category: "Customs & Forwarding"
        },
        {
            id: 18,
            question: "Do you provide consultancy for HS Code classification?",
            answer: "Yes, our licensed experts provide precise HS Code classification to ensure compliant duty payment and prevent costly penalties from the Nigeria Customs Service.",
            category: "Customs & Forwarding"
        },
        {
            id: 19,
            question: "Can you handle temporary importation permits (TI)?",
            answer: "Yes, we specialize in TI for industrial equipment, oil & gas machinery, and event gear, managing the entire lifecycle from entry to final re-exportation.",
            category: "Customs & Forwarding"
        },
        {
            id: 20,
            question: "What is your role in Air Freight forwarding?",
            answer: "We manage end-to-end air freight from global origins to MMIA or PHC, handling airline booking, documentation, and localized airport clearance.",
            category: "Customs & Forwarding"
        },
        {
            id: 21,
            question: "How do you handle dispute resolution with customs regarding valuation?",
            answer: "Our senior brokers engage directly with the Valuation Unit of the NCS, providing technical proof of transaction value to minimize over-assessments.",
            category: "Customs & Forwarding"
        },
        {
            id: 22,
            question: "Do you offer door-to-door forwarding services?",
            answer: "Yes, we provide comprehensive 'DDP' (Delivered Duty Paid) services, managing everything from the factory floor overseas to your warehouse in Nigeria.",
            category: "Customs & Forwarding"
        },
        {
            id: 23,
            question: "Are your clearing services limited to Lagos Ports only?",
            answer: "No, we cover Apapa, Tin-Can, Onne Port, Port Harcourt Area One, and KLT terminals, as well as various border stations for land-based trade.",
            category: "Customs & Forwarding"
        },

        // Warehousing
        {
            id: 24,
            question: "What types of warehousing facilities do you operate?",
            answer: "We operate Class-A warehouses with features including high-bay racking, climate-controlled zones, and dedicated bonded warehouse sections for uncleared cargo.",
            category: "Warehousing"
        },
        {
            id: 25,
            question: "How do you secure stored inventory?",
            answer: "Security includes 24/7 armed physical guards, perimeter motion sensors, full CCTV coverage, and biometric access control for sensitive storage zones.",
            category: "Warehousing"
        },
        {
            id: 26,
            question: "Do you offer WMS (Warehouse Management System) access?",
            answer: "Yes, clients get real-time visibility into their stock levels, movement history, and expiry tracking via our integrated digital WMS platform.",
            category: "Warehousing"
        },
        {
            id: 27,
            question: "Can you handle bulk cargo storage without containers?",
            answer: "Our facility includes reinforced floor zones for high-density bulk storage of commodities like rice, sugar, or industrial chemicals.",
            category: "Warehousing"
        },
        {
            id: 28,
            question: "What are your fulfillment and 'Pick and Pack' capabilities?",
            answer: "We provide professional fulfillment services, including individual order picking, labeling, bundling, and preparing for dispatch.",
            category: "Warehousing"
        },
        {
            id: 29,
            question: "Do you provide temperature-controlled storage?",
            answer: "Yes, we have specialized cold-storage and ambient-controlled zones specifically for pharmaceuticals and perishable FMCG goods.",
            category: "Warehousing"
        },
        {
            id: 30,
            question: "What is the minimum storage duration for your facilities?",
            answer: "We offer flexible terms ranging from daily short-term 'Transit Storage' to long-term dedicated area leases for industrial partners.",
            category: "Warehousing"
        },
        {
            id: 31,
            question: "How do you handle loading and offloading of containers at the warehouse?",
            answer: "Our yards are equipped with container reach stackers, forklifts (electric and diesel), and automated dock levelers to ensure rapid turnaround.",
            category: "Warehousing"
        },

        // Procurement & Supply Chain
        {
            id: 32,
            question: "What are your core procurement categories?",
            answer: "We specialize in industrial equipment, automotive spare parts, construction materials, and specialized logistics hardware sourcing.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 33,
            question: "How do you vet global vendors?",
            answer: "Our vetting includes factory audits, financial solvency checks, ISO certification verification, and historical performance reviews.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 34,
            question: "Can you manage the entire supply chain from sourcing to delivery?",
            answer: "Yes, we offer 'Total Chain Orchestration,' where we source, clear, store, and transport goods, providing a single point of accountability.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 35,
            question: "How do you handle bulk material procurement?",
            answer: "We leverage our scale and global network to negotiate volume-based pricing, handling all export/import documentation and financing logistics.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 36,
            question: "What is your strategy for supply chain risk mitigation?",
            answer: "We utilize AI-driven forecasting and maintain 'Multi-Source' vendor strategies to ensure continuity if one region or supplier face disruption.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 37,
            question: "Do you provide trade financing options?",
            answer: "For strategic partners, we offer structured trade finance solutions, including Letters of Credit (LC) management and deferred payment terms.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 38,
            question: "How do you optimize procurement costs?",
            answer: "Through market data analysis, TCO (Total Cost of Ownership) modeling, and logistics synergy where we utilize our own fleet to lower landed costs.",
            category: "Procurement & Supply Chain"
        },
        {
            id: 39,
            question: "What KPIs do you provide for supply chain performance?",
            answer: "Key metrics include Order Lead Time, Cost-to-Serve, Perfect Order Index, and Inventory Turnover Ratios, accessible via your dashboard.",
            category: "Procurement & Supply Chain"
        },

        // GPS Tracking
        {
            id: 40,
            question: "Is real-time GPS tracking available for every haulage trip?",
            answer: "Yes, 100% of our fleet is equipped with high-precision GPS units that provide real-time updates every 30 seconds via satellite and GSM.",
            category: "GPS Tracking"
        },
        {
            id: 41,
            question: "What is 'Geo-Fencing' and how does it protect my cargo?",
            answer: "Geo-fencing creates digital boundaries around your route. If a truck deviates from the approved corridor, an instant alarm is triggered at our Command Center.",
            category: "GPS Tracking"
        },
        {
            id: 42,
            question: "Can I see the speed and driving behavior of the driver?",
            answer: "Yes, our system monitors speed, harsh braking, and idling. We maintain a strict 60km/h limit for all heavy vehicles to ensure safety.",
            category: "GPS Tracking"
        },
        {
            id: 43,
            question: "Does the tracking work in remote areas with poor GSM coverage?",
            answer: "Yes, we utilize Dual-Mode (Satellite/GSM) trackers that switch to satellite when GSM signal is lost, ensuring uninterrupted visibility.",
            category: "GPS Tracking"
        },
        {
            id: 44,
            question: "How can I access the live tracking portal?",
            answer: "Once a shipment is active, you can log into the client portal or click the unique tracking link sent to your registered email/phone.",
            category: "GPS Tracking"
        },
        {
            id: 45,
            question: "Do you provide historical trip reports and idling data?",
            answer: "Full archival mapping is available for every trip, including stops, duration of transit, and fuel consumption trends over time.",
            category: "GPS Tracking"
        },
        {
            id: 46,
            question: "What happens if the GPS unit is tampered with?",
            answer: "Our units have independent power supplies and tamper-proof casings. Disconnection triggers an immediate 'Critical Event' and local recovery team dispatch.",
            category: "GPS Tracking"
        },
        {
            id: 47,
            question: "Is there an AI element to your tracking system?",
            answer: "Our AI engine analyzes traffic patterns and weather to predict arrival times (ETA) with 95% accuracy, adjusting in real-time.",
            category: "GPS Tracking"
        }
    ];

    const filteredFaqs = faqs.filter(f =>
        (f.category === activeCategory) &&
        (f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main className="bg-[#f8faf8] dark:bg-[#0a0f0a] min-h-screen transition-colors duration-500">
            {/* Hero Section - Homepage Adopted Structure */}
            <section className="relative flex min-h-[750px] w-full items-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md mb-10 mx-auto font-primary">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                            </span>
                            Support & Intelligence Hub
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter uppercase text-white mb-10 font-primary">
                            Mubraiz Resources <br />
                            <span className="text-[#a1dc84]">Help Hub.</span>
                        </h1>

                        <p className="text-lg font-medium leading-relaxed text-slate-300 font-secondary max-w-lg border-l-4 border-[#a1dc84] pl-8 mb-16 mx-auto">
                            Get instant answers to technical logistics queries, customs protocols, and fleet operational procedures within our global resource node.
                        </p>

                        <div className="max-w-2xl mx-auto relative group">
                            <div className="absolute inset-0 bg-[#a1dc84]/20 blur-3xl group-focus-within:bg-[#a1dc84]/30 transition-all opacity-0 group-focus-within:opacity-100"></div>
                            <div className="relative flex items-center bg-white/5 backdrop-blur-3xl rounded-[3rem] h-24 border border-white/10 px-10 shadow-2xl">
                                <span className="material-symbols-outlined text-4xl text-[#a1dc84] mr-6">search</span>
                                <input
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-xl font-medium text-white placeholder:text-slate-500 font-secondary"
                                    placeholder="Search technical specs, customs help..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-80 shrink-0 space-y-10">
                        <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden p-4">
                            <div className="p-6 border-b border-slate-50 dark:border-white/5">
                                <h3 className="font-black text-[10px] uppercase tracking-widest text-[#a1dc84] font-primary">Support Sectors</h3>
                            </div>
                            <nav className="p-2 space-y-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`w-full flex items-center gap-5 px-8 py-5 rounded-lg font-black text-xs uppercase tracking-widest transition-all font-primary ${activeCategory === cat.name
                                            ? 'bg-[#a1dc84] text-slate-900 shadow-2xl shadow-[#a1dc84]/30'
                                            : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined !text-2xl">{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Quick Contact Card */}
                        <div className="bg-slate-900 p-12 rounded-[4rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                                <span className="material-symbols-outlined text-9xl">contact_support</span>
                            </div>
                            <h3 className="text-3xl font-black mb-6 relative z-10 leading-none uppercase tracking-tighter font-primary">Direct <br />Consult.</h3>
                            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-10 relative z-10 font-secondary">
                                Our executive support units are online to manage mission-critical concerns.
                            </p>
                            <div className="space-y-4 relative z-10">
                                <Link href="/contact" className="w-full bg-[#a1dc84] text-slate-900 flex items-center justify-center gap-4 px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#a1dc84]/20 font-primary">
                                    <span className="material-symbols-outlined !text-xl">chat</span>
                                    Instant Message
                                </Link>
                                <button className="w-full bg-white/5 border border-white/10 flex items-center justify-center gap-4 px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all font-primary">
                                    <span className="material-symbols-outlined !text-xl">mail</span>
                                    Open Ticket
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* FAQ Engine */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-10 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none font-primary">{activeCategory}</h2>
                            <span className="bg-slate-900 dark:bg-white/5 text-white dark:text-[#a1dc84] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest font-primary">{filteredFaqs.length} Entries</span>
                        </div>

                        <div className="space-y-8">
                            {filteredFaqs.map(faq => (
                                <motion.div
                                    layout
                                    key={faq.id}
                                    className={`bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden transition-all duration-300 border border-slate-100 dark:border-white/5 ${expandedFaq === faq.id ? 'shadow-2xl ring-1 ring-[#a1dc84]' : 'hover:shadow-xl'}`}
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-12 text-left group"
                                    >
                                        <span className={`text-lg md:text-xl font-bold decoration-2 uppercase tracking-tighter transition-colors font-primary ${expandedFaq === faq.id ? 'text-[#a1dc84]' : 'text-slate-900 dark:text-white group-hover:text-[#a1dc84]'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ${expandedFaq === faq.id ? 'rotate-180 text-[#a1dc84]' : 'text-slate-300'}`}>
                                            expand_circle_down
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {expandedFaq === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]"
                                            >
                                                <div className="p-12 space-y-8 text-left">
                                                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium font-secondary border-l-4 border-[#a1dc84] pl-10">
                                                        {faq.answer}
                                                    </p>
                                                    {faq.proTip && (
                                                        <div className="p-8 bg-[#a1dc84]/10 rounded-[2.5rem] border border-[#a1dc84]/20 flex gap-6 items-start shadow-inner">
                                                            <span className="material-symbols-outlined text-[#a1dc84] !text-4xl mt-1">verified</span>
                                                            <div className="flex-1">
                                                                <span className="uppercase tracking-[0.4em] text-[10px] font-black block mb-3 text-slate-400 font-primary">Executive Insight</span>
                                                                <p className="text-sm font-black text-slate-900 dark:text-white leading-relaxed font-secondary">
                                                                    {faq.proTip}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
