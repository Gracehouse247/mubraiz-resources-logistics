"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function GlossaryContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'glossary' | 'incoterms'>('glossary');
    const [selectedLetter, setSelectedLetter] = useState('ALL');

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const terms = [
        // A
        { t: "Ad Valorem", cat: "Customs", d: "Duty calculated as a percentage of the total value of the goods, rather than weight or quantity.", l: "A" },
        { t: "Air Waybill (AWB)", cat: "Documents", d: "A non-negotiable contract between a shipper and an airline for the transport of air freight.", l: "A" },
        { t: "AfCFTA", cat: "Trade", d: "African Continental Free Trade Area. A strategic framework designed to create a single market for goods and services across Africa.", l: "A", crucial: true },
        { t: "Apapa Port", cat: "Locations", d: "Nigeria's premier port complex and a major hub for international maritime trade in West Africa.", l: "A" },

        // B
        { t: "Bill of Lading (B/L)", cat: "Legal", d: "The primary legal document detailing type, quantity, and destination of goods. It serves as a title of ownership.", l: "B", crucial: true },
        { t: "Bonded Warehouse", cat: "Storage", d: "A secure facility where goods may be stored without payment of duty until they are removed for final use.", l: "B" },
        { t: "BAF (Bunker Adjustment Factor)", cat: "Finance", d: "An adjustment charge added by shipping lines to account for fluctuations in fuel costs.", l: "B" },
        { t: "Break-Bulk", cat: "Shipping", d: "Cargo that is not containerized but loaded individually, such as machinery, pipes, or project cargo.", l: "B" },

        // C
        { t: "CBM (Cubic Meter)", cat: "Measurement", d: "Unit of volume used to calculate shipping costs for bulk and Less-than-Container Load (LCL) shipments.", l: "C" },
        { t: "CIF (Cost, Insurance, Freight)", cat: "Incoterms", d: "Trade term requiring the seller to arrange carriage by sea and provide insurance for the cargo.", l: "C", crucial: true },
        { t: "Consignee", cat: "Legal", d: "The party named in shipping documents as the authorized receiver of the goods.", l: "C" },
        { t: "Cross-Docking", cat: "Warehousing", d: "A logistics practice where goods are unloaded from an incoming vehicle and loaded directly into outbound vehicles.", l: "C" },
        { t: "Customs Broker", cat: "Services", d: "A licensed professional who facilitates the clearance of goods through customs for importers or exporters.", l: "C" },

        // D
        { t: "Demurrage", cat: "Shipping", d: "A penalty charge applied by terminal operators when containers are not removed from the port within the free period.", l: "D", crucial: true },
        { t: "Detention", cat: "Shipping", d: "Charges applied when an empty container is not returned to the shipping line within the agreed timeframe after de-stuffing.", l: "D" },
        { t: "DDP (Delivered Duty Paid)", cat: "Incoterms", d: "The seller assumes all responsibility, including taxes and duties, until the goods reach the buyer's destination.", l: "D" },
        { t: "Dry Port", cat: "Locations", d: "An inland intermodal terminal directly connected by road or rail to a seaport.", l: "D" },

        // E
        { t: "EDI (Electronic Data Interchange)", cat: "Tech", d: "Computer-to-computer exchange of business documents in a standardized electronic format.", l: "E" },
        { t: "ETO", cat: "Regulatory", d: "The Electronic Call-Up system used by the Nigerian Ports Authority (NPA) to manage truck traffic.", l: "E", crucial: true },
        { t: "ETA", cat: "Shipping", d: "Estimated Time of Arrival. The date and time a carrier is expected to reach its destination.", l: "E" },
        { t: "Export Proceeds", cat: "Finance", d: "Foreign exchange earnings generated from the sale of goods or services exported from Nigeria.", l: "E" },

        // F
        { t: "FEU (Forty-foot Equivalent Unit)", cat: "Measurement", d: "A standard 40-foot container used as a base unit for measuring container capacity.", l: "F" },
        { t: "Form M", cat: "Regulatory", d: "Mandatory electronic document required for all imports into Nigeria, initiated through an authorized dealer bank.", l: "F", crucial: true },
        { t: "FOB (Free On Board)", cat: "Incoterms", d: "The seller is responsible until the goods are loaded onto the vessel at the named port of shipment.", l: "F" },
        { t: "Forwarder", cat: "Services", d: "An agent who organizes shipments for individuals or corporations to get goods from the manufacturer to a final point of distribution.", l: "F" },

        // G
        { t: "GIT (Goods in Transit)", cat: "Insurance", d: "Insurance coverage for goods being transported by road, rail, or air against loss or damage.", l: "G" },
        { t: "Gross Weight", cat: "Measurement", d: "The total weight of the goods, including packaging and the container or pallet.", l: "G" },
        { t: "Groupage", cat: "Shipping", d: "The process of consolidating small shipments from multiple customers into a single container.", l: "G" },

        // H
        { t: "HAZMAT", cat: "Cargo", d: "Hazardous Materials. Goods that pose a risk to health, safety, or property during transportation.", l: "H" },
        { t: "HS Code", cat: "Customs", d: "Harmonized System Code. An international standardized system for classifying traded products.", l: "H", crucial: true },
        { t: "Haulage", cat: "Transport", d: "The commercial transport of goods by road, usually involving large trucks or trailers.", l: "H" },

        // I
        { t: "Incoterms", cat: "Legal", d: "International Commercial Terms. A series of pre-defined commercial terms published by the International Chamber of Commerce (ICC).", l: "I", crucial: true },
        { t: "Ibafo Technical Hub", cat: "Locations", d: "Mubraiz Resources' primary facility for truck staging and logistics management along the Lagos-Ibadan corridor.", l: "I" },
        { t: "Import Duty", cat: "Customs", d: "A tax collected on imports by the customs authorities of a country based on the value of the goods.", l: "I" },

        // J
        { t: "JIT (Just-In-Time)", cat: "Logistics", d: "Inventories strategy where materials are delivered exactly when needed in the production process.", l: "J" },

        // K
        { t: "Knot", cat: "Measurement", d: "Unit of speed used in maritime navigation, equal to one nautical mile per hour.", l: "K" },

        // L
        { t: "LCL (Less than Container Load)", cat: "Shipping", d: "Shipments that do not fill a whole container and are consolidated with other cargoes.", l: "L" },
        { t: "Lekki Deep Sea Port", cat: "Locations", d: "Nigeria's first deep-sea port designed to handle large vessels and reduce congestion at Apapa.", l: "L" },
        { t: "Loading Meter", cat: "Measurement", d: "A standard unit of measurement for truck cargo space (1 linear meter of the truck's length).", l: "L" },

        // N
        { t: "NCS", cat: "Regulatory", d: "Nigeria Customs Service. The government agency responsible for revenue collection and anti-smuggling operations.", l: "N", crucial: true },
        { t: "NXP Form", cat: "Regulatory", d: "Nigerian Export Proceed form. Mandatory for all commercial exports to ensure receipt of export proceeds.", l: "N", crucial: true },
        { t: "NPA", cat: "Regulatory", d: "Nigerian Ports Authority. The federal agency that governs and operates the ports of Nigeria.", l: "N" },
        { t: "NIMASA", cat: "Regulatory", d: "Nigerian Maritime Administration and Safety Agency. Responsible for maritime safety and security.", l: "N" },

        // P
        { t: "PAAR", cat: "Customs", d: "Pre-Arrival Assessment Report. A document issued by NCS for the clearance of goods at Nigerian ports.", l: "P", crucial: true },
        { t: "Palletization", cat: "Warehousing", d: "The process of placing goods on pallets for easier handling, storage, and transport.", l: "P" },
        { t: "Port Dwell Time", cat: "Shipping", d: "The amount of time cargo stays in a terminal after it has been offloaded from a vessel.", l: "P" },

        // R
        { t: "Reefer", cat: "Shipping", d: "A refrigerated container used for transporting temperature-sensitive cargo like food or pharmaceuticals.", l: "R" },
        { t: "Ro-Ro (Roll-on/Roll-off)", cat: "Shipping", d: "Vessels designed to carry wheeled cargo, such as cars, trucks, and trailers, that are driven on and off the ship.", l: "R" },

        // S
        { t: "Skeletal Trailer", cat: "Transport", d: "A specialized trailer chassis designed for the transport of shipping containers of various sizes.", l: "S" },
        { t: "SONCAP", cat: "Regulatory", d: "Standards Organisation of Nigeria Conformity Assessment Program. Mandatory for regulated products imported into Nigeria.", l: "S" },
        { t: "Shipping Lane", cat: "Shipping", d: "A regularly used route for ocean-going vessels.", l: "S" },

        // T
        { t: "TEU (Twenty-foot Equivalent Unit)", cat: "Measurement", d: "The standard unit for describing the capacity of container ships and terminals.", l: "T", crucial: true },
        { t: "TDO (Terminal Delivery Order)", cat: "Documents", d: "Document issued by a terminal operator authorizing the release of cargo to a carrier.", l: "T" },
        { t: "Transit Time", cat: "Shipping", d: "The total time required for a shipment to move from its point of origin to its final destination.", l: "T" },

        // U
        { t: "Ullage", cat: "Measurement", d: "The empty space in a liquid container, such as a tank or a bottle, to allow for expansion.", l: "U" },

        // V
        { t: "VAT (Value Added Tax)", cat: "Finance", d: "A consumption tax placed on a product whenever value is added at each stage of the supply chain.", l: "V" },
        { t: "Vessel Outward Manifest", cat: "Documents", d: "A document detailing all cargo loaded onto a ship for export, submitted to customs before departure.", l: "V" },

        // W
        { t: "WMS (Warehouse Management System)", cat: "Tech", d: "A software application designed to support and optimize warehouse functionality and distribution center management.", l: "W" },
        { t: "WHT (Withholding Tax)", cat: "Finance", d: "An advance payment of income tax in Nigeria, typically deducted at source from payments to contractors.", l: "W" },
    ];

    const incoterms = [
        { code: "EXW", name: "Ex Works", origin: true, freight: false, insurance: false, import: false, delivery: false },
        { code: "FCA", name: "Free Carrier", origin: true, freight: false, insurance: false, import: false, delivery: false },
        { code: "FAS", name: "Free Alongside Ship", origin: true, freight: false, insurance: false, import: false, delivery: false },
        { code: "FOB", name: "Free On Board", origin: true, freight: false, insurance: false, import: false, delivery: false },
        { code: "CFR", name: "Cost and Freight", origin: true, freight: true, insurance: false, import: false, delivery: false },
        { code: "CIF", name: "Cost, Insurance, Freight", origin: true, freight: true, insurance: true, import: false, delivery: false },
        { code: "CPT", name: "Carriage Paid To", origin: true, freight: true, insurance: false, import: false, delivery: false },
        { code: "CIP", name: "Carriage & Insurance Paid", origin: true, freight: true, insurance: true, import: false, delivery: false },
        { code: "DAP", name: "Delivered at Place", origin: true, freight: true, insurance: true, import: false, delivery: true },
        { code: "DPU", name: "Delivered at Place Unloaded", origin: true, freight: true, insurance: true, import: false, delivery: true },
        { code: "DDP", name: "Delivered Duty Paid", origin: true, freight: true, insurance: true, import: true, delivery: true },
    ];

    const filteredTerms = useMemo(() => {
        return terms.filter(item => {
            const matchesSearch = item.t.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.d.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesLetter = selectedLetter === 'ALL' || item.l === selectedLetter;
            return matchesSearch && matchesLetter;
        });
    }, [searchQuery, selectedLetter]);

    const groupedTermsByLetter = useMemo(() => {
        const groups: Record<string, typeof terms> = {};
        filteredTerms.forEach(term => {
            if (!groups[term.l]) groups[term.l] = [];
            groups[term.l].push(term);
        });
        return Object.keys(groups).sort().map(l => ({ letter: l, terms: groups[l] }));
    }, [filteredTerms]);

    return (
        <div className="bg-[#f8faf8] dark:bg-[#0a0f0a] font-primary text-slate-700 dark:text-white transition-colors duration-500 min-h-screen pt-24 pb-20">
            <main className="max-w-7xl mx-auto px-6 space-y-20">
                {/* Hero Section */}
                <section className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-slate-900 group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 z-0 opacity-40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#a1dc8433,transparent)]"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-20 max-w-3xl space-y-8"
                    >
                        <span className="inline-block bg-[#a1dc84]/10 border border-[#a1dc84]/30 text-[#a1dc84] px-6 py-2 rounded-full text-[10px] font-black capitalize tracking-[0.4em] mb-4 font-primary">Precision Trade Education</span>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter capitalize font-primary">
                            Shipping <span className="text-[#a1dc84]">Glossary.</span>
                        </h1>
                        <p className="text-slate-200 text-lg leading-relaxed font-medium max-w-lg mx-auto font-secondary">
                            Master the executive language of global trade. From NCS protocols to Incoterms matrices, we bridge the communication gap.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-10">
                            <button className="bg-[#a1dc84] text-slate-900 font-black px-8 py-4 rounded-lg flex items-center gap-3 shadow-2xl shadow-[#a1dc84]/20 hover:scale-105 transition-all text-xs capitalize tracking-widest font-primary">
                                <span className="material-symbols-outlined">download</span>
                                Download Intelligence Brief
                            </button>
                            <button
                                onClick={() => setActiveTab('incoterms')}
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-8 py-4 rounded-lg hover:bg-white/20 transition-all text-xs capitalize tracking-widest font-primary"
                            >
                                Responsibility Matrix
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Search & Intelligence Bar */}
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 p-8 sticky top-28 z-40 transition-all backdrop-blur-xl bg-white/80 dark:bg-slate-900/80">
                    <div className="flex flex-col gap-8">
                        {/* Search Bar */}
                        <div className="relative w-full group">
                            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-3xl transition-colors group-focus-within:text-[#a1dc84]">search</span>
                            <input
                                className="w-full h-24 pl-20 pr-12 bg-slate-50 dark:bg-black/20 border-2 border-transparent focus:border-[#a1dc84] rounded-[2.5rem] text-xl font-bold transition-all dark:text-white outline-none placeholder:text-slate-400 font-secondary"
                                placeholder="Search high-value trade terms (e.g. Form M, TEU, PAAR)"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4">
                                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 font-primary">
                                    <span className="material-symbols-outlined text-[14px] text-slate-400">psychology</span>
                                    <span className="text-[10px] font-black text-slate-400 capitalize tracking-widest">Semantic Query</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl w-fit font-primary">
                                <button
                                    onClick={() => setActiveTab('glossary')}
                                    className={`px-10 py-4 rounded-lg text-[10px] font-black tracking-[0.2em] capitalize transition-all ${activeTab === 'glossary' ? 'bg-[#a1dc84] text-slate-900 shadow-xl shadow-[#a1dc84]/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                    Consolidated Glossary
                                </button>
                                <button
                                    onClick={() => setActiveTab('incoterms')}
                                    className={`px-10 py-4 rounded-lg text-[10px] font-black tracking-[0.2em] capitalize transition-all ${activeTab === 'incoterms' ? 'bg-[#a1dc84] text-slate-900 shadow-xl shadow-[#a1dc84]/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                    Incoterms Hub
                                </button>
                            </div>

                            {activeTab === 'glossary' && (
                                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar max-w-full md:max-w-2xl font-primary">
                                    <button
                                        onClick={() => setSelectedLetter('ALL')}
                                        className={`flex-shrink-0 size-12 rounded-lg font-black text-xs flex items-center justify-center transition-all ${selectedLetter === 'ALL' ? 'bg-[#a1dc84] text-slate-900 shadow-lg' : 'bg-slate-50 dark:bg-black/40 text-slate-400 hover:bg-[#a1dc84]/10 hover:text-[#a1dc84]'}`}
                                    >
                                        ALL
                                    </button>
                                    {letters.map(l => (
                                        <button
                                            key={l}
                                            onClick={() => setSelectedLetter(l)}
                                            className={`flex-shrink-0 size-12 rounded-2xl font-black text-xs flex items-center justify-center transition-all ${selectedLetter === l ? 'bg-[#a1dc84] text-slate-900 shadow-lg' : 'bg-slate-50 dark:bg-black/40 text-slate-400 hover:bg-[#a1dc84]/10 hover:text-[#a1dc84]'}`}
                                        >
                                            {l}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === 'glossary' ? (
                        <motion.div
                            key="glossary"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
                        >
                            {/* Glossary Terms List */}
                            <div className="lg:col-span-8 space-y-20">
                                {groupedTermsByLetter.map(group => (
                                    <section key={group.letter} className="space-y-10 group/section">
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-100 dark:text-white/5 flex items-center gap-8 group-hover/section:text-[#a1dc84]/10 transition-colors font-primary capitalize">
                                            {group.letter}
                                            <div className="h-[2px] flex-grow bg-slate-100 dark:bg-white/5"></div>
                                        </h3>
                                        <div className="grid gap-8">
                                            {group.terms.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ x: 15 }}
                                                    className={`p-10 rounded-[2.5rem] transition-all border-l-[6px] group shadow-sm bg-white dark:bg-slate-900/50 ${item.crucial ? 'border-[#a1dc84] shadow-xl shadow-[#a1dc84]/5' : 'border-transparent hover:border-[#a1dc84]/30 hover:shadow-2xl'}`}
                                                >
                                                    <div className="flex items-start justify-between mb-6">
                                                        <div className="space-y-2">
                                                            <h4 className="text-2xl font-black text-slate-900 dark:text-white capitalize tracking-tight group-hover:text-[#a1dc84] transition-colors font-primary">{item.t}</h4>
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-[9px] font-black px-4 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full capitalize tracking-[0.2em] text-slate-400 font-primary">
                                                                    {item.cat}
                                                                </span>
                                                                {item.crucial && (
                                                                    <span className="text-[8px] font-black text-[#a1dc84] capitalize tracking-widest flex items-center gap-1 font-primary">
                                                                        <span className="material-symbols-outlined !text-[12px]">verified</span> Critical Term
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className="text-5xl font-black text-slate-100 dark:text-white/5 group-hover:text-[#a1dc84]/10 transition-colors capitalize font-primary">{item.l}</span>
                                                    </div>
                                                    <p className="text-lg font-medium text-slate-500 dark:text-slate-400 leading-relaxed font-secondary">{item.d}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                                {groupedTermsByLetter.length === 0 && (
                                    <div className="text-center py-40 bg-slate-50 dark:bg-white/5 rounded-[4rem]">
                                        <span className="material-symbols-outlined text-8xl text-slate-200 dark:text-white/5 mb-8">search_off</span>
                                        <h3 className="text-2xl font-black text-slate-400">No intelligence matches your query.</h3>
                                        <button
                                            onClick={() => { setSearchQuery(''); setSelectedLetter('ALL'); }}
                                            className="mt-8 text-[#a1dc84] font-black capitalize text-[10px] tracking-[0.3em] hover:opacity-80 transition-opacity"
                                        >
                                            Reset Archive Filter
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Intelligence */}
                            <aside className="lg:col-span-4 space-y-12">
                                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-slate-100 dark:border-white/5 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black mb-8 flex items-center gap-4 capitalize tracking-tighter font-primary">
                                            <span className="material-symbols-outlined text-[#a1dc84] text-3xl">terminal</span>
                                            Market Protocols
                                        </h3>
                                        <div className="space-y-8">
                                            {[
                                                { label: "NCS Form M Filing", status: "Active Q1", icon: "description" },
                                                { label: "PAAR Processing", status: "Fast Track", icon: "verified" },
                                                { label: "NXP Export Filing", status: "Mandatory", icon: "ios_share" },
                                                { label: "ETO Port Access", status: "Live Hub", icon: "sensor_door" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between group/item cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                        <span className="material-symbols-outlined text-slate-300 group-hover/item:text-[#a1dc84] transition-colors">{item.icon}</span>
                                                        <span className="text-[11px] font-black text-slate-500 capitalize group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item.label}</span>
                                                    </div>
                                                    <span className="text-[8px] font-black px-3 py-1 bg-[#a1dc84]/10 text-[#a1dc84] rounded-full capitalize tracking-widest">{item.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="w-full mt-12 bg-slate-50 dark:bg-white/5 px-8 py-4 rounded-lg text-[10px] font-black capitalize tracking-[0.3em] hover:bg-[#a1dc84] hover:text-slate-900 transition-all shadow-xl">
                                            Browse Regulatory Map
                                        </button>
                                    </div>
                                    <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                                        <span className="material-symbols-outlined !text-[12rem]">gavel</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-5xl text-[#a1dc84] mb-8 block group-hover:rotate-12 transition-transform">support_agent</span>
                                        <h3 className="text-3xl font-black mb-6 leading-none tracking-tighter font-primary capitalize">Consult with <br />Logistics <span className="text-[#a1dc84]">Command.</span></h3>
                                        <p className="text-slate-400 font-medium mb-10 leading-relaxed font-secondary">Technical jargon should never hinder your supply chain flow. Our executive consultants are standing by to translate complexity into efficiency.</p>
                                        <button className="w-full bg-[#a1dc84] text-slate-900 px-8 py-4 rounded-lg font-black capitalize text-[10px] tracking-[0.4em] shadow-2xl shadow-[#a1dc84]/20 hover:scale-105 active:scale-95 transition-all font-primary">
                                            Initiate Advisory
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </motion.div>
                    ) : (
                        <motion.section
                            key="incoterms"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="space-y-16"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white capitalize tracking-tighter leading-none font-primary">Incoterms 2020 <br /><span className="text-[#a1dc84]">Global Matrix.</span></h2>
                                    <p className="text-slate-500 text-lg md:text-xl font-medium mt-8 leading-relaxed font-secondary">A definitive map of the allocation of duties, risks, and transport costs between global buyers and sellers.</p>
                                </div>
                                <div className="flex items-center gap-10 px-10 py-6 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="size-4 rounded-md bg-[#a1dc84] shadow-lg shadow-[#a1dc84]/40"></div>
                                        <span className="text-[10px] font-black text-slate-500 capitalize tracking-widest">Seller Risk Control</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-4 rounded-md bg-slate-200 dark:bg-slate-700"></div>
                                        <span className="text-[10px] font-black text-slate-500 capitalize tracking-widest">Buyer Risk Intake</span>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl bg-white dark:bg-slate-900">
                                <table className="w-full min-w-[1100px] border-collapse text-left">
                                    <thead>
                                        <tr className="bg-[#a1dc84] text-slate-900 text-[10px] font-black capitalize tracking-[0.2em] font-primary">
                                            <th className="px-12 py-10">Standard Term</th>
                                            <th className="px-6 py-10">Brief Definition</th>
                                            <th className="px-4 py-10 text-center capitalize">Export Pack</th>
                                            <th className="px-4 py-10 text-center capitalize">Origin Haul</th>
                                            <th className="px-4 py-10 text-center capitalize">Main Freight</th>
                                            <th className="px-4 py-10 text-center capitalize">Insurance</th>
                                            <th className="px-4 py-10 text-center capitalize">Import Clear</th>
                                            <th className="px-4 py-10 text-center capitalize">Door Deliv.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {incoterms.map((term, i) => (
                                            <tr key={term.code} className="border-b last:border-none dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors group/row">
                                                <td className="px-12 py-10">
                                                    <div className="font-black text-2xl text-slate-900 dark:text-white group-hover/row:text-[#a1dc84] transition-colors font-primary">{term.code}</div>
                                                </td>
                                                <td className="px-6 py-10">
                                                    <div className="text-[11px] text-slate-500 font-bold capitalize tracking-tight font-secondary">{term.name}</div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className="size-6 rounded-lg bg-[#a1dc84] mx-auto shadow-xl shadow-[#a1dc84]/20 flex items-center justify-center text-slate-900">
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className={`size-6 rounded-lg mx-auto transition-transform group-hover/row:scale-110 shadow-lg flex items-center justify-center ${term.origin ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-100 dark:bg-black/20 text-transparent'}`}>
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className={`size-6 rounded-lg mx-auto transition-transform group-hover/row:scale-110 shadow-lg flex items-center justify-center ${term.freight ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-100 dark:bg-black/40 text-transparent'}`}>
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className={`size-6 rounded-lg mx-auto transition-transform group-hover/row:scale-110 shadow-lg flex items-center justify-center ${term.insurance ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-100 dark:bg-black/40 text-transparent'}`}>
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className={`size-6 rounded-lg mx-auto transition-transform group-hover/row:scale-110 shadow-lg flex items-center justify-center ${term.import ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-100 dark:bg-black/40 text-transparent'}`}>
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-10">
                                                    <div className={`size-6 rounded-lg mx-auto transition-transform group-hover/row:scale-110 shadow-lg flex items-center justify-center ${term.delivery ? 'bg-[#a1dc84] text-slate-900 shadow-[#a1dc84]/20' : 'bg-slate-100 dark:bg-black/40 text-transparent'}`}>
                                                        <span className="material-symbols-outlined !text-[14px]">check</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-10 bg-slate-100 dark:bg-white/5 rounded-[3rem] text-center border border-slate-200 dark:border-white/10 font-primary">
                                <p className="text-[10px] text-slate-400 font-black capitalize tracking-[0.4em] mb-4">
                                    * This intelligence matrix is purely educational. Trade risks are subject to specific contractual addendums and regional variations.
                                </p>
                                <button className="text-[#a1dc84] font-black capitalize text-[10px] tracking-[0.2em] flex items-center gap-3 mx-auto hover:gap-6 transition-all font-primary">
                                    Request official ICC 2020 Documentation <span className="material-symbols-outlined !text-[14px]">east</span>
                                </button>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* Technical Deep Link */}
                <div className="mt-40 p-16 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#a1dc8422,transparent_70%)]"></div>
                    <span className="material-symbols-outlined text-7xl text-[#a1dc84] mb-8 block group-hover:scale-110 transition-transform">auto_stories</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter capitalize font-primary">Need a deep technical <span className="text-[#a1dc84]">investigation?</span></h3>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium font-secondary">Our Knowledge Engine contains thousands of whitepapers, regulatory updates, and expert supply chain strategies.</p>
                    <Link
                        href="/resources/wiki"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-[#a1dc84] text-slate-900 font-black rounded-lg hover:scale-105 transition-all shadow-2xl shadow-[#a1dc84]/40 text-xs capitalize tracking-[0.3em]"
                    >
                        Explore Knowledge Engine
                        <span className="material-symbols-outlined">menu_book</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}
