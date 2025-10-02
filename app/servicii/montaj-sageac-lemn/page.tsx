import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          src="/sageac-lemn.jpg"
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
              Montaj Sageac din Lemn
            </h1>
            <div className="w-24 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction Card */}
          <Card className="max-w-3xl mx-auto mb-16 shadow-xl border-t-4 border-t-red-600">
            <CardContent className="p-8">
              <p className={`${inter.className} text-xl text-gray-700 mb-8`}>
                Șageacul din lemn este un element decorativ tradițional care
                adaugă un farmec aparte casei tale. Echipa noastră de
                profesioniști oferă servicii complete de montaj, asigurând că
                fiecare detaliu este executat cu precizie și atenție.
              </p>
            </CardContent>
          </Card>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-[200px] md:h-[250px]">
                <Image
                  src="/sageac-lemn2.jpg"
                  alt="Șageac lemn detaliu"
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-[200px] md:h-[250px]">
                <Image
                  src="/sageac-lemn3.png"
                  alt="Șageac lemn montaj"
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefits */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Avantajele Șageacului din Lemn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Aspect natural și estetic deosebit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Material durabil cu întreținere adecvată</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Posibilități variate de personalizare</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Serviciile Noastre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Consultanță și măsurători precise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Montaj profesional cu echipamente specializate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Tratamente de protecție pentru durabilitate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quality Assurance */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Garanția Calității
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Materiale premium selectate cu grijă</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Echipă cu experiență vastă în domeniu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Garanție extinsă pentru montaj</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <p
                className={`${inter.className} text-xl text-gray-700 font-medium text-center mb-6`}
              >
                Adaugă valoare și frumusețe casei tale cu un șageac din lemn
                montat profesional!
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne pentru o evaluare gratuită și o ofertă
                personalizată.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
