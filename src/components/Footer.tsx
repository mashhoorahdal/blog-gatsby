import * as React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Mashhoor Ahdal
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mashhoorahdal"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://mashhoorahdal.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
