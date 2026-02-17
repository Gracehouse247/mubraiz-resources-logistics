import type { Metadata } from 'next';
import SettingsContent from './SettingsContent';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Terminal Configuration | Mubraiz Resources',
    description: 'Customize your Mubraiz Client Portal interface, security protocols, and grid notification triggers.',
};

export default function SettingsPage() {
    return (
        <div className="h-full">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Mubraiz Terminal Configuration",
                    "description": "User settings and profile management for the Mubraiz Resources Client Portal.",
                    "provider": {
                        "@type": "LogisticsBusiness",
                        "name": "Mubraiz Resources Limited"
                    }
                }}
            />
            <SettingsContent />
        </div>
    );
}
