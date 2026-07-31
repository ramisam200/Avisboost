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
              Il peut avoir 70 avis si c&rsquo;est 5 étoiles (ou presque) — je
              préfère ça à quelqu&rsquo;un qui a 500 avis mais un 4,5.
            </div>
          </div>

          <div className="flex items-end justify-end gap-2.5">
            <div className="rounded-2xl rounded-br-sm bg-mist px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
              Mec, les avis Google c&rsquo;est LA base pour juger la qualité. 💯
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green-soft text-green-dark">
              <User weight="fill" className="size-5" />
            </span>
          </div>

          <div className="flex items-end gap-2.5 pt-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-green text-xs font-bold text-white shadow-glow">
              AB
            </span>
            <div className="rounded-2xl rounded-bl-sm bg-green px-4 py-3 text-[0.95rem] font-medium leading-relaxed text-white">
              AvisBoost : et si on faisait grimper ta note&nbsp;?
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
