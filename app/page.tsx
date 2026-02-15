import Image from "next/image";
import { homeContent } from "@/content";
import { HeroVideo } from "./components/HeroVideo";
import { RotatingQuote } from "./components/RotatingQuote";
import { ScrollGallery } from "./components/ScrollGallery";
import { TrippyBackground } from "./components/TrippyBackground";

const LANDING = "/landing-images";

export default function HomePage() {
  const {
    hero,
    skillsHeading,
    skillsList,
    eventTypesIntro,
    eventTypesList,
    reviewQuotes,
    landingImagePaths,
    signatureVideoPath,
    videoAriaLabel,
    galleryAltPrefix,
    sectionImageAlts,
  } = homeContent;

  return (
    <div className="space-y-0 py-8">
      {/* Hero: video only — full viewport width, height capped at fold */}
      <section
        aria-label="Introduction"
        className="relative left-1/2 flex h-[90vh] w-[90vw] max-h-[90vh] -translate-x-1/2 items-center justify-center overflow-hidden"
      >
        <HeroVideo
          src={signatureVideoPath}
          ariaLabel={videoAriaLabel}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </section>

      {/* Hero content: tagline & invocation below the video */}
      <section
        aria-label="Tagline"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-card py-16"
      >
        <div className="relative z-10 mx-4 max-w-2xl space-y-6 text-center md:mx-auto">
          <Image
            src="/about-images/Jester Signature.png"
            alt=""
            width={260}
            height={104}
            className="mx-auto mb-8 h-24 w-auto object-contain md:h-28 md:mb-10"
          />
          <p className="text-lg uppercase tracking-widest neon-text-pink text-shadow-neon-pink">
            {hero.tagline}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl neon-text-blue text-shadow-neon-blue">
            {hero.invocation}
          </h1>
        </div>
      </section>

      {/* Identity & energy: solid background */}
      <section
        aria-label="About"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-card py-16"
      >
        <div className="mx-auto flex flex-col gap-16 px-4">
          <div className="space-y-8 text-center">
            <p className="mx-auto max-w-4xl font-display text-2xl leading-snug text-foreground md:text-3xl">
              {hero.identity}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-card p-6 md:p-8">
            <p className="text-center text-xl uppercase tracking-wider neon-text-purple text-shadow-neon-purple md:text-2xl">
              {skillsHeading}
            </p>
            <div className="ticker-strip overflow-hidden border-y border-border py-6">
              <div className="flex w-max gap-12 whitespace-nowrap animate-ticker">
                {[...skillsList, ...skillsList].map((skill, i) => (
                  <span key={`${skill}-${i}`} className="text-lg text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-10 text-center">
            <p className="mx-auto max-w-4xl font-display text-2xl italic md:text-3xl neon-text-pink text-shadow-neon-pink">
              <span className="fancy-underline fancy-underline-neon-rainbow">{hero.energy1}</span>
            </p>
            <p className="mx-auto max-w-2xl font-display text-2xl italic md:text-3xl neon-text-blue text-shadow-neon-blue">
              <span className="fancy-underline fancy-underline-neon-rainbow">{hero.energy2}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section
        aria-label="Event types"
        className="mt-16 flex flex-col overflow-hidden"
      >
        <div className="flex w-full items-center gap-0 p-6 md:p-8">
          <div className="flex w-3/5 min-w-0 flex-col pr-6 md:pr-8">
            <div className="flex flex-1 flex-col items-center">
              <p className="font-display mb-5 text-2xl text-foreground md:text-3xl text-center">
                {eventTypesIntro}
              </p>
            </div>
            <div className="relative z-10 mt-auto w-full overflow-hidden border-y border-b-accent border-t-accent border-border/50 py-6">
              <div className="flex w-max gap-10 whitespace-nowrap animate-ticker">
                {[...eventTypesList, ...eventTypesList].map((event, i) => (
                  <span
                  key={`${event}-${i}`}
                  className="font-display text-xl italic text-accent"
                  >
                    {event}
                 </span>
               ))}
              </div>
            </div>
          </div>
          <div
            className="w-px shrink-0 bg-border"
            aria-hidden
          />
          <div className="image-radial-fade w-2/5 shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${LANDING}/1.jpg`}
              alt={sectionImageAlts.eventTypes}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Reviews: trippy animated background with rotating quote (matches gallery section width) */}
      <section
        aria-label="Reviews"
        className=" relative mt-26 flex min-h-[120px] w-full items-center overflow-hidden rounded-t-lg"
      >
        <TrippyBackground />
        <div className="absolute inset-0 bg-background/60" aria-hidden />
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="flex justify-center">
              <RotatingQuote quotes={reviewQuotes} />
            </div>
            <div aria-label="Gallery" className="-mt-6">
            <ScrollGallery
              imagePaths={landingImagePaths.slice(0, 6)}
              altPrefix={galleryAltPrefix}
              className="mb-4"
              scrollDurationSeconds={70}
            />
            <ScrollGallery
              imagePaths={landingImagePaths.slice(6, 11)}
              altPrefix={galleryAltPrefix}
              scrollDurationSeconds={35}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
