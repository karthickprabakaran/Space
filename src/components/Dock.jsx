import { useEffect, useState } from 'react'
import { navItems } from '../data/content.js'

export default function Dock() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="dock glass" aria-label="Section navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`dock-item ${active === item.id ? 'active' : ''}`}
          onClick={() => go(item.id)}
          aria-label={item.label}
        >
          <span className="dock-icon">{item.icon}</span>
          <span className="dock-tooltip">{item.label}</span>
          <span className="dock-indicator" />
        </button>
      ))}

      <style>{`
        .dock {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          display: flex;
          gap: 6px;
          padding: 8px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
        }
        .dock-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          font-size: 19px;
          color: var(--text-secondary);
          transition: all 0.3s var(--ease);
        }
        .dock-item:hover {
          background: var(--accent-soft);
          color: var(--accent);
          transform: translateY(-6px) scale(1.08);
        }
        .dock-item.active {
          color: var(--accent);
        }
        .dock-indicator {
          position: absolute;
          bottom: 3px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent-warm);
          box-shadow: 0 0 6px var(--accent-warm);
          opacity: 0;
          transition: opacity 0.3s var(--ease);
        }
        .dock-item.active .dock-indicator { opacity: 1; }
        .dock-tooltip {
          position: absolute;
          top: -38px;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(255, 253, 246, 0.96);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 11px;
          font-family: var(--font-mono);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateY(4px);
          transition: all 0.25s var(--ease);
          box-shadow: var(--shadow-sm);
        }
        .dock-item:hover .dock-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 720px) {
          .dock { bottom: 12px; gap: 2px; padding: 6px; }
          .dock-item { width: 42px; height: 42px; }
        }
      `}</style>
    </nav>
  )
}
