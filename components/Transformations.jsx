const transformations = [
  {
    title: "Lean Bulk",
    timeframe: "14 weeks",
    result: "+7.4 kg lean mass",
    training: "Hypertrophy plan",
    accent: "#c7ff1a",
    shape: "bulk",
  },
  {
    title: "Fat Loss",
    timeframe: "10 weeks",
    result: "-11.2 kg bodyweight",
    training: "Deficit engine",
    accent: "#00d9ff",
    shape: "cut",
  },
  {
    title: "Classic Physique",
    timeframe: "18 weeks",
    result: "+9 cm shoulder spread",
    training: "Symmetry builder",
    accent: "#f8fafc",
    shape: "classic",
  },
  {
    title: "Strength Rebuild",
    timeframe: "12 weeks",
    result: "+31% compound output",
    training: "Core engine",
    accent: "#ff3b30",
    shape: "strength",
  },
];

function BodySilhouette({ variant, label }) {
  return (
    <div className={`body-silhouette ${variant}`} role="img" aria-label={label}>
      <span className="silhouette-head" />
      <span className="silhouette-torso" />
      <span className="silhouette-arm left" />
      <span className="silhouette-arm right" />
      <span className="silhouette-leg left" />
      <span className="silhouette-leg right" />
    </div>
  );
}

export default function Transformations() {
  return (
    <section id="transformations" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Transformation archive</p>
        <h2>Before and after results that feel built in the gym.</h2>
        <p>
          Physique projections show how each protocol changes muscle, shape,
          conditioning, and strength output over time.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {transformations.map((item) => (
          <article
            key={item.title}
            className="transformation-card"
            style={{ "--card-accent": item.accent }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  {item.timeframe}
                </p>
                <h3>{item.title}</h3>
              </div>
              <span className="scan-badge">Scan</span>
            </div>

            <div className="avatar-compare">
              <div>
                <BodySilhouette variant="before" label={`${item.title} before silhouette`} />
                <span>Before</span>
              </div>
              <div>
                <BodySilhouette variant={item.shape} label={`${item.title} after silhouette`} />
                <span>After</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="result-line">{item.result}</p>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/48">
                {item.training}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
