/* Full-width real-footage band — the peace at the end of the day.
   Footage: Oskar Gross (Pexels, free to use). */

const VIDEO = 'https://videos.pexels.com/video-files/33313967/14188001_2560_1440_24fps.mp4'
const POSTER = 'https://images.pexels.com/videos/33313967/droneview-swissbeauty-33313967.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function DuskBand() {
  return (
    <section className="dusk-band" aria-label="Quiet interlude">
      <video src={VIDEO} poster={POSTER} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
      <div className="dusk-scrim" />
      <div className="dusk-inner reveal">
        <span className="dusk-label">AT THE END OF THE DAY</span>
        <blockquote>
          “Ship something you’re proud of,<br />
          then go watch the sunset.”
        </blockquote>
      </div>

      <style>{`
        .dusk-band {
          position: relative;
          min-height: 62vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .dusk-band video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        /* Dusk-tinted scrim keeps the quote readable and sells the golden hour */
        .dusk-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(30, 32, 24, 0.4), rgba(46, 36, 24, 0.55) 55%, rgba(30, 32, 24, 0.45)),
            radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255, 170, 80, 0.18), transparent 75%);
        }
        .dusk-inner {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 96px 24px;
        }
        .dusk-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          color: #ffd98e;
          text-shadow: 0 1px 10px rgba(10, 12, 8, 0.8);
        }
        .dusk-inner blockquote {
          margin-top: 20px;
          font-family: var(--font-heading);
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 600;
          line-height: 1.25;
          color: #fffdf6;
          text-shadow: 0 2px 22px rgba(10, 12, 8, 0.8);
        }
      `}</style>
    </section>
  )
}
