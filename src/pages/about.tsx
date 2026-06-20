import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import Footer from '../components/Footer'

const STACK = [
  'Python', 'TypeScript', 'Django', 'DRF', 'GraphQL', 'FastAPI',
  'React', 'React Native', 'Next.js', 'Tailwind',
  'PostgreSQL', 'Redis', 'Celery', 'Kafka', 'Elasticsearch', 'Docker', 'OpenAI API',
]

const LINKS = [
  {
    label: 'github.com/mashhoorahdal',
    href: 'https://github.com/mashhoorahdal',
    icon: (
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    ),
    fill: true,
  },
  {
    label: 'linkedin.com/in/mashhoor-ahdal',
    href: 'https://linkedin.com/in/mashhoor-ahdal',
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    fill: true,
  },
  {
    label: 'Portfolio',
    href: 'https://mashhoorahdal.github.io/portfolio/',
    icon: (
      <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </>
    ),
    fill: false,
  },
]

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About">
        <div className="space-y-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
              Mashhoor Ahdal
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              Full-Stack &amp; Backend Engineer · Malappuram, Kerala
            </p>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
            Full-stack engineer with 2 years building production backends and web apps in
            Python and React. I work across the stack — REST and GraphQL APIs, distributed
            systems, real-time data pipelines, billing systems, and LLM features — and
            contribute to open source.
          </p>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Now
            </h2>
            <div className="space-y-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Associate Software Engineer
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Turbolab Technologies (ScrapeHero) · Jun 2024 – Present
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                Backend services and APIs (Django, DRF, GraphQL) across a large-scale
                web-scraping SaaS — Redis-based credit metering, idempotent event pipelines,
                Stripe billing, and an LLM review-intelligence platform.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Building
            </h2>
            <div className="space-y-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">DevOps Tools</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                A server-inventory and operations console for a DevOps/SRE team — tracks
                cloud and dedicated servers, costs, backups, incidents and lifecycle, with
                scheduled provider sync. Django REST API + a React (Vite) SPA, containerised
                with Docker Compose.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Open Source
            </h2>
            <a
              href="https://github.com/pypi/warehouse"
              target="_blank"
              rel="noreferrer"
              className="block group w-fit"
            >
              <p className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                PyPI Warehouse
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Contributor to the codebase powering pypi.org — shipped email UX fixes,
                a reusable route helper, and WCAG accessibility improvements.
              </p>
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {STACK.map(tech => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Education
            </h2>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              B.Tech, Computer Science &amp; Engineering
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Government Engineering College, Sreekrishnapuram, Palakkad · 2020 – 2024
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Links
            </h2>
            <div className="space-y-3">
              {LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={link.fill ? 'currentColor' : 'none'}
                    stroke={link.fill ? 'none' : 'currentColor'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {link.icon}
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
