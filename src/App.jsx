import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Relevancy from './pages/Relevancy'
import Systems from './pages/Systems'
import Topics from './pages/Topics'

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-zinc-950">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relevancy" element={<Relevancy />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </main>
        <footer className="border-t border-zinc-800 bg-zinc-900/80 py-5 text-center text-sm text-zinc-500">
          Interactive essay — real-world powerlessness and virtual agency
        </footer>
      </div>
    </HashRouter>
  )
}
