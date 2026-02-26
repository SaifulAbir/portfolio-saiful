# Saiful Islam — Developer Portfolio

A modern, interactive portfolio website showcasing my work as a full-stack software engineer. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

**Live site:** [saifulislam.pro](https://saifulislam.pro/)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Deployed on Netlify](https://img.shields.io/badge/Deployed-Netlify-00c7b7?logo=netlify)

---

## Features

- **Single-page layout** with smooth scroll navigation across all sections
- **Dark / Light mode** with system preference detection via `next-themes`
- **Framer Motion animations** — scroll-triggered transitions, animated badges, and hover effects
- **Fully responsive** — optimized for desktop, tablet, and mobile
- **Static export** — pre-rendered HTML for fast load times and easy hosting
- **Centralized content** — all site data lives in a single `data.json` for easy updates

## Sections

| Section       | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| **Hero**      | Intro with animated role titles, tech stack badges, and social links |
| **About**     | Bio and background summary                                         |
| **Skills**    | Categorized tech stack (Frontend, Backend, Databases, Tools & DevOps) |
| **Education** | Academic qualifications (M.Sc. & B.Sc.)                            |
| **Projects**  | Featured work with live demos and GitHub links                     |
| **Timeline**  | Career journey with role descriptions                              |
| **Contact**   | Email and social links                                             |

## Tech Stack

| Layer           | Technologies                                              |
| --------------- | --------------------------------------------------------- |
| **Framework**   | Next.js 15 (App Router), React 19                         |
| **Language**    | TypeScript 5                                              |
| **Styling**     | Tailwind CSS 4, shadcn/ui (New York style)                |
| **Animations**  | Framer Motion 12                                          |
| **Icons**       | Lucide React                                              |
| **Theming**     | next-themes                                               |
| **Linting**     | ESLint 9, Prettier 3                                      |
| **Deployment**  | Netlify (static export)                                   |

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
git clone https://github.com/SaifulAbir/portfolio-saiful.git
cd portfolio-saiful
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at [http://localhost:3000](http://localhost:3000) with Turbopack for fast refresh.

### Production Build

```bash
npm run build
```

Generates a static export in the `out/` directory, ready for deployment.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, and theme provider
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Tailwind imports and theme variables
├── components/
│   ├── ui/                 # shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── Hero.tsx            # Hero section with animated intro
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Tech stack grid
│   ├── Education.tsx       # Academic background
│   ├── Projects.tsx        # Featured projects showcase
│   ├── Timeline.tsx        # Career journey timeline
│   ├── Contact.tsx         # Contact form and links
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── Footer.tsx          # Footer with social links
│   ├── Loader.tsx          # Initial loading screen
│   └── ThemeProvider.tsx   # Dark/light mode context
├── lib/
│   ├── data.json           # All site content (edit this to update the site)
│   └── utils.ts            # Utility helpers (cn class merger)
public/
├── images/                 # Project screenshots
├── profile.jpg             # Profile photo
└── *.svg                   # Icon assets
```

## Customization

All portfolio content is driven by **`src/lib/data.json`**. To make it your own:

1. Update personal info, bio, and social links
2. Replace skills, projects, education, and timeline entries
3. Swap images in `public/` with your own
4. Adjust theme colors in `src/app/globals.css`

## Deployment

The project is configured for **Netlify** via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `out`
- SPA fallback redirect and security headers are pre-configured

To deploy elsewhere (Vercel, GitHub Pages, etc.), the static `out/` directory works with any static hosting provider.

## License

This project is open source and available for personal use and inspiration.

---

Built by [Saiful Islam](https://saifulislam.pro/)
