import { motion } from 'framer-motion'
import { profile } from '../data/content.js'

/* Real footage: "Breathtaking Aerial View of Swiss Alps" by Oskar Gross (Pexels, free to use) */
const HERO_VIDEO = 'https://videos.pexels.com/video-files/33313967/14188001_2560_1440_24fps.mp4'
const HERO_POSTER = 'https://images.pexels.com/videos/33313967/droneview-swissbeauty-33313967.jpeg?auto=compress&cs=tinysrgb&w=1920'

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
      <video
        className="hero-video"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero-scrim" />

      <div className="hero-content">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="hero-badge">
          <span className="status-dot-sm" />
          {profile.status} · {profile.location}
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
          {profile.tagline.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="hero-accent">{profile.tagline.split(' ').slice(-2).join(' ')}</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="hero-sub">
          {profile.role} — tending the full stack, from React frontends to NLP pipelines, with just enough design sense to make it shine.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="hero-ctas">
          <a href="#projects" className="btn btn-primary">Walk the Trail →</a>
          <a href="#contact" className="btn btn-hero-ghost">Write to Me</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="hero-scroll-hint"
        >
          <span className="scroll-line" />
          wander down
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
          background: #2a3a30; /* readable fallback while the video loads */
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        /* Dark scrim so white text always passes contrast over the footage */
        .hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(rgba(18, 26, 20, 0.35), rgba(18, 26, 20, 0.45) 45%, rgba(18, 26, 20, 0.4)),
            radial-gradient(ellipse 90% 70% at 50% 45%, rgba(18, 26, 20, 0.15), rgba(18, 26, 20, 0.4));
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
          font-weight: 500;
          color: #f2f4ec;
          margin-bottom: 32px;
          background: rgba(24, 34, 26, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .status-dot-sm {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #7ed99a;
          box-shadow: 0 0 10px rgba(126, 217, 154, 0.9);
        }
        .hero h1 {
          font-size: clamp(40px, 7vw, 78px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-shadow: 0 2px 24px rgba(10, 16, 12, 0.75);
        }
        .hero-accent {
          background: linear-gradient(120deg, #ffd98e, #a8e6b8);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 16px rgba(10, 16, 12, 0.6));
        }
        .hero-sub {
          margin: 28px auto 40px;
          max-width: 580px;
          font-size: 18px;
          color: #eef1e8;
          text-shadow: 0 1px 14px rgba(10, 16, 12, 0.8);
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-hero-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.55);
          background: rgba(24, 34, 26, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s var(--ease);
        }
        .btn-hero-ghost:hover {
          border-color: #ffd98e;
          color: #ffd98e;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(255, 217, 142, 0.25);
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
          color: #dfe5d6;
          text-shadow: 0 1px 10px rgba(10, 16, 12, 0.8);
        }
        .scroll-line {
          width: 1px;
          height: 42px;
          background: linear-gradient(#ffd98e, transparent);
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
