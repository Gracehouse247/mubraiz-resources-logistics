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
  metadataBase: new URL("https://mubraizresourcesltd.com"),
  title: {
    default: "Mubraiz Resources | Delivering Excellence Haulage Solutions",
    template: "%s | Mubraiz Resources"
  },
  description: "Mubraiz Resources Ltd provides seamless supply chain ecosystems and high-performance logistics solutions powered by real-time data in Nigeria and beyond.",
  keywords: ["Logistics Company in Nigeria", "Haulage Services in Nigeria", "Supply Chain Nigeria", "Customs Clearance Agent", "Freight Forwarding Nigeria", "Mubraiz Resources"],
  authors: [{ name: "Mubraiz Resources Ltd" }],
  creator: "Mubraiz Resources Ltd",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://mubraizresourcesltd.com",
    siteName: "Mubraiz Resources",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Mubraiz Resources - Logistics Excellence"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubraiz Resources | Delivering Excellence Haulage Solutions",
    description: "High-performance logistics solutions powered by real-time data in Nigeria.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          {/* Google Analytics 4 */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                  `,
                }}
              />
            </>
          )}
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
