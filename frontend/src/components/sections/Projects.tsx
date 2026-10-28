import ProjectCard from '../ui/ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <p className="text-sm uppercase tracking-widest text-teal-400">
        Selected work
      </p>

      <h2
        id="projects-heading"
        className="mt-3 text-3xl font-bold sm:text-4xl"
      >
        Featured projects
      </h2>

      <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
        Applications I’ve built while developing my skills in frontend
        development, backend APIs, and full-stack integration.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="ToolShare"
          image="/images/toolshare.png"
          description="A community tool-sharing application where owners manage listings and borrowers request tools. Includes authentication and a dashboard for managing listings and requests."
          technologies={[
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
          ]}
          githubUrl="https://github.com/Fiyahblaze/ToolShare-Capstone-Project-Frontend"
        />

        <ProjectCard
          title="IP Address Tracker"
          image="/images/ip-tracker.png"
          description="An application that looks up IP address information and displays its approximate location on an interactive map."
          technologies={['React', 'TypeScript', 'Leaflet', 'IPify API']}
          githubUrl="https://github.com/Fiyahblaze/Project-IP-Tracker-React-Development"
        />

        <ProjectCard
          title="Zenith Product API"
          image="/images/zenith-api.png"
          description="A RESTful product API supporting create, read, update, and delete operations, with filtering, sorting, and pagination."
          technologies={['JavaScript', 'Node.js', 'Express', 'MongoDB']}
          githubUrl="https://github.com/Fiyahblaze/SBA-13-Integrating-A-Database-Build-A-Product-API"
        />
      </div>
    </section>
  )
}

export default Projects