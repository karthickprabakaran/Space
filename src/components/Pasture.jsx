/* Real footage interlude — cows grazing, shot in the Alps.
   Videos: Amanda von Imhof & Fazakas Iozsef (Pexels, free to use). */

const CLIPS = [
  {
    src: 'https://videos.pexels.com/video-files/18529980/18529980-hd_1080_1920_30fps.mp4',
    poster: 'https://images.pexels.com/videos/18529980/pexels-photo-18529980.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Where the calm comes from',
  },
  {
    src: 'https://videos.pexels.com/video-files/31807461/13550956_1080_1920_30fps.mp4',
    poster: 'https://images.pexels.com/videos/31807461/pexels-photo-31807461.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Slow scenery, fast shipping',
  },
]

export default function Pasture() {
  return (
    <section className="section pasture-section" aria-label="Nature interlude">
      <div className="pasture-grid">
        <div className="pasture-copy reveal">
          <span className="mono-label">✳ · How I Work</span>
          <h2>Calm process.<br />Sharp engineering.</h2>
          <p>
            7+ client projects, 100% delivered — because every build gets the same steady
            treatment: understand the problem, pick the right stack, own it from the first
            Figma mockup to the production deploy. No rushed launches, no loose ends.
          </p>
          <ul className="pasture-points">
            <li>End-to-end ownership — design, code, deploy, maintain</li>
            <li>Right tool for the job — stack chosen per problem, not habit</li>
            <li>Built to last — performance, SEO, and clean architecture baked in</li>
          </ul>
        </div>

        <div className="pasture-cards">
          {CLIPS.map((c, i) => (
            <figure key={c.src} className={`postcard reveal postcard-${i}`}>
              <video src={c.src} poster={c.poster} autoPlay muted loop playsInline preload="metadata" />
              <figcaption>{c.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .pasture-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .pasture-copy h2 {
          font-size: clamp(28px, 3.8vw, 40px);
          margin-top: 12px;
          color: var(--text);
        }
        .pasture-copy p {
          margin-top: 18px;
          color: var(--text-secondary);
          font-size: 16.5px;
          max-width: 460px;
        }
        .pasture-points {
          list-style: none;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pasture-points li {
          position: relative;
          padding-left: 26px;
          font-size: 15px;
          color: var(--text);
          font-weight: 500;
        }
        .pasture-points li::before {
          content: '❦';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .pasture-cards {
          display: flex;
          gap: 24px;
          justify-content: center;
        }
        .postcard {
          position: relative;
          width: min(46%, 240px);
          aspect-ratio: 9 / 15;
          border-radius: 18px;
          overflow: hidden;
          background: #24301f;
          border: 6px solid rgba(255, 255, 253, 0.92);
          box-shadow: var(--shadow-lg);
          transform: rotate(-2.5deg);
          transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
        }
        .postcard-1 { transform: rotate(2deg) translateY(28px); }
        .postcard:hover {
          transform: rotate(0deg) translateY(-6px) scale(1.03);
          box-shadow: var(--shadow-lg), 0 0 40px rgba(227, 162, 79, 0.25);
          z-index: 2;
        }
        .postcard video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .postcard figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 28px 14px 10px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: #f4f6ee;
          background: linear-gradient(transparent, rgba(16, 22, 14, 0.85));
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 860px) {
          .pasture-grid { grid-template-columns: 1fr; gap: 40px; }
          .postcard { width: 46%; }
          .postcard-1 { transform: rotate(2deg) translateY(12px); }
        }
      `}</style>
    </section>
  )
}
