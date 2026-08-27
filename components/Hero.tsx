import PlaceholderMedia from "./PlaceholderMedia";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28 lg:pt-28">
        <div>
          <p className="mb-5 flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-olive-600">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" aria-hidden="true" />
            San Diego, CA &middot; Talent Management
          </p>
          <h1 className="max-w-xl text-5xl leading-[1.05] text-espresso-900 sm:text-6xl lg:text-7xl">
            Representing talent with intention.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso-700">
            Jade Collective is a boutique talent management agency built for
            creators, on-camera talent, and performers who want a team that
            treats their career like a craft, not a portfolio line.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-terracotta-600 px-7 py-3.5 font-body text-sm font-medium text-cream-50 transition-colors duration-200 hover:bg-terracotta-700"
            >
              Start a conversation
            </a>
            <a
              href="#roster"
              className="cursor-pointer rounded-full border border-espresso-900/20 px-7 py-3.5 font-body text-sm font-medium text-espresso-900 transition-colors duration-200 hover:border-olive-600 hover:text-olive-600"
            >
              Meet our roster
            </a>
          </div>
        </div>

        <div className="relative">
          <PlaceholderMedia
            label="Jade Collective"
            sublabel="San Diego"
            tone="olive"
            className="aspect-[4/5] w-full rounded-3xl shadow-sm"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-stone-300/60 bg-cream-50 px-6 py-4 shadow-md sm:block">
            <p className="font-display text-2xl text-espresso-900">Boutique</p>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-espresso-700">
              Independent &amp; local
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
