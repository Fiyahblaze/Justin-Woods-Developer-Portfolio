import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  )
}

export default App