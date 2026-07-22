import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems, profile, projects } from '../data/content.js'

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  const commands = useMemo(
    () => [
      ...navItems.map((n) => ({
        group: 'Navigate',
        label: `Go to ${n.label}`,
        icon: n.icon,
        run: () => document.getElementById(n.id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      ...projects.map((p) => ({
        group: 'Work',
        label: p.name,
        icon: '▣',
        run: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      })),
      {
        group: 'Actions',
        label: 'Copy email address',
        icon: '✉',
        run: () => navigator.clipboard?.writeText(profile.email),
      },
      {
        group: 'Actions',
        label: 'Download résumé',
        icon: '↓',
        run: () => window.open('#', '_blank'),
      },
    ],
    []
  )

  const filtered = useMemo(() => {
    if (!query.trim()) return commands
    const q = query.toLowerCase()
    return commands.filter((c) => c.label.toLowerCase().includes(q))
  }, [query, commands])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    const handler = (e) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      }
      if (e.key === 'Enter' && filtered[selected]) {
        filtered[selected].run()
        onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, filtered, selected, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="palette glass"
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Command palette"
          >
            <div className="palette-input-row">
              <span className="palette-search-icon">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelected(0)
                }}
                placeholder="Type a command or search…"
              />
              <kbd>ESC</kbd>
            </div>
            <div className="palette-list">
              {filtered.length === 0 && <div className="palette-empty">No results</div>}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  className={`palette-item ${i === selected ? 'selected' : ''}`}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => {
                    cmd.run()
                    onClose()
                  }}
                >
                  <span className="palette-item-icon">{cmd.icon}</span>
                  <span>{cmd.label}</span>
                  <span className="palette-item-group">{cmd.group}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <style>{`
            .palette-overlay {
              position: fixed;
              inset: 0;
              z-index: 200;
              background: rgba(72, 62, 40, 0.3);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              display: flex;
              justify-content: center;
              padding-top: 15vh;
            }
            .palette {
              width: min(560px, calc(100vw - 40px));
              height: fit-content;
              border-radius: var(--radius);
              box-shadow: var(--shadow-lg), var(--glow-accent);
              overflow: hidden;
            }
            .palette-input-row {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 16px 18px;
              border-bottom: 1px solid var(--border);
            }
            .palette-search-icon { color: var(--text-secondary); font-size: 18px; }
            .palette-input-row input {
              flex: 1;
              border: none;
              outline: none;
              background: transparent;
              font-size: 15px;
              font-family: var(--font-body);
              color: var(--text);
            }
            .palette-input-row input::placeholder { color: var(--text-secondary); }
            .palette-input-row kbd {
              font-family: var(--font-mono);
              font-size: 10px;
              color: var(--text-secondary);
              border: 1px solid var(--border);
              border-radius: 5px;
              padding: 2px 6px;
            }
            .palette-list { max-height: 320px; overflow-y: auto; padding: 8px; }
            .palette-empty { padding: 24px; text-align: center; color: var(--text-secondary); font-size: 14px; }
            .palette-item {
              display: flex;
              align-items: center;
              gap: 12px;
              width: 100%;
              padding: 11px 12px;
              border-radius: 10px;
              font-size: 14px;
              color: var(--text);
              text-align: left;
              transition: background 0.15s ease;
            }
            .palette-item.selected { background: var(--accent-soft); }
            .palette-item-icon { color: var(--accent); width: 20px; text-align: center; }
            .palette-item-group {
              margin-left: auto;
              font-family: var(--font-mono);
              font-size: 10px;
              color: var(--text-secondary);
              text-transform: uppercase;
              letter-spacing: 0.08em;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
