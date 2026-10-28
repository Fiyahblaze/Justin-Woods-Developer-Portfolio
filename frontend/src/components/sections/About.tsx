function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-20"
    >
      <p className="text-sm uppercase tracking-widest text-teal-400">
        About me
      </p>

      <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <h2
          id="about-heading"
          className="text-3xl font-bold leading-tight sm:text-4xl"
        >
          From operations to
          <br />
          <span className="text-teal-400">software development.</span>
        </h2>

        <div className="space-y-5 leading-relaxed text-slate-300">
          <p>
            I’m Justin Woods, a Philadelphia-based developer and Per Scholas
            Software Engineering graduate. I build full-stack applications
            using JavaScript, TypeScript, React, Node.js, Express, and MongoDB.
          </p>

          <p>
            Before software development, I spent more than seven years in
            financial services and operations. That experience taught me to
            analyze problems, improve workflows, and communicate clearly with
            the people depending on my work.
          </p>

          <p>
            Running my own business has strengthened that mindset. I understand
            how small details affect the bigger picture, and I bring that
            perspective to the applications I build.
          </p>

          <p>
            I’m looking for an opportunity to contribute to a development team,
            keep learning, and build software that makes everyday tasks easier.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About