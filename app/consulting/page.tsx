export default function ConsultingPage() {
  return (
    <div className="relative min-h-screen space-y-0 py-8">
      <section
        aria-label="Consulting"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-10 pt-2"
      >
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8">
          <h1 className="text-4xl font-bold md:text-5xl neon-text-green text-shadow-neon-green">
            Consulting
          </h1>
          <p className="mx-auto text-lg mt-4 text-muted-foreground">
            Consulting services and offerings will be available here soon.
          </p>
        </div>
      </section>
    </div>
  );
}
