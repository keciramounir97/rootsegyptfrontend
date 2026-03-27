# Roots Egypt

A specialized genealogy and cultural heritage platform focused on the Nile Valley and Egyptian history. Helps users discover, build, and preserve family histories through interactive family trees, archival records, and oral traditions.

## Project Structure

- `frontend/` - React + Vite application (TypeScript)
- `photos/` - Project imagery assets
- `README.md` - Basic project readme

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6 with `@vitejs/plugin-react-swc`
- **Styling**: Tailwind CSS v4 + Framer Motion + GSAP
- **State**: Zustand + TanStack Query v5
- **Data Viz**: D3.js (family tree), Leaflet (maps)
- **Routing**: React Router DOM v7
- **Language**: TypeScript
- **Package Manager**: npm

## Key Features

- Family Tree Builder (D3-based, GEDCOM 5.5.1/7.0 support)
- Genealogy Library (manuscripts, Ottoman records, Coptic registers)
- Oral History recording/playback
- Historical Timeline (Pharaonic to Contemporary)
- Multi-language support: English, French, Arabic (RTL), Spanish

## Development

```bash
cd frontend
npm install
npm run dev   # Runs on port 5000
```

## Configuration

- `frontend/vite.config.js` - Vite config (port 5000, host 0.0.0.0, allowedHosts: true for Replit proxy)
- `frontend/.env.example` - Environment variable template
- `frontend/tailwind.config.js` - Tailwind configuration
- `frontend/tsconfig.json` - TypeScript configuration

## Deployment

Configured as a static site deployment:
- Build: `cd frontend && npm run build`
- Public Dir: `frontend/dist`
