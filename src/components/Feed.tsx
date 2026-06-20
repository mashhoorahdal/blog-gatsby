import * as React from 'react'
import { navigate, Link } from 'gatsby'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'

export type FeedPost = {
  id: string
  title: string
  date: string
  slug: string
  hook?: string
  excerpt?: string
}

type FeedProps = {
  posts: FeedPost[]
}

// ── deterministic gradient from slug ────────────────────────────────
// Same slug always yields the same look. Two hues a fixed distance apart
// so every card feels related but distinct.
const hashString = (s: string): number => {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

const gradientFor = (slug: string): string => {
  const h = hashString(slug)
  const hue = h % 360
  const hue2 = (hue + 50) % 360
  const angle = 120 + (h % 90)
  return `linear-gradient(${angle}deg, hsl(${hue} 70% 22%), hsl(${hue2} 75% 12%))`
}

const SWIPE_LOCK_MS = 720

const Feed = ({ posts }: FeedProps) => {
  const reduce = useReducedMotion()
  // index === posts.length is the end-card
  const total = posts.length + 1
  const [[index, dir], setState] = React.useState<[number, number]>([0, 0])
  const locked = React.useRef(false)

  const go = React.useCallback(
    (next: number, direction: number) => {
      if (next < 0 || next >= total) return
      if (locked.current) return
      locked.current = true
      setState([next, direction])
      window.setTimeout(() => {
        locked.current = false
      }, reduce ? 0 : SWIPE_LOCK_MS)
    },
    [total, reduce]
  )

  // restore position when returning from an article
  React.useEffect(() => {
    const saved = sessionStorage.getItem('feed:index')
    if (saved !== null) {
      const i = Math.min(parseInt(saved, 10) || 0, total - 1)
      setState([i, 0])
    }
  }, [total])

  // wheel + keyboard input
  React.useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 20) return
      go(index + (e.deltaY > 0 ? 1 : -1), e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'j') go(index + 1, 1)
      else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k') go(index - 1, -1)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [index, go])

  const openPost = (slug: string) => {
    sessionStorage.setItem('feed:index', String(index))
    navigate(`/blog/${slug}`)
  }

  // ── motion variants: parallax depth slide ─────────────────────────
  // gradient layer moves slower than the text layer → depth.
  const dist = (mult: number): Variants =>
    reduce
      ? {
          enter: { opacity: 0 },
          center: { opacity: 1, transition: { duration: 0.2 } },
          exit: { opacity: 0, transition: { duration: 0.15 } },
        }
      : {
          enter: (d: number) => ({ y: `${d > 0 ? 100 : -100 * 0.4 * mult}%`, opacity: 0 }),
          center: {
            y: '0%',
            opacity: 1,
            transition: { type: 'spring', stiffness: 260, damping: 32, mass: 0.9 },
          },
          exit: (d: number) => ({
            // outgoing recedes: scale down, dim, drift back
            y: `${d > 0 ? -12 * mult : 100}%`,
            opacity: 0,
            transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
          }),
        }

  const cardVariants: Variants = reduce
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: { scale: 1 },
        center: { scale: 1 },
        exit: { scale: 0.92, transition: { duration: 0.45 } },
      }

  const bgLayer = dist(0.45) // slow → background
  const textLayer = dist(1) // fast → foreground

  const isEnd = index === posts.length
  const post = posts[index]
  const nextGradient =
    index + 1 < posts.length
      ? gradientFor(posts[index + 1].slug)
      : index + 1 === posts.length
        ? 'linear-gradient(135deg, hsl(240 6% 18%), hsl(240 6% 10%))'
        : null

  return (
    <div className="fixed inset-0 overflow-hidden bg-zinc-950 text-zinc-100 select-none">
      {/* floating minimal nav */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 h-14">
        <Link to="/" className="font-bold text-lg tracking-tight text-white/90 hover:text-white">
          MA.
        </Link>
        <Link
          to="/blog"
          className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
        >
          Index
        </Link>
      </div>

      <AnimatePresence custom={dir} mode="popLayout" initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 will-change-transform"
          drag={reduce ? false : 'y'}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.y < -80) go(index + 1, 1)
            else if (info.offset.y > 80) go(index - 1, -1)
          }}
        >
          {isEnd ? (
            <EndCard />
          ) : (
            <button
              type="button"
              onClick={() => openPost(post.slug)}
              className="group absolute inset-0 w-full h-full text-left cursor-pointer"
              aria-label={`Read: ${post.title}`}
            >
              {/* gradient bg — slow parallax layer */}
              <motion.div
                custom={dir}
                variants={bgLayer}
                className="absolute inset-0"
                style={{ background: gradientFor(post.slug) }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
              </motion.div>

              {/* content — fast parallax layer, centered readable column */}
              <motion.div
                custom={dir}
                variants={textLayer}
                className="relative z-10 h-full flex items-center"
              >
                <div className="mx-auto w-full max-w-2xl px-6">
                  <div className="font-mono text-xs tracking-widest text-white/50 mb-5">
                    {String(index + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.02] text-white">
                    {post.title}
                  </h2>
                  {(post.hook || post.excerpt) && (
                    <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                      {post.hook || post.excerpt}
                    </p>
                  )}
                  <div className="mt-8 flex items-center gap-3 text-sm">
                    <span className="text-white/50">{post.date}</span>
                    <span className="text-white/30">·</span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-white group-hover:gap-2.5 transition-all">
                      Read
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* peek of next card — baits the swipe */}
      {nextGradient && (
        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          aria-label="Next"
          className="absolute bottom-0 inset-x-0 z-20 h-8 flex items-end justify-center group"
        >
          <div className="absolute inset-0" style={{ background: nextGradient }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="relative z-10 mb-1 text-white/70 text-xs"
          >
            ⌄
          </motion.span>
        </button>
      )}

      {/* dot rail */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={i === posts.length ? 'End' : `Post ${i + 1}`}
            onClick={() => go(i, i > index ? 1 : -1)}
            className={`rounded-full transition-all ${
              i === index ? 'h-5 w-1.5 bg-white' : 'h-1.5 w-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const EndCard = () => (
  <div className="absolute inset-0 flex items-center bg-zinc-900">
    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(240 6% 16%), hsl(240 6% 8%))' }} />
    <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center">
      <p className="font-mono text-xs tracking-widest text-white/40 mb-5">END</p>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
        You&apos;re all caught up.
      </h2>
      <p className="mt-5 text-lg text-white/70 leading-relaxed">
        That&apos;s everything for now. I write about software, programming, and things I&apos;m
        figuring out.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Browse the index
        </Link>
        <Link
          to="/about"
          className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
        >
          About me
        </Link>
      </div>
    </div>
  </div>
)

export default Feed
