import PlaceholderMedia from "./PlaceholderMedia";

export default function About() {
  return (
    <section id="about" className="bg-espresso-900 py-24 text-cream-50">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
        <PlaceholderMedia
          label="Jade Collective"
          sublabel="Our team"
          tone="terracotta"
          className="aspect-square w-full rounded-3xl order-2 lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-sage-300">
            About us
          </p>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            A boutique agency, built on the coast.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-cream-100/90">
            Jade Collective was started in San Diego with a simple belief:
            talent deserves representation that&apos;s personal, not
            transactional. We keep our roster intentionally small so every
            client gets direct access to their team &mdash; not a rotating
            cast of assistants.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-cream-100/90">
            Whether you&apos;re a brand, a creator, or someone ready to be
            represented, we work from the same standard: clear communication,
            careful deal-making, and a genuine investment in long-term
            careers.
          </p>
        </div>
      </div>
    </section>
  );
}
