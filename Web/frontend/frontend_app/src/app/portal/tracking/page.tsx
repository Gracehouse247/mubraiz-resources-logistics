"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function TrackingRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Professional pause for "Tactical Handshake"
        const timer = setTimeout(() => {
            router.push('/portal/client/tracking');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-[#112116] flex flex-col items-center justify-center p-6 text-center">
            <div className="relative mb-12">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -inset-10 border border-[#a1dc84] rounded-full"
                />
                <div className="size-20 bg-[#a1dc84] rounded-full flex items-center justify-center shadow-[0_0_30px_#a1dc84]">
                    <span className="material-symbols-outlined text-slate-900 !text-4xl animate-spin">sync</span>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-white text-3xl font-black italic tracking-tighter uppercase">Unified Command Protocol</h1>
                <p className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Rerouting Shipments Tracking to Client Portal Hub</p>
                <div className="max-w-xs mx-auto h-1 bg-white/5 rounded-full overflow-hidden mt-8">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-[#a1dc84]"
                    />
                </div>
                <p className="text-white/40 text-[9px] font-medium uppercase tracking-widest pt-4">Authenticating Secure Linkage...</p>
            </motion.div>
        </div>
    );
}
