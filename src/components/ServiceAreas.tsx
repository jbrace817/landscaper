"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import L from "leaflet";
import { Button } from "@/components/ui/Button";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { LeafDecoration, BranchDecoration } from "@/components/decorations";

const serviceAreas: { name: string; position: [number, number] }[] = [
  { name: "Doylestown", position: [40.3101, -75.1293] },
  { name: "Chalfont", position: [40.2796, -75.2093] },
  { name: "Warrington", position: [40.2868, -75.1446] },
  { name: "Warminster", position: [40.2776, -75.0874] },
  { name: "Hatfield", position: [40.2776, -75.2982] },
  { name: "Buckingham", position: [40.3287, -75.0618] },
  { name: "New Britain", position: [40.2987, -75.1874] },
  { name: "Jamison", position: [40.2526, -75.0674] },
  { name: "Wyndmoor", position: [40.2876, -75.1874] },
  { name: "Furlong", position: [40.289, -75.0574] },
];

const doylestownCenter: [number, number] = [40.3101, -75.1293];

const createCustomIcon = () =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: var(--primary, #2D5A27);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

export default function ServiceAreas() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section
        id="areas"
        className="from-background to-secondary/20 relative overflow-hidden bg-gradient-to-b py-20 md:py-32"
      >
        <Container>
          <div className="animate-pulse">
            <div className="bg-muted h-[500px] rounded-2xl" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="areas"
      className="from-background to-secondary/20 relative overflow-hidden bg-gradient-to-b py-20 md:py-32"
    >
      {/* Decorative elements */}
      <LeafDecoration className="text-primary absolute top-20 -left-10 h-40 w-40 rotate-[-20deg] opacity-30" />
      <BranchDecoration className="text-primary absolute -right-20 bottom-32 w-64 opacity-25" />

      <Container className="relative">
        <FadeIn>
          <div className="mb-14 text-center md:mb-16">
            {/* Editorial eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-primary h-px w-8" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                Service Areas
              </span>
              <div className="bg-primary h-px w-8" />
            </div>

            <h2
              className="text-foreground mb-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Do You Serve{" "}
              <span className="text-primary relative inline-block">
                My Area?{" "}
              </span>
            </h2>

            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              We proudly serve Doylestown, PA and the surrounding communities.
              Check if your neighborhood is in our service area.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Map */}
          <FadeIn className="lg:col-span-8">
            <div className="border-border/50 relative h-[400px] overflow-hidden rounded-2xl border shadow-xl lg:h-full">
              <MapContainer
                center={doylestownCenter}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle
                  center={doylestownCenter}
                  radius={20000}
                  pathOptions={{
                    color: "var(--primary, #2D5A27)",
                    fillColor: "var(--primary, #2D5A27)",
                    fillOpacity: 0.1,
                    weight: 2,
                  }}
                />
                {serviceAreas.map((area, index) => (
                  <Marker
                    key={index}
                    position={area.position}
                    icon={createCustomIcon()}
                  >
                    <Popup>
                      <div className="text-center">
                        <strong className="text-foreground">{area.name}</strong>
                        <br />
                        <span className="text-primary text-sm">
                          ✓ In Service Area
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* Map overlay gradient at bottom */}
              <div className="from-card/80 pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t to-transparent" />
            </div>
          </FadeIn>

          {/* Areas List */}
          <FadeIn className="lg:col-span-4">
            <div className="border-border/50 bg-card/60 flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-sm">
              <div className="border-border/50 border-b p-6">
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="text-primary h-5 w-5" />
                  <h3
                    className="text-foreground text-lg font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    Service Areas
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  10+ communities served
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="group bg-card hover:bg-primary/5 hover:ring-primary/20 flex items-center gap-3 rounded-xl p-3 ring-1 ring-transparent transition-all"
                    >
                      <CheckCircle className="text-primary h-4 w-4 shrink-0" />
                      <span className="text-foreground text-sm font-medium">
                        {area.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-border/50 border-t p-6">
                <div className="bg-primary/5 mb-4 rounded-xl p-4">
                  <p className="text-foreground mb-1 text-sm font-medium">
                    Don&apos;t see your area?
                  </p>
                  <p className="text-muted-foreground text-xs">
                    We may still be able to serve you. Contact us to check!
                  </p>
                </div>
                <Button className="group w-full">
                  Check Your Address
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
