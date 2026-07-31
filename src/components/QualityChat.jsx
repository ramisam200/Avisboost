import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

export default function QualityChat() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="shell mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex items-end gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mist text-ink-muted">
              <User weight="fill" className="size-5" />
            </span>
            <div className="rounded-2xl rounded-bl-sm bg-mist px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
              Je préfère 70 avis à 5 étoiles que 500 avis à 4,5.
            </div>
          </div>

          <div className="flex items-end justify-end gap-2.5">
            <div className="rounded-2xl rounded-br-sm bg-mist px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
              Les avis Google, c&rsquo;est LA base pour juger la qualité. 💯
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green-soft text-green-dark">
              <User weight="fill" className="size-5" />
            </span>
          </div>

          <p className="pt-4 text-center text-[0.95rem] leading-relaxed text-ink-muted">
            AvisBoost aide à faire grimper votre note en donnant la parole à
            tous vos clients satisfaits — pas juste ceux qui y pensent tout
            seuls.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
