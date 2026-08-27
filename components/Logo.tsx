type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Placeholder wordmark: a faceted gem line-mark (nodding to "Jade") paired with
 * a Playfair Display wordmark. Swap for a finished logo file whenever ready —
 * this keeps the header/footer working without a raster asset in the meantime.
 */
export default function Logo({ variant = "full", className = "", tone = "dark" }: LogoProps) {
  const textColor = tone === "dark" ? "text-espresso-900" : "text-cream-50";
  const markColor = tone === "dark" ? "text-olive-600" : "text-sage-300";

  const mark = (
    <svg
      viewBox="0 0 48 48"
      className={`h-8 w-8 shrink-0 ${markColor}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 4 L38 15 L32.5 40 L15.5 40 L10 15 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 15 L38 15 M17.5 15 L15.5 40 M30.5 15 L32.5 40 M24 4 L17.5 15 M24 4 L30.5 15 M15.5 40 L24 24 L32.5 40 M17.5 15 L24 24 L30.5 15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className={`font-display leading-none ${textColor}`}>
        <span className="block text-lg tracking-tight">Jade Collective</span>
      </span>
    </span>
  );
}
