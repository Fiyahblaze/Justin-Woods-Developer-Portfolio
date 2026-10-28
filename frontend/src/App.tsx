import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App