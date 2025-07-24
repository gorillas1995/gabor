import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  features,

  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-red-700 to-red-900 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-xl text-red-600 font-semibold mb-4">
              {subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-6">{description}</p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority
            />
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-3 rounded-lg shadow-lg">
              <div className="text-xl font-bold">30+</div>
              <div className="text-xs">Ani Experiență</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
