import React from "react";
import { FadeIn } from "./FadeIn";
import Container from "./Container";
function StatsRow() {
  return (
    <section id="stats" className="py-12">
      <Container>
        <FadeIn>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "20+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "5-Star Reviews" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-primary mb-1 text-5xl font-semibold lg:text-6xl"
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

export default StatsRow;
