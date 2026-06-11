import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doylestown Lawn & Landscape | Professional Landscaping Services",
  description:
    "Professional landscaping services in Doylestown, PA and surrounding areas. From routine maintenance to complete landscape design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div id="nudgett-popup"></div>
        <Script
          src="https://pseudoprosperous-giovanni-spasmodic.ngrok-free.dev/widget.js"
          data-widget-id="LSGR4mkTzK_y"
          data-mode="popup"
          data-container="nudgett-popup"
          strategy="lazyOnload"
        />
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
