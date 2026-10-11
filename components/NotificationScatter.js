import { useEffect, useRef, useState } from 'react'

// Notification cards floating over a section. Scroll progress through the section drives each card's
// entrance, parallax and tilt via CSS variables, so React never re-renders while scrolling.
export default function NotificationScatter({ items }) {
  const layer = useRef(null)
  const [gone, setGone] = useState(() => new Set())
  const dismiss = (i) => setGone((g) => new Set(g).add(i))

  useEffect(() => {
    const el = layer.current
    if (!el) return
    const section = el.parentElement
    const cards = Array.from(el.children)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const update = () => {
      frame = 0
      const r = section.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)))
      cards.forEach((c, i) => {
        const it = items[i]
        const t = reduce ? 1 : Math.min(1, Math.max(0, (p - 0.45 - i * 0.05) / 0.2))
        const ease = 1 - Math.pow(1 - t, 3)
        const drift = reduce ? 0 : (p - 0.5) * it.depth * 180
        const spin = reduce ? 0 : (p - 0.5) * it.depth * 12
        c.style.setProperty('--o', ease.toFixed(3))
        c.style.setProperty('--ty', `${(drift + (1 - ease) * 40).toFixed(1)}px`)
        c.style.setProperty('--tx', `${((1 - ease) * (it.x > 50 ? 60 : -60)).toFixed(1)}px`)
        c.style.setProperty('--r', `${(it.rot + spin).toFixed(2)}deg`)
        c.style.setProperty('--s', (0.88 + 0.12 * ease).toFixed(3))
      })
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [items])

  return (
    <div className="notif-layer" ref={layer}>
      {items.map((n, i) => (
        <div
          key={n.text}
          className={`notif${i > 2 ? ' extra' : ''}${gone.has(i) ? ' gone' : ''}`}
          style={{ left: `${n.x}%`, top: `${n.y}%`, background: n.bg, color: n.fg }}
        >
          <span className="bell">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 22a2.4 2.4 0 0 0 2.4-2.4h-4.8A2.4 2.4 0 0 0 12 22Zm7-6.2V11a7 7 0 0 0-5.2-6.8V3.4a1.8 1.8 0 0 0-3.6 0v.8A7 7 0 0 0 5 11v4.8l-1.6 1.6V18.6h17.2v-1.2L19 15.8Z"/></svg>
          </span>
          <b>{n.text}</b>
          <button type="button" className="x" aria-label={`Dismiss: ${n.text}`} onClick={() => dismiss(i)}>&times;</button>
        </div>
      ))}
    </div>
  )
}
