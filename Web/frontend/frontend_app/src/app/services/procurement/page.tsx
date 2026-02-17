
import React from 'react';
import { Metadata } from 'next';
import ProcurementContent from './ProcurementContent';

export const metadata: Metadata = {
    title: "Procurement & Supply Chain Management | Mubraiz Resources",
    description: "Executive procurement, strategic sourcing, and supply chain orchestration services in Nigeria. Advanced AI-driven logistics solutions.",
    keywords: ["Procurement Nigeria", "Supply Chain Management", "Strategic Sourcing", "Inventory Management", "Vendor Management"],
};

export default function ProcurementPage() {
    return <ProcurementContent />;
}
