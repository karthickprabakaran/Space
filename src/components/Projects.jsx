import { useRef } from 'react'
import { projects } from '../data/content.js'

/* Work section — big typographic tiles, spinning field-notes badge,
   index + arrow, details revealed on hover. */

function SpinBadge({ accent }) {
  return (
    <span className="spin-badge" style={{ '--tile-accent': accent }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text>
          <textPath href="#circlePath" startOffset="0">
            FIELD NOTES · HARVEST · FIELD NOTES · HARVEST ·
          </textPath>
        </text>
      </svg>
      <span className="spin-dot" />
    </span>
  )
}

function WorkTile({ p, index }) {
  const ref = useRef(null)

  // 3D tilt — the corner under the cursor pushes back
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a
      href={p.link}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="work-tile reveal"
      style={{ '--tile-accent': p.accent }}
    >
      <div className="work-tile-top">
        <SpinBadge accent={p.accent} />
        <span className="work-index">
          0{index}
          <span className="work-arrow">→</span>
        </span>
      </div>

      <h3 className="work-title">
        {p.name.split(' ').map((word) => (
          <span key={word} className="work-title-line">
            <span className="work-title-word">{word}</span>
          </span>
        ))}
      </h3>

      <div className="work-tile-bottom">
        <span className="work-type">{p.type} · {p.year}</span>
      </div>

      {/* Hover overlay with details */}
      <div className="work-overlay">
        <p>{p.description}</p>
        <div className="work-stack">
          {p.stack.map((t) => (
            <code key={t}>{t}</code>
          ))}
        </div>
        <span className="work-overlay-cta">See the work →</span>
      </div>
    </a>
  )
}

/* Footage: "Aerial View of Serene River and Forest Landscape" by K (Pexels, free to use) */
const VIDEO = 'https://videos.pexels.com/video-files/38105818/16179183_2560_1440_24fps.mp4'
const POSTER = 'https://images.pexels.com/videos/38105818/pexels-photo-38105818.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function Projects() {
  return (
    <section id="projects" className="work-scape">
      <video src={VIDEO} poster={POSTER} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
      <div className="work-scrim" />

      <div className="section work-section work-inner">
        <div className="section-header reveal">
          <span className="mono-label work-label">03 · The Harvest</span>
          <h2 className="work-h2">The harvest.</h2>
          <p className="work-p">Selected work — websites, web apps, and AI systems, each tended end-to-end.</p>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <WorkTile key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .work-scape {
          position: relative;
          overflow: hidden;
        }
        .work-scape > video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .work-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(16, 24, 18, 0.55), rgba(16, 24, 18, 0.55)),
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16, 24, 18, 0.12), rgba(16, 24, 18, 0.4));
        }
        .work-inner { position: relative; z-index: 1; }
        .work-label { color: #ffd98e !important; text-shadow: 0 1px 10px rgba(10, 14, 10, 0.8); }
        .section-header h2.work-h2 { color: #ffffff !important; text-shadow: 0 2px 20px rgba(10, 14, 10, 0.8); }
        .work-p { color: #e9eee1 !important; text-shadow: 0 1px 12px rgba(10, 14, 10, 0.85); }

        /* Gallery layout — irregular, staggered, asymmetric */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
          align-items: start;
        }
        .work-grid .work-tile:nth-child(1) { grid-column: 1 / 8; min-height: 400px; }
        .work-grid .work-tile:nth-child(2) { grid-column: 8 / 13; min-height: 340px; margin-top: 88px; }
        .work-grid .work-tile:nth-child(3) { grid-column: 1 / 6; min-height: 340px; margin-top: -36px; }
        .work-grid .work-tile:nth-child(4) { grid-column: 6 / 13; min-height: 400px; margin-top: 56px; }
        .work-grid .work-tile:nth-child(5) { grid-column: 1 / 7; min-height: 380px; margin-top: 12px; }
        .work-grid .work-tile:nth-child(6) { grid-column: 7 / 13; min-height: 330px; margin-top: 96px; }
        .work-tile {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 26px 28px;
          will-change: transform;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.7);
          background:
            radial-gradient(ellipse 90% 80% at 80% 110%, color-mix(in srgb, var(--tile-accent) 12%, transparent), transparent),
            rgba(255, 255, 252, 0.88);
          backdrop-filter: blur(18px) saturate(1.2);
          -webkit-backdrop-filter: blur(18px) saturate(1.2);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.5s var(--ease), border-color 0.5s var(--ease), box-shadow 0.5s var(--ease);
        }
        .work-tile:hover {
          transform: translateY(-6px);
          border-color: color-mix(in srgb, var(--tile-accent) 55%, transparent);
          box-shadow:
            var(--shadow-lg),
            0 0 40px color-mix(in srgb, var(--tile-accent) 20%, transparent);
        }

        .work-tile-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        /* Spinning circular-text badge */
        .spin-badge {
          position: relative;
          width: 72px;
          height: 72px;
          display: block;
        }
        .spin-badge svg {
          width: 100%;
          height: 100%;
          animation: spinBadge 14s linear infinite;
        }
        .work-tile:hover .spin-badge svg { animation-duration: 4s; }
        .spin-badge text {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.22em;
          fill: color-mix(in srgb, var(--tile-accent) 55%, #1c261d);
          opacity: 1;
        }
        .spin-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          border-radius: 50%;
          background: var(--tile-accent);
          box-shadow: 0 0 12px var(--tile-accent);
        }
        @keyframes spinBadge {
          to { transform: rotate(360deg); }
        }

        .work-index {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 15px;
          color: var(--text-secondary);
        }
        .work-arrow {
          font-size: 20px;
          color: var(--tile-accent);
          transition: transform 0.4s var(--ease);
        }
        .work-tile:hover .work-arrow { transform: translateX(6px); }

        /* Huge stacked title */
        .work-title {
          display: flex;
          flex-direction: column;
          margin: 28px 0;
        }
        .work-title-line { overflow: hidden; display: block; }
        .work-title-word {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: clamp(30px, 4.2vw, 46px);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.01em;
          color: var(--text);
          transition: transform 0.5s var(--ease), color 0.4s var(--ease);
        }
        .work-tile:hover .work-title-word {
          color: color-mix(in srgb, var(--tile-accent) 80%, #2c3a2e);
          transform: translateX(8px);
        }
        .work-tile:hover .work-title-line:nth-child(2) .work-title-word { transition-delay: 0.04s; }
        .work-tile:hover .work-title-line:nth-child(3) .work-title-word { transition-delay: 0.08s; }

        .work-type {
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        /* Hover overlay */
        .work-overlay {
          position: absolute;
          inset: auto 0 0 0;
          padding: 24px 28px;
          background: linear-gradient(transparent, rgba(255, 253, 248, 0.98) 30%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transform: translateY(100%);
          transition: transform 0.5s var(--ease);
        }
        .work-tile:hover .work-overlay { transform: translateY(0); }
        .work-overlay p {
          font-size: 13.5px;
          color: #37432f;
          margin-bottom: 14px;
        }
        .work-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
        .work-stack code {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 3px 9px;
          border-radius: 6px;
          background: rgba(244, 239, 228, 0.9);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }
        .work-overlay-cta {
          font-size: 13px;
          font-weight: 500;
          color: color-mix(in srgb, var(--tile-accent) 80%, #2c3a2e);
        }

        @media (max-width: 860px) {
          .work-grid { grid-template-columns: 1fr; }
          .work-grid .work-tile:nth-child(n) {
            grid-column: 1 / -1;
            margin-top: 0;
            min-height: 300px;
          }
          /* On touch devices show details statically */
          .work-overlay { position: static; transform: none; padding: 18px 0 0; background: none; backdrop-filter: none; }
        }
      `}</style>
    </section>
  )
}
