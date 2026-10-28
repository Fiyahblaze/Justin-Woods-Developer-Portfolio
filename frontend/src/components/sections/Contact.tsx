const contactLinks = [
  {
    label: 'Email Me',
    href: 'mailto:jwoodsinc@msn.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justin-gj-woods/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Fiyahblaze',
    external: true,
  },
]

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-20"
    >
      <p className="text-sm uppercase tracking-widest text-teal-400">
        Let’s work together
      </p>

      <div className="mt-4 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-bold sm:text-4xl"
          >
            Let’s build something useful.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            I’m open to software engineering opportunities and conversations
            with teams building thoughtful applications. Reach out to discuss
            how I can contribute.
          </p>

          <a
            href="mailto:jwoodsinc@msn.com"
            className="mt-5 inline-block break-all text-teal-400 underline-offset-4 hover:underline"
          >
            jwoodsinc@msn.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4 lg:justify-end">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition-colors hover:border-teal-400 hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact