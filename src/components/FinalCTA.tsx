"use client";

import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Gradient */}
      <div className="from-primary via-primary-dark to-primary absolute inset-0 bg-gradient-to-br" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-accent absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-white md:text-5xl">
              Ready to Transform Your Yard?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
              Get your free, no-obligation estimate today. Join 500+ happy
              Doylestown homeowners who have transformed their outdoor spaces.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="text-primary group bg-white hover:bg-white/90"
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                (123) 456-7890
              </Button>
            </div>

            <p className="mt-8 text-sm text-white/70">
              Usually responds within 24 hours
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
