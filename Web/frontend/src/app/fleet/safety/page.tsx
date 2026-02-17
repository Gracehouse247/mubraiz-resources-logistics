import type { Metadata } from 'next';
import SafetyContent from './SafetyContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Road Safety Protocols & Engineering | Mubraiz Resources",
    description: "Our gold standard in technical excellence and fleet maintenance. Explore our safety engineering protocols, predictive AI diagnostics, and real-time telemetry.",
    keywords: ["Logistics Road Safety Nigeria", "Fleet Maintenance Protocols", "Trucking Safety Standards", "IoT Fleet Telemetry", "Mubraiz Safety Excellence"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/fleet/safety",
    },
};

export default function FleetSafetyPage() {
    const safetyLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Mubraiz Resources Fleet Safety Protocol",
        "description": "The technical safety inspection and maintenance protocol for high-performance logistics assets.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Engine Diagnostic",
                "text": "10,000km interval fluid integrity and cylinder pressure verification."
            },
            {
                "@type": "HowToStep",
                "name": "Tire & Traction Audit",
                "text": "Weekly log of tread depth and PSI calibration."
            },
            {
                "@type": "HowToStep",
                "name": "GPS Calibration",
                "text": "Bi-monthly signal uptime and precision error verification."
            },
            {
                "@type": "HowToStep",
                "name": "Driver Recertification",
                "text": "Bi-annual mandatory technical safety standard renewal."
            }
        ]
    };

    return (
        <>
            <JsonLd data={safetyLd} />
            <SafetyContent />
        </>
    );
}
