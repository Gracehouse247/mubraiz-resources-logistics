import type { Metadata } from "next";
import WikiContent from "./WikiContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Supply Chain Knowledge Base & Trade Wiki | Mubraiz Resources",
    description: "Access expert logistics insights, international trade terminology glossary, and the Incoterms 2020 matrix. Your comprehensive supply chain knowledge base in Nigeria.",
    keywords: ["Supply Chain Knowledge Base", "Logistics Wiki Nigeria", "Trade Glossary", "Incoterms 2020 hub", "Shipping Terms Explained", "Logistics Insights Africa"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/wiki",
    },
};

export default function WikiPage() {
    const wikiLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Supply Chain Knowledge Base & Trade Wiki",
        "description": "Comprehensive resource for logistics and global trade terminology, market insights, and regulatory protocols.",
        "url": "https://mubraizresourcesltd.com/resources/wiki",
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AfCFTA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The African Continental Free Trade Area (AfCFTA) is a strategic trade agreement designed to create a single market across Africa to facilitate intra-continental commerce."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are Incoterms 2020?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Incoterms 2020 are international standard protocols for commercial risk allocation and logistical duty mapping between buyers and sellers."
                    }
                }
            ]
        }
    };

    return (
        <>
            <JsonLd data={wikiLd} />
            <WikiContent />
        </>
    );
}
