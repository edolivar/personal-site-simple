# GEMINI.md

## Project Overview

**thedwincmpy-site** is a modern personal portfolio and blog for Edwin Jim Olivares. It is built using the latest web technologies, focusing on a minimalist, developer-centric aesthetic.

- **Main Technologies:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4.
- **Key Features:**
  - **Data-Driven Content:** All profile information, work experience, projects, and blog metadata are managed in `src/data/data.ts`.
  - **Minimalist Aesthetic:** Uses a custom `Lilex Nerd Font` and a black/white/light-green color palette.
  - **Keyboard Navigation:** Custom keyboard shortcuts (`h` for home, `p` for projects, `b` for blogs) implemented in the `NavBar` component.
  - **Dynamic Text Effects:** Uses `use-scramble` for interactive text animations.

## Building and Running

### Prerequisites
- Node.js (v20+ recommended)
- `pnpm` (preferred) or `npm`

### Commands
| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` (Runs with `--turbopack`) |
| **Build** | `npm run build` |
| **Start Production** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

### Content Management
- **Avoid hardcoding text in page files.** Instead, update `src/data/data.ts`. This ensures a single source of truth for all portfolio content.
- **Blog Posts:** Currently, blog content is stored as an array of strings in `src/data/data.ts`. Long-term, this may transition to MDX or a CMS.

### Styling
- **Tailwind CSS 4:** The project uses the latest Tailwind version. Custom theme variables (e.g., `--color-light-green`, `--font-family-lilex`) and component classes are defined in `src/app/globals.css`.
- **Responsive Design:** Follow the standard Tailwind breakpoints (`sm`, `md`, `lg`).

### Components
- **Client vs. Server Components:** Use `"use client"` only when necessary (e.g., for hooks like `useEffect`, `useRouter`, or interactive elements like the `NavBar` keyboard listener).
- **Navigation:** Use the `NavBar` component for site-wide navigation. Note the `useEffect` hook for keyboard shortcuts.

### Architecture
- **App Router:** Routing is handled via the `src/app` directory.
- **Layouts:** `src/app/layout.tsx` contains the base structure and global styles.
- **Components:** Reusable UI elements should be placed in `src/components`.

## Key Files
- `src/data/data.ts`: The central repository for all site content.
- `src/app/globals.css`: Tailwind 4 configuration and global component styles.
- `src/components/nav-bar.tsx`: Implements the main navigation and keyboard shortcuts.
- `src/app/page.tsx`: The landing page/home view.
- `src/app/blogs/b/[id]/page.tsx`: Dynamic route for individual blog posts.
