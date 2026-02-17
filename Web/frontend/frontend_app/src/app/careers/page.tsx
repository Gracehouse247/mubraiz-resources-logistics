import type { Metadata } from "next";
import CareersContent from "./CareersContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Careers | Join the Future of Logistics | Mubraiz Resources",
    description: "Build your career with Nigeria's leading logistics and supply chain provider. Explore opportunities in fleet operations, engineering, and corporate strategy.",
    keywords: ["Logistics Careers Nigeria", "Truck Driver Jobs Lagos", "Supply Chain Jobs Nigeria", "Mubraiz Resources Recruitment"],
};

export default function CareersPage() {
    const careersLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mubraiz Resources Careers",
        "description": "Job opportunities and career paths at Mubraiz Resources Ltd.",
        "provider": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd"
        }
    };

    return (
        <>
            <JsonLd data={careersLd} />
            <CareersContent />
        </>
    );
}
