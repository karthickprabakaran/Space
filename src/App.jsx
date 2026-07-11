import { useEffect, useState } from 'react'
import MenuBar from './components/MenuBar.jsx'
import Dock from './components/Dock.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
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
      {/* CSS starfield behind everything */}
      <div className="starfield" aria-hidden="true">
        <div className="stars" />
        <div className="stars layer2" />
      </div>

      <MenuBar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Dock />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
