const LINKS = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-[var(--shell-x)] pb-12 pt-16 sm:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-line pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#" className="flex items-center gap-2 text-base font-extrabold tracking-tight text-ink">
          <span className="grid size-8 place-items-center rounded-lg bg-green text-sm text-white">
            AB
          </span>
          AvisBoost
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} AvisBoost. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
