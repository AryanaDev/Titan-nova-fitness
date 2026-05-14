const stats = [
  { value: "12", label: "Week Systems" },
  { value: "4", label: "Training Modes" },
  { value: "98%", label: "Consistency Framework" },
  { value: "Elite", label: "Physique Protocol" },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Futuristic athlete holding dumbbells">
      <div className="orbit-ring orbit-ring-one" aria-hidden="true" />
      <div className="orbit-ring orbit-ring-two" aria-hidden="true" />
      <div className="orbit-ring orbit-ring-three" aria-hidden="true" />

      <div className="light-streak light-streak-one" aria-hidden="true" />
      <div className="light-streak light-streak-two" aria-hidden="true" />
      <div className="light-streak light-streak-three" aria-hidden="true" />

      <div className="floating-chip chip-one">
        <span>CORE</span>
        <strong>914N</strong>
      </div>
      <div className="floating-chip chip-two">
        <span>FORCE</span>
        <strong>MAX</strong>
      </div>
      <div className="floating-chip chip-three">
        <span>PULSE</span>
        <strong>88%</strong>
      </div>

      <svg
        className="neon-athlete"
        viewBox="0 0 420 520"
        role="img"
        aria-labelledby="athleteTitle athleteDesc"
      >
        <title id="athleteTitle">Futuristic strength athlete</title>
        <desc id="athleteDesc">
          A glowing futuristic gym athlete lifting dumbbells in front of training rings.
        </desc>
        <defs>
          <linearGradient id="novaBody" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#c7ff1a" />
            <stop offset="36%" stopColor="#00d9ff" />
            <stop offset="72%" stopColor="#ff3b30" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <radialGradient id="novaCore" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="55%" stopColor="#c7ff1a" />
            <stop offset="100%" stopColor="#00d9ff" />
          </radialGradient>
          <filter id="athleteGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.95  0 1 0 0 0.23  0 0 1 0 0.02  0 0 0 0.8 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="athlete-shadow">
          <ellipse cx="210" cy="486" rx="128" ry="22" fill="#04020a" opacity="0.82" />
          <ellipse cx="210" cy="484" rx="92" ry="13" fill="#c7ff1a" opacity="0.18" />
        </g>

        <g className="dumbbell dumbbell-left" filter="url(#athleteGlow)">
          <rect x="17" y="154" width="108" height="16" rx="8" fill="#d8fbff" />
          <rect x="4" y="130" width="30" height="64" rx="8" fill="#00d9ff" />
          <rect x="36" y="119" width="24" height="86" rx="8" fill="#ff3b30" />
          <rect x="91" y="123" width="26" height="78" rx="8" fill="#c7ff1a" />
        </g>
        <g className="dumbbell dumbbell-right" filter="url(#athleteGlow)">
          <rect x="295" y="154" width="108" height="16" rx="8" fill="#d8fbff" />
          <rect x="386" y="130" width="30" height="64" rx="8" fill="#00d9ff" />
          <rect x="360" y="119" width="24" height="86" rx="8" fill="#ff3b30" />
          <rect x="303" y="123" width="26" height="78" rx="8" fill="#c7ff1a" />
        </g>

        <g filter="url(#athleteGlow)">
          <path
            d="M122 171 C151 132 269 132 298 171 L271 245 L149 245 Z"
            fill="url(#novaBody)"
            opacity="0.95"
          />
          <path
            d="M153 246 L267 246 L291 388 C256 414 165 414 129 388 Z"
            fill="#101316"
            stroke="url(#novaBody)"
            strokeWidth="10"
          />
          <path
            d="M179 266 C192 292 229 292 242 266 L255 354 C230 371 191 371 166 354 Z"
            fill="url(#novaCore)"
            opacity="0.92"
          />
          <circle cx="210" cy="93" r="54" fill="#101316" stroke="url(#novaBody)" strokeWidth="10" />
          <path
            d="M175 89 C193 65 228 65 246 89 C229 113 192 113 175 89 Z"
            fill="#00d9ff"
            opacity="0.82"
          />
          <circle cx="190" cy="90" r="7" fill="#f8fafc" />
          <circle cx="230" cy="90" r="7" fill="#f8fafc" />
          <path d="M190 122 C204 134 219 134 233 122" fill="none" stroke="#c7ff1a" strokeWidth="6" strokeLinecap="round" />

          <path
            d="M132 181 C100 205 82 248 80 302"
            fill="none"
            stroke="#00d9ff"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M288 181 C320 205 338 248 340 302"
            fill="none"
            stroke="#ff3b30"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M84 302 C66 285 56 246 68 210"
            fill="none"
            stroke="#c7ff1a"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M336 302 C354 285 364 246 352 210"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <circle cx="80" cy="305" r="21" fill="#06080a" stroke="#c7ff1a" strokeWidth="8" />
          <circle cx="340" cy="305" r="21" fill="#06080a" stroke="#00d9ff" strokeWidth="8" />

          <path
            d="M166 397 L147 486"
            fill="none"
            stroke="#00d9ff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <path
            d="M254 397 L273 486"
            fill="none"
            stroke="#ff3b30"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <path d="M123 486 L174 486" stroke="#c7ff1a" strokeWidth="18" strokeLinecap="round" />
          <path d="M247 486 L298 486" stroke="#00d9ff" strokeWidth="18" strokeLinecap="round" />
        </g>
      </svg>

      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:pt-28">
      <div className="relative z-10">
        <p className="eyebrow">Premium strength and physique coaching</p>
        <h1 className="mt-5 max-w-5xl text-[clamp(3.35rem,8.9vw,8.9rem)] font-black uppercase leading-[0.82] tracking-normal text-white">
          Build a stronger body that looks elite
        </h1>
        <p className="mt-7 max-w-2xl text-[clamp(1rem,2vw,1.3rem)] leading-8 text-white/72">
          Premium hypertrophy, strength, conditioning, and transformation
          training for lifters who want visible muscle, better performance, and
          a disciplined plan they can actually follow.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#calculator" className="nova-button">
            Start Training
          </a>
          <a href="#programs" className="nova-button nova-button-ghost">
            View Programs
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
