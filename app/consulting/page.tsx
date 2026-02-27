import { consultingContent } from "@/content";
import { NeonCard } from "../components/NeonCard";
import Link from "next/link";
import type { NeonCardVariant } from "../components/NeonCard";

const VALUE_BOX_VARIANTS: NeonCardVariant[] = ["green", "blue", "purple"];

export default function ConsultingPage() {
  const {
    welcomeHeading,
    introParagraph,
    questionBullets,
    problemStatement,
    entertainmentScienceIntro,
    credentialsParagraph,
    signatureQuote,
    credentialsParagraph2,
    signaturePackageHeading,
    getPackage,
    ideaSession,
    valueBoxes,
    customPackagesNote,
    comingSoonHeading,
    comingSoonItems,
    ctaButtonLabel,
    ctaButtonHref,
  } = consultingContent;

  return (
    <div className="relative min-h-screen space-y-0 py-8">
      {/* Welcome */}
      <section
        aria-label="Consulting"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-10 pt-2"
      >
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl neon-text-green text-shadow-neon-green">
            {welcomeHeading}
          </h1>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            {introParagraph}
          </p>
          <ul className="mx-auto mt-6 list-inside space-y-2 text-left text-muted-foreground sm:max-w-xl sm:list-disc">
            {questionBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem statement */}
      <section
        aria-label="The problem"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 pb-8 sm:px-6 md:px-8"
      >
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium leading-relaxed neon-text-green text-shadow-neon-green md:text-xl">
            {problemStatement}
          </p>
        </div>
      </section>

      {/* Entertainment Science intro */}
      <section
        aria-label="Entertainment Science"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 pb-8 sm:px-6 md:px-8"
      >
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center text-muted-foreground">
          <p className="text-lg leading-relaxed">{entertainmentScienceIntro}</p>
          <p className="text-lg leading-relaxed">{credentialsParagraph}</p>
          <blockquote className="font-display text-xl italic neon-text-green text-shadow-neon-green md:text-2xl">
            &ldquo;{signatureQuote}&rdquo;
          </blockquote>
          <p className="text-lg leading-relaxed">{credentialsParagraph2}</p>
        </div>
      </section>

      {/* Signature packages */}
      <section
        aria-label="Signature packages"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 pb-10 sm:px-6 md:px-8"
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-wide neon-text-green text-shadow-neon-green md:text-3xl">
            {signaturePackageHeading}
          </h2>

          {/* G.E.T. package */}
          <div className="mt-8 space-y-6 rounded-lg border border-border bg-card/50 p-6 md:p-8">
            <h3 className="text-xl font-semibold neon-text-blue text-shadow-neon-blue md:text-2xl">
              1. {getPackage.title}
            </h3>
            <ol className="space-y-6">
              {getPackage.phases.map((phase, i) => (
                <li key={i}>
                  <span className="font-semibold neon-text-yellow text-shadow-neon-yellow">
                    {phase.roman}. {phase.title}
                  </span>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                    {phase.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div>
              <p className="font-semibold text-foreground">Deliverables:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                {getPackage.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <p className="font-medium italic neon-text-green text-shadow-neon-green">
              {getPackage.tagline}
            </p>
          </div>

          {/* Idea Strategy Session */}
          <div className="mt-8 space-y-4 rounded-lg border border-border bg-card/50 p-6 md:p-8">
            <h3 className="text-xl font-semibold neon-text-purple text-shadow-neon-purple md:text-2xl">
              2. {ideaSession.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {ideaSession.description}
            </p>
            <p className="font-medium text-foreground">
              <span className="neon-text-purple text-shadow-neon-purple">
                Outcome:
              </span>{" "}
              {ideaSession.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* Three neon value boxes */}
      <section
        aria-label="Why choose Entertainment Solutions"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 pb-10 sm:px-6 md:px-8"
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueBoxes.map((box, i) => (
              <NeonCard
                key={i}
                variant={VALUE_BOX_VARIANTS[i]}
                title={box.title}
                description={box.description}
                centerText
                className="text-center"
              />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
            {customPackagesNote}
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section
        aria-label="Coming soon"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 pb-10 sm:px-6 md:px-8"
      >
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-wide neon-text-green text-shadow-neon-green md:text-3xl">
            {comingSoonHeading}
          </h2>
          <ul className="mx-auto mt-6 list-inside space-y-2 text-muted-foreground sm:max-w-xl sm:list-disc sm:text-left">
            {comingSoonItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Book a consultation"
        className="flex justify-center px-4 py-12 sm:px-6"
      >
        <Link
          href={ctaButtonHref}
          className="cta-button-black-neon inline-block w-full max-w-full rounded-full px-8 py-4 text-center no-underline transition hover:opacity-90 sm:w-auto sm:min-w-0 sm:px-12 sm:py-4"
        >
          <span className="cta-rainbow-pulsate-text inline-block text-lg font-semibold sm:text-xl">
            {ctaButtonLabel}
          </span>
        </Link>
      </section>
    </div>
  );
}
