"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import L from "leaflet";
import { Button } from "@/components/ui/Button";

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
      background-color: #2D5A27;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

export default function ServiceAreas() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="areas" className="bg-background py-16 md:py-24">
        <Container>
          <div className="animate-pulse">
            <div className="bg-muted h-96 rounded-xl" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="areas" className="bg-background py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Do You Serve My Area?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              We proudly serve Doylestown, PA and the surrounding communities.
              Check if your neighborhood is in our service area.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Map */}
          <FadeIn>
            <div className="border-border h-[400px] overflow-hidden rounded-xl border lg:col-span-2 lg:h-[500px]">
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
                    color: "#2D5A27",
                    fillColor: "#2D5A27",
                    fillOpacity: 0.15,
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
                        <strong>{area.name}</strong>
                        <br />
                        <span className="text-muted-foreground text-sm">
                          In Service Area
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </FadeIn>

          {/* Areas List */}
          <FadeIn>
            <div className="bg-card border-border h-[400px] overflow-y-auto rounded-xl border p-6 lg:h-[500px]">
              <h3 className="text-foreground mb-4 font-semibold">
                Service Areas
              </h3>
              <div className="space-y-2">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  >
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <span className="text-foreground">{area.name}</span>
                  </div>
                ))}
              </div>
              <div className="border-border mt-6 border-t pt-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  Don&apos;t see your area? We may still be able to serve you!
                </p>
                <Button className="w-full">Check Your Address</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
