import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import JsonLd, { organizationJsonLd } from "@/components/seo/JsonLd";
import QueryProvider from "@/components/providers/QueryProvider";
import ErrorIntelligence from "@/components/monitoring/ErrorIntelligence";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mubraiz Resources | Delivering Excellence Haulage Solutions",
  description: "Mubraiz Resources Ltd provides seamless supply chain ecosystems and high-performance logistics solutions powered by real-time data.",
  keywords: ["Logistics", "Haulage", "Fleet Management", "Supply Chain", "Customs Clearance", "Freight Forwarding", "Mubraiz Resources"],
  authors: [{ name: "Mubraiz Resources Ltd" }],
  robots: "index, follow",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="light" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
            rel="stylesheet"
          />
          <JsonLd data={organizationJsonLd} />
        </head>
        <body className="bg-white font-display text-[#0f172a] antialiased" suppressHydrationWarning>
          <QueryProvider>
            <ErrorIntelligence />
            <Header />
            {children}
            <Footer />
            <CookieConsent />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
