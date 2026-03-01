"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    name: "Sarah M.",
    neighborhood: "Chalfont",
    service: "Full Landscape Design",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    quote:
      "Our backyard was completely transformed! The team was professional, knowledgeable, and delivered exactly what we envisioned. We've already recommended them to our neighbors.",
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="bg-background-warm py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-semibold md:text-4xl">
              What Doylestown Homeowners Say
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience with us.
            </p>
          </div>
        </FadeIn>

        {/* Testimonial Carousel */}
        <FadeIn>
          <div className="relative mx-auto max-w-4xl">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="bg-card border-border hover:border-primary hover:bg-primary/5 absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border transition-colors md:-translate-x-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-foreground h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="bg-card border-border hover:border-primary hover:bg-primary/5 absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border transition-colors md:translate-x-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-foreground h-5 w-5" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-card border-border rounded-2xl border p-8 md:p-12">
              <Quote className="text-primary/20 mb-6 h-12 w-12" />

              <div className="mb-6 flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent h-5 w-5" />
                ))}
              </div>

              <blockquote className="text-foreground mb-8 text-lg leading-relaxed md:text-xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="border-primary/20 h-14 w-14 rounded-full border-2 object-cover"
                />
                <div>
                  <div className="text-foreground font-semibold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].neighborhood} •{" "}
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
