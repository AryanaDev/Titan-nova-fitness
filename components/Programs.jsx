const programs = [
  {
    title: "Hyper Mass Protocol",
    duration: "12 weeks",
    difficulty: "Advanced",
    goal: "Dense hypertrophy",
    description:
      "High-volume training blocks, mechanical tension waves, and recovery pacing for maximum muscle growth.",
    accent: "#c7ff1a",
    icon: "mass",
  },
  {
    title: "Shred Phase System",
    duration: "8 weeks",
    difficulty: "Intermediate",
    goal: "Aggressive recomposition",
    description:
      "Metabolic circuits, strength retention lifts, and controlled output targets for a leaner athletic build.",
    accent: "#ff3b30",
    icon: "shred",
  },
  {
    title: "Classic Physique Builder",
    duration: "16 weeks",
    difficulty: "All levels",
    goal: "Symmetry and shape",
    description:
      "V-taper specialization, upper-chest architecture, delt caps, and stage-grade proportions.",
    accent: "#00d9ff",
    icon: "classic",
  },
  {
    title: "Strength Core Engine",
    duration: "10 weeks",
    difficulty: "Advanced",
    goal: "Raw power",
    description:
      "Compound lift progression, bracing mechanics, neural priming, and heavy strength readiness.",
    accent: "#f8fafc",
    icon: "engine",
  },
];

function ProgramIcon({ type }) {
  const paths = {
    mass: "M22 11h20M12 18h8v14h-8zM44 18h8v14h-8zM22 25h20",
    shred: "M32 9l15 20H34l7 26-24-31h14z",
    classic: "M18 18c7-8 21-8 28 0M15 43c10 8 24 8 34 0M20 28h24M25 19l7 27 7-27",
    engine: "M32 10v9M32 45v9M16 32H7M57 32h-9M20 20l-7-7M51 51l-7-7M44 20l7-7M13 51l7-7M21 32a11 11 0 1 0 22 0 11 11 0 0 0-22 0z",
  };

  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
      <path
        d={paths[type]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Training systems</p>
        <h2>Real fitness programs with a premium training edge.</h2>
        <p>
          Choose a complete lifting plan built around progressive overload,
          smart conditioning, recovery, and visible physique outcomes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program) => (
          <article
            key={program.title}
            className="program-card"
            style={{ "--card-accent": program.accent }}
          >
            <div className="program-icon">
              <ProgramIcon type={program.icon} />
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/60">
              <span>{program.duration}</span>
              <span className="text-white/20">/</span>
              <span>{program.difficulty}</span>
            </div>
            <h3>{program.title}</h3>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--card-accent)]">
              {program.goal}
            </p>
            <p className="mt-5 leading-7 text-white/64">{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
