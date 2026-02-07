import { homeContent } from "@/content";
import { ScrollGallery } from "./components/ScrollGallery";

export default function HomePage() {
  const { hero, skillsList, eventTypesList, reviewQuotes, landingImagePaths, signatureVideoPath } =
    homeContent;

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

      {/* Hero */}
      <section className="space-y-6 text-center">
        <p className="text-lg uppercase tracking-widest text-accent">
          {hero.tagline}
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          {hero.invocation}
        </h1>
        <p className="mx-auto max-w-2xl text-muted">{hero.identity}</p>
        <p className="font-display text-xl italic text-accent">
          {hero.energy}
        </p>
      </section>

      {/* Skills list - scrolling ticker */}
      <section aria-label="Skills and passions">
        <p className="mb-2 text-center text-sm uppercase tracking-wider text-muted">
          Jack of all trades · Trickster jester of many hats
        </p>
        <div className="overflow-hidden border-y border-border py-4">
          <div className="flex w-max gap-12 whitespace-nowrap animate-ticker">
            {[...skillsList, ...skillsList].map((skill, i) => (
              <span key={`${skill}-${i}`} className="text-lg text-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Event types - scrolling ticker */}
      <section className="text-center">
        <p className="mb-4 font-display text-2xl">
          Book me to bring my signature electrifying energy, exuberant whimsy &
          next-level excitement to transform your event:
        </p>
        <div className="overflow-hidden border-y border-border py-4">
          <div className="flex w-max gap-10 whitespace-nowrap animate-ticker-slow">
            {[...eventTypesList, ...eventTypesList].map((event, i) => (
              <span key={`${event}-${i}`} className="text-muted">
                ({event})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews ticker */}
      <section aria-label="Reviews">
        <div className="overflow-hidden border-y border-border bg-card py-4">
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
      <section aria-label="Gallery">
        <ScrollGallery
          imagePaths={landingImagePaths.slice(0, 6)}
          altPrefix="Jester Dapper Dan"
          className="mb-4"
        />
        <ScrollGallery
          imagePaths={landingImagePaths.slice(6, 11)}
          altPrefix="Jester Dapper Dan"
        />
      </section>
    </div>
  );
}
