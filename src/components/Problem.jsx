import { motion } from "framer-motion";
import { Smiley, DoorOpen, CloudFog } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const STEPS = [
  {
    icon: Smiley,
    title: "Client satisfait",
    text: "La coupe est parfaite, le repas était excellent, la prestation a fait du bien. Il vous le dit, sincèrement.",
  },
  {
    icon: DoorOpen,
    title: "Il quitte le commerce",
    text: "Il paie, il salue, il pense déjà à la suite de sa journée. Personne ne lui a rien demandé.",
  },
  {
    icon: CloudFog,
    title: "Il oublie de laisser un avis",
    text: "Le soir même, l'intention a disparu. Votre fiche Google, elle, n'a pas bougé d'un pouce.",
  },
];

export default function Problem() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-0 size-[38rem] rounded-full bg-green/10 blur-[130px]" />
      <div className="shell relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Le vrai problème"
          title="Vos meilleurs clients partent sans rien dire."
          subtitle="Ce n'est pas un problème de qualité de service. C'est un problème de moment : la grande majorité des clients satisfaits ne laissent jamais d'avis, simplement parce qu'ils oublient dès qu'ils ont passé la porte."
          dark
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-green">
                Étape {i + 1}
              </span>
              <step.icon weight="duotone" className="mt-4 size-8 text-white" />
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-white/55">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-[0.95rem] leading-relaxed text-white/45">
          Résultat : la fiche Google d&rsquo;un commerce reflète rarement la qualité
          réelle de son travail. Elle reflète surtout qui a pensé à écrire — et ce
          sont rarement les clients contents.
        </p>
      </div>
    </section>
  );
}
