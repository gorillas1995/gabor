import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Montserrat } from "next/font/google";

// Initialize Montserrat font
const montserrat = Montserrat({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer
      className={`${montserrat.className} bg-gradient-to-br from-red-600 to-red-800 text-gray-100`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-red-800 p-2 rounded">
                <span className="font-bold text-lg">MA</span>
              </div>
              <div>
                <div className="font-bold">Montaj Acoperișuri</div>
                <div className="text-sm text-gray-200">Profesional & Rapid</div>
              </div>
            </div>
            <p className="text-gray-200 text-sm mb-4">
              Servicii complete de montaj și reparații acoperișuri cu experiență
              de peste 15 ani în domeniu.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <Clock className="h-4 w-4" />
              <span>Urgențe 24/7</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicii Principale</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link
                  href="/montaj-acoperisuri"
                  className="hover:text-white transition-colors"
                >
                  Montaj Acoperișuri
                </Link>
              </li>
              <li>
                <Link
                  href="/reparatii-acoperisuri"
                  className="hover:text-white transition-colors"
                >
                  Reparații Acoperișuri
                </Link>
              </li>
              <li>
                <Link
                  href="/dulgherie-acoperis"
                  className="hover:text-white transition-colors"
                >
                  Dulgherie Acoperiș
                </Link>
              </li>
              <li>
                <Link
                  href="/servicii/montaj-tigla-ceramica"
                  className="hover:text-white transition-colors"
                >
                  Montaj Țiglă Ceramică
                </Link>
              </li>
              <li>
                <Link
                  href="/servicii/reparatii-urgenta"
                  className="hover:text-white transition-colors"
                >
                  Reparații Urgență
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+40722123456"
                  className="hover:text-white transition-colors"
                >
                  +40 727 416 444
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@montaj-acoperisuri.ro"
                  className="hover:text-white transition-colors"
                >
                  geraldprofil@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  București și Ilfov
                  <br />
                  Intervenții în toată țara
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">Zone de Acoperire</h3>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>București (toate sectoarele)</li>
              <li>Ilfov</li>
              <li>Prahova</li>
              <li>Dâmbovița</li>
              <li>Giurgiu</li>
              <li>Călărași</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center text-sm text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Montaj și Reparații Acoperișuri.
            Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
