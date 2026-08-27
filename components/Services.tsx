const services = [
  {
    title: "Talent Management",
    description:
      "Day-to-day career guidance, deal review, and long-term strategy for every person we represent.",
  },
  {
    title: "Brand Partnerships",
    description:
      "Sourcing and negotiating partnerships that fit our talent's voice, not just the highest bidder.",
  },
  {
    title: "Bookings & Logistics",
    description:
      "Scheduling, contracts, travel, and production coordination handled so talent can focus on the work.",
  },
  {
    title: "PR & Media",
    description:
      "Press outreach, media training, and public-facing strategy to build a career that lasts.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="max-w-xl">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-olive-600">
            What we do
          </p>
          <h2 className="text-4xl text-espresso-900 sm:text-5xl">
            Full-service management, San Diego rooted.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-300/50 bg-cream-50 p-8 transition-colors duration-200 hover:border-olive-500/60"
            >
              <span className="font-display text-sm text-terracotta-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl text-espresso-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
