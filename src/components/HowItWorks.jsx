import { motion } from "framer-motion";
import { EnvelopeSimple, PaperPlaneTilt, Star } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const STEPS = [
  {
    icon: EnvelopeSimple,
    title: "Saisissez l'adresse e-mail",
    text: "Après chaque visite, entrez simplement l'adresse e-mail de votre client.",
  },
  {
    icon: PaperPlaneTilt,
    title: "AvisBoost envoie votre demande d'avis",
    text: "Votre client reçoit immédiatement un e-mail clair, professionnel et personnalisé.",
  },
  {
    icon: Star,
    title: "Recevez davantage d'avis Google",
    text: "En quelques secondes, votre client peut laisser un avis Google et renforcer votre réputation en ligne.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Comment ça fonctionne"
          title="Trois étapes. Quelques secondes."
          subtitle="Vous ne demandez plus rien à voix haute. Un e-mail suffit, envoyé pendant que le client est encore satisfait."
          center
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-line sm:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 grid size-[4.5rem] place-items-center rounded-full bg-green text-2xl font-bold text-white shadow-glow">
                {i + 1}
              </span>
              <step.icon weight="duotone" className="mt-6 size-7 text-green-dark" />
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
