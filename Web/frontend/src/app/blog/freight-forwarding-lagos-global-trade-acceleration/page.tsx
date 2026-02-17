import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';

export const metadata: Metadata = {
    title: "Freight Forwarding Lagos | Accelerating Global Trade",
    description: "Relied on expert freight forwarding in Lagos. Accelerate your imports and exports with our streamlined customs and maritime solutions.",
    keywords: ["Freight Forwarding Lagos", "Import export services Nigeria", "Maritime logistics Lagos", "Air freight Nigeria"],
};

export default function FreightForwardingPost() {
    return (
        <BlogPost
            title="The Velocity of Value: Freight Forwarding in the Heart of Lagos"
            description="Lagos is the gateway to the West. Learn how to move your cargo through it with maximum speed and minimum friction."
            author="International Trade Desk"
            date="February 17, 2026"
            image="/images/blog/freight-forwarding.jpg"
            imageAlt="Cargo aircraft and maritime vessel integration for global freight forwarding in Nigeria."
            keywords={["Freight", "Forwarding", "Lagos", "Trade"]}
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Navigating the Global Intersection</h2>
                        <p>
                            Lagos is more than a city; it is a global trade intersection. **Freight Forwarding Lagos** requires more than just knowing a carrier; it requires a deep understanding of the maritime, air, and land nexus that governs African trade.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
