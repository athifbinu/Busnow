"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import icon from "../../../public/images/logoicon.png"; // adjust the path as needed

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={icon} alt="bus icon" className="w-16 h-16" />
          <h1 className="text-xl font-bold text-gray-800">
            Bus<span className="text-blue-600">Now</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/help"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Help
          </Link>
          <Link href="/">
            <Button variant="outline" className="text-sm font-semibold">
              Contribute
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button (optional - for future dropdown or drawer) */}
        <div className="md:hidden">
          {/* You can implement mobile menu here using Dialog or Dropdown from shadcn */}
        </div>
      </nav>
    </header>
  );
}
