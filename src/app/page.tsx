"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StatsRow from "@/components/StatsRow";
import Script from "next/script";

const ServiceAreasWrapper = dynamic(
  () => import("@/components/ServiceAreasWrapper"),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Gallery />
        <StatsRow />
        <ServiceAreasWrapper />
        <Testimonials />
        <FAQ />
        <div className="mx-auto max-w-[916px]">
          <div id="nudgett-form"></div>

          <Script
            src="https://pseudoprosperous-giovanni-spasmodic.ngrok-free.dev/widget.js"
            data-widget-id="WEpQjgDnXfJ_"
            data-mode="widget"
            data-container="nudgett-form"
            strategy="lazyOnload"
          />
        </div>
        <FinalCTA />
      </main>
    </>
  );
}
