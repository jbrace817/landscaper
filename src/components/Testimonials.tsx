"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import {
  LeafDecoration,
  BranchDecorationVertical,
} from "@/components/decorations";

const testimonials = [
  {
    name: "Sarah M.",
    neighborhood: "Chalfont",
    service: "Full Landscape Design",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    quote:
      "Our backyard was completely transformed! The team was professional, knowledgeable, and delivered exactly what we envisioned.",
    rating: 5,
  },
  {
    name: "Robert J.",
    neighborhood: "Warrington",
    service: "Lawn Maintenance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    quote:
      "Best lawn service we've ever had. They're reliable, thorough, and truly care about our property. Our lawn has never looked better.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    neighborhood: "Warminster",
    service: "Hardscaping",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    quote:
      "The patio and walkway they installed exceeded our expectations. The craftsmanship is outstanding and it completely changed the look of our home.",
    rating: 5,
  },
  {
    name: "Michael T.",
    neighborhood: "Buckingham",
    service: "Outdoor Lighting",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    quote:
      "Amazing transformation! The lighting design added so much ambiance to our backyard. We actually use our outdoor space now even after dark.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const advanceToNext = useCallback(() => {
    setIsAnimating(true);
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    advanceTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      advanceTimeoutRef.current = null;
    }, 300); // Match transition duration so fade-out completes before content swap
  }, []);

  // Auto-advance (trigger animation same as manual next)
  useEffect(() => {
    const interval = setInterval(advanceToNext, 8000);
    return () => {
      clearInterval(interval);
      if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    };
  }, [advanceToNext]);

  return (
    <section
      id="testimonials"
      className="from-secondary/20 via-background to-accent/10 relative overflow-hidden bg-gradient-to-br py-20 md:py-32"
    >
      {/* Decorative elements */}
      <LeafDecoration className="text-primary absolute -top-10 -left-10 h-48 w-48 rotate-[-25deg] opacity-30" />
      <BranchDecorationVertical className="text-primary absolute top-20 right-10 h-48 opacity-25" />
      <LeafDecoration className="text-primary absolute -right-16 bottom-20 h-40 w-40 rotate-[35deg] opacity-25" />

      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <FadeIn>
          <div className="mb-14 text-center md:mb-16">
            {/* Editorial eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-primary h-px w-8" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                Testimonials
              </span>
              <div className="bg-primary h-px w-8" />
            </div>

            <h2
              className="text-foreground mb-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Our{" "}
              <span className="text-primary relative inline-block">
                Clients
              </span>{" "}
              Say
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial Carousel */}
        <FadeIn>
          <div className="relative mx-auto max-w-5xl">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="border-border bg-card/80 hover:border-primary hover:bg-primary/5 absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 md:-translate-x-6"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-foreground h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="border-border bg-card/80 hover:border-primary hover:bg-primary/5 absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 md:translate-x-6"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-foreground h-5 w-5" />
            </button>

            {/* Testimonial Card */}
            <div className="border-border/50 bg-card/60 relative overflow-hidden rounded-3xl border p-8 shadow-xl backdrop-blur-sm md:p-12 lg:p-16">
              {/* Large quote mark background */}
              <Quote className="text-primary/[0.05] absolute -top-4 -left-4 h-40 w-40" />
              <Quote className="text-primary/[0.03] absolute -right-8 -bottom-8 h-56 w-56 rotate-180" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="mb-6 flex justify-center gap-1.5">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className={`text-foreground mx-auto mb-10 max-w-3xl text-center text-xl leading-relaxed transition-opacity duration-300 md:text-2xl lg:text-3xl ${isAnimating ? "opacity-0" : "opacity-100"}`}
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div
                  className={`flex flex-col items-center gap-4 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="ring-primary/30 h-16 w-16 overflow-hidden rounded-full ring-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div
                      className="text-foreground text-lg font-semibold"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].neighborhood} •{" "}
                      <span className="text-primary">
                        {testimonials[currentIndex].service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { icon: "⭐", text: "4.9/5 Average Rating" },
              { icon: "🏆", text: "Best of Doylestown 2024" },
              { icon: "✅", text: "100+ Google Reviews" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
