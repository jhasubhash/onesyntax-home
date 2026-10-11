import { useEffect, useRef } from 'react'

// Muted looping video that only plays while it is on screen.
export default function AutoVideo({ src, poster, label, w, h }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { v.removeAttribute('autoplay'); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() },
      { threshold: 0.25 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <video ref={ref} className="hero-shot" src={src} poster={poster} aria-label={label} width={w} height={h}
      autoPlay muted loop playsInline preload="auto" controls={false} />
  )
}
