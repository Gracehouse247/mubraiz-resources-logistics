import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';

export const metadata: Metadata = {
    title: "Eco-Friendly Haulage Nigeria | Sustainable Fleet Future",
    description: "Discover the rise of eco-friendly haulage in Nigeria. Learn about alternative fuels, CNG trucks, and the path to a sustainable logistics network.",
    keywords: ["Eco-Friendly Haulage Nigeria", "Sustainable trucking Lagos", "CNG trucks Nigeria", "Green logistics"],
};

export default function EcoFriendlyPost() {
    return (
        <BlogPost
            title="Beyond Diesel: The Rise of Eco-Friendly Haulage in Nigeria"
            description="Can a heavy-duty fleet be green? Explore the technologies making sustainable transport a reality in the heart of Africa."
            author="Green Energy Desk"
            date="February 17, 2026"
            image="/images/blog/eco-haulage.jpg"
            imageAlt="Sustainability-focused eco-friendly haulage truck operating in Nigeria."
            keywords={["Eco-Friendly", "Haulage", "Sustainable", "Nigeria"]}
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Fueling the Future Responsibly</h2>
                        <p>
                            The future of **Eco-Friendly Haulage Nigeria** is being written today. As global carbon mandates tighten and local fuel costs rise, the transition to alternative energy sources like Compressed Natural Gas (CNG) is making both environmental and financial sense.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
