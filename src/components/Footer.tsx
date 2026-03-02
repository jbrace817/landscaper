"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Leaf,
} from "lucide-react";
import Container from "@/components/Container";
import { OrganicDivider } from "@/components/decorations";

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
    <footer className="bg-foreground relative overflow-hidden text-white">
      {/* Subtle organic decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg
          className="absolute -left-20 -top-20 h-96 w-96"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute -right-32 -bottom-32 h-[500px] w-[500px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.3" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="group mb-6 inline-flex items-center gap-3">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105">
                <Leaf className="text-primary-foreground h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl leading-tight font-semibold"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Doylestown
                </span>
                <span className="text-sm text-white/50">Lawn & Landscape</span>
              </div>
            </Link>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              Professional landscaping services in Doylestown, PA and
              surrounding areas. Transforming outdoor spaces with care and
              expertise since 2010.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/80"
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="bg-primary/50 h-1 w-1 rounded-full transition-all group-hover:w-2 group-hover:bg-primary" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <h3
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/80"
            >
              Areas
            </h3>
            <ul className="space-y-3">
              {areas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <MapPin className="h-3 w-3 text-white/40" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/80"
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Call us</div>
                  <div className="text-sm font-medium text-white/90 group-hover:text-white">
                    (123) 456-7890
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@doylestownlawn.com"
                className="group flex items-center gap-3 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Email us</div>
                  <div className="text-sm font-medium text-white/90 group-hover:text-white">
                    info@doylestownlawn.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Visit us</div>
                  <div className="text-sm text-white/90">
                    123 Main Street
                    <br />
                    Doylestown, PA 18901
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <OrganicDivider className="h-6 w-full text-white/20" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} Doylestown Lawn & Landscape. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
