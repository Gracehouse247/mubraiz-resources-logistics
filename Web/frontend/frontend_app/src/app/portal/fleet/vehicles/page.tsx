"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Mock vehicle data
import { fleetAPI } from "@/lib/fleetAPI";

export default function VehiclesPage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({
        plateNumber: "",
        make: "",
        model: "",
        year: new Date().getFullYear(),
        vin: "",
        deviceId: "",
        fuelCapacity: "",
        status: "offline"
    });

    const fetchVehicles = async () => {
        try {
            const data = await fleetAPI.getVehicles();
            setVehicles(data.vehicles || []);
        } catch (error) {
            console.error("Failed to fetch vehicles:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const submissionData = {
                ...formData,
                fuelCapacity: parseFloat(formData.fuelCapacity) || 0
            };

            await fleetAPI.addVehicle(submissionData);
            await fetchVehicles();
            setShowAddModal(false);

            // Reset form
            setFormData({
                plateNumber: "",
                make: "",
                model: "",
                year: new Date().getFullYear(),
                vin: "",
                deviceId: "",
                fuelCapacity: "",
                status: "offline"
            });
        } catch (error) {
            console.error("Error adding vehicle:", error);
            alert("Failed to add vehicle. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="size-16 border-4 border-[#a1dc84] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Loading Fleet...</p>
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
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight font-display uppercase mt-2">Vehicle Management</h1>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-6 py-3 bg-[#a1dc84] rounded-xl font-black text-sm text-slate-900 hover:bg-[#8bc76d] transition-all shadow-lg shadow-[#a1dc84]/20 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined !text-lg">add_circle</span>
                            Add Vehicle
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehicles.map((vehicle: any, idx: number) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 font-display">{vehicle.plateNumber}</h3>
                                        <p className="text-sm font-medium text-slate-500">{vehicle.make} {vehicle.model}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${vehicle.status === 'active' ? 'bg-[#a1dc84] text-slate-900' :
                                        vehicle.status === 'idle' ? 'bg-amber-100 text-amber-700' :
                                            vehicle.status === 'maintenance' ? 'bg-blue-100 text-blue-700' :
                                                'bg-slate-200 text-slate-600'
                                        }`}>
                                        {vehicle.status}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-symbols-outlined text-slate-400 !text-lg">calendar_today</span>
                                        <span className="font-medium text-slate-600">Year: <span className="font-bold text-slate-900">{vehicle.year}</span></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-symbols-outlined text-slate-400 !text-lg">speed</span>
                                        <span className="font-medium text-slate-600">Mileage: <span className="font-bold text-slate-900">{vehicle.currentMileage || 0} km</span></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-symbols-outlined text-slate-400 !text-lg">sensors</span>
                                        <span className="font-medium text-slate-600">Device: <span className="font-mono text-xs font-bold text-slate-900">{vehicle.deviceId || 'N/A'}</span></span>
                                    </div>
                                </div>

                                <Link href={`/portal/fleet/vehicles/${vehicle.id}`}>
                                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-[#a1dc84] hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                                        View Details
                                        <span className="material-symbols-outlined !text-lg">arrow_forward</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Add Vehicle Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900 font-display uppercase">Add New Vehicle</h2>
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
                                            Plate Number *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.plateNumber}
                                            onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="ABC-123-XY"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Device ID *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.deviceId}
                                            onChange={(e) => setFormData({ ...formData, deviceId: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-mono text-sm font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="GPS-DEVICE-006"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Make *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.make}
                                            onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="Toyota"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Model *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.model}
                                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="Hilux"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Year *
                                        </label>
                                        <input
                                            type="number"
                                            required
                                            value={formData.year}
                                            onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            VIN
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.vin}
                                            onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-mono text-sm font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="1HGBH41JXMN109186"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">
                                            Fuel Capacity (L)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={formData.fuelCapacity}
                                            onChange={(e) => setFormData({ ...formData, fuelCapacity: e.target.value })}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-900 focus:border-[#a1dc84] focus:ring-2 focus:ring-[#a1dc84]/20 outline-none transition-all"
                                            placeholder="80"
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
                                        Add Vehicle
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
