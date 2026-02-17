"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';
import { useQuery } from '@tanstack/react-query';
import { fleetAPI } from "@/lib/fleetAPI";

export default function FleetControlCenter() {
    const [viewMode, setViewMode] = useState<'live' | 'rewind' | 'maintenance'>('live');
    const [rewindIndex, setRewindIndex] = useState(100);
    const [newVehicle, setNewVehicle] = useState({ plateNumber: '', model: 'Mercedes Actros', vin: '', location: '' });
    const [showAddModal, setShowAddModal] = useState(false);

    const { data: fleetData, isLoading: isFleetLoading } = useQuery({
        queryKey: ['admin-fleet'],
        queryFn: fleetAPI.getVehicles
    });

    const [vehicles, setVehicles] = useState<any[]>([]);

    useEffect(() => {
        if (fleetData?.vehicles) {
            setVehicles(fleetData.vehicles.map((v: any) => ({
                ...v,
                lat: v.latitude || 20, // Map from DB fields
                lng: v.longitude || 30,
                health: 98, // Mocked for now as we don't have health in DB yet
                speed: "0 km/h"
            })));
        }
    }, [fleetData]);

    // WebSocket Real-time Integration
    useEffect(() => {
        const socket = io(process.env.NEXT_PUBLIC_API_URL);

        socket.on('connect', () => {
            console.log('📡 Connected to HQ Grid Engine');
        });

        socket.on('location_update', (data) => {
            setVehicles(prev => prev.map(v =>
                v.id === data.vehicleId || v.id === data.plateNumber
                    ? {
                        ...v,
                        lat: (data.latitude / 90) * 100, // Normalized for mock map
                        lng: (data.longitude / 180) * 100,
                        speed: `${data.speed} km/h`,
                        status: data.status === 'active' ? 'Active' : 'Offline'
                    }
                    : v
            ));
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="flex h-full flex-col">
            {/* Map Canvas / Grid Engine */}
            <div className="h-[500px] w-full bg-slate-200 dark:bg-slate-900 relative overflow-hidden shrink-0">
                {/* Mock Map Grid */}
                <div className="absolute inset-0 grayscale opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')]" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950" />

                {/* Visual Grid Lines */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

                {/* Fleet Markers */}
                {(viewMode === 'live' || viewMode === 'rewind') && vehicles.filter(v => v.status === 'Active').map((v, i) => (
                    <motion.div
                        key={v.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            top: viewMode === 'rewind' ? `${10 + (i * 20) + (Math.sin(rewindIndex / 10) * 10)}%` : `${v.lat}%`,
                            left: viewMode === 'rewind' ? `${20 + (i * 15) + (rewindIndex / 2)}%` : `${v.lng}%`
                        }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="absolute"
                    >
                        <div className="relative group cursor-pointer">
                            <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -inset-10 border border-[#a1dc84] rounded-full" />
                            <div className="size-5 bg-[#a1dc84] rounded-full border-4 border-slate-950 shadow-[0_0_20px_#a1dc84] relative z-10" />

                            {/* Hover Intel */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-3 bg-slate-950 border border-white/10 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                                <p className="text-[9px] font-black text-[#a1dc84] uppercase tracking-widest leading-none mb-1">{v.id}</p>
                                <p className="text-[11px] font-black text-white italic">{v.location}</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase mt-1">{v.speed}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Tactical Overlays */}
                <div className="absolute top-8 left-8 flex gap-4">
                    <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Fleet Node</span>
                            <span className="text-xl font-black text-white italic tracking-tighter">142 UNITS</span>
                        </div>
                        <div className="size-px h-10 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Live Signals</span>
                            <span className="text-xl font-black text-[#a1dc84] italic tracking-tighter">98.4% STABLE</span>
                        </div>
                    </div>
                </div>

                {/* View Toggles */}
                <div className="absolute top-8 right-8 flex bg-slate-950/80 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10">
                    {[
                        { id: 'live', label: 'LIVE GRID', icon: 'satellite_alt' },
                        { id: 'rewind', label: 'TIME REWIND', icon: 'history' },
                        { id: 'maintenance', label: 'HEALTH NODE', icon: 'health_and_safety' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setViewMode(tab.id as any)}
                            className={`px-6 h-12 rounded-xl flex items-center gap-3 text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === tab.id ? 'bg-[#a1dc84] text-slate-900 shadow-xl' : 'text-slate-400 hover:text-white'}`}
                        >
                            <span className="material-symbols-outlined !text-xl">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tactical Rewind Control */}
                <AnimatePresence>
                    {viewMode === 'rewind' && (
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: 100 }}
                            className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] italic">TACTICAL POSITION REWIND ENGINE</h4>
                                    <p className="text-[9px] font-bold text-[#a1dc84] uppercase tracking-widest mt-1">UTC 2024-03-12 | 14:24:00</p>
                                </div>
                                <div className="size-14 rounded-2xl bg-[#a1dc84] text-slate-900 flex items-center justify-center font-black italic">T-04:00</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={rewindIndex}
                                onChange={(e) => setRewindIndex(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#a1dc84]"
                            />
                            <div className="flex justify-between mt-6 px-1">
                                {['12H AGO', '8H AGO', '4H AGO', '2H AGO', 'NOW'].map(t => (
                                    <span key={t} className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Tactical Rewind Control */}
                {/* Same as before but with Management logic added below the map */}

                {/* Vessel Manifest / Vehicle Health Table */}
                <div className="flex-1 p-8 lg:p-12 space-y-8 bg-slate-50 dark:bg-black/20">
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Fleet Asset Inventory</h2>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Operational Health & Deployment Status</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="h-14 px-8 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#a1dc84]/20"
                            >
                                + Deploy New Asset
                            </button>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 !text-xl group-focus-within:text-[#a1dc84] transition-colors">search</span>
                                <input className="h-14 w-64 pl-12 pr-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5 text-[11px] font-black uppercase tracking-widest outline-none focus:border-[#a1dc84] transition-all" placeholder="FILTER ASSET ID..." />
                            </div>
                        </div>
                    </div>

                    {/* MODAL: Deploy New Asset */}
                    <AnimatePresence>
                        {showAddModal && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-6"
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                                    className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-white/10 shadow-2xl relative"
                                >
                                    <button onClick={() => setShowAddModal(false)} className="absolute top-8 right-8 text-slate-400 hover:text-[#a1dc84]">
                                        <span className="material-symbols-outlined !text-3xl">close</span>
                                    </button>

                                    <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Fleet Registry Node</span>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white italic mb-8">Deploy New Vehicle</h3>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-4 text-left">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4">Plate Number / Asset ID</label>
                                            <input
                                                value={newVehicle.plateNumber}
                                                onChange={(e) => setNewVehicle({ ...newVehicle, plateNumber: e.target.value })}
                                                className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84]"
                                                placeholder="e.g. MUB-T-092"
                                            />
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4">Truck Model</label>
                                            <select
                                                value={newVehicle.model}
                                                onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                                                className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84] appearance-none"
                                            >
                                                <option value="Mercedes Actros">Mercedes Actros</option>
                                                <option value="Scania R500">Scania R500</option>
                                                <option value="Volvo FH16">Volvo FH16</option>
                                                <option value="Sinotruk HOWO">Sinotruk HOWO</option>
                                            </select>
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4">VIN / Device Serial</label>
                                            <input
                                                value={newVehicle.vin}
                                                onChange={(e) => setNewVehicle({ ...newVehicle, vin: e.target.value })}
                                                className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84]"
                                                placeholder="e.g. VIN882... or Device ID"
                                            />
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4">Starting Node</label>
                                            <input
                                                value={newVehicle.location}
                                                onChange={(e) => setNewVehicle({ ...newVehicle, location: e.target.value })}
                                                className="h-16 w-full px-6 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-100 dark:border-white/5 text-sm font-bold outline-none focus:border-[#a1dc84]"
                                                placeholder="e.g. Lagos Port"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={async () => {
                                            if (!newVehicle.plateNumber) return alert("CRITICAL: Asset ID missing.");
                                            try {
                                                await fleetAPI.addVehicle({
                                                    ...newVehicle,
                                                    status: 'Active',
                                                    latitude: 6.5244, // Default Lagos
                                                    longitude: 3.3792
                                                });
                                                setShowAddModal(false);
                                                window.location.reload(); // Quick refresh to sync grid
                                            } catch (err) {
                                                alert("SYNC ERROR: Failed to deploy asset to grid.");
                                            }
                                        }}
                                        className="w-full h-20 bg-slate-900 dark:bg-[#a1dc84] text-white dark:text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] mt-12 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl"
                                    >
                                        Initiate Fleet Synchrony
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Table Logic (v.id based map) */}
                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-black/40 border-b border-slate-100 dark:border-white/5">
                                <tr>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Tactical Asset ID</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Operator/Driver</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Node</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Engine Health</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Signal Status</th>
                                    <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                                {vehicles.map((v) => (
                                    <tr key={v.id} className="hover:bg-slate-50 dark:hover:bg-white/2 transition-all group">
                                        <td className="px-10 py-8">
                                            <p className="text-sm font-black text-slate-900 dark:text-white tracking-tighter italic">{v.id}</p>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{v.model}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">{v.driver}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">{v.location}</p>
                                            <p className="text-[9px] font-bold text-[#a1dc84] uppercase mt-1 opacity-60">{v.speed}</p>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-24 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${v.health}%` }} className={`h-full ${v.health > 80 ? 'bg-[#a1dc84]' : v.health > 40 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                                </div>
                                                <span className="text-xs font-black text-slate-900 dark:text-white italic">{v.health}%</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${v.status === 'Active' ? 'bg-[#a1dc84] text-slate-900' : 'bg-red-100 text-red-600'}`}>
                                                {v.status === 'Active' ? 'ENCRYPTED' : 'SIGNAL LOST'}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <button className="size-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-[#a1dc84] hover:scale-110 transition-all">
                                                <span className="material-symbols-outlined !text-xl">settings_input_component</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
