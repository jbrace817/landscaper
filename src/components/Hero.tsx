"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { LeafDecoration } from "@/components/decorations";

const trustIndicators = [
  "Licensed & Insured",
  "20+ Years Experience",
  "500+ Happy Clients",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[95vh] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
          alt="Beautiful landscaped garden"
          className="h-full w-full object-cover"
        />
        {/* Rich overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative leaf elements */}
      <LeafDecoration className="absolute right-[10%] top-32 h-32 w-32 rotate-[20deg] text-white/[0.05]" />
      <LeafDecoration className="absolute left-[5%] bottom-40 h-24 w-24 rotate-[-15deg] text-white/[0.03]" />

      <div className="relative z-10 flex w-full items-center py-16 md:py-24">
        <FadeIn>
          <Container>
            <div className="max-w-3xl">
              {/* Trust Badges - Pill style */}
              <div className="mb-8 flex flex-wrap gap-3">
                {trustIndicators.map((indicator) => (
                  <div
                    key={indicator}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-white">
                      {indicator}
                    </span>
                  </div>
                ))}
              </div>

              {/* Headline - Elegant Serif Typography */}
              <h1
                className="mb-8 text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Create the Outdoor
                <span className="relative mt-2 block">
                  <span className="text-accent">Sanctuary</span>
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-[60%] text-accent/40"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 8C50 3 100 10 150 5C175 3 200 7 200 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="mt-1 block">You Deserve</span>
              </h1>

              {/* Subheadline - Clean Sans Typography */}
              <p
                className="mb-10 max-w-xl text-lg leading-relaxed font-light text-white/80 md:text-xl"
                style={{
                  fontFamily: "var(--font-source-sans), system-ui, sans-serif",
                }}
              >
                Transform your Doylestown property into a breathtaking landscape.
                From elegant garden designs to meticulous maintenance, we bring
                20+ years of expertise to every project.
              </p>

              {/* CTAs */}
              <div className="mb-0 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="xl"
                  className="group shadow-lg shadow-primary/30"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10"
                  asChild
                >
                  <Link href="#gallery">
                    <Play className="h-4 w-4" />
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Social proof micro-element */}
              <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-primary/30 to-accent/30"
                    >
                      <img
                        src={`https://images.unsplash.com/photo-${
                          [
                            "1494790108377-be9c29b29330",
                            "1507003211169-0a1dd7228f2d",
                            "1438761681033-6461ffad8d80",
                            "1472099645785-5658abf4ff4e",
                          ][i - 1]
                        }?w=80&h=80&fit=crop`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-white">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 font-medium">4.9</span>
                  </div>
                  <div className="text-white/60">from 100+ reviews</div>
                </div>
              </div>
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
