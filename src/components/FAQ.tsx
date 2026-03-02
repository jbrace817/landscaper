"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Button } from "@/components/ui/Button";
import { CornerFlourish, LeafDecorationFilled } from "@/components/decorations";

const faqs = [
  {
    question: "How much do landscaping services cost?",
    answer:
      "Landscaping costs vary widely depending on the scope of work. Basic lawn maintenance starts at $75/month, while complete landscape design projects can range from $5,000 to $50,000+. We provide free, detailed estimates so you know exactly what to expect. We'll work with your budget to create a plan that meets your needs.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We offer free, no-obligation estimates for all our services. Our team will visit your property, discuss your goals, and provide a detailed proposal within 24-48 hours. There's no pressure and no commitment required.",
  },
  {
    question: "How soon can you start my project?",
    answer:
      "We typically can begin most projects within 1-2 weeks of approval. For larger design projects, we create a phased timeline that works for you. During our consultation, we'll provide a realistic schedule based on current availability and project complexity.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Doylestown and surrounding areas including Chalfont, Warrington, Warminster, Hatfield, Buckingham, New Britain, Jamison, and more. If you're not sure if we serve your area, please contact us! We may still be able to help.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We are fully licensed and insured for your peace of mind. Our team includes certified professionals with over 20 years of combined experience. We carry comprehensive liability insurance and are registered with the state of Pennsylvania.",
  },
  {
    question: "Do you offer maintenance plans?",
    answer:
      "Yes! We offer flexible maintenance plans tailored to your property's needs. Our plans include seasonal cleanup, regular mowing, fertilization, and more. Many clients choose our annual maintenance program to keep their landscape looking its best year-round.",
  },
  {
    question: "What makes your company different?",
    answer:
      "We're a local, family-owned business that treats every project like it's our own. Our 500+ satisfied customers can attest to our quality and reliability. We use only premium materials, provide transparent pricing, and stand behind our work with a satisfaction guarantee.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`group border-border/50 overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "bg-card ring-primary/10 shadow-lg ring-1"
          : "hover:border-primary/30 bg-card/50 hover:bg-card/80"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-4">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${
              isOpen
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-foreground pt-0.5 text-lg font-medium transition-colors ${
              isOpen ? "" : "group-hover:text-primary"
            }`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {question}
          </span>
        </div>
        <div
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${
            isOpen ? "bg-primary/10 rotate-180" : ""
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-colors ${
              isOpen ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="border-border/30 border-t px-6 py-5 pl-[4.5rem]">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="from-background via-secondary/10 to-background relative overflow-hidden bg-gradient-to-b py-20 md:py-32"
    >
      {/* Decorative elements */}
      <CornerFlourish className="text-primary absolute -bottom-4 -left-4 h-40 w-40 rotate-90 opacity-30" />
      <LeafDecorationFilled className="text-primary absolute top-32 -right-12 h-44 w-44 rotate-[-20deg] opacity-25" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="sticky top-24">
                {/* Editorial eyebrow */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary h-px w-12" />
                  <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                    FAQ
                  </span>
                </div>

                <h2
                  className="text-foreground mb-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Frequently Asked{" "}
                  <span className="text-primary relative inline-block">
                    Questions
                  </span>
                </h2>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Have questions? We&apos;ve got answers. If you don&apos;t see
                  what you&apos;re looking for, feel free to reach out.
                </p>

                <div className="border-border/50 bg-card/50 rounded-2xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                      <MessageCircle className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">
                        Still have questions?
                      </div>
                      <div className="text-muted-foreground text-sm">
                        We&apos;re here to help
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-3">
            <FadeInStagger faster>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeIn key={index}>
                    <FAQItem
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onToggle={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      index={index}
                    />
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
