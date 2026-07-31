import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, EnvelopeSimple } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const QUESTIONS = [
  {
    q: "Faut-il installer une application ?",
    a: "Non, ni pour vous ni pour vos clients. AvisBoost fonctionne entièrement depuis votre navigateur : vous ouvrez AvisBoost, vous saisissez l'e-mail du client, vous cliquez sur Envoyer.",
  },
  {
    q: "Combien de temps faut-il pour démarrer ?",
    a: "Quelques minutes. Créez votre compte et vous pouvez envoyer votre première demande d'avis immédiatement.",
  },
  {
    q: "Est-ce conforme au RGPD ?",
    a: "Oui. Nous ne conservons que l'adresse e-mail nécessaire à l'envoi de la demande d'avis, et vos clients peuvent demander la suppression de leurs données à tout moment.",
  },
  {
    q: "Et si un client laisse un avis négatif ?",
    a: "L'avis est déposé directement sur votre fiche Google, comme n'importe quel avis. AvisBoost ne filtre ni ne sélectionne les retours : il facilite simplement l'envoi de la demande.",
  },
  {
    q: "Je possède plusieurs établissements, est-ce possible ?",
    a: "Oui. L'offre Entreprise est pensée pour les entreprises ayant plusieurs établissements ou des besoins spécifiques.",
  },
  {
    q: "Quel est le tarif et suis-je engagé ?",
    a: "Nos offres démarrent à 15 €/mois, sans engagement. Le détail complet est disponible dans la section Tarifs ci-dessus.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[1.05rem] font-semibold text-ink">{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <CaretDown className="size-5 shrink-0 text-ink-muted" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-3 pr-8 text-[0.95rem] leading-relaxed text-ink-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Ce que les commerçants nous demandent en premier."
          center
        />

        <div className="mt-12">
          {QUESTIONS.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div id="contact" className="mt-14 scroll-mt-24 rounded-2xl border border-line bg-mist/60 p-8 text-center">
          <span className="mx-auto grid size-11 place-items-center rounded-full bg-green-soft">
            <EnvelopeSimple weight="duotone" className="size-5 text-green-dark" />
          </span>
          <p className="mt-3 text-base font-semibold text-ink">
            Un souci, une question ? Nous sommes là.
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Écrivez-nous à{" "}
            <a href="mailto:bonjour@avisboost.be" className="font-semibold text-green-dark hover:underline">
              bonjour@avisboost.be
            </a>
            , on vous répond rapidement.
          </p>
        </div>
      </div>
    </section>
  );
}
