import Image from "next/image";
import PlaceholderMedia from "./PlaceholderMedia";
import SocialLinks from "./SocialLinks";
import { talent } from "@/lib/talent";

export default function TalentRoster() {
  return (
    <section id="roster" className="bg-cream-100/60 py-24">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="max-w-xl">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-olive-600">
            The roster
          </p>
          <h2 className="text-4xl text-espresso-900 sm:text-5xl">
            Talent we&apos;re proud to represent.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {talent.map((person, index) => (
            <div key={`${person.name}-${index}`} className="group">
              <div className="overflow-hidden rounded-2xl">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={480}
                    height={600}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <PlaceholderMedia
                    label={person.name}
                    sublabel={person.openSlot ? "Open slot" : "Photo coming soon"}
                    tone={person.tone}
                    className="aspect-[4/5] w-full"
                  />
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl text-espresso-900">
                  {person.name}
                </h3>
                <p className="font-body text-sm uppercase tracking-[0.1em] text-terracotta-600">
                  {person.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-espresso-700">
                  {person.bio}
                </p>
                {person.socials && (
                  <SocialLinks socials={person.socials} name={person.name} className="mt-3" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
