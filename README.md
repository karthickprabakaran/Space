# Space Portfolio — Mission Control

Dark, space-themed edition of the Portfolio OS. Same content, new universe: an animated 3D solar system hero (sun, five orbiting planets, Saturn rings, a moon, shooting stars), a drifting CSS starfield behind every section, and mission-control HUD panels instead of glass windows.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Customize

All content lives in one file: `src/data/content.js` — name, bio, skills, projects, experience, socials.

Design tokens (colors, fonts, radii, glows) are in `src/index.css` under `:root`.

Solar system tuning (planet sizes, orbit radii, speeds, colors) is in `src/components/SolarSystem.jsx` — each `<Planet>` takes `radius`, `size`, `speed`, `color`, plus optional `hasRing` / `hasMoon`.

## Structure

- `src/components/SolarSystem.jsx` — react-three-fiber solar system (lazy-loaded)
- `src/components/MenuBar.jsx` — mission-control top bar with live clock
- `src/components/Dock.jsx` — bottom dock navigation
- `src/components/CommandPalette.jsx` — ⌘K palette
- `src/components/HUDPanel.jsx` — reusable HUD window wrapper
- `src/components/Hero|About|Skills|Projects|Experience|Contact.jsx` — sections

## Deploy

Works out of the box on Vercel, Netlify, or GitHub Pages (`npm run build`, serve `dist/`).
