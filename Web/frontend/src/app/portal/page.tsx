"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PortalPage() {
    const portalSections = [
        {
            title: "Fleet Management",
            description: "Real-time GPS tracking, driver monitoring, and fleet analytics powered by AI",
            icon: "local_shipping",
            href: "/portal/fleet",
            color: "bg-[#a1dc84]",
            textColor: "text-slate-900",
            badge: "NEW"
        },
        {
            title: "Shipment Tracking",
            description: "Track your shipments in real-time with live updates and notifications",
            icon: "package_2",
            href: "/portal/tracking",
            color: "bg-blue-600",
            textColor: "text-white"
        },
        {
            title: "Client Portal",
            description: "Manage your account, view invoices, and access service history",
            icon: "person",
            href: "/portal/client",
            color: "bg-purple-600",
            textColor: "text-white"
        },
        {
            title: "Admin Dashboard",
            description: "Administrative tools and system management",
            icon: "admin_panel_settings",
            href: "/portal/admin",
            color: "bg-slate-900",
            textColor: "text-white"
        },
        {
            title: "Support Center",
            description: "Get help, submit tickets, and access documentation",
            icon: "support_agent",
            href: "/portal/support",
            color: "bg-amber-500",
            textColor: "text-white"
        }
    ];

    return (
        <main className="w-full bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight font-display uppercase mb-4">
                            Mubraiz Portal
                        </h1>
                        <p className="text-lg font-medium text-slate-600 max-w-2xl mx-auto">
                            Access all your logistics management tools in one place. Real-time tracking, fleet management, and comprehensive analytics.
                        </p>
                    </div>
                </div>
            </div>

            {/* Portal Sections Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portalSections.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={section.href}>
                                <div className="group relative bg-white rounded-3xl border-2 border-slate-200 overflow-hidden hover:border-[#a1dc84] transition-all duration-300 h-full">
                                    {/* Badge */}
                                    {section.badge && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-black uppercase tracking-wider">
                                                {section.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Icon Section */}
                                    <div className={`${section.color} ${section.textColor} p-8 flex items-center justify-center`}>
                                        <span className="material-symbols-outlined !text-7xl">
                                            {section.icon}
                                        </span>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8">
                                        <h2 className="text-2xl font-black text-slate-900 font-display mb-3 group-hover:text-[#a1dc84] transition-colors">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm font-medium text-slate-600 leading-relaxed mb-6">
                                            {section.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-[#a1dc84] font-bold text-sm group-hover:gap-4 transition-all">
                                            Access Portal
                                            <span className="material-symbols-outlined !text-lg">arrow_forward</span>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#a1dc84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8">
                    <h3 className="text-xl font-black text-slate-900 font-display uppercase mb-6">Quick Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Active Shipments", value: "127", icon: "inventory_2" },
                            { label: "Fleet Vehicles", value: "5", icon: "local_shipping" },
                            { label: "Service Zones", value: "36", icon: "map" },
                            { label: "Uptime", value: "99.9%", icon: "check_circle" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-[#a1dc84]/10 text-[#a1dc84] mb-3">
                                    <span className="material-symbols-outlined !text-2xl">{stat.icon}</span>
                                </div>
                                <div className="text-3xl font-black text-slate-900 font-display mb-1">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Help Section */}
                <div className="mt-8 bg-slate-900 rounded-3xl p-8 text-center">
                    <span className="material-symbols-outlined text-[#a1dc84] !text-5xl mb-4">help</span>
                    <h3 className="text-2xl font-black text-white font-display mb-3">Need Help?</h3>
                    <p className="text-slate-400 font-medium mb-6 max-w-xl mx-auto">
                        Our support team is available 24/7 to assist you with any questions or issues.
                    </p>
                    <Link href="/portal/support">
                        <button className="px-8 py-3 bg-[#a1dc84] rounded-xl font-black text-sm text-slate-900 hover:bg-[#8bc76d] transition-all shadow-lg shadow-[#a1dc84]/20">
                            Contact Support
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
