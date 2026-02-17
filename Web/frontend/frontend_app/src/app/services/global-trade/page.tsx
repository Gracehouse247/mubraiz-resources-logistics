import type { Metadata } from "next";
import TradeContent from "./TradeContent";
import JsonLd, { generateServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Global Trade & Export Hub | Mubraiz Resources",
    description: "Architecting the trade routes of African commerce. Graded commodities, international trade facilitation, and AfCFTA readiness.",
    keywords: ["Global Trade Nigeria", "Export Hub", "Solid Minerals Export", "Agro Commodities Nigeria", "AfCFTA Compliance"],
};

export default function GlobalTradePage() {
    const serviceLd = generateServiceJsonLd(
        "Global Trade & Export Hub",
        "Strategic export facilitation and commodity trade connecting African resources with international markets."
    );

    return (
        <>
            <JsonLd data={serviceLd} />
            <TradeContent />
        </>
    );
}
