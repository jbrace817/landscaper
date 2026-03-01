"use client";

import Link from "next/link";
import {
  Palette,
  Scissors,
  LayoutGrid,
  TreeDeciduous,
  Lightbulb,
  Droplets,
} from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Palette,
    title: "Landscape Design",
    description:
      "3D renderings, custom plant selection, and comprehensive master planning for your dream outdoor space.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
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
    <section id="services" className="bg-background py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Our Landscaping Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              From design to maintenance, we offer comprehensive landscaping
              solutions tailored to your Doylestown property.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index}>
              <div className="group bg-card border-border hover:border-primary/30 overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
                      <service.icon className="text-primary-foreground h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="text-primary inline-flex items-center font-medium hover:underline"
                  >
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 text-center">
            <Button size="lg">View All Services</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
