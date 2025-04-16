"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/images/busicon.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Routes", href: "/routes" },
  { name: "Bookings", href: "/bookings" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full border-b shadow-sm sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={icon} alt="Bus Icon" width={40} height={40} />
          <h1 className="text-2xl font-bold text-gray-800">
            Bus<span className="text-blue-600">Now</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white">
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 text-lg hover:text-blue-600 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
