"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", neonClass: "nav-link-neon-1" },
  { href: "/about", label: "About", neonClass: "nav-link-neon-2" },
  { href: "/experiences", label: "Experiences", neonClass: "nav-link-neon-3" },
  { href: "/consulting", label: "Consulting", neonClass: "nav-link-neon-4" },
  { href: "/booking", label: "Booking", neonClass: "nav-link-neon-5" },
] as const;

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-border bg-(--background)/95 backdrop-blur"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-semibold text-foreground no-underline"
          aria-label="Jester Dapper Dan – Home"
        >
          {/* Jester Dapper Dan signature: tablet and desktop only */}
          <span className="relative hidden h-12 w-auto max-w-[260px] md:block [@media(min-width:480px)]:max-w-[320px]">
            <Image
              src="/jdd-full-signature.png"
              alt="Jester Dapper Dan"
              width={320}
              height={96}
              className="h-full w-auto object-contain object-left"
              priority
            />
          </span>
          {/* Profile picture: tablet and desktop only */}
          <span className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-full md:block">
            <Image
              src="/landing-images/1.jpg"
              alt="jdd profile picture"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </span>
        </Link>

        {/* Nav links: always visible (no menu on tablet/mobile) */}
        <ul className="flex list-none flex-wrap items-center gap-3 sm:gap-6">
          {navLinks.map(({ href, label, neonClass }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link-neon text-sm no-underline sm:text-base ${neonClass}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
