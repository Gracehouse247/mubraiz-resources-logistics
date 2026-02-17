import type { Metadata } from 'next';
import PartnersContent from './PartnersContent';
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Strategic Logistics Partnerships Nigeria | Mubraiz Resources",
    description: "Explore our strategic logistics partnerships with industry leaders like Chi Limited, TGI Distri, and Sinotrucks. Building a reliable supply chain ecosystem in Nigeria.",
    keywords: ["Logistics Partnerships Nigeria", "Strategic Supply Chain Partners", "Mubraiz Resources Clients", "Corporate Logistics Collaboration", "B2B Logistics Networking"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/partners",
    },
};

export default function TrustedPartnershipsPage() {
    // Featured Partners Data (Same as original for consistency)
    const featuredPartners = [
        {
            id: 1,
            name: 'Nigerian Sinotrucks Limited',
            logo: '/partners/8.png',
            category: 'Fleet Maintenance Partner',
            relationship: 'Strategic Technical Partnership',
            description: 'Our partnership with Nigerian Sinotrucks Limited is underpinned by a robust Service Retainership Agreement, delivering comprehensive repair and maintenance services.',
            image: '/images/fleet/flet yard/fleetyard2.png',
            metrics: {
                coverage: 'Nationwide Support',
                vehicles: '500+ Fleet Units',
                uptime: '99.9%'
            },
            testimonial: 'Nigerian Sinotrucks Limited\'s unwavering dedication to maintaining our vehicles reflects their commitment to our success.'
        },
        {
            id: 2,
            name: 'TGI Distri',
            logo: '/partners/5.png',
            category: 'Nationwide Product Distribution',
            relationship: 'Strategic Logistics & Distribution Partnership',
            description: 'Mubraiz Resources is honoured to be the chosen logistics partner for the nationwide distribution of TGI Distri\'s wide array of products.',
            image: '/images/fleet/TGI truck.jpeg',
            metrics: {
                routes: '200+ Active Routes',
                deliveries: '15,000+ Monthly',
                efficiency: '97% On-Time'
            },
            testimonial: 'Providing integrated supply chain solutions optimised for enhanced market reach.'
        },
        {
            id: 3,
            name: 'Chi Limited (Chivita)',
            logo: '/partners/1.png',
            category: 'Large-Scale Fleet Management',
            relationship: 'A Strong Partnership Journey',
            description: 'Our collaboration with Chi Limited stands as a testament to the enduring power of strong partnerships. Initiated in 2021 with a modest fleet of 5 trucks.',
            image: '/images/fleet/reliability-truck.jpeg',
            metrics: {
                growth: '400% Fleet Expansion',
                satisfaction: 'Officially Commended',
                partnership: 'Since 2021'
            },
            testimonial: 'Remarkable growth partnership from initial 5-vehicle support to large-scale fleet management.'
        }
    ];

    const additionalPartners = [
        {
            id: 4,
            name: 'Tunjex Integrated Limited',
            logo: '/partners/4.png',
            category: 'Integrated Logistics',
            description: 'Tunjex Integrated Limited partners with us to provide seamless end-to-end supply chain solutions.',
            icon: 'local_shipping',
            color: '#16a34a'
        },
        {
            id: 5,
            name: 'West African Tire Services (WATS)',
            logo: '/partners/3.png',
            category: 'Tire Management Solutions',
            description: 'West African TIRE Services (WATS) is our premier supplier for top-quality tires and expert tire management solutions.',
            icon: 'tire_repair',
            color: '#e74c3c'
        },
        {
            id: 6,
            name: 'Gambus Energy Limited',
            logo: '/partners/6.png',
            category: 'Fleet Tracking & Fuel Management',
            description: 'Gambus Energy Ltd. is our trusted partner for comprehensive truck and diesel tracking solutions.',
            icon: 'satellite_alt',
            color: '#f39c12'
        },
        {
            id: 7,
            name: 'Zenith Bank PLC',
            logo: '/partners/2.png',
            category: 'Banking & Financial Services',
            description: 'Zenith Bank Plc, our trusted banking partner, plays a pivotal role in facilitating our financial transactions.',
            icon: 'account_balance',
            color: '#c0392b'
        }
    ];

    const partnerLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Strategic Partnerships",
        "description": "Information about our strategic partnerships and client relationships in the logistics industry.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "knowsAbout": ["Logistics", "Supply Chain", "Haulage", "Warehousing"],
            "memberOf": featuredPartners.map(p => ({
                "@type": "Organization",
                "name": p.name
            }))
        }
    };

    return (
        <>
            <JsonLd data={partnerLd} />
            <PartnersContent featuredPartners={featuredPartners} additionalPartners={additionalPartners} />
        </>
    );
}
