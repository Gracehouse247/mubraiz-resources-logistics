import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd, { organizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Expert Nigeria | Mubraiz Resources Logistics heritage",
    description: "Learn about Mubraiz Resources, the leading logistics expert in Nigeria providing executive haulage, secure warehousing, and strategic supply chain management.",
    keywords: ["Logistics Expert Nigeria", "Mubraiz Resources Background", "Haulage Leadership Africa", "Logistics Partnership Nigeria"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <JsonLd data={organizationJsonLd} />
            <AboutContent />
        </>
    );
}
