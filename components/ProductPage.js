import Layout from './Layout'
import Reveal from './Reveal'
import CopyCommand from './CopyCommand'
import DownloadButton from './DownloadButton'
import AutoVideo from './AutoVideo'
import DockWidgets from './DockWidgets'
import ThemeTabs from './ThemeTabs'
import Clip from './Clip'
import { projects } from '../data/projects'
import { details } from '../data/details'

function Hero({ p, d }) {
  return (
    <section className="p-hero">
      <div className="p-glow" aria-hidden />
      <Reveal className="p-hero-copy">
        <a className="back" href="/">&larr; All apps</a>
        <div className="meta">
          <span className="pill">{p.platform}</span>
          <span className="pill">{p.license}</span>
          {p.stack.map((s) => <span key={s} className="pill">{s}</span>)}
        </div>
        <h1>{p.name}</h1>
        <p className="p-tag">{p.tagline}</p>
        <p className="p-desc">{p.description}</p>
        <div className="p-cta">
          {p.install ? <CopyCommand command={p.install} /> : <DownloadButton {...p.download} />}
          <div className="links">
            {p.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} &rarr;</a>)}
          </div>
        </div>
      </Reveal>
      <Reveal className="p-hero-media" delay={120}>
        {d.heroVideo || p.video ? <AutoVideo {...(d.heroVideo || p.video)} /> : <img src={p.images[0].src} alt={p.images[0].alt} width={p.images[0].w} height={p.images[0].h} />}
      </Reveal>
      <Reveal className="stats" delay={200}>
        {d.stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
        <p className="hero-note">{d.heroNote}</p>
      </Reveal>
    </section>
  )
}

function Feature({ f, p, dock }) {
  const m = f.media
  return (
    <section id={f.id} className={`feat${f.flip ? ' flip' : ''}${f.full ? ' full' : ''}`}>
      <Reveal className="feat-copy">
        <p className="kicker">{f.kicker}</p>
        <h2>{f.title}</h2>
        <p className="lede">{f.body}</p>
        {f.bullets && <ul className="ticks">{f.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
        {f.groups && (
          <dl className="groups">
            {f.groups.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        )}
      </Reveal>
      <Reveal className={`feat-media${m && m.narrow ? ' narrow' : ''}`} delay={100}>
        {m && m.type === 'phones' && (
          <div className="phones">
            {m.shots.map((s) => <img key={s.src} className="frame" src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" />)}
          </div>
        )}
        {m && m.type !== 'phones' && <img className="frame" src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" />}
        {f.clip && <Clip base={f.clip} label={f.title} size={f.clipSize} />}
        {f.widgets && (
          <div className="widget-stage" style={{ '--accent': p.accent }}>
            <DockWidgets dock={dock} placement="above" hint="Click a widget" />
          </div>
        )}
      </Reveal>
    </section>
  )
}

// The full demo, with sound: plays only when asked.
function Demo({ v }) {
  return (
    <section id="demo" className="demo-s">
      <Reveal>
        <p className="kicker">{v.kicker}</p>
        <h2>{v.title}</h2>
        <p className="lede">{v.body}</p>
      </Reveal>
      <Reveal delay={100}>
        <video className="frame demo-video" src={v.src} poster={v.poster} width={v.w} height={v.h} controls playsInline preload="none" />
      </Reveal>
    </section>
  )
}

function Install({ d, p }) {
  return (
    <section id="install" className="install">
      <Reveal>
        <p className="kicker">Install</p>
        <h2>Get {p.name}</h2>
        <div className="cmds">
          {d.install && d.install.map(([label, cmd]) => (
            <div key={cmd}><span className="cmd-label">{label}</span><CopyCommand command={cmd} /></div>
          ))}
          {d.downloads && d.downloads.map(([label, href, text, note]) => (
            <div key={href}><span className="cmd-label">{label}</span><DownloadButton href={href} label={text} note={note} /></div>
          ))}
        </div>
        <p className="muted">{d.installNote}</p>
        <div className="links big">
          {p.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} &rarr;</a>)}
          <a href="https://www.buymeacoffee.com/subhashjha" target="_blank" rel="noopener noreferrer">Buy me a coffee &rarr;</a>
        </div>
      </Reveal>
    </section>
  )
}

// The next app in the list, wrapping around.
function Other({ id }) {
  const o = projects[(projects.findIndex((x) => x.id === id) + 1) % projects.length]
  return (
    <a href={`/${o.id}`} className="other" style={{ '--accent': o.accent }}>
      <span>Also from OneSyntax</span>
      <b>{o.name}</b>
      <em>{o.tagline} &rarr;</em>
    </a>
  )
}

export function OneCastPage() {
  const p = projects.find((x) => x.id === 'onecast')
  const d = details.onecast
  const { extras } = d
  return (
    <Layout active="onecast" accent={p.accent} title="OneCast: one keystroke for everything on your Mac"
      description="A native macOS launcher, AI cockpit, custom docks with live widgets, a plain-English scheduler and a Swift plugin runtime.">
      <main className="detail">
        <Hero p={p} d={d} />
        {d.features.map((f) => <Feature key={f.id} f={f} p={p} dock={p.dock} />)}
        <section id="more" className="more">
          <Reveal>
            <p className="kicker">Launcher</p>
            <h2>{extras.title}</h2>
          </Reveal>
          <div className="duo">
            {extras.shots.map((s, i) => (
              <Reveal key={s.src} delay={i * 100}>
                <figure><img className="frame" src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" /><figcaption>{s.cap}</figcaption></figure>
              </Reveal>
            ))}
          </div>
          <div className="grid">
            {extras.grid.map(([ic, t, b], i) => (
              <Reveal key={t} className="gcard" delay={(i % 3) * 70}><span className="ic">{ic}</span><b>{t}</b><span>{b}</span></Reveal>
            ))}
          </div>
        </section>
        <section className="steps-s">
          <Reveal><p className="kicker">Quick start</p><h2>Up and running in a minute</h2></Reveal>
          <ol className="steps">
            {d.steps.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 80}><i>{i + 1}</i><b>{t}</b><span>{b}</span></Reveal>
            ))}
          </ol>
          <Reveal><p className="muted note">{d.privacy}</p></Reveal>
        </section>
        <Install d={d} p={p} />
        <Other id="onecast" />
      </main>
    </Layout>
  )
}

export function OnePaperPage() {
  const p = projects.find((x) => x.id === 'onepaper')
  const d = details.onepaper
  return (
    <Layout active="onepaper" accent={p.accent} title="OnePaper: beautiful notes for engineers"
      description="A Craft-style block editor for Mac, iPad and iPhone, made for code, math, papers and whiteboards, with 3D scenes you can present or put in a slide deck, synced through iCloud.">
      <main className="detail">
        <Hero p={p} d={d} />
        {d.demo && <Demo v={d.demo} />}
        {d.features.map((f) => <Feature key={f.id} f={f} p={p} />)}
        <section id="more" className="more">
          <Reveal><p className="kicker">Details</p><h2>And everything else</h2></Reveal>
          <div className="grid">
            {d.grid.map(([ic, t, b], i) => (
              <Reveal key={t} className="gcard" delay={(i % 3) * 70}><span className="ic">{ic}</span><b>{t}</b><span>{b}</span></Reveal>
            ))}
          </div>
        </section>
        <section className="steps-s">
          <Reveal><p className="kicker">Quick start</p><h2>Your first page in a minute</h2></Reveal>
          <ol className="steps">
            {d.steps.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 80}><i>{i + 1}</i><b>{t}</b><span>{b}</span></Reveal>
            ))}
          </ol>
          <Reveal><p className="muted note">{d.privacy}</p></Reveal>
        </section>
        <Install d={d} p={p} />
        <Other id="onepaper" />
      </main>
    </Layout>
  )
}

export function OnePromptPage() {
  const p = projects.find((x) => x.id === 'oneprompt')
  const d = details.oneprompt
  return (
    <Layout active="oneprompt" accent={p.accent} title="OnePrompt: a terminal drawn like an ink painting"
      description="A GPU-rendered terminal where text is written by hand, ink bleeds into paper, and deleted files are cut through with a sword.">
      <main className="detail">
        <Hero p={p} d={d} />
        <section id="themes" className="themes-s">
          <Reveal><p className="kicker">Themes</p><h2>Three themes, six looks</h2>
            <p className="lede">A theme is the whole look: surface texture, how ink behaves on it, palette, font, cursor, and its own animations. Each comes in a light and a dark variant.</p></Reveal>
          <Reveal delay={100}><ThemeTabs themes={d.themes} /></Reveal>
        </section>
        {d.effects.map((f) => <Feature key={f.id} f={f} p={p} />)}
        <section id="more" className="more">
          <Reveal><p className="kicker">Details</p><h2>Everything it does</h2></Reveal>
          <div className="grid">
            {d.grid.map(([ic, t, b], i) => (
              <Reveal key={t} className="gcard" delay={(i % 3) * 70}><span className="ic">{ic}</span><b>{t}</b><span>{b}</span></Reveal>
            ))}
          </div>
        </section>
        <section className="keys-s">
          <Reveal><p className="kicker">Keys</p><h2>Keys you will want</h2></Reveal>
          <Reveal className="keys" delay={80}>
            {d.keys.map(([k, v]) => <div key={k}><kbd>{k}</kbd><span>{v}</span></div>)}
          </Reveal>
        </section>
        <Install d={d} p={p} />
        <Other id="oneprompt" />
      </main>
    </Layout>
  )
}
