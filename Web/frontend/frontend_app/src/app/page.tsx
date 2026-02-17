import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PartnerStrip from "@/components/home/PartnerStrip";
import SpecializedInfrastructure from "@/components/home/SpecializedInfrastructure";
import ActiveServiceZones from "@/components/home/ActiveServiceZones";
import ReadyToMove from "@/components/home/ReadyToMove";

export const metadata: Metadata = {
  title: "Mubraiz Resources Limited | Premium Global Logistics & Haulage",
  description: "Mubraiz Resources Ltd is a leader in global logistics, specialized haulage, and resource management. Experience high-performance supply chain ecosystems.",
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

