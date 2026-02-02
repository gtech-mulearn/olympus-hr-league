# Olympus – The HR League

A flagship HR experience designed to bridge academic learning and industry practice through real-world sessions, expert-led discussions, and meaningful professional connections.

**Organized by µLearn HR Interest Group**

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun

## Architecture

This project follows **server-first architecture** with Next.js App Router:

- **Route pages** are Server Components for optimal SSR and reduced JS bundle
- **Interactive elements** are isolated into Client Components
- **Configuration** is centralized in `src/config/`

### Project Structure

```
src/
├── app/                    # Route pages (Server Components)
│   ├── page.tsx           # Home
│   ├── about/             # About Olympus
│   ├── agenda/            # Event agenda
│   ├── contact/           # Contact form
│   ├── participants/      # Target audience
│   └── sponsors/          # Partnership info
├── components/            # Reusable components
│   ├── home/              # Home page client components
│   ├── about/             # About page client components
│   ├── contact/           # Contact page client components
│   ├── participants/      # Participants page client components
│   ├── sponsors/          # Sponsors page client components
│   └── ui/                # Shared UI components
├── config/                # Site configuration
│   └── site.ts            # Centralized site metadata
└── lib/                   # Utilities
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/gtech-mulearn/olympus-hr-league.git
cd olympus-hr-league

# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run Biome linter |
| `bun run format` | Format code with Biome |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, Why Olympus, What to Expect, and Recognition sections |
| `/about` | About Olympus, vision pillars, and differentiators |
| `/agenda` | Full event schedule with curved timeline |
| `/participants` | Target audience and participant benefits |
| `/sponsors` | Partnership opportunities and visibility impact |
| `/contact` | Contact information and inquiry form |

## Deployment

Build and deploy to any platform that supports Next.js:

```bash
bun run build
bun run start
```

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

© 2026 µLearn. All rights reserved.
