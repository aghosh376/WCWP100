import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Relevancy from './pages/Relevancy'
import Systems from './pages/Systems'
import Data from './pages/Data'

const basename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relevancy" element={<Relevancy />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-200 bg-white py-5 text-center text-sm text-slate-500">
          Interactive essay — real-world powerlessness and virtual agency
        </footer>
      </div>
    </BrowserRouter>
  )
}
