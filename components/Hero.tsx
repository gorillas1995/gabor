"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Inter, Montserrat } from "next/font/google";

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// Hero section component with background image and overlaid content
export default function Hero() {
  // Handle phone call based on device type
  const handlePhoneCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const phoneNumber = "+40727416444";

    // Check if device is mobile
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show confirmation dialog on desktop
      if (window.confirm("Doriți să apelați numărul " + phoneNumber + "?")) {
        window.location.href = `tel:${phoneNumber}`;
      }
    }
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background image with blur effect */}
      <div className="absolute inset-0">
        <Image
          src="/hero-roofing.webp"
          alt="Montaj Acoperisuri Background"
          fill
          className="object-cover brightness-50 lg:object-[center_80%]"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content container */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center bg-gradient-to-r from-gray-50 to-gray-100 bg-clip-text text-transparent">
        {/* Main heading with responsive text sizes */}
        <h1
          className={`${montserrat.className} mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl`}
        >
          MONTAJ ACOPERISURI
        </h1>

        {/* Secondary heading */}
        <h2
          className={`${montserrat.className} mb-2 text-2xl font-semibold tracking-wide sm:text-3xl md:text-4xl`}
        >
          REPARATII - DULGHERIE
        </h2>

        {/* Third heading */}
        <h3
          className={`${inter.className} mb-8 text-xl font-medium sm:text-2xl md:text-3xl`}
        >
          Roofing Services
        </h3>

        {/* Description text */}
        <p
          className={`${inter.className} mb-10 max-w-2xl text-base sm:text-lg md:text-xl`}
        >
          Specialisti in montaj si reparatii acoperisuri cu garantie extinsa.
          <br></br>
          Servicii complete, de la consultanta si alegerea materialelor
          potrivite pana la executia profesionala a proiectului.
        </p>

        {/* Call to action button with click handler */}
        <div className="py-10">
          <Button
            asChild
            className={`${montserrat.className} bg-red-700 px-8 py-6 text-lg rounded-2xl font-semibold text-white`}
          >
            <a href="tel:+40727416444" onClick={handlePhoneCall}>
              Cere oferta gratuita
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
