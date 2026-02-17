import React from 'react';
import type { Metadata } from 'next';
import ProcurementContent from './ProcurementContent';
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Strategic Procurement Sourcing Nigeria | Mubraiz Resources",
    description: "Optimize your supply chain with the best procurement sourcing services in Nigeria. We bridge the gap between global manufacturers and local industrial requirements.",
    keywords: ["Procurement Sourcing Nigeria", "Strategic Sourcing", "Industrial Procurement", "Supply Chain Orchestration", "Vendor Management Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/services/procurement",
    },
};

export default function ProcurementPage() {
    const serviceLd = generateServiceJsonLd(
        "Strategic Procurement & Supply Chain Management",
        "Executive procurement and strategic sourcing services in Nigeria, bridging the gap between global manufacturers and local industrial requirements."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <ProcurementContent />
        </>
    );
}
