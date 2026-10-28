function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28"
    >
      <div>
        <p className="mb-6 text-sm uppercase tracking-widest text-teal-400">
          Philadelphia · Open to opportunities
        </p>

        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Real-world experience.
          <br />
          <span className="text-teal-400">Thoughtful software.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          Hi, welcome! My name is Justin Woods, a full-stack developer bringing experience in
          operations, financial services, and entrepreneurship to the
          applications I build.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
          >
            View My Projects
          </a>

          <a
            href="https://github.com/Fiyahblaze"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
          >
            Visit GitHub
            </a>

            <a
               href="/resume/Justin-Woods-Resume.pdf"
               download
               className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
            >
              Download Résumé
             </a>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl shadow-teal-950/30 sm:p-8">
        <div className="mb-8 flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-teal-400" />
        </div>

        <p className="text-sm uppercase tracking-widest text-teal-400">
          My approach
        </p>

        <h2 className="mt-4 text-2xl font-semibold">
          Understand the problem.
          <br />
          Build with purpose.
        </h2>

        <p className="mt-4 leading-relaxed text-slate-300">
          I bring a practical mindset to development, with a focus on clear
          workflows, useful features, and the people using them.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full border border-teal-400/30 bg-teal-400/5 px-3 py-1 text-sm text-teal-300"
              >
                {technology}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero