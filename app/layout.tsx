import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// Separate viewport export for Next.js 15+ compatibility
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Montaj si Reparatii Acoperisuri - Servicii Complete de Acoperisuri",
  description:
    "Servicii profesionale de montaj si reparatii acoperisuri. Dulgherie, tigla ceramica, urgente 24/7. Experienta 15+ ani in București si oriunde in Romania.",
  keywords:
    "montaj acoperisuri, reparatii acoperisuri, dulgherie acoperis, tigla ceramica, urgente acoperis",
  authors: [{ name: "Montaj Acoperișuri ITF" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://reparatiiacoperisurisimontaj.ro/",
    siteName: " Reparatii Acoperisuri si Montaj",
    title: "Montaj si Reparatii Acoperisuri - Servicii Complete",
    description:
      "Servicii profesionale de montaj si reparatii acoperisuri in București si oriunde in Romania. Urgențe 24/7.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Montaj si Reparatii Acoperisuri",
              description:
                "Servicii profesionale de montaj si reparatii acoperisuri",
              url: "https://reparatiiacoperisurisimontaj.ro/",
              telephone: "+40727416444",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Exemplu 123",
                addressLocality: "București",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "44.4268",
                longitude: "26.1025",
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
              priceRange: "$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "44.4268",
                  longitude: "26.1025",
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicii Acoperișuri",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Montaj Acoperisuri",
                      description: "Montaj profesional acoperisuri noi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparatii Acoperisuri",
                      description:
                        "Reparatii si intretinere acoperisuri existente",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
