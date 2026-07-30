import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Smiley,
  EnvelopeSimple,
  PaperPlaneTilt,
  Tray,
  Star,
  ChatCircleText,
} from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading.jsx";

const STEP_DURATION = 1900;
const EMAIL = "nom@email.com";

const SCENES = [
  "client",
  "field-empty",
  "field-typed",
  "sending",
  "flying",
  "inbox",
  "review-button",
  "google-reviews",
  "counter",
];

function Frame({ children }) {
  return (
    <div className="flex h-72 flex-col items-center justify-center gap-4 px-6 text-center sm:h-80">
      {children}
    </div>
  );
}

function useCounter(active) {
  const [value, setValue] = useState(38);
  useEffect(() => {
    if (!active) {
      setValue(38);
      return;
    }
    let n = 38;
    const id = setInterval(() => {
      n += 1;
      setValue(n);
      if (n >= 42) clearInterval(id);
    }, 260);
    return () => clearInterval(id);
  }, [active]);
  return value;
}

export default function AnimationDemo() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const timeoutRef = useRef(null);
  const scene = SCENES[step];
  const counterValue = useCounter(scene === "counter");

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % SCENES.length);
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (scene !== "field-typed") {
      setTyped("");
      return;
    }
    let i = 0;
    timeoutRef.current = setInterval(() => {
      i += 1;
      setTyped(EMAIL.slice(0, i));
      if (i >= EMAIL.length) clearInterval(timeoutRef.current);
    }, 60);
    return () => clearInterval(timeoutRef.current);
  }, [scene]);

  return (
    <section id="animation" className="relative isolate overflow-hidden bg-mist py-24 sm:py-32">
      <div className="shell mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="La démonstration"
          title="Voyez AvisBoost fonctionner en direct."
          subtitle="Du client satisfait à l'avis Google publié : voici exactement ce qui se passe à chaque envoi."
          center
        />

        <div className="mx-auto mt-14 max-w-sm">
          <div className="rounded-[2rem] border border-line bg-white p-2 shadow-card">
            <div className="rounded-[1.6rem] bg-gradient-to-b from-white to-mist/60 p-2">
              <div className="flex items-center gap-1.5 px-4 pt-4">
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
              </div>

              <AnimatePresence mode="wait">
                {scene === "client" && (
                  <motion.div
                    key="client"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <div className="grid size-16 place-items-center rounded-full bg-green-soft">
                        <Smiley weight="fill" className="size-9 text-green" />
                      </div>
                      <div className="flex gap-1 text-green">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} weight="fill" className="size-4" />
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-ink">Client satisfait</p>
                    </Frame>
                  </motion.div>
                )}

                {(scene === "field-empty" || scene === "field-typed") && (
                  <motion.div
                    key="field"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <EnvelopeSimple weight="duotone" className="size-8 text-green-dark" />
                      <p className="text-sm font-semibold text-ink">Adresse e-mail du client</p>
                      <div className="flex w-full items-center rounded-2xl border border-line bg-white px-4 py-3.5 shadow-sm">
                        <span className="text-[0.95rem] text-ink-muted">
                          {typed || " "}
                        </span>
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                          className="ml-0.5 h-4 w-px bg-ink-muted"
                        />
                      </div>
                    </Frame>
                  </motion.div>
                )}

                {scene === "sending" && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <div className="w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-left text-[0.95rem] text-ink-muted shadow-sm">
                        {EMAIL}
                      </div>
                      <motion.button
                        type="button"
                        animate={{ scale: [1, 0.94, 1] }}
                        transition={{ duration: 0.5, repeat: 2 }}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green px-4 py-3.5 text-[0.95rem] font-semibold text-white shadow-glow"
                      >
                        <PaperPlaneTilt weight="fill" className="size-4" />
                        Envoyer
                      </motion.button>
                    </Frame>
                  </motion.div>
                )}

                {scene === "flying" && (
                  <motion.div
                    key="flying"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Frame>
                      <div className="relative h-16 w-full">
                        <motion.div
                          initial={{ x: "-10%", y: 10, opacity: 0 }}
                          animate={{ x: "110%", y: -20, opacity: [0, 1, 1, 0] }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute top-6 grid size-12 place-items-center rounded-full bg-green text-white shadow-glow"
                        >
                          <PaperPlaneTilt weight="fill" className="size-5" />
                        </motion.div>
                      </div>
                      <p className="text-sm font-semibold text-ink">E-mail en cours d'envoi…</p>
                    </Frame>
                  </motion.div>
                )}

                {scene === "inbox" && (
                  <motion.div
                    key="inbox"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <Tray weight="duotone" className="size-8 text-green-dark" />
                      <p className="text-sm font-semibold text-ink">Boîte de réception</p>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="w-full rounded-2xl border border-green/30 bg-green-soft px-4 py-3.5 text-left shadow-sm"
                      >
                        <p className="text-xs font-semibold text-green-dark">AvisBoost</p>
                        <p className="mt-0.5 text-[0.9rem] font-medium text-ink">
                          Merci pour votre visite !
                        </p>
                      </motion.div>
                    </Frame>
                  </motion.div>
                )}

                {scene === "review-button" && (
                  <motion.div
                    key="review-button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <ChatCircleText weight="duotone" className="size-8 text-green-dark" />
                      <p className="text-sm text-ink-muted">
                        Merci pour votre visite. Votre avis compte beaucoup pour nous.
                      </p>
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="inline-flex items-center gap-2 rounded-2xl bg-green px-5 py-3 text-[0.95rem] font-semibold text-white shadow-glow"
                      >
                        Laisser un avis
                      </motion.div>
                    </Frame>
                  </motion.div>
                )}

                {scene === "google-reviews" && (
                  <motion.div
                    key="google-reviews"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        Google Reviews
                      </p>
                      <div className="flex gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.35, type: "spring" }}
                          >
                            <Star weight="fill" className="size-7 text-green" />
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-ink">Avis publié</p>
                    </Frame>
                  </motion.div>
                )}

                {scene === "counter" && (
                  <motion.div
                    key="counter"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Frame>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        Avis Google du commerce
                      </p>
                      <motion.span
                        key={counterValue}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="text-6xl font-bold text-green"
                      >
                        {counterValue}
                      </motion.span>
                      <p className="text-sm text-ink-muted">avis Google et ça continue</p>
                    </Frame>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            {SCENES.map((s, i) => (
              <span
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? "w-6 bg-green" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
