import type { Metadata } from 'next';
import MediaKitContent from './MediaKitContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Press Kit & Media Assets | Mubraiz Resources",
    description: "Download the official Mubraiz Resources logistics press kit. Access approved brand assets, logo suites, photography, and company fact sheets for media use.",
    keywords: ["Logistics Press Kit", "Mubraiz Brand Assets", "Logistics Media Gallery", "Company Fact Sheet Nigeria", "Logistics Newsroom Assets"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/media-kit",
    },
};

export default function MediaKitPage() {
    const mediaLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Media Kit",
        "description": "Official brand resources and media assets for Mubraiz Resources Ltd.",
        "publisher": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mubraizresourcesltd.com/images/mubraiz-logo.svg"
            }
        }
    };

    return (
        <>
            <JsonLd data={mediaLd} />
            <MediaKitContent />
        </>
    );
}
