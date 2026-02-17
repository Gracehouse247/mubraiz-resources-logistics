import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';

export const metadata: Metadata = {
    title: "Supply Chain Disruption Nigeria | Risk Mitigation Strategies",
    description: "Prepare for supply chain disruptions in Nigeria. Learn how to build a resilient logistics network that withstands regional volatility and infrastructure gaps.",
    keywords: ["Supply Chain Disruption Nigeria", "Logistics risk management", "Business continuity Nigeria", "Supply chain resilience"],
};

export default function DisruptionPost() {
    return (
        <BlogPost
            title="The Resilient Link: Navigating Supply Chain Disruption in Nigeria"
            description="In a world of uncertainty, the only constant is change. Discover how to build a supply chain that bends without breaking."
            author="Risk Management Group"
            date="February 17, 2026"
            image="/images/blog/disruption-mitigation.jpg"
            imageAlt="Crisis management and supply chain resilience strategizing for Nigerian logistics."
            keywords={["Disruption", "Resilience", "Risk", "Nigeria"]}
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Planning for the Unplannable</h2>
                        <p>
                            **Supply Chain Disruption Nigeria** is not a matter of 'if', but 'when'. From infrastructure bottlenecks to regional instability, the Nigerian logistics landscape is one of the most volatile in West Africa. Resilience is not an optional feature; it is a survival requirement.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
