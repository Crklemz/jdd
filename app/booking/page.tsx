import { bookingContent } from "@/content";
import { ScrollGallery } from "../components/ScrollGallery";

const TALLY_FORM_URL = process.env.TALLY_FORM_URL;

export default function BookingPage() {
  const { heading, introParagraphs, workflowSteps, landingImagePaths } =
    bookingContent;

  return (
    <div className="relative min-h-screen space-y-0 py-8">
      <section
        aria-label="Booking"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-10 pt-2"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl neon-text-blue text-shadow-neon-blue">
            {heading}
          </h1>
          <div className="mx-auto text-lg mt-4 space-y-2 text-muted-foreground">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        aria-label="What to expect"
        className="px-4 md:px-4 md:mt-6 lg:mt-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-accent">
            What to expect
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            {workflowSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Booking form - Tally embed */}
      <section
        id="inquiry"
        aria-label="Inquiry form"
        className="mt-12 min-h-[400px] px-4 sm:px-6 md:px-8 md:mt-10 lg:mt-8"
      >
        <div className="mx-auto max-w-4xl">
          {TALLY_FORM_URL ? (
            <iframe
              data-tally-embed
              src={TALLY_FORM_URL}
              title="Booking inquiry form"
              className="h-[800px] w-full overflow-hidden rounded-xl border-0"
            />
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-muted">
                Set <code className="rounded bg-background px-1.5 py-0.5">TALLY_FORM_URL</code> in
                your <code className="rounded bg-background px-1.5 py-0.5">.env.local</code> to
                show the booking form.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section
        aria-label="Gallery"
        className="mt-8 px-4 md:mt-10 md:px-6 lg:mt-12"
      >
        <ScrollGallery
          imagePaths={landingImagePaths}
          altPrefix="Jester Dapper Dan"
        />
      </section>
    </div>
  );
}
