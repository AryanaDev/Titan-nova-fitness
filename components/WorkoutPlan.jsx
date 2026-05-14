const split = [
  { day: "Monday", session: "Upper Power", signal: "Heavy press and row clusters", load: "92%" },
  { day: "Tuesday", session: "Lower Power", signal: "Squat, hinge, sled thrust", load: "88%" },
  { day: "Wednesday", session: "Recovery / Mobility", signal: "Tissue flow and joint range", load: "38%" },
  { day: "Thursday", session: "Push Hypertrophy", signal: "Chest, delts, triceps volume", load: "76%" },
  { day: "Friday", session: "Pull Hypertrophy", signal: "Back density and arm finishers", load: "78%" },
  { day: "Saturday", session: "Legs + Core", signal: "Quad drive and trunk armor", load: "84%" },
  { day: "Sunday", session: "Full Recovery", signal: "Sleep, hydration, nervous reset", load: "18%" },
];

export default function WorkoutPlan() {
  return (
    <section className="section-shell">
      <div className="dashboard-panel">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Weekly training split</p>
            <h2 className="mt-4 text-[clamp(2.35rem,5vw,5.1rem)] font-black uppercase leading-[0.88]">
              Your training week, mapped like a premium gym plan.
            </h2>
          </div>
          <div className="dashboard-readout">
            <span>System Load</span>
            <strong>ACTIVE</strong>
            <div className="readout-bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-7">
          {split.map((item, index) => (
            <article key={item.day} className="timeline-card" style={{ "--delay": `${index * 90}ms` }}>
              <div className="timeline-node" aria-hidden="true" />
              <span>{item.day}</span>
              <h3>{item.session}</h3>
              <p>{item.signal}</p>
              <div className="load-track" aria-label={`${item.load} training load`}>
                <i style={{ width: item.load }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
