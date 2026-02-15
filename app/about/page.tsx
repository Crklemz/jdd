import Image from "next/image";
import { aboutContent } from "@/content";
import { HeroVideo } from "../components/HeroVideo";
import { ScatteredTestimonials } from "../components/ScatteredTestimonials";
import { ScrollGallery } from "../components/ScrollGallery";

export default function AboutPage() {
  const {
    welcomeHeading,
    preJesterHeading,
    preJesterParagraphs,
    becomingHeading,
    becomingParagraphs,
    whatSetsApartHeading,
    whatSetsApartItems,
    whyChooseHeading,
    whyChooseItems,
    testimonialQuotes,
    aboutImagePaths,
    signatureVideoPath,
    videoAriaLabel,
    videoAspectRatio,
    galleryAltPrefix,
  } = aboutContent;

  return (
    <div className="relative min-h-screen space-y-0 py-8">
      {/* Welcome */}
      <section
        aria-label="Welcome"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-12"
      >
        <div className="relative z-10 mx-4 max-w-2xl space-y-4 text-center md:mx-auto">
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {welcomeHeading}
          </h1>
        </div>
      </section>

      {/* Pre-jester biography + image */}
      <section
        aria-label="Biography"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 md:flex-row md:items-start md:gap-16">
          <div className="min-w-0 flex-1 space-y-6">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide neon-text-purple text-shadow-neon-purple md:text-3xl">
              {preJesterHeading}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {preJesterParagraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg border border-border md:h-80 md:w-80">
            <Image
              src="/about-images/16.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      {/* Becoming Jester Dapper Dan + image */}
      <section
        aria-label="Becoming Jester Dapper Dan"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-y border-border/50 py-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 md:flex-row-reverse md:items-start md:gap-16">
          <div className="min-w-0 flex-1 space-y-6">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide neon-text-blue text-shadow-neon-blue md:text-3xl">
              {becomingHeading}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {becomingParagraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg border border-border md:h-80 md:w-80">
            <Image
              src="/about-images/14.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      {/* What sets me apart */}
      <section
        aria-label="What sets me apart"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16"
      >
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-center">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-wide neon-text-pink text-shadow-neon-pink md:text-3xl">
            {whatSetsApartHeading}
          </h2>
          <ul className="space-y-5 text-left text-muted-foreground">
            {whatSetsApartItems.map((item, i) => (
              <li key={i} className="flex gap-3 text-lg leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose me — ticker-style strip to match home */}
      <section
        aria-label="Why choose me"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-12"
      >
        <div className="mx-auto max-w-4xl space-y-8 px-4">
          <h2 className="text-center font-display text-2xl font-semibold uppercase tracking-wide neon-text-purple text-shadow-neon-purple md:text-3xl">
            {whyChooseHeading}
          </h2>
          <div className="ticker-strip overflow-hidden border-y border-border py-6">
            <div className="flex w-max gap-10 whitespace-nowrap animate-ticker">
              {[...whyChooseItems, ...whyChooseItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="font-display text-lg italic text-foreground md:text-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-label="Testimonials"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-12"
      >
        <div className="relative z-10 px-4">
          <ScatteredTestimonials quotes={testimonialQuotes} />
        </div>
      </section>

      {/* Two scrolling galleries (pictures 12–21) */}
      <section aria-label="Gallery" className="relative overflow-hidden py-8">
        <div className="mx-auto max-w-6xl space-y-2 px-4">
          <ScrollGallery
            imagePaths={aboutImagePaths.slice(0, 5)}
            altPrefix={galleryAltPrefix}
            className="mb-4"
            scrollDurationSeconds={65}
            direction="ltr"
          />
          <ScrollGallery
            imagePaths={aboutImagePaths.slice(5, 10)}
            altPrefix={galleryAltPrefix}
            scrollDurationSeconds={70}
          />
        </div>
      </section>

      {/* Signature video (loop) — purple frame; container aspect ratio matches video so border hugs with no gap */}
      <section
        aria-label="Introduction video"
        className="relative flex w-full justify-center px-4 pt-8 pb-16"
      >
        <div
          className="relative w-full max-w-4xl"
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
    </div>
  );
}
