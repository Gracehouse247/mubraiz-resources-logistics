"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import RegionSelector from "@/components/modals/RegionSelector";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const services = [
    { title: "Executive Haulage", href: "/services/haulage", desc: "Premium port-to-door container logistics." },
    { title: "Contract Logistics", href: "/services/warehousing", desc: "Next-gen storage and distribution intelligence." },
    { title: "Customs Brokering", href: "/services/customs", desc: "Expert compliance & global forwarding." },
    { title: "Global Sourcing", href: "/services/procurement", desc: "Strategic procurement & supply orchestration." },
    { title: "Fleet Management", href: "/services/fleet", desc: "Modern industrial infrastructure & assets." },
    { title: "Global Trade", href: "/services/global-trade", desc: "Continental export & commodity routes." }
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (pathname.startsWith('/portal')) return null;
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isFleetOpen, setIsFleetOpen] = useState(false);
    const [isRegionSelectorOpen, setIsRegionSelectorOpen] = useState(false);

    const companyLinks = [
        { title: "About Us", href: "/about", desc: "Our history, mission and vision." },
        { title: "Strategic Partners", href: "/partners", desc: "Investor relations and global alliances." },
        { title: "Contact Us", href: "/contact", desc: "Get in touch with our global offices." },
        { title: "Careers", href: "/careers", desc: "Join our team of logistics experts." },
        { title: "Global Network", href: "/network/map", desc: "Interactive command center and infrastructure." },
        { title: "Support Center", href: "/resources/help", desc: "24/7 dedicated customer assistance." }
    ];

    const resourceLinks = [
        { title: "Knowledge Wiki", href: "/resources/wiki", desc: "AI-powered trade & compliance engine." },
        { title: "Industry Blog", href: "/blog", desc: "Latest logistics insights & authority posts." },
        { title: "Expert Consultation", href: "/resources/consultation", desc: "Book a 1-on-1 with logistics strategists." },
        { title: "Cost Calculator", href: "/tools/calculator", desc: "Instant freight and volumetric tool." },
        { title: "Logistics Glossary", href: "/resources/glossary", desc: "Trade terms and Incoterms guide." },
        { title: "Downloads Archive", href: "/resources/downloads", desc: "Regulatory forms & corporate specs." },
        { title: "Case Studies", href: "/resources/case-studies", desc: "Our success stories and galleries." },
        { title: "Help Center", href: "/resources/help", desc: "FAQs and support documentation." }
    ];

    const fleetLinks = [
        { title: "Asset Showcase", href: "/fleet", desc: "High-performance Peterbilt & Kenworth units." },
        { title: "Maintenance Yard", href: "/fleet/facility", desc: "Our Ibafo precision garage & tech hub." },
        { title: "Safety & Excellence", href: "/fleet/safety", desc: "Technical protocols and ISO engineering." },
        { title: "Fleet Tracking", href: "/portal/tracking", desc: "Real-time global asset monitoring." }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center group">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="transition-all"
                    >
                        <img
                            src="/images/mubraiz-logo.svg"
                            alt="Mubraiz Resources Limited"
                            className="h-12 w-auto object-contain"
                        />
                    </motion.div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {/* Services Mega Menu */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className={`text-sm font-bold transition-colors flex items-center gap-1 ${isServicesOpen ? 'text-[#a1dc84]' : 'text-slate-700 hover:text-[#a1dc84]'}`}>
                            Services
                            <span className={`material-symbols-outlined !text-lg transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-[640px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-[60] grid grid-cols-3 gap-4"
                                >
                                    {/* Column 1: Logistics Solutions */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-[#a1dc84]/10 flex items-center justify-center text-[#a1dc84]">
                                                <span className="material-symbols-outlined !text-lg">local_shipping</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Logistics Core</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Executive Haulage", href: "/services/haulage", desc: "Expert port-to-door container logistics.", icon: "box_edit" },
                                                { title: "Contract Logistics", href: "/services/warehousing", desc: "Next-gen storage & intelligence.", icon: "warehouse" },
                                                { title: "Customs Brokering", href: "/services/customs", desc: "Regulatory compliance & clearance.", icon: "gavel" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                                                >
                                                    <div className="mt-1 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-[#a1dc84] group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#a1dc84] transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Strategic Operations */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                                <span className="material-symbols-outlined !text-lg">hub</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Strategic Ops</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Global Sourcing", href: "/services/procurement", desc: "Supply chain orchestration & vetting.", icon: "public" },
                                                { title: "Fleet Management", href: "/services/fleet", desc: "Industrial asset & vehicle oversight.", icon: "settings_suggest" },
                                                { title: "Global Trade", href: "/services/global-trade", desc: "Cross-border & continental routes.", icon: "language" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                                                >
                                                    <div className="mt-1 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-orange-500 group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-orange-500 transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 3: Featured Infrastructure */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                <span className="material-symbols-outlined !text-lg">precision_manufacturing</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Hubs</span>
                                        </div>
                                        <Link href="/fleet/facility" className="block group/card overflow-hidden rounded-2xl border border-slate-100 hover:border-[#a1dc84]/20 transition-all">
                                            <div className="relative h-24 w-full overflow-hidden">
                                                <img src="/images/fleet/flet yard/fleetyard1.png" alt="Ibafo Facility" className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                                <div className="absolute bottom-2 left-2 text-[9px] font-black text-white uppercase tracking-widest">Ibafo Hub</div>
                                            </div>
                                            <div className="p-2.5 bg-slate-50">
                                                <div className="text-xs font-bold text-slate-900 mb-0.5">Maintenance Yard</div>
                                                <p className="text-[9px] text-slate-400 leading-tight">24/7 fleet optimization hub.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Fleet Mega Menu */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setIsFleetOpen(true)}
                        onMouseLeave={() => setIsFleetOpen(false)}
                    >
                        <Link
                            href="/fleet"
                            className={`text-sm font-bold transition-colors flex items-center gap-1 ${isFleetOpen ? 'text-[#a1dc84]' : 'text-slate-700 hover:text-[#a1dc84]'}`}
                        >
                            Fleet
                            <span className={`material-symbols-outlined !text-lg transition-transform duration-300 ${isFleetOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </Link>

                        <AnimatePresence>
                            {isFleetOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-[540px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-[60] grid grid-cols-2 gap-4"
                                >
                                    {/* Column 1: Asset Portfolio */}
                                    <div className="space-y-3">
                                        <Link href="/fleet" className="flex items-center gap-3 mb-1 group/title">
                                            <div className="size-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover/title:bg-[#a1dc84] group-hover/title:text-slate-900 transition-all">
                                                <span className="material-symbols-outlined !text-lg">airport_shuttle</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/title:text-[#a1dc84] transition-colors">Portfolios</span>
                                        </Link>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Full Registry", href: "/fleet", icon: "dashboard" },
                                                { title: "Heavy Haulage", href: "/fleet", icon: "weight" },
                                                { title: "Intermodal", href: "/fleet", icon: "grid_view" },
                                                { title: "Distribution", href: "/fleet", icon: "shutter_speed" },
                                                { title: "Specialized", href: "/fleet", icon: "construction" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                                >
                                                    <div className="mt-0.5 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-teal-500 group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-teal-500 transition-colors">{link.title}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Tech & Safety */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                                                <span className="material-symbols-outlined !text-lg">verified</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Engineering</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Maintenance", href: "/fleet/facility", icon: "engineering" },
                                                { title: "Safety Ops", href: "/fleet/safety", icon: "security" },
                                                { title: "Telemetry", href: "/portal/tracking", icon: "satellite_alt" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                                >
                                                    <div className="mt-0.5 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-cyan-500 group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-cyan-500 transition-colors">{link.title}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-2 p-4 bg-slate-900 rounded-2xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[#a1dc84] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                            <h4 className="text-white font-black uppercase text-[9px] tracking-widest mb-1 relative z-10 flex items-center justify-between">
                                                Telemetry
                                                <span className="material-symbols-outlined !text-[10px]">sensors</span>
                                            </h4>
                                            <Link href="/portal/tracking" className="text-[#a1dc84] text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors relative z-10">
                                                Go Live
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Ecosystem Mega Menu */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setIsEcosystemOpen(true)}
                        onMouseLeave={() => setIsEcosystemOpen(false)}
                    >
                        <button className={`text-sm font-bold transition-colors flex items-center gap-1 ${isEcosystemOpen ? 'text-[#a1dc84]' : 'text-slate-700 hover:text-[#a1dc84]'}`}>
                            Ecosystem
                            <span className={`material-symbols-outlined !text-lg transition-transform duration-300 ${isEcosystemOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isEcosystemOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-[60] grid grid-cols-2 gap-4"
                                >
                                    {/* Column 1: Control Towers */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                                <span className="material-symbols-outlined !text-lg">command</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Control Towers</span>
                                        </div>
                                        <div className="space-y-1">
                                            {[
                                                { title: "Client Gateway", href: "/portal/client", desc: "Integrated hub for shipment management.", icon: "login" },
                                                { title: "Admin Center", href: "/portal/admin", desc: "Operational oversight for controllers.", icon: "admin_panel_settings" },
                                                { title: "Network Overview", href: "/network/map", desc: "Digital twin of our trade grid.", icon: "public" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    target={link.href.startsWith('/portal') ? "_blank" : "_self"}
                                                    rel={link.href.startsWith('/portal') ? "noopener noreferrer" : ""}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                                >
                                                    <div className="mt-1 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-emerald-500 group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-500 transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Digital Utilities */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                                                <span className="material-symbols-outlined !text-lg">settings_input_component</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services Cloud</span>
                                        </div>
                                        <div className="space-y-1">
                                            {[
                                                { title: "Shipment Tracking", href: "/portal/tracking", desc: "Real-time global milestone monitoring.", icon: "satellite_alt" },
                                                { title: "Support Center", href: "/resources/help", desc: "Ticketing & assistance.", icon: "support_agent" },
                                                { title: "Status Dashboard", href: "/status", desc: "Uptime monitoring for all nodes.", icon: "speed" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                                >
                                                    <div className="mt-1 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-amber-500 group-hover/item:bg-white transition-all shadow-sm">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-amber-500 transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-2 p-4 bg-[#a1dc84]/10 rounded-2xl border border-[#a1dc84]/20 group">
                                            <h4 className="text-slate-900 font-black uppercase text-[10px] tracking-widest mb-1 flex items-center gap-2">
                                                Onboarding <span className="material-symbols-outlined !text-sm">chevron_right</span>
                                            </h4>
                                            <p className="text-slate-500 text-[9px] font-medium leading-tight">Register your corporate node.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Company Mega Menu */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setIsCompanyOpen(true)}
                        onMouseLeave={() => setIsCompanyOpen(false)}
                    >
                        <button className={`text-sm font-bold transition-colors flex items-center gap-1 ${isCompanyOpen ? 'text-[#a1dc84]' : 'text-slate-700 hover:text-[#a1dc84]'}`}>
                            Company
                            <span className={`material-symbols-outlined !text-lg transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isCompanyOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 z-[60] grid grid-cols-3 gap-4"
                                >
                                    {/* Column 1: Corporate Profile */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-[#a1dc84]/10 flex items-center justify-center text-[#a1dc84]">
                                                <span className="material-symbols-outlined !text-lg">business</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profile</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "History Hub", href: "/about#company-background", desc: "Heritage & operational legacy." },
                                                { title: "Vision Node", href: "/about#vision-mission", desc: "Principles for the future." },
                                                { title: "Core Values", href: "/about#core-values", desc: "Integrity & Excellence." },
                                                { title: "Objectives", href: "/about#strategic-objectives", desc: "Sustainable growth roadmap." },
                                                { title: "Trade Routes", href: "/about#principal-routes", desc: "Coverage map." }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs font-bold text-slate-700 group-hover/item:text-[#a1dc84] transition-colors">{link.title}</span>
                                                        <span className="material-symbols-outlined !text-[10px] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#a1dc84]">arrow_forward</span>
                                                    </div>
                                                    <p className="text-[9px] text-slate-400 mt-0.5 line-clamp-1">{link.desc}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Excellence & Compliance */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                                <span className="material-symbols-outlined !text-lg">verified_user</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Excellence</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Certifications", href: "/company/awards", desc: "Industry accolades.", icon: "trophy" },
                                                { title: "Safety Ops", href: "/company/road-worthiness", desc: "Fleet maintenance standards.", icon: "local_shipping" },
                                                { title: "Global Grid", href: "/network/map", desc: "Command center map.", icon: "public" },
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-2 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                                >
                                                    <div className="mt-0.5">
                                                        <span className="material-symbols-outlined !text-base text-slate-400 group-hover/item:text-[#a1dc84] transition-colors">{link.icon}</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold text-slate-700 group-hover/item:text-[#a1dc84] transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 3: Partner Relations */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                <span className="material-symbols-outlined !text-lg">handshake</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Relations</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Strategic Alliances", href: "/partners", desc: "Global investors." },
                                                { title: "Careers Node", href: "/careers", desc: "Expert team." },
                                                { title: "Global Access", href: "/contact", desc: "Office locations." },
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                                >
                                                    <div className="text-xs font-bold text-slate-700 group-hover/item:text-[#a1dc84] transition-colors flex items-center justify-between">
                                                        {link.title}
                                                    </div>
                                                    <p className="text-[9px] text-slate-400 mt-0.5">{link.desc}</p>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="mt-4 p-4 bg-slate-900 rounded-2xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[#a1dc84] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                            <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-1 relative z-10">Assistance?</h4>
                                            <p className="text-slate-400 text-[9px] mb-2 relative z-10 leading-tight">24/7 Support line.</p>
                                            <Link href="/contact" className="inline-flex items-center gap-2 text-[#a1dc84] text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors relative z-10">
                                                Connect <span className="material-symbols-outlined !text-[10px]">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Resources Mega Menu */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <button className={`text-sm font-bold transition-colors flex items-center gap-1 ${isResourcesOpen ? 'text-[#a1dc84]' : 'text-slate-700 hover:text-[#a1dc84]'}`}>
                            Resources
                            <span className={`material-symbols-outlined !text-lg transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isResourcesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[640px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-[60] grid grid-cols-3 gap-4"
                                >
                                    {/* Column 1: Intelligence Hub */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                                <span className="material-symbols-outlined !text-lg">auto_awesome</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Intelligence</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Knowledge Wiki", href: "/resources/wiki", desc: "AI trade engine.", icon: "menu_book" },
                                                { title: "Glossary Hub", href: "/resources/glossary", desc: "Incoterms guide.", icon: "translate" },
                                                { title: "News Stream", href: "/resources/news", desc: "Latest sectoral shifts.", icon: "newspaper" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                                                >
                                                    <div className="mt-0.5 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-indigo-500 group-hover/item:bg-white transition-all">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-indigo-500 transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Technical Tools */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                                <span className="material-symbols-outlined !text-lg">architecture</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tools</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            {[
                                                { title: "Cost Engine", href: "/tools/calculator", desc: "Instant freight estimation.", icon: "calculate" },
                                                { title: "Tech Archive", href: "/resources/downloads", desc: "Specifications archive.", icon: "folder_open" },
                                                { title: "Consultation", href: "/resources/consultation", desc: "Expert strategy.", icon: "psychology" }
                                            ].map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.href}
                                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                                                >
                                                    <div className="mt-0.5 size-7 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-emerald-500 group-hover/item:bg-white transition-all">
                                                        <span className="material-symbols-outlined !text-base">{link.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-500 transition-colors">{link.title}</div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 3: Relationship Node */}
                                    <div className="space-y-3 border-l border-slate-100 pl-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="size-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                                                <span className="material-symbols-outlined !text-lg">support_agent</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Support</span>
                                        </div>
                                        <div className="space-y-2">
                                            <Link href="/resources/help" className="block group/card overflow-hidden rounded-2xl border border-slate-100 hover:border-rose-500/20 transition-all">
                                                <div className="relative h-24 w-full overflow-hidden">
                                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" alt="Help Center" className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                                    <div className="absolute bottom-2 left-2 text-[9px] font-black text-white uppercase tracking-widest">Help Hub</div>
                                                </div>
                                                <div className="p-2.5 bg-slate-50">
                                                    <div className="text-xs font-bold text-slate-900 mb-0.5">Assistance</div>
                                                    <p className="text-[9px] text-slate-400 leading-tight">24/7 dedicated support.</p>
                                                </div>
                                            </Link>
                                            <div className="space-y-1">
                                                {[
                                                    { title: "Success Gallery", href: "/resources/case-studies", icon: "assignment" },
                                                    { title: "Consultation", href: "/contact", icon: "alternate_email" }
                                                ].map((link, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={link.href}
                                                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 transition-all group/sublink"
                                                    >
                                                        <span className="material-symbols-outlined !text-xs text-slate-400 group-hover/sublink:text-rose-500 transition-colors">{link.icon}</span>
                                                        <span className="text-[10px] font-bold text-slate-700">{link.title}</span>
                                                        <span className="material-symbols-outlined !text-[8px] text-slate-300 ml-auto group-hover/sublink:translate-x-1 transition-all">east</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                <div className="flex items-center gap-4">
                    <Link className="hidden lg:block text-sm font-bold text-slate-600 hover:text-slate-900" href="/careers">Join Us</Link>

                    {/* Region/Language Selector Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsRegionSelectorOpen(true)}
                        className="p-2 text-slate-400 hover:text-[#a1dc84] transition-colors"
                        title="Select Region & Language"
                    >
                        <span className="material-symbols-outlined !text-[22px]">public</span>
                    </motion.button>

                    <div className="hidden lg:flex items-center gap-4">
                        <SignedOut>
                            <Link href="/auth/login">
                                <button className="text-sm font-black text-slate-700 hover:text-[#a1dc84] transition-colors uppercase tracking-widest px-4">Portal Gateway</button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "size-10 rounded-xl border-2 border-[#a1dc84]/20",
                                        userButtonTrigger: "focus:shadow-none focus:outline-none"
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>

                    <Link href="/tools/calculator">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden lg:flex items-center justify-center rounded-lg bg-[#a1dc84] px-8 py-4 text-sm font-black text-slate-900 shadow-lg shadow-[#a1dc84]/20 hover:bg-[#8bc76d] transition-all"
                        >
                            Get a Quote
                        </motion.button>
                    </Link>
                    <button
                        className="lg:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 z-40 bg-white pt-20 overflow-y-auto"
                    >
                        <div className="p-6 space-y-10">
                            {/* Mobile Services Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-[#a1dc84]/10 flex items-center justify-center text-[#a1dc84]">
                                        <span className="material-symbols-outlined !text-lg">local_shipping</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Services</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[...services, { title: "Facility & Yard Ops", href: "/fleet/facility" }, { title: "Technical Safety", href: "/fleet/safety" }].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className="group flex flex-col gap-1 p-4 rounded-2xl bg-slate-50 hover:bg-[#a1dc84]/10 transition-all border border-transparent hover:border-[#a1dc84]/20"
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Fleet Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                                        <span className="material-symbols-outlined !text-lg">airport_shuttle</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Fleet</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[{ title: "Asset Showcase", href: "/fleet" }, { title: "Heavy Haulage", href: "/fleet" }, { title: "Distribution", href: "/fleet" }, { title: "Maintenance", href: "/fleet/facility" }, { title: "Safety Ops", href: "/fleet/safety" }, { title: "Telemetry", href: "/portal/tracking" }].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className="group flex flex-col gap-1 p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/50 transition-all border border-transparent hover:border-teal-100"
                                            href={item.href}
                                            target={item.href.startsWith('/portal') ? "_blank" : "_self"}
                                            rel={item.href.startsWith('/portal') ? "noopener noreferrer" : ""}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Ecosystem Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                        <span className="material-symbols-outlined !text-lg">command</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Ecosystem</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[{ title: "Client Portal", href: "/portal/client" }, { title: "Admin Tower", href: "/portal/admin" }, { title: "Network Map", href: "/network/map" }, { title: "Track Shipment", href: "/portal/tracking" }, { title: "Support Hub", href: "/resources/help" }, { title: "Node Status", href: "/status" }].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className="group flex flex-col gap-1 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 transition-all border border-transparent hover:border-emerald-100"
                                            href={item.href}
                                            target={item.href.startsWith('/portal') ? "_blank" : "_self"}
                                            rel={item.href.startsWith('/portal') ? "noopener noreferrer" : ""}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Resources Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                        <span className="material-symbols-outlined !text-lg">auto_awesome</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Resources</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[...resourceLinks, { title: "Market News", href: "/resources/news" }].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className="group flex flex-col gap-1 p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 transition-all border border-transparent hover:border-indigo-100"
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Company Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                        <span className="material-symbols-outlined !text-lg">business</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Company</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {companyLinks.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            className="group flex flex-col gap-1 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100"
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-[10px] font-black text-slate-900 leading-tight">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 space-y-4">
                                <Link href="/tools/calculator" onClick={() => setIsMenuOpen(false)}>
                                    <button className="w-full rounded-2xl bg-[#a1dc84] py-5 font-black text-slate-900 shadow-xl shadow-[#a1dc84]/20 uppercase text-xs tracking-[0.2em]">Launch Quick Quote</button>
                                </Link>
                                <Link href="/portal/client" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                                    <button className="w-full rounded-2xl bg-slate-900 py-5 font-black text-white shadow-xl uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3">
                                        Portal Gateway <span className="material-symbols-outlined !text-lg">login</span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Close Button Overlay */}
                        <button
                            className="absolute top-6 right-6 size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#a1dc84] transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
            <RegionSelector
                isOpen={isRegionSelectorOpen}
                onClose={() => setIsRegionSelectorOpen(false)}
            />
        </header>
    );
}

