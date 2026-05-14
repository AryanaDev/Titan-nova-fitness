const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Transformations", href: "#transformations" },
  { label: "Calculator", href: "#calculator" },
  { label: "Pricing", href: "#pricing" },
  { label: "Join", href: "#join" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-5"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white"
          aria-label="TITAN NOVA home"
        >
          <span className="logo-mark" aria-hidden="true" />
          <span className="hidden xs:inline">TITAN NOVA</span>
          <span className="xs:hidden">NOVA</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#join" className="nova-button nova-button-small">
          Join
        </a>
      </nav>
    </header>
  );
}
