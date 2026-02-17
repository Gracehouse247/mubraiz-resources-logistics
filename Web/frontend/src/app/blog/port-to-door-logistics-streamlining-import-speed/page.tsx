import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';

export const metadata: Metadata = {
    title: "Port-to-Door Logistics | Streamlining Import Speed",
    description: "Accelerate your imports with Port-to-Door logistics. Learn how our end-to-end solutions bypass congestion and deliver goods directly to your facility.",
    keywords: ["Port-to-Door Logistics", "Import acceleration Nigeria", "Direct delivery Lagos", "Container transport"],
};

export default function PortToDoorPost() {
    return (
        <BlogPost
            title="The Straight Line: Why Port-to-Door is the Only Way to Import"
            description="Every handoff is a delay. Learn how to eliminate the middleman and move cargo from the quay to your courtyard in 48 hours."
            author="Import Velocity Team"
            date="February 17, 2026"
            image="/images/blog/port-to-door.jpg"
            imageAlt="Seamless port-to-door logistics operation showing container movement in Lagos."
            keywords={["Port", "Door", "Logistics", "Import"]}
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">The Velocity of Directness</h2>
                        <p>
                            The traditional import model is broken. **Port-to-Door Logistics** represents the modernization of the Nigerian supply chain, where the focus is on a single, accountability-driven movement from the ship's rail to the warehouse floor.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
