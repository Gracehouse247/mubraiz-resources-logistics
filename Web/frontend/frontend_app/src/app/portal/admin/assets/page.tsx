"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AssetVault() {
    const [documents, setDocuments] = useState<any[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchAssets = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/assets`);
            const data = await res.json();
            if (data.assets) setDocuments(data.assets);
        } catch (err) {
            console.error("Failed to fetch assets:", err);
        }
    };

    useEffect(() => {
        fetchAssets();
    }, []);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', 'general');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/assets/upload`, {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                await fetchAssets();
            }
        } catch (err) {
            console.error("Upload Error:", err);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-[1600px] mx-auto">
            {/* Asset Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Asset & Doc Vault</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Centralized PDF Repository & Catalog Distribution</p>
                </div>
                <div className="flex gap-4">
                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".pdf"
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                        className="h-14 px-10 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#a1dc84]/20 border border-[#a1dc84]/20 flex items-center gap-3 disabled:opacity-50"
                    >
                        <span className={`material-symbols-outlined !text-xl ${isUploading ? 'animate-spin' : ''}`}>
                            {isUploading ? 'sync' : 'upload_file'}
                        </span>
                        {isUploading ? 'SYNCING NODE...' : 'Upload New Node'}
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Upload Terminal Component Mock */}
                <div className="lg:col-span-12">
                    <div className="bg-slate-50/50 dark:bg-white/2 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[3rem] p-16 text-center group hover:border-[#a1dc84] hover:bg-[#a1dc84]/2 transition-all cursor-pointer overflow-hidden relative">
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="size-20 rounded-[2rem] bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined !text-5xl text-[#a1dc84]">add_circle</span>
                            </div>
                            <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Drop Asset Nodes (PDF)</h4>
                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">DRAG & DROP OR SYNC VIA CLOUD STORAGE</p>
                        </div>
                        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                </div>

                {/* Catalog List */}
                <div className="lg:col-span-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-black/20 border-b border-slate-100 dark:border-white/5">
                            <tr>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Document Node</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Inventory Category</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Node Weight</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Public Grid</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Downloads</th>
                                <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {documents.map((doc) => (
                                <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-red-500 transition-colors">
                                                <span className="material-symbols-outlined !text-2xl font-black italic">picture_as_pdf</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-900 dark:text-white italic tracking-tighter">{doc.originalName}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{doc.id.split('-')[0]}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className="px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-widest border border-slate-100 dark:border-white/5">{doc.category}</span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className="text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-tighter italic">{(doc.size / (1024 * 1024)).toFixed(2)} MB</span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2">
                                            <span className={`size-1.5 rounded-full ${doc.accessLevel === 'internal' ? 'bg-[#a1dc84]' : 'bg-red-500'}`}></span>
                                            <span className={`text-[9px] font-black uppercase tracking-widest ${doc.accessLevel === 'internal' ? 'text-[#a1dc84]' : 'text-red-500'}`}>{doc.accessLevel}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <p className="text-xs font-black text-slate-900 dark:text-white italic tracking-tighter">0</p>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                                            <a
                                                href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/${doc.filePath}`}
                                                target="_blank"
                                                download={doc.originalName}
                                                className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-[#a1dc84] transition-all flex items-center justify-center"
                                            >
                                                <span className="material-symbols-outlined !text-xl">download</span>
                                            </a>
                                            <button className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined !text-xl">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
