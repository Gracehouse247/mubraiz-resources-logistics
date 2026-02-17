import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Success Stories & Case Studies | Mubraiz Resources",
    description: "Discover our logistics success stories and how we solve complex supply chain challenges in Nigeria through strategic partnerships and operational excellence.",
    keywords: ["Logistics Success Stories Nigeria", "Supply Chain Case Studies", "Haulage Excellence", "Customs Clearance Success", "Mubraiz Resources Projects"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/case-studies",
    },
};

export default function CaseStudiesPage() {
    const caseStudyLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Logistics Success Stories & Case Studies",
        "description": "A collection of case studies demonstrating Mubraiz Resources' capabilities in solving complex logistics and supply chain challenges.",
        "url": "https://mubraizresourcesltd.com/resources/case-studies",
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
            <JsonLd data={caseStudyLd} />
            <CaseStudiesContent />
        </>
    );
}
