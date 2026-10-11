import { useEffect, useRef } from 'react'

// Vertical dock that slides in from the right edge of the screen as the visitor starts scrolling.
export default function SideDock({ src, alt, w, h }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      // Off-screen at the top of the page; fully docked after scrolling about half a screen.
      const t = reduce ? 1 : Math.min(1, Math.max(0, window.scrollY / (vh * 0.5)))
      const ease = 1 - Math.pow(1 - t, 3)
      // Travel far enough to start fully off the right edge of the viewport.
      const travel = Math.max(0, window.innerWidth - el.getBoundingClientRect().left) + 20
      el.style.opacity = ease.toFixed(3)
      el.style.transform = `translateX(${((1 - ease) * travel).toFixed(1)}px)`
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
  }, [])

  return <img ref={ref} className="side-dock" src={src} alt={alt} width={w} height={h} />
}
