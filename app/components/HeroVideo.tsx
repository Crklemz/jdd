"use client";

import { useState } from "react";

interface HeroVideoProps {
  src: string;
  ariaLabel: string;
  className?: string;
}

export function HeroVideo({ src, ariaLabel, className = "" }: HeroVideoProps) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="hero-video-neon-frame absolute inset-0 overflow-hidden rounded-lg">
      <video
        src={src}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className={className}
        aria-label={ariaLabel}
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg transition hover:bg-background/95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        aria-label={isMuted ? "Turn on sound" : "Turn off sound"}
      >
        {isMuted ? (
          <SpeakerMutedIcon className="h-5 w-5" />
        ) : (
          <SpeakerIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

function SpeakerMutedIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5L6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="16" y2="16" />
      <line x1="16" y1="9" x2="23" y2="16" />
    </svg>
  );
}

function SpeakerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5L6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
