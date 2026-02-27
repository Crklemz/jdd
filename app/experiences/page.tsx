"use client";

import Image from "next/image";
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
    <div className="relative min-h-screen space-y-0 py-8">
      <section
        aria-label="Bookable Realms"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pt-2"
      >
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl neon-text-purple text-shadow-neon-purple">
            Bookable Realms
          </h1>
          <p className="mt-4 text-lg tracking-widest uppercase text-muted-foreground">{introHeading}</p>
        </div>
      </section>

      {/* Event types ticker - full-bleed to match home page */}
      <section
        aria-label="Event types"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 w-screen md:mt-10 lg:mt-8"
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
        {/* Mobile-only: second event types strip scrolling opposite direction */}
        <div className="ticker-strip overflow-hidden border-y border-border py-6 md:hidden">
          <div className="flex w-max gap-12 whitespace-nowrap animate-ticker-reverse">
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
                  key={`${event}-reverse-${i}`}
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
      <section className="mt-12 space-y-6 px-4 sm:px-6 md:px-8 md:mt-10 lg:mt-8">
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
              centerText
            />
          );
        })}
      </section>

      {/* Signature Jester Fantasies */}
      <section className="mt-12 px-4 sm:px-6 md:px-8 md:mt-10 lg:mt-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-accent md:text-3xl">
            {fantasiesHeading}
          </h2>
          <p className="mt-2 text-lg font-medium text-foreground md:text-xl">
            {customFantasiesNote}
          </p>
          <ul className="mt-8 space-y-8 text-left">
            {jesterFantasies.map((fantasy) => (
              <li key={fantasy.name}>
                <div className="text-foreground">
                  <span className={`text-lg font-semibold ${fantasy.color}`}>
                    {fantasy.name}
                  </span>
                  {fantasy.tags.length > 0 && (
                    <span className="ml-2 text-sm text-muted">
                      (Tags: {fantasy.tags.join(" / ")})
                    </span>
                  )}
                </div>
                {fantasy.imagePaths && fantasy.imagePaths.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {fantasy.imagePaths.map((src) => {
                      const anchorTop =
                        "/exp-images/Childrens/33.jpg" === src ||
                        "/exp-images/Fantasy/51.jpg" === src ||
                        "/landing-images/8.jpg" === src ||
                        "/about-images/18.jpg" === src ||
                        "/landing-images/9.jpg" === src;
                      const anchorSlightTop = "/exp-images/Fantasy/48.jpg" === src;
                      const objectPosition = anchorSlightTop
                        ? "center 25%"
                        : undefined;
                      return (
                        <div
                          key={src}
                          className="relative h-40 w-40 shrink-0 overflow-hidden rounded-lg sm:h-48 sm:w-48"
                        >
                          <Image
                            src={src}
                            alt={fantasy.name}
                            fill
                            className={`object-cover ${anchorTop ? "object-top" : ""}`}
                            style={objectPosition ? { objectPosition } : undefined}
                            sizes="(max-width: 640px) 160px, 192px"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fantasy + Children's galleries */}
      <section aria-label="Gallery" className="mt-8 px-4 md:mt-10 md:px-6 lg:mt-12">
        <ScrollGallery
          imagePaths={fantasyImagePaths}
          altPrefix="Jester fantasy"
          className="mb-6"
          topCropIndices={[12]}
          positionByIndex={{ 9: "center 25%" }}
        />
        <ScrollGallery
          imagePaths={childrensImagePaths}
          altPrefix="Children's entertainment"
          className="mb-6"
          topCropIndices={[2]}
          positionByIndex={{ 6: "center 25%" }}
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
