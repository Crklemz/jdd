import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content";
import { HeroVideo } from "./components/HeroVideo";
import { RotatingQuote } from "./components/RotatingQuote";
import { ScrapbookSection } from "./components/ScrapbookSection";
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
    scrapbookImagePaths,
    landingImagePaths,
    signatureVideoPath,
    videoAriaLabel,
    videoAspectRatio,
    galleryAltPrefix,
    sectionImageAlts,
  } = homeContent;

  return (
    <div className="relative min-h-screen space-y-0 py-8">
      <div className="relative">
        {/* Tagline at top */}
        <section
          aria-label="Tagline"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-10 pt-2"
        >
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-4 text-center sm:gap-6 md:flex-row md:gap-4">
            <Image
              src="/jdd-full-signature.png"
              alt="Jester Dapper Dan"
              width={320}
              height={96}
              className="order-1 w-full max-w-[240px] sm:max-w-[280px] md:max-w-3xl"
            />
            <Image
              src="/landing-images/1.jpg"
              alt="jdd profile picture"
              width={200}
              height={100}
              className="order-2 w-full max-w-[160px] rounded-lg sm:max-w-[200px] md:order-3 md:max-w-2xl"
            />
            <p className="order-3 text-base uppercase tracking-widest neon-text-pink text-shadow-neon-pink sm:text-lg md:order-2">
              {hero.tagline}
            </p>
          </div>
        </section>

        {/* Signature video (same as about page: aspect ratio + purple frame); full-bleed section so video can be 90vw on desktop */}
        <section
          aria-label="Introduction video"
          className="relative left-1/2 right-1/2 flex -ml-[50vw] -mr-[50vw] w-screen justify-center pb-8 px-4 lg:px-0"
        >
          <div
            className="relative w-full lg:w-[80vw] lg:max-w-[80vw]"
            style={{ aspectRatio: videoAspectRatio }}
          >
            <HeroVideo
              src={signatureVideoPath}
              ariaLabel={videoAriaLabel}
              className="absolute inset-0 h-full w-full object-cover"
              frameVariant="purple"
            />
          </div>
        </section>

        {/* Identity & energy: transparent so neon background shows */}
        <section
          aria-label="About"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-10 lg:pt-16 lg:pb-8"
        >
          <div className="mx-auto flex flex-col gap-4 px-4 sm:gap-6 md:gap-10 lg:gap-16">
            <div className="relative z-10 mx-4 max-w-4xl text-center md:mx-auto">
              <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl neon-text-blue text-shadow-neon-blue">
                {hero.invocation}
              </h1>
            </div>
            <div className="space-y-8 text-center">
              <p className="mx-auto max-w-4xl font-display text-2xl leading-snug text-foreground md:text-3xl">
                {hero.identity}
              </p>
              <p className="mx-auto max-w-4xl font-display text-2xl leading-snug text-foreground md:text-3xl">
                {hero.identity2}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about-images/13-no-bg.png"
                alt=""
                width={520}
                height={520}
                className="h-auto w-full max-w-xl object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.7),0_0_50px_rgba(255,255,255,0.4)]"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 pt-6 md:pt-8">
              <p className="text-center text-xl uppercase tracking-wider neon-text-purple text-shadow-neon-purple md:text-2xl">
                {skillsHeading}
              </p>
              <div className="ticker-strip overflow-hidden border-y border-border py-6">
                <div className="flex w-max gap-12 whitespace-nowrap animate-ticker">
                  {[...skillsList, ...skillsList].map((skill, i) => {
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
                        key={`${skill}-${i}`}
                        className={`text-lg ${colorClass}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <ScrapbookSection
              imagePaths={scrapbookImagePaths}
              altPrefix={galleryAltPrefix}
            />
            <div className="space-y-6 text-center md:space-y-8 lg:space-y-10">
              <p className="mx-auto max-w-4xl font-display text-2xl italic md:text-3xl neon-text-pink text-shadow-neon-pink">
                <span className="fancy-underline fancy-underline-neon-rainbow">"{hero.energy1}"</span>
              </p>
              <p className="mx-auto max-w-2xl font-display text-2xl italic md:text-3xl neon-text-blue text-shadow-neon-blue">
                <span className="fancy-underline fancy-underline-neon-rainbow">"{hero.energy2}"</span>
              </p>
            </div>
          </div>
        </section>

        {/* Event types */}
        <section
          aria-label="Event types"
          className="mt-12 flex flex-col overflow-hidden md:mt-10 lg:mt-8"
        >
          <div className="flex w-full flex-col items-stretch gap-0 p-4 sm:p-6 md:p-8 lg:flex-row lg:items-center">
            <div className="order-2 mt-6 flex min-w-0 flex-1 flex-col lg:order-1 lg:mt-0 lg:min-w-4/7 lg:pr-6 xl:pr-8">
              <div className="flex flex-1 flex-col items-center">
                <p className="font-display mb-4 text-center text-xl text-foreground sm:mb-5 sm:text-2xl md:text-3xl">
                  {eventTypesIntro}
                </p>
              </div>
              <div className="relative z-10 mt-auto w-full overflow-hidden border-y border-b-accent border-t-accent border-border/50 py-4 sm:py-6">
                <div className="flex w-max gap-6 whitespace-nowrap animate-ticker sm:gap-10">
                  {[...eventTypesList, ...eventTypesList].map((event, i) => (
                    <span
                      key={`${event}-${i}`}
                      className="font-display text-base italic text-accent sm:text-lg md:text-xl"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="hidden shrink-0 w-px bg-border lg:order-2 lg:block"
              aria-hidden
            />
            <div className="order-first mt-0 w-full shrink-0 overflow-hidden lg:order-3 lg:mt-0 lg:w-3/7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${LANDING}/4.jpeg`}
                alt={sectionImageAlts.eventTypes}
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Reviews: trippy animated background with rotating quote (matches gallery section width) */}
        <section
          aria-label="Reviews"
          className="relative mt-8 flex min-h-[120px] w-full items-center overflow-hidden rounded-t-lg md:mt-10 lg:mt-12"
        >
          <div className="absolute inset-0" aria-hidden />
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="flex justify-center">
              <RotatingQuote quotes={reviewQuotes} />
            </div>
            <div aria-label="Gallery" className="-mt-6">
              <ScrollGallery
                imagePaths={landingImagePaths.slice(0, 6)}
                altPrefix={galleryAltPrefix}
                className="mb-4"
                scrollDurationSeconds={25}
                direction="ltr"
              />
              <ScrollGallery
                imagePaths={landingImagePaths.slice(6, 11)}
                altPrefix={galleryAltPrefix}
                scrollDurationSeconds={25}
              />
            </div>
          </div>
        </section>

        {/* Same CTA as sticky top, bottom of page */}
        <section
          aria-label="Book Jester Dapper Dan"
          className="flex justify-center py-12"
        >
          <Link
            href={homeContent.ctaButtonHref}
            className="cta-button-black-neon inline-block rounded-full px-6 py-2.5 no-underline transition hover:opacity-90 sm:px-8 sm:py-3"
          >
            <span className="cta-rainbow-pulsate-text inline-block font-display text-base font-semibold sm:text-lg">
              Book Jester Dapper Dan!
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
}
