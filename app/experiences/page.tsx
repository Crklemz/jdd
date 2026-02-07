"use client";

import { experiencesContent } from "@/content";
import { ScrollGallery } from "../components/ScrollGallery";
import { useState } from "react";

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
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          Bookable Realms
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{introHeading}</p>
      </section>

      {/* Event types ticker */}
      <section className="overflow-hidden border-y border-[var(--border)] py-4">
        <div className="flex w-max gap-10 whitespace-nowrap animate-ticker-slow">
          {[...eventTypesList, ...eventTypesList].map((event, i) => (
            <span key={`${event}-${i}`} className="text-[var(--muted)]">
              ({event})
            </span>
          ))}
        </div>
      </section>

      {/* Realm blurbs */}
      <section className="space-y-8">
        {realmBlurbs.map((realm) => (
          <div
            key={realm.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <h2 className="font-display text-xl font-semibold text-[var(--accent)]">
              {realm.title}
            </h2>
            <p className="mt-2 text-[var(--muted)]">{realm.description}</p>
          </div>
        ))}
      </section>

      {/* Signature Jester Fantasies */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-[var(--accent)]">
          {fantasiesHeading}
        </h2>
        <ul className="mt-4 space-y-2">
          {jesterFantasies.map((fantasy) => (
            <li key={fantasy.name} className="text-[var(--foreground)]">
              <span className="font-medium">{fantasy.name}</span>
              {fantasy.tags.length > 0 && (
                <span className="ml-2 text-sm text-[var(--muted)]">
                  (Tags: {fantasy.tags.join(" / ")})
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 italic text-[var(--muted)]">{customFantasiesNote}</p>
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
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-2 text-[var(--accent)] transition hover:bg-[var(--border)]"
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
