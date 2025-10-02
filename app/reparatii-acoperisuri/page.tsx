import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, Shield, Wrench } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reparații Acoperișuri București | Urgențe 24/7 | Intervenții Rapide",
  description:
    "Reparații acoperișuri București și Ilfov. Urgențe 24/7, infiltrații, țigle sparte, jgheaburi. Echipă specializată, intervenții în aceeași zi. Sună acum!",
  keywords:
    "reparatii acoperisuri bucuresti, urgente acoperis, infiltratii acoperis, tigla sparta, jgheaburi, reparatii acoperis ilfov",
};

export default function ReparatiiAcoperisuri() {
  const commonProblems = [
    {
      title: "Infiltrații de Apă",
      description:
        "Reparăm rapid infiltrațiile pentru a preveni daunele majore",
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      urgency: "Urgență Mare",
    },
    {
      title: "Țigle Sparte sau Deplasate",
      description: "Înlocuim țiglele deteriorate cu materiale identice",
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      urgency: "Urgență Medie",
    },
    {
      title: "Jgheaburi Înfundate",
      description: "Curățăm și reparăm sistemele de evacuare a apei",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      urgency: "Programabil",
    },
    {
      title: "Structură Deteriorată",
      description: "Consolidăm și reparăm structurile de lemn afectate",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      urgency: "Evaluare Necesară",
    },
  ];

  const emergencyServices = [
    "Intervenții în maxim 2 ore pentru urgențe",
    "Echipă disponibilă 24/7, inclusiv weekend-uri",
    "Soluții temporare pentru protecție imediată",
    "Evaluare gratuită a daunelor",
    "Rapoarte foto pentru asigurări",
  ];

  const repairTypes = [
    {
      title: "Reparații Minore",
      description: "Țigle sparte, șuruburi slăbite, etanșări punctuale",
      timeframe: "2-4 ore",
      price: "de la 500 lei",
    },
    {
      title: "Reparații Medii",
      description: "Înlocuire zone de țiglă, reparații jgheaburi, coșuri",
      timeframe: "1-2 zile",
      price: "de la 1500 lei",
    },
    {
      title: "Reparații Majore",
      description: "Refacere parțială acoperiș, consolidări structurale",
      timeframe: "3-7 zile",
      price: "evaluare la fața locului",
    },
  ];

  return (
    <>
      <HeroSection
        title="Reparații Acoperișuri"
        subtitle="Urgențe 24/7 - Intervenții Rapide"
        description="Reparăm rapid orice problemă a acoperișului dvs. Echipa noastră intervine în urgență pentru infiltrații, țigle sparte și alte defecțiuni. Disponibili 24/7 în București și Ilfov."
        features={[
          "Intervenții de urgență în maxim 2 ore",
          "Disponibili 24/7, inclusiv weekend-uri",
          "Evaluare și devis gratuit",
          "Soluții temporare pentru protecție imediată",
          "Garanție pentru toate reparațiile",
        ]}
        ctaText="Sună pentru Urgență"
        imageSrc="acoperis-vechi.webp"
        imageAlt="Reparații acoperișuri urgență București"
      />

      {/* Emergency Alert */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold">
              🚨 URGENȚĂ ACOPERIȘ? Sunați ACUM: +40 727 416 444 - Intervenție
              rapida!
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Probleme Frecvente ale Acoperișurilor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identificăm și reparăm rapid cele mai comune probleme ale
              acoperișurilor pentru a preveni daunele majore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonProblems.map((problem, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{problem.icon}</div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <div className="text-sm font-medium text-red-600">
                    {problem.urgency}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Servicii de Urgență 24/7
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Înțelegem că problemele acoperișului nu așteptă. De aceea,
                echipa noastră este disponibilă non-stop pentru intervenții de
                urgență.
              </p>
              <div className="space-y-3">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full p-1 mt-1">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tigla3.jpg"
                alt="Echipă reparații urgență acoperișuri"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tipuri de Reparații
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferim soluții complete pentru orice tip de reparație, de la
              intervenții minore la refaceri majore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {type.title}
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {type.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Timp execuție: {type.timeframe}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cum Procedăm în Caz de Urgență
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Apel Telefonic",
                desc: "Sunați și descrieți problema",
              },
              {
                step: "2",
                title: "Deplasare Rapidă",
                desc: "Ajungem la fața locului în max 2h",
              },
              {
                step: "3",
                title: "Evaluare Urgentă",
                desc: "Identificăm problema și soluția",
              },
              {
                step: "4",
                title: "Intervenție Imediată",
                desc: "Reparăm sau aplicăm soluție temporară",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
