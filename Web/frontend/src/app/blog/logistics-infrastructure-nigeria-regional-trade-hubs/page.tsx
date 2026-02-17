import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';

export const metadata: Metadata = {
    title: "Logistics Infrastructure Nigeria | Regional Trade Hubs",
    description: "Unlock the potential of logistics infrastructure in Nigeria. Explore the regional hubs, dry ports, and transport corridors driving economic growth.",
    keywords: ["Logistics Infrastructure Nigeria", "Dry ports Nigeria", "Regional trade hubs", "Transport corridors"],
};

export default function InfrastructurePost() {
    return (
        <BlogPost
            title="The Skeleton of Success: Mapping Nigeria's Logistics Infrastructure"
            description="The roads, the rails, and the ports. Discover the physical assets that are turning Nigeria into a continental trade powerhouse."
            author="Infrastructure Analysis Team"
            date="February 17, 2026"
            image="/images/blog/logistics-infrastructure.jpg"
            imageAlt="Modern logistics infrastructure development and trade hubs in Nigeria."
            keywords={["Infrastructure", "Hubs", "Trade", "Nigeria"]}
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Building the Backbone of the Nation</h2>
                        <p>
                            **Logistics Infrastructure Nigeria** is evolving at a pace never seen before. From the expansion of the Lagos-Ibadan rail to the development of deep-sea ports and inland dry ports, the physical map of Nigerian trade is being redrawn for the next century of growth.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
