"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Container from "@/components/Container";

const services = [
  { label: "Landscape Design", href: "#services" },
  { label: "Lawn Maintenance", href: "#services" },
  { label: "Hardscaping", href: "#services" },
  { label: "Tree & Shrub Care", href: "#services" },
  { label: "Outdoor Lighting", href: "#services" },
  { label: "Irrigation Systems", href: "#services" },
];

const areas = [
  "Doylestown",
  "Chalfont",
  "Warrington",
  "Warminster",
  "Hatfield",
  "Buckingham",
  "New Britain",
  "Jamison",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="bg-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg">
                <span className="text-primary text-lg font-bold">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-tight font-semibold">
                  Doylestown
                </span>
                <span className="text-sm text-white/60">Lawn & Landscape</span>
              </div>
            </Link>
            <p className="mb-6 text-sm text-white/70">
              Professional landscaping services in Doylestown, PA and
              surrounding areas. Transforming outdoor spaces since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 font-semibold">Service Areas</h3>
            <ul className="space-y-3">
              {areas.map((area, index) => (
                <li key={index}>
                  <span className="text-sm text-white/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <Phone className="text-primary-foreground h-5 w-5" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@doylestownlawn.com"
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <Mail className="text-primary-foreground h-5 w-5" />
                <span>info@doylestownlawn.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="text-primary-foreground mt-0.5 h-5 w-5" />
                <span>
                  123 Main Street
                  <br />
                  Doylestown, PA 18901
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} Doylestown Lawn & Landscape. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
