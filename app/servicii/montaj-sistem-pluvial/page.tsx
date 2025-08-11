import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Script from "next/script"; // Optimized script loading for Next.js

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montaj Sistem Pluvial | Servicii Complete de Colectare Apa",
  description:
    "Servicii profesionale de montaj sisteme pluviale in Bucuresti si Ilfov. Consultanta, montaj si reparatii jgheaburi si burlane. Materiale premium, garantie extinsa.",
};

export default function MontajSistemPluvial() {
  const services = [
    {
      title: "Consultanta Personalizata",
      description: "Alegem impreuna cele mai potrivite solutii pentru casa ta",
    },
    {
      title: "Montaj Profesional",
      description: "Instalare rapida si precisa, pentru o drenare optima",
    },
    {
      title: "Reparatii si Inlocuiri",
      description: "Modernizam sau reconditionam sistemele existente",
    },
    {
      title: "Accesorii Premium",
      description:
        "Cleme, coturi si piese complementare pentru o functionare perfecta",
    },
  ];

  const benefits = [
    "Materiale de calitate superioara: Utilizam doar produse rezistente la intemperii",
    "Profesionalism: Respectam termenele si asiguram un montaj curat si sigur",
    "Preturi accesibile: Oferim solutii pentru toate bugetele",
  ];

  return (
    <main>
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/sistem-pluvial.jpg"
          alt="Montaj Sistem Pluvial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mb-6`}
            >
              Montaj Sistem Pluvial Profesional
            </h1>
            <div className="w-24 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto mb-16 shadow-xl border-t-4 border-t-red-600">
            <CardContent className="p-8">
              <p className={`${inter.className} text-xl text-gray-700 mb-8`}>
                Ai nevoie de un sistem pluvial eficient si bine montat?
              </p>
              <p className={`${inter.className} text-lg text-gray-600 mb-8`}>
                Echipa noastra de profesionisti iti ofera servicii complete de
                montaj pentru sistemele de colectare si evacuare a apei
                pluviale.
              </p>
            </CardContent>
          </Card>

          <div className="max-w-5xl mx-auto mb-16">
            <h2
              className={`${montserrat.className} text-3xl font-bold text-center mb-12 bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent`}
            >
              Ce includ serviciile noastre:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`${inter.className} text-gray-600`}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-xl overflow-hidden">
              <Image
                src="/pluvial-3.jpg"
                alt="Exemplu montaj sistem pluvial"
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
            </Card>
            <Card className="shadow-xl overflow-hidden">
              <Image
                src="/pluvial-2.jpg"
                alt="Detaliu sistem pluvial"
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mb-16 shadow-xl">
            <CardHeader>
              <CardTitle
                className={`${montserrat.className} text-2xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent`}
              >
                De ce sa ne alegi?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className={`${inter.className} space-y-6 mb-8`}>
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow"
                  >
                    <span className="w-3 h-3 rounded-full bg-red-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center mt-8 p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Asigura-ti confortul si protectia casei impotriva apei pluviale!
                Contacteaza-ne astazi pentru o oferta personalizata.
              </p>
            </CardContent>
          </Card>

          <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden">
            <Image
              src="/pluvial-1.png"
              alt="Sistem pluvial profesional"
              width={800}
              height={500}
              className="w-full"
            />
          </Card>
        </div>
      </section>
    </main>
  );
}
