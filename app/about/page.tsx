import { aboutContent } from "@/content";
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
  } = aboutContent;

  return (
    <div className="space-y-16 py-8">
      {/* Video */}
      <section className="overflow-hidden rounded-xl">
        <video
          src={signatureVideoPath}
          autoPlay
          muted
          loop
          playsInline
          className="h-auto w-full object-cover"
          aria-label="Jester Dapper Dan signature video"
        />
      </section>

      <section className="text-center">
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          {welcomeHeading}
        </h1>
      </section>

      {/* Pre-jester biography */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-accent">
          {preJesterHeading}
        </h2>
        <div className="mt-4 space-y-4 text-muted">
          {preJesterParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Becoming Jester Dapper Dan */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-accent">
          {becomingHeading}
        </h2>
        <div className="mt-4 space-y-4 text-muted">
          {becomingParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* What sets apart */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-accent">
          {whatSetsApartHeading}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
          {whatSetsApartItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Why choose me */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-accent">
          {whyChooseHeading}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
          {whyChooseItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials ticker */}
      <section aria-label="Testimonials">
        <div className="overflow-hidden border-y border-border bg-card py-4">
          <div className="flex w-max gap-16 whitespace-nowrap animate-ticker">
            {[...testimonialQuotes, ...testimonialQuotes].map((quote, i) => (
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
      <section aria-label="Gallery">
        <ScrollGallery
          imagePaths={aboutImagePaths.slice(0, 5)}
          altPrefix="About Jester Dapper Dan"
          className="mb-4"
        />
        <ScrollGallery
          imagePaths={aboutImagePaths.slice(5, 10)}
          altPrefix="About Jester Dapper Dan"
        />
      </section>
    </div>
  );
}
