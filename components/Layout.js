import Head from 'next/head'
import { projects, site } from '../data/projects'

export default function Layout({ title, description, children, active, accent }) {
  return (
    <div style={accent ? { '--accent': accent } : undefined}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>" />
      </Head>
      <header className="nav">
        <a className="brand" href="/">{site.name}</a>
        <nav>
          {projects.map((p) => (
            <a key={p.id} href={`/${p.id}`} className={active === p.id ? 'on' : undefined}>{p.name}</a>
          ))}
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>
      {children}
      <footer>
        <span>&copy; {new Date().getFullYear()} Subhash Jha</span>
        <span>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href={site.coffee} target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
        </span>
      </footer>
    </div>
  )
}
