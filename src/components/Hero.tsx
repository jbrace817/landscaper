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
    <section className="relative flex min-h-screen items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="Beautiful landscaped garden"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl">
            {/* Trust Badges */}
            <div className="mb-6 flex flex-wrap gap-4">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <CheckCircle className="text-accent h-4 w-4" />
                  <span className="text-sm font-medium text-white">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Transform Your Doylestown Yard Into a Stunning Outdoor Oasis
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Professional landscaping services in Doylestown, PA and
              surrounding areas. From routine maintenance to complete landscape
              design, we bring your outdoor vision to life.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" className="group">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="#gallery">
                  <span className="border-white text-white hover:bg-white/10">
                    View Our Work
                  </span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  500+
                </div>
                <div className="text-sm text-white/70">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  20+
                </div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  98%
                </div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

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
