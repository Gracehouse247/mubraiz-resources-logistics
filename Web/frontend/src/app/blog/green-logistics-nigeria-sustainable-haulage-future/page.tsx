import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Green Logistics Nigeria | Sustainable Supply Chain Solutions",
    description: "Join the green logistics movement in Nigeria. Learn how to reduce your carbon footprint with sustainable haulage and carbon-conscious routing.",
    keywords: ["Green Logistics Nigeria", "Eco-friendly logistics", "Carbon footprint reduction", "Fuel-efficient trucks"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/blog/green-logistics-nigeria-sustainable-haulage-future",
    },
};

export default function GreenLogisticsPost() {
    const blogLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "The Future is Green: Transitioning to Sustainable Haulage",
        "description": "How Nigeria's logistics industry is embracing sustainability to drive long-term value.",
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
        "image": "https://mubraizresourcesltd.com/images/blog/green-logistics.jpg"
    };

    return (
        <>
            <JsonLd data={blogLd} />
            <BlogPost
                title="The Future is Green: Transitioning to Sustainable Haulage"
                description="Sustainability is no longer a choice; it's a strategic imperative for the modern enterprise."
                author="Sustainability & ESG Desk"
                date="February 17, 2026"
                image="/images/blog/green-logistics.jpg"
                imageAlt="Sustainable green logistics fleet operating in an environmentally conscious hub."
                keywords={["Green", "Sustainability", "ESG", "Nigeria"]}
                content={
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-3xl font-bold mb-4">Sustainability: The New Metric of Logistics Success</h2>
                            <p>
                                The global spotlight is on the environment, and Nigeria is no exception. **Green Logistics Nigeria** is moving from a niche concept to a mainstream requirement for billion-dollar organizations and socially-conscious brands. It’s about more than just "planting trees"; it’s about the fundamental efficiency of how we move goods.
                            </p>
                            <p>
                                At Mubraiz Resources, our commitment to Delivering Excellence includes an uncompromising responsibility to the communities we serve. A more efficient supply chain is a greener supply chain.
                            </p>
                        </section>

                        <section className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
                            <h3 className="text-2xl font-bold mb-4 text-emerald-900">Our Green Logistics Roadmap</h3>
                            <ul className="space-y-4 text-emerald-800">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-emerald-600">eco</span>
                                    <strong>CNG Fleet Expansion:</strong> Phasing in Compressed Natural Gas vehicles to reduce carbon emissions by up to 25%.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-emerald-600">map</span>
                                    <strong>Route Optimization:</strong> AI-driven paths that minimize mileage and fuel consumption.
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-emerald-600">speed</span>
                                    <strong>Eco-Driving Programs:</strong> Advanced training for our drivers to maximize fuel efficiency through behavior.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">1. Carbon Footprint Reduction: Data-Driven ESG</h2>
                            <p>
                                Businesses aren't just asked to be sustainable; they are required to prove it. **Carbon footprint reduction** in logistics is now a key part of corporate ESG (Environmental, Social, and Governance) reporting.
                            </p>
                            <p>
                                We’ve simplified this reporting for you. By provide detailed emissions data for every shipment, Mubraiz helps you meet your sustainability goals with the authority of verifiable data.
                            </p>
                            <h3 className="text-xl font-bold mt-6 mb-2">Internal Linking:</h3>
                            <p>
                                🔍 *Read about our [Fleet Maintenance Standards](file:///c:/Projects/Mubraiz%20Resources%20UI/Web/frontend/src/app/fleet/page.tsx) and how regular servicing keeps our emissions at an all-time low.*
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">2. Eco-friendly Logistics: A Competitive Edge</h2>
                            <p>
                                Being an **Eco-friendly logistics** partner isn't just "good for the planet"; it's good for business. Efficient fuel usage translates directly into cost savings for our clients. In an era of volatile fuel prices, a green strategy is a financially resilient strategy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 italic">Authority Call to Action...</h2>
                            <p>
                                The future of logistics is not just about moving fast. It's about moving right. Join us on the path to a greener Nigeria.
                            </p>
                        </section>
                    </div>
                }
                relatedPosts={[
                    { title: "The Tech Revolution in Trucking", slug: "logistics-technology-nigeria-ai-iot-future" },
                    { title: "B2B Scalability and 3PL", slug: "3pl-services-nigeria-b2b-scalability-benefits" }
                ]}
            />
        </>
    );
}
