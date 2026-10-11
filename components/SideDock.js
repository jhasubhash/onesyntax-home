import { useEffect, useRef } from 'react'
import DockWidgets from './DockWidgets'

// Vertical dock that slides in from the right edge of the screen as the visitor starts scrolling.
export default function SideDock({ dock }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      // Off-screen at the top of the page; fully docked after scrolling about a third of a screen.
      const t = reduce ? 1 : Math.min(1, Math.max(0, window.scrollY / (vh * 0.3)))
      const ease = 1 - Math.pow(1 - t, 3)
      // Travel far enough to start fully off the right edge of the viewport.
      const travel = Math.max(0, window.innerWidth - el.getBoundingClientRect().left) + 20
      el.style.opacity = ease.toFixed(3)
      el.style.transform = `translateX(${((1 - ease) * travel).toFixed(1)}px)`
      // clickable as soon as any of it is on screen, not only once it has finished sliding
      el.style.pointerEvents = t > 0.02 ? 'auto' : 'none'
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

  return (
    <div className="side-dock" ref={ref}>
      <DockWidgets dock={dock} placement="left" />
    </div>
  )
}
