"use client";

import dynamic from "next/dynamic";

const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"), {
  ssr: false,
  loading: () => (
    <div className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-muted h-[400px] animate-pulse rounded-xl" />
      </div>
    </div>
  ),
});

export default function ServiceAreasWrapper() {
  return <ServiceAreas />;
}
