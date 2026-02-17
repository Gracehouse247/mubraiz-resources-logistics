import type { Metadata } from "next";
import HaulageContent from "./HaulageContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Executive Haulage & Road Logistics | Mubraiz Resources",
    description: "Premium interstate container haulage and road logistics in Nigeria. Euro-6 certified fleet, real-time GPS tracking, and port-to-door efficiency.",
    keywords: ["Container Haulage Nigeria", "Road Logistics", "Interstate Haulage", "Mubraiz Fleet", "Trucking Services Nigeria"],
};

export default function HaulagePage() {
    const serviceLd = generateServiceJsonLd(
        "Executive Haulage & Road Logistics Hub",
        "Strategic port-to-door logistics utilizing a modern heavy-duty fleet for 20ft, 40ft, and specialized cargo."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <HaulageContent />
        </>
    );
}
