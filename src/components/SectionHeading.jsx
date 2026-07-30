export default function SectionHeading({ eyebrow, title, subtitle, dark = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`text-xs font-bold uppercase tracking-[0.14em] ${
          dark ? "text-green" : "text-green-dark"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/60" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
