"use client";

import { Shield, Clock, Award, Leaf } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { LeafDecoration, BranchDecoration } from "@/components/decorations";

const trustBadges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage for your peace of mind",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Same-Day Estimates",
    description: "Quick turnaround on quotes you can trust",
    accent: "accent",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work 100%",
    accent: "chart-3",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description: "Sustainable landscaping solutions",
    accent: "chart-4",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Organic background with subtle gradient */}
      <div className="from-secondary/40 via-background to-accent/20 absolute inset-0 bg-gradient-to-br" />

      {/* Decorative elements */}
      <LeafDecoration className="text-primary absolute -top-10 -left-10 h-40 w-40 rotate-[-20deg] opacity-60" />
      <LeafDecoration className="text-primary absolute top-20 -right-5 h-32 w-32 rotate-[30deg] opacity-40" />
      <BranchDecoration className="text-primary absolute bottom-20 left-1/4 w-48 opacity-50" />

      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            {/* Editorial-style eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary h-px w-12" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                Our Promise
              </span>
            </div>

            <h2
              className="text-foreground mb-5 max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why Doylestown Homeowners{" "}
              <span className="text-primary relative">Trust</span> Us
            </h2>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed md:text-xl">
              We&apos;re committed to delivering exceptional results and
              outstanding service on every project.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric Bento Grid */}
        <FadeInStagger faster>
          <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {/* Featured Badge - Large */}
            <FadeIn className="group relative sm:col-span-2 lg:col-span-7 lg:row-span-2">
              <div className="border-border/60 bg-card/80 relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl md:p-10">
                {/* Large decorative icon */}
                <div className="text-primary/[0.07] absolute -right-8 -bottom-8 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                  <Shield className="h-64 w-64 md:h-80 md:w-80" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="bg-primary/10 ring-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105">
                    <Shield className="text-primary h-8 w-8" />
                  </div>

                  <h3
                    className="text-foreground mb-3 text-2xl font-semibold md:text-3xl"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {trustBadges[0].title}
                  </h3>

                  <p className="text-muted-foreground mb-8 max-w-md text-base leading-relaxed md:text-lg">
                    {trustBadges[0].description}. Every member of our team is
                    fully vetted, trained, and covered so you never have to
                    worry.
                  </p>

                  <div className="border-border/50 mt-auto flex items-center gap-4 border-t pt-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="border-card from-primary/20 to-accent/30 text-primary flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gradient-to-br text-xs font-medium"
                        >
                          ✓
                        </div>
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      Trusted by 500+ local families
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Second Badge - Tall */}
            <FadeIn className="group lg:col-span-5 lg:row-span-2">
              <div className="border-border/60 from-card/90 to-accent/10 relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-7 backdrop-blur-sm transition-all duration-500 hover:shadow-lg md:p-8">
                <div className="text-accent/[0.1] absolute -bottom-4 -left-4 transition-transform duration-700 group-hover:scale-110">
                  <Clock className="h-40 w-40" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="bg-accent/20 ring-accent/30 mb-5 flex h-14 w-14 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105">
                    <Clock className="text-accent-foreground h-7 w-7" />
                  </div>

                  <h3
                    className="text-foreground mb-3 text-xl font-semibold md:text-2xl"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {trustBadges[1].title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    {trustBadges[1].description}. Request a quote in the
                    morning, get your detailed estimate by evening.
                  </p>

                  {/* Visual timeline element */}
                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary h-2 w-2 rounded-full" />
                      <div className="bg-primary/60 h-0.5 flex-1" />
                      <div className="bg-primary/80 h-2 w-2 rounded-full" />
                      <div className="bg-primary/40 h-0.5 flex-1" />
                      <div className="bg-accent ring-accent/20 h-3 w-3 rounded-full ring-4" />
                    </div>
                    <div className="text-muted-foreground mt-2 flex justify-between text-xs">
                      <span>Request</span>
                      <span>Review</span>
                      <span className="text-primary font-medium">Same Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Third Badge */}
            <FadeIn className="group lg:col-span-6">
              <div className="border-border/60 bg-card/70 relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-lg md:p-7">
                <div className="text-primary/[0.06] absolute -right-6 -bottom-6 transition-transform duration-700 group-hover:scale-110">
                  <Award className="h-36 w-36" />
                </div>

                <div className="relative z-10 flex h-full items-start gap-5">
                  <div className="bg-primary/10 ring-primary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105">
                    <Award className="text-primary h-6 w-6" />
                  </div>

                  <div className="flex flex-col">
                    <h3
                      className="text-foreground mb-2 text-lg font-semibold md:text-xl"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {trustBadges[2].title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {trustBadges[2].description}
                    </p>

                    {/* Star rating visual */}
                    <div className="mt-auto flex items-center gap-1 pt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-5 w-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-muted-foreground ml-2 text-sm">
                        4.9/5 average
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Fourth Badge */}
            <FadeIn className="group lg:col-span-6">
              <div className="border-border/60 from-chart-4/10 via-card/80 to-primary/5 relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-lg md:p-7">
                <div className="text-chart-4/[0.1] absolute -right-4 -bottom-4 transition-transform duration-700 group-hover:scale-110">
                  <Leaf className="h-32 w-32" />
                </div>

                <div className="relative z-10 flex h-full items-start gap-5">
                  <div className="bg-chart-4/15 ring-chart-4/25 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105">
                    <Leaf className="text-chart-4 h-6 w-6" />
                  </div>

                  <div className="flex flex-col">
                    <h3
                      className="text-foreground mb-2 text-lg font-semibold md:text-xl"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {trustBadges[3].title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {trustBadges[3].description}
                    </p>

                    {/* Eco badges */}
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {["Native Plants", "Water-Wise", "Organic"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-chart-4/10 text-chart-4 ring-chart-4/20 rounded-full px-3 py-1 text-xs font-medium ring-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}
