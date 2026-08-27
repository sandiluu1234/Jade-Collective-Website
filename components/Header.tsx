import Logo from "./Logo";
import MobileNav from "./MobileNav";

const links = [
  { href: "#roster", label: "Roster" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/40 bg-cream-50/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="cursor-pointer">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer font-body text-sm uppercase tracking-[0.12em] text-espresso-800 transition-colors duration-200 hover:text-olive-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden cursor-pointer rounded-full bg-olive-600 px-5 py-2.5 font-body text-sm font-medium text-cream-50 transition-colors duration-200 hover:bg-olive-700 sm:inline-block"
          >
            Work with us
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
