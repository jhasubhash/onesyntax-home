# OneSyntax

Home page for my apps and projects, built with Next.js and deployed on Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
```

## Adding an app

Add an entry to `data/projects.js` and put its screenshots in `public/<id>/`. The nav, hero cards and
project section are generated from that file.

- **Install:** an app shows a copyable `install` command. Give it a `download` link instead (`{ href, label, note }`) when it isn't on Homebrew.
- **Layout:** set `flip` to choose which side its screenshots sit on. Without it, sections alternate.
- **Product page:** add its long-form content to `data/details.js`, a page component to `components/ProductPage.js`, and `pages/<id>.js`.
