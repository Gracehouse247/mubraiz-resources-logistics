import type { Metadata } from "next";
import CalculatorContent from "./CalculatorContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Shipping Cost & Volumetric Weight Calculator | Mubraiz Resources",
    description: "Calculate your shipping costs instantly. Get volumetric weight estimations and CO2 footprint analysis for your freight.",
    keywords: ["Shipping Calculator", "Volumetric Weight", "Freight Cost", "Shipping Quote", "Logistics Tools"],
};

export default function CalculatorPage() {
    const toolLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Shipping Cost & Volumetric Calculator",
        "applicationCategory": "BusinessApplication",
        "description": "Interactive tool for calculating shipping costs and volumetric weight."
    };

    return (
        <>
            <JsonLd data={toolLd} />
            <CalculatorContent />
        </>
    );
}

