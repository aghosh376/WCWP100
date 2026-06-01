# Agency Sold Back — Interactive Essay

A lightweight Vite + React + Tailwind + React Router site exploring how systems strip youth of agency and sell it back in virtual spaces.

## Develop

```bash
npm install
npm run dev
```

## Build (static deploy)

```bash
npm run build
```

Output is in `dist/`. For **GitHub Pages** project sites, set `base` in `vite.config.js` to your repo path (e.g. `'/WCWP100/'`), then deploy the `dist` folder.

## Project structure

```
src/
  components/   NavBar, HeroSection, CharacterCreatorTrap
  pages/        Home, Relevancy, Systems, Data
  data/         chart-placeholder.json (wire into Data page later)
public/
  images/       hero-tension.jpg (replace with your photo)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home + Character Creator Trap mini-game |
| `/relevancy` | Stakes and exigency |
| `/systems` | Real world vs. games contrast |
| `/data` | Static bar charts (JSON-ready) |
