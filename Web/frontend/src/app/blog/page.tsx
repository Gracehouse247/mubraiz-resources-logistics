"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
    {
        title: "3PL Services in Nigeria: B2B Scalability Benefits",
        slug: "3pl-services-nigeria-b2b-scalability-benefits",
        desc: "How Third-Party Logistics is transforming corporate scalability in the Nigerian market.",
        category: "Operations"
    },
    {
        title: "Agri-Logistics: Farm-to-Table Efficiency",
        slug: "agri-logistics-nigeria-farm-to-table-efficiency",
        desc: "Optimizing the cold chain and transport for Nigeria's agricultural revolution.",
        category: "Agri-Tech"
    },
    {
        title: "Lekki Deep Sea Port: Supply Chain Impact",
        slug: "lekki-deep-sea-port-logistics-supply-chain-impact",
        desc: "The strategic importance of West Africa's most modern port facility.",
        category: "Infrastructure"
    },
    {
        title: "Digital Customs in Nigeria: Paperless Trade",
        slug: "digital-customs-nigeria-paperless-trade",
        desc: "Accelerating clearance times through digital transformation and policy shifts.",
        category: "Customs"
    },
    {
        title: "CNG Trucks: The Future of Nigerian Logistics",
        slug: "cng-trucks-nigeria-logistics-future",
        desc: "Switching to Compressed Natural Gas for sustainable and cost-effective haulage.",
        category: "Sustainability"
    },
    {
        title: "Logistics Technology: AI & IoT Future",
        slug: "logistics-technology-nigeria-ai-iot-future",
        desc: "Harnessing real-time data to drive performance in the Nigerian logistics landscape.",
        category: "Technology"
    }
    // ... More posts can be added here
];

const featuredPost = posts[2]; // Lekki Port as featured

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#a1dc84]/10 text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-[#a1dc84]/20 mb-6 font-display">
                            Authority Industry Insights
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase tracking-tight">
                            Logistics <span className="text-[#a1dc84]">Intelligence</span> Hub
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Deep-dive technical analysis, regulatory updates, and strategic insights into the Nigerian and West African supply chain ecosystem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-2xl shadow-slate-200/50">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <img
                            src="/images/blog/lekki-port.jpg"
                            alt="Featured Post"
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop';
                            }}
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#a1dc84] mb-4">{featuredPost.category}</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase font-display">{featuredPost.title}</h2>
                        <p className="text-slate-500 mb-8 text-lg">{featuredPost.desc}</p>
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <button className="px-8 py-4 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-[#a1dc84] hover:text-slate-900 transition-all self-start">
                                Read Authority Analysis
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-32 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border border-slate-100 rounded-3xl p-6 hover:bg-slate-50 transition-all hover:shadow-xl"
                        >
                            <div className="mb-6 overflow-hidden rounded-2xl h-48 bg-slate-100 relative">
                                <img
                                    src={`/images/blog/${post.slug}.jpg`}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566633806327-040203ce8962?q=80&w=1974&auto=format&fit=crop';
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm">{post.category}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#a1dc84] transition-colors leading-tight uppercase font-display">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                                {post.desc}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
                                Access Article <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm font-medium italic">Showing 6 of 28 strategy expansion articles.</p>
                </div>
            </section>
        </div>
    );
}
