import { useState } from 'react'
import HUDPanel from './HUDPanel.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header reveal" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <span className="mono-label">05 · Open Channel</span>
        <h2>Let’s build something.</h2>
        <p style={{ margin: '16px auto 0' }}>
          Open to full-time roles and select freelance projects. Transmission answered within 24 hours, usually faster.
        </p>
      </div>

      <div className="contact-wrap">
        <HUDPanel title="comms/uplink.app">
          <div className="contact-inner">
            <button className="contact-email" onClick={copyEmail}>
              <span className="contact-email-text">{profile.email}</span>
              <span className={`contact-copy ${copied ? 'copied' : ''}`}>
                {copied ? '✓ Copied' : '⧉ Copy'}
              </span>
            </button>

            <div className="contact-socials">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact-social">
                  {s.label} <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </HUDPanel>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <code>Transmitted from Earth · React · Three.js · ☕</code>
      </footer>

      <style>{`
        .contact-section { padding-bottom: 160px; }
        .contact-wrap { max-width: 620px; margin: 0 auto; }
        .contact-inner { display: flex; flex-direction: column; gap: 28px; align-items: center; }
        .contact-email {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 28px;
          border-radius: 14px;
          border: 1px solid var(--border-bright);
          background: rgba(20, 24, 46, 0.5);
          transition: all 0.3s var(--ease);
        }
        .contact-email:hover {
          border-color: var(--accent);
          box-shadow: 0 8px 28px rgba(124, 140, 255, 0.25), var(--glow-accent);
          transform: translateY(-2px);
        }
        .contact-email-text {
          font-family: var(--font-heading);
          font-size: clamp(17px, 3vw, 22px);
          font-weight: 600;
          color: var(--text);
        }
        .contact-copy {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 4px 10px;
          transition: all 0.3s var(--ease);
        }
        .contact-copy.copied {
          color: #34d399;
          border-color: #34d399;
          background: rgba(52, 211, 153, 0.08);
          box-shadow: 0 0 12px rgba(52, 211, 153, 0.25);
        }
        .contact-socials { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
        .contact-social {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: rgba(20, 24, 46, 0.5);
          font-size: 13.5px;
          font-weight: 500;
          transition: all 0.3s var(--ease);
        }
        .contact-social span { color: var(--text-secondary); transition: transform 0.3s var(--ease); }
        .contact-social:hover {
          border-color: var(--accent-2);
          color: var(--accent-2);
          transform: translateY(-3px);
          box-shadow: 0 0 16px rgba(79, 209, 255, 0.15);
        }
        .contact-social:hover span { transform: translate(2px, -2px); color: var(--accent-2); }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          max-width: 1080px;
          margin: 100px auto 0;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          font-size: 13px;
          color: var(--text-secondary);
        }
        .footer code { font-family: var(--font-mono); font-size: 11.5px; }
      `}</style>
    </section>
  )
}
