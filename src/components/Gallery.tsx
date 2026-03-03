"use client";

import { useState, useRef } from "react";
import Container from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { MapPin, ArrowLeftRight } from "lucide-react";
import { BranchDecoration, LeafCluster } from "@/components/decorations";
import { ImageComparisonCustomSlider } from "@/components/ImageSlider/ImageComparisonSlider";

const projects = [
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    title: "Complete Backyard Transformation",
    neighborhood: "Chalfont",
    service: "Full Landscape Design",
  },
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1609757754057-8a8e17eb73b2?w=800&q=80",
    title: "Front Yard Upgrade",
    neighborhood: "Warrington",
    service: "Hardscaping & Planting",
  },
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1611282712338-63a58e27980a?w=800&q=80",
    title: "Patio & Outdoor Living",
    neighborhood: "Warminster",
    service: "Hardscaping",
  },
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1623358519330-00f61d89396b?w=800&q=80",
    title: "Mature Garden Installation",
    neighborhood: "Hatfield",
    service: "Planting & Design",
  },
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1658692051708-519fbdac7e8f?w=800&q=80",
    title: "Lighting Transformation",
    neighborhood: "Buckingham",
    service: "Outdoor Lighting",
  },
  {
    before:
      "https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1743938953444-0c00eb235b2e?w=800&q=80",
    title: "Irrigation System Install",
    neighborhood: "New Britain",
    service: "Irrigation",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="from-secondary/30 via-background to-background relative overflow-hidden bg-gradient-to-b py-20 md:py-32"
    >
      {/* Decorative elements */}
      <BranchDecoration className="text-primary absolute top-20 -left-10 w-64 opacity-40" />
      <LeafCluster className="text-primary absolute -right-20 bottom-40 h-64 w-64 opacity-30" />

      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <FadeIn>
          <div className="mb-16 text-center md:mb-20">
            {/* Editorial eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-primary h-px w-8" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                Our Portfolio
              </span>
              <div className="bg-primary h-px w-8" />
            </div>

            <h2
              className="text-foreground mb-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              See the{" "}
              <span className="text-primary relative inline-block">
                Transformation
              </span>{" "}
            </h2>

            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              Real projects from Doylestown homeowners. Drag the sliders to
              reveal the stunning before and after results.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn key={index} className="group">
                <div className="border-border/50 bg-card/50 overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                  <ImageComparisonCustomSlider
                    imageBefore={project.before}
                    imageAfter={project.after}
                  />

                  <div className="p-5">
                    <h3
                      className="text-foreground mb-2 text-lg font-semibold"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {project.title}
                    </h3>

                    <div className="text-muted-foreground flex items-center gap-3 text-sm">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.neighborhood}
                      </span>
                      <span className="bg-border h-1 w-1 rounded-full" />
                      <span className="text-primary/80 bg-primary/10 rounded-full px-2 py-0.5 text-xs font-medium">
                        {project.service}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}
