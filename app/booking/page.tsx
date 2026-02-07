import { bookingContent } from "@/content";
import { ScrollGallery } from "../components/ScrollGallery";

const TALLY_FORM_URL = process.env.TALLY_FORM_URL;

export default function BookingPage() {
  const { heading, introParagraphs, workflowSteps, landingImagePaths } =
    bookingContent;

  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          {heading}
        </h1>
        <div className="mx-auto mt-4 max-w-2xl space-y-2 text-muted">
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Booking form - Tally embed */}
      <section id="inquiry" className="min-h-[400px]">
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
      </section>

      {/* Workflow */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-accent">
          What to expect
        </h2>
        <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
          {workflowSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section aria-label="Gallery">
        <ScrollGallery
          imagePaths={landingImagePaths}
          altPrefix="Jester Dapper Dan"
        />
      </section>
    </div>
  );
}
