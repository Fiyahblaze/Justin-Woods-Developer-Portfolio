import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App