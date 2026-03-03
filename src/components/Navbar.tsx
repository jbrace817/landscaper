"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Leaf } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use solid navbar styling when scrolled OR when mobile menu is open
  const useSolidNav = isScrolled || isOpen;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        useSolidNav
          ? "bg-background/95 border-border border-b shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                useSolidNav
                  ? "bg-primary"
                  : "bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"
              }`}
            >
              <Leaf
                className={`h-5 w-5 transition-colors ${
                  useSolidNav ? "text-primary-foreground" : "text-white"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg leading-tight font-semibold transition-colors ${
                  useSolidNav ? "text-foreground" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Doylestown
              </span>
              <span
                className={`-mt-0.5 text-xs transition-colors ${
                  useSolidNav ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                Lawn & Landscape
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  useSolidNav
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+1234567890"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                useSolidNav
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>
            <Button
              size="sm"
              className={
                useSolidNav ? "" : "text-primary bg-white hover:bg-white/90"
              }
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`p-2 lg:hidden ${useSolidNav ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-border border-t py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:bg-muted rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-border mt-4 flex flex-col gap-3 border-t pt-4">
                <Button asChild className="bg-foreground text-background">
                  <a href="tel:+1234567890">
                    <Phone className="h-4 w-4" />
                    (123) 456-7890
                  </a>
                </Button>
                <Button className="w-full">Get Free Quote</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
