"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/tracks", label: "Tracks" },
    { href: "/about", label: "About" },
    { href: "/equipment", label: "Equipment" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-[#3a3a3a]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black tracking-wider text-white">
            <a href="/">Explore Nepal</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#ff6b35]"
                    : "text-[#e5e7eb] hover:text-[#ff6b35]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/80"
            >
              <a href="/contact">Contact</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col md:hidden mt-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#ff6b35]"
                    : "text-[#e5e7eb] hover:text-[#ff6b35]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/80 w-fit"
            >
              <a href="/contact">Contact</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
