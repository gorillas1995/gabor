import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montaj Țiglă Ceramică | Servicii Profesionale de Montaj",
  description:
    "Servicii profesionale de montaj țiglă ceramică în București și Ilfov. Consultanță, montaj și reparații. Materiale premium, garanție extinsă.",
};

export default function MontajTiglaCeramica() {
  return (
    <main>
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/tigla-ceramica.webp"
          alt="Montaj Țiglă Ceramică"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mb-6`}
            >
              Montaj Țiglă Ceramică
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
                Țigla ceramică este un material tradițional care oferă
                acoperișului casei tale un aspect elegant și natural. Cu o
                durabilitate excepțională și proprietăți termoizolante
                excelente, țigla ceramică reprezintă o investiție pe termen lung
                pentru protecția locuinței tale.
              </p>
            </CardContent>
          </Card>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px]">
                <Image
                  src="/tigla2.jpg"
                  alt="Țiglă ceramică detaliu"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px]">
                <Image
                  src="/tigla3.jpg"
                  alt="Țiglă ceramică montaj"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Benefits Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle
                  className={`${montserrat.className} text-xl text-gray-800`}
                >
                  Avantajele Țiglei Ceramice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Durabilitate excepțională - rezistă peste 100 de ani
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Izolare termică și fonică superioară</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Rezistență la intemperii și condiții meteo extreme
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Aspect natural și elegant care nu se decolorează
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
                  Procesul de Montaj
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Evaluarea și pregătirea structurii șarpantei</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Montarea foliei anticondens și a șipcilor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>Așezarea și fixarea țiglelor ceramice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600"></span>
                    <span>
                      Montarea elementelor speciale și verificarea finală
                    </span>
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
                Protejează-ți casa cu un acoperiș durabil și elegant din țiglă
                ceramică!
              </p>
              <p
                className={`${inter.className} text-lg text-gray-700 font-medium text-center p-6 bg-red-50 rounded-lg border border-red-100`}
              >
                Contactează-ne pentru o consultație gratuită și o ofertă
                personalizată pentru montajul țiglei ceramice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
