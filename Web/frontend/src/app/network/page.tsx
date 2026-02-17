import type { Metadata } from "next";
import NetworkOverviewContent from "./NetworkOverviewContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "International Freight Network & Trade Corridors | Mubraiz Resources",
    description: "Explore our strategic international freight network and trade corridors spanning West Africa and global trade hubs. Efficient port operations and supply chain infrastructure.",
    keywords: ["International Freight Network", "Logistics Network Africa", "West African Trade Corridors", "Port Operations Nigeria", "Mubraiz Global Logistics Reach"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/network",
    },
};

export default function NetworkPage() {
    const networkLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Global Network",
        "description": "Strategic logistics infrastructure and continental trade network covering West African corridors and global maritime hubs.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "url": "https://mubraizresourcesltd.com"
        }
    };

    return (
        <>
            <JsonLd data={networkLd} />
            <NetworkOverviewContent />
        </>
    );
}
