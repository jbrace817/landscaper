"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

const trustIndicators = [
  "Licensed & Insured",
  "20+ Years Experience",
  "500+ Happy Clients",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="Beautiful landscaped garden"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
      </div>

      <div className="relative z-10 w-full py-16 md:py-24">
        <FadeIn>
          <Container>
            {/* Trust Badges */}
            <div className="mb-8 flex flex-wrap gap-3">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm"
                >
                  <CheckCircle className="text-accent h-4 w-4" />
                  <span className="text-sm font-medium text-white">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline - Elegant Serif Typography */}
            <h1
              className="mb-7 font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Create the Outdoor
              <span className="text-accent block">Sanctuary</span>
              <span className="block">You Deserve</span>
            </h1>

            {/* Subheadline - Clean Sans Typography */}
            <p
              className="mb-10 max-w-xl text-lg leading-relaxed font-light text-white/85 md:text-xl"
              style={{
                fontFamily: "var(--font-source-sans), system-ui, sans-serif",
              }}
            >
              Transform your Doylestown property into a breathtaking landscape.
              From elegant garden designs to meticulous maintenance, we bring
              20+ years of expertise to every project.
            </p>

            {/* CTAs */}
            <div className="mb-0 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" className="group shadow-primary/25 shadow-lg">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
                asChild
              >
                <Link href="#gallery">View Our Work</Link>
              </Button>
            </div>
          </Container>
        </FadeIn>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
