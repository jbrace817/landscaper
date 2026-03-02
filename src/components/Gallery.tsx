"use client";

import { useState, useRef } from "react";
import Container from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { MapPin, ArrowLeftRight } from "lucide-react";
import { BranchDecoration, LeafCluster } from "@/components/decorations";

const projects = [
  {
    before:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    title: "Complete Backyard Transformation",
    neighborhood: "Chalfont",
    service: "Full Landscape Design",
  },
  {
    before:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80",
    title: "Front Yard Upgrade",
    neighborhood: "Warrington",
    service: "Hardscaping & Planting",
  },
  {
    before:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Patio & Outdoor Living",
    neighborhood: "Warminster",
    service: "Hardscaping",
  },
  {
    before:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80",
    title: "Mature Garden Installation",
    neighborhood: "Hatfield",
    service: "Planting & Design",
  },
  {
    before:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Lighting Transformation",
    neighborhood: "Buckingham",
    service: "Outdoor Lighting",
  },
  {
    before:
      "https://images.unsplash.com/photo-1579622586746-11c53d4c5c1a?w=800&q=60",
    after:
      "https://images.unsplash.com/photo-1579622586746-11c53d4c5c1a?w=800&q=80",
    title: "Irrigation System Install",
    neighborhood: "New Britain",
    service: "Irrigation",
  },
];

function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group/slider relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-2xl select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Before Image */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* After Image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={after}
          alt="After"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
          }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Before
      </div>
      <div className="bg-primary text-primary-foreground pointer-events-none absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
        After
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className={`absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform ${isDragging ? "scale-110" : "group-hover/slider:scale-105"}`}
        >
          <ArrowLeftRight className="text-foreground h-4 w-4" />
        </div>
      </div>

      {/* Drag hint overlay - shows briefly */}
      <div className="bg-foreground/60 pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/slider:opacity-0">
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium">
          Drag to compare
        </span>
      </div>
    </div>
  );
}

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
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
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

        {/* Stats row */}
        <FadeIn>
          <div className="border-border/50 bg-card/30 mt-16 rounded-2xl border p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "20+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "5-Star Reviews" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-primary mb-1 text-3xl font-semibold md:text-4xl"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
