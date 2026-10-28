type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors hover:border-teal-400/50">
      <img
        src={image}
        alt={`${title} project concept illustration`}
        width={1536}
        height={1024}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-4 leading-relaxed text-slate-300">
          {description}
        </p>

        <ul
          aria-label={`${title} technologies`}
          className="mt-6 flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-teal-400/30 px-3 py-1 text-sm text-teal-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(githubUrl || liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-4 pt-8">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
                className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-4 py-2 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
              >
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2 font-semibold text-white transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard