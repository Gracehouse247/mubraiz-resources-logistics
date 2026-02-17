import type { Metadata } from 'next';
import WarehouseSpecsContent from './WarehouseSpecsContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Warehouse Technical Specifications & Infrastructure | Mubraiz Resources",
    description: "Detailed technical specifications of our logistics facilities. 100,000 SQ FT capacity, Tier 5 racking, climate control, and TAPA-certified security protocols.",
    keywords: ["Warehouse Specifications Nigeria", "Logistics Infrastructure Standards", "Cold Chain Facility Specs", "Secure Warehousing Technology", "Mubraiz Resources Facility"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/warehouse-specs",
    },
};

export default function WarehouseSpecsPage() {
    const specsLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Warehouse Technical Specifications Guide",
        "description": "Technical standards and infrastructure overview of Mubraiz Resources logistics hubs.",
        "author": {
            "@type": "Organization",
            "name": "Mubraiz Resources Limited"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mubraiz Resources Limited"
        },
        "about": {
            "@type": "Service",
            "name": "Warehousing & Infrastructure",
            "description": "Premium industrial warehousing with advanced racking and security."
        }
    };

    return (
        <>
            <JsonLd data={specsLd} />
            <WarehouseSpecsContent />
        </>
    );
}
