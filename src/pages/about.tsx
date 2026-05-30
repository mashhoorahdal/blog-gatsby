import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About">
        <div className="space-y-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
              Mashhoor Ahdal
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">BTech Computer Science</p>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
            Full-stack developer with a strong foundation in computer science. I build dynamic,
            responsive web applications with React on the frontend and Python (Django, Flask)
            on the backend — integrated with MySQL databases.
          </p>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Python', 'Django', 'Flask', 'MySQL', 'Gatsby'].map(tech => (
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
              Links
            </h2>
            <div className="space-y-3">
              <a
                href="https://github.com/mashhoorahdal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/mashhoorahdal
              </a>
              <a
                href="https://mashhoorahdal.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Portfolio
              </a>
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
