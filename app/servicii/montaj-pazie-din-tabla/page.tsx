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
          src="/pazie-tabla.png"
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
              Montaj Pazie din Tabla
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
                Montajul de pazie din tablă este o soluție esențială pentru
                protecția acoperișului și pentru îmbunătățirea aspectului
                general al clădirii tale. Echipa noastră de profesioniști îți
                oferă servicii complete de montaj, asigurându-se că toate
                detaliile sunt realizate cu precizie și durabilitate.
              </p>
            </CardContent>
          </Card>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Why Choose Metal Fascia */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  De ce să alegi pazia din tablă?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Durabilitate ridicată – Tablă rezistentă la intemperii,
                      coroziune și uzură.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Estetică modernă – Disponibilă în diverse culori și
                      finisaje pentru a se potrivi perfect cu stilul
                      acoperișului tău.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Protecție optimă – Previne infiltrarea apei și
                      deteriorarea lemnului de sub streșini.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Services */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Serviciile noastre includ:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Măsurători și consiliere tehnică.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Tăiere și prelucrare tablă conform specificațiilor
                      acoperișului;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Montaj rapid și precis cu echipamente profesionale;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Finisaje detaliate pentru un aspect impecabil.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Avantajele colaborării cu noi:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Experiență în domeniu;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Utilizarea materialelor de cea mai bună calitate;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Respectarea termenelor de execuție;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Garanție pentru lucrare.</span>
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
                Transformă acoperișul casei tale într-un element de rezistență
                și frumusețe!
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne acum pentru o ofertă personalizată și bucură-te
                de un montaj de calitate superioară.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
