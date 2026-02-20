import Link from "next/link";
import { homeContent } from "@/content";

export function StickyCta() {
  return (
    <div
      className="sticky top-25 z-30 flex justify-center py-2"
      role="banner"
      aria-label="Call to action"
    >
      <Link
        href={homeContent.ctaButtonHref}
        className="cta-button-black-neon inline-block rounded-full px-6 py-2.5 no-underline transition hover:opacity-90 sm:px-8 sm:py-3"
      >
        <span className="cta-rainbow-pulsate-text inline-block text-base font-semibold sm:text-lg">
          {homeContent.ctaButtonLabel}
        </span>
      </Link>
    </div>
  );
}
