import type { Metadata } from "next";
import CustomsGuideContent from "./CustomsGuideContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "AfCFTA Export Guide & Customs Procedures | Mubraiz Resources",
    description: "Step-by-step technical guide to AfCFTA export protocols and customs clearance procedures in Nigeria. Learn about documentation, HS codes, and compliance.",
    keywords: ["AfCFTA Export Guide", "Customs Clearance Process Nigeria", "Nigerian Export Documentation", "Certificate of Origin Guide", "HS Code Classification Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/customs/guide",
    },
};

export default function TechnicalCustomsGuidePage() {
    const guideLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Export Under AfCFTA in Nigeria",
        "description": "A technical guide for exporters navigating the AfCFTA framework from Nigeria.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Pre-Shipment Audit",
                "text": "Verification of quality parity against destination country standards."
            },
            {
                "@type": "HowToStep",
                "name": "Universal Digital Filing",
                "text": "Secure multi-manifest upload to Regional Single Window portal."
            },
            {
                "@type": "HowToStep",
                "name": "Differential Duty Assessment",
                "text": "Tariff calculation adjusted for AfCFTA preferential rates."
            },
            {
                "@type": "HowToStep",
                "name": "Border Exit Authorization",
                "text": "Final telemetric verification and generation of digital Exit Note."
            }
        ],
        "totalTime": "PT15M"
    };

    return (
        <>
            <JsonLd data={guideLd} />
            <CustomsGuideContent />
        </>
    );
}
