"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Vehicle {
    id: number;
    plateNumber: string;
    make: string;
    model: string;
    status: string;
    latestLocation?: Array<{
        latitude: number;
        longitude: number;
        speed: number;
        heading: number;
        timestamp: string;
        engineStatus: string;
    }>;
}

interface FleetMapProps {
    vehicles: Vehicle[];
}

export default function FleetMap({ vehicles }: FleetMapProps) {
    const mapRef = useRef<L.Map | null>(null);
    const markersRef = useRef<{ [key: number]: L.Marker }>({});

    useEffect(() => {
        // Initialize map only once
        if (!mapRef.current) {
            mapRef.current = L.map("fleet-map").setView([6.5244, 3.3792], 12); // Lagos, Nigeria

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        return () => {
            // Cleanup on unmount
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;

        // Update markers based on vehicle data
        const currentVehicleIds = new Set<number>();

        vehicles.forEach((vehicle) => {
            if (!vehicle.latestLocation || vehicle.latestLocation.length === 0) return;

            const location = vehicle.latestLocation[0];
            const { latitude, longitude, speed, heading } = location;

            currentVehicleIds.add(vehicle.id);

            // Create custom icon based on status
            const iconColor =
                vehicle.status === "active" ? "#a1dc84" :
                    vehicle.status === "idle" ? "#f59e0b" :
                        "#94a3b8";

            const customIcon = L.divIcon({
                className: "custom-marker",
                html: `
                    <div style="position: relative;">
                        <div style="
                            width: 32px;
                            height: 32px;
                            background: ${iconColor};
                            border: 3px solid white;
                            border-radius: 50%;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(${heading}deg);
                        ">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                            </svg>
                        </div>
                        ${vehicle.status === "active" ? `
                            <div style="
                                position: absolute;
                                top: -2px;
                                left: -2px;
                                width: 36px;
                                height: 36px;
                                border: 2px solid ${iconColor};
                                border-radius: 50%;
                                animation: pulse 2s infinite;
                                opacity: 0.6;
                            "></div>
                        ` : ""}
                    </div>
                `,
                iconSize: [32, 32],
                iconAnchor: [16, 16],
            });

            if (markersRef.current[vehicle.id]) {
                // Update existing marker
                markersRef.current[vehicle.id].setLatLng([latitude, longitude]);
                markersRef.current[vehicle.id].setIcon(customIcon);
            } else {
                // Create new marker
                const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(mapRef.current!);

                marker.bindPopup(`
                    <div style="font-family: 'Outfit', sans-serif; min-width: 200px;">
                        <div style="font-weight: 900; font-size: 16px; color: #0f172a; margin-bottom: 8px;">
                            ${vehicle.plateNumber}
                        </div>
                        <div style="font-weight: 600; font-size: 12px; color: #64748b; margin-bottom: 12px;">
                            ${vehicle.make} ${vehicle.model}
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; justify-content: space-between; font-size: 11px;">
                                <span style="color: #94a3b8; font-weight: 700;">Status:</span>
                                <span style="
                                    background: ${iconColor};
                                    color: ${vehicle.status === "active" ? "#0f172a" : "white"};
                                    padding: 2px 8px;
                                    border-radius: 12px;
                                    font-weight: 900;
                                    text-transform: uppercase;
                                    font-size: 9px;
                                ">${vehicle.status}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 11px;">
                                <span style="color: #94a3b8; font-weight: 700;">Speed:</span>
                                <span style="color: #0f172a; font-weight: 900;">${speed} km/h</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 11px;">
                                <span style="color: #94a3b8; font-weight: 700;">Last Update:</span>
                                <span style="color: #0f172a; font-weight: 600;">${new Date(location.timestamp).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    </div>
                `);

                markersRef.current[vehicle.id] = marker;
            }
        });

        // Remove markers for vehicles no longer in the list
        Object.keys(markersRef.current).forEach((idStr) => {
            const id = parseInt(idStr);
            if (!currentVehicleIds.has(id)) {
                markersRef.current[id].remove();
                delete markersRef.current[id];
            }
        });

        // Auto-fit bounds if there are vehicles
        if (vehicles.length > 0 && vehicles.some(v => v.latestLocation && v.latestLocation.length > 0)) {
            const bounds = L.latLngBounds(
                vehicles
                    .filter(v => v.latestLocation && v.latestLocation.length > 0)
                    .map(v => [v.latestLocation![0].latitude, v.latestLocation![0].longitude] as [number, number])
            );
            mapRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [vehicles]);

    return (
        <>
            <div id="fleet-map" className="w-full h-full"></div>
            <style jsx global>{`
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.3;
                    }
                }
                .custom-marker {
                    background: transparent !important;
                    border: none !important;
                }
            `}</style>
        </>
    );
}
