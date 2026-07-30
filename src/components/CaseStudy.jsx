import { motion } from "framer-motion";
import { Star, Quotes, ArrowRight, TrendUp } from "@phosphor-icons/react";
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
            « Nous avons gagné 17 avis Google 5 étoiles en seulement un mois et
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-ink-faint">
            Constaté sur la fiche Google du Salon KBR
          </p>

          <div className="mt-5 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <img
                src="/images/kbr-avant-14-mai.jpg"
                alt="Fiche Google du Salon KBR le 14 mai : 78 avis, note 4,9/5"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <figcaption className="border-t border-line px-4 py-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">14 mai</p>
                <p className="text-lg font-bold text-ink">78 avis</p>
              </figcaption>
            </figure>

            <div className="flex items-center justify-center py-1 text-green sm:py-0">
              <ArrowRight weight="bold" className="size-6 rotate-90 sm:rotate-0" />
            </div>

            <figure className="overflow-hidden rounded-2xl border border-green/30 bg-white shadow-sm">
              <img
                src="/images/kbr-apres-aujourdhui.jpg"
                alt="Fiche Google du Salon KBR aujourd'hui : 95 avis, note 4,9/5"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <figcaption className="border-t border-line px-4 py-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-dark">Aujourd&rsquo;hui</p>
                <p className="text-lg font-bold text-ink">95 avis</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-soft px-4 py-2 text-sm font-semibold text-green-dark">
              <TrendUp weight="bold" className="size-4" />
              +17 avis Google depuis le 14 mai
            </span>
          </div>

          <p className="mt-4 text-center text-sm text-ink-faint">
            Résultat obtenu en envoyant une demande d&rsquo;avis après chaque
            visite client.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
