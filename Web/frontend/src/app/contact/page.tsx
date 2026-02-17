import type { Metadata } from 'next';
import ContactContent from './ContactContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Hire Logistics Company Nigeria | Contact Mubraiz Resources",
    description: "Ready to move your cargo? Contact Mubraiz Resources to hire a trusted logistics company in Nigeria. Expert haulage, warehousing, and supply chain solutions.",
    keywords: ["Hire Logistics Company Nigeria", "Logistics Company Contact", "Freight Forwarding Inquiry", "Supply Chain Consultation", "Mubraiz Resources Contact"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/contact",
    },
};

export default function ContactPage() {
    const contactLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Mubraiz Resources",
        "description": "Get in touch with Nigeria's leading logistics experts for haulage, warehousing, and supply chain management.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Solo Amahotul Street, Ajao estate",
                "addressLocality": "Lagos",
                "addressCountry": "NG"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-813-482-2126",
                "contactType": "customer service",
                "areaServed": "NG",
                "availableLanguage": "en"
            }
        }
    };

    return (
        <>
            <JsonLd data={contactLd} />
            <ContactContent />
        </>
    );
}
