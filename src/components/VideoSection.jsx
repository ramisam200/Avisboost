import { useState } from "react";
import { motion } from "framer-motion";
import { Play, EnvelopeSimple, PaperPlaneTilt, Star } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

// Remplacez YOUTUBE_ID par l'identifiant de la vidéo AvisBoost une fois disponible.
const YOUTUBE_ID = "";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-green/10 blur-[140px]" />
      <div className="shell relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="La vidéo"
          title="Découvrez AvisBoost en moins de 60 secondes."
          dark
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-14 aspect-video max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 shadow-card"
        >
          {playing && YOUTUBE_ID ? (
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Découvrez AvisBoost en moins de 60 secondes"
              allow="accelerate; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative flex size-full items-center justify-center bg-gradient-to-br from-[#111815] to-ink"
            >
              <div className="absolute inset-0 flex items-center justify-center gap-10 opacity-25">
                <EnvelopeSimple weight="duotone" className="size-16 text-white" />
                <PaperPlaneTilt weight="duotone" className="size-16 text-green" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} weight="fill" className="size-8 text-white" />
                  ))}
                </div>
              </div>
              <span className="relative grid size-20 place-items-center rounded-full bg-green text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Play weight="fill" className="size-8 translate-x-0.5" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
