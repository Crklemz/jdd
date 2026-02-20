"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FadeInOnScrollProps {
  children: ReactNode;
  /**
   * Delay in ms before starting the fade-in (stagger effect).
   * @default 0
   */
  delay?: number;
  /**
   * Optional root margin for the intersection observer (e.g. "100px" to trigger earlier).
   */
  rootMargin?: string;
  className?: string;
}

export function FadeInOnScroll({
  children,
  delay = 0,
  rootMargin = "0px 0px -40px 0px",
  className,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
