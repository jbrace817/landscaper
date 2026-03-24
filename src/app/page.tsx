"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
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
        <div id="nudgett-form"></div>
        <Script
          src="http://192.168.1.167:3000/widget.js"
          data-widget-id="LSGR4mkTzK_y"
          data-mode="inline"
          data-container="nudgett-form"
          strategy="lazyOnload"
        />
        <FinalCTA />
      </main>
    </>
  );
}
