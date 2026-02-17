import type { Metadata } from "next";
import FleetShowcaseContent from "./FleetShowcaseContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Fleet Nigeria & Heavy-Duty Assets | Mubraiz Resources",
    description: "Explore our world-class logistics fleet in Nigeria. From HOWO Sino trucks to Mercedes Actros, our high-performance assets deliver excellence in nationwide haulage.",
    keywords: ["Logistics Fleet Nigeria", "Trucking Fleet Nigeria", "HOWO Sino Trucks Nigeria", "Mercedes Actros Fleet", "Heavy Haulage Assets", "Mubraiz Resources Fleet"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/fleet",
    },
    openGraph: {
        images: ["/images/og-fleet.jpg"],
    }
};

export default function FleetShowcasePage() {
    const serviceLd = generateServiceJsonLd(
        "Mubraiz Resources Logistics Fleet",
        "Technical inventory and heavy-duty assets including HOWO Sino and Mercedes Actros powering nationwide logistics."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <FleetShowcaseContent />
        </>
    );
}
