import CopyCommand from './CopyCommand'
import AutoVideo from './AutoVideo'
import SideDock from './SideDock'
import NotificationScatter from './NotificationScatter'

export default function Project({ p, flip }) {
  const [first, ...others] = p.images
  const hero = p.video ? null : first
  const rest = p.video ? p.images : others
  const wide = rest.filter((i) => i.wide)
  const thumbs = rest.filter((i) => !i.wide)
  return (
    <section id={p.id} className={`project${flip ? ' flip' : ''}`} style={{ '--accent': p.accent }}>
      {p.notifications && <NotificationScatter items={p.notifications} />}
      <div className="copy-col">
        <div className="meta">
          <span className="pill">{p.platform}</span>
          {p.badge && <span className="pill accent">{p.badge}</span>}
          <span className="pill">{p.license}</span>
        </div>
        <h2>{p.name}</h2>
        <p className="tag">{p.tagline}</p>
        <p className="desc">{p.description}</p>
        <ul className="features">
          {p.features.map(([t, d]) => (
            <li key={t}><b>{t}</b><span>{d}</span></li>
          ))}
        </ul>
        <CopyCommand command={p.install} />
        <div className="links">
          {p.links.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} &rarr;</a>
          ))}
        </div>
        <p className="stack">{p.stack.join(' · ')}</p>
      </div>
      <div className="shots">
        {p.sideDock && <SideDock {...p.sideDock} />}
        {p.video ? (
          <AutoVideo {...p.video} />
        ) : (
          <img className="hero-shot" src={hero.src} alt={hero.alt} width={hero.w} height={hero.h} />
        )}
        {wide.map((i) => (
          <img key={i.src} src={i.src} alt={i.alt} width={i.w} height={i.h} loading="lazy" />
        ))}
        <div className="thumbs">
          {thumbs.map((i) => (
            <img key={i.src} src={i.src} alt={i.alt} width={i.w} height={i.h} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
