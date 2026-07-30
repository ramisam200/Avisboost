import { motion } from "framer-motion";
import {
  PaperPlaneTilt,
  ChatCircleText,
  ClockCounterClockwise,
  Cursor,
  ChartBar,
  Storefront,
} from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const FEATURES = [
  {
    icon: PaperPlaneTilt,
    title: "Envoi rapide de demandes d'avis Google",
    text: "Saisissez l'e-mail du client, cliquez sur Envoyer. La demande part immédiatement.",
  },
  {
    icon: ChatCircleText,
    title: "Messages professionnels personnalisés",
    text: "Un e-mail clair et soigné qui donne envie de laisser un avis, sans paraître insistant.",
  },
  {
    icon: ClockCounterClockwise,
    title: "Historique des envois",
    text: "Retrouvez à tout moment la liste des demandes envoyées et leur statut.",
  },
  {
    icon: Cursor,
    title: "Interface simple et intuitive",
    text: "Aucune formation nécessaire : deux champs, un bouton, c'est tout.",
  },
  {
    icon: ChartBar,
    title: "Tableau de bord",
    text: "Suivez vos envois et l'évolution de vos avis Google en un coup d'œil.",
  },
  {
    icon: Storefront,
    title: "Compatible avec tous les commerces",
    text: "Pensé pour les commerces, indépendants, entreprises et professionnels, quel que soit le secteur.",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title="Tout ce qu'il faut, rien de superflu."
          center
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-2xl border border-line bg-white p-7 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-green-soft">
                <f.icon weight="duotone" className="size-6 text-green-dark" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
