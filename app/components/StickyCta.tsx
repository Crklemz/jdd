import Link from "next/link";
import { homeContent } from "@/content";

export function StickyCta() {
  return (
    <div
      className="sticky bottom-0 z-30 border-t border-border bg-card py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Link
          href={homeContent.ctaButtonHref}
          className="inline-block rounded-full bg-accent px-8 py-3 font-display text-lg font-semibold text-background no-underline transition hover:bg-accent-hover"
        >
          {homeContent.ctaButtonLabel}
        </Link>
      </div>
    </div>
  );
}
