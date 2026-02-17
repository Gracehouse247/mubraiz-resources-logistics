import type { Metadata } from "next";
import CustomsClearanceContent from "./CustomsClearanceContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Best Customs Clearance Agent Nigeria | Mubraiz Resources",
    description: "Expert customs brokerage, NCS compliance, and global freight forwarding services in Nigeria. Navigating port procedures is easy with our expert customs clearance agents.",
    keywords: ["Customs Clearance Agent Nigeria", "NCS Compliance", "Duty Assessment Nigeria", "Import Export Brokerage", "Freight Forwarding Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/services/customs",
    },
};

export default function CustomsClearancePage() {
    const serviceLd = generateServiceJsonLd(
        "Expert Customs Clearance & Brokerage Nigeria",
        "Comprehensive customs clearance and brokerage services in Nigeria, ensuring NCS compliance and efficient port procedures."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <CustomsClearanceContent />
        </>
    );
}
