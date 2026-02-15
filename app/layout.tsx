import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Nav } from "./components/Nav";
import { NeonBackground } from "./components/NeonBackground";
import { StickyCta } from "./components/StickyCta";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jester Dapper Dan | Fantasy Court Jester & Entertainment",
  description:
    "Chic, whimsical, effervescent™ – Jester Dapper Dan brings incomparable elegance, wit and enthusiasm to your event. Book the most fun, creative merryman in town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen antialiased">
        <NeonBackground />
        <Nav />
        <StickyCta />
        <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">{children}</main>
      </body>
    </html>
  );
}
