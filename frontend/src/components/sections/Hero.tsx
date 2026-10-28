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
          I’m Justin Woods, a full-stack developer bringing experience in
          operations, financial services, and entrepreneurship to the
          applications I build.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
          >
            View My Projects
          </a>

          <a
            href="https://github.com/Fiyahblaze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
          >
            Visit GitHub
          </a>

          <a
            href="/resume/Justin-Woods-Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
          >
            Download Résumé
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a
          href="#projects"
          aria-label="Explore ToolShare in featured projects"
          className="col-span-2 overflow-hidden rounded-2xl border border-slate-700 shadow-xl shadow-teal-950/30 transition-colors hover:border-teal-400"
        >
          <img
            src="/images/toolshare.png"
            alt="ToolShare project concept illustration"
            width={1536}
            height={1024}
            className="aspect-[3/2] w-full object-cover"
          />
        </a>

        <a
          href="#projects"
          aria-label="Explore IP Address Tracker in featured projects"
          className="overflow-hidden rounded-xl border border-slate-700 transition-colors hover:border-teal-400"
        >
          <img
            src="/images/ip-tracker.png"
            alt="IP Address Tracker project concept illustration"
            width={1536}
            height={1024}
            className="aspect-[3/2] w-full object-cover"
          />
        </a>

        <a
          href="#projects"
          aria-label="Explore Zenith Product API in featured projects"
          className="overflow-hidden rounded-xl border border-slate-700 transition-colors hover:border-teal-400"
        >
          <img
            src="/images/zenith-api.png"
            alt="Zenith Product API project concept illustration"
            width={1536}
            height={1024}
            className="aspect-[3/2] w-full object-cover"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero