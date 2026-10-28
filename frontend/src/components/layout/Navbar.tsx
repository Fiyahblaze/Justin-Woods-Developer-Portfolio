function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-widest text-white"
        >
          JUSTIN <span className="text-teal-400">WOODS</span>
        </a>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
          <a href="#projects" className="transition-colors hover:text-teal-400">
            Work
          </a>

          <a href="#about" className="transition-colors hover:text-teal-400">
            About
          </a>

          <a href="#skills" className="transition-colors hover:text-teal-400">
            Skills
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-teal-400 px-4 py-2 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar