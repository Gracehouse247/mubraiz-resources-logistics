import { caseStudies } from '@/data/caseStudies';
import CaseStudyContent from './CaseStudyContent';
import type { Metadata } from 'next';
import JsonLd from "@/components/seo/JsonLd";

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) return {};

    return {
        title: `${study.title} | Logistics Success Story`,
        description: `${study.challenge.substring(0, 160)}...`,
        keywords: [`${study.category}`, `${study.region} Logistics`, "Logistics Success Story Nigeria", "Mubraiz Resources Project"],
        alternates: {
            canonical: `https://mubraizresourcesltd.com/resources/case-studies/${slug}`,
        },
        openGraph: {
            images: [study.image],
        }
    };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) return null;

    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": study.title,
        "description": study.challenge,
        "image": study.image,
        "author": {
            "@type": "Organization",
            "name": "Mubraiz Resources Limited"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mubraiz Resources Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mubraizresourcesltd.com/images/logo.png"
            }
        },
        "datePublished": "2024-01-01", // Placeholder, ideally from data
    };

    return (
        <>
            <JsonLd data={articleLd} />
            <CaseStudyContent study={study} allStudies={caseStudies} />
        </>
    );
}
