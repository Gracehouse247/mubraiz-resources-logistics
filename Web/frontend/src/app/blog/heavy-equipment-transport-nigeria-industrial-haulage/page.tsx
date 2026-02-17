import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Heavy Equipment Transport Nigeria | Specialized Haulage",
    description: "Reliable heavy equipment transport in Nigeria. Safe relocation of construction machinery and industrial assets with Mubraiz expert fleet.",
    keywords: ["Heavy Equipment Transport Nigeria", "Oversized cargo transport", "Construction logistics Lagos", "Heavy machinery moving"],
    alternates: {
        canonical: "https://mubraizresourcesltd.com/blog/heavy-equipment-transport-nigeria-industrial-haulage",
    },
};

export default function HeavyEquipmentPost() {
    const blogLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Moving Mountains: The Engineering of Heavy Equipment Haulage",
        "description": "Insight into the specialized world of heavy machinery and industrial asset transport in Nigeria.",
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
        "image": "https://mubraizresourcesltd.com/images/blog/heavy-equipment-haulage.jpg"
    };

    return (
        <>
            <JsonLd data={blogLd} />
            <BlogPost
                title="Moving Mountains: The Engineering of Heavy Equipment Haulage"
                description="When the load is massive, ordinary logistics won't do. You need engineering-grade haulage solutions."
                author="Industrial Operations Division"
                date="February 17, 2026"
                image="/images/blog/heavy-equipment-haulage.jpg"
                imageAlt="Specialized lowbed truck performing heavy equipment transport in Nigeria."
                keywords={["Heavy Haulage", "Construction", "Machinery", "Nigeria"]}
                content={
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-3xl font-bold mb-4">The Precision of Power: Heavy Haulage in 2025</h2>
                            <p>
                                Moving an 80-ton excavator across Nigerian states is not a simple game of transportation; it's a feats of engineering. **Heavy Equipment Transport Nigeria** requires a specific set of skills, from weight distribution physics to bridge clearance analysis. It's a high-stakes operation where every centimeter of clearance and every kilogram of load-bearing matters.
                            </p>
                            <p>
                                At Mubraiz Resources, we treat every industrial move with the authority of a specialized project. We don't just provide a truck; we provide a comprehensive "Move Plan" that accounts for every variable on the route.
                            </p>
                        </section>

                        <section className="bg-gray-100 p-8 rounded-xl border border-gray-300 shadow-inner">
                            <h3 className="text-2xl font-bold mb-4">The Heavy Haulage Checklist</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-600">route</span>
                                    <div>
                                        <strong>Route Survey:</strong> Verifying road integrity and overhead obstacles.
                                    </div>
                                </div>
                                <div className="p-4 bg-white rounded flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-600">verified</span>
                                    <div>
                                        <strong>Escort Services:</strong> Coordinating with state and federal traffic authorities.
                                    </div>
                                </div>
                                <div className="p-4 bg-white rounded flex items-start gap-3">
                                    <span className="material-symbols-outlined text-blue-600">precision_manufacturing</span>
                                    <div>
                                        <strong>Loading Stability:</strong> Advanced strapping and center-of-gravity verification.
                                    </div>
                                </div>
                                <div className="p-4 bg-white rounded flex items-start gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">health_and_safety</span>
                                    <div>
                                        <strong>Risk Assessment:</strong> Specialized Goods-in-Transit (GIT) for high-value machinery.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">1. Oversized Cargo Transport: Navigating the Impossible</h2>
                            <p>
                                **Oversized cargo transport** isn't just about size; it's about the permissions and the environment. Nigeria’s diverse road network requires a partner that has deep relationships with regulatory bodies.
                            </p>
                            <p>
                                We’ve simplified the "oversized" headache. Our lowbed and specialized multi-axle trailers are maintained to international standards, ensuring that even the most cumbersome industrial boilers or wind turbine components reach their destination safely.
                            </p>
                            <h3 className="text-xl font-bold mt-6 mb-2">Internal Linking:</h3>
                            <p>
                                🔍 *Check out our [Heavy Fleet Specifications](file:///c:/Projects/Mubraiz%20Resources%20UI/Web/frontend/src/app/fleet/page.tsx) to see the capabilities of our lowbed and industrial trailers.*
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4">2. Construction Logistics Lagos: Building the Mega-City</h2>
                            <p>
                                Lagos never stops growing, and its constant evolution depends on a steady supply of heavy machinery. Our **Construction logistics in Lagos** services are built for reliability in high-pressure environments. From foundation rigs to tower crane sections, we deliver the tools that build the city.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 italic">Authority Final Quote...</h2>
                            <p>
                                Heavy equipment isn't just machinery; it's an investment in progress. We move that progress forward.
                            </p>
                        </section>
                    </div>
                }
                relatedPosts={[
                    { title: "Specialized Haulage Strategy", slug: "haulage-solutions-nigeria-guide" },
                    { title: "Safety in Industrial Transport", slug: "fleet-safety-standards-nigeria" }
                ]}
            />
        </>
    );
}
