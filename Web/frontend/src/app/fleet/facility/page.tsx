import type { Metadata } from 'next';
import FacilityContent from './FacilityContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Logistics Hub & Fleet Garage Ibafo | Mubraiz Resources",
    description: "Our strategic operations infrastructure hub in Ibafo along the Lagos/Ibadan Expressway. Professional fleet garage, diesel intelligence, and 24/7 yard operations.",
    keywords: ["Logistics Hub Ibafo", "Fleet Garage Lagos Ibadan Expressway", "Maintenance Yard Nigeria", "Trucking Yard Ibafo", "Mubraiz Operations Hub"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/fleet/facility",
    },
};

export default function FacilityPage() {
    const facilityLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mubraiz Resources Ibafo Operations Hub",
        "description": "The beating heart of Mubraiz Logistics, providing professional maintenance, fueling, and fleet management.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ibafo",
            "addressRegion": "Ogun State",
            "addressCountry": "Nigeria",
            "streetAddress": "Lagos/Ibadan Expressway"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.6908",
            "longitude": "3.3975" // Approximate for Ibafo
        },
        "url": "https://mubraizresourcesltd.com/fleet/facility",
        "telephone": "+234000000000", // Placeholder if not known
        "image": "https://mubraizresourcesltd.com/images/fleet/flet yard/fleetyard1.png"
    };

    return (
        <>
            <JsonLd data={facilityLd} />
            <FacilityContent />
        </>
    );
}
