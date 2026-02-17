import type { Metadata } from "next";
import TradeContent from "./TradeContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Global Trade Intelligence Services Nigeria | Mubraiz Resources",
    description: "Architecting the trade routes of African commerce. Graded commodities, international trade facilitation, and AfCFTA readiness with global trade intelligence.",
    keywords: ["Global Trade Intelligence Nigeria", "Export Hub Africa", "Solid Minerals Export", "Agro Commodities Nigeria", "AfCFTA Compliance Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/services/global-trade",
    },
};

export default function GlobalTradePage() {
    const serviceLd = generateServiceJsonLd(
        "Global Trade & Export Intelligence Hub",
        "Strategic export facilitation and commodity trade connecting African resources with international markets through advanced trade intelligence."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <TradeContent />
        </>
    );
}
