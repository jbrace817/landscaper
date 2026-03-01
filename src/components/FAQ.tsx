"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

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
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-border border-b last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-foreground pr-4 font-medium">{question}</span>
        <ChevronDown
          className={`text-muted-foreground h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Have questions? We&apos;ve got answers. If you don&apos;t see what
              you&apos;re looking for, feel free to contact us.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-card border-border mx-auto max-w-3xl rounded-xl border p-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
