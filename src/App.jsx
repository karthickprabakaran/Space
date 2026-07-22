import { useEffect, useState } from 'react'
import MenuBar from './components/MenuBar.jsx'
import Dock from './components/Dock.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Pasture from './components/Pasture.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import DuskBand from './components/DuskBand.jsx'
import Contact from './components/Contact.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  useReveal()

  // ⌘K / Ctrl+K opens the command palette
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      {/* CSS dusk sky behind everything */}
      <div className="skyfield" aria-hidden="true">
        <div className="clouds" />
        <div className="clouds layer2" />
      </div>

      <MenuBar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Pasture />
        <Skills />
        <Projects />
        <Experience />
        <DuskBand />
        <Contact />
      </main>
      <Dock />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
