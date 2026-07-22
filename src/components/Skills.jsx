import HUDPanel from './HUDPanel.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <span className="mono-label">02 · The Toolshed</span>
        <h2>The toolkit.</h2>
        <p>Full-stack range — from React frontends to NLP pipelines and cloud deploys.</p>
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <HUDPanel key={s.group} title={`shed/${s.group.toLowerCase().replace(/[^a-z-]/g, '')}.kit`}>
            <div className="skill-head">
              <span className="skill-icon">{s.icon}</span>
              <h3>{s.group}</h3>
              <span className="skill-status">● sharpened</span>
            </div>
            <div className="skill-tags">
              {s.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </HUDPanel>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .skill-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: var(--accent-soft);
          border: 1px solid var(--border);
          color: var(--accent);
          font-size: 17px;
        }
        .skill-head h3 { font-size: 19px; }
        .skill-status {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
          padding: 6px 13px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: rgba(255, 253, 248, 0.92);
          font-size: 13px;
          color: var(--text);
          transition: all 0.25s var(--ease);
          cursor: default;
        }
        .skill-tag:hover {
          border-color: var(--accent-warm);
          color: #8a5119;
          background: rgba(255, 244, 224, 0.98);
          transform: translateY(-2px);
          box-shadow: 0 0 14px rgba(227, 162, 79, 0.25);
        }
        @media (max-width: 720px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
