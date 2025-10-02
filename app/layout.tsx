import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  title:
    "Suna la +40 727 416 444 -Montaj si Reparatii Acoperisuri - Servicii Complete de Acoperisuri",
  description:
    "Suna la +40 727 416 444 - Servicii profesionale de montaj si reparatii acoperisuri. Dulgherie, tigla ceramica, urgente 24/7. Experienta 15+ ani in București si oriunde in Romania.",
  keywords:
    "montaj acoperisuri, reparatii acoperisuri, dulgherie acoperis, tigla ceramica, urgente acoperis",
  authors: [{ name: "Montaj Acoperișuri ITF" }],
  robots: "index, follow",
  // Add favicon and icons
  icons: {
    icon: "/logo-gab.png",
    shortcut: "/logo-gab.png",
    apple: "/logo-gab.png",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://reparatiiacoperisurisimontaj.ro/",
    siteName: " Reparatii Acoperisuri si Montaj",
    title:
      "Suna la +40 727 416 444 - Montaj si Reparatii Acoperisuri - Servicii Complete",
    description:
      "Suna la +40 727 416 444 - Servicii profesionale de montaj si reparatii acoperisuri in București si oriunde in Romania. Urgențe 24/7.",
    // Add Open Graph image for social media sharing
    images: [
      {
        url: "/logo-gab.png",
        width: 1200,
        height: 630,
        alt: "Montaj si Reparatii Acoperisuri Logo",
      },
    ],
  },
  // Add Twitter card metadata for better social sharing
  twitter: {
    card: "summary_large_image",
    title: "Suna la +40 727 416 444 - Montaj si Reparatii Acoperisuri",
    description:
      "Suna la +40 727 416 444 - Servicii profesionale de montaj si reparatii acoperisuri in București si oriunde in Romania. Urgențe 24/7.",
    images: ["/logo-gab.png"],
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
        {/* Google Search Console site verification meta tag - keep this to stay verified */}
        <meta
          name="google-site-verification"
          content="_8ZrZAKwTzgbnWURJ1EWaRnKHP2qMGKGBYmtUNGCPG4"
        />

        <link rel="icon" type="image/png" href="/logo-gab.png" />
        <link rel="apple-touch-icon" href="/logo-gab.png" />

        {/* Google tag (gtag.js) - loads Google Ads tag on every page */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-444007051"
          strategy="afterInteractive"
        />

        {/* Initialize gtag and configure with your Google Ads ID */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-444007051');
  `}
        </Script>

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
                streetAddress: "Bulevardul Unirii 1",
                addressLocality: "București",
                addressRegion: "Sector 3",
                postalCode: "030167",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "44.4268",
                longitude: "26.1025",
              },
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "45.9432", // Center of Romania
                  longitude: "24.9668", // Center of Romania
                },
                geoRadius: "500000", // 500km radius covers most of Romania
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
