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
          src="/vopsit-acoperis1.jpg"
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
              Vopsit Acoperis
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
              <h2
                className={`${montserrat.className} text-2xl text-gray-800 mb-6 text-center`}
              >
                Protectie si Estetica pentru Casa Ta
              </h2>
              <p className={`${inter.className} text-xl text-gray-700 mb-8`}>
                Ai un acoperiș care și-a pierdut strălucirea sau începe să arate
                semne de uzură? Noi te ajutăm să redai frumusețea și
                durabilitatea acoperișului tău prin servicii profesionale de
                vopsire acoperișuri.
              </p>
              <div className="relative h-[200px] w-[250px] mx-auto mb-8">
                <Image
                  src="/vopsit-acoperis2.jpg"
                  alt="Vopsit Acoperis"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Benefits Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  De ce să alegi vopsirea acoperișului?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Protecție împotriva coroziunii: Vopsirea formează un strat
                      protector împotriva ruginii, ploii și razelor UV.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Prelungirea duratei de viață: O vopsea de calitate poate
                      crește durata de utilizare a acoperișului.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Estetică îmbunătățită: Casa ta va arăta ca nouă, iar
                      valoarea sa pe piață poate crește.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Costuri mai mici: Vopsirea este o soluție economică
                      comparativ cu înlocuirea completă a acoperișului.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Process Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Cum lucrăm?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Inspecție: Verificăm starea acoperișului pentru a
                      identifica eventualele reparații necesare.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Curățare: Îndepărtăm murdăria, mucegaiul și rugina pentru
                      o aderență perfectă a vopselei.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Aplicare vopsea: Utilizăm vopsele de înaltă calitate și
                      tehnici profesionale pentru rezultate impecabile.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Verificare finală: Asigurăm o acoperire uniformă și o
                      finisare de durată.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Types of Roofs Card */}
          <Card className="max-w-4xl mx-auto mb-16 shadow-xl">
            <CardHeader>
              <CardTitle
                className={`${montserrat.className} text-xl text-gray-800 text-center`}
              >
                Pentru ce tipuri de acoperișuri?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Acoperișuri din țiglă metalică</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Acoperișuri din tablă zincată</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Acoperișuri din șindrilă bituminoasă</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Alte materiale</span>
                </li>
              </ul>

              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Nu lăsa acoperișul tău să se degradeze! Contactează-ne acum
                pentru o ofertă personalizată și bucură-te de un acoperiș care
                impresionează!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
