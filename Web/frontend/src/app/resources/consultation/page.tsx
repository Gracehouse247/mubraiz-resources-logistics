"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const steps = [
    { id: 'service', title: 'Service Type', icon: 'category' },
    { id: 'date', title: 'Select Date', icon: 'calendar_month' },
    { id: 'time', title: 'Select Time', icon: 'schedule' },
    { id: 'confirm', title: 'Review', icon: 'verified' },
];

const services = [
    {
        id: 'customs-clearance',
        title: 'Customs Clearance & Forwarding',
        desc: 'Streamline international shipments and customs compliance with expert brokerage and forwarding.',
        icon: 'public',
        popular: true
    },
    {
        id: 'heavy-haulage',
        title: 'Heavy Haulage',
        desc: 'Specialized transport for industrial equipment, bulk cargo, and massive infrastructure.',
        icon: 'local_shipping',
        popular: false
    },
    {
        id: 'supply-chain',
        title: 'Supply Chain Strategy',
        desc: 'End-to-end optimization of your logistics network and operational resilience.',
        icon: 'hub',
        popular: false
    },
    {
        id: 'warehousing',
        title: 'Warehousing & Dist.',
        desc: 'Optimized storage solutions and high-efficiency local distribution hubs.',
        icon: 'warehouse',
        popular: false
    }
];

const experts = [
    {
        name: 'Nebolisa Chidiebere Johnson',
        role: 'Expert Logistics Consultant',
        avatar: '/team/Chidi Olisa.png',
        highlights: [
            '25+ years in global trade logistics',
            'Strategic advisor for Nigerian corridors',
            'ISO 9001 Compliance Specialist'
        ],
        quote: '"Effective logistics isn’t just about movement; it’s about strategic timing and meticulous planning. I look forward to optimizing your corridor operations."'
    }
];

export default function ConsultationPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedService, setSelectedService] = useState(services[0].id);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleFinalConfirm();
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFinalConfirm = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const isStepDisabled = () => {
        if (currentStep === 1 && !selectedDate) return true;
        if (currentStep === 2 && !selectedTime) return true;
        return false;
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full bg-slate-900 border border-[#a1dc84]/20 rounded-[3rem] p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#a1dc84]/10 rounded-full blur-[80px] -mt-32"></div>

                    <div className="size-24 bg-[#a1dc84] text-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(161,220,132,0.4)]">
                        <span className="material-symbols-outlined !text-5xl animate-bounce">check_circle</span>
                    </div>

                    <h2 className="text-4xl font-black text-white capitalize tracking-tighter mb-4">Consultation <br /> <span className="text-[#a1dc84]">Secured.</span></h2>
                    <p className="text-slate-400 font-medium mb-10">Your strategic session has been locked into the 2026 Q1 calendar. A secure meeting protocol and brief have been dispatched to your email.</p>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-left mb-10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-[#a1dc84] capitalize tracking-widest">Protocol Reference</span>
                            <span className="text-white font-mono text-sm">#MBZ-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs text-slate-300 font-bold capitalize tracking-wide flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                February {selectedDate}, 2026
                            </p>
                            <p className="text-xs text-slate-300 font-bold capitalize tracking-wide flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                {selectedTime} (GMT+1)
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link href="/" className="w-full px-8 py-4 bg-[#a1dc84] text-slate-900 rounded-lg font-black text-xs capitalize tracking-[0.2em] hover:brightness-105 transition-all text-center">
                            Back to Command Tower
                        </Link>
                        <button onClick={() => window.print()} className="text-[10px] font-black text-slate-500 capitalize tracking-widest hover:text-white transition-colors">
                            Export Dossier (PDF)
                        </button>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#f8faf8] dark:bg-[#0f172a] pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Area */}
                <div className="mb-12">
                    <nav className="flex items-center gap-2 mb-6">
                        <Link href="/" className="text-[#a1dc84] text-sm font-bold hover:underline">Home</Link>
                        <span className="text-slate-400 text-sm">/</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resources</span>
                        <span className="text-slate-400 text-sm">/</span>
                        <span className="text-slate-900 dark:text-white text-sm font-black">Expert Consultation</span>
                    </nav>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 capitalize">
                            Strategic <span className="text-[#a1dc84]">Consultation.</span>
                        </h1>
                        <p className="border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 font-secondary max-w-lg">
                            Unlock global logistics excellence with elite strategic planning tailored for your specific industrial needs.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Main Wizard Area */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden">
                            {/* Stepper Header */}
                            <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center justify-between gap-2 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-inner border border-slate-100 dark:border-white/5">
                                    {steps.map((step, idx) => (
                                        <button
                                            key={step.id}
                                            onClick={() => idx <= currentStep && setCurrentStep(idx)}
                                            className={`flex-1 flex items-center justify-center gap-2 py-4 px-2 rounded-lg text-[10px] font-black capitalize tracking-widest transition-all ${currentStep === idx
                                                ? 'bg-[#a1dc84] text-slate-900 shadow-lg scale-[1.02]'
                                                : idx < currentStep
                                                    ? 'text-[#a1dc84] hover:bg-[#a1dc84]/10'
                                                    : 'text-slate-400 cursor-not-allowed opacity-50'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined !text-[20px]">{step.icon}</span>
                                            <span className="hidden md:inline truncate">{step.title}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8 md:p-12 min-h-[550px] relative">
                                {loading && (
                                    <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-[#a1dc84]">
                                        <span className="material-symbols-outlined !text-6xl animate-spin mb-4">settings_suggest</span>
                                        <p className="font-black text-xs capitalize tracking-widest animate-pulse">Synchronizing Schedules...</p>
                                    </div>
                                )}

                                <AnimatePresence mode="wait">
                                    {currentStep === 0 && (
                                        <motion.div
                                            key="step0"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter capitalize">01. Service Selection</h3>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium">Define the core objective of this strategic session.</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                {services.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => setSelectedService(service.id)}
                                                        className={`relative group text-left p-8 rounded-[2rem] border-2 transition-all duration-500 ${selectedService === service.id
                                                            ? 'border-[#a1dc84] bg-[#a1dc84]/5 shadow-2xl shadow-[#a1dc84]/10'
                                                            : 'border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 hover:border-[#a1dc84]/30'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-6">
                                                            <div className={`p-4 rounded-xl transition-all duration-500 ${selectedService === service.id ? 'bg-[#a1dc84] text-slate-900 rotate-12' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:text-[#a1dc84]'}`}>
                                                                <span className="material-symbols-outlined !text-3xl">{service.icon}</span>
                                                            </div>
                                                            {service.popular && (
                                                                <span className="bg-[#a1dc84] text-slate-900 text-[8px] font-black capitalize tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">High Demand</span>
                                                            )}
                                                        </div>
                                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 capitalize tracking-tight">{service.title}</h4>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{service.desc}</p>
                                                        {selectedService === service.id && (
                                                            <motion.span
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="material-symbols-outlined absolute bottom-8 right-8 text-[#a1dc84] !text-3xl"
                                                            >
                                                                verified
                                                            </motion.span>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter capitalize">02. Temporal Alignment</h3>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium">Select a slot in the 2026 Q1 Intelligence Calendar.</p>
                                            </div>

                                            <div className="bg-slate-50/50 dark:bg-white/[0.02] rounded-[2.5rem] p-8 md:p-10 border border-slate-100 dark:border-white/5">
                                                <div className="flex items-center justify-between mb-10 px-2">
                                                    <h4 className="text-xl font-black text-slate-900 dark:text-white capitalize tracking-widest">February 2026</h4>
                                                    <div className="flex gap-2">
                                                        <button className="size-12 rounded-xl bg-white dark:bg-slate-800 text-slate-400 hover:text-[#a1dc84] border border-slate-100 dark:border-white/5 transition-all shadow-sm">
                                                            <span className="material-symbols-outlined">chevron_left</span>
                                                        </button>
                                                        <button className="size-12 rounded-xl bg-white dark:bg-slate-800 text-slate-400 hover:text-[#a1dc84] border border-slate-100 dark:border-white/5 transition-all shadow-sm">
                                                            <span className="material-symbols-outlined">chevron_right</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-7 gap-3 md:gap-4">
                                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                        <div key={day} className="text-center text-[9px] font-black capitalize tracking-[0.3em] text-slate-400 mb-6">{day}</div>
                                                    ))}
                                                    {[...Array(28)].map((_, i) => {
                                                        const dayNum = i + 1;
                                                        const isSelected = selectedDate === dayNum;
                                                        const isToday = dayNum === 10; // Mock current date
                                                        return (
                                                            <button
                                                                key={i}
                                                                onClick={() => setSelectedDate(dayNum)}
                                                                className={`aspect-square rounded-2xl flex items-center justify-center text-sm font-black transition-all ${isSelected
                                                                    ? 'bg-[#a1dc84] text-slate-900 shadow-2xl shadow-[#a1dc84]/40 scale-110 z-10'
                                                                    : isToday
                                                                        ? 'bg-slate-900 text-[#a1dc84] border border-[#a1dc84]/30'
                                                                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#a1dc84]/10 hover:text-[#a1dc84] border-b-2 border-slate-200 dark:border-white/5 shadow-sm'
                                                                    }`}
                                                            >
                                                                {dayNum}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter capitalize">03. Time Synchronization</h3>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium">All sessions are conducted in Lagos Local Time (GMT+1).</p>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                {[
                                                    { time: '09:00 AM', status: 'available' },
                                                    { time: '10:30 AM', status: 'available' },
                                                    { time: '11:30 AM', status: 'available' },
                                                    { time: '01:00 PM', status: 'booked' },
                                                    { time: '02:30 PM', status: 'available' },
                                                    { time: '04:00 PM', status: 'available' },
                                                    { time: '05:30 PM', status: 'booked' },
                                                    { time: '07:00 PM', status: 'available' },
                                                ].map((slot, i) => (
                                                    <button
                                                        key={i}
                                                        disabled={slot.status === 'booked'}
                                                        onClick={() => setSelectedTime(slot.time)}
                                                        className={`group py-8 px-6 rounded-[2rem] border-2 font-black transition-all duration-300 ${selectedTime === slot.time
                                                            ? 'border-[#a1dc84] bg-[#a1dc84]/5 text-slate-900 dark:text-white shadow-2xl shadow-[#a1dc84]/10'
                                                            : slot.status === 'booked'
                                                                ? 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-300 dark:text-slate-600 cursor-not-allowed grayscale'
                                                                : 'border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#a1dc84] hover:text-[#a1dc84]'
                                                            }`}
                                                    >
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-lg capitalize tracking-widest">{slot.time}</span>
                                                            <span className={`text-[8px] mt-2 font-black capitalize tracking-[0.3em] ${selectedTime === slot.time ? 'text-[#a1dc84]' : slot.status === 'booked' ? 'text-slate-400' : 'text-slate-400 group-hover:text-[#a1dc84]'}`}>
                                                                {slot.status === 'booked' ? 'Reserved' : 'Slot Active'}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter capitalize">04. Final Protocol Review</h3>
                                                <p className="text-slate-500 dark:text-slate-400 font-medium">Verify your strategic brief parameters before confirmation.</p>
                                            </div>

                                            <div className="bg-slate-50 dark:bg-white/5 rounded-[3rem] p-10 lg:p-12 space-y-12 border border-slate-100 dark:border-white/5 shadow-inner">
                                                <div className="grid md:grid-cols-2 gap-10">
                                                    <div className="space-y-1 group">
                                                        <span className="text-[10px] font-black capitalize tracking-[0.3em] text-[#a1dc84]">Operational Focus</span>
                                                        <p className="text-xl font-black text-slate-900 dark:text-white capitalize leading-tight group-hover:text-[#a1dc84] transition-colors">
                                                            {services.find(s => s.id === selectedService)?.title}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-black capitalize tracking-[0.3em] text-[#a1dc84]">Lead Strategist</span>
                                                        <p className="text-xl font-black text-slate-900 dark:text-white capitalize leading-tight">{experts[0].name}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-black capitalize tracking-[0.3em] text-[#a1dc84]">Calendar Placement</span>
                                                        <p className="text-xl font-black text-slate-900 dark:text-white capitalize leading-tight">February {selectedDate}, 2026</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-black capitalize tracking-[0.3em] text-[#a1dc84]">Temporal Slot</span>
                                                        <p className="text-xl font-black text-slate-900 dark:text-white capitalize leading-tight">{selectedTime || 'Pending'}</p>
                                                    </div>
                                                </div>
                                                <div className="pt-10 border-t border-slate-200 dark:border-white/10">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="material-symbols-outlined text-[#a1dc84]">description</span>
                                                        <label className="text-xs font-black text-slate-900 dark:text-white capitalize tracking-widest">Cargo & Project Brief (Optional)</label>
                                                    </div>
                                                    <textarea
                                                        className="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-white/5 rounded-[2rem] p-8 text-sm font-medium text-slate-600 dark:text-slate-300 outline-none focus:border-[#a1dc84] transition-all resize-none h-40 shadow-sm"
                                                        placeholder="Provide initial telemetry or corridor specifics for Sarah Jenkins to review..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Sticky Wizard Footer */}
                            <div className="p-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between bg-white dark:bg-slate-900">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`px-8 py-4 rounded-lg font-black text-[10px] capitalize tracking-widest transition-all ${currentStep === 0
                                        ? 'text-slate-300 cursor-not-allowed opacity-30'
                                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    Previous Phase
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={isStepDisabled()}
                                    className={`px-8 py-4 bg-[#a1dc84] text-slate-900 rounded-lg font-black text-[10px] capitalize tracking-[0.2em] transition-all shadow-xl shadow-[#a1dc84]/30 flex items-center gap-3 ${isStepDisabled() ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.02] hover:brightness-105 active:scale-95'}`}
                                >
                                    {currentStep === steps.length - 1 ? (
                                        <>
                                            <span className="material-symbols-outlined !text-xl">task_alt</span>
                                            Confirm Appointment
                                        </>
                                    ) : (
                                        <>
                                            Next Sequence
                                            <span className="material-symbols-outlined !text-xl">east</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Booking Policies */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Cancellation', text: 'Reschedule up to 24 hours before your session.', icon: 'event_busy' },
                                { title: 'Session Type', text: 'Discovery calls are 30 mins and fully complimentary.', icon: 'video_call' },
                                { title: 'Integration', text: 'Meeting links and calendar invites sent via email.', icon: 'mail_outline' }
                            ].map((policy, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative overflow-hidden group shadow-sm">
                                    <div className="size-12 bg-slate-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-[#a1dc84] mb-6 group-hover:bg-[#a1dc84] group-hover:text-slate-900 transition-all">
                                        <span className="material-symbols-outlined">{policy.icon}</span>
                                    </div>
                                    <h5 className="font-black text-slate-900 dark:text-white mb-2 capitalize text-xs tracking-widest">{policy.title}</h5>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{policy.text}</p>
                                    <div className="absolute -right-4 -bottom-4 size-20 bg-[#a1dc84]/5 rounded-full group-hover:scale-150 transition-transform"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Expert Card */}
                    <aside className="lg:col-span-4 space-y-8 sticky top-28">
                        {experts.map((expert, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none group">
                                <span className="text-[10px] font-black capitalize tracking-[0.4em] text-[#a1dc84] mb-10 block">Assigned Lead Strategist</span>
                                <div className="flex flex-col items-center text-center mb-10">
                                    <div className="size-48 rounded-[3rem] overflow-hidden border-8 border-[#a1dc84]/10 p-2 relative mb-6 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={expert.avatar}
                                            alt={expert.name}
                                            fill
                                            className="object-cover rounded-[2.5rem]"
                                        />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white capitalize tracking-tighter">{expert.name}</h4>
                                    <p className="text-[10px] font-black text-[#a1dc84] capitalize tracking-[0.3em] mt-2">{expert.role}</p>
                                </div>
                                <div className="space-y-4 mb-10">
                                    {expert.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:translate-x-1">
                                            <div className="size-8 bg-[#a1dc84] text-slate-900 rounded-lg flex items-center justify-center shadow-lg">
                                                <span className="material-symbols-outlined !text-sm">verified</span>
                                            </div>
                                            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-black capitalize tracking-widest">{h}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 bg-slate-900 rounded-3xl relative overflow-hidden shadow-xl">
                                    <span className="material-symbols-outlined text-[#a1dc84]/20 absolute -top-2 -right-2 !text-6xl rotate-12">format_quote</span>
                                    <p className="text-xs text-slate-400 leading-relaxed relative z-10 italic font-medium">
                                        {expert.quote}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-[#a1dc84] rounded-[3rem] p-10 text-slate-900 relative overflow-hidden group shadow-2xl shadow-[#a1dc84]/20">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-black mb-4 leading-none capitalize tracking-tighter">Emergency <br />Hotline.</h4>
                                <p className="text-slate-800 font-medium mb-10 leading-relaxed text-sm">Our logistics emergency command center is available 24/7 for active critical missions.</p>
                                <button className="w-full h-18 bg-slate-900 hover:bg-slate-800 text-[#a1dc84] px-8 py-4 rounded-lg font-black text-[10px] capitalize tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-2xl">
                                    <span className="material-symbols-outlined animate-pulse">phone_in_talk</span>
                                    Connect Dispatch
                                </button>
                            </div>
                            {/* Abstract Pattern */}
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform">
                                <span className="material-symbols-outlined !text-9xl">support_agent</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

