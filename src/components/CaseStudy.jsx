import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

export default function CaseStudy() {
  return (
    <section id="etude-de-cas" className="relative isolate overflow-hidden border-y border-line bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading eyebrow="Cas client" title="Ils l'ont testé, voici ce qu'ils en disent." center />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-line bg-gradient-to-b from-mist/60 to-white p-8 shadow-card sm:p-12"
        >
          <Quotes weight="fill" className="size-10 text-green/40" />

          <div className="mt-4 flex gap-1 text-green">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} weight="fill" className="size-5" />
            ))}
          </div>

          <p className="mt-6 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            « Nous avons gagné 20 avis Google 5 étoiles en seulement un mois et
            demi. Nous ne nous y attendions pas et nous sommes très satisfaits. »
          </p>

          <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
            <span className="grid size-11 place-items-center rounded-full bg-green text-sm font-bold text-white">
              KBR
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Salon KBR</p>
              <p className="text-sm text-ink-muted">Commerce partenaire AvisBoost</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
