import type { Metadata } from "next";
import FleetShowcaseContent from "./FleetShowcaseContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Asset Showcase | High-Performance Logistics Fleet | Mubraiz Resources",
    description: "Explore our elite inventory of verified, heavy-duty machinery. From nationwide haulers to specialized industrial units powering global supply chains.",
    keywords: ["Logistics Fleet", "HOWO Sino Trucks", "Mercedes Actros", "Heavy Haulage Assets", "Mubraiz Fleet Showcase"],
};

export default function FleetShowcasePage() {
    const serviceLd = generateServiceJsonLd(
        "Fleet & Asset Showcase",
        "Technical inventory and specifications of our high-performance logistics fleet."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <FleetShowcaseContent />
        </>
    );
}
