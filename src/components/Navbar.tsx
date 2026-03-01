"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Container from "@/components/Container";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#areas", label: "Areas" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/95 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-primary-foreground text-lg font-bold">
                D
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground text-lg leading-tight font-bold">
                Doylestown
              </span>
              <span className="text-muted-foreground -mt-0.5 text-xs">
                Lawn & Landscape
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-muted hover:text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+1234567890"
              className="text-foreground-muted hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>
            <Button size="sm">Get Free Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-foreground p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground-muted hover:text-primary py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-border flex flex-col gap-3 border-t pt-4">
                <a
                  href="tel:+1234567890"
                  className="text-foreground-muted flex items-center gap-2 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" />
                  (123) 456-7890
                </a>
                <Button className="w-full">Get Free Quote</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
