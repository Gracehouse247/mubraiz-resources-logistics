"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Step = 'route' | 'package' | 'options' | 'quote';

export default function ShippingCalculator() {
    const [step, setStep] = useState<Step>('route');
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
    const [length, setLength] = useState<number>(40);
    const [width, setWidth] = useState<number>(30);
    const [height, setHeight] = useState<number>(20);
    const [weight, setWeight] = useState<number>(4);
    const [origin, setOrigin] = useState('Lagos, Nigeria');
    const [destination, setDestination] = useState('');
    const [isOffsetChecked, setIsOffsetChecked] = useState(false);

    // Calculation Constants
    const METRIC_DIM_FACTOR = 5000;
    const IMPERIAL_DIM_FACTOR = 139;

    const [volumetricWeight, setVolumetricWeight] = useState(0);
    const [chargeableWeight, setChargeableWeight] = useState(0);

    useEffect(() => {
        const factor = unit === 'metric' ? METRIC_DIM_FACTOR : IMPERIAL_DIM_FACTOR;
        const vol = (length * width * height) / factor;
        const roundedVol = Math.round(vol * 10) / 10;
        setVolumetricWeight(roundedVol);
        setChargeableWeight(Math.max(weight, roundedVol));
    }, [length, width, height, weight, unit]);

    const steps: { id: Step; label: string; number: number }[] = [
        { id: 'route', label: 'Route', number: 1 },
        { id: 'package', label: 'Package', number: 2 },
        { id: 'options', label: 'Options', number: 3 },
        { id: 'quote', label: 'Quote', number: 4 }
    ];

    return (
        <main className="min-h-screen bg-[#f6f8f6] dark:bg-[#0f172a] pt-24 pb-20 font-display">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Wizard Header / Stepper */}
                <nav className="mb-12 overflow-x-auto pb-4">
                    <ol className="flex items-center min-w-max">
                        {steps.map((s, idx) => (
                            <li key={s.id} className="flex items-center">
                                <div className={`flex items-center justify-center size-10 rounded-full border-2 transition-all duration-500 font-black text-xs ${s.id === step
                                    ? 'bg-[#a1dc84] border-[#a1dc84] text-slate-900 shadow-lg shadow-[#a1dc84]/20'
                                    : steps.findIndex(x => x.id === step) > idx
                                        ? 'bg-[#a1dc84]/10 border-[#a1dc84] text-[#a1dc84]'
                                        : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400'
                                    }`}>
                                    {steps.findIndex(x => x.id === step) > idx ? (
                                        <span className="material-symbols-outlined !text-lg">check</span>
                                    ) : s.number}
                                </div>
                                <span className={`ml-3 text-[10px] font-black uppercase tracking-[0.2em] ${s.id === step ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                    {s.label}
                                </span>
                                {idx < steps.length - 1 && (
                                    <div className="mx-6 w-12 h-px bg-slate-200 dark:bg-white/10"></div>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Main Form Area */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                                    Shipping <span className="text-[#a1dc84]">Cost Calculator</span>
                                </h1>
                                <p className="text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 font-secondary max-w-lg border-l-4 border-[#a1dc84] pl-8">
                                    Instant logistical forecasting and trade tariff estimation. We ensure maximum billing transparency for all African corridors.
                                </p>
                            </div>

                            {/* Step Content: Route */}
                            {step === 'route' && (
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5">
                                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#a1dc84]">map</span>
                                        Route Configuration
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Origin Node</label>
                                            <div className="relative group">
                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-[#a1dc84] transition-colors">location_on</span>
                                                <input
                                                    type="text"
                                                    value={origin}
                                                    onChange={(e) => setOrigin(e.target.value)}
                                                    className="w-full h-14 bg-slate-50 dark:bg-white/5 border-2 border-slate-50 dark:border-white/5 rounded-2xl pl-14 pr-6 font-bold text-slate-900 dark:text-white focus:border-[#a1dc84] outline-none transition-all"
                                                    placeholder="Specify origin city..."
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Destination Node</label>
                                            <div className="relative group">
                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-[#a1dc84] transition-colors">flight_land</span>
                                                <input
                                                    type="text"
                                                    value={destination}
                                                    onChange={(e) => setDestination(e.target.value)}
                                                    className="w-full h-14 bg-slate-50 dark:bg-white/5 border-2 border-slate-50 dark:border-white/5 rounded-2xl pl-14 pr-6 font-bold text-slate-900 dark:text-white focus:border-[#a1dc84] outline-none transition-all"
                                                    placeholder="Specify destination city..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step Content: Package */}
                            {step === 'package' && (
                                <div className="space-y-8">
                                    <div className="inline-flex h-12 p-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                                        <button onClick={() => setUnit('metric')} className={`px-6 h-full font-black text-[10px] uppercase tracking-widest rounded-xl transition-all ${unit === 'metric' ? 'bg-[#a1dc84] text-slate-900 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}>Metric (cm/kg)</button>
                                        <button onClick={() => setUnit('imperial')} className={`px-6 h-full font-black text-[10px] uppercase tracking-widest rounded-xl transition-all ${unit === 'imperial' ? 'bg-[#a1dc84] text-slate-900 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}>Imperial (in/lbs)</button>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-slate-100 dark:border-white/5">
                                        <div className="flex justify-between items-center mb-10">
                                            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#a1dc84]">inventory_2</span>
                                                Package Specifications
                                            </h3>
                                            <button className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest hover:underline">+ Multiple Items</button>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                            {[
                                                { label: 'Length', val: length, set: setLength, u: unit === 'metric' ? 'cm' : 'in' },
                                                { label: 'Width', val: width, set: setWidth, u: unit === 'metric' ? 'cm' : 'in' },
                                                { label: 'Height', val: height, set: setHeight, u: unit === 'metric' ? 'cm' : 'in' },
                                                { label: 'Weight', val: weight, set: setWeight, u: unit === 'metric' ? 'kg' : 'lbs' },
                                            ].map((item, i) => (
                                                <div key={i} className="space-y-3">
                                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">{item.label} ({item.u})</label>
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            value={item.val}
                                                            onChange={(e) => item.set(Number(e.target.value))}
                                                            className="w-full h-14 bg-slate-50 dark:bg-white/5 border-2 border-slate-50 dark:border-white/5 rounded-2xl px-6 font-black text-lg text-slate-900 dark:text-white focus:border-[#a1dc84] outline-none transition-all tabular-nums"
                                                        />
                                                        {item.label === 'Weight' && <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#a1dc84] !text-lg">check_circle</span>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-emerald-50 dark:bg-[#a1dc84]/5 border-2 border-emerald-100 dark:border-[#a1dc84]/10 flex flex-col md:flex-row gap-6 items-center">
                                            <div className="size-14 bg-[#a1dc84] rounded-2xl flex items-center justify-center text-slate-900 shadow-xl shadow-[#a1dc84]/20 shrink-0">
                                                <span className="material-symbols-outlined !text-3xl">calculate</span>
                                            </div>
                                            <div className="flex-1 text-center md:text-left">
                                                <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                                                    <h4 className="text-lg font-black text-emerald-900 dark:text-[#a1dc84]">Chargeable Weight: {chargeableWeight} {unit === 'metric' ? 'kg' : 'lbs'}</h4>
                                                    <span className="text-[8px] font-black uppercase tracking-widest bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-emerald-700 dark:text-[#a1dc84] border border-emerald-200 dark:border-[#a1dc84]/20 shadow-sm">
                                                        {volumetricWeight > weight ? 'Volumetric Optimized' : 'Actual Weight Logic'}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-emerald-800/60 dark:text-[#a1dc84]/40 font-medium leading-relaxed">
                                                    Volumetric constant {unit === 'metric' ? '5000' : '139'} applied. Calculated volumetric weight is {volumetricWeight} {unit === 'metric' ? 'kg' : 'lbs'}.
                                                    Billing is based on the superior value.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step Content: Options */}
                            {step === 'options' && (
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-white/5">
                                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#a1dc84]">tune</span>
                                        Service Options
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="p-6 rounded-3xl border-2 border-slate-100 dark:border-white/5 hover:border-[#a1dc84] transition-all cursor-pointer group">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#a1dc84] transition-colors">
                                                        <span className="material-symbols-outlined">rocket_launch</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-black dark:text-white">Priority Corridor</h4>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated: 24-48 Hours</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-black text-[#a1dc84]">$240.00</p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase">Per Unit</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-3xl border-2 border-[#a1dc84] bg-[#a1dc84]/5 shadow-xl shadow-[#a1dc84]/5 cursor-pointer">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-12 bg-[#a1dc84] rounded-2xl flex items-center justify-center text-slate-900">
                                                        <span className="material-symbols-outlined">shield</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-black dark:text-white">Standard Secure</h4>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated: 3-5 Business Days</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-black text-slate-900 dark:text-white">$145.00</p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase">Per Unit</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl">
                                <button
                                    onClick={() => step === 'package' ? setStep('route') : step === 'options' ? setStep('package') : step === 'quote' ? setStep('options') : null}
                                    disabled={step === 'route'}
                                    className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-all disabled:opacity-30"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => step === 'route' ? setStep('package') : step === 'package' ? setStep('options') : step === 'options' ? setStep('quote') : null}
                                    className="bg-[#a1dc84] text-slate-900 px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest flex items-center gap-4 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20"
                                >
                                    {step === 'options' ? 'Secure Quote' : 'Continue to ' + (step === 'route' ? 'Details' : 'Options')}
                                    <span className="material-symbols-outlined !text-lg">arrow_forward</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Summaries */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Green Eco-Hub Tracker */}
                        <div className="bg-[#102210] rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 text-[#a1dc84] opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined !text-[120px]">eco</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-black mb-10 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#a1dc84] fill-1">eco</span>
                                    Sustainability Hub
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Estimated Carbon Load</p>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-5xl font-black text-[#a1dc84]">12.5</span>
                                            <span className="text-xs font-bold text-slate-500 lowercase">kg CO2e</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: '35%' }} className="h-full bg-gradient-to-r from-[#a1dc84] to-yellow-400" />
                                        </div>
                                        <div className="flex justify-between mt-3 text-[8px] font-black text-slate-500 uppercase tracking-widest">
                                            <span>Eco Minimal</span>
                                            <span>Heavy Impact</span>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 group-hover:border-[#a1dc84]/30 transition-all">
                                        <label className="flex items-start gap-4 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={isOffsetChecked}
                                                onChange={() => setIsOffsetChecked(!isOffsetChecked)}
                                                className="size-5 mt-1 rounded-lg border-2 border-white/20 bg-transparent text-[#a1dc84] focus:ring-[#a1dc84] transition-all"
                                            />
                                            <div className="flex-1">
                                                <p className="text-xs font-black uppercase tracking-widest mb-1">Offset Shipment</p>
                                                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                                    Contribute <span className="text-[#a1dc84] font-bold">$2.00</span> to reforestation along the Niger corridor.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Shipment Summary</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center pt-2">
                                        <div className="size-2 rounded-full bg-[#a1dc84]"></div>
                                        <div className="w-0.5 h-10 bg-slate-100 dark:bg-white/5"></div>
                                        <div className="size-2 rounded-full border-2 border-[#a1dc84]"></div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Origin Node</span>
                                            <p className="text-xs font-black text-slate-900 dark:text-white uppercase leading-tight">{origin || 'UNSPECIFIED'}</p>
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Destination</span>
                                            <p className={`text-xs font-black uppercase leading-tight ${destination ? 'text-slate-900 dark:text-white' : 'text-slate-300'}`}>
                                                {destination || 'Selecting Target...'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-50 dark:border-white/5 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-slate-400">Total Weight</span>
                                        <span className="text-slate-900 dark:text-white">{weight} {unit === 'metric' ? 'kg' : 'lbs'}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-slate-400">Billable Metric</span>
                                        <span className="text-[#a1dc84]">{chargeableWeight} {unit === 'metric' ? 'kg' : 'lbs'}</span>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex gap-4">
                                    <span className="material-symbols-outlined text-slate-400 !text-xl">info</span>
                                    <p className="text-[9px] font-bold text-slate-500 leading-relaxed">
                                        Final pricing reflects fuel surcharges, peak-season adjustments, and AfCFTA tariff compliance benchmarks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

