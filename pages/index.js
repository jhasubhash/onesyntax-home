import { Fragment } from 'react'
import Head from 'next/head'
import Project from '../components/Project'
import DockWidgets from '../components/DockWidgets'
import { projects, site } from '../data/projects'

export default function Home() {
  const title = `${site.name}: ${site.tagline}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={site.intro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.intro} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>" />
      </Head>
      <header className="nav">
        <a className="brand" href="#top">{site.name}</a>
        <nav>
          {projects.map((p) => <a key={p.id} href={`#${p.id}`}>{p.name}</a>)}
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <p className="eyebrow">{site.name}</p>
          <h1>{site.tagline}</h1>
          <p className="intro">{site.intro}</p>
          <div className="cards">
            {projects.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="mini" style={{ '--accent': p.accent }}>
                <b>{p.name}</b>
                <span>{p.tagline}</span>
              </a>
            ))}
          </div>
        </section>
        {projects.map((p, i) => (
          <Fragment key={p.id}>
            <Project p={p} flip={i % 2 === 1} />
            {p.dock && (
              <div className="dock-divider" style={{ '--accent': p.accent }}>
                <DockWidgets dock={p.dock} placement="above" hint={p.dock.hint} />
              </div>
            )}
          </Fragment>
        ))}
      </main>
      <footer>
        <span>&copy; {new Date().getFullYear()} Subhash Jha</span>
        <span>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href={site.coffee} target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
        </span>
      </footer>
    </>
  )
}
