type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  tone?: "dark" | "light";
};

export default function Logo({ variant = "full", className = "", tone = "dark" }: LogoProps) {
  const textColor = tone === "dark" ? "text-espresso-900" : "text-cream-50";
  const dotColor = tone === "dark" ? "bg-terracotta-500" : "bg-terracotta-500";

  if (variant === "mark") {
    return (
      <span
        className={`font-logo text-xl uppercase leading-none tracking-tight ${textColor} ${className}`}
        aria-label="Jade Collective"
      >
        JC
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 font-logo uppercase leading-none tracking-tight ${textColor} ${className}`}
    >
      <span className="text-lg sm:text-xl">Jade</span>
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
      <span className="text-lg sm:text-xl">Collective</span>
    </span>
  );
}
