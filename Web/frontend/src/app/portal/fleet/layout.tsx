import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management | Mubraiz Resources",
    description: "Real-time GPS tracking and fleet management powered by AI. Monitor vehicles, analyze driver behavior, and optimize fleet operations.",
    keywords: ["fleet management", "GPS tracking", "vehicle tracking", "driver monitoring", "logistics", "telematics", "Nigeria fleet"],
};

export default function FleetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
