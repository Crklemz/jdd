"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type NeonCardVariant = "blue" | "purple" | "magenta" | "green" | "pink" | "orange" | "indigo";

export interface NeonCardProps {
  /**
   * Neon color variant for border glow
   * @default "blue"
   */
  variant?: NeonCardVariant;
  /**
   * Card title
   */
  title?: string;
  /**
   * Card description
   */
  description?: string;
  /**
   * Optional icon component (from lucide-react)
   */
  icon?: LucideIcon;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Child content
   */
  children?: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * When true, title and description use the same color as the card border (variant)
   */
  useVariantColorForText?: boolean;
  /**
   * Text size: default (smaller) or large
   * @default "default"
   */
  size?: "default" | "large";
}

const variantClasses: Record<NeonCardVariant, string> = {
  blue: "border-neon-blue shadow-neon-blue",
  purple: "border-neon-purple shadow-neon-purple",
  magenta: "border-neon-magenta shadow-neon-magenta",
  green: "border-neon-green shadow-neon-green",
  pink: "border-neon-pink shadow-neon-pink",
  orange: "border-neon-orange shadow-neon-orange",
  indigo: "border-neon-indigo shadow-neon-indigo",
};

const iconColorClasses: Record<NeonCardVariant, string> = {
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  magenta: "text-neon-magenta",
  green: "text-neon-green",
  pink: "text-neon-pink",
  orange: "text-neon-orange",
  indigo: "text-neon-indigo",
};

/**
 * NeonCard Component
 *
 * Card with subtle neon border glow. Clean, professional styling inspired by LED Strip Studio.
 */
export function NeonCard({
  variant = "blue",
  title,
  description,
  icon: Icon,
  className,
  children,
  onClick,
  useVariantColorForText = false,
  size = "default",
}: NeonCardProps) {
  const textColorClass = useVariantColorForText
    ? iconColorClasses[variant]
    : "text-foreground";
  const descriptionColorClass = useVariantColorForText
    ? cn(iconColorClasses[variant], "opacity-90")
    : "text-foreground/80";

  const titleSizeClass =
    size === "large"
      ? "text-2xl font-semibold mb-2 font-display md:text-3xl"
      : "text-xl font-semibold mb-2 font-display md:text-2xl";
  const descriptionSizeClass =
    size === "large"
      ? "text-base leading-relaxed mb-4 md:text-lg"
      : "text-sm leading-relaxed mb-4";

  return (
    <div
      className={cn(
        "bg-dark-brick border-2 rounded-lg p-6 md:p-8",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-lg",
        variantClasses[variant],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className={cn("h-8 w-8", iconColorClasses[variant])} />
        </div>
      )}
      {title && (
        <h3 className={cn(titleSizeClass, textColorClass)}>{title}</h3>
      )}
      {description && (
        <p className={cn(descriptionSizeClass, descriptionColorClass)}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
