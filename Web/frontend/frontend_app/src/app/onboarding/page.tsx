"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { api } from "@/lib/api";

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        phone: '',
        industry: '',
        fleetSize: '1 - 5 Trucks',
        fleetTypes: [] as string[]
    });

    const steps = [
        { id: 1, title: "Company Profile", status: "current" },
        { id: 2, title: "Fleet Specifications", status: "upcoming" },
        { id: 3, title: "Compliance & Safety", status: "upcoming" },
        { id: 4, title: "Route Corridors", status: "upcoming" },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (type: string) => {
        setFormData(prev => ({
            ...prev,
            fleetTypes: prev.fleetTypes.includes(type)
                ? prev.fleetTypes.filter(t => t !== type)
                : [...prev.fleetTypes, type]
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await api.vendors.create({
                ...formData,
                documents: [] // Placeholder for s3 urls
            });
            alert('Application Submitted Successfully!');
            setCurrentStep(1); // Reset or redirect
        } catch (error) {
            alert('Submission Failed: ' + (error as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-display text-slate-900">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-80 bg-slate-900 text-white p-8 flex flex-col shrink-0 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#a1dc84]/5 z-0"></div>
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#a1dc84]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-[#a1dc84] group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined !text-lg">arrow_back</span>
                        </div>
                        <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">Back to Home</span>
                    </Link>

                    <h1 className="text-2xl font-black mb-2">Carrier Portal</h1>
                    <p className="text-slate-400 text-sm mb-12">Complete your registration to join our global logistics network.</p>

                    <nav className="space-y-6 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-800 z-0"></div>

                        {steps.map((step, idx) => (
                            <div key={step.id} className="relative z-10 flex items-center gap-4 group cursor-pointer" onClick={() => setCurrentStep(step.id)}>
                                <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${currentStep === step.id
                                    ? "bg-[#a1dc84] border-[#a1dc84] text-slate-900 scale-110"
                                    : currentStep > step.id
                                        ? "bg-[#a1dc84] border-[#a1dc84] text-slate-900"
                                        : "bg-slate-900 border-slate-700 text-slate-500 group-hover:border-slate-500"
                                    }`}>
                                    {currentStep > step.id ? <span className="material-symbols-outlined !text-sm">check</span> : step.id}
                                </div>
                                <div>
                                    <span className={`block text-sm font-bold transition-colors ${currentStep === step.id ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>{step.title}</span>
                                    {currentStep === step.id && <span className="text-[10px] text-[#a1dc84] uppercase tracking-wider font-bold">In Progress</span>}
                                </div>
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10">
                        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-[#a1dc84]">headset_mic</span>
                                <span className="font-bold text-sm text-white">Need Help?</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-3">Our onboarding specialists are available 24/7.</p>
                            <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold text-white transition-colors">Start Live Chat</button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 md:px-12">
                    <header className="mb-10">
                        <span className="text-[#a1dc84] font-black uppercase tracking-widest text-xs mb-2 block">Step {currentStep} of 4</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{steps[currentStep - 1].title}</h2>
                        <p className="text-slate-500 text-lg">Please provide accurate legal and operational information for verification.</p>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={currentStep}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8"
                    >
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 block">Legal Business Name</label>
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            type="text"
                                            className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all"
                                            placeholder="e.g. Acme Transport Ltd"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 block">Industry Type</label>
                                        <input
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleInputChange}
                                            type="text"
                                            className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all"
                                            placeholder="e.g. Haulage, Warehousing"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 block">Headquarters Address</label>
                                    <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all" placeholder="Street Address" />
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all" placeholder="City" />
                                        <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all" placeholder="State/Region" />
                                        <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all" placeholder="Zip Code" />
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <label className="text-sm font-bold text-slate-700 block mb-4">Operations Contact</label>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">person</span>
                                            <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all" placeholder="Full Name" />
                                        </div>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">mail</span>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                type="email"
                                                className="w-full rounded-lg border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all"
                                                placeholder="Work Email"
                                            />
                                        </div>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">call</span>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                type="tel"
                                                className="w-full rounded-lg border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] transition-all"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <p className="text-sm text-slate-600 font-medium">Select all vehicle types currently in your active fleet.</p>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { name: "Dry Van", icon: "inventory_2" },
                                        { name: "Reefer (Temp Control)", icon: "ac_unit" },
                                        { name: "Flatbed", icon: "flatware" },
                                        { name: "Step Deck", icon: "stairs" },
                                        { name: "Lowboy (Heavy Haul)", icon: "fire_truck" },
                                        { name: "Tanker", icon: "water_drop" },
                                    ].map((type) => (
                                        <label key={type.name} className={`flex flex-col items-center justify-center p-6 bg-slate-50 border-2 rounded-xl cursor-pointer transition-all text-center group ${formData.fleetTypes.includes(type.name) ? "border-[#a1dc84] bg-[#a1dc84]/5" : "border-slate-100 hover:border-[#a1dc84]"}`}>
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={formData.fleetTypes.includes(type.name)}
                                                onChange={() => handleCheckboxChange(type.name)}
                                            />
                                            <span className={`material-symbols-outlined text-3xl mb-3 ${formData.fleetTypes.includes(type.name) ? "text-[#a1dc84]" : "text-slate-400 group-hover:text-[#a1dc84]"}`}>{type.icon}</span>
                                            <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{type.name}</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 block">Total Fleet Size</label>
                                    <select
                                        name="fleetSize"
                                        value={formData.fleetSize}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm font-medium focus:border-[#a1dc84] focus:ring-[#a1dc84] outline-none"
                                    >
                                        <option>1 - 5 Trucks</option>
                                        <option>6 - 20 Trucks</option>
                                        <option>21 - 50 Trucks</option>
                                        <option>50+ Trucks</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Placeholder for other steps */}
                        {(currentStep === 3 || currentStep === 4) && (
                            <div className="text-center py-20">
                                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">construction</span>
                                <p className="text-slate-500 font-medium">This section is under construction for the demo.</p>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between">
                            <button
                                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                                disabled={currentStep === 1}
                                className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => currentStep === 4 ? handleSubmit() : setCurrentStep(Math.min(4, currentStep + 1))}
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-lg bg-[#a1dc84] text-slate-900 font-black text-sm shadow-lg shadow-[#a1dc84]/20 hover:bg-[#8bc76d] hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : currentStep === 4 ? "Submit Application" : "Continue"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

