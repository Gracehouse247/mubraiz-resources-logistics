"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InternalSupportRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.push('/portal/admin/operations');
    }, [router]);

    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#020617]">
            <div className="flex flex-col items-center gap-6">
                <div className="size-16 rounded-[2rem] bg-[#a1dc84] text-slate-900 flex items-center justify-center shadow-2xl animate-spin-slow">
                    <span className="material-symbols-outlined !text-4xl">support_agent</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Initializing Ops Channel...</h2>
                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest animate-pulse">Establishing Nodal Command Connection</p>
                </div>
            </div>
        </div>
    );
}
