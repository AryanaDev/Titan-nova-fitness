const tiers = [
  {
    name: "Starter Lift",
    price: "$49",
    note: "per month",
    features: [
      "3 structured training days",
      "Starter nutrition framework",
      "Progression dashboard",
      "Weekly check-in prompts",
    ],
  },
  {
    name: "Titan Training",
    price: "$119",
    note: "per month",
    featured: true,
    features: [
      "Full hypertrophy system",
      "Cut, bulk, or recomposition path",
      "Advanced overload tracking",
      "Recovery and deload calibration",
      "Priority coaching feedback",
    ],
  },
  {
    name: "Nova Coaching",
    price: "$249",
    note: "per month",
    features: [
      "Custom split architecture",
      "Elite physique specialization",
      "Nutrition periodization",
      "Direct transformation reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Pricing</p>
        <h2>Choose your fitness membership.</h2>
        <p>
          Premium plans for athletes who want structure, intensity, and a
          transformation system that feels engineered.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`pricing-card ${tier.featured ? "pricing-card-featured" : ""}`}
          >
            {tier.featured ? <span className="featured-ribbon">Most selected</span> : null}
            <h3>{tier.name}</h3>
            <div className="mt-6 flex items-end gap-2">
              <strong className="price">{tier.price}</strong>
              <span className="pb-3 text-sm font-bold uppercase tracking-[0.16em] text-white/45">
                {tier.note}
              </span>
            </div>
            <ul className="mt-8 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#calculator" className="nova-button mt-9 w-full justify-center">
              Activate Plan
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
