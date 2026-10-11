import { useCallback, useEffect, useRef, useState } from 'react'

// A dock screenshot with clickable widgets. Clicking one opens that widget's real detail view,
// anchored beside the dock (a centred sheet on phones). Until the visitor tries one, the widgets
// pulse gently to say "these are clickable".
export default function DockWidgets({ dock, placement = 'above', hint }) {
  const wrap = useRef(null)
  const [active, setActive] = useState(null)
  const [pos, setPos] = useState({})
  const [touched, setTouched] = useState(false)

  const close = useCallback(() => setActive(null), [])

  const open = (w) => {
    setTouched(true)
    if (active === w.id) return close()
    const box = wrap.current.getBoundingClientRect()
    const sx = box.width / dock.w
    const sy = box.height / dock.h
    const cx = (w.x + w.w / 2) * sx
    const cy = (w.y + w.h / 2) * sy
    const { w: pw, h: ph } = w.shot
    if (placement === 'left') {
      const top = ph <= box.height ? Math.min(Math.max(cy - ph / 2, 0), box.height - ph) : 0
      setPos({ right: box.width - w.x * sx + 14, top, origin: 'right center' })
    } else {
      // keep the sheet inside the viewport horizontally
      const lo = 8 - box.left + pw / 2
      const hi = window.innerWidth - 8 - box.left - pw / 2
      const left = Math.min(Math.max(cx, lo), Math.max(lo, hi))
      setPos({ left, bottom: box.height - w.y * sy + 14, origin: `${50 + ((cx - left) / pw) * 100}% bottom` })
    }
    setActive(w.id)
  }

  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    const onDown = (e) => { if (wrap.current && !wrap.current.contains(e.target)) close() }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('touchstart', onDown, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('touchstart', onDown)
    }
  }, [active, close])

  const current = dock.widgets.find((w) => w.id === active)

  return (
    <div className={`dockw ${placement}${touched ? ' touched' : ''}`} ref={wrap}>
      <img src={dock.src} alt={dock.alt} width={dock.w} height={dock.h} loading="lazy" draggable={false} />
      {hint && !touched && (
        <span className="dock-hint" aria-hidden="true">{hint}<i>↓</i></span>
      )}
      {dock.widgets.map((w, i) => (
        <button
          key={w.id}
          type="button"
          className={`hot${active === w.id ? ' on' : ''}`}
          style={{
            left: `${(w.x / dock.w) * 100}%`, top: `${(w.y / dock.h) * 100}%`,
            width: `${(w.w / dock.w) * 100}%`, height: `${(w.h / dock.h) * 100}%`,
            '--d': `${i * 0.45}s`,
          }}
          aria-label={`${w.label} widget: show details`}
          aria-expanded={active === w.id}
          title={w.label}
          onClick={() => open(w)}
        >
          <span className="ring" />
        </button>
      ))}
      {current && (
        <>
          <div className="pop-backdrop" onClick={close} />
          <div
            className="pop"
            role="dialog"
            aria-label={`${current.label} details`}
            style={{ left: pos.left, right: pos.right, top: pos.top, bottom: pos.bottom, '--origin': pos.origin }}
          >
            <div className="pop-in" key={current.id}>
              <img src={current.shot.src} alt={`${current.label} widget, detail view`} width={current.shot.w} height={current.shot.h} />
              <button type="button" className="pop-x" onClick={close} aria-label="Close">&times;</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
