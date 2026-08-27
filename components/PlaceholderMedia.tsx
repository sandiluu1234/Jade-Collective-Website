type PlaceholderMediaProps = {
  label: string;
  sublabel?: string;
  tone?: "olive" | "terracotta" | "sage" | "stone";
  className?: string;
};

const toneStyles: Record<NonNullable<PlaceholderMediaProps["tone"]>, string> = {
  olive: "from-olive-600 to-olive-700 text-cream-50",
  terracotta: "from-terracotta-500 to-terracotta-700 text-cream-50",
  sage: "from-sage-300 to-sage-400 text-espresso-900",
  stone: "from-stone-300 to-stone-400 text-espresso-900",
};

/**
 * Stand-in for a real photo: a labeled gradient block in the brand palette.
 * Swap the <PlaceholderMedia> usage for a real <Image> once assets land —
 * avoids shipping a stock photo of a person who isn't actually represented.
 */
export default function PlaceholderMedia({
  label,
  sublabel,
  tone = "olive",
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br ${toneStyles[tone]} ${className}`}
      role="img"
      aria-label={sublabel ? `${label}, ${sublabel}` : label}
    >
      <span className="font-display text-base sm:text-lg">{label}</span>
      {sublabel && <span className="text-xs uppercase tracking-[0.15em] opacity-80">{sublabel}</span>}
    </div>
  );
}
