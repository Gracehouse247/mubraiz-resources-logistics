import type { Metadata } from 'next';
import ShipmentListContent from './ShipmentListContent';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Global Shipment Inventory | Mubraiz Resources',
    description: 'Monitor and manage your strategic logistics nodes across the global supply chain grid.',
};

export default function ShipmentListPage() {
    return (
        <div className="h-full">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Mubraiz Global Shipment Tracking",
                    "description": "Unified dashboard for managing international freight and supply chain nodes.",
                    "provider": {
                        "@type": "LogisticsBusiness",
                        "name": "Mubraiz Resources Limited"
                    }
                }}
            />
            <ShipmentListContent />
        </div>
    );
}
