"use client";

import { useMemo, useState } from "react";

const activityLevels = [
  { label: "Light - low daily activity", value: "1.2" },
  { label: "Active - 3 sessions weekly", value: "1.375" },
  { label: "Athletic - 4 to 5 sessions weekly", value: "1.55" },
  { label: "High performance - daily training", value: "1.725" },
];

const goals = [
  { label: "Cut", value: "cut" },
  { label: "Maintain", value: "maintain" },
  { label: "Bulk", value: "bulk" },
];

function OutputTile({ label, value, unit }) {
  return (
    <div className="output-tile">
      <span>{label}</span>
      <strong>
        {value}
        {value !== "--" && unit ? <small>{unit}</small> : null}
      </strong>
    </div>
  );
}

export default function Calculator() {
  const [form, setForm] = useState({
    height: "",
    weight: "",
    age: "",
    activity: "1.55",
    goal: "maintain",
  });

  const metrics = useMemo(() => {
    const height = Number(form.height);
    const weight = Number(form.weight);
    const age = Number(form.age);
    const activity = Number(form.activity);
    const isValid = height > 0 && weight > 0 && age > 0;

    if (!isValid) {
      return {
        bmi: "--",
        maintenance: "--",
        cut: "--",
        bulk: "--",
        protein: "--",
        goalCalories: "--",
      };
    }

    const bmi = weight / (height / 100) ** 2;
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const maintenance = Math.round(bmr * activity);
    const cut = Math.max(1200, maintenance - 450);
    const bulk = maintenance + 350;
    const protein = Math.round(weight * 2.2);
    const goalCalories =
      form.goal === "cut" ? cut : form.goal === "bulk" ? bulk : maintenance;

    return {
      bmi: bmi.toFixed(1),
      maintenance,
      cut,
      bulk,
      protein,
      goalCalories,
    };
  }, [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section id="calculator" className="section-shell">
      <div className="calculator-grid">
        <div className="max-w-2xl">
          <p className="eyebrow">Physique calculator</p>
          <h2 className="mt-4 text-[clamp(2.4rem,5.4vw,5.6rem)] font-black uppercase leading-[0.86]">
            Dial in fuel for the next version of you.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Estimate BMI, maintenance calories, training-adjusted cut and bulk
            targets, plus a high-protein intake range for serious recomposition.
          </p>
        </div>

        <form className="control-panel" aria-label="BMI and calorie calculator">
          <div className="panel-header">
            <span>Fitness fuel panel</span>
            <strong>{metrics.goalCalories}</strong>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="field-shell">
              <span>Height</span>
              <input
                name="height"
                type="number"
                min="1"
                inputMode="decimal"
                value={form.height}
                onChange={updateField}
                placeholder="180"
                aria-label="Height in centimeters"
              />
              <small>cm</small>
            </label>
            <label className="field-shell">
              <span>Weight</span>
              <input
                name="weight"
                type="number"
                min="1"
                inputMode="decimal"
                value={form.weight}
                onChange={updateField}
                placeholder="82"
                aria-label="Weight in kilograms"
              />
              <small>kg</small>
            </label>
            <label className="field-shell">
              <span>Age</span>
              <input
                name="age"
                type="number"
                min="1"
                inputMode="numeric"
                value={form.age}
                onChange={updateField}
                placeholder="29"
                aria-label="Age"
              />
              <small>yrs</small>
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="field-shell">
              <span>Activity level</span>
              <select name="activity" value={form.activity} onChange={updateField}>
                {activityLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-shell">
              <span>Goal</span>
              <select name="goal" value={form.goal} onChange={updateField}>
                {goals.map((goal) => (
                  <option key={goal.value} value={goal.value}>
                    {goal.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <OutputTile label="BMI" value={metrics.bmi} />
            <OutputTile label="Maintenance" value={metrics.maintenance} unit=" kcal" />
            <OutputTile label="Cut target" value={metrics.cut} unit=" kcal" />
            <OutputTile label="Bulk target" value={metrics.bulk} unit=" kcal" />
            <OutputTile label="Protein" value={metrics.protein} unit=" g" />
            <OutputTile label="Goal calories" value={metrics.goalCalories} unit=" kcal" />
          </div>
        </form>
      </div>
    </section>
  );
}
