// Reusable HUD panel — the space-station window
export default function HUDPanel({ title, children, className = '' }) {
  return (
    <div className={`hud-panel reveal ${className}`}>
      <div className="hud-bar">
        <span className="hud-light" />
        <span className="hud-light cyan" />
        <span className="hud-light warm" />
        <span className="hud-title">{title}</span>
      </div>
      <div className="hud-body">{children}</div>
    </div>
  )
}
