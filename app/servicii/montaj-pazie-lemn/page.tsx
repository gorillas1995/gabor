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
          src="/pazie-din-lemn.png"
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
              Montaj Pazie de Lemn
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
                O pazie de lemn bine montată nu doar că protejează acoperișul,
                dar adaugă și un aspect estetic plăcut casei tale.
              </p>
              <p className={`${inter.className} text-lg text-gray-600 mb-8`}>
                Echipa noastră oferă servicii profesionale de montaj pazie lemn,
                asigurând o execuție impecabilă și durabilă.
              </p>
            </CardContent>
          </Card>

          <div className="max-w-5xl mx-auto mb-16">
            <h2
              className={`${montserrat.className} text-3xl font-bold text-center mb-12 bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent`}
            >
              Etape Montaj Pazie Lemn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Măsurători Precise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${inter.className} text-gray-600`}>
                    Începem prin efectuarea măsurătorilor exacte pentru a ne
                    asigura că pazia se potrivește perfect structurii
                    acoperișului.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Selectarea Materialului
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${inter.className} text-gray-600`}>
                    Folosim lemn de înaltă calitate, tratat pentru rezistență la
                    intemperii, umezeală și dăunători.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Pregătirea și Tăierea Lemnului
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${inter.className} text-gray-600`}>
                    Realizăm tăieri precise pentru a obține o îmbinare perfectă
                    între elementele de pazie.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Montaj Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${inter.className} text-gray-600`}>
                    Fixăm pazia utilizând sisteme de prindere sigure și tehnici
                    care garantează stabilitatea și rezistența în timp.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600">
                <CardTitle className="text-xl text-gray-800">
                  Tratare și Finisare
                </CardTitle>
                <CardContent>
                  <p className={`${inter.className} text-gray-600`}>
                    Aplicăm straturi de protecție și lacuri pentru a păstra
                    frumusețea naturală a lemnului și a prelungi durata de
                    viață.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto mb-16 shadow-xl overflow-hidden">
            <Image
              src="/pazie-decorativa.webp"
              alt="Pazie decorativă din lemn"
              width={300}
              height={500}
              className="w-full"
            />
          </Card>

          <Card className="max-w-4xl mx-auto mb-16 shadow-xl">
            <CardHeader>
              <CardTitle
                className={`${montserrat.className} text-2xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent`}
              >
                De ce să Alegi Montajul Paziei de Lemn?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className={`${inter.className} space-y-6 mb-8`}>
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span>
                    Estetică Naturală: Lemnul adaugă un farmec autentic și se
                    integrează perfect în designul casei.
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span>
                    Durabilitate: Cu un montaj corect și tratamente adecvate,
                    pazia de lemn rezistă ani de zile.
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow">
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span>
                    Flexibilitate: Posibilitatea de a alege diferite tipuri de
                    lemn și finisaje pentru a se potrivi stilului arhitectural.
                  </span>
                </li>
              </ul>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center mt-8 p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne astăzi pentru o ofertă personalizată și
                transformă-ți acoperișul cu o pazie de lemn montată impecabil!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
