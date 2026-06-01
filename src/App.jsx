import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Relevancy from './pages/Relevancy'
import Systems from './pages/Systems'

const basename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="flex min-h-screen flex-col bg-zinc-950">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relevancy" element={<Relevancy />} />
            <Route path="/systems" element={<Systems />} />
          </Routes>
        </main>
        <footer className="border-t border-zinc-800 bg-zinc-900/80 py-5 text-center text-sm text-zinc-500">
          Interactive essay — real-world powerlessness and virtual agency
        </footer>
      </div>
    </BrowserRouter>
  )
}
