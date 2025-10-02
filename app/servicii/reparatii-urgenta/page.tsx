import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Reparații Urgență Acoperișuri 24/7 | Intervenții Rapide București",
  description:
    "Reparații urgență acoperișuri 24/7 în București și Ilfov. Infiltrații, furtuni, țigle căzute. Echipă disponibilă non-stop. Intervenție în maxim 2 ore!",
  keywords:
    "reparatii urgenta acoperis, urgente acoperis 24/7, infiltratii urgenta, furtuna acoperis, interventie rapida",
};

export default function ReparatiiUrgenta() {
  return (
    <>
      <HeroSection
        title="Reparații Urgență 24/7"
        subtitle="Intervenții Rapide Non-Stop"
        description="Echipa noastră este disponibilă 24/7 pentru situații de urgență. Intervenții rapide pentru infiltrații, daune cauzate de furtuni și alte probleme critice ale acoperișului."
        features={[
          "Disponibili 24/7, inclusiv sărbători",
          "Intervenție în maxim 2 ore",
          "Soluții temporare pentru protecție imediată",
          "Echipament specializat pentru urgențe",
          "Rapoarte foto pentru asigurări",
        ]}
        ctaText="URGENȚĂ - Sună ACUM!"
        imageSrc="/urgent-roofing.jpeg"
        imageAlt="Reparații urgență acoperișuri 24/7"
      />
    </>
  );
}
