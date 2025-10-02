import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Reparații Acoperișuri Existente București | Renovare Acoperișuri Vechi",
  description:
    "Reparații și renovare acoperișuri existente în București. Infiltrații, țigle deteriorate, consolidări. Echipă specializată, materiale de calitate. Ofertă gratuită!",
  keywords:
    "reparatii acoperisuri existente, renovare acoperis vechi, consolidare acoperis, infiltratii acoperis, tigla deteriorata",
}

export default function ReparatiiAcoperisuriExistente() {
  const commonIssues = [
    {
      title: "Infiltrații Persistente",
      description: "Identificăm și reparăm sursele de infiltrații pentru protecție completă",
      severity: "Critică",
      timeframe: "Intervenție imediată",
    },
    {
      title: "Țigle Deteriorate",
      description: "Înlocuim țiglele sparte, deplasate sau lipsă cu materiale identice",
      severity: "Mare",
      timeframe: "1-2 zile",
    },
    {
      title: "Jgheaburi Defecte",
      description: "Reparăm sau înlocuim sistemele de evacuare deteriorate",
      severity: "Medie",
      timeframe: "4-8 ore",
    },
    {
      title: "Izolație Degradată",
      description: "Refacem izolația termică și de vapori pentru eficiență energetică",
      severity: "Medie",
      timeframe: "2-3 zile",
    },
  ]

  return (
    <>
      <HeroSection
        title="Reparații Acoperișuri Existente"
        subtitle="Renovare și Consolidare Profesională"
        description="Specializați în repararea și renovarea acoperișurilor existente. Identificăm problemele și oferim soluții durabile pentru prelungirea vieții acoperișului dvs."
        features={[
          "Diagnosticare completă a problemelor",
          "Soluții personalizate pentru fiecare caz",
          "Materiale compatibile cu existentul",
          "Garanție extinsă pentru reparații",
          "Preturi competitive și transparente",
        ]}
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="Reparații acoperișuri existente"
      />

      {/* Common Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Probleme Frecvente ale Acoperișurilor Existente
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identificăm și rezolvăm eficient cele mai comune probleme ale acoperișurilor vechi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{issue.title}</CardTitle>
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        issue.severity === "Critică"
                          ? "bg-red-100 text-red-800"
                          : issue.severity === "Mare"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {issue.severity}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{issue.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{issue.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
