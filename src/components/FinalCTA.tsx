"use client";

import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";
import { LeafDecoration, BranchDecoration } from "@/components/decorations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Rich gradient background */}
      <div className="from-primary via-chart-4 to-chart-3 absolute inset-0 bg-gradient-to-br" />

      {/* Organic overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <LeafDecoration className="absolute -top-20 -left-20 h-80 w-80 rotate-[-15deg] text-white" />
        <LeafDecoration className="absolute top-10 -right-16 h-64 w-64 rotate-[25deg] text-white" />
        <BranchDecoration className="absolute bottom-10 left-1/4 w-96 text-white" />
        <LeafDecoration className="absolute -right-10 -bottom-10 h-48 w-48 rotate-[45deg] text-white" />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-black/10 blur-3xl" />
      </div>

      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-white/40" />
              <span className="text-sm font-medium tracking-[0.2em] text-white/80 uppercase">
                Get Started Today
              </span>
              <div className="h-px w-8 bg-white/40" />
            </div>

            <h2
              className="mb-6 text-4xl leading-[1.1] font-semibold text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ready to Transform{" "}
              <span className="text-foreground relative inline-block">
                Your Yard?
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Get your free, no-obligation estimate today. Join 500+ happy
              Doylestown homeowners who have transformed their outdoor spaces.
            </p>

            {/* Trust points */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              {["Free estimates", "No obligation", "Same-day response"].map(
                (point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-white/60" />
                    <span>{point}</span>
                  </div>
                ),
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="text-primary group bg-white shadow-2xl shadow-black/20 hover:bg-white/95"
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                (123) 456-7890
              </Button>
            </div>

            <p className="mt-8 text-sm text-white/60">
              Usually responds within 24 hours • No spam, ever
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Bottom wave */}
      <div className="absolute right-0 -bottom-px left-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="var(--foreground)"
          />
        </svg>
      </div>
    </section>
  );
}
