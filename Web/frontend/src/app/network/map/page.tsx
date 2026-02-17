import type { Metadata } from "next";
import NetworkMapContent from "./NetworkMapContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Interactive Logistics Network Map Africa | Mubraiz Resources",
    description: "Visualize our reach across the continent with our interactive logistics network map. Monitor international trade lanes, port clearance times, and active fleet telemetry.",
    keywords: ["Logistics Network Map Africa", "Interactive Logistics Map", "African Trade Lanes Map", "Freight Network Visualization", "Mubraiz Network Map"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/network/map",
    },
};

export default function NetworkMapPage() {
    const networkLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Global Network Command Center",
        "description": "Interactive real-time monitoring of global logistics hubs and trade routes across Africa and beyond.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "url": "https://mubraizresourcesltd.com"
        }
    };

    return (
        <>
            <JsonLd data={networkLd} />
            <NetworkMapContent />
        </>
    );
}
