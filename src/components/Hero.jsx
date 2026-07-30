import { motion } from "framer-motion";
import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { Button } from "./Header.jsx";

const TRUST = ["Aucune installation requise", "Envoi en un clic", "Sans engagement"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute -right-40 -top-56 size-[46rem] rounded-full bg-green/[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 top-40 size-[30rem] rounded-full bg-green/[0.08] blur-[110px]" />

      <div className="shell mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted"
          >
            Avis Google pour commerces, indépendants et entreprises
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.03] sm:text-6xl lg:text-[4.1rem]"
          >
            Transformez vos clients satisfaits en avis Google.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Après chaque visite, saisissez simplement l&rsquo;adresse e-mail de votre
            client. AvisBoost lui envoie automatiquement une demande d&rsquo;avis
            Google professionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#tarifs" className="h-[3.4rem] px-7 text-base w-full sm:w-auto">
              Essayer gratuitement
            </Button>
            <a
              href="#animation"
              className="inline-flex h-[3.4rem] w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-ink/20 hover:bg-mist sm:w-auto"
            >
              Voir la démonstration
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-muted"
          >
            {TRUST.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle weight="fill" className="size-4 text-green" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-[2rem] border border-line bg-white p-2 shadow-card">
            <div className="rounded-[1.6rem] bg-mist p-6 sm:p-8">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Nouveau client
              </p>

              <div className="mt-3 flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3.5 shadow-sm">
                <span className="text-[0.95rem] text-ink-muted">sophie@email.com</span>
                <span className="size-2 animate-pulse rounded-full bg-green" />
              </div>

              <motion.button
                type="button"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-green px-4 py-3.5 text-[0.95rem] font-semibold text-white shadow-glow"
              >
                <PaperPlaneTilt weight="fill" className="size-4" />
                Envoyer
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 2.3 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-soft px-3.5 py-2 text-xs font-semibold text-green-dark"
              >
                <CheckCircle weight="fill" className="size-4" />
                E-mail envoyé à sophie@email.com
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
