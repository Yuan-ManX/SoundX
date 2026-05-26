import { useEffect } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Playhead from './components/Playhead'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import TechSpecs from './components/TechSpecs'
import Demo from './components/Demo'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="relative min-h-screen" style={{ background: '#1a1a1a' }}>
      <ScrollProgress />
      <Playhead />
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <TechSpecs />
      <Demo />
      <Community />
      <Footer />
    </div>
  )
}

export default App
