import type { Metadata } from 'next';
import WaybillVerificationContent from './WaybillVerificationContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Online Waybill Verification System Nigeria | Mubraiz Resources",
    description: "Verify your shipments instantly with our secure online waybill verification system. Ensure authenticity and track delivery status through our encrypted logistics ledger.",
    keywords: ["Online Waybill Verification Nigeria", "Verify Shipment Status", "Logistics Documentation Verification", "Secure Waybill Ledger", "Mubraiz Waybill Checker"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/tools/waybill-verification",
    },
};

export default function WaybillVerificationPage() {
    const toolLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Mubraiz Waybill Verification System",
        "description": "Secure utility for verifying the authenticity and status of logistics waybills in Nigeria.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <JsonLd data={toolLd} />
            <WaybillVerificationContent />
        </>
    );
}
