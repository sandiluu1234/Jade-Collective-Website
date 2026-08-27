type SocialLinksProps = {
  socials: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
  name: string;
  className?: string;
};

export default function SocialLinks({ socials, name, className = "" }: SocialLinksProps) {
  const links = [
    socials.instagram && {
      key: "instagram",
      label: "Instagram",
      href: socials.instagram,
      path: "M12 2c-2.72 0-3.06.01-4.13.06-1.07.05-1.8.22-2.44.47-.66.26-1.22.6-1.78 1.16-.56.56-.9 1.12-1.16 1.78-.25.64-.42 1.37-.47 2.44C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.13c.05 1.07.22 1.8.47 2.44.26.66.6 1.22 1.16 1.78.56.56 1.12.9 1.78 1.16.64.25 1.37.42 2.44.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.13-.06c1.07-.05 1.8-.22 2.44-.47.66-.26 1.22-.6 1.78-1.16.56-.56.9-1.12 1.16-1.78.25-.64.42-1.37.47-2.44.05-1.07.06-1.41.06-4.13s-.01-3.06-.06-4.13c-.05-1.07-.22-1.8-.47-2.44-.26-.66-.6-1.22-1.16-1.78-.56-.56-1.12-.9-1.78-1.16-.64-.25-1.37-.42-2.44-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35-.47-.18-.8-.4-1.15-.75-.35-.35-.57-.68-.75-1.15-.14-.36-.31-.88-.35-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
            },
    socials.tiktok && {
      key: "tiktok",
      label: "TikTok",
      href: socials.tiktok,
      path: "M16.6 2h-3.2v13.2a3 3 0 1 1-2.35-2.93v-3.25a6.2 6.2 0 1 0 5.55 6.16V8.4a7.9 7.9 0 0 0 4.6 1.47V6.7a4.6 4.6 0 0 1-4.6-4.6Z",
    },
    socials.youtube && {
      key: "youtube",
      label: "YouTube",
      href: socials.youtube,
      path: "M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.12-.9C15.65 4 12 4 12 4h-.01s-3.65 0-6.63.15c-.42.05-1.31.05-2.12.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 8.95 2.2 10.7v1.6c0 1.75.2 3.5.2 3.5s.2 1.5.85 2.15c.8.85 1.86.82 2.33.91C7.3 19 12 19 12 19s3.65-.01 6.63-.16c.42-.05 1.31-.05 2.12-.9.65-.65.85-2.15.85-2.15s.2-1.75.2-3.5v-1.6c0-1.75-.2-3.5-.2-3.5ZM9.95 14.1V8.9L15.3 11.5l-5.35 2.6Z",
    },
  ].filter(Boolean) as { key: string; label: string; href: string; path: string }[];

  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on ${link.label}`}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-stone-300 text-espresso-700 transition-colors duration-200 hover:border-olive-600 hover:text-olive-600"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d={link.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
