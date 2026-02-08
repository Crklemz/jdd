import Image from "next/image";
import { homeContent } from "@/content";
import { ScrollGallery } from "./components/ScrollGallery";

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
      {/* Hero with video background */}
      <section
        aria-label="Introduction"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex min-h-[70vh] w-screen items-center justify-center overflow-hidden"
      >
        <video
          src={signatureVideoPath}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={videoAriaLabel}
        />
        <div className="absolute inset-0 bg-background/80" aria-hidden />
        <div className="relative z-10 mx-4 max-w-2xl space-y-6 text-center">
          <p className="text-lg uppercase tracking-widest text-accent">
            {hero.tagline}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {hero.invocation}
          </h1>
        </div>
      </section>

      {/* Identity & energy: solid background */}
      <section
        aria-label="About"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-card py-16"
      >
        <div className="mx-auto space-y-8 px-4 text-center">
          <p className="mx-auto max-w-4xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            {hero.identity}
          </p>
        </div>
        <div className="flex flex-col justify-center  gap-4 bg-card p-6 md:p-8">
          <p className="text-sm text-center uppercase tracking-wider text-muted">
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
        <div className="mx-auto space-y-8 px-4 text-center">
          <p className="mx-auto max-w-4xl font-display text-2xl italic text-accent md:text-3xl">
            {hero.energy1}
          </p>
          <p className="mx-auto max-w-2xl font-display text-2xl italic text-accent md:text-3xl">
            {hero.energy2}
          </p>
        </div>
      </section>

      {/* Event types */}
      <section
        aria-label="Event types"
        className="mt-16 flex flex-col overflow-hidden"
      >
        <div className="flex w-full items-stretch gap-0 p-6 md:p-8">
          <div className="flex w-1/2 min-w-0 flex-col justify-center pr-6 md:pr-8">
            <p className="font-display text-2xl text-foreground md:text-3xl">
              {eventTypesIntro}
            </p>
          </div>
          <div
            className="w-px shrink-0 bg-border"
            aria-hidden
          />
          <div className="image-radial-fade w-1/2 shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${LANDING}/1.jpg`}
              alt={sectionImageAlts.eventTypes}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        <div className="overflow-hidden border-y border-border py-3">
          <div className="flex w-max gap-10 whitespace-nowrap animate-ticker-slow">
            {[...eventTypesList, ...eventTypesList].map((event, i) => (
              <span key={`${event}-${i}`} className="text-muted">
                ({event})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews: full-width background image with overlay */}
      <section
        aria-label="Reviews"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16 flex min-h-[200px] w-screen items-center overflow-hidden"
      >
        <Image
          src={`${LANDING}/4.jpeg`}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" aria-hidden />
        <div className="relative z-10 w-full overflow-hidden border-y border-border/50 py-6">
          <div className="flex w-max gap-16 whitespace-nowrap animate-ticker">
            {[...reviewQuotes, ...reviewQuotes].map((quote, i) => (
              <span
                key={`${quote}-${i}`}
                className="font-display text-xl italic text-accent"
              >
                {quote}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Two scrolling galleries */}
      <section aria-label="Gallery" className="mt-16">
        <ScrollGallery
          imagePaths={landingImagePaths.slice(0, 6)}
          altPrefix={galleryAltPrefix}
          className="mb-4"
        />
        <ScrollGallery
          imagePaths={landingImagePaths.slice(6, 11)}
          altPrefix={galleryAltPrefix}
        />
      </section>
    </div>
  );
}
