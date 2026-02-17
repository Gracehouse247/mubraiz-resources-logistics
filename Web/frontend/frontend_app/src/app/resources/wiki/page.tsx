import type { Metadata } from "next";
import WikiContent from "./WikiContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Knowledge Engine & Trade Wiki | Mubraiz Resources",
    description: "Access expert logistics insights, trade terminology glossary, and the Incoterms 2020 matrix.",
    keywords: ["Logistics Wiki", "Trade Glossary", "Incoterms 2020", "Shipping Terms", "Logistics Insights"],
};

export default function WikiPage() {
    const wikiLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Knowledge Engine & Trade Wiki",
        "description": "Comprehensive resource for logistics and global trade terminology."
    };

    return (
        <>
            <JsonLd data={wikiLd} />
            <WikiContent />
        </>
    );
}

