import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Hammer, TreePine } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dulgherie Acoperiș București | Structuri Lemn Acoperișuri | Șarpantă",
  description:
    "Servicii dulgherie acoperiș București și Ilfov. Șarpantă nouă, consolidări, reparații structuri lemn. Lemn tratat, echipă specializată. Ofertă gratuită!",
  keywords:
    "dulgherie acoperis bucuresti, sarpanta lemn, structura acoperis, consolidare sarpanta, lemn tratat acoperis, dulgherie profesionala",
};

export default function DulgherieAcoperis() {
  const services = [
    {
      title: "Șarpantă Nouă",
      description: "Construcție șarpantă completă pentru acoperișuri noi",
      features: [
        "Lemn tratat clasa A",
        "Calcule de rezistență",
        "Respectarea normelor",
      ],
      image: "/dulgherie.webp",
    },
    {
      title: "Consolidări Structurale",
      description: "Întărirea structurilor existente deteriorate",
      features: [
        "Evaluare tehnică",
        "Soluții personalizate",
        "Materiale certificate",
      ],
      image: "/acoperis-lemn.jpg",
    },
    {
      title: "Reparații/Refacere Dulgherie",
      description: "Înlocuirea elementelor deteriorate din șarpantă",
      features: [
        "Diagnosticare precisă",
        "Intervenții punctuale",
        "Garanție extinsă",
      ],
      image: "/dulgherie3.jpg",
    },
    {
      title: "Executam Mansarda la Cererea Clientului",
      description:
        "Transformă-ți spațiul de sub acoperiș într-un loc funcțional, confortabil și estetic.",
      features: [
        "Diagnosticare precisă",
        "Intervenții punctuale",
        "Garanție extinsă",
      ],
      image: "/dulgherie8.jpeg",
    },
    {
      title: "Reconditionare Mansarda",
      description:
        "Suntem specializați în refacerea și modernizarea mansardelor.",
      features: [
        "Diagnosticare precisă",
        "Intervenții punctuale",
        "Garanție extinsă",
      ],
      image: "/dulgherie2.jpg",
    },
  ];

  const woodTypes = [
    {
      name: "Brad Tratat",
      characteristics: "Rezistență mare, preț accesibil, ușor de prelucrat",
      usage: "Șarpante standard, consolidări",
      price: "de la 25 lei/ml",
    },
    {
      name: "Stejar",
      characteristics: "Durabilitate excepțională, rezistență la umiditate",
      usage: "Structuri speciale, restaurări",
      price: "de la 45 lei/ml",
    },
    {
      name: "Pin Tratat",
      characteristics: "Raport calitate-preț excelent, rezistență bună",
      usage: "Șarpante rezidențiale, comerciale",
      price: "de la 30 lei/ml",
    },
  ];

  return (
    <>
      <HeroSection
        title="Dulgherie Acoperiș"
        subtitle="Structuri de Lemn Profesionale"
        description="Realizăm structuri de lemn pentru acoperișuri cu materiale de calitate superioară. Șarpante noi, consolidări și reparații executate de dulgheri cu experiență vastă."
        features={[
          "Lemn tratat împotriva dăunătorilor",
          "Calcule de rezistență certificate",
          "Respectarea normelor de construcție",
          "Echipă de dulgheri specializați",
          "Garanție 15 ani pentru structură",
        ]}
        imageSrc="/dulgherie4.jpg"
        imageAlt="Dulgherie șarpantă acoperiș profesional"
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Servicii Complete de Dulgherie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la proiectare la execuție, oferim servicii complete pentru
              structurile de lemn ale acoperișurilor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipuri de Lemn Utilizate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selectăm cu atenție lemnul potrivit pentru fiecare proiect,
              asigurând durabilitate și rezistență optimă.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {woodTypes.map((wood, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TreePine className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-xl">{wood.name}</CardTitle>
                  </div>
                  <div className="text-red-600 font-semibold text-lg">
                    {wood.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Caracteristici:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {wood.characteristics}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Utilizare:
                      </h4>
                      <p className="text-gray-600 text-sm">{wood.usage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Procesul de Execuție
            </h2>
          </div>

          {/* Initial process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "1",
                title: "Proiectare",
                desc: "Calcule și planuri tehnice detaliate",
              },
              {
                step: "2",
                title: "Selecția Materialelor",
                desc: "Alegerea lemnului potrivit proiectului",
              },
              {
                step: "3",
                title: "Prelucrare",
                desc: "Tăierea și pregătirea elementelor",
              },
              {
                step: "4",
                title: "Montaj",
                desc: "Asamblarea profesională a structurii",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Detailed description */}
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Lucrările de dulgherie pot consta în refacerea unor părți din
                  șarpantă, ranforsări suplimentare sau creare structuri
                  adiționale pentru fereste și coșuri.
                </p>
                <p className="text-gray-700">
                  Dulgheria pentru acoperis reprezinta un cadru structural din
                  cherestea, a carui utilitate este aceea de a crea un spatiu
                  deasupra unei incaperi, dar si pentru a sustine invelisul
                  acoperisului.
                </p>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ce etape trebuie urmate la construcția dulgheriei pentru
                acoperiș?
              </h3>
              <p className="text-gray-700 mb-6">
                Nu oricine poate face dulgherie pentru acoperișuri deoarece
                trebuie urmate anumite etape care nu sunt chiar ușoare. De
                aceea, este recomandat să apelezi de fiecare dată la specialiști
                în domeniu. Doar așa poți fi sigur în final că te bucuri de o
                lucrare trainică.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Montarea grinzilor",
                  desc: "Se montează la o distanță de 30, 40 sau 60 cm una față de cealaltă. Ancorarea lor se face cu ajutorul unor tije din fier beton, prinse între ele cu scoabe.",
                },
                {
                  title: "2. Montarea popilor și a penelor",
                  desc: "Popii și penele vin așezați vertical pe grinzi pentru a putea fi fixați. Mare atenție! Aceștia nu trebuie fixați foarte strâns din prima deoarece s-ar putea să fie nevoie să le modifici poziția.",
                },
                {
                  title: "3. Montarea căpriorilor",
                  desc: "Amplasarea căpriorilor se începe întotdeauna de pe margine.",
                },
                {
                  title: "4. Astereala",
                  desc: "Atât plăcile de OSB, cât și scândurile, se fixează în căpriori cu ajutorul cuielor de oțel. Ele pot fi amplasate una lângă alta sau se lasă o anumită distanță între ele. Depinde de proiect.",
                },
                {
                  title: "5. Montarea foliei anticondens",
                  desc: "În funcție de utilitatea construcției și de instrucțiunile arhitectului sau a inginerului constructor, se montează folie simplă, impermeabilă sau folie anticondens.",
                },
                {
                  title: "6. Instalarea sistemului de scurgere",
                  desc: "Instalarea sistemului de scurgere trebuie făcută conform instrucțiunilor. Este un sistem extrem de important pentru acoperiș, dar și pentru întreaga clădire, încât nu se admite urmă de greșeală.",
                },
                {
                  title: "7. Montarea învelitorii",
                  desc: "Noi putem monta orice fel de tip de învelitoare, fie că e vorba de țiglă ceramică, țiglă metalică, tablă, șindrilă bituminoasă, tablă cutată, dar și tablă fălțuită și oricare alt tip disponibil pe piață.",
                },
              ].map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-700">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  Acestea fiind spuse, iată din ce este compusă dulgheria
                  acoperișului, dar și care sunt pașii după care se lucrează.
                  Acum vei fi capabil să înțelegi mai bine ce fac meșterii la
                  acoperișul tău și de ce durează de multe ori mai mult decât
                  ți-ai imaginat tu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/1dulgherie.jpg"
                alt="Detalii dulgherie lemn acoperiș"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Avantajele Dulgheriei Profesionale
              </h2>
              <div className="space-y-4">
                {[
                  "Structură calculată pentru rezistența optimă",
                  "Lemn tratat împotriva insectelor și fungilor",
                  "Respectarea normelor antisemice",
                  "Durabilitate de peste 50 de ani",
                  "Posibilitatea de modificări ulterioare",
                  "Izolație termică și fonică superioară",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Hammer className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
