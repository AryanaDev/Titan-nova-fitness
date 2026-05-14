const links = ["Programs", "Transformations", "Calculator", "Pricing"];
const socials = ["IG", "YT", "TT", "X"];

export default function Footer() {
  return (
    <>
      <section id="join" className="final-cta">
        <div className="energy-lines" aria-hidden="true" />
        <p className="eyebrow">Join the club</p>
        <h2>Your strongest body starts here.</h2>
        <a href="#calculator" className="nova-button">
          Enter TITAN NOVA
        </a>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.7fr_0.5fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white">
              <span className="logo-mark" aria-hidden="true" />
              TITAN NOVA
            </a>
            <p className="mt-5 max-w-md leading-7 text-white/54">
              A premium futuristic fitness club for hypertrophy,
              strength, and transformation training systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 md:justify-center" aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {socials.map((social) => (
              <a key={social} href="#home" className="social-link" aria-label={`${social} social link`}>
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 TITAN NOVA</span>
          <span>Built for serious training</span>
        </div>
      </footer>
    </>
  );
}
