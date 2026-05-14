const features = [
  {
    title: "AI-style progress tracking",
    copy: "Trend panels surface volume, intensity, consistency, and recovery readiness.",
    className: "bento-large bento-cyan",
  },
  {
    title: "Nutrition framework",
    copy: "Macros, meal timing, and phase-specific targets for cut, maintain, or bulk.",
    className: "bento-orange",
  },
  {
    title: "Progressive overload system",
    copy: "Rep targets and load jumps keep each block moving without guesswork.",
    className: "bento-red",
  },
  {
    title: "Recovery optimization",
    copy: "Sleep, mobility, deload, and output management keep the system online.",
    className: "bento-purple",
  },
  {
    title: "Mobile-friendly plans",
    copy: "Every protocol reads cleanly on the gym floor with compact session logic.",
    className: "bento-yellow",
  },
  {
    title: "Elite coaching design",
    copy: "A premium interface that makes serious training feel focused and easy to repeat.",
    className: "bento-wide bento-mix",
  },
];

export default function BentoFeatures() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Fitness stack</p>
        <h2>A premium fitness platform built for serious lifters.</h2>
        <p>
          The experience blends powerful coaching logic with an interface that
          feels modern, technical, and built for daily gym use.
        </p>
      </div>

      <div className="bento-grid">
        {features.map((feature) => (
          <article key={feature.title} className={`bento-card ${feature.className}`}>
            <div className="bento-glyph" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
