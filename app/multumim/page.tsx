import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

// SEO metadata for the thank-you page
export const metadata: Metadata = {
  title: "Mulțumim! | Confirmare trimitere formular",
  description:
    "Solicitarea ta a fost primită. Te contactăm în cel mai scurt timp.",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads conversion event snippet - fires when this page is viewed */}
      <Script id="ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', { 'send_to': 'AW-444007051/OK2oCL6vo4IbEIuF3NMB' });`}
      </Script>

      {/* Minimal, responsive confirmation content with phone CTA */}
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mulțumim!</h1>
          <p className="text-gray-600 mb-8">
            Am primit solicitarea ta și te vom contacta în cel mai scurt timp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Call-to-action button with the provided phone number */}
            <a
              href="tel:+40727416444"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Sună acum: 40 727 416 444
            </a>

            {/* Secondary action to return to homepage */}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Înapoi la Acasă
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
