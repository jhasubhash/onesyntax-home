import CopyCommand from './CopyCommand'

export default function Project({ p, flip }) {
  const [hero, ...rest] = p.images
  const wide = rest.filter((i) => i.wide)
  const thumbs = rest.filter((i) => !i.wide)
  return (
    <section id={p.id} className={`project${flip ? ' flip' : ''}`} style={{ '--accent': p.accent }}>
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
        <img className="hero-shot" src={hero.src} alt={hero.alt} width={hero.w} height={hero.h} />
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
