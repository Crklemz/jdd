"use client";

import { Briefcase, Sparkles, Zap } from "lucide-react";
import { NeonCard } from "./NeonCard";
import { FadeInOnScroll } from "./FadeInOnScroll";
import type { NeonCardVariant } from "./NeonCard";

const VARIANTS: NeonCardVariant[] = ["blue", "purple", "magenta"];
const ICONS = [Briefcase, Sparkles, Zap];

export interface WhyChooseMeCardsProps {
  heading: string;
  items: string[];
}

function parseItem(item: string): { title: string; description: string | null } {
  const match = item.match(/^([^(]+)(?:\s*\(([^)]+)\))?$/);
  const title = match ? match[1].trim() : item;
  const detail = match?.[2]?.trim() ?? null;
  const description = detail
    ? detail
        .split("/")
        .map((part) => part.trim())
        .filter(Boolean)
        .join(" — ")
    : null;
  return { title, description };
}

export function WhyChooseMeCards({ heading, items }: WhyChooseMeCardsProps) {
  return (
    <section
      aria-label="Why choose me"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16"
    >
      <div className="mx-auto max-w-5xl space-y-10 px-4">
        <h2 className="text-center font-display text-2xl font-semibold uppercase tracking-wide neon-text-purple text-shadow-neon-purple md:text-3xl">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const { title, description } = parseItem(item);
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeInOnScroll key={`${item}-${i}`} delay={i * 100}>
                <NeonCard
                  variant={VARIANTS[i % VARIANTS.length]}
                  title={title}
                  description={description ?? undefined}
                  icon={Icon}
                />
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
