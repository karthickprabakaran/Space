import HUDPanel from './HUDPanel.jsx'
import { profile } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header reveal">
        <span className="mono-label">01 · The Farmhouse</span>
        <h2>An engineer who ships,<br />and designs when it counts.</h2>
      </div>

      <div className="about-grid">
        <HUDPanel title="journal/evening-notes.md" className="about-main">
          {profile.bio.map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">7+</span>
              <span className="stat-label">Client projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Delivery rate</span>
            </div>
            <div className="stat">
              <span className="stat-num">800+</span>
              <span className="stat-label">Students mentored</span>
            </div>
          </div>
        </HUDPanel>

        <HUDPanel title="trail-rules.json" className="about-side">
          <ul className="principles">
            <li><span>01</span>Right tool for the job</li>
            <li><span>02</span>Own it end-to-end</li>
            <li><span>03</span>Clarity beats cleverness</li>
            <li><span>04</span>Ship, learn, refine</li>
          </ul>
        </HUDPanel>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .about-para { color: var(--text); margin-bottom: 18px; font-size: 15.5px; }
        .about-para:last-of-type { margin-bottom: 0; }
        .about-stats {
          display: flex;
          gap: 36px;
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .stat { display: flex; flex-direction: column; }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 30px;
          font-weight: 700;
          color: var(--accent);
        }
        .stat-label { font-size: 12.5px; color: var(--text-secondary); margin-top: 2px; }
        .principles { list-style: none; display: flex; flex-direction: column; gap: 18px; }
        .principles li {
          display: flex;
          gap: 14px;
          align-items: baseline;
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 500;
        }
        .principles li span {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-warm);
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
