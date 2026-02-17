import type { Metadata } from "next";
import CareersContent from "./CareersContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Jobs in Nigeria | Careers at Mubraiz Resources",
    description: "Apply for logistics jobs in Nigeria. Join Mubraiz Resources for rewarding careers in fleet operations, engineering, and corporate strategy. Build the future of supply chain.",
    keywords: ["Logistics Jobs in Nigeria", "Supply Chain Jobs Nigeria", "Truck Driver Jobs Lagos", "Fleet Management Careers", "Mubraiz Resources Recruitment"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/careers",
    },
};

export default function CareersPage() {
    const careersLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Careers",
        "description": "Comprehensive career paths and latest job opportunities at Nigeria's leading logistics provider.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "url": "https://mubraizresourcesltd.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Fleet Operations Specialist"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Heavy-Duty Mechanic"
                }
            ]
        }
    };

    return (
        <>
            <JsonLd data={careersLd} />
            <CareersContent />
        </>
    );
}
