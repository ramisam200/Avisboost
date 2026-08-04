import { motion } from "framer-motion";
import { Check, DeviceMobile, Sparkle } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";
import { Button } from "./Header.jsx";

const PLANS = [
  {
    name: "Start",
    price: "19 €",
    period: "/mois · TVA comprise",
    installFee: true,
    smsUpsell: true,
    href: "https://buy.stripe.com/00wdR14az8iv3aHe9V87K00",
    features: [
      "Jusqu'à 150 demandes d'avis par mois",
      "Interface AvisBoost",
      "Modèle d'e-mail professionnel",
    ],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Plus",
    price: "25 €",
    period: "/mois · TVA comprise",
    installFee: true,
    smsUpsell: true,
    href: "https://buy.stripe.com/cNi5kv0Yn2YbbHd2rd87K04",
    features: [
      "Jusqu'à 250 demandes d'avis par mois",
      "Interface AvisBoost",
      "Modèle d'e-mail professionnel",
    ],
    cta: "Choisir Plus",
    highlight: false,
  },
  {
    name: "Pro",
    price: "99 €",
    period: "/mois · TVA comprise",
    installFee: true,
    href: "https://buy.stripe.com/3cI5kv6iH2Yb4eL9TF87K05",
    badge: "Le plus demandé",
    limited: "Places limitées à 50 clients, pour garantir un vrai suivi personnalisé",
    tagline: "Vous ne devez rien faire, on s'occupe de booster votre commerce — sur mesure, pour développer votre activité.",
    features: [
      "Jusqu'à 500 demandes d'avis par mois",
      "Page de demande d'avis personnalisée à l'image de votre commerce",
      "Texte d'e-mail sur mesure, rédigé pour maximiser les avis 5 étoiles",
      "Bilan complet de votre présence Google au démarrage",
      "Suivi personnalisé de vos résultats",
      "Relances régulières pour ne rien laisser passer",
      "Support prioritaire",
    ],
    cta: "Réserver ma place",
    highlight: true,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    features: [
      "Volume de SMS et d'e-mails adapté à vos besoins",
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
      <div className="shell mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des tarifs simples, sans surprise."
          center
        />

        <p className="mx-auto mt-6 w-fit rounded-full border border-green/30 bg-green-soft px-4 py-2 text-center text-sm font-semibold text-green-dark">
          Frais d&rsquo;installation à 50 € au lieu de 99 € pour toute souscription, jusqu&rsquo;au 31 août
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex h-full flex-col rounded-[1.75rem] border p-8 ${
                plan.highlight
                  ? "border-green bg-ink text-white shadow-glow xl:-translate-y-3"
                  : "border-line bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-glow">
                  {plan.badge}
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

              {plan.installFee && (
                <p className={`mt-1.5 text-sm font-medium ${plan.highlight ? "text-white/60" : "text-ink-muted"}`}>
                  <span className={`line-through ${plan.highlight ? "text-white/35" : "text-ink-faint"}`}>99 €</span>{" "}
                  <span className={plan.highlight ? "text-green" : "text-green-dark"}>50 €</span> d&rsquo;installation
                </p>
              )}

              {plan.tagline && (
                <p className="mt-4 text-[0.95rem] font-semibold leading-relaxed text-green">
                  {plan.tagline}
                </p>
              )}

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

              {plan.limited && (
                <p className="mt-5 flex items-start gap-2 text-sm font-medium text-green">
                  <Sparkle weight="fill" className="mt-0.5 size-4 shrink-0" />
                  {plan.limited}
                </p>
              )}

              {plan.smsUpsell && (
                <a
                  href="#pack-sms"
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline ${
                    plan.highlight ? "text-green" : "text-green-dark"
                  }`}
                >
                  <DeviceMobile weight="bold" className="size-4" />
                  Option Pack SMS disponible pour plus de résultats
                </a>
              )}

              <Button
                href={plan.href || "#contact"}
                target={plan.href ? "_blank" : undefined}
                rel={plan.href ? "noopener noreferrer" : undefined}
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

        <motion.div
          id="pack-sms"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-green/30 bg-gradient-to-br from-green-soft to-white p-8 shadow-sm sm:p-10"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-5">
              <span className="hidden size-14 shrink-0 place-items-center rounded-2xl bg-green text-white shadow-glow sm:grid">
                <DeviceMobile weight="duotone" className="size-7" />
              </span>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Rapporte plus de commentaires
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">Pack SMS</h3>
                <p className="mt-1 text-sm font-medium text-green-dark">
                  En complément de votre offre Start ou Plus
                </p>
                <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
                  Vous avez les numéros de vos clients ? N&rsquo;hésitez plus. Le SMS
                  est lu presque instantanément et convertit mieux que l&rsquo;e-mail
                  seul.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
                  <li className="flex items-center gap-2">
                    <Check weight="bold" className="size-4 shrink-0 text-green-dark" />
                    200 demandes d&rsquo;avis envoyées par SMS par mois
                  </li>
                  <li className="flex items-center gap-2">
                    <Check weight="bold" className="size-4 shrink-0 text-green-dark" />
                    Message SMS rédigé sur mesure pour votre commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <Check weight="bold" className="size-4 shrink-0 text-green-dark" />
                    Exclusion automatique des clients ayant déjà laissé un avis
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-ink">50 €</span>
                <span className="text-ink-muted">/mois · TVA comprise</span>
              </div>
              <p className="text-sm font-medium text-ink-muted">
                <span className="text-ink-faint line-through">99 €</span>{" "}
                <span className="text-green-dark">50 €</span> d&rsquo;installation
              </p>
              <Button
                href="https://buy.stripe.com/28E7sD7mLbuHcLh8PB87K03"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-full px-6 text-[0.95rem] sm:w-auto"
              >
                Ajouter le pack SMS
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
