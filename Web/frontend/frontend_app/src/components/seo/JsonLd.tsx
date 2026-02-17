import React from 'react';

interface JsonLdProps {
    data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsBusiness",
    "name": "Mubraiz Resources Limited",
    "url": "https://mubraizresources.com.ng",
    "logo": "https://mubraizresources.com.ng/logo.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Solo Amahotul Street, behind Parklane Hotel, Elangaza bus stop, Ajao estate",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-813-482-2126",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": ["en"]
    },
    "sameAs": [
        "https://www.facebook.com/share/1HAb9BVrBm/",
        "https://www.linkedin.com/company/mubraizresourceslimited/"
    ]
};

export const generateServiceJsonLd = (name: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Logistics",
    "provider": {
        "@type": "LogisticsBusiness",
        "name": "Mubraiz Resources Limited"
    },
    "name": name,
    "description": description
});

