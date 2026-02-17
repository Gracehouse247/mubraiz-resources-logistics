import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Logistics Technology Nigeria | The Future of Supply Chain",
    description: "Explore the latest logistics technology in Nigeria. See how AI and IoT are enhancing fleet visibility and supply chain efficiency in 2025.",
    keywords: ["Logistics Technology Nigeria", "Smart trucking Nigeria", "GPS fleet management", "Digital logistics platforms"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/blog/logistics-technology-nigeria-ai-iot-future",
    },
};

export default function LogisticsTechnologyPost() {
    const blogLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "From AI to IoT: The Tech Revolutionizing Nigerian Trucking",
        "description": "How digital innovation is transforming Nigeria's logistics landscape for better efficiency and visibility.",
        "author": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mubraiz Resources Ltd",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mubraizresourcesltd.com/images/mubraiz-logo.svg"
            }
        },
        "datePublished": "2026-02-17",
        "image": "https://mubraizresourcesltd.com/images/blog/logistics-tech.jpg"
    };

    return (
        <>
            <JsonLd data={blogLd} />
            <BlogPost
                title="From AI to IoT: The Tech Revolutionizing Nigerian Trucking"
                description="The analog era is over. Discover the digital backbone that is moving Nigerian logistics into the future."
                author="Tech Innovation Desk"
                date="February 17, 2026"
                image="/images/blog/logistics-tech.jpg"
                imageAlt="High-tech logistics dashboard showing real-time fleet technology in Nigeria."
                keywords={["Tech", "AI", "IoT", "Logistics", "Nigeria"]}
                content={
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-3xl font-bold mb-4">The Digital Leap: Why Tech is the New Road</h2>
                            <p>
                                In 2025, a truck without data is just a piece of metal on the road. The Nigerian logistics sector is undergoing a massive transformation where **Logistics Technology Nigeria** is the primary differentiator between industry leaders and laggards. It's not just about tracking anymore; it's about prediction, optimization, and seamless integration.
                            </p>
                            <p>
                                At Mubraiz Resources, we’ve placed technology at the core of our "Delivering Excellence" philosophy. We don't just move cargo; we move information, ensuring that every stakeholder—from shipper to driver—is perfectly aligned.
                            </p>
                        </section>

                        <section className="relative p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                            <div className="bg-white p-8 rounded-[14px]">
                                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The 2025 Tech Stack for Haulage</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-3 hover:bg-blue-50 transition-colors rounded">
                                        <span className="material-symbols-outlined text-blue-600">analytics</span>
                                        <div>
                                            <strong>Predictive Maintenance:</strong> using AI to foresee mechanical failures before they happen.
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-3 hover:bg-blue-50 transition-colors rounded">
                                        <span className="material-symbols-outlined text-blue-600">route</span>
                                        <div>
                                            <strong>Dynamic Routing:</strong> IoT-driven traffic analytics to bypass Lagos congestion in real-time.
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-3 hover:bg-blue-50 transition-colors rounded">
                                        <span className="material-symbols-outlined text-blue-600">visibility</span>
                                        <div>
                                            <strong>End-to-End Visibility:</strong> A single source of truth for every waybill, available 24/7.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">1. GPS Fleet Management: Beyond Locations</h2>
                            <p>
                                Most companies think **GPS fleet management** is about seeing where a truck is on a map. We see it as fuel efficiency, driver safety monitoring, and optimized turnaround times.
                            </p>
                            <p>
                                By analyzing idle times and sudden braking patterns, we can empower our drivers to behave more professionally while reducing the environmental impact of our trips. This is simplified technology that produces complex, high-value results.
                            </p>
                            <h3 className="text-xl font-bold mt-6 mb-2">Internal Linking:</h3>
                            <p>
                                🔍 *Experience our [Live Tracking Portal](file:///c:/Projects/Mubraiz%20Resources%20UI/Web/frontend/src/app/portal/client/tracking/page.tsx) to see our tech stack in action.*
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">2. Digital Logistics Platforms: The Unified Supply Chain</h2>
                            <p>
                                The future is **Digital logistics platforms** that act as a central nervous system for your shipments. Paper manifests are vanishing, replaced by digital waybills and electronic proof of delivery (ePOD).
                            </p>
                            <p>
                                For our enterprise clients, this means less friction, faster billing cycles, and zero ambiguity. When you partner with Mubraiz, you inherit a tech infrastructure that took years to refine.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 italic">Authority Vision...</h2>
                            <p>
                                Technology doesn't replace people; it empowers them to be exceptional. In our hands, it's the tool that ensures your cargo never stops moving.
                            </p>
                        </section>
                    </div>
                }
                relatedPosts={[
                    { title: "Smart E-commerce Fulfillment", slug: "ecommerce-logistics-nigeria-optimization-guide" },
                    { title: "Green Logistics: The Sustainable Path", slug: "green-logistics-nigeria-sustainable-haulage-future" }
                ]}
            />
        </>
    );
}
