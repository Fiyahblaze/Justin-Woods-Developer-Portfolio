function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Justin Woods
        </p>

        <p>Built with React, TypeScript, and Tailwind CSS.</p>

        <a
          href="#home"
          className="transition-colors hover:text-teal-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer