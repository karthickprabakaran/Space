import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'

export default function MenuBar({ onOpenPalette }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <header className="menubar glass">
      <div className="menubar-left">
        <span className="menubar-logo">✦</span>
        <span className="menubar-name">{profile.name}</span>
        <span className="menubar-sep">/</span>
        <span className="menubar-role">Mission Control</span>
      </div>
      <div className="menubar-right">
        <button className="menubar-cmd" onClick={onOpenPalette} aria-label="Open command palette">
          <span>Search</span>
          <kbd>⌘K</kbd>
        </button>
        <span className="menubar-status">
          <span className="status-dot" />
          {profile.status}
        </span>
        <span className="menubar-clock">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC+5:30
        </span>
      </div>

      <style>{`
        .menubar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 44px;
          padding: 0 20px;
          border-left: none;
          border-right: none;
          border-top: none;
          font-size: 13px;
        }
        .menubar-left, .menubar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .menubar-logo {
          color: var(--accent-2);
          font-size: 15px;
          filter: drop-shadow(0 0 6px rgba(79, 209, 255, 0.6));
        }
        .menubar-name { font-weight: 600; font-family: var(--font-heading); color: var(--text); }
        .menubar-sep { color: var(--border-bright); }
        .menubar-role { color: var(--text-secondary); font-family: var(--font-mono); font-size: 12px; }
        .menubar-cmd {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 12px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: rgba(20, 24, 46, 0.6);
          color: var(--text-secondary);
          font-size: 12px;
          transition: all 0.25s var(--ease);
        }
        .menubar-cmd:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 12px rgba(124, 140, 255, 0.2);
        }
        .menubar-cmd kbd {
          font-family: var(--font-mono);
          font-size: 10px;
          background: rgba(10, 12, 26, 0.8);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 1px 5px;
        }
        .menubar-status {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--text-secondary);
          font-size: 12px;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.15), 0 0 8px rgba(52, 211, 153, 0.6);
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.15), 0 0 8px rgba(52,211,153,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(52,211,153,0.05), 0 0 12px rgba(52,211,153,0.8); }
        }
        .menubar-clock { font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary); }
        @media (max-width: 720px) {
          .menubar-role, .menubar-status, .menubar-clock { display: none; }
        }
      `}</style>
    </header>
  )
}
