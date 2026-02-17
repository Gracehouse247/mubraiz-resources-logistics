import type { Metadata } from "next";
import WarehousingContent from "./WarehousingContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Secure Warehousing & Contract Logistics Nigeria | Mubraiz Resources",
    description: "Multi-user and dedicated warehousing facilities in Nigeria. Bonded terminals, inventory management, and temperature-controlled storage solutions for industrial scale.",
    keywords: ["Warehousing Nigeria", "Contract Logistics Nigeria", "Bonded Terminal Lagos", "Inventory Management Service", "Cold Storage Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/services/warehousing",
    },
};

export default function WarehousingPage() {
    const serviceLd = generateServiceJsonLd(
        "Secure Warehousing & Contract Logistics",
        "Strategic multi-user and dedicated warehousing facilities strategically located near key transit nodes in Nigeria."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <WarehousingContent />
        </>
    );
}
