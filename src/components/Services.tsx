"use client";

import Link from "next/link";
import {
  Palette,
  Scissors,
  LayoutGrid,
  TreeDeciduous,
  Lightbulb,
  Droplets,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";
import { LeafDecorationFilled, CornerFlourish } from "@/components/decorations";

const services = [
  {
    icon: Palette,
    title: "Landscape Design",
    description:
      "3D renderings, custom plant selection, and comprehensive master planning for your dream outdoor space.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
    featured: true,
  },
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description:
      "Professional mowing, trimming, fertilization, aeration, and seasonal cleanup services.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80",
  },
  {
    icon: LayoutGrid,
    title: "Hardscaping",
    description:
      "Beautiful patios, walkways, retaining walls, fire pits, and outdoor living features.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    icon: TreeDeciduous,
    title: "Tree & Shrub Care",
    description:
      "Expert trimming, pruning, removal, and planting services for healthy greenery.",
    image:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&q=80",
  },
  {
    icon: Lightbulb,
    title: "Outdoor Lighting",
    description:
      "LED path lights, uplighting, and security lighting to enhance your landscape at night.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description:
      "Professional installation, repairs, and winterization for efficient water management.",
    image:
      "https://images.unsplash.com/photo-1579622586746-11c53d4c5c1a?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-background relative overflow-hidden py-20 md:py-32"
    >
      {/* Decorative elements */}
      <CornerFlourish className="text-primary absolute -top-4 -left-4 h-32 w-32 opacity-40" />
      <LeafDecorationFilled className="text-primary absolute -right-10 bottom-40 h-48 w-48 rotate-12 opacity-30" />

      <Container className="relative">
        <FadeIn>
          <div className="mb-16 max-w-2xl md:mb-20">
            {/* Editorial eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary h-px w-12" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                What We Do
              </span>
            </div>

            <h2
              className="text-foreground mb-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Comprehensive{" "}
              <span className="relative inline-block">
                Landscaping
                <svg
                  className="text-primary/30 absolute -bottom-1 left-0 h-2 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4Q50 0 100 4T200 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Services
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              From design to maintenance, we offer tailored solutions for your
              Doylestown property. Each service reflects our commitment to
              quality and attention to detail.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid - Asymmetric Masonry Style */}
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={index} className={`group`}>
                <div
                  className={`border-border/60 bg-card relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl`}
                >
                  {/* Image with overlay */}
                  <div className={`relative h-64 overflow-hidden lg:h-72`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="bg-primary ring-primary/30 flex h-12 w-12 items-center justify-center rounded-xl ring-2 transition-transform duration-300 group-hover:scale-105">
                        <service.icon className="text-primary-foreground h-6 w-6" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent/90 text-accent-foreground rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-foreground mb-2 text-xl font-semibold md:text-2xl"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed md:text-base">
                      {service.description}
                    </p>

                    <Link
                      href="#contact"
                      className="text-primary group/link hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <span className="relative">
                        Get a Quote
                        <span className="bg-primary/30 absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="from-primary/5 pointer-events-none absolute right-0 bottom-0 h-32 w-32 translate-x-8 translate-y-8 rounded-full bg-gradient-to-tl to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <span className="text-muted-foreground text-sm">or</span>

            <span className="text-primary underline-offset-4 hover:underline">
              <Link
                href="#contact"
                className="text-primary underline-offset-4 hover:underline"
              >
                Request a Custom Quote
              </Link>
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
