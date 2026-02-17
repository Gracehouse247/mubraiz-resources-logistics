import type { Metadata } from 'next';
import NewsContent from './NewsContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics News & Strategic Intelligence | Mubraiz Resources",
    description: "Stay updated with the latest logistics news, supply chain breakthroughs, and operational milestones from Mubraiz Resources. Official intelligence feed.",
    keywords: ["Logistics News Nigeria", "Supply Chain Updates", "Mubraiz Resources News", "Trade Intelligence Nigeria", "Logistics Milestones"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/news",
    },
};

export default function NewsHubPage() {
    const newsLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Logistics News & Strategic Intelligence",
        "description": "A collection of news articles and updates related to global logistics and supply chain management.",
        "url": "https://mubraizresourcesltd.com/resources/news",
        "publisher": {
            "@type": "Organization",
            "name": "Mubraiz Resources Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mubraizresourcesltd.com/images/logo.png"
            }
        }
    };

    return (
        <>
            <JsonLd data={newsLd} />
            <NewsContent />
        </>
    );
}
