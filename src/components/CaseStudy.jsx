import { motion } from "framer-motion";
import { Star, Quotes, ArrowRight, ArrowDown } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

function TrendChart() {
  const points = [
    { label: "14 mai", value: 78, x: 40, y: 82 },
    { label: "Aujourd'hui", value: 95, x: 220, y: 30 },
  ];
  const [p1, p2] = points;
  const path = `M ${p1.x} ${p1.y} C ${p1.x + 90} ${p1.y}, ${p2.x - 90} ${p2.y}, ${p2.x} ${p2.y}`;
  const areaPath = `${path} L ${p2.x} 120 L ${p1.x} 120 Z`;

  return (
    <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-line bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
        Évolution des avis Google
      </p>

      <svg viewBox="0 0 260 130" className="mt-2 w-full" role="img" aria-label="Évolution des avis Google du Salon KBR, de 78 à 95 entre le 14 mai et aujourd'hui">
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34A853" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#34A853" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1="20" y1="120" x2="240" y2="120" stroke="#E4E9E6" strokeWidth="1" />

        <path d={areaPath} fill="url(#trendFill)" />
        <path d={path} fill="none" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />

        {points.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="7" fill="white" stroke="#34A853" strokeWidth="2.5" />
            <text x={p.x} y={p.y - 14} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0A0D0C">
              {p.value}
            </text>
            <text x={p.x} y="134" textAnchor="middle" fontSize="10" fontWeight="600" fill="#8A938F">
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      <p className="mt-3 text-sm text-ink-muted">
        <span className="font-semibold text-green-dark">+17 avis</span> depuis le 14 mai
      </p>
    </div>
  );
}

export default function CaseStudy() {
  return (
    <section id="etude-de-cas" className="relative isolate overflow-hidden border-y border-line bg-white py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading eyebrow="Cas client" title="Ils l'ont testés, voici leur avis :" center />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl"
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

          <p className="mt-4 text-center text-sm text-ink-faint">
            Résultat obtenu en envoyant une demande d&rsquo;avis après chaque visite
            client.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-[1.3fr_1fr] sm:items-stretch"
        >
          <div className="rounded-[1.75rem] border border-line bg-gradient-to-b from-mist/60 to-white p-8 shadow-card">
            <Quotes weight="fill" className="size-9 text-green/40" />

            <div className="mt-3 flex gap-1 text-green">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} weight="fill" className="size-4" />
              ))}
            </div>

            <p className="mt-4 text-lg font-medium leading-relaxed text-ink">
              « Nous avons gagné 17 avis Google 5 étoiles en seulement un mois et
              demi. Nous ne nous y attendions pas et nous sommes très satisfaits. »
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="grid size-11 place-items-center rounded-full bg-green text-sm font-bold text-white">
                KBR
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Salon KBR</p>
                <p className="text-sm text-ink-muted">Commerce partenaire AvisBoost</p>
              </div>
            </div>
          </div>

          <TrendChart />
        </motion.div>

        <div className="mt-14 flex justify-center">
          <a
            href="#comment-ca-marche"
            className="group inline-flex flex-col items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-green-dark"
          >
            Comment ça marche
            <ArrowDown weight="bold" className="size-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
