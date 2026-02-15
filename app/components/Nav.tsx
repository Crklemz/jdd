import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/booking", label: "Booking" },
] as const;

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-border bg-(--background)/95 backdrop-blur"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link
          href="/"
          className="flex items-center font-display text-xl font-semibold text-foreground no-underline"
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
        </Link>
        <ul className="flex flex-wrap items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-muted transition hover:text-accent"
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
