import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content.js'

const SolarSystem = lazy(() => import('./SolarSystem.jsx'))

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.2 + i * 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Suspense fallback={null}>
        <SolarSystem />
      </Suspense>

      <div className="hero-vignette" />

      <div className="hero-content">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="hero-badge glass">
          <span className="status-dot-sm" />
          {profile.status} · {profile.location}
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
          {profile.tagline.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="hero-accent">{profile.tagline.split(' ').slice(-2).join(' ')}</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="hero-sub">
          {profile.role} — navigating the full stack, from React frontends to NLP pipelines, with just enough design sense to make it shine.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="hero-ctas">
          <a href="#projects" className="btn btn-primary">Explore Missions →</a>
          <a href="#contact" className="btn btn-ghost">Open a Channel</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="hero-scroll-hint"
        >
          <span className="scroll-line" />
          begin descent
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(ellipse 90% 70% at 50% 45%, transparent 55%, rgba(5, 6, 15, 0.75)),
            linear-gradient(rgba(5, 6, 15, 0.25), transparent 30%, transparent 70%, var(--bg));
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 860px;
          padding: 0 24px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 32px;
          box-shadow: var(--shadow-sm);
        }
        .status-dot-sm {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
        }
        .hero h1 {
          font-size: clamp(40px, 7vw, 78px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #fff;
          text-shadow: 0 4px 40px rgba(5, 6, 15, 0.9);
        }
        .hero-accent {
          background: linear-gradient(120deg, var(--accent), var(--accent-2));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 24px rgba(124, 140, 255, 0.35));
        }
        .hero-sub {
          margin: 28px auto 40px;
          max-width: 560px;
          font-size: 18px;
          color: var(--text-secondary);
          text-shadow: 0 2px 20px rgba(5, 6, 15, 0.9);
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: -16vh;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }
        .scroll-line {
          width: 1px;
          height: 42px;
          background: linear-gradient(var(--accent-2), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}
