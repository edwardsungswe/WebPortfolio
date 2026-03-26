# Edward Sung — Personal Portfolio

Personal portfolio site for Edward Sung, software engineer. Live at [edwardsung.dev](https://edwardsung.dev).

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Content | MDX |
| Email | Resend |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Project Structure

```
app/                  # Next.js App Router pages
  page.tsx            # Home page (all sections)
  api/contact/        # Contact form API route (Resend)
  globals.css         # Global styles + Tailwind theme tokens
components/
  sections/           # Home page sections (Hero, About, Experience, Projects, Contact)
  AnimatedSection.tsx # Framer Motion scroll-triggered wrapper
  ContactForm.tsx     # Contact form client component
  Navigation.tsx      # Top nav
  Footer.tsx          # Footer
content/projects/     # MDX write-ups for individual project pages
lib/
  data.ts             # Single source of truth for all portfolio content
```

## Content

All portfolio content (name, bio, experience, skills, projects, social links) lives in **`lib/data.ts`**. Edit that file to update content across the entire site.

### Adding a Project

1. Add an entry to the `projects` array in `lib/data.ts` with a `slug`, `title`, `description`, `year`, and `tags`.
2. Optionally create `content/projects/<slug>.mdx` for an extended write-up.

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint
npx tsc --noEmit  # Type check
```

## Deployment

Deployed on **Vercel** via Git integration. Pushing to `main` triggers an automatic production deployment. Environment variables (e.g. `RESEND_API_KEY`) are configured in the Vercel project settings.
