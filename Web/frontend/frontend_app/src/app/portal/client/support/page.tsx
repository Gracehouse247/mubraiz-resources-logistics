import type { Metadata } from 'next';
import SupportContent from './SupportContent';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Support Hub | Mission Control | Mubraiz Resources',
    description: 'Direct end-to-end encrypted communication channel for Mubraiz Resources clients. Resolve logistics exceptions, route inquiries, and customs disputes in real-time.',
};

export default function UnifiedSupportPage() {
    return (
        <div className="h-full">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Mubraiz Resources Support Hub",
                    "description": "Secure logistics support and ticketing system for enterprise clients.",
                    "provider": {
                        "@type": "LogisticsBusiness",
                        "name": "Mubraiz Resources Limited"
                    }
                }}
            />
            <SupportContent />
        </div>
    );
}
