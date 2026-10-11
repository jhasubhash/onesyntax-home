import { useState } from 'react'

// Theme gallery: pick a theme, flip between its light and dark variant.
export default function ThemeTabs({ themes }) {
  const [i, setI] = useState(0)
  const [dark, setDark] = useState(false)
  const t = themes[i]
  return (
    <div className="themes">
      <div className="tabs" role="tablist">
        {themes.map((x, n) => (
          <button key={x.id} role="tab" aria-selected={n === i} className={n === i ? 'on' : ''} onClick={() => setI(n)}>{x.name}</button>
        ))}
      </div>
      <div className="theme-body">
        <div className="theme-copy">
          <h3>{t.name}</h3>
          <p className="lede">{t.blurb}</p>
          <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="seg" role="group" aria-label="Variant">
            <button className={!dark ? 'on' : ''} onClick={() => setDark(false)}>{t.lightName}</button>
            <button className={dark ? 'on' : ''} onClick={() => setDark(true)}>{t.darkName}</button>
          </div>
        </div>
        <div className="theme-shot">
          {themes.map((x, n) => [false, true].map((d) => (
            <img key={`${x.id}${d}`} src={d ? x.dark : x.light} alt={`${x.name} ${d ? x.darkName : x.lightName}`} width={960} height={600}
              loading={n === 0 && !d ? 'eager' : 'lazy'} className={n === i && d === dark ? 'show' : ''} />
          )))}
        </div>
      </div>
    </div>
  )
}
