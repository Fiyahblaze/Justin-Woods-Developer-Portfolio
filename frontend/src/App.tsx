import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Your next chapter starts here.
        </h1>

        <p className="mt-4 text-slate-300">
          Building the Justin Woods developer portfolio.
        </p>
      </main>
    </div>
  )
}

export default App