"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fleetAPI } from "@/lib/fleetAPI";

export default function DriversPage() {
    const [drivers, setDrivers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        licenseNumber: "",
        licenseExpiry: "",
        status: "active"
    });

    const fetchDrivers = async () => {
        try {
            const data = await fleetAPI.getDrivers();
            setDrivers(data.drivers || []);
        } catch (error) {
            console.error("Failed to fetch drivers:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDrivers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fleetAPI.addDriver(formData);
            await fetchDrivers();
            setShowAddModal(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                licenseNumber: "",
                licenseExpiry: "",
                status: "active"
            });
        } catch (error) {
            console.error("Error adding driver:", error);
            alert("Failed to add driver. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-[#a1dc84]';
        if (score >= 75) return 'text-amber-500';
        return 'text-red-500';
    };

    const getScoreBg = (score: number) => {
        if (score >= 90) return 'bg-[#a1dc84]/10';
        if (score >= 75) return 'bg-amber-100';
        return 'bg-red-100';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="size-16 border-4 border-[#a1dc84] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Loading Fleet Personnel...</p>
                </div>
            </div>
        );
    }

    return (
        <main className="w-full bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/portal/fleet" className="text-[#a1dc84] hover:text-[#8bc76d] font-bold text-sm mb-2 inline-flex items-center gap-2">
                                <span className="material-symbols-outlined !text-sm">arrow_back</span>
                                Back to Dashboard
                            </Link>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight font-display uppercase mt-2">Driver Management</h1>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-6 py-3 bg-[#a1dc84] rounded-xl font-black text-sm text-slate-900 hover:bg-[#8bc76d] transition-all shadow-lg shadow-[#a1dc84]/20 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined !text-lg">person_add</span>
                            Add Driver
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Driver</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Contact</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">License</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Safety Score</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Trips</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {drivers.map((driver: any) => (
                                    <tr key={driver.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-[#a1dc84] flex items-center justify-center text-slate-900 font-black">
                                                    {driver.firstName[0]}{driver.lastName[0]}
                                                </div>
                                                <div>
                                                    <div className="font-black text-slate-900">{driver.firstName} {driver.lastName}</div>
                                                    <div className="text-xs font-medium text-slate-500">ID: {driver.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm">
                                                <div className="font-medium text-slate-600">{driver.phone}</div>
                                                <div className="text-xs text-slate-400">{driver.email || 'N/A'}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm">
                                                <div className="font-mono font-bold text-slate-900">{driver.licenseNumber}</div>
                                                <div className="text-xs text-slate-500">
                                                    Exp: {new Date(driver.licenseExpiry).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${getScoreBg(driver.safetyScore)}`}>
                                                <span className={`text-2xl font-black font-display ${getScoreColor(driver.safetyScore)}`}>
                                                    {driver.safetyScore}
                                                </span>
                                                <span className="text-xs font-bold text-slate-500">/100</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-slate-900">
                                            {driver.totalTrips}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${driver.status === 'active' ? 'bg-[#a1dc84] text-slate-900' :
                                                driver.status === 'suspended' ? 'bg-red-100 text-red-700' :
                                                    'bg-slate-200 text-slate-600'
                                                }`}>
                                                {driver.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-[#a1dc84] hover:text-[#8bc76d] font-bold text-sm">
                                                View Profile
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Driver Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900 font-display uppercase">Add New Driver</h2>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <span className="material-symbols-outlined !text-2xl">close</span>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            License Number *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.licenseNumber}
                                            onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-mono text-sm font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            License Expiry *
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.licenseExpiry}
                                            onChange={(e) => setFormData({ ...formData, licenseExpiry: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="flex-1 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-slate-300 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-[#a1dc84] rounded-xl font-black text-slate-900 hover:bg-[#8bc76d] transition-all shadow-lg shadow-[#a1dc84]/20"
                                    >
                                        Add Driver
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}
