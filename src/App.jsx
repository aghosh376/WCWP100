import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import RelevancyPage from './pages/RelevancyPage'
import SystemsPage from './pages/SystemsPage'
import DataPage from './pages/DataPage'

const basename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/relevancy" element={<RelevancyPage />} />
            <Route path="/systems" element={<SystemsPage />} />
            <Route path="/data" element={<DataPage />} />
          </Routes>
        </main>
        <footer className="border-t border-stone-200 bg-white py-6 text-center text-sm text-stone-500">
          Interactive essay — systems, youth, and virtual agency
        </footer>
      </div>
    </BrowserRouter>
  )
}
