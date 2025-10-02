import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Refacere Dulgherie Acoperiș | Restaurare Structuri Lemn București",
  description:
    "Refacere și restaurare dulgherie acoperiș în București. Consolidări șarpantă, înlocuire grinzi deteriorate. Lemn tratat, echipă specializată.",
  keywords: "refacere dulgherie, restaurare sarpanta, consolidare structura lemn, grinzi deteriorate, dulgherie veche",
}

export default function RefacereDulgherie() {
  return (
    <>
      <HeroSection
        title="Refacere Dulgherie"
        subtitle="Restaurare Profesională Structuri Lemn"
        description="Restaurăm și consolidăm structurile de lemn deteriorate ale acoperișurilor. Echipa noastră de dulgheri experimentați asigură refacerea completă a șarpantei."
        features={[
          "Evaluare detaliată a structurii existente",
          "Înlocuire selectivă a elementelor deteriorate",
          "Consolidări cu materiale moderne",
          "Respectarea arhitecturii originale",
          "Garanție 15 ani pentru lucrări",
        ]}
        imageSrc="/placeholder.svg?height=400&width=600"
        imageAlt="Refacere dulgherie șarpantă"
      />

      <ContactForm />
    </>
  )
}
