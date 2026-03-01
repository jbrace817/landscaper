"use client";

import { useState, useRef } from "react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-xl select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Before Image */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
        Before
      </div>

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
        />
      </div>
      <div className="bg-primary text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium">
        After
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <div className="flex gap-0.5">
            <div className="h-3 w-0.5 bg-gray-400" />
            <div className="h-3 w-0.5 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background-warm py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Star className="text-accent fill-accent h-5 w-5" />
              <span className="text-primary font-medium">Our Work</span>
            </div>
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              See the Transformation
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Real projects from Doylestown homeowners. Drag the sliders to see
              the amazing before and after results.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={index}>
              <div className="bg-card border-border overflow-hidden rounded-xl border">
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                />
                <div className="p-5">
                  <h3 className="text-foreground mb-2 font-semibold">
                    {project.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <span>{project.neighborhood}</span>
                    <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                    <span>{project.service}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
