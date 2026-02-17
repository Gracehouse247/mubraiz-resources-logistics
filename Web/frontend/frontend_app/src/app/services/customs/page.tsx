import type { Metadata } from "next";
import CustomsClearanceContent from "./CustomsClearanceContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Customs Clearance & Freight Forwarding | Mubraiz Resources",
    description: "Expert customs brokerage, NCS compliance, and global freight forwarding services in Nigeria. Efficient, transparent, and digitally-driven logistics.",
    keywords: ["Customs Clearance Nigeria", "Freight Forwarding", "NCS Compliance", "Duty Assessment", "Import Export Nigeria"],
};

export default function CustomsClearancePage() {
    const serviceLd = generateServiceJsonLd(
        "Customs Clearance & Freight Forwarding Hub",
        "Comprehensive customs brokerage and global forwarding services ensuring seamless cross-border trade."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <CustomsClearanceContent />
        </>
    );
}

