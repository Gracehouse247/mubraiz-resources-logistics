import type { Metadata } from "next";
import CalculatorContent from "./CalculatorContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Shipping Calculator & Volumetric Weight | Mubraiz Resources",
    description: "Estimate your shipping costs instantly with our logistics calculator. Get free volumetric weight estimations and freight cost analysis for shipments in Nigeria.",
    keywords: ["Logistics Shipping Calculator", "Volumetric Weight Calculator Nigeria", "Freight Cost Estimator", "Shipping Quote Tool", "Mubraiz Resources Tools"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/tools/calculator",
    },
};

export default function CalculatorPage() {
    const toolLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Mubraiz Logistics Shipping Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Interactive tool for calculating shipping costs, volumetric weight, and CO2 footprint for logistics operations.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <JsonLd data={toolLd} />
            <CalculatorContent />
        </>
    );
}
