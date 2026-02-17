import type { Metadata } from 'next';
import TrackingContent from './TrackingContent';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Shipment Control Tower | Total Cargo Visibility | Mubraiz Resources',
    description: 'Access the Mubraiz Shipment Control Tower. Real-time GPS tracking, electronic proof of delivery (ePOD), and automated trade document management for global logistics.',
};

export default function UnifiedTrackingPage() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Mubraiz Shipment Control Tower",
                    "applicationCategory": "LogisticsTool",
                    "operatingSystem": "Web",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    }
                }}
            />
            <TrackingContent />
        </>
    );
}
