import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PartnerStrip from "@/components/home/PartnerStrip";
import SpecializedInfrastructure from "@/components/home/SpecializedInfrastructure";
import ActiveServiceZones from "@/components/home/ActiveServiceZones";
import ReadyToMove from "@/components/home/ReadyToMove";

export const metadata: Metadata = {
  title: "Logistics Company in Nigeria | Mubraiz Resources Limited",
  description: "Mubraiz Resources Ltd is the leading logistics company in Nigeria, providing specialized haulage, secure warehousing, and high-performance supply chain ecosystems.",
  keywords: ["Logistics Company in Nigeria", "Best Haulage Company Lagos", "Supply Chain Solutions Nigeria", "Freight Forwarding Nigeria", "Mubraiz Resources"],
  alternates: {
    canonical: "https://mubraizresourcesltd.com",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PartnerStrip />
      <SpecializedInfrastructure />
      <ActiveServiceZones />
      <ReadyToMove />
    </main>
  );
}

