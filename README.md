# The Gilded Cage

> **A browser-based, text-forward MMO where your choices reshape a living, breathing world**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

The Gilded Cage combines the narrative depth of a CRPG with the emergent economy of a management sim, all powered by AI. It's a massively multiplayer experience where:

- **Every action matters** — Your decisions ripple through a real-time global economy
- **The world reacts** — An AI Game Master narrates your story and drives dynamic world events
- **No page reloads** — Real-time updates keep you immersed in the action
- **Player-driven chaos** — Hoard resources, burn buildings, or build empires — the choice is yours

## Tech Stack

- **Frontend**: React (Vite) + TailwindCSS
- **Backend**: Convex (real-time database + serverless functions)
- **Language**: TypeScript
- **AI**: Google Gemini 1.5 (Flash for player actions, Pro for world events)
- **Auth**: Convex Auth / Clerk

## Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/gilded-cage.git
cd gilded-cage

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Convex and Gemini API keys

# Run the development server
npm run dev
```

## Contributing

The Gilded Cage is **open source** (MIT License) and we welcome contributions! Feel free to:

- Fork the repository
- Create a feature branch
- Submit a Pull Request

## Author

**Tomiwa Amole**

Reach out to me on Twitter: [@tomiwa_amole](https://twitter.com/tomiwa_amole)

---

_"In The Gilded Cage, freedom is an illusion — but the game is very, very real."_
