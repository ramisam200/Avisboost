import { motion } from "framer-motion";
import { Button } from "./Header.jsx";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/15 blur-[140px]" />
      <div className="shell relative mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Prêt à obtenir plus d&rsquo;avis Google ?
        </motion.h2>
        <p className="mt-4 text-lg text-white/60">
          Essayez AvisBoost gratuitement et envoyez votre première demande d&rsquo;avis
          en moins de deux minutes.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="#tarifs" className="h-[3.4rem] px-8 text-base">
            Essayer gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
}
