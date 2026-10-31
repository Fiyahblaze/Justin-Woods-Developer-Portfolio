import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

import HeroShowcase from '../ui/HeroShowcase'

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-slate-200' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
]

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_30%,#083344_0%,#061722_45%,#020617_85%)]"
      />

      <div className="mx-auto max-w-6xl px-6 pt-10 sm:pt-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div className="py-6 lg:pt-12">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf]"
              />

              Philadelphia · Open to opportunities
            </p>

            <h1
              id="hero-heading"
              className="font-serif text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white"
            >
              <span className="block">
                Real-world experience.
              </span>

              <span className="block">
                Thoughtful software.
              </span>
            </h1>

            <p className="mt-6 max-w-lg font-serif text-xl font-normal leading-relaxed text-slate-300">
              Welcome my name is Justin Woods, i'm a full-stack developer bringing experience in
              operations, financial services, and entrepreneurship to the
              applications I build.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_#2dd4bf20] transition-colors hover:bg-teal-300"
              >
                View My Projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/resume/Justin-Woods-Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-cyan-800 bg-slate-950/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                Download Résumé
              </a>
            </div>

            <a
              href="https://github.com/Fiyahblaze"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              Explore my GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <HeroShowcase />
        </div>

        <div className="mt-8 border-y border-cyan-900/50 py-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Built with modern technologies
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-3 lg:justify-center"
              >
                <Icon
                  aria-hidden="true"
                  className={`h-9 w-9 shrink-0 ${color}`}
                />

                <span className="text-sm text-slate-200 sm:text-base">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero