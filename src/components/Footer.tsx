import * as React from 'react'

const links = [
  { label: 'GitHub', href: 'https://github.com/mashhoorahdal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mashhoor-ahdal' },
  { label: 'Portfolio', href: 'https://mashhoorahdal.github.io/portfolio/' },
]

const Footer = () => {
  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/25 dark:to-transparent">
      {/* analogous indigo→violet accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent dark:via-indigo-400/60" />

      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()}{' '}
          <span className="font-medium text-indigo-600 dark:text-indigo-400">Mashhoor Ahdal</span>
        </p>

        <div className="flex items-center gap-5">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
