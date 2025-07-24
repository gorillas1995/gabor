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
          src="/acoperis-nou.webp"
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
              Montaj Tigla Metalica
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
                Montajul țiglei metalice reprezintă o soluție modernă și
                eficientă pentru acoperișul casei tale. Cu o durabilitate
                excelentă și un aspect estetic plăcut, țigla metalică oferă
                protecție optimă împotriva intemperiilor și un raport
                calitate-preț avantajos.
              </p>
            </CardContent>
          </Card>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Advantages Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Beneficiile Țiglei Metalice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Greutate Redusă – Nu pune presiune excesivă pe structura
                      acoperișului, fiind ideală pentru orice tip de
                      construcție.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Rezistență Îndelungată – Protejată împotriva coroziunii și
                      tratată special pentru a face față condițiilor meteo
                      extreme.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Montaj Rapid – Instalare eficientă datorită dimensiunilor
                      mari ale panourilor și sistemului de prindere modern.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Aspect Estetic – Disponibilă într-o gamă variată de culori
                      și modele pentru a se potrivi oricărui stil arhitectural.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Installation Process Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Etapele Montajului
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${inter.className} text-gray-700 mb-4`}>
                  Procesul de montaj al țiglei metalice necesită expertiză și
                  atenție la detalii. Iată pașii principali:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Pregătirea Șarpantei – Verificarea și ajustarea structurii
                      suport pentru o instalare optimă.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Montarea Foliei – Aplicarea membranei anticondens pentru
                      protecție suplimentară.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Instalarea Țiglei – Fixarea corectă a panourilor cu
                      elemente de prindere specifice.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Montaj Accesorii – Instalarea elementelor de ventilație,
                      doliilor și a sistemului pluvial.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Professional Installation Card */}
          <Card className="max-w-4xl mx-auto mb-16 shadow-xl">
            <CardHeader>
              <CardTitle
                className={`${montserrat.className} text-xl text-gray-800 text-center`}
              >
                De ce să alegi serviciile noastre de montaj?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p
                className={`${inter.className} text-lg text-gray-700 mb-8 text-center`}
              >
                Cu o experiență vastă în domeniu, echipa noastră asigură un
                montaj profesionist al țiglei metalice, respectând toate
                standardele de calitate și siguranță. Oferim garanție extinsă
                pentru lucrările executate și folosim doar materiale premium.
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne pentru o evaluare gratuită și o ofertă
                personalizată pentru montajul țiglei metalice! Garantăm un
                acoperiș durabil și estetic pentru casa ta.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
