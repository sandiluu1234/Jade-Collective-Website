import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-stone-300/50 bg-cream-100/60 py-12">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-6 sm:px-8 md:flex-row md:items-center">
        <Logo />
        <div className="font-body text-sm text-espresso-700">
          <p>San Diego, CA &middot; partnerships@jadecollectiveagency.com</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Jade Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
