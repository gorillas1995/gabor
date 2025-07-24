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
          src="/sageac-metalic1.jpg"
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
              Montaj Sageac Metalic
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
                Montajul sageacului metalic reprezintă o soluție modernă și
                practică pentru finisarea acoperișului și protejarea structurii
                casei tale. Acest tip de sageac oferă numeroase beneficii, de la
                un aspect estetic impecabil până la o rezistență crescută în
                fața intemperiilor.
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
                  Avantajele Sageacului Metalic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Durabilitate – Materialele metalice sunt rezistente la
                      coroziune și îmbătrânire, având o durată de viață
                      îndelungată.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Estetică Modernă – Disponibil într-o gamă variată de
                      culori și finisaje, sageacul metalic se potrivește perfect
                      cu orice tip de acoperiș.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Protecție Ridicată – Oferă o barieră eficientă împotriva
                      umidității, a vântului și a păsărilor care pot deteriora
                      structura acoperișului.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Întreținere Minimizată – Spre deosebire de alte materiale,
                      metalul necesită întreținere redusă și își păstrează
                      aspectul impecabil în timp.
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
                  Procesul de Montaj
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${inter.className} text-gray-700 mb-4`}>
                  Montajul sageacului metalic se realizează cu atenție la
                  detalii pentru a garanta o finisare de înaltă calitate. Pașii
                  principali includ:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Pregătirea suprafeței – Se verifică structura existentă
                      pentru a asigura o bază solidă.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Fixarea panourilor metalice – Panourile sunt montate cu
                      ajutorul șuruburilor speciale, asigurând o fixare fermă și
                      durabilă.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Etanșarea îmbinărilor – Se utilizează materiale de
                      etanșare de calitate pentru a preveni infiltrațiile.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Finisajele finale – Se ajustează și se verifică fiecare
                      detaliu pentru un aspect estetic perfect.
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
                De ce să alegi montajul profesional?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p
                className={`${inter.className} text-lg text-gray-700 mb-8 text-center`}
              >
                Un montaj realizat de profesioniști garantează calitatea și
                siguranța lucrării, prevenind eventualele probleme care pot
                apărea în timp. Echipa noastră dispune de experiența și
                echipamentele necesare pentru a realiza un montaj rapid și
                eficient.
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne acum pentru mai multe informații despre
                serviciile noastre de montaj sageac metalic! Îți oferim
                consultanță gratuită și soluții personalizate pentru nevoile
                tale.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
