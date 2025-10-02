import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Star,
  Users,
  Clock,
  Shield,
  Award,
  Phone,
  CheckCircle2,
  Clock3,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Inter, Montserrat } from "next/font/google";

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montaj și Reparatii Acoperisuri Bucuresti | +40 727 416 444",
  description:
    "Suna la +40 727 416 444 - Servicii profesionale montaj și reparatii acoperisuri in Bucuresti si Ilfov. Dulgherie, tigla ceramică, urgente 24/7. Experienta 30+ ani. Oferta gratuita!",
  keywords:
    "montaj acoperisuri bucuresti, reparatii acoperisuri bucuresti, dulgherie acoperis, tigla ceramica, urgente acoperis, acoperisuri ilfov",
  openGraph: {
    title: "Montaj și Reparatii Acoperisuri Bucuresti | +40 727 416 444",
    description:
      "Suna la +40 727 416 444 - Servicii profesionale montaj și reparatii acoperisuri in Bucuresti si Ilfov. Urgențe 24/7, experiență 30+ ani.",
    url: "https://reparatiiacoperisurisimontaj.ro/",
    images: [
      {
        url: "/logo-gab.png",
        width: 250,
        height: 250,
        alt: "Montaj si Reparatii Acoperisuri Logo",
      },
    ],
  },
};

export default function HomePage() {
  const services = [
    {
      title: "Montaj Acoperisuri",
      description:
        "Montaj profesional acoperisuri noi cu materiale de calitate superioara si garantie extinsa.",
      href: "/montaj-acoperisuri",
      image: "/acoperis-nou.webp",
    },
    {
      title: "Reparatii Acoperisuri Vechi",
      description:
        "Reparatii rapide si eficiente pentru acoperisuri deteriorate.",
      href: "/reparatii-acoperisuri",
      image: "/acoperis-vechi.webp",
    },
    {
      title: "Dulgherie Acoperiș",
      description:
        "Servicii complete de dulgherie pentru structuri de lemn ale acoperișului.",
      href: "/dulgherie-acoperis",
      image: "/dulgherie.webp",
    },
    {
      title: "Montaj Tigla Ceramica",
      description:
        "Montaj profesional tigla ceramic de inalta calitate cu finisaje impecabile.",
      href: "/servicii/montaj-tigla-ceramica",
      image: "/tigla-ceramica.webp",
    },
    {
      title: "Montaj Sageac Metalic",
      description:
        "Montaj profesional tigla ceramic de inalta calitate cu finisaje impecabile.",
      href: "/servicii/montaj-sageac-metalic",
      image: "/montaj-sageac-metalic.webp",
    },
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "10000+ Clienti Multumiti",
      description:
        "Peste 500 de proiecte finalizate cu succes in ultimii 5 ani",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Urgente 24/7",
      description: "Disponibili non-stop pentru situatii de urgenta",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Materiale Premium",
      description: "Garantie extinsa pentru toate lucrarile executate",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "30+ Ani Experienta",
      description: "Experienta vasta in domeniul acoperisurilor",
    },
  ];

  const testimonials = [
    {
      name: "Maria Popescu",
      location: "București, Sector 3",
      rating: 5,
      text: "Servicii impecabile! Au reparat acoperișul în timp record și la un preț foarte bun. Recomand cu încredere!",
    },
    {
      name: "Ion Georgescu",
      location: "Ilfov, Voluntari",
      rating: 5,
      text: "Echipă profesionistă, punctuală și cu prețuri corecte. Au montat țigla ceramică perfect. Mulțumesc!",
    },
    {
      name: "Ana Dumitrescu",
      location: "București, Sector 1",
      rating: 5,
      text: "Au intervenit în urgență când s-a rupt acoperișul în timpul furtunii. Foarte mulțumită de servicii!",
    },
  ];

  return (
    <>
      <Hero />
      <HeroSection
        title="Experienta dovedita, lucrari durabile si asistenta pe tot parcursul proiectului"
        subtitle="Servicii Complete pe tot teritoriul Romaniei"
        description="Cu experienta de peste 30 ani, executam lucrari de montaj si reparatii acoperisuri satisfacand si cei mai pretentiosi clienti. Materiale de calitate la cel mai bun pret, echipe specializate si garantie extinsa."
        features={[
          "Evaluare si oferta gratuita",
          "Materiale de calitate superioara de la furnizori, fara costuri intermediare",
          "Echipe cu experienta 30+ ani",
          "Garantie extinsa ani pentru lucrari",
          "Urgente 24/7 in Bucuresti si Ilfov",
        ]}
        imageSrc="/roofing-1.webp"
        imageAlt="Montaj acoperisuri profesional Bucuresti"
      />

      {/* Quick Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`${inter.className} text-3xl lg:text-4xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4`}
            >
              Solutii Rapide și Durabile pentru Acoperisul Tau
            </h2>
            <p
              className={`${montserrat.className} text-lg text-gray-600 max-w-3xl mx-auto mb-8`}
            >
              Ai nevoie de montaj sau reparatii? Ne ocupam noi. Oferim solutii
              complete pentru acoperisuri din tabla, tigla sau alte materiale,
              oriunde în Romania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-700 to-red-900 rounded-lg border border-gray-200 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow">
              <Clock3 className="h-12 w-12 text-white mb-4" />
              <h3
                className={`${inter.className} text-xl font-semibold text-white mb-2 text-center`}
              >
                Interventii Rapide
              </h3>
              <p
                className={`${montserrat.className} text-gray-100 text-center`}
              >
                Echipe proprii pregatite pentru orice situatie
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-700 to-red-900 rounded-lg border border-gray-200 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-white mb-4" />
              <h3
                className={`${inter.className} text-xl font-semibold text-white mb-2 text-center`}
              >
                Lucrari Garantate
              </h3>
              <p
                className={`${montserrat.className} text-gray-100 text-center`}
              >
                Verificam și garantam fiecare lucrare executata
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-700 to-red-900 rounded-lg border border-gray-200 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow">
              <Wrench className="h-12 w-12 text-white mb-4" />
              <h3
                className={`${inter.className} text-xl font-semibold text-white mb-2 text-center`}
              >
                Solutii Personalizate
              </h3>
              <p
                className={`${montserrat.className} text-gray-100 text-center`}
              >
                Adaptate nevoilor fiecarui client
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-700 to-red-900 rounded-lg border border-gray-200 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow">
              <CheckCircle2 className="h-12 w-12 text-white mb-4" />
              <h3
                className={`${inter.className} text-xl font-semibold text-white mb-2 text-center`}
              >
                Respectam Angajamentele
              </h3>
              <p
                className={`${montserrat.className} text-gray-100 text-center`}
              >
                Termene si bugete respectate intocmai
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
            <h3
              className={`${inter.className} text-2xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4`}
            >
              Fiecare Lucrare Conteaza pentru Noi!
            </h3>
            <p className={`${montserrat.className} text-lg text-gray-600 mb-8`}>
              Punem accent pe calitate, comunicare si seriozitate. De la prima
              discutie, ne asiguram ca primesti exact ce ai nevoie – fara
              costuri ascunse, fara batai de cap.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2
              className={`${inter.className} text-3xl lg:text-4xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4`}
            >
              Serviciile Noastre Principale
            </h2>
            <p
              className={`${montserrat.className} text-lg text-gray-600 max-w-2xl mx-auto`}
            >
              Oferim o gama completa de servicii pentru acoperisuri, de la
              montaj pana la reparatii si intretinere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardTitle className={`${inter.className} text-lg`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${montserrat.className} text-gray-600 mb-4`}>
                    {service.description}
                  </p>
                  <Button
                    asChild
                    className={`${montserrat.className} w-full bg-gradient-to-br from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 transition-colors`}
                  >
                    <Link href={service.href}>Afla Mai Multe</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`${inter.className} text-3xl lg:text-4xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4`}
            >
              De Ce Sa Ne Alegi?
            </h2>
            <p
              className={`${montserrat.className} text-lg text-gray-600 max-w-2xl mx-auto`}
            >
              Suntem lideri in domeniul acoperisurilor datorita experientei,
              calitatii si dedicarii noastre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3
                  className={`${inter.className} text-xl font-semibold text-gray-900 mb-2`}
                >
                  {feature.title}
                </h3>
                <p className={`${montserrat.className} text-gray-600`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`${inter.className} text-3xl lg:text-4xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4`}
            >
              Ce Spun Clientii Nostri
            </h2>
            <p
              className={`${montserrat.className} text-lg text-gray-600 max-w-2xl mx-auto`}
            >
              Feedback-ul clientilor noastre confirma calitatea serviciilor pe
              care le oferim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p
                    className={`${montserrat.className} text-gray-600 mb-4 italic`}
                  >
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p
                      className={`${inter.className} font-semibold text-gray-900`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`${montserrat.className} text-sm text-gray-500`}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
