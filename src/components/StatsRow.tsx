"use client";

import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";
import Container from "./Container";
import NumberFlow from "@number-flow/react";

const STATS = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "5-Star Reviews" },
] as const;

function StatsRow() {
  const [displayedValues, setDisplayedValues] = useState<number[]>(() =>
    STATS.map(() => 0),
  );
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        setDisplayedValues(STATS.map((s) => s.value));
      },
      { threshold: 1, rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-12">
      <Container>
        <FadeIn>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-primary mb-1 text-5xl font-semibold lg:text-6xl"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    <NumberFlow
                      value={displayedValues[index]}
                      suffix={stat.suffix}
                    />
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

export default StatsRow;
