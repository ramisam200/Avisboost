import { motion } from "framer-motion";
import {
  PaperPlaneTilt,
  ChatCircleText,
  Cursor,
  Storefront,
  ShieldCheck,
  Rocket,
} from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const FEATURES = [
  { icon: PaperPlaneTilt, title: "Envoi rapide de demandes d'avis" },
  { icon: ChatCircleText, title: "Messages professionnels personnalisés" },
  { icon: Cursor, title: "Interface simple et intuitive" },
  { icon: Storefront, title: "Compatible avec tous les commerces" },
  { icon: ShieldCheck, title: "Sans engagement" },
  { icon: Rocket, title: "Mise en place rapide" },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title="Tout ce qu'il faut, rien de superflu."
          center
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-soft">
                <f.icon weight="duotone" className="size-5 text-green-dark" />
              </span>
              <h3 className="text-[0.95rem] font-semibold text-ink">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
