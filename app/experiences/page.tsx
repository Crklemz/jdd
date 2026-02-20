"use client";

import { experiencesContent } from "@/content";
import { ScrollGallery } from "../components/ScrollGallery";
import { NeonCard } from "../components/NeonCard";
import { useState } from "react";
import type { NeonCardVariant } from "../components/NeonCard";

export default function ExperiencesPage() {
  const [adultGalleryOpen, setAdultGalleryOpen] = useState(false);
  const {
    introHeading,
    eventTypesList,
    realmBlurbs,
    fantasiesHeading,
    jesterFantasies,
    customFantasiesNote,
    fantasyImagePaths,
    childrensImagePaths,
    adultImagePaths,
    adultGalleryLabel,
  } = experiencesContent;

  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Bookable Realms
        </h1>
        <p className="mt-4 text-lg text-muted">{introHeading}</p>
      </section>

      {/* Event types ticker - full-bleed to match home page */}
      <section
        aria-label="Event types"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
      >
        <div className="ticker-strip overflow-hidden border-y border-border py-6">
          <div className="flex w-max gap-12 whitespace-nowrap animate-ticker">
            {[...eventTypesList, ...eventTypesList].map((event, i) => {
              const rainbowClasses = [
                "neon-text-red text-shadow-neon-red",
                "neon-text-orange text-shadow-neon-orange",
                "neon-text-yellow text-shadow-neon-yellow",
                "neon-text-green text-shadow-neon-green",
                "neon-text-blue text-shadow-neon-blue",
                "neon-text-purple text-shadow-neon-purple",
              ] as const;
              const colorClass = rainbowClasses[i % rainbowClasses.length];
              return (
                <span
                  key={`${event}-${i}`}
                  className={`text-lg ${colorClass}`}
                >
                  {event}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Realm blurbs - styled like WhyChooseMeCards with text matching border color (nav order: blue, pink, orange, green, purple) */}
      <section className="space-y-6">
        {realmBlurbs.map((realm, i) => {
          const variants: NeonCardVariant[] = ["blue", "pink", "orange", "green", "purple"];
          return (
            <NeonCard
              key={realm.title}
              variant={variants[i % variants.length]}
              title={realm.title}
              description={realm.description}
              useVariantColorForText
              size="large"
            />
          );
        })}
      </section>

      {/* Signature Jester Fantasies */}
      <section>
        <h2 className="text-2xl font-semibold text-accent">
          {fantasiesHeading}
        </h2>
        <ul className="mt-4 space-y-2">
          {jesterFantasies.map((fantasy) => (
            <li key={fantasy.name} className="text-foreground">
              <span className="font-medium">{fantasy.name}</span>
              {fantasy.tags.length > 0 && (
                <span className="ml-2 text-sm text-muted">
                  (Tags: {fantasy.tags.join(" / ")})
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 italic text-muted">{customFantasiesNote}</p>
      </section>

      {/* Fantasy + Children's galleries */}
      <section aria-label="Gallery">
        <ScrollGallery
          imagePaths={fantasyImagePaths}
          altPrefix="Jester fantasy"
          className="mb-6"
        />
        <ScrollGallery
          imagePaths={childrensImagePaths}
          altPrefix="Children's entertainment"
          className="mb-6"
        />

        {/* Adult gallery - revealable */}
        <div>
          <button
            type="button"
            onClick={() => setAdultGalleryOpen((open) => !open)}
            className="rounded-full border border-border bg-card px-6 py-2 text-accent transition hover:bg-border"
          >
            {adultGalleryOpen ? "Hide adult gallery" : adultGalleryLabel}
          </button>
          {adultGalleryOpen && (
            <div className="mt-4">
              <ScrollGallery
                imagePaths={adultImagePaths}
                altPrefix="Adult entertainment"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
