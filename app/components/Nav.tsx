"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

const navLinks = [
  { href: "/", label: "Home", neonClass: "nav-link-neon-1" },
  { href: "/about", label: "About", neonClass: "nav-link-neon-2" },
  { href: "/experiences", label: "Experiences", neonClass: "nav-link-neon-3" },
  { href: "/consulting", label: "Consulting", neonClass: "nav-link-neon-4" },
  { href: "/booking", label: "Booking", neonClass: "nav-link-neon-5" },
] as const;

const menuId = "main-nav-menu";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-border bg-(--background)/95 backdrop-blur"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-xl font-semibold text-foreground no-underline"
          aria-label="Jester Dapper Dan – Home"
        >
          <span className="relative block h-12 w-auto max-w-[260px] [@media(min-width:480px)]:max-w-[320px]">
            <Image
              src="/jdd-full-signature.png"
              alt="Jester Dapper Dan"
              width={320}
              height={96}
              className="h-full w-auto object-contain object-left"
              priority
            />
          </span>
          <span className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-full sm:block">
            <Image
              src="/landing-images/1.jpg"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </span>
        </Link>

        {/* Desktop: horizontal links */}
        <ul className="hidden list-none flex-wrap items-center gap-6 lg:flex">
          {navLinks.map(({ href, label, neonClass }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link-neon ${neonClass} no-underline`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tablet & mobile: menu button */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-border focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Tablet & mobile: expandable menu */}
      <div
        id={menuId}
        className="overflow-hidden transition-[max-height,opacity] duration-200 ease-out lg:hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          opacity: menuOpen ? 1 : 0,
        }}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-border px-4 pb-4 pt-2">
          <ul className="flex list-none flex-col gap-1">
            {navLinks.map(({ href, label, neonClass }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link-neon block rounded-md px-3 py-3 text-lg no-underline ${neonClass}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
