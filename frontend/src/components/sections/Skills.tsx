const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'HTML & CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'MongoDB & Mongoose',
      'REST APIs',
      'JWT Authentication',
      'CRUD Operations',
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      'Git & GitHub',
      'VS Code',
      'Postman',
      'Vite',
      'Figma',
      'API Integration',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-20"
    >
      <p className="text-sm uppercase tracking-widest text-teal-400">
        My toolkit
      </p>

      <h2
        id="skills-heading"
        className="mt-3 text-3xl font-bold sm:text-4xl"
      >
        Skills I bring to the team
      </h2>

      <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
        Technologies and tools I’ve used throughout my training and projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-xl font-semibold text-teal-400">
              {group.title}
            </h3>

            <ul className="mt-6 space-y-3 text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills