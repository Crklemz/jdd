"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const ROTATION_INTERVAL_MS = 4000;
const FADE_DURATION_MS = 300;

interface RotatingQuoteProps {
  quotes: string[];
  className?: string;
}

export function RotatingQuote({ quotes, className = "" }: RotatingQuoteProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNext = useCallback(() => {
    if (quotes.length <= 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % quotes.length);
      setIsFading(false);
    }, FADE_DURATION_MS);
  }, [quotes.length]);

  useEffect(() => {
    if (quotes.length <= 1) return;
    intervalRef.current = setInterval(goToNext, ROTATION_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext, quotes.length]);

  const handleMouseEnter = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (quotes.length <= 1) return;
    intervalRef.current = setInterval(goToNext, ROTATION_INTERVAL_MS);
  }, [goToNext, quotes.length]);

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    if (quotes.length <= 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, FADE_DURATION_MS);
  };

  if (quotes.length === 0) return null;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 py-8 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="transition-opacity duration-300 ease-in-out"
        style={{ opacity: isFading ? 0 : 1 }}
      >
        <p className="font-display text-center px-4 text-xl italic text-accent md:text-2xl">
          -"{quotes[currentIndex]}"
        </p>
      </div>
      {quotes.length > 1 && (
        <div className="flex gap-2" role="tablist" aria-label="Review quotes">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Quote ${i + 1} of ${quotes.length}`}
              onClick={() => goToIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                i === currentIndex ? "bg-accent" : "bg-muted/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
