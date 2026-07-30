import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const LINKS = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#etude-de-cas", label: "Résultats" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

function Button({ as: As = "a", className = "", children, ...props }) {
  return (
    <As
      className={`group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold tracking-[-0.01em] transition-[background-color,border-color,transform,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 bg-green text-white shadow-glow hover:bg-green-deep active:bg-green-dark ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-white/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell mx-auto flex h-20 max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
          <span className="grid size-9 place-items-center rounded-xl bg-green text-white shadow-glow">
            AB
          </span>
          AvisBoost
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#tarifs" className="hidden h-11 px-5 text-[0.9375rem] sm:inline-flex">
            Essayer gratuitement
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-line bg-white/70 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-[var(--shell-x)] py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-muted hover:bg-mist hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href="#tarifs" onClick={() => setOpen(false)} className="mt-4 h-12 w-full text-base">
            Essayer gratuitement
          </Button>
        </div>
      )}
    </header>
  );
}

export { Button };
