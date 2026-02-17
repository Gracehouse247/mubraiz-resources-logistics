import type { Metadata } from "next";
import NetworkOverviewContent from "./NetworkOverviewContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Global Network & Corridor Infrastructure | Mubraiz Resources",
    description: "Our strategic logistics network spanning West Africa and global trade hubs. Explore our ports, dry hubs, and dedicated trade corridors.",
    keywords: ["Logistics Network Africa", "Trade Corridors", "Port Operations", "Supply Chain Infrastructure", "Mubraiz Global Reach"],
};

export default function NetworkPage() {
    const networkLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Global Network",
        "description": "Strategic logistics infrastructure and continental trade network.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd"
        }
    };

    return (
        <>
            <JsonLd data={networkLd} />
            <NetworkOverviewContent />
        </>
    );
}
