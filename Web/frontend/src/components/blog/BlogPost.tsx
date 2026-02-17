import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostProps {
    title: string;
    description: string;
    content: React.ReactNode;
    image: string;
    imageAlt: string;
    author: string;
    date: string;
    keywords: string[];
    relatedPosts?: { title: string; slug: string }[];
}

const BlogPost: React.FC<BlogPostProps> = ({
    title,
    description,
    content,
    image,
    imageAlt,
    author,
    date,
    keywords,
    relatedPosts
}) => {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <header className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                            Industry Authority
                        </span>
                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-200 md:text-2xl">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Content Body */}
            <div className="mx-auto mt-[-100px] max-w-5xl px-4">
                <div className="relative rounded-2xl bg-white p-8 shadow-2xl md:p-16">
                    <div className="mb-12 flex flex-wrap items-center justify-between border-b border-gray-100 pb-8 text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-gray-900">{author}</span>
                            <span>•</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                            {keywords.map((kw, i) => (
                                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                                    #{kw.replace(/\s+/g, '')}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-img:rounded-xl">
                        {content}
                    </div>

                    {/* Navigation Footer */}
                    <footer className="mt-20 border-t border-gray-100 pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-6">Expertise & Authority</h3>
                                <p className="text-gray-600 mb-6">
                                    Mubraiz Resources Ltd is a leader in haulage excellence across Nigeria. Our insights are driven by over 25 years of field experience in supply chain optimization.
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                                    Partner with us for your next shipment
                                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                                </Link>
                            </div>

                            {relatedPosts && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6">Related Insights</h3>
                                    <ul className="space-y-4">
                                        {relatedPosts.map((post, i) => (
                                            <li key={i}>
                                                <Link href={`/blog/${post.slug}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                                                    {post.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
