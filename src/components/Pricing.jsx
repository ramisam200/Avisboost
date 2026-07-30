import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";
import { Button } from "./Header.jsx";

const PLANS = [
  {
    name: "Start",
    price: "15 €",
    period: "/mois",
    features: [
      "Jusqu'à 250 demandes d'avis par mois",
      "Interface AvisBoost",
      "Modèle d'e-mail professionnel",
      "Tableau de bord",
    ],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Pro",
    price: "29 €",
    period: "/mois",
    features: [
      "Jusqu'à 500 demandes d'avis par mois",
      "Page de demande d'avis personnalisée",
      "Personnalisation des e-mails",
      "Tableau de bord complet",
      "Historique des envois",
      "Support prioritaire",
    ],
    cta: "Choisir Pro",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    features: [
      "Envoi par SMS en plus de l'e-mail",
      "Gestion complète assurée par notre équipe",
    ],
    text: "Pour les entreprises ayant plusieurs établissements ou des besoins spécifiques. Le contenu de l'offre est adapté à votre demande.",
    cta: "Nous contacter",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative border-y border-line bg-mist py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des tarifs simples, sans surprise."
          center
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex h-full flex-col rounded-[1.75rem] border p-8 ${
                plan.highlight
                  ? "border-green bg-ink text-white shadow-glow lg:-translate-y-3"
                  : "border-line bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-glow">
                  Le plus choisi
                </span>
              )}

              <h3 className={`text-sm font-bold uppercase tracking-wide ${plan.highlight ? "text-green" : "text-green-dark"}`}>
                {plan.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlight ? "text-white/50" : "text-ink-muted"}>
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.text && (
                <p className={`mt-4 text-[0.95rem] leading-relaxed ${plan.highlight ? "text-white/60" : "text-ink-muted"}`}>
                  {plan.text}
                </p>
              )}

              {plan.features.length > 0 && (
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.95rem]">
                      <Check weight="bold" className={`mt-0.5 size-4 shrink-0 ${plan.highlight ? "text-green" : "text-green-dark"}`} />
                      <span className={plan.highlight ? "text-white/85" : "text-ink-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Button
                href="#faq"
                className={`mt-8 h-12 w-full text-[0.95rem] ${
                  plan.highlight
                    ? ""
                    : "!bg-white !text-ink !shadow-none border border-line hover:!bg-mist"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
