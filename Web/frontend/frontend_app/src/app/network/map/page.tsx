import type { Metadata } from "next";
import NetworkMapContent from "./NetworkMapContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Global Network Command | Real-Time Fleet & Hub Monitoring | Mubraiz Resources",
    description: "Monitor international trade lanes, port clearance times, and active fleet telemetry across the African logistics grid.",
    keywords: ["Logistics Map", "Live Shipment Tracking", "African Trade Lanes", "Port Congestion Map", "Mubraiz Network"],
};

export default function NetworkMapPage() {
    const networkLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Global Network Command Center",
        "description": "Real-time monitoring of global logistics hubs and trade routes.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd"
        }
    };

    return (
        <>
            <JsonLd data={networkLd} />
            <NetworkMapContent />
        </>
    );
}
