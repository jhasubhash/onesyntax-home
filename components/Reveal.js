import { useEffect, useRef, useState } from 'react'

// Fades and lifts its child in the first time it scrolls into view.
export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ '--rd': `${delay}ms` }}>{children}</Tag>
}
