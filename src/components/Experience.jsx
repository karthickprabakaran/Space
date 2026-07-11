import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <span className="mono-label">04 · Flight Path</span>
        <h2>The trajectory.</h2>
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <div key={job.company} className="timeline-item reveal">
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {i < experience.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-card glass">
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <span className="timeline-company">{job.company}</span>
                </div>
                <code className="timeline-period">{job.period}</code>
              </div>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline { display: flex; flex-direction: column; }
        .timeline-item {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 20px;
        }
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 28px;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg);
          border: 3px solid var(--accent-2);
          box-shadow: 0 0 12px rgba(79, 209, 255, 0.6), 0 0 0 4px rgba(79, 209, 255, 0.1);
          flex-shrink: 0;
        }
        .timeline-line {
          width: 1.5px;
          flex: 1;
          background: linear-gradient(var(--accent-2), var(--border));
          margin: 8px 0;
          opacity: 0.4;
        }
        .timeline-card {
          border-radius: var(--radius);
          padding: 26px 28px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s var(--ease);
        }
        .timeline-card:hover {
          transform: translateX(6px);
          box-shadow: var(--shadow-md), var(--glow-accent);
          border-color: var(--border-bright);
        }
        .timeline-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 14px;
        }
        .timeline-head h3 { font-size: 18px; }
        .timeline-company { color: var(--accent-2); font-size: 14px; font-weight: 500; }
        .timeline-period {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          background: rgba(20, 24, 46, 0.6);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 7px;
          white-space: nowrap;
        }
        .timeline-card ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .timeline-card li {
          font-size: 14.5px;
          color: var(--text-secondary);
          padding-left: 18px;
          position: relative;
        }
        .timeline-card li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: var(--accent-2);
        }
      `}</style>
    </section>
  )
}
