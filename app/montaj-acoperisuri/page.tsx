import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Montaj Acoperisuri Premium – Protectie superioara si aspect deosebit pentru Casa Ta",
  description:
    "Montaj profesional acoperișuri noi în București și Ilfov. Țiglă ceramică, tablă, șindrilă. Garanție 10 ani, echipă specializată. Ofertă gratuită!",
  keywords:
    "montaj acoperisuri bucuresti, acoperis nou, tigla ceramica montaj, tabla acoperis, sindrila bituminoasa, montaj acoperis profesional",
};

export default function MontajAcoperisuri() {
  const services = [
    {
      title: "Montaj Sistem Pluvial",
      description:
        "Colectarea si evacuarea eficienta a apelor de ploaie pentru protectia casei tale.",
      href: "/servicii/montaj-sistem-pluvial",
      image: "/sistem-pluvial.jpg",
    },
    {
      title: "Montaj Tigla Ceramica",
      description:
        "Tigla ceramica - solutia clasica si eleganta pentru acoperisuri rezistente.",
      href: "/servicii/montaj-tigla-ceramica",
      image: "/tigla-ceramica.webp",
    },
    {
      title: "Vopsit Acoperis",
      description:
        "Redoneaza aspectul acoperisului tau cu servicii profesionale de vopsire.",
      href: "/servicii/vopsit-acoperis",
      image: "/vopsit-acoperis1.jpg",
    },
    {
      title: "Montaj Sageac Metalic",
      description:
        "Instalarea sageacului metalic - solutie contemporana pentru finisaje moderne.",
      href: "/servicii/montaj-sageac-metalic",
      image: "/sageac-metalic1.jpg",
    },
    {
      title: "Montaj Sageac Lemn",
      description:
        "Montajul sageacului din lemn pentru un aspect traditional si natural.",
      href: "/servicii/montaj-sageac-lemn",
      image: "/sageac-lemn.jpg",
    },
    {
      title: "Montaj Pazie Lemn",
      description:
        "Pazie din lemn montata profesional pentru un plus de eleganta si stil.",
      href: "/servicii/montaj-pazie-lemn",
      image: "/pazie-decorativa.webp",
    },
    {
      title: "Montaj Pazie din Tabla",
      description:
        "Profil din tabla colorata pentru finisaje clare si aspect curat.",
      href: "/servicii/montaj-pazie-din-tabla",
      image: "/pazie-tabla.png",
    },
    {
      title: "Montaj Tigla Metalica",
      description:
        "Specialisti in montaj tigla metalica cu solutii rezistente si moderne.",
      href: "/servicii/montaj-tigla-metalica",
      image: "/acoperis-nou.webp",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Evaluare Gratuita",
      description: "Deplasare la fata locului pentru masuratori si evaluare",
    },
    {
      step: "2",
      title: "Oferta Detaliata",
      description: "Prezentarea ofertei cu specificatii complete si preturi",
    },
    {
      step: "3",
      title: "Planificare Lucrari",
      description: "Stabilirea programului de lucru si comenzile materialelor",
    },
    {
      step: "4",
      title: "Executie Profesionala",
      description: "Montaj realizat de echipa noastra specializata",
    },
    {
      step: "5",
      title: "Finalizare si Garantie",
      description: "Predarea lucrarii cu garantie de 10 ani",
    },
  ];

  return (
    <>
      <HeroSection
        title="Montaj Acoperisuri Premium"
        subtitle="Profesional si Durabil"
        description="Protectie superioara si aspect deosebit pentru casa ta"
        features={[
          "Realizam lucrari de la zero pentru constructii rezidentiale si comerciale",
          "Materiale premium de la furnizori certificati",
          "Alegem impreuna cele mai bune materiale pentru nevoile dumneavoastra",
          "Garantie 10 ani pentru structura si montaj",
          "Executie rapida si eficienta",
        ]}
        imageSrc="/roofing-2.webp"
        imageAlt="Montaj acoperisuri noi profesional"
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre de Montaj
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gama completa de servicii pentru montaj acoperisuri, de la sisteme
              pluviale pana la finisaje si accesorii specializate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <Link href={service.href}>Afla Mai Multe</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Procesul Nostru de Lucru
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Urmam un proces structurat pentru a asigura calitatea si
              satisfactia completa a clientilor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Avantajele Montajului Profesional
              </h2>
              <div className="space-y-4">
                {[
                  "Durabilitate crescuta cu 40% fata de montajul neprofesional",
                  "Izolatie termica si fonica optima",
                  "Rezistenta superioara la intemperii",
                  "Aspect estetic impecabil si uniform",
                  "Conformitate cu normele de constructie",
                  "Garantie extinsa pentru linistea dvs.",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tigla2.jpg"
                alt="Detalii montaj acoperisuri profesional"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
