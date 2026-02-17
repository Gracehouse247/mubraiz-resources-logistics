import type { Metadata } from 'next';
import GlossaryContent from './GlossaryContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Terms Glossary & Incoterms 2020 | Mubraiz Resources",
    description: "Master the language of global trade with our comprehensive logistics glossary. Explanations for Form M, PAAR, HS Codes, and Incoterms 2020 responsibility matrix.",
    keywords: ["Logistics Glossary", "Shipping Terms Nigeria", "Incoterms 2020 Chart", "Form M Explained", "PAAR definition", "Logistics Jargon"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/resources/glossary",
    },
};

export default function GlossaryPage() {
    const glossaryLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "name": "Mubraiz Logistics & Trade Glossary",
        "description": "A comprehensive collection of international trade and logistics terms, focusing on Nigerian regulatory protocols and global shipping standards.",
        "url": "https://mubraizresourcesltd.com/resources/glossary",
        "hasDefinedTerm": [
            {
                "@type": "DefinedTerm",
                "name": "Form M",
                "description": "A mandatory statutory document required for all imports into Nigeria."
            },
            {
                "@type": "DefinedTerm",
                "name": "PAAR",
                "description": "Pre-Arrival Assessment Report, a document used by Nigerian Customs for cargo clearance."
            }
        ]
    };

    return (
        <>
            <JsonLd data={glossaryLd} />
            <GlossaryContent />
        </>
    );
}
