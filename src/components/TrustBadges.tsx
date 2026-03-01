"use client";

import { Shield, Clock, Award, Leaf } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

const trustBadges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "Same-Day Estimates",
    description: "Quick turnaround on quotes you can trust",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work 100%",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description: "Sustainable landscaping solutions",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-background-warm py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Why Doylestown Homeowners Trust Us
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              We&apos;re committed to delivering exceptional results and
              outstanding service on every project.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-card border-border hover:border-primary/30 rounded-xl border p-6 text-center transition-colors"
              >
                <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <badge.icon className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-foreground mb-2 font-semibold">
                  {badge.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
