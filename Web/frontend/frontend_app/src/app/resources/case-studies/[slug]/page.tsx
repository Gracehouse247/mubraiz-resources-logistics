import { caseStudies } from '@/data/caseStudies';
import CaseStudyContent from './CaseStudyContent';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);

    return {
        title: `${study?.title || 'Case Study'} | Mubraiz Resources Success Stories`,
        description: study?.challenge || 'Discover how Mubraiz Resources delivers excellence in global logistics.',
    };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) return null;

    return <CaseStudyContent study={study} allStudies={caseStudies} />;
}
