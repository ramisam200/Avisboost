import SectionHeading from "./SectionHeading.jsx";

const ROWS = [
  {
    label: "Demander un avis",
    classic: "À la voix, quand on y pense",
    avisboost: "Un e-mail envoyé juste après la visite",
  },
  {
    label: "Effort de l'équipe",
    classic: "Répété, gênant, vite abandonné",
    avisboost: "Deux champs à remplir, quelques secondes",
  },
  {
    label: "Côté client",
    classic: "Chercher la fiche Google soi-même",
    avisboost: "Un e-mail avec un bouton direct vers Google",
  },
  {
    label: "Suivi des résultats",
    classic: "Aucun, on regarde la note de temps en temps",
    avisboost: "Votre note Google qui évolue, semaine après semaine",
  },
  {
    label: "Mise en route",
    classic: "Rien de structuré",
    avisboost: "Prêt à l'emploi en quelques minutes",
  },
  {
    label: "Engagement",
    classic: "Aucun outil, aucun suivi",
    avisboost: "Sans engagement, résiliable à tout moment",
  },
];

export default function Comparison() {
  return (
    <section id="comparatif" className="relative border-y border-line bg-mist py-24 sm:py-32">
      <div className="shell mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Pourquoi AvisBoost"
          title="Ce qui change, concrètement."
          subtitle="La méthode classique fonctionne — les trois premières semaines. Ensuite, plus personne n'y pense."
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white shadow-sm">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-3 border-b border-line bg-mist/60 text-sm font-semibold">
              <div className="p-4 text-ink-muted" />
              <div className="p-4 text-ink-muted">Méthode classique</div>
              <div className="p-4 text-green-dark">AvisBoost</div>
            </div>
            {ROWS.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-line last:border-b-0">
                <div className="p-4 text-sm font-semibold text-ink">{row.label}</div>
                <div className="p-4 text-sm text-ink-muted">{row.classic}</div>
                <div className="p-4 text-sm font-medium text-ink">{row.avisboost}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
