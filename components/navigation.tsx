"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle phone call based on device type
  const handlePhoneCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const phoneNumber = "+40727416444";

    // Check if device is mobile
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Show confirmation dialog on desktop
      if (window.confirm("Doriți să apelați numărul " + phoneNumber + "?")) {
        window.location.href = `tel:${phoneNumber}`;
      }
    }
  };

  const serviciiItems = [
    {
      title: "Reparatii Acoperisuri Existente",
      href: "/servicii/reparatii-acoperisuri-existente",
      description: "Reparatii profesionale pentru acoperisuri deteriorate",
    },
    {
      title: "Refacere Dulgherie",
      href: "/servicii/refacere-dulgherie",
      description: "Restaurare și refacere structuri de lemn",
    },
    {
      title: "Reparatii Urgenta 24/7",
      href: "/servicii/reparatii-urgenta",
      description: "Interventii rapide pentru situatii de urgenta",
    },
    {
      title: "Montaj Tigla Ceramica",
      href: "/servicii/montaj-tigla-ceramica",
      description: "Montaj profesional tigla ceramica de calitate",
    },
    {
      title: "Montaj Sageac Metalic",
      href: "/servicii/montaj-sageac-metalic",
      description: "Instalare sageac metalic si accesorii",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center justify-between w-full">
            <div
              className={`${inter.className} flex items-center gap-2 cursor-pointer`}
              onClick={() => {
                navigator.clipboard.writeText("+40727416444");
                // Show toast/popup message
                alert("Numărul a fost copiat!"); // You may want to use a proper toast component
              }}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm sm:text-base">+40 727 416 444</span>
            </div>
            <div className={`${inter.className} text-sm sm:text-base`}>
              Disponibil 24/7 Urgente
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-gradient-to-r from-gray-50/90 to-gray-100/90 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`${inter.className} flex items-center space-x-2`}
            >
              <div className="bg-red-600 text-white p-2 rounded">
                <span className="font-bold text-lg">MA</span>
              </div>
              <div>
                <div className="font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Reparatii Acoperisuri si Montaj
                </div>
                <div className="text-xs bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                  Profesional & Rapid
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className={`${inter.className} hidden lg:flex`}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    >
                      Acasă
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/montaj-acoperisuri"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    >
                      Montaj Acoperisuri
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/reparatii-acoperisuri"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    >
                      Reparatii Acoperisuri
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/dulgherie-acoperis"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    >
                      Dulgherie Acoperisuri
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Servicii
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {serviciiItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          >
                            <div className="text-sm font-medium leading-none group-hover:underline bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                              {item.title}
                            </div>
                            <div className="line-clamp-2 text-sm leading-snug bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                              {item.description}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-2">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="tel:+40727416444">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className={inter.className}>Suna Acum</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={`${inter.className} w-[300px]`}
              >
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Acasa
                  </Link>
                  <Link
                    href="/montaj-acoperisuri"
                    className="text-lg font-medium py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Montaj Acoperisuri
                  </Link>
                  <Link
                    href="/reparatii-acoperisuri"
                    className="text-lg font-medium py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Reparatii Acoperisuri
                  </Link>
                  <Link
                    href="/dulgherie-acoperis"
                    className="text-lg font-medium py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Dulgherie Acoperis
                  </Link>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Toate Serviciile
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-2">
                      {serviciiItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Button asChild className="bg-red-600 hover:bg-red-700 mt-4">
                    <Link href="tel:+40727416444">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className={inter.className}>Suna Acum</span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Floating Phone Button */}
      <a
        href="tel:+40727416444"
        onClick={handlePhoneCall}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
